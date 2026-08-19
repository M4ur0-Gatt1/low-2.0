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
      this.path = null;            // archivo .lowscene, si ya se guardó
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
      return ly;
    }

    // ── serialización ────────────────────────────────────────────────────
    toJSON() {
      return { format: "lowscene", version: 1, savedAt: new Date().toISOString(),
               frame: this.frame, layerId: this.layerId, scene: this.scene.toJSON() };
    }
    static fromJSON(data) {
      const d = (typeof data === "string") ? JSON.parse(data) : data;
      if (!d || d.format !== "lowscene") throw new Error("El archivo no es una escena de LOW");
      const doc = new LowDoc(new animation.Scene(d.scene));
      doc.frame = Math.max(1, Number(d.frame) || 1);
      if (d.layerId && doc.scene.layer(d.layerId)) doc.layerId = d.layerId;
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
