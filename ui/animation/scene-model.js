/* ══════════════════════════════════════════════════════════════════════════
   MODELO DE ESCENA 2D — Scene · Level · Drawing · Layer · Cell

   Es el corazón del módulo de animación, y NO toca el DOM. Antes toda la
   animación era `DZ.anim.frames = [rutas de archivo]`, o sea "un frame es un
   archivo": no existía el dibujo como entidad, así que un dibujo no podía
   ocupar varios frames y los holds eran imposibles. De ahí venía que el papel
   cebolla mirara `idx ± n` en vez de dibujos.

   El modelo separa las dos cosas que la animación tradicional tiene separadas
   desde siempre (y que OpenToonz respeta en su Xsheet):

     Level   = el material dibujado          Layer/Cell = el TIEMPO
     ├ Drawing 1                             frame 1 → dibujo 1
     ├ Drawing 2                             frame 2 → dibujo 1   ← hold
     └ Drawing 3                             frame 3 → dibujo 2

   Reglas que el resto del programa puede dar por ciertas:
     1. Drawing ≠ Frame. El dibujo vive en el Level; la celda lo REFERENCIA.
     2. La misma referencia en celdas seguidas ES un hold. Nada se duplica.
     3. Borrar una celda NO borra el dibujo (son operaciones distintas).
     4. Mover exposiciones reordena referencias, nunca contenido.

   @module animation/scene-model
   ══════════════════════════════════════════════════════════════════════════ */
(function (global) {
  "use strict";
  const LOW = global.LOW = global.LOW || {};
  const animation = LOW.animation = LOW.animation || {};
  const DEFAULT_WIDTH = 1020;
  const DEFAULT_HEIGHT = 1080;
  const documentDimension = (value, fallback) => {
    const n = Math.round(Number(value));
    return Number.isFinite(n) && n >= 16 ? Math.min(16384, n) : fallback;
  };

  const clone = (v) => (v == null ? v : JSON.parse(JSON.stringify(v)));
  let seq = 0;
  const uid = (p) => `${p}_${(seq++).toString(36)}_${Math.random().toString(36).slice(2, 7)}`;

  const rigPoseData = (pose = {}) => ({ x: +pose.x || 0, y: +pose.y || 0,
    r: +pose.r || 0,
    sx: pose.sx == null ? (pose.s == null ? 1 : +pose.s) : +pose.sx,
    sy: pose.sy == null ? (pose.s == null ? 1 : +pose.s) : +pose.sy });

  function rigData(data) {
    if (data && data.nodes) {
      const nodes = {};
      for (const [id, raw] of Object.entries(data.nodes)) {
        const n = raw || {};
        nodes[id] = { id, type: n.type || "drawing", elementId: n.elementId || id,
          parentId: n.parentId || null, pivot: n.pivot ? { x: +n.pivot.x || 0, y: +n.pivot.y || 0 } : null,
          rest: rigPoseData(n.rest), keys: clone(n.keys || {}), pinned: !!n.pinned,
          limits: { min: Number.isFinite(+n.limits?.min) ? +n.limits.min : -180,
            max: Number.isFinite(+n.limits?.max) ? +n.limits.max : 180 } };
      }
      return { version: 2, nodes, constraints: clone(data.constraints || {}) };
    }
    const nodes = {};
    for (const [elementId, keys] of Object.entries(data || {})) {
      nodes[elementId] = { id: elementId, type: "drawing", elementId,
        parentId: null, pivot: null, rest: rigPoseData(), keys: clone(keys || {}), pinned: false,
        limits: { min: -180, max: 180 } };
    }
    return { version: 2, nodes, constraints: {} };
  }

  // Matrices afines SVG [a,b,c,d,e,f]. El rig de recortes conserva las piezas
  // como hermanas en el dibujo y compone acá la jerarquía sin reescribir el SVG.
  const matIdentity = () => [1, 0, 0, 1, 0, 0];
  const matMul = (a, b) => [
    a[0] * b[0] + a[2] * b[1], a[1] * b[0] + a[3] * b[1],
    a[0] * b[2] + a[2] * b[3], a[1] * b[2] + a[3] * b[3],
    a[0] * b[4] + a[2] * b[5] + a[4], a[1] * b[4] + a[3] * b[5] + a[5]
  ];
  const matPoint = (m, p) => ({ x: m[0] * p.x + m[2] * p.y + m[4],
    y: m[1] * p.x + m[3] * p.y + m[5] });
  const matInverse = (m) => {
    const d = m[0] * m[3] - m[1] * m[2];
    if (Math.abs(d) < 1e-9) return matIdentity();
    return [m[3] / d, -m[1] / d, -m[2] / d, m[0] / d,
      (m[2] * m[5] - m[3] * m[4]) / d, (m[1] * m[4] - m[0] * m[5]) / d];
  };
  const matPose = (pose, pivot) => {
    const p = rigPoseData(pose), pv = pivot || { x: 0, y: 0 };
    const rad = p.r * Math.PI / 180, c = Math.cos(rad), s = Math.sin(rad);
    const rs = [c * p.sx, s * p.sx, -s * p.sy, c * p.sy, 0, 0];
    const around = matMul([1, 0, 0, 1, pv.x, pv.y],
      matMul(rs, [1, 0, 0, 1, -pv.x, -pv.y]));
    return matMul([1, 0, 0, 1, p.x, p.y], around);
  };

  /** Un dibujo: contenido + su número dentro del nivel. El número es lo que se
   *  escribe en la celda de la xsheet, y es renumerable sin perder el dibujo. */
  class Drawing {
    constructor(data = {}) {
      this.id = data.id || uid("dw");
      this.number = Number(data.number) || 1;
      this.content = data.content || "";     // SVG del dibujo
      this.name = data.name || "";
      this.meta = clone(data.meta || {});
    }
    isEmpty() { return !this.content || !/<(path|g|rect|circle|ellipse|line|polyline|polygon|text|image)\b/.test(this.content); }
    toJSON() { return { id: this.id, number: this.number, content: this.content, name: this.name, meta: this.meta }; }
  }

  /** Un nivel: la colección de dibujos numerados. Equivale al "animation level"
   *  de OpenToonz — el material, sin ninguna noción de tiempo. */
  class Level {
    constructor(data = {}) {
      this.id = data.id || uid("lv");
      this.name = data.name || "Nivel";
      this.type = data.type === "raster" ? "raster" : "vector";
      this.paletteId = data.paletteId || null;
      this.drawings = (data.drawings || []).map((d) => new Drawing(d));
    }
    /** Dibujo por NÚMERO (lo que referencia la celda), no por índice. */
    byNumber(n) { return this.drawings.find((d) => d.number === Number(n)) || null; }
    /** Números en uso, ordenados. */
    numbers() { return this.drawings.map((d) => d.number).sort((a, b) => a - b); }
    nextNumber() { const n = this.numbers(); return n.length ? n[n.length - 1] + 1 : 1; }
    /** Crea un dibujo. Si el número ya existe, devuelve el que había: nunca se
     *  pisa contenido en silencio. */
    addDrawing(number, content = "") {
      const n = Number(number) || this.nextNumber();
      const ya = this.byNumber(n);
      if (ya) return ya;
      const d = new Drawing({ number: n, content });
      this.drawings.push(d);
      this.drawings.sort((a, b) => a.number - b.number);
      return d;
    }
    removeDrawing(number) {
      const i = this.drawings.findIndex((d) => d.number === Number(number));
      if (i < 0) return null;
      return this.drawings.splice(i, 1)[0];
    }
    /** Renumera un dibujo. Devuelve false si el destino está ocupado (el
     *  llamador decide si intercambia o aborta; nunca se pierde un dibujo). */
    renumber(from, to) {
      const d = this.byNumber(from);
      if (!d || this.byNumber(to)) return false;
      d.number = Number(to);
      this.drawings.sort((a, b) => a.number - b.number);
      return true;
    }
    toJSON() {
      return { id: this.id, name: this.name, type: this.type,
               paletteId: this.paletteId, drawings: this.drawings.map((d) => d.toJSON()) };
    }
  }

  /** Una columna de la xsheet: qué dibujo se ve en cada frame.
   *  `cells` es disperso — índice = frame - 1; un hueco es una celda vacía. */
  class Layer {
    constructor(data = {}) {
      this.id = data.id || uid("ly");
      this.name = data.name || "Capa";
      this.levelId = data.levelId || null;
      this.visible = data.visible !== false;
      this.locked = !!data.locked;
      this.opacity = data.opacity == null ? 1 : Number(data.opacity);
      this.z = Number(data.z) || 0;            // profundidad para la cámara multiplano
      this.cells = Array.isArray(data.cells) ? data.cells.slice() : [];
    }
    /** Celda en un frame (1-based): número de dibujo, o null si está vacía. */
    cellAt(frame) {
      const c = this.cells[Math.max(0, Math.round(frame) - 1)];
      return c == null ? null : c;
    }
    setCell(frame, drawingNumber) {
      const i = Math.max(0, Math.round(frame) - 1);
      while (this.cells.length < i) this.cells.push(null);
      this.cells[i] = drawingNumber == null ? null : Number(drawingNumber);
      return true;
    }
    /** Último frame con contenido. */
    lastFrame() {
      for (let i = this.cells.length - 1; i >= 0; i--) if (this.cells[i] != null) return i + 1;
      return 0;
    }
    /** ¿Este frame repite el dibujo del anterior? (o sea: es parte de un hold) */
    isHold(frame) {
      if (frame <= 1) return false;
      const a = this.cellAt(frame), b = this.cellAt(frame - 1);
      return a != null && a === b;
    }
    /** Primer frame del bloque de exposición que contiene a `frame`. */
    holdStart(frame) {
      let f = Math.max(1, Math.round(frame));
      const v = this.cellAt(f);
      if (v == null) return f;
      while (f > 1 && this.cellAt(f - 1) === v) f--;
      return f;
    }
    /** Cuántos frames dura la exposición que contiene a `frame`. */
    holdLength(frame) {
      const v = this.cellAt(frame);
      if (v == null) return 0;
      let n = 0, f = this.holdStart(frame);
      while (this.cellAt(f) === v) { n++; f++; }
      return n;
    }
    toJSON() {
      return { id: this.id, name: this.name, levelId: this.levelId, visible: this.visible,
               locked: this.locked, opacity: this.opacity, z: this.z, cells: this.cells.slice() };
    }
  }

  /** La escena: niveles (material) + capas (tiempo) + ajustes. */
  class Scene {
    constructor(data = {}) {
      this.version = 2;
      this.id = data.id || uid("sc");
      this.name = data.name || "Escena";
      this.fps = Math.max(1, Math.min(120, Number(data.fps) || 24));
      this.width = documentDimension(data.width, DEFAULT_WIDTH);
      this.height = documentDimension(data.height, DEFAULT_HEIGHT);
      this.range = { in: Number(data.range?.in) || 1, out: Number(data.range?.out) || 0 };
      this.levels = (data.levels || []).map((l) => new Level(l));
      this.layers = (data.layers || []).map((l) => new Layer(l));
      this.camera = clone(data.camera || { keys: {} });
      this.audio = clone(data.audio || []);
      this.rig = rigData(data.rig);
      this.revision = Number(data.revision) || 0;
    }

    touch() { this.revision++; return this; }
    /** Resolución lógica de la mesa. Es estado del archivo, nunca del panel. */
    setSize(width, height) {
      const w = documentDimension(width, this.width || DEFAULT_WIDTH);
      const h = documentDimension(height, this.height || DEFAULT_HEIGHT);
      if (w === this.width && h === this.height) return false;
      this.width = w; this.height = h; this.touch(); return true;
    }
    level(id) { return this.levels.find((l) => l.id === id) || null; }
    layer(id) { return this.layers.find((l) => l.id === id) || null; }

    addLevel(name, type) {
      const l = new Level({ name: name || `Nivel ${this.levels.length + 1}`, type });
      this.levels.push(l); this.touch(); return l;
    }
    addLayer(levelId, name) {
      const l = new Layer({ levelId, name: name || `Capa ${this.layers.length + 1}` });
      this.layers.push(l); this.touch(); return l;
    }

    /** Último frame con contenido en toda la escena. */
    lastFrame() { return this.layers.reduce((m, l) => Math.max(m, l.lastFrame()), 0); }
    /** Rango efectivo de reproducción. */
    playRange() {
      const out = this.range.out > 0 ? this.range.out : this.lastFrame() || 1;
      return { in: Math.max(1, this.range.in), out: Math.max(1, out) };
    }

    /** El dibujo que se ve en una capa en un frame dado (resolviendo la
     *  referencia celda → nivel → dibujo). null si la celda está vacía. */
    drawingAt(layerId, frame) {
      const ly = this.layer(layerId);
      if (!ly) return null;
      const num = ly.cellAt(frame);
      if (num == null) return null;
      const lv = this.level(ly.levelId);
      return lv ? lv.byNumber(num) : null;
    }

    rigNode(id) { return this.rig.nodes[id] || null; }
    rigPose(id, frame) {
      const node = this.rigNode(id), keys = node && node.keys;
      if (!node) return null;
      const frames = Object.keys(keys).map(Number).filter(Number.isFinite).sort((a, b) => a - b);
      if (!frames.length) return clone(node.rest || rigPoseData());
      const f = Number(frame) || 1;
      if (keys[f]) return rigPoseData(keys[f]);
      if (f <= frames[0]) return rigPoseData(keys[frames[0]]);
      if (f >= frames.at(-1)) return rigPoseData(keys[frames.at(-1)]);
      let a = frames[0], b = frames.at(-1);
      for (const k of frames) { if (k <= f) a = k; else { b = k; break; } }
      const t = (f - a) / (b - a), p = keys[a], q = keys[b];
      const lerp = (x, y) => Number(x || 0) + (Number(y || 0) - Number(x || 0)) * t;
      return { x: lerp(p.x, q.x), y: lerp(p.y, q.y), r: lerp(p.r, q.r),
        sx: lerp(p.sx == null ? (p.s == null ? 1 : p.s) : p.sx, q.sx == null ? (q.s == null ? 1 : q.s) : q.sx),
        sy: lerp(p.sy == null ? (p.s == null ? 1 : p.s) : p.sy, q.sy == null ? (q.s == null ? 1 : q.s) : q.sy) };
    }
    rigWorldPose(id, frame, seen = new Set()) {
      const node = this.rigNode(id);
      if (!node || seen.has(id)) return null;
      seen.add(id);
      const local = this.rigPose(id, frame) || { x: 0, y: 0, r: 0, sx: 1, sy: 1 };
      if (!node.parentId) return local;
      const parent = this.rigWorldPose(node.parentId, frame, seen);
      if (!parent) return local;
      const rad = (parent.r || 0) * Math.PI / 180;
      const lx = (local.x || 0) * (parent.sx == null ? 1 : parent.sx);
      const ly = (local.y || 0) * (parent.sy == null ? 1 : parent.sy);
      return { x: parent.x + lx * Math.cos(rad) - ly * Math.sin(rad),
        y: parent.y + lx * Math.sin(rad) + ly * Math.cos(rad), r: (parent.r || 0) + (local.r || 0),
        sx: (parent.sx == null ? 1 : parent.sx) * (local.sx == null ? 1 : local.sx),
        sy: (parent.sy == null ? 1 : parent.sy) * (local.sy == null ? 1 : local.sy) };
    }

    /** Matriz completa de una pieza. A diferencia de `rigWorldPose`, aplica la
     * jerarquía alrededor de pivotes reales, que es lo que necesita un muñeco
     * cut-out para que antebrazo y mano sigan al brazo. */
    rigWorldMatrix(id, frame, overrides = {}, seen = new Set()) {
      const node = this.rigNode(id);
      if (!node || seen.has(id)) return matIdentity();
      seen.add(id);
      const local = matPose(overrides[id] || this.rigPose(id, frame), node.pivot);
      if (!node.parentId) return local;
      return matMul(this.rigWorldMatrix(node.parentId, frame, overrides, seen), local);
    }

    rigWorldPoint(id, frame, point, overrides = {}) {
      return matPoint(this.rigWorldMatrix(id, frame, overrides), point || { x: 0, y: 0 });
    }

    rigConstraint(id) { return (this.rig.constraints || {})[id] || null; }

    rigTargetAt(id, frame) {
      const c = this.rigConstraint(id), keys = c && c.targetKeys;
      if (!c) return null;
      const frames = Object.keys(keys || {}).map(Number).filter(Number.isFinite).sort((a, b) => a - b);
      if (!frames.length) return clone(c.target || null);
      const f = Number(frame) || 1;
      if (keys[f]) return clone(keys[f]);
      if (f <= frames[0]) return clone(keys[frames[0]]);
      if (f >= frames.at(-1)) return clone(keys[frames.at(-1)]);
      let a = frames[0], b = frames.at(-1);
      for (const k of frames) { if (k <= f) a = k; else { b = k; break; } }
      const t = (f - a) / (b - a), p = keys[a], q = keys[b];
      return { x: p.x + (q.x - p.x) * t, y: p.y + (q.y - p.y) * t };
    }

    /** Solver analítico de dos huesos para una cadena root→mid→effector.
     * Devuelve poses locales; LowDoc decide cuándo convertirlas en claves. */
    rigSolveIK(id, frame, target) {
      const c = this.rigConstraint(id);
      if (!c || c.type !== "ik2" || c.enabled === false) return null;
      const root = this.rigNode(c.rootId), mid = this.rigNode(c.midId), end = this.rigNode(c.effectorId);
      if (!root || !mid || !end || mid.parentId !== root.id || end.parentId !== mid.id ||
          !root.pivot || !mid.pivot || !end.pivot) return null;
      const wanted = target || this.rigTargetAt(id, frame) || end.pivot;
      const parentMatrix = root.parentId ? this.rigWorldMatrix(root.parentId, frame) : matIdentity();
      const localTarget = matPoint(matInverse(parentMatrix), wanted);
      const rootPose = rigPoseData(this.rigPose(root.id, frame));
      const midPose = rigPoseData(this.rigPose(mid.id, frame));
      const endPose = rigPoseData(this.rigPose(end.id, frame));
      const a = { x: root.pivot.x + rootPose.x, y: root.pivot.y + rootPose.y };
      // Las traslaciones FK existentes forman parte de la geometría actual de
      // la cadena. Si se ignoraran, pasar de FK a IK haría saltar el brazo.
      const b = { x: mid.pivot.x + midPose.x, y: mid.pivot.y + midPose.y };
      const e = { x: end.pivot.x + endPose.x, y: end.pivot.y + endPose.y };
      const l1 = Math.max(0.001, Math.hypot(b.x - root.pivot.x, b.y - root.pivot.y));
      const l2 = Math.max(0.001, Math.hypot(e.x - mid.pivot.x, e.y - mid.pivot.y));
      const dx = localTarget.x - a.x, dy = localTarget.y - a.y;
      const distance = Math.max(0.001, Math.min(l1 + l2 - 0.001, Math.hypot(dx, dy)));
      const cosJoint = Math.max(-1, Math.min(1, (distance * distance - l1 * l1 - l2 * l2) / (2 * l1 * l2)));
      const joint = Math.acos(cosJoint) * (c.bend === -1 ? -1 : 1);
      const rootAngle = Math.atan2(dy, dx) - Math.atan2(l2 * Math.sin(joint), l1 + l2 * Math.cos(joint));
      const base1 = Math.atan2(b.y - root.pivot.y, b.x - root.pivot.x);
      const base2 = Math.atan2(e.y - b.y, e.x - b.x);
      const clamp = (value, node) => Math.max(node.limits?.min ?? -180, Math.min(node.limits?.max ?? 180, value));
      const rootRotation = clamp((rootAngle - base1) * 180 / Math.PI, root);
      const midRotation = clamp((joint - (base2 - base1)) * 180 / Math.PI, mid);
      return { target: { x: +wanted.x || 0, y: +wanted.y || 0 },
        poses: { [root.id]: { ...rootPose, r: rootRotation }, [mid.id]: { ...midPose, r: midRotation } } };
    }

    /** Expone un dibujo en un frame. Si el dibujo no existe en el nivel, lo
     *  CREA vacío: dibujar es lo que después le pone contenido. */
    expose(layerId, frame, drawingNumber) {
      const ly = this.layer(layerId);
      if (!ly || ly.locked) return false;
      const lv = this.level(ly.levelId);
      if (lv && drawingNumber != null) lv.addDrawing(drawingNumber);
      ly.setCell(frame, drawingNumber);
      this.touch();
      return true;
    }

    toJSON() {
      return { version: this.version, id: this.id, name: this.name, fps: this.fps,
               width: this.width, height: this.height, range: this.range,
               levels: this.levels.map((l) => l.toJSON()),
               layers: this.layers.map((l) => l.toJSON()),
               camera: this.camera, audio: this.audio, rig: clone(this.rig), revision: this.revision };
    }

    /** Convierte el modelo VIEJO (`frames` = lista de archivos) al nuevo. Cada
     *  archivo pasa a ser un dibujo numerado y se expone un frame cada uno:
     *  el resultado se ve idéntico a antes, pero ya con dibujos de verdad, así
     *  que a partir de ahí se pueden hacer holds. */
    static fromLegacy({ frames = [], fps = 12, name = "Escena", contents = {} } = {}) {
      const sc = new Scene({ name, fps });
      const lv = sc.addLevel("Nivel 1");
      const ly = sc.addLayer(lv.id, "Capa 1");
      frames.forEach((ruta, i) => {
        const d = lv.addDrawing(i + 1, contents[ruta] || "");
        d.meta.legacyPath = ruta || null;
        ly.setCell(i + 1, d.number);
      });
      return sc;
    }
  }

  animation.Scene = Scene;
  animation.Level = Level;
  animation.Layer = Layer;
  animation.Drawing = Drawing;
  animation.clone = clone;

  // La clase History previa se conserva: la usa el resto del módulo.
  class History {
    constructor(limit = 150) { this.limit = limit; this.undoStack = []; this.redoStack = []; }
    commit(label, before, after) {
      this.undoStack.push({ label, before: clone(before), after: clone(after) });
      if (this.undoStack.length > this.limit) this.undoStack.shift();
      this.redoStack.length = 0;
    }
    undo(model) { const e = this.undoStack.pop(); if (!e) return model; this.redoStack.push(e); return new Scene(e.before); }
    redo(model) { const e = this.redoStack.pop(); if (!e) return model; this.undoStack.push(e); return new Scene(e.after); }
  }
  animation.History = History;
})(window);
