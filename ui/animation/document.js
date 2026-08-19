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
      const d = this.ensureDrawing();
      if (!d) return false;
      d.content = contenido || "";
      this.touch();
      this.emit("content");
      return true;
    }
    /** Expone un número de dibujo en la celda (escribirlo en la xsheet). */
    setCell(frame, drawingNumber, layerId) {
      const id = layerId || this.layerId;
      const ok = this.scene.expose(id, frame, drawingNumber);
      if (ok) { this.touch(); this.emit("cells"); }
      return ok;
    }
    /** Aplica una operación de `exposures` sobre la capa actual y avisa. */
    apply(op, ...args) {
      const ly = this.layer;
      const fn = animation.exposures[op];
      if (!ly || typeof fn !== "function") return false;
      const ok = fn(ly, ...args);
      if (ok) { this.touch(); this.emit("cells"); }
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
