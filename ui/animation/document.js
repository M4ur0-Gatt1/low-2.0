/* ══════════════════════════════════════════════════════════════════════════
   DOCUMENTO DE ANIMACIÓN — el dueño del estado

   Hasta ahora cada frame era un archivo suelto en disco y navegar significaba
   abrir otro archivo (`openDesign(ruta)`). Eso hacía imposible un hold — dos
   frames con el mismo dibujo eran dos archivos — y volvía lento cualquier
   cambio de frame.

   Acá la escena entera vive en memoria como un `Scene`, y navegar es solo
   cambiar qué dibujo se muestra. El disco se toca al guardar, no al moverse.

   Reparto de responsabilidades:
     scene-model.js  qué es una escena           (datos)
     exposures.js    operaciones de timing        (datos)
     document.js     qué dibujo se está editando  (este archivo)
     app.js          pintar y escuchar eventos    (vista)

   @module animation/document
   ══════════════════════════════════════════════════════════════════════════ */
(function (global) {
  "use strict";
  const LOW = global.LOW = global.LOW || {};
  const animation = LOW.animation = LOW.animation || {};

  /** Nombres de las operaciones, para que el historial diga qué se deshace. */
  const ETIQUETAS = {
    step: "Cambiar el paso", each: "Comprimir", stepChange: "Cambiar la exposición",
    insert: "Insertar frame", clear: "Vaciar celdas", remove: "Quitar frames",
    move: "Mover exposición", repeat: "Repetir", reverse: "Invertir",
    swing: "Ida y vuelta", resetStep: "Volver a 1s", dedupe: "Sacar holds",
    autoexpose: "Sostener dibujos", fillHandle: "Estirar exposición",
  };

  class LowDoc {
    constructor(scene) {
      this.scene = scene || new animation.Scene({ fps: 24 });
      if (!this.scene.levels.length) {
        const lv = this.scene.addLevel("Nivel 1");
        this.scene.addLayer(lv.id, "Capa 1");
      }
      this.frame = 1;
      this.layerId = this.scene.layers[0] ? this.scene.layers[0].id : null;
      this.dirty = false;
      this.listeners = new Set();
      this.cellSelection = null;
      this.path = null;            // archivo .lowscene, si ya se guardó
      this.onionCfg = animation.onion ? animation.onion.config() : {};
    }

    // ── estado actual ────────────────────────────────────────────────────
    get layer() { return this.scene.layer(this.layerId); }
    get level() { const ly = this.layer; return ly ? this.scene.level(ly.levelId) : null; }
    /** El dibujo que se está editando ahora. */
    get drawing() { return this.scene.drawingAt(this.layerId, this.frame); }
    /** Número de dibujo en la celda actual (null si está vacía). */
    get cell() { const ly = this.layer; return ly ? ly.cellAt(this.frame) : null; }

    // ── historial ────────────────────────────────────────────────────────
    /** Historial compartido con el resto del editor (LOW.core.HistoryManager).
     *  Es UNA sola pila: así Ctrl+Z deshace lo último que hiciste, sea un trazo
     *  o un cambio de timing, en el orden real en que pasaron las cosas. */
    setHistory(h) { this.history = h; return this; }

    /** Registra un cambio de CELDAS de una capa. Guarda el array de celdas —
     *  números, nada pesado — antes y después. */
    _histCells(label, layerId, antes) {
      if (!this.history) return;
      const ly = this.scene.layer(layerId);
      if (!ly) return;
      const despues = ly.cells.slice();
      if (JSON.stringify(antes) === JSON.stringify(despues)) return;   // no pasó nada
      const doc = this;
      this.history.push({
        label, domain: "anim", before: antes, after: despues,
        apply: (_dir, valor) => {
          const capa = doc.scene.layer(layerId);
          if (!capa || !valor) return;
          capa.cells = valor.slice();
          doc.emit("cells");
          const d = doc.drawing;
          doc.emit("frame");
          void d;
        },
      });
    }

    /** Registra un cambio de CONTENIDO de un dibujo. */
    _histDrawing(label, levelId, number, antes, despues) {
      if (!this.history || antes === despues) return;
      const doc = this;
      this.history.push({
        label, domain: "anim", before: antes, after: despues,
        apply: (_dir, valor) => {
          const lv = doc.scene.level(levelId);
          const d = lv && lv.byNumber(number);
          if (!d) return;
          d.content = valor || "";
          doc.emit("content");
          doc.emit("frame");     // que el lienzo vuelva a pintar lo que corresponde
        },
      });
    }

    /** Registra una operacion atomica que afecta varias columnas y, si hace
     * falta, los dibujos de sus niveles. Es la base de rangos, pegado y drop. */
    _histRange(label, before, after) {
      if (!this.history || JSON.stringify(before) === JSON.stringify(after)) return;
      const doc = this;
      const restore = (snap) => {
        for (const item of snap.layers || []) {
          const ly = doc.scene.layer(item.id);
          if (ly) ly.cells = item.cells.slice();
        }
        for (const item of snap.levels || []) {
          const lv = doc.scene.level(item.id);
          if (!lv) continue;
          lv.drawings = item.drawings.map((d) => new animation.Drawing(d));
        }
        doc.touch(); doc.emit("cells"); doc.emit("level"); doc.emit("frame");
      };
      this.history.push({ label, domain: "anim", before, after,
        apply: (_dir, value) => restore(value) });
    }

    _snapshot(layerIds, levelIds) {
      return {
        layers: [...new Set(layerIds || [])].map((id) => this.scene.layer(id)).filter(Boolean)
          .map((ly) => ({ id: ly.id, cells: ly.cells.slice() })),
        levels: [...new Set(levelIds || [])].map((id) => this.scene.level(id)).filter(Boolean)
          .map((lv) => ({ id: lv.id, drawings: lv.drawings.map((d) => d.toJSON()) })),
      };
    }

    subscribe(fn) { this.listeners.add(fn); return () => this.listeners.delete(fn); }
    emit(motivo) { this.listeners.forEach((fn) => { try { fn(this, motivo); } catch (_) { /* un oyente roto no frena al resto */ } }); }
    touch() { this.dirty = true; this.scene.touch(); return this; }

    /** Cambia la resolución lógica del archivo. El tamaño del panel o monitor
     *  jamás llama a este método: esas variaciones pertenecen al zoom. */
    setSize(width, height, { history = true } = {}) {
      const before = { width: this.scene.width, height: this.scene.height };
      if (!this.scene.setSize(width, height)) return false;
      const after = { width: this.scene.width, height: this.scene.height };
      this.dirty = true; this.emit("document");
      if (history && this.history) {
        const doc = this;
        this.history.push({ label: "Cambiar tamaño del documento", domain: "document",
          before, after, apply: (_direction, value) => {
            doc.scene.setSize(value.width, value.height);
            doc.dirty = true; doc.emit("document");
          } });
      }
      return true;
    }

    // ── navegación ───────────────────────────────────────────────────────
    goTo(frame) {
      const f = Math.max(1, Math.round(frame) || 1);
      if (f === this.frame) return this.frame;
      this.frame = f;
      this.emit("frame");
      return f;
    }
    /** Frame siguiente/anterior (uno a uno). */
    step(delta) { return this.goTo(this.frame + delta); }
    /** Dibujo siguiente/anterior, salteando los holds (Shift+↑/↓). */
    stepDrawing(dir) {
      const ly = this.layer;
      if (!ly) return this.frame;
      const f = animation.exposures.nextDrawingFrame(ly, this.frame, dir >= 0 ? 1 : -1);
      return f == null ? this.frame : this.goTo(f);
    }
    selectLayer(id) { if (this.scene.layer(id)) { this.layerId = id; this.emit("layer"); } }

    selectCellRange(aLayer, aFrame, bLayer, bFrame) {
      const layers = this.scene.layers;
      const ai = layers.findIndex((l) => l.id === aLayer), bi = layers.findIndex((l) => l.id === bLayer);
      if (ai < 0 || bi < 0) return null;
      const left = Math.min(ai, bi), right = Math.max(ai, bi);
      return this.cellSelection = { anchorLayerId: aLayer, anchorFrame: aFrame,
        fromLayerId: layers[left].id, toLayerId: layers[right].id,
        from: Math.min(aFrame, bFrame), to: Math.max(aFrame, bFrame) };
    }

    setLayerProperty(id, key, value, label) {
      const ly = this.scene.layer(id);
      if (!ly || !["name", "visible", "locked", "opacity", "z"].includes(key)) return false;
      const before = ly[key];
      if (before === value) return false;
      ly[key] = value; this.touch(); this.emit("layers");
      if (this.history) {
        const doc = this;
        this.history.push({ label: label || "Cambiar capa", domain: "anim", before, after: value,
          apply: (_dir, next) => { const layer = doc.scene.layer(id); if (!layer) return;
            layer[key] = next; doc.touch(); doc.emit("layers"); doc.emit("frame"); } });
      }
      return true;
    }

    // ── edición ──────────────────────────────────────────────────────────
    /** Asegura que haya un dibujo en la celda actual y lo devuelve. Si la celda
     *  está vacía crea uno nuevo: empezar a dibujar en un frame vacío tiene que
     *  funcionar sin ceremonia. */
    ensureDrawing() {
      const ly = this.layer, lv = this.level;
      if (!ly || !lv || ly.locked) return null;
      let num = ly.cellAt(this.frame);
      if (num == null) {
        num = lv.nextNumber();
        lv.addDrawing(num, "");
        ly.setCell(this.frame, num);
        this.touch();
        this.emit("cells");
      }
      return lv.byNumber(num);
    }
    /** Guarda el contenido dibujado en el dibujo actual. */
    writeDrawing(contenido) {
      const lyAntes = this.layer ? this.layer.cells.slice() : null;
      const habia = this.cell != null;
      const d = this.ensureDrawing();
      if (!d) return false;
      const antes = d.content;
      d.content = contenido || "";
      this.touch();
      this.emit("content");
      // si la celda estaba vacía, el dibujo se acaba de crear: eso también
      // tiene que poder deshacerse
      if (!habia && lyAntes) this._histCells("Dibujar en un frame vacío", this.layerId, lyAntes);
      this._histDrawing("Dibujar", this.layer && this.layer.levelId, d.number, antes, d.content);
      return true;
    }
    /** Expone un número de dibujo en la celda (escribirlo en la xsheet). */
    setCell(frame, drawingNumber, layerId) {
      const id = layerId || this.layerId;
      const ly = this.scene.layer(id);
      const antes = ly ? ly.cells.slice() : null;
      const ok = this.scene.expose(id, frame, drawingNumber);
      if (ok) {
        this.touch(); this.emit("cells");
        if (antes) this._histCells("Exponer dibujo", id, antes);
      }
      return ok;
    }
    /** Aplica una operación de `exposures` sobre la capa actual y avisa. */
    apply(op, ...args) {
      const ly = this.layer;
      const fn = animation.exposures[op];
      if (!ly || typeof fn !== "function") return false;
      const antes = ly.cells.slice();
      const ok = fn(ly, ...args);
      if (ok) {
        this.touch(); this.emit("cells");
        this._histCells(ETIQUETAS[op] || "Cambiar exposición", ly.id, antes);
      }
      return ok;
    }

    /** Lee un rectangulo de la XSheet. Las coordenadas son inclusivas. */
    readCells(range) {
      const layers = this.scene.layers;
      const a = Math.max(0, layers.findIndex((l) => l.id === range.fromLayerId));
      const b0 = layers.findIndex((l) => l.id === range.toLayerId);
      const b = b0 < 0 ? a : b0;
      const left = Math.min(a, b), right = Math.max(a, b);
      const from = Math.max(1, Math.min(range.from, range.to));
      const to = Math.max(from, Math.max(range.from, range.to));
      return {
        width: right - left + 1, height: to - from + 1,
        columns: layers.slice(left, right + 1).map((ly) => {
          const lv = this.scene.level(ly.levelId);
          const cells = animation.exposures.read(ly, from, to);
          const used = new Set(cells.filter((n) => n != null));
          return { levelId: ly.levelId, cells,
            drawings: lv ? lv.drawings.filter((d) => used.has(d.number)).map((d) => d.toJSON()) : [] };
        }),
      };
    }

    clearCells(range, label) {
      const layers = this.scene.layers;
      const a = layers.findIndex((l) => l.id === range.fromLayerId);
      const b = layers.findIndex((l) => l.id === range.toLayerId);
      if (a < 0 || b < 0) return false;
      const selected = layers.slice(Math.min(a, b), Math.max(a, b) + 1);
      const before = this._snapshot(selected.map((l) => l.id), []);
      const from = Math.max(1, Math.min(range.from, range.to));
      const to = Math.max(from, Math.max(range.from, range.to));
      selected.forEach((ly) => { if (!ly.locked) animation.exposures.clear(ly, from, to); });
      this.touch(); this.emit("cells");
      this._histRange(label || "Vaciar rango", before, this._snapshot(selected.map((l) => l.id), []));
      return true;
    }

    /** Pega una matriz desde su esquina superior izquierda. Cada columna se
     * adapta al nivel de destino: conserva numeros libres y remapea colisiones
     * sin perder ni sobrescribir dibujos existentes. */
    pasteCells(clip, startLayerId, startFrame, options) {
      if (!clip || !clip.columns || !clip.columns.length) return false;
      const opts = options || {};
      const layers = this.scene.layers;
      const start = layers.findIndex((l) => l.id === startLayerId);
      if (start < 0) return false;
      const targets = layers.slice(start, start + clip.columns.length);
      if (!targets.length) return false;
      const layerIds = targets.map((l) => l.id), levelIds = targets.map((l) => l.levelId);
      const before = this._snapshot(layerIds, levelIds);
      const frame = Math.max(1, Math.round(startFrame) || 1);
      targets.forEach((ly, ci) => {
        if (ly.locked) return;
        const source = clip.columns[ci], lv = this.scene.level(ly.levelId);
        if (!source || !lv) return;
        const remap = new Map();
        for (const drawing of source.drawings || []) {
          const existing = lv.byNumber(drawing.number);
          if (!existing) { lv.drawings.push(new animation.Drawing(drawing)); remap.set(drawing.number, drawing.number); }
          else if (existing.content === drawing.content) remap.set(drawing.number, drawing.number);
          else { const n = lv.nextNumber(); lv.addDrawing(n, drawing.content); remap.set(drawing.number, n); }
        }
        const values = (source.cells || []).map((n) => n == null ? null : (remap.get(n) || n));
        if (opts.insert) animation.exposures.insert(ly, frame, values.length);
        animation.exposures.write(ly, frame, values);
      });
      this.touch(); this.emit("cells"); this.emit("level");
      this._histRange(opts.label || "Pegar rango", before, this._snapshot(layerIds, levelIds));
      return true;
    }

    exposeDrawings(levelId, numbers, targetLayerId, startFrame, options) {
      const lv = this.scene.level(levelId);
      const list = (numbers || []).map(Number).filter((n) => lv && lv.byNumber(n));
      if (!lv || !list.length) return false;
      return this.pasteCells({ columns: [{ levelId, cells: list,
        drawings: list.map((n) => lv.byNumber(n).toJSON()) }] },
        targetLayerId, startFrame, { insert: !!(options && options.insert), label: "Exponer dibujos" });
    }
    // ── operaciones sobre DIBUJOS (el material, no el tiempo) ────────────
    /** Duplica un dibujo con número nuevo. Es lo que se hace para partir de una
     *  pose y modificarla, en vez de dibujar de cero. */
    duplicateDrawing(number) {
      const lv = this.level;
      const src = lv && lv.byNumber(number);
      if (!src) return null;
      const n = lv.nextNumber();
      const nuevo = lv.addDrawing(n, src.content);
      this.touch(); this.emit("level");
      if (this.history) {
        const doc = this;
        this.history.push({
          label: "Duplicar dibujo", domain: "anim", before: null, after: n,
          apply: (dir) => {
            const l = doc.scene.level(lv.id);
            if (!l) return;
            if (dir === "undo") l.removeDrawing(n);
            else l.addDrawing(n, src.content);
            doc.emit("level"); doc.emit("frame");
          },
        });
      }
      return nuevo;
    }

    /** Cambia el número de un dibujo y arrastra sus exposiciones: renumerar no
     *  puede dejar celdas apuntando a un dibujo que ya no existe. */
    renumberDrawing(from, to) {
      const lv = this.level;
      if (!lv || lv.byNumber(to)) return false;      // destino ocupado
      if (!lv.renumber(from, to)) return false;
      const cambios = [];
      for (const ly of this.scene.layers) {
        if (ly.levelId !== lv.id) continue;
        const antes = ly.cells.slice();
        ly.cells = ly.cells.map((c) => (c === from ? to : c));
        cambios.push({ id: ly.id, antes, despues: ly.cells.slice() });
      }
      this.touch(); this.emit("cells"); this.emit("level");
      if (this.history) {
        const doc = this;
        this.history.push({
          label: "Renumerar dibujo", domain: "anim", before: from, after: to,
          apply: (dir) => {
            const l = doc.scene.level(lv.id);
            if (!l) return;
            l.renumber(dir === "undo" ? to : from, dir === "undo" ? from : to);
            for (const c of cambios) {
              const capa = doc.scene.layer(c.id);
              if (capa) capa.cells = (dir === "undo" ? c.antes : c.despues).slice();
            }
            doc.emit("cells"); doc.emit("level"); doc.emit("frame");
          },
        });
      }
      return true;
    }

    /** Borra un dibujo del nivel Y vacía las celdas que lo exponían. Es la
     *  única operación que SÍ destruye un dibujo, y por eso es explícita. */
    deleteDrawing(number) {
      const lv = this.level;
      const d = lv && lv.byNumber(number);
      if (!d) return false;
      const copia = { number: d.number, content: d.content, name: d.name };
      const cambios = [];
      for (const ly of this.scene.layers) {
        if (ly.levelId !== lv.id) continue;
        const antes = ly.cells.slice();
        ly.cells = ly.cells.map((c) => (c === number ? null : c));
        cambios.push({ id: ly.id, antes, despues: ly.cells.slice() });
      }
      lv.removeDrawing(number);
      this.touch(); this.emit("cells"); this.emit("level");
      if (this.history) {
        const doc = this;
        this.history.push({
          label: "Borrar dibujo", domain: "anim", before: copia, after: null,
          apply: (dir) => {
            const l = doc.scene.level(lv.id);
            if (!l) return;
            if (dir === "undo") { const nd = l.addDrawing(copia.number, copia.content); nd.name = copia.name; }
            else l.removeDrawing(copia.number);
            for (const c of cambios) {
              const capa = doc.scene.layer(c.id);
              if (capa) capa.cells = (dir === "undo" ? c.antes : c.despues).slice();
            }
            doc.emit("cells"); doc.emit("level"); doc.emit("frame");
          },
        });
      }
      return true;
    }

    /** Primer frame donde se expone un dibujo (para saltar a él desde la tira). */
    frameOfDrawing(number) {
      const ly = this.layer;
      if (!ly) return null;
      const total = ly.lastFrame();
      for (let f = 1; f <= total; f++) if (ly.cellAt(f) === number) return f;
      return null;
    }

    addLayer(nombre) {
      const lv = this.scene.addLevel(nombre || `Nivel ${this.scene.levels.length + 1}`);
      const ly = this.scene.addLayer(lv.id, nombre || `Capa ${this.scene.layers.length + 1}`);
      this.layerId = ly.id;
      this.touch(); this.emit("layers");
      if (this.history) {
        const doc = this, levelData = lv.toJSON(), layerData = ly.toJSON();
        this.history.push({ label: "Agregar capa", domain: "anim", before: null, after: layerData,
          apply: (dir) => {
            if (dir === "undo") {
              doc.scene.layers = doc.scene.layers.filter((x) => x.id !== layerData.id);
              doc.scene.levels = doc.scene.levels.filter((x) => x.id !== levelData.id);
              doc.layerId = doc.scene.layers[0] ? doc.scene.layers[0].id : null;
            } else {
              if (!doc.scene.level(levelData.id)) doc.scene.levels.push(new animation.Level(levelData));
              if (!doc.scene.layer(layerData.id)) doc.scene.layers.push(new animation.Layer(layerData));
              doc.layerId = layerData.id;
            }
            doc.touch(); doc.emit("layers"); doc.emit("frame");
          } });
      }
      return ly;
    }

    // ── rig canónico ────────────────────────────────────────────────────
    _ensureRigBoneRecord(rig, data) {
      const id = data.id;
      if (!rig.bones[id]) rig.bones[id] = { id, type: "bone", name: data.name || id,
        parentId: data.parentId || null,
        pivot: data.pivot ? { x: +data.pivot.x || 0, y: +data.pivot.y || 0 } : null,
        rest: data.rest || { x: 0, y: 0, r: 0, sx: 1, sy: 1 }, keys: {},
        pinned: !!data.pinned, inherit: { translation: true, rotation: true, scale: true },
        limits: data.limits || { min: -180, max: 180 } };
      const bone = rig.bones[id];
      if (data.name) bone.name = data.name;
      if (data.inherit) bone.inherit = { ...bone.inherit, ...data.inherit };
      rig.nodes = rig.bones;
      return bone;
    }

    _ensureRigArtLink(rig, data) {
      const id = data.id, elementId = data.elementId || id;
      const bone = this._ensureRigBoneRecord(rig, data);
      bone.elementId = elementId;
      bone.binding = { mode: data.binding?.mode || bone.binding?.mode || "rigid", elementId };
      const slotId = data.slotId || `slot:${id}`, attachmentId = data.attachmentId || `attachment:${id}`,
        bindingId = data.bindingId || `binding:${id}`;
      rig.slots[slotId] ||= { id: slotId, name: data.name || id, boneId: id,
        drawOrder: Object.keys(rig.slots).length, activeAttachmentId: attachmentId, visible: true };
      rig.attachments[attachmentId] ||= { id: attachmentId, slotId, type: "drawing", elementId,
        name: data.name || id, levelId: data.levelId || null, drawingNumber: data.drawingNumber ?? null };
      rig.bindings[bindingId] ||= { id: bindingId, mode: bone.binding.mode, boneId: id,
        slotId, attachmentId, elementId };
      rig.nodes = rig.bones;
      return bone;
    }

    _syncRigPoseChannels(rig, id, keys) {
      for (const property of ["x", "y", "r", "sx", "sy"]) {
        const path = animation.rigChannelPath(id, property), values = {};
        for (const [frame, pose] of Object.entries(keys || {})) {
          const sx = pose.sx == null ? (pose.s == null ? 1 : +pose.s) : +pose.sx;
          const sy = pose.sy == null ? (pose.s == null ? 1 : +pose.s) : +pose.sy;
          values[frame] = property === "sx" ? sx : property === "sy" ? sy : (+pose[property] || 0);
        }
        if (Object.keys(values).length) rig.channels[path] = animation.rigChannelData(path,
          { ...(rig.channels[path] || {}), keys: values });
        else delete rig.channels[path];
      }
    }

    _rigChange(label, mutate) {
      const before = animation.rigToJSON(this.scene.rig);
      const result = mutate(this.scene.rig);
      this.scene.rig.nodes = this.scene.rig.bones;
      this.scene.rig.diagnostics = animation.rigDiagnostics(this.scene.rig);
      const after = animation.rigToJSON(this.scene.rig);
      if (JSON.stringify(before) === JSON.stringify(after)) return result;
      this.touch(); this.emit("rig"); this.emit("frame");
      if (this.history) {
        const doc = this;
        this.history.push({ label, domain: "rig", before, after,
          apply: (_dir, value) => {
            doc.scene.rig = animation.rigData(value);
            doc.touch(); doc.emit("rig"); doc.emit("frame");
          } });
      }
      return result;
    }

    ensureRigBone(id, data = {}) {
      if (!id) return null;
      return this._rigChange("Crear hueso", (rig) => this._ensureRigBoneRecord(rig, { ...data, id }));
    }

    ensureRigNode(id, data = {}) {
      if (!id) return null;
      return this._rigChange("Crear nodo de rig", (rig) => {
        return this._ensureRigArtLink(rig, { ...data, id });
      });
    }

    /** Registra varias piezas como una sola operación. Además de evitar
     * repintados intermedios, hace que Preparar dibujo tenga un único Undo. */
    ensureRigNodes(items, label = "Preparar rig") {
      const entries = (items || []).filter((item) => item && item.id);
      if (!entries.length) return [];
      return this._rigChange(label, (rig) => {
        const created = new Set();
        for (const data of entries) {
          if (!rig.bones[data.id]) created.add(data.id);
          const node = this._ensureRigArtLink(rig, data);
          if (!node.pivot && data.pivot) node.pivot = { x: +data.pivot.x || 0, y: +data.pivot.y || 0 };
        }
        for (const data of entries) {
          const node = rig.nodes[data.id];
          if (!node || (!created.has(data.id) && !data.reparent)) continue;
          node.parentId = data.parentId && data.parentId !== data.id && rig.nodes[data.parentId]
            ? data.parentId : null;
          if (data.pinned != null) node.pinned = !!data.pinned;
        }
        return entries.map((entry) => entry.id);
      });
    }

    setRigKey(id, frame, pose) {
      if (!id) return false;
      return this._rigChange("Crear clave de rig", (rig) => {
        const node = rig.nodes[id] || this._ensureRigArtLink(rig, { id });
        const sx = pose.sx == null ? (pose.s == null ? 1 : +pose.s) : +pose.sx;
        const sy = pose.sy == null ? (pose.s == null ? 1 : +pose.s) : +pose.sy;
        node.keys[Math.max(1, Math.round(frame))] = { x: +pose.x || 0, y: +pose.y || 0,
          r: +pose.r || 0, sx, sy };
        this._syncRigPoseChannels(rig, id, node.keys);
        return true;
      });
    }

    replaceRigKeys(id, keys, label = "Editar claves de rig") {
      if (!id) return false;
      return this._rigChange(label, (rig) => {
        const node = rig.nodes[id] || this._ensureRigArtLink(rig, { id });
        node.keys = animation.clone(keys || {});
        this._syncRigPoseChannels(rig, id, node.keys); return true;
      });
    }

    deleteRigKey(id, frame) {
      return this._rigChange("Borrar clave de rig", (rig) => {
        const node = rig.nodes[id]; if (!node || !node.keys[frame]) return false;
        delete node.keys[frame]; this._syncRigPoseChannels(rig, id, node.keys); return true;
      });
    }

    setRigParent(id, parentId) {
      return this._rigChange("Cambiar jerarquía del rig", (rig) => {
        const node = rig.nodes[id], parent = parentId && rig.nodes[parentId];
        if (!node || (parentId && !parent) || id === parentId) return false;
        let p = parent;
        while (p) { if (p.id === id) return false; p = p.parentId && rig.nodes[p.parentId]; }
        node.parentId = parentId || null; return true;
      });
    }

    setRigPivot(id, pivot) {
      return this._rigChange("Cambiar pivote del rig", (rig) => {
        const node = rig.nodes[id]; if (!node) return false;
        node.pivot = pivot ? { x: +pivot.x || 0, y: +pivot.y || 0 } : null; return true;
      });
    }

    removeRigNode(id) {
      return this._rigChange("Quitar pieza del rig", (rig) => {
        if (!rig.nodes[id]) return false;
        delete rig.nodes[id];
        Object.values(rig.nodes).forEach((node) => { if (node.parentId === id) node.parentId = null; });
        for (const [slotId, slot] of Object.entries(rig.slots || {})) if (slot.boneId === id) {
          for (const [attachmentId, attachment] of Object.entries(rig.attachments || {}))
            if (attachment.slotId === slotId) delete rig.attachments[attachmentId];
          delete rig.slots[slotId];
        }
        for (const [bindingId, binding] of Object.entries(rig.bindings || {}))
          if (binding.boneId === id || !rig.slots[binding.slotId] || !rig.attachments[binding.attachmentId])
            delete rig.bindings[bindingId];
        for (const path of Object.keys(rig.channels || {}))
          if (path.startsWith(`bones/${encodeURIComponent(id)}/`)) delete rig.channels[path];
        for (const [constraintId, c] of Object.entries(rig.constraints || {}))
          if ([c.rootId, c.midId, c.effectorId, c.targetBoneId, ...(c.reads || []), ...(c.writes || [])].includes(id)) {
            delete rig.constraints[constraintId];
            rig.constraintOrder = rig.constraintOrder.filter((entry) => entry !== constraintId);
          }
        return true;
      });
    }

    setRigPinned(id, pinned) {
      return this._rigChange(pinned ? "Fijar pieza del rig" : "Liberar pieza del rig", (rig) => {
        const node = rig.nodes[id]; if (!node) return false;
        node.pinned = !!pinned; return true;
      });
    }

    setRigLimits(id, min, max) {
      return this._rigChange("Cambiar límites del hueso", (rig) => {
        const node = rig.nodes[id]; if (!node) return false;
        const lo = Math.max(-360, Math.min(360, +min || 0));
        const hi = Math.max(-360, Math.min(360, +max || 0));
        node.limits = { min: Math.min(lo, hi), max: Math.max(lo, hi) }; return true;
      });
    }

    ensureRigSlot(boneId, data = {}) {
      if (!boneId || !this.scene.rigNode(boneId)) return false;
      return this._rigChange("Crear slot del rig", (rig) => {
        const id = data.id || `slot:${boneId}`;
        rig.slots[id] ||= { id, name: data.name || id, boneId,
          drawOrder: Number.isFinite(+data.drawOrder) ? +data.drawOrder : Object.keys(rig.slots).length,
          activeAttachmentId: null, visible: data.visible !== false };
        return id;
      });
    }

    addRigAttachment(slotId, data = {}) {
      if (!this.scene.rigSlot(slotId)) return false;
      return this._rigChange("Agregar sustitución del rig", (rig) => {
        const id = data.id || `attachment:${slotId}:${Object.keys(rig.attachments).length + 1}`;
        if (rig.attachments[id]) return id;
        rig.attachments[id] = { id, slotId, type: data.type || "drawing",
          name: data.name || id, elementId: data.elementId || null,
          levelId: data.levelId || null, drawingNumber: data.drawingNumber ?? null,
          meta: animation.clone(data.meta || {}) };
        if (!rig.slots[slotId].activeAttachmentId) rig.slots[slotId].activeAttachmentId = id;
        return id;
      });
    }

    setRigBinding(data = {}) {
      return this._rigChange("Vincular arte al rig", (rig) => {
        const bone = rig.bones[data.boneId], slot = rig.slots[data.slotId],
          attachment = rig.attachments[data.attachmentId];
        if (!bone || !slot || !attachment || slot.boneId !== bone.id || attachment.slotId !== slot.id) return false;
        const allowed = new Set(["rigid", "weightedMesh", "curve", "envelope", "warp"]);
        const mode = allowed.has(data.mode) ? data.mode : "rigid";
        const id = data.id || `binding:${attachment.id}`;
        rig.bindings[id] = { ...animation.clone(data), id, mode, boneId: bone.id,
          slotId: slot.id, attachmentId: attachment.id, elementId: attachment.elementId || null };
        return id;
      });
    }

    setRigActiveAttachment(slotId, attachmentId) {
      return this._rigChange("Cambiar sustitución del rig", (rig) => {
        const slot = rig.slots[slotId], attachment = rig.attachments[attachmentId];
        if (!slot || !attachment || attachment.slotId !== slotId) return false;
        slot.activeAttachmentId = attachmentId; return true;
      });
    }

    setRigSlotOrder(slotIds) {
      return this._rigChange("Cambiar orden visual del rig", (rig) => {
        const requested = [...new Set(slotIds || [])];
        if (requested.length !== Object.keys(rig.slots).length || requested.some((id) => !rig.slots[id])) return false;
        requested.forEach((id, index) => { rig.slots[id].drawOrder = index; });
        return true;
      });
    }

    setRigChannelKey(path, frame, value, data = {}) {
      if (!path) return false;
      return this._rigChange(data.label || "Crear clave de propiedad", (rig) => {
        const f = Math.max(1, Math.round(frame));
        const match = /^bones\/([^/]+)\/pose\/(x|y|r|sx|sy)$/.exec(path);
        const node = match ? rig.bones[decodeURIComponent(match[1])] : null;
        if (match && !node) return false;
        rig.channels[path] ||= animation.rigChannelData(path, data);
        rig.channels[path].keys[f] = animation.clone(value);
        if (match) {
          const id = decodeURIComponent(match[1]), property = match[2];
          node.keys[f] ||= animation.clone(this.scene.rigPose(id, f));
          node.keys[f][property] = +value || 0;
        }
        return true;
      });
    }

    upsertRigConstraint(data = {}) {
      if (!data.id) return false;
      return this._rigChange(data.label || "Editar constraint del rig", (rig) => {
        const previous = rig.constraints[data.id], previousOrder = [...rig.constraintOrder];
        rig.constraints[data.id] = animation.rigConstraintData(data.id, data,
          previous ? previous.order : rig.constraintOrder.length);
        if (!rig.constraintOrder.includes(data.id)) rig.constraintOrder.push(data.id);
        rig.constraintOrder.sort((a, b) => rig.constraints[a].order - rig.constraints[b].order || a.localeCompare(b));
        if (animation.rigConstraintHasCycle(rig)) {
          if (previous) rig.constraints[data.id] = previous; else delete rig.constraints[data.id];
          rig.constraintOrder = previousOrder; return false;
        }
        return data.id;
      });
    }

    setRigConstraintOrder(ids) {
      return this._rigChange("Ordenar constraints del rig", (rig) => {
        const order = [...new Set(ids || [])];
        if (order.length !== Object.keys(rig.constraints).length || order.some((id) => !rig.constraints[id])) return false;
        rig.constraintOrder = order;
        order.forEach((id, index) => { rig.constraints[id].order = index; });
        return true;
      });
    }

    setRigPoseKeys(poses, frame, label = "Clavar pose del rig") {
      const f = Math.max(1, Math.round(frame));
      return this._rigChange(label, (rig) => {
        let changed = false;
        for (const [id, pose] of Object.entries(poses || {})) {
          const node = rig.nodes[id]; if (!node) continue;
          const sx = pose.sx == null ? (pose.s == null ? 1 : +pose.s) : +pose.sx;
          const sy = pose.sy == null ? (pose.s == null ? 1 : +pose.s) : +pose.sy;
          node.keys[f] = { x: +pose.x || 0, y: +pose.y || 0, r: +pose.r || 0, sx, sy };
          this._syncRigPoseChannels(rig, id, node.keys);
          changed = true;
        }
        return changed;
      });
    }

    deleteRigPoseKeys(ids, frame, label = "Borrar pose global del rig") {
      const f = Math.max(1, Math.round(frame)), wanted = new Set(ids || Object.keys(this.scene.rig.nodes));
      return this._rigChange(label, (rig) => {
        let changed = false;
        for (const [id, node] of Object.entries(rig.nodes)) {
          if (wanted.has(id) && node.keys && node.keys[f]) {
            delete node.keys[f]; this._syncRigPoseChannels(rig, id, node.keys); changed = true;
          }
        }
        for (const c of Object.values(rig.constraints || {})) {
          if (c.targetKeys && c.targetKeys[f]) { delete c.targetKeys[f]; changed = true; }
        }
        return changed;
      });
    }

    createRigIK(rootId, midId, effectorId, data = {}) {
      const effector = this.scene.rigNode(effectorId);
      const initialTarget = data.target || (effector && effector.pivot
        ? this.scene.rigWorldPoint(effectorId, this.frame, effector.pivot) : null);
      return this._rigChange("Crear cadena IK", (rig) => {
        const root = rig.nodes[rootId], mid = rig.nodes[midId], end = rig.nodes[effectorId];
        if (!root || !mid || !end || mid.parentId !== rootId || end.parentId !== midId ||
            !root.pivot || !mid.pivot || !end.pivot) return false;
        rig.constraints = rig.constraints || {};
        const id = data.id || `ik_${rootId}_${effectorId}`;
        rig.constraints[id] = { id, type: "ik2", rootId, midId, effectorId,
          enabled: true, bend: data.bend === -1 ? -1 : 1,
          mix: 1, order: rig.constraintOrder.length, reads: [], writes: [rootId, midId], dependsOn: [],
          target: initialTarget || { x: end.pivot.x, y: end.pivot.y }, targetKeys: {} };
        if (!rig.constraintOrder.includes(id)) rig.constraintOrder.push(id);
        return id;
      });
    }

    deleteRigConstraint(id) {
      return this._rigChange("Borrar cadena IK", (rig) => {
        if (!rig.constraints || !rig.constraints[id]) return false;
        delete rig.constraints[id];
        rig.constraintOrder = rig.constraintOrder.filter((entry) => entry !== id); return true;
      });
    }

    setRigIKBend(id, bend) {
      return this._rigChange("Invertir flexión IK", (rig) => {
        const c = rig.constraints && rig.constraints[id]; if (!c) return false;
        c.bend = bend === -1 ? -1 : 1; return true;
      });
    }

    setRigIKTarget(id, frame, target) {
      const solved = this.scene.rigSolveIK(id, frame, target);
      if (!solved) return false;
      const f = Math.max(1, Math.round(frame));
      return this._rigChange("Posar cadena IK", (rig) => {
        const c = rig.constraints && rig.constraints[id]; if (!c) return false;
        c.targetKeys = c.targetKeys || {};
        c.targetKeys[f] = { x: solved.target.x, y: solved.target.y };
        for (const [nodeId, pose] of Object.entries(solved.poses)) {
          const node = rig.nodes[nodeId]; if (!node) continue;
          node.keys[f] = { x: +pose.x || 0, y: +pose.y || 0, r: +pose.r || 0,
            sx: pose.sx == null ? 1 : +pose.sx, sy: pose.sy == null ? 1 : +pose.sy };
          this._syncRigPoseChannels(rig, nodeId, node.keys);
        }
        return true;
      });
    }

    // ── serialización ────────────────────────────────────────────────────
    toJSON() {
      return { format: "lowscene", version: 1, savedAt: new Date().toISOString(),
               frame: this.frame, layerId: this.layerId, scene: this.scene.toJSON(),
               // la ONDA se guarda con la escena: así se sigue viendo al
               // reabrir aunque el archivo de audio no esté a mano, y no hay
               // que volver a decodificarlo
               audio: this.audio ? this.audio.toJSON() : null,
               onion: this.onionCfg ? JSON.parse(JSON.stringify(this.onionCfg)) : null };
    }
    static fromJSON(data) {
      const d = (typeof data === "string") ? JSON.parse(data) : data;
      if (!d || d.format !== "lowscene") throw new Error("El archivo no es una escena de LOW");
      const doc = new LowDoc(new animation.Scene(d.scene));
      doc.frame = Math.max(1, Number(d.frame) || 1);
      if (d.layerId && doc.scene.layer(d.layerId)) doc.layerId = d.layerId;
      if (d.audio && animation.AudioTrack) {
        doc.audio = new animation.AudioTrack(doc).fromJSON(d.audio);
      }
      if (d.onion) doc.onionCfg = animation.onion ? animation.onion.config(d.onion) : d.onion;
      doc.dirty = false;
      return doc;
    }
    /** Migra una animación vieja (lista de archivos + su contenido) al modelo.
     *  Cada archivo pasa a ser un dibujo numerado, expuesto un frame cada uno:
     *  se ve igual que antes, pero ya se le pueden hacer holds. */
    static fromLegacy(frames, contents, fps, nombre) {
      const sc = animation.Scene.fromLegacy({ frames, contents: contents || {}, fps: fps || 12, name: nombre });
      const doc = new LowDoc(sc);
      doc.dirty = true;
      return doc;
    }
  }

  animation.LowDoc = LowDoc;
})(window);
