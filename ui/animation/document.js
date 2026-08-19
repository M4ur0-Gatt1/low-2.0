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
