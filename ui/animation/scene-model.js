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

  /* ── CURVAS DE INTERPOLACION ──────────────────────────────────────────
     Cada clave lleva dos manijas: `eo` gobierna como SALE hacia la clave
     siguiente y `ei` como LLEGA desde la anterior. El tramo A->B usa la de
     salida de A y la de entrada de B, igual que un cubic-bezier de CSS.
     Con las manijas por defecto la curva es exactamente la recta, asi que
     todo lo que ya estaba animado se sigue viendo igual. */
  const EASE_OUT_LINEAL = [1 / 3, 1 / 3];
  const EASE_IN_LINEAL = [2 / 3, 2 / 3];
  const clampX = (v, d) => Number.isFinite(+v) ? Math.max(0, Math.min(1, +v)) : d;
  const manija = (m, dx, dy) => Array.isArray(m) && m.length === 2
    ? [clampX(m[0], dx), Number.isFinite(+m[1]) ? +m[1] : dy] : [dx, dy];

  const rigEaseData = (e = {}) => ({
    eo: manija(e.eo, EASE_OUT_LINEAL[0], EASE_OUT_LINEAL[1]),
    ei: manija(e.ei, EASE_IN_LINEAL[0], EASE_IN_LINEAL[1]),
    hold: !!e.hold });

  const bezX = (s, x1, x2) => { const u = 1 - s;
    return 3 * u * u * s * x1 + 3 * u * s * s * x2 + s * s * s; };
  const bezY = (s, y1, y2) => { const u = 1 - s;
    return 3 * u * u * s * y1 + 3 * u * s * s * y2 + s * s * s; };

  /** El parametro de la curva cuyo avance horizontal es `t`. Newton primero,
   *  biseccion de respaldo: Newton solo se planta en tramos casi verticales. */
  function bezSolve(t, x1, x2) {
    let s = t;
    for (let i = 0; i < 8; i++) {
      const dx = bezX(s, x1, x2) - t;
      if (Math.abs(dx) < 1e-6) return s;
      const u = 1 - s;
      const d = 3 * u * u * x1 + 6 * u * s * (x2 - x1) + 3 * s * s * (1 - x2);
      if (Math.abs(d) < 1e-6) break;
      s -= dx / d;
    }
    let lo = 0, hi = 1; s = t;
    for (let i = 0; i < 30; i++) {
      const x = bezX(s, x1, x2);
      if (Math.abs(x - t) < 1e-6) break;
      if (x < t) lo = s; else hi = s;
      s = (lo + hi) / 2;
    }
    return s;
  }

  /** Curva el avance `t` (0..1) de un tramo segun las manijas de sus extremos. */
  function rigEaseT(t, easeA, easeB) {
    const a = rigEaseData(easeA), b = rigEaseData(easeB);
    if (a.hold) return 0;                       // escalon: sostiene hasta la proxima
    const [x1, y1] = a.eo, [x2, y2] = b.ei;
    if (Math.abs(x1 - EASE_OUT_LINEAL[0]) < 1e-9 && Math.abs(y1 - EASE_OUT_LINEAL[1]) < 1e-9 &&
        Math.abs(x2 - EASE_IN_LINEAL[0]) < 1e-9 && Math.abs(y2 - EASE_IN_LINEAL[1]) < 1e-9)
      return t;                                 // recta: sin cuentas de mas
    return bezY(bezSolve(t, x1, x2), y1, y2);
  }


  /* == DEFORMADOR DE CURVA ==================================================
     Hasta aca una pieza solo podia ROTAR entera: sirve para un brazo, no para
     el pelo, una cola o una manga. El deformador dobla el dibujo a lo largo de
     una curva de control.

     Como: cada punto del dibujo se guarda en coordenadas curvilineas respecto
     de la curva EN REPOSO —cuanto avanzo a lo largo (s) y cuanto me separo en
     perpendicular (d)— y se lo vuelve a colocar sobre la curva POSADA con el
     mismo (s, d). Si las dos curvas son iguales, el punto no se mueve: por eso
     un deformador recien creado no cambia nada. */

  const CURVA_MUESTRAS = 96;      // suficiente para que no se vean facetas

  /** Catmull-Rom: pasa POR los puntos de control, que es lo que espera quien
   *  los arrastra. Con Bezier habria que explicar manijas que nadie pidio. */
  function curvaPunto(pts, t) {
    const n = pts.length;
    if (n === 0) return { x: 0, y: 0 };
    if (n === 1) return { x: pts[0].x, y: pts[0].y };
    if (n === 2) return { x: pts[0].x + (pts[1].x - pts[0].x) * t,
                          y: pts[0].y + (pts[1].y - pts[0].y) * t };
    const seg = Math.min(Math.floor(t * (n - 1)), n - 2);
    const u = t * (n - 1) - seg;
    const p0 = pts[Math.max(0, seg - 1)], p1 = pts[seg], p2 = pts[seg + 1],
          p3 = pts[Math.min(n - 1, seg + 2)];
    const u2 = u * u, u3 = u2 * u;
    return {
      x: 0.5 * ((2 * p1.x) + (-p0.x + p2.x) * u +
        (2 * p0.x - 5 * p1.x + 4 * p2.x - p3.x) * u2 +
        (-p0.x + 3 * p1.x - 3 * p2.x + p3.x) * u3),
      y: 0.5 * ((2 * p1.y) + (-p0.y + p2.y) * u +
        (2 * p0.y - 5 * p1.y + 4 * p2.y - p3.y) * u2 +
        (-p0.y + 3 * p1.y - 3 * p2.y + p3.y) * u3)
    };
  }

  /** Muestreo con longitud de arco acumulada: sin esto, los tramos largos de
   *  la curva comprimirian el dibujo y los cortos lo estirarian. */
  function curvaMuestrear(pts) {
    const ms = [];
    let largo = 0;
    let previo = curvaPunto(pts, 0);
    ms.push({ ...previo, s: 0 });
    for (let i = 1; i <= CURVA_MUESTRAS; i++) {
      const q = curvaPunto(pts, i / CURVA_MUESTRAS);
      largo += Math.hypot(q.x - previo.x, q.y - previo.y);
      ms.push({ ...q, s: largo });
      previo = q;
    }
    if (largo > 1e-9) for (const m of ms) m.s /= largo;   // normalizado 0..1
    return { ms, largo };
  }

  /** Tangente unitaria en la muestra i. */
  function curvaTangente(ms, i) {
    const a = ms[Math.max(0, i - 1)], b = ms[Math.min(ms.length - 1, i + 1)];
    const dx = b.x - a.x, dy = b.y - a.y, h = Math.hypot(dx, dy);
    return h < 1e-9 ? { x: 1, y: 0 } : { x: dx / h, y: dy / h };
  }

  /** Punto y marco (tangente/normal) a lo largo de la curva, en s de 0 a 1. */
  function curvaEnS(muestreo, s) {
    const ms = muestreo.ms;
    const t = Math.max(0, Math.min(1, s));
    let i = 0;
    while (i < ms.length - 2 && ms[i + 1].s < t) i++;
    const a = ms[i], b = ms[i + 1] || a;
    const span = (b.s - a.s) || 1e-9;
    const u = Math.max(0, Math.min(1, (t - a.s) / span));
    const ta = curvaTangente(ms, i), tb = curvaTangente(ms, Math.min(ms.length - 1, i + 1));
    const tx = ta.x + (tb.x - ta.x) * u, ty = ta.y + (tb.y - ta.y) * u;
    const h = Math.hypot(tx, ty) || 1;
    return { x: a.x + (b.x - a.x) * u, y: a.y + (b.y - a.y) * u,
             tx: tx / h, ty: ty / h, nx: -ty / h, ny: tx / h };
  }

  /** Coordenadas curvilineas de un punto respecto de una curva: cuanto avanza
   *  a lo largo (s, 0..1) y cuanto se separa en perpendicular (d, con signo).
   *  Fuera de los extremos se extiende la recta tangente, para que un dibujo
   *  mas largo que su curva no se amontone en las puntas. */
  function curvaCoordenadas(muestreo, punto) {
    const ms = muestreo.ms;
    let mejor = { dist2: Infinity, i: 0, u: 0 };
    for (let i = 0; i < ms.length - 1; i++) {
      const a = ms[i], b = ms[i + 1];
      const vx = b.x - a.x, vy = b.y - a.y;
      const len2 = vx * vx + vy * vy;
      let u = len2 < 1e-12 ? 0 : ((punto.x - a.x) * vx + (punto.y - a.y) * vy) / len2;
      u = Math.max(0, Math.min(1, u));
      const px = a.x + vx * u, py = a.y + vy * u;
      const dist2 = (punto.x - px) ** 2 + (punto.y - py) ** 2;
      if (dist2 < mejor.dist2) mejor = { dist2, i, u };
    }
    const a = ms[mejor.i], b = ms[mejor.i + 1];
    const s = a.s + (b.s - a.s) * mejor.u;
    const marco = curvaEnS(muestreo, s);
    const d = (punto.x - marco.x) * marco.nx + (punto.y - marco.y) * marco.ny;
    // avance mas alla del extremo, medido en unidades de la curva
    let extra = 0;
    if (s <= 1e-6 || s >= 1 - 1e-6) {
      const fin = s <= 1e-6 ? curvaEnS(muestreo, 0) : curvaEnS(muestreo, 1);
      extra = (punto.x - fin.x) * fin.tx + (punto.y - fin.y) * fin.ty;
      if (s <= 1e-6 && extra > 0) extra = 0;      // adentro: no es desborde
      if (s >= 1 - 1e-6 && extra < 0) extra = 0;
    }
    return { s, d, extra };
  }

  /** Recoloca un punto: mismas coordenadas curvilineas, otra curva. */
  function curvaAplicar(muestreoPosado, coord, escalaLargo) {
    const marco = curvaEnS(muestreoPosado, coord.s);
    const extra = (coord.extra || 0) * (escalaLargo || 1);
    return { x: marco.x + marco.nx * coord.d + marco.tx * extra,
             y: marco.y + marco.ny * coord.d + marco.ty * extra };
  }

  /** Un deformador listo para usar: mapea puntos del reposo a la pose. */
  function rigDeformador(reposo, posado) {
    const a = curvaMuestrear(reposo), b = curvaMuestrear(posado);
    const escala = a.largo > 1e-9 ? b.largo / a.largo : 1;
    return {
      largoReposo: a.largo, largoPosado: b.largo,
      punto(p) { return curvaAplicar(b, curvaCoordenadas(a, p), escala); }
    };
  }

  /** Un hueso con el rango completo (-180 a 180) NO tiene tope: gira todo lo
   *  que haga falta, varias vueltas si hace falta —una helice, una rueda, un
   *  brazo que da la vuelta—. Recortar ahi impedia dar el giro entero, que es
   *  justo lo que un tope NO tiene que hacer. */
  const rigSinTope = (limits) =>
    (limits?.min ?? -180) <= -180 && (limits?.max ?? 180) >= 180;

  /** Aplica el tope de un hueso a un angulo. Sin tope, lo deja pasar entero. */
  const rigAplicarTope = (limits, r) => rigSinTope(limits) ? r
    : Math.max(limits.min, Math.min(limits.max, r));

  const rigChannelPath = (boneId, property) =>
    `bones/${encodeURIComponent(boneId)}/pose/${property}`;

  /** Claves de sustitucion de dibujo por slot. Se descartan las que apunten a
   *  un dibujo que ya no existe: si no, el slot quedaria vacio en ese cuadro. */
  const rigSwitchesData = (source = {}, attachments = {}) => {
    const out = {};
    for (const [slotId, sw] of Object.entries(source || {})) {
      const keys = {};
      for (const [frame, attachmentId] of Object.entries((sw && sw.keys) || {})) {
        const f = Math.max(1, Math.round(+frame));
        if (Number.isFinite(f) && attachments[attachmentId]) keys[f] = attachmentId;
      }
      if (Object.keys(keys).length) out[slotId] = { slotId, keys };
    }
    return out;
  };

  /** Deformadores por pieza. Se descartan los que no tengan una curva usable:
   *  con menos de dos puntos no hay nada que doblar. */
  const rigDeformersData = (source = {}) => {
    const punto = (q) => ({ x: +q.x || 0, y: +q.y || 0 });
    const lista = (arr) => Array.isArray(arr) ? arr.filter((q) => q && Number.isFinite(+q.x)
      && Number.isFinite(+q.y)).map(punto) : [];
    const out = {};
    for (const [boneId, d] of Object.entries(source || {})) {
      const rest = lista(d && d.rest);
      if (rest.length < 2) continue;
      const keys = {};
      for (const [frame, pts] of Object.entries((d && d.keys) || {})) {
        const f = Math.max(1, Math.round(+frame)), curva = lista(pts);
        // una clave con otra cantidad de puntos no se puede mezclar con el reposo
        if (Number.isFinite(f) && curva.length === rest.length) keys[f] = curva;
      }
      out[boneId] = { id: d.id || `deformer:${boneId}`, boneId, type: "curve",
        enabled: d.enabled !== false, rest, keys };
    }
    return out;
  };

  const rigChannelData = (path, raw = {}) => ({ path,
    valueType: raw.valueType || "number", interpolation: raw.interpolation || "linear",
    keys: clone(raw.keys || {}), ease: clone(raw.ease || {}) });

  const rigConstraintData = (id, raw = {}, index = 0) => ({ ...clone(raw), id,
    type: raw.type || "transform", enabled: raw.enabled !== false,
    mix: Number.isFinite(+raw.mix) ? Math.max(0, Math.min(1, +raw.mix)) : 1,
    order: Number.isFinite(+raw.order) ? +raw.order : index,
    reads: [...new Set((raw.reads || []).filter(Boolean))],
    writes: [...new Set((raw.writes || []).filter(Boolean))],
    dependsOn: [...new Set((raw.dependsOn || []).filter(Boolean))] });

  function rigConstraintEdges(rig) {
    const constraints = rig.constraints || {}, ids = Object.keys(constraints);
    const edges = Object.fromEntries(ids.map((id) => [id, new Set()]));
    const writers = {};
    for (const id of ids) {
      const c = constraints[id];
      for (const resource of c.writes || []) (writers[resource] ||= []).push(id);
      for (const dependency of c.dependsOn || []) if (edges[dependency]) edges[dependency].add(id);
    }
    for (const id of ids) {
      for (const resource of constraints[id].reads || [])
        for (const writer of writers[resource] || []) edges[writer].add(id);
    }
    return edges;
  }

  function rigConstraintHasCycle(rig) {
    const constraints = rig.constraints || {}, ids = Object.keys(constraints);
    const edges = rigConstraintEdges(rig);
    const visiting = new Set(), visited = new Set();
    const visit = (id) => {
      if (visiting.has(id)) return true;
      if (visited.has(id)) return false;
      visiting.add(id);
      for (const next of edges[id] || []) if (visit(next)) return true;
      visiting.delete(id); visited.add(id); return false;
    };
    return ids.some(visit);
  }

  function rigOrderedConstraintIds(rig) {
    const constraints = rig.constraints || {}, ids = Object.keys(constraints), edges = rigConstraintEdges(rig);
    const preferred = [...new Set([...(rig.constraintOrder || []), ...ids])].filter((id) => constraints[id]);
    const rank = Object.fromEntries(preferred.map((id, index) => [id, index]));
    const indegree = Object.fromEntries(ids.map((id) => [id, 0]));
    for (const next of Object.values(edges)) for (const id of next) indegree[id]++;
    const ready = ids.filter((id) => indegree[id] === 0).sort((a, b) => rank[a] - rank[b]);
    const result = [];
    while (ready.length) {
      const id = ready.shift(); result.push(id);
      for (const next of edges[id]) {
        indegree[next]--;
        if (indegree[next] === 0) {
          ready.push(next); ready.sort((a, b) => rank[a] - rank[b]);
        }
      }
    }
    return result.length === ids.length ? result : preferred;
  }

  function rigDiagnostics(rig) {
    const errors = [], warnings = [], bones = rig.bones || rig.nodes || {};
    const artOwners = new Map();
    const claimArt = (elementId, boneId, sourceId) => {
      if (!elementId || !boneId) return;
      const previous = artOwners.get(elementId);
      if (previous && previous.boneId !== boneId) {
        errors.push({ code: "duplicate-art-binding", id: sourceId || boneId,
          ref: elementId, owners: [previous.boneId, boneId] });
        return;
      }
      artOwners.set(elementId, { boneId, sourceId });
    };
    for (const [id, bone] of Object.entries(bones)) {
      const seen = new Set([id]); let parentId = bone.parentId;
      while (parentId) {
        if (!bones[parentId]) { errors.push({ code: "missing-parent", id, ref: parentId }); break; }
        if (seen.has(parentId)) { errors.push({ code: "bone-cycle", id, ref: parentId }); break; }
        seen.add(parentId); parentId = bones[parentId].parentId;
      }
      claimArt(bone.elementId || bone.binding?.elementId, id, id);
    }
    for (const [id, slot] of Object.entries(rig.slots || {})) {
      if (slot.boneId && !bones[slot.boneId]) errors.push({ code: "missing-slot-bone", id, ref: slot.boneId });
      if (slot.activeAttachmentId && !rig.attachments?.[slot.activeAttachmentId])
        errors.push({ code: "missing-active-attachment", id, ref: slot.activeAttachmentId });
    }
    for (const [id, attachment] of Object.entries(rig.attachments || {}))
      if (!rig.slots?.[attachment.slotId]) errors.push({ code: "missing-attachment-slot", id, ref: attachment.slotId });
    for (const [id, binding] of Object.entries(rig.bindings || {})) {
      if (binding.boneId && !bones[binding.boneId]) errors.push({ code: "missing-binding-bone", id, ref: binding.boneId });
      if (binding.slotId && !rig.slots?.[binding.slotId]) errors.push({ code: "missing-binding-slot", id, ref: binding.slotId });
      if (binding.attachmentId && !rig.attachments?.[binding.attachmentId])
        errors.push({ code: "missing-binding-attachment", id, ref: binding.attachmentId });
      const attachment = rig.attachments?.[binding.attachmentId];
      claimArt(attachment?.elementId || binding.elementId, binding.boneId, id);
    }
    if (rigConstraintHasCycle(rig)) errors.push({ code: "constraint-cycle" });
    for (const id of rig.constraintOrder || [])
      if (!rig.constraints?.[id]) warnings.push({ code: "missing-ordered-constraint", id });
    return { valid: errors.length === 0, errors, warnings };
  }

  function rigReadiness(rig, availableElementIds = []) {
    const bones = Object.values(rig?.bones || rig?.nodes || {});
    const deformBones = bones.filter(b => b.role !== "control");
    const controls = bones.filter(b => b.role === "control");
    const boundElements = new Set();
    const boundBones = new Set();
    for (const bone of deformBones) {
      const elementId = bone.elementId || bone.binding?.elementId;
      if (elementId) { boundElements.add(elementId); boundBones.add(bone.id); }
    }
    for (const binding of Object.values(rig?.bindings || {})) {
      const attachment = rig?.attachments?.[binding.attachmentId];
      const elementId = attachment?.elementId || binding.elementId;
      if (elementId) boundElements.add(elementId);
      if (binding.boneId && elementId) boundBones.add(binding.boneId);
    }
    const diagnostics = rigDiagnostics(rig || {});
    const unboundBoneIds = deformBones.map(b => b.id).filter(id => !boundBones.has(id));
    const art = [...new Set((availableElementIds || []).filter(Boolean))];
    const unboundElementIds = art.filter(id => !boundElements.has(id));
    return {
      valid: diagnostics.valid,
      errors: diagnostics.errors,
      warnings: diagnostics.warnings,
      boneCount: deformBones.length,
      controlCount: controls.length,
      boundBoneCount: boundBones.size,
      boundElementCount: boundElements.size,
      unboundBoneIds,
      unboundElementIds,
      readyToTest: diagnostics.valid && bones.length > 0,
      // El movimiento pertenece al esqueleto, no al dibujo. Permitir claves
      // sin arte hace posible crear y reutilizar animaciones antes del binding.
      readyToAnimate: diagnostics.valid && bones.length > 0,
      hasBoundArt: boundBones.size > 0
    };
  }

  function rigData(data) {
    const source = data || {}, structured = !!(source.nodes || source.bones);
    const sourceBones = source.bones || source.nodes || (structured ? {} : source);
    const bones = {}, slots = clone(source.slots || {}), attachments = clone(source.attachments || {}),
      bindings = clone(source.bindings || {}), channels = {};
    for (const [id, raw] of Object.entries(sourceBones)) {
      const n = structured ? (raw || {}) : { keys: raw || {} };
      const hasArtLink = !source.bones || !!(n.elementId || n.binding?.elementId);
      const elementId = n.elementId || n.binding?.elementId || id;
      bones[id] = { id, type: "bone", name: n.name || id,
        parentId: n.parentId || null, pivot: n.pivot ? { x: +n.pivot.x || 0, y: +n.pivot.y || 0 } : null,
        head: n.head ? { x: +n.head.x || 0, y: +n.head.y || 0 } :
          (n.pivot ? { x: +n.pivot.x || 0, y: +n.pivot.y || 0 } : null),
        tail: n.tail ? { x: +n.tail.x || 0, y: +n.tail.y || 0 } : null,
        rest: rigPoseData(n.rest), keys: clone(n.keys || {}), pinned: !!n.pinned,
        role: n.role === "control" ? "control" : "bone",
        control: n.control ? clone(n.control) : null,
        inherit: { translation: n.inherit?.translation !== false, rotation: n.inherit?.rotation !== false,
          scale: n.inherit?.scale !== false },
        limits: { min: Number.isFinite(+n.limits?.min) ? +n.limits.min : -180,
          max: Number.isFinite(+n.limits?.max) ? +n.limits.max : 180 } };
      if (hasArtLink) {
        bones[id].elementId = elementId;
        bones[id].binding = { mode: n.binding?.mode || "rigid", elementId };
      }
      for (const property of ["x", "y", "r", "sx", "sy"]) {
        const path = rigChannelPath(id, property), keys = {}, ease = {};
        for (const [frame, pose] of Object.entries(n.keys || {})) {
          const normalized = rigPoseData(pose); keys[frame] = normalized[property];
          if (pose && pose.ease) ease[frame] = rigEaseData(pose.ease);
        }
        if (Object.keys(keys).length) channels[path] = rigChannelData(path, { keys, ease });
      }
      if (!source.bones) {
        const slotId = `slot:${id}`, attachmentId = `attachment:${id}`, bindingId = `binding:${id}`;
        slots[slotId] ||= { id: slotId, name: n.name || id, boneId: id,
          drawOrder: Object.keys(slots).length, activeAttachmentId: attachmentId, visible: true };
        attachments[attachmentId] ||= { id: attachmentId, slotId, type: "drawing", elementId,
          name: n.name || id, levelId: n.levelId || null, drawingNumber: n.drawingNumber ?? null };
        bindings[bindingId] ||= { id: bindingId, mode: n.binding?.mode || "rigid", boneId: id,
          slotId, attachmentId, elementId };
      }
    }
    for (const [path, channel] of Object.entries(source.channels || {}))
      channels[path] = rigChannelData(path, channel);
    const constraints = {};
    Object.entries(source.constraints || {}).forEach(([id, constraint], index) => {
      constraints[id] = rigConstraintData(id, constraint, index);
    });
    const requestedOrder = (source.constraintOrder || source.setup?.evaluationOrder || []).filter((id) => constraints[id]);
    const remainder = Object.keys(constraints).filter((id) => !requestedOrder.includes(id))
      .sort((a, b) => constraints[a].order - constraints[b].order || a.localeCompare(b));
    const rig = { version: 4,
      setup: { mode: source.setup?.mode || "cutout", restFrame: Math.max(1, Math.round(source.setup?.restFrame || 1)),
        units: source.setup?.units || "px" },
      bones, slots, attachments, bindings, meshes: clone(source.meshes || {}),
      deformers: rigDeformersData(source.deformers), constraints,
      constraintOrder: [...requestedOrder, ...remainder], controllers: clone(source.controllers || {}),
      actions: clone(source.actions || {}), channels, switches: rigSwitchesData(source.switches, attachments),
      physics: clone(source.physics || {}), diagnostics: { valid: true, errors: [], warnings: [] } };
    // `nodes` es sólo el nombre de compatibilidad usado por la UI v3. Comparte
    // la misma referencia que `bones`; el JSON canónico nunca serializa ambos.
    rig.nodes = rig.bones;
    rig.diagnostics = rigDiagnostics(rig);
    return rig;
  }

  function rigToJSON(rig) {
    const normalized = rigData(rig), out = clone(normalized);
    delete out.nodes;
    out.diagnostics = rigDiagnostics(normalized);
    return out;
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

  /** Un estilo: un color con nombre y opacidad, referenciable desde el dibujo.
   *  En OpenToonz es un "style" de la paleta: si cambia el estilo, cambian todos
   *  los elementos que lo referencian. Acá es el registro canónico de ese color. */
  class Style {
    constructor(data = {}) {
      this.id = data.id || uid("st");
      // El `id` es la identidad del estilo adentro del modelo. El `index` es su
      // NUMERO CORTO, y es lo que queda escrito en cada trazo del dibujo: un
      // uid repetido en cada elemento del SVG no se puede leer ni escribir a
      // mano, y el numero es justamente lo que en una paleta se nombra.
      // No se reordena ni se reusa: si cambiara, los trazos apuntarian a otro
      // color. Lo asigna la paleta al agregar el estilo.
      this.index = Math.max(0, Math.round(Number(data.index) || 0));
      this.name = data.name || "Estilo";
      this.color = Style.normalizeColor(data.color);
      this.opacity = Style.normalizeOpacity(data.opacity);
      this.meta = clone(data.meta || {});
    }
    static normalizeColor(c) {
      if (c == null || c === "") return "#000000";
      const s = String(c).trim();
      if (/^#?[0-9a-fA-F]{3}$/.test(s)) {
        const h = s.replace("#", "");
        return ("#" + h[0] + h[0] + h[1] + h[1] + h[2] + h[2]).toLowerCase();
      }
      if (/^#?[0-9a-fA-F]{6}$/.test(s)) return ("#" + s.replace("#", "")).toLowerCase();
      return s; // color con nombre o rgb()/rgba(): se respeta tal cual
    }
    static normalizeOpacity(o) {
      const n = Number(o);
      if (o == null || !Number.isFinite(n)) return 1;
      return Math.max(0, Math.min(1, n));
    }
    setColor(color) { this.color = Style.normalizeColor(color); return this; }
    setOpacity(opacity) { this.opacity = Style.normalizeOpacity(opacity); return this; }
    rename(name) { if (name) this.name = name; return this; }
    toJSON() { return { id: this.id, index: this.index, name: this.name, color: this.color,
                        opacity: this.opacity, meta: this.meta }; }
  }

  /** Una paleta: colección de estilos asociada a un Level. Un Level tiene a lo
   *  sumo una paleta (por `paletteId`); la paleta puede ser compartida. */
  class Palette {
    constructor(data = {}) {
      this.id = data.id || uid("pl");
      this.name = data.name || "Paleta";
      this.locked = !!data.locked;
      this.styles = (data.styles || []).map((s) => new Style(s));
      // paletas guardadas antes de que el estilo tuviera numero: se les asigna
      // uno en el orden en que estaban, para no perder ninguna referencia
      let libre = this.nextIndex();
      for (const s of this.styles) if (!s.index) s.index = libre++;
    }
    style(id) { return this.styles.find((s) => s.id === id) || null; }
    styleByName(name) { return this.styles.find((s) => s.name === name) || null; }
    /** Estilo por NUMERO: es como lo referencia el dibujo. */
    byIndex(i) { return this.styles.find((s) => s.index === Number(i)) || null; }
    /** Estilo por color exacto (para adoptar dibujos que ya existian). */
    byColor(color) {
      const c = Style.normalizeColor(color);
      return this.styles.find((s) => s.color === c) || null;
    }
    indices() { return this.styles.map((s) => s.index).filter(Boolean).sort((a, b) => a - b); }
    nextIndex() { const n = this.indices(); return n.length ? n[n.length - 1] + 1 : 1; }
    /** Crea un estilo. Si el nombre ya existe, devuelve el que había: nunca se
     *  pisan estilos en silencio. */
    addStyle(name, color, opacity) {
      const n = name || `Estilo ${this.styles.length + 1}`;
      const ya = this.styleByName(n);
      if (ya) return ya;
      const s = new Style({ name: n, color, opacity, index: this.nextIndex() });
      this.styles.push(s);
      return s;
    }
    removeStyle(id) {
      if (this.locked) return null;
      const i = this.styles.findIndex((s) => s.id === id);
      if (i < 0) return null;
      return this.styles.splice(i, 1)[0];
    }
    toJSON() { return { id: this.id, name: this.name, locked: this.locked, styles: this.styles.map((s) => s.toJSON()) }; }
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
      this.palettes = (data.palettes || []).map((p) => new Palette(p));
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

    palette(id) { return this.palettes.find((p) => p.id === id) || null; }
    addPalette(name) {
      const p = new Palette({ name: name || `Paleta ${this.palettes.length + 1}` });
      this.palettes.push(p); this.touch(); return p;
    }
    /** La paleta asociada a un nivel (por paletteId), o null. */
    levelPalette(levelId) {
      const lv = this.level(levelId);
      return lv && lv.paletteId ? this.palette(lv.paletteId) : null;
    }
    /** Vincula un nivel a una paleta, o lo desvincula con null. */
    setLevelPalette(levelId, paletteId) {
      const lv = this.level(levelId);
      if (!lv) return false;
      if (paletteId != null && !this.palette(paletteId)) return false;
      lv.paletteId = paletteId || null; this.touch(); return true;
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

    rigNode(id) { return this.rig.bones[id] || null; }
    rigBone(id) { return this.rigNode(id); }
    rigSlot(id) { return this.rig.slots[id] || null; }
    rigAttachment(id) { return this.rig.attachments[id] || null; }
    /** El dibujo que va en un slot. Con `frame` respeta las claves de
     *  sustitucion; sin `frame`, el que este activo en el slot.
     *  Un dibujo NO se interpola: vale el de la ultima clave <= frame. */
    rigActiveAttachment(slotId, frame) {
      const slot = this.rigSlot(slotId);
      if (!slot) return null;
      if (frame != null) {
        const id = this.rigSwitchAt(slotId, frame);
        if (id) return this.rigAttachment(id);
      }
      return slot.activeAttachmentId ? this.rigAttachment(slot.activeAttachmentId) : null;
    }

    /** Todos los dibujos disponibles para un slot, en orden de creacion. */
    rigVariants(slotId) {
      return Object.values(this.rig.attachments || {})
        .filter((a) => a.slotId === slotId)
        .sort((a, b) => (a.order || 0) - (b.order || 0) || a.id.localeCompare(b.id));
    }

    rigSwitch(slotId) { return (this.rig.switches || {})[slotId] || null; }

    rigDeformer(boneId) { return (this.rig.deformers || {})[boneId] || null; }

    /** La curva de control de una pieza en un cuadro. Los puntos se interpolan
     *  linealmente entre claves; sin claves vale la curva en reposo, o sea el
     *  dibujo sin doblar. */
    rigDeformerAt(boneId, frame) {
      const d = this.rigDeformer(boneId);
      if (!d || !Array.isArray(d.rest) || d.rest.length < 2) return null;
      const keys = d.keys || {};
      const nums = Object.keys(keys).map(Number).filter(Number.isFinite).sort((a, b) => a - b);
      if (!nums.length) return clone(d.rest);
      const f = Number(frame) || 1;
      const mezcla = (A, B, t) => A.map((pt, i) => ({
        x: pt.x + (((B[i] || pt).x) - pt.x) * t,
        y: pt.y + (((B[i] || pt).y) - pt.y) * t }));
      if (keys[f]) return clone(keys[f]);
      if (f <= nums[0]) return clone(keys[nums[0]]);
      if (f >= nums.at(-1)) return clone(keys[nums.at(-1)]);
      let a = nums[0], b = nums.at(-1);
      for (const k of nums) { if (k <= f) a = k; else { b = k; break; } }
      return mezcla(keys[a], keys[b], (f - a) / (b - a));
    }

    /** El mapeador listo para usar en un cuadro, o null si no hay que doblar
     *  nada. Devuelve null tambien cuando la curva esta en reposo: asi el
     *  dibujo original se deja intacto en vez de reescribirlo por gusto. */
    rigDeformadorAt(boneId, frame) {
      const d = this.rigDeformer(boneId);
      if (!d || d.enabled === false) return null;
      const posado = this.rigDeformerAt(boneId, frame);
      if (!posado) return null;
      const quieto = d.rest.every((pt, i) =>
        Math.abs(pt.x - posado[i].x) < 1e-6 && Math.abs(pt.y - posado[i].y) < 1e-6);
      if (quieto) return null;
      return rigDeformador(d.rest, posado);
    }

    /** El attachment vigente en un cuadro segun las claves de sustitucion. */
    rigSwitchAt(slotId, frame) {
      const sw = this.rigSwitch(slotId), keys = sw && sw.keys;
      if (!keys) return null;
      const nums = Object.keys(keys).map(Number).filter(Number.isFinite).sort((a, b) => a - b);
      if (!nums.length) return null;
      const f = Number(frame) || 1;
      if (f < nums[0]) return null;            // antes de la primera, manda el slot
      let elegido = nums[0];
      for (const k of nums) { if (k <= f) elegido = k; else break; }
      const id = keys[elegido];
      return this.rig.attachments[id] ? id : null;
    }
    rigOrderedConstraints() {
      return rigOrderedConstraintIds(this.rig).map((id) => this.rig.constraints[id]).filter(Boolean);
    }
    rigChannel(path) { return this.rig.channels[path] || null; }
    rigChannelValue(path, frame, fallback = 0) {
      const channel = this.rigChannel(path), keys = channel?.keys || {};
      const frames = Object.keys(keys).map(Number).filter(Number.isFinite).sort((a, b) => a - b);
      if (!frames.length) return fallback;
      const f = Number(frame) || 1;
      if (keys[f] != null) return clone(keys[f]);
      if (f <= frames[0]) return clone(keys[frames[0]]);
      if (f >= frames.at(-1)) return clone(keys[frames.at(-1)]);
      let a = frames[0], b = frames.at(-1);
      for (const k of frames) { if (k <= f) a = k; else { b = k; break; } }
      if (channel.interpolation === "step" || typeof keys[a] !== "number" || typeof keys[b] !== "number")
        return clone(keys[a]);
      // El canal pisa a la pose interpolada, asi que la curva tiene que
      // aplicarse TAMBIEN aca o no se notaria nada.
      const ease = channel.ease || {};
      return keys[a] + (keys[b] - keys[a]) * rigEaseT((f - a) / (b - a), ease[a], ease[b]);
    }
    validateRig() {
      this.rig.diagnostics = rigDiagnostics(this.rig);
      return clone(this.rig.diagnostics);
    }
    rigPose(id, frame) {
      const node = this.rigNode(id), keys = node && node.keys;
      if (!node) return null;
      const frames = Object.keys(keys).map(Number).filter(Number.isFinite).sort((a, b) => a - b);
      if (!frames.length) {
        const rest = clone(node.rest || rigPoseData());
        for (const property of ["x", "y", "r", "sx", "sy"])
          rest[property] = this.rigChannelValue(rigChannelPath(id, property), frame, rest[property]);
        return rest;
      }
      const f = Number(frame) || 1;
      let pose;
      if (keys[f]) pose = rigPoseData(keys[f]);
      else if (f <= frames[0]) pose = rigPoseData(keys[frames[0]]);
      else if (f >= frames.at(-1)) pose = rigPoseData(keys[frames.at(-1)]);
      if (pose) {
        for (const property of ["x", "y", "r", "sx", "sy"])
          pose[property] = this.rigChannelValue(rigChannelPath(id, property), frame, pose[property]);
        return pose;
      }
      let a = frames[0], b = frames.at(-1);
      for (const k of frames) { if (k <= f) a = k; else { b = k; break; } }
      const p = keys[a], q = keys[b];
      const t = rigEaseT((f - a) / (b - a), p.ease, q.ease);
      const lerp = (x, y) => Number(x || 0) + (Number(y || 0) - Number(x || 0)) * t;
      pose = { x: lerp(p.x, q.x), y: lerp(p.y, q.y), r: lerp(p.r, q.r),
        sx: lerp(p.sx == null ? (p.s == null ? 1 : p.s) : p.sx, q.sx == null ? (q.s == null ? 1 : q.s) : q.sx),
        sy: lerp(p.sy == null ? (p.s == null ? 1 : p.s) : p.sy, q.sy == null ? (q.s == null ? 1 : q.s) : q.sy) };
      for (const property of ["x", "y", "r", "sx", "sy"])
        pose[property] = this.rigChannelValue(rigChannelPath(id, property), frame, pose[property]);
      return pose;
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

    /** El camino de vuelta: de coordenadas del lienzo al espacio propio de la
     *  pieza. Lo necesita cualquier cosa que se arrastre en la mesa y se guarde
     *  en el dibujo —la curva del deformador—, porque el dibujo vive antes de
     *  que se le aplique la matriz del hueso. */
    rigLocalPoint(id, frame, point, overrides = {}) {
      return matPoint(matInverse(this.rigWorldMatrix(id, frame, overrides)), point || { x: 0, y: 0 });
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
      const clamp = (value, node) => rigAplicarTope(node.limits, value);
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
               palettes: this.palettes.map((p) => p.toJSON()),
               camera: this.camera, audio: this.audio, rig: rigToJSON(this.rig), revision: this.revision };
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
  animation.Palette = Palette;
  animation.Style = Style;
  animation.clone = clone;
  animation.rigData = rigData;
  animation.rigToJSON = rigToJSON;
  animation.rigChannelPath = rigChannelPath;
  animation.rigEaseData = rigEaseData;
  animation.rigSinTope = rigSinTope;
  animation.rigAplicarTope = rigAplicarTope;
  animation.rigDeformador = rigDeformador;
  animation.rigEaseT = rigEaseT;
  animation.rigChannelData = rigChannelData;
  animation.rigConstraintData = rigConstraintData;
  animation.rigDiagnostics = rigDiagnostics;
  animation.rigReadiness = rigReadiness;
  animation.rigConstraintHasCycle = rigConstraintHasCycle;
  animation.rigOrderedConstraintIds = rigOrderedConstraintIds;

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
