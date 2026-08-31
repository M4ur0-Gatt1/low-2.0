/* Captura de movimiento por video — modelo persistente, independiente de UI. */
(function (global) {
  "use strict";
  const LOW = global.LOW = global.LOW || {};
  const animation = LOW.animation = LOW.animation || {};
  const engines = new Map();

  class MotionCaptureTrack {
    constructor(doc) {
      this.doc = doc || null;
      this.source = null;
      this.range = { in: 1, out: 1 };
      this.status = "empty";
      this.engine = null;
      this.samples = {};
      this.silhouettes = {};
    }
    setSource(meta) {
      meta = meta || {};
      this.source = {
        name: String(meta.name || "video"), path: String(meta.path || ""),
        duration: Math.max(0, Number(meta.duration) || 0),
        width: Math.max(0, Number(meta.width) || 0),
        height: Math.max(0, Number(meta.height) || 0),
        fps: Math.max(0, Number(meta.fps) || 0)
      };
      const sceneFps = this.doc && this.doc.scene ? this.doc.scene.fps : 24;
      this.range = { in: 1, out: Math.max(1, Math.round(this.source.duration * sceneFps)) };
      this.status = "reference";
      return this;
    }
    setPose(frame, joints, confidence) {
      const f = Math.max(1, Math.round(Number(frame) || 1));
      this.samples[f] = { joints: JSON.parse(JSON.stringify(joints || {})),
        confidence: confidence == null ? 1 : Math.max(0, Math.min(1, Number(confidence) || 0)) };
      this.status = "tracked";
      return this.samples[f];
    }
    poseAt(frame) { return this.samples[Math.max(1, Math.round(Number(frame) || 1))] || null; }
    timeAt(frame, sceneFps) {
      const fps = Math.max(1, Number(sceneFps) || (this.doc && this.doc.scene && this.doc.scene.fps) || 24);
      return Math.max(0, (Math.max(1, Number(frame) || 1) - this.range.in) / fps);
    }
    toJSON() {
      return { version: 1, source: this.source, range: this.range, status: this.status,
        engine: this.engine, samples: this.samples, silhouettes: this.silhouettes };
    }
    fromJSON(data) {
      data = data || {};
      this.source = data.source ? Object.assign({}, data.source) : null;
      this.range = Object.assign({ in: 1, out: 1 }, data.range || {});
      this.status = data.status || (this.source ? "reference" : "empty");
      this.engine = data.engine || null;
      this.samples = Object.assign({}, data.samples || {});
      this.silhouettes = Object.assign({}, data.silhouettes || {});
      return this;
    }
  }

  function registerMocapEngine(id, engine) {
    if (!id || !engine || typeof engine.analyze !== "function") throw new Error("Motor mocap inválido");
    engines.set(String(id), engine);
  }
  animation.MotionCaptureTrack = MotionCaptureTrack;
  animation.mocapEngines = {
    register: registerMocapEngine,
    get: (id) => engines.get(String(id)) || null,
    list: () => Array.from(engines.keys())
  };
})(typeof window !== "undefined" ? window : globalThis);
