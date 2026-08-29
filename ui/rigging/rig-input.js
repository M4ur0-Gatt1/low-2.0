/* Política pura de entrada del rig. El overlay pregunta qué intención corresponde
   y app.js sólo ejecuta la acción; ninguna vista decide reglas de jerarquía. */
(function (global) {
  "use strict";
  const LOW = global.LOW = global.LOW || {};
  const rigging = LOW.rigging = LOW.rigging || {};

  function pointerAction({ phase = "build", tool = "select", target = "joint",
    isBone = true, parentId = null, pinned = false, role = "bone",
    altKey = false, boneTool = false } = {}) {
    const build = phase === "build", pose = phase === "fk" && tool === "pose";
    if (target === "body") {
      if (build && tool === "create") return "create";
      if (build && tool === "edit" && isBone) return "edit-body";
      if (pose && isBone) return "rotate";
      return "select";
    }
    if (target === "tip") {
      if (build && (boneTool || tool === "create")) return "create-from-tip";
      if (pose) return "rotate";
      if (build && tool === "edit") return "edit-tail";
      return "select";
    }
    if (build && tool === "create") return "create";
    if (build && tool === "pivot") return "pivot";
    if (build && tool === "edit" && isBone && altKey) return "pivot";
    if (build && tool === "edit" && isBone) return "edit-head";
    if (build && tool === "edit") return "pivot";
    if (pose) return (!parentId || pinned || role === "control") ? "translate" : "locked-child";
    return "select";
  }

  class GestureController {
    constructor() { this.epoch = 0; this.active = null; }
    begin(cancel) {
      this.cancel("superseded");
      const token = ++this.epoch;
      this.active = { token, cancel: typeof cancel === "function" ? cancel : null };
      return token;
    }
    isCurrent(token) { return !!this.active && this.active.token === token; }
    finish(token) {
      if (!this.isCurrent(token)) return false;
      this.active = null;
      return true;
    }
    cancel(reason = "cancel") {
      const current = this.active;
      if (!current) return false;
      this.active = null;
      this.epoch++;
      current.cancel?.(reason);
      return true;
    }
    transition() { return this.cancel("transition"); }
  }

  rigging.input = { pointerAction, GestureController, createGestureController: () => new GestureController() };
})(typeof window !== "undefined" ? window : globalThis);
