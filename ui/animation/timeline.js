(function (global) {
  "use strict";
  const animation = (global.LOW = global.LOW || {}).animation = global.LOW.animation || {};

  /* Estado de VISTA de la timeline. No pertenece a Scene ni a LowDoc: cambiar
     el zoom, la densidad o plegar una pista no modifica la obra, no ensucia el
     archivo y no entra en Ctrl+Z. El tiempo continúa viviendo exclusivamente
     en las celdas, claves y rangos del documento. */
  const VIEW_DEFAULTS = Object.freeze({
    frameWidth: 16,
    density: "normal",
    hideEmpty: false,
    focusSelected: false,
    compact: false,
    collapsed: {}
  });
  // La columna de nombres es el ÚNICO costo horizontal fijo de la timeline:
  // aparece en todas las filas y queda pegada al borde con el scroll. Angostarla
  // es lo que devuelve ancho real para tiempo; la escala la sigue mandando el zoom.
  const NAME_WIDTHS = Object.freeze({ normal: 128, compact: 34 });
  const FRAME_WIDTHS = Object.freeze([6, 8, 10, 12, 16, 20, 24, 32, 40, 48]);
  const DENSITIES = Object.freeze(["compact", "normal", "comfortable"]);
  const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

  function nearestFrameWidth(value) {
    const requested = clamp(Number(value) || VIEW_DEFAULTS.frameWidth,
      FRAME_WIDTHS[0], FRAME_WIDTHS[FRAME_WIDTHS.length - 1]);
    return FRAME_WIDTHS.reduce((best, candidate) =>
      Math.abs(candidate - requested) < Math.abs(best - requested) ? candidate : best,
    VIEW_DEFAULTS.frameWidth);
  }

  function normalizeViewState(value) {
    const data = value && typeof value === "object" ? value : {};
    return {
      frameWidth: nearestFrameWidth(data.frameWidth),
      density: DENSITIES.includes(data.density) ? data.density : VIEW_DEFAULTS.density,
      hideEmpty: !!data.hideEmpty,
      focusSelected: !!data.focusSelected,
      compact: !!data.compact,
      collapsed: data.collapsed && typeof data.collapsed === "object"
        ? Object.fromEntries(Object.entries(data.collapsed).filter(([, state]) => !!state)) : {}
    };
  }

  function rowHeight(density) {
    return density === "compact" ? 18 : density === "comfortable" ? 32 : 24;
  }

  /** Ancho del encabezado de pista. `fitFrameWidth` lo necesita para no
      calcular la escala contra un ancho que ya no existe. */
  function nameWidth(compact) {
    return compact ? NAME_WIDTHS.compact : NAME_WIDTHS.normal;
  }

  /** Separación de números de regla según el zoom. Mantiene aproximadamente
      64 px entre etiquetas y evita una sopa de cifras en escenas largas. */
  function majorTickStep(frameWidth, minLabelPixels = 64) {
    const required = Math.max(1, minLabelPixels / Math.max(1, Number(frameWidth) || 1));
    const steps = [1, 2, 3, 5, 6, 10, 12, 15, 20, 24, 30, 48, 60, 120, 240, 480];
    return steps.find((step) => step >= required) || Math.ceil(required / 480) * 480;
  }

  function layerHasContent(layer) {
    return !!(layer && Array.isArray(layer.cells) && layer.cells.some((cell) => cell != null));
  }

  function visibleLayers(layers, state, selectedId) {
    const view = normalizeViewState(state);
    return (Array.isArray(layers) ? layers : []).filter((layer) => {
      if (layer.id === selectedId) return true;
      if (view.focusSelected) return false;
      if (view.hideEmpty && !layerHasContent(layer)) return false;
      return true;
    });
  }

  /** Extensión visual de todas las fuentes temporales conocidas. No crea
      cuadros ni cambia playRange: sólo evita que una clave de cámara, rig,
      audio o mocap quede fuera de la regla por no haber dibujos expuestos. */
  function extent(scene, { audio = null, mocap = null, current = 1 } = {}) {
    let last = Math.max(1, Number(current) || 1,
      scene && typeof scene.lastFrame === "function" ? scene.lastFrame() : 1,
      scene && scene.range ? Number(scene.range.out) || 0 : 0);
    const takeKeys = (keys) => {
      for (const key of Object.keys(keys || {})) last = Math.max(last, Number(key) || 0);
    };
    takeKeys(scene && scene.camera && scene.camera.keys);
    for (const plane of Object.values((scene && scene.composition && scene.composition.planes) || {}))
      takeKeys(plane && plane.keys);
    const rig = scene && scene.rig;
    for (const node of Object.values((rig && rig.nodes) || {})) takeKeys(node && node.keys);
    for (const constraint of Object.values((rig && rig.constraints) || {})) takeKeys(constraint && constraint.targetKeys);
    if (audio && Array.isArray(audio.peaks))
      last = Math.max(last, (Number(audio.offset) || 0) + audio.peaks.length);
    if (mocap && mocap.range) last = Math.max(last, Number(mocap.range.out) || 0);
    return Math.max(1, Math.ceil(last));
  }

  function fitFrameWidth(viewportWidth, from, to, headerWidth = 128) {
    const count = Math.max(1, Math.abs((Number(to) || 1) - (Number(from) || 1)) + 1);
    const available = Math.max(FRAME_WIDTHS[0], (Number(viewportWidth) || 0) - headerWidth - 18);
    return nearestFrameWidth(available / count);
  }

  function rangeFor(kind, doc, options = {}) {
    const scene = doc && doc.scene;
    if (!scene) return { from: 1, to: 1 };
    if (kind === "selection" && doc.cellSelection)
      return { from: Math.max(1, doc.cellSelection.from), to: Math.max(1, doc.cellSelection.to) };
    if (kind === "play" && typeof scene.playRange === "function") {
      const range = scene.playRange();
      return { from: Math.max(1, range.in), to: Math.max(1, range.out) };
    }
    return { from: 1, to: extent(scene, { ...options, current: doc.frame }) };
  }

  function buildPanelState({ frames = [], levels = [], current = 0, playing = false, fps = 12,
    perFrame = [], camera = {}, keys = [], displayCount = frames.length } = {}) {
    const cells = Array.from({ length: displayCount }, (_, i) => ({
      index: i, number: i + 1, exists: i < frames.length,
      name: frames[i] ? String(frames[i]).split(/[\\/]/).pop() : "",
      key: i < frames.length && keys.includes(i + 1), camera: !!camera[i + 1]
    }));
    return { frames: cells, levels: [...levels], current, playing: !!playing,
      fps: Math.max(1, +fps || 12), exposures: levels.map(level => cells.map((f, i) =>
        !!(f.exists && perFrame[i] && perFrame[i].has(level)))) };
  }
  function selection(anchor, index, extend) {
    if (!extend) return { anchor: index, from: index, to: index };
    const a = anchor == null ? index : anchor;
    return { anchor: a, from: Math.min(a, index), to: Math.max(a, index) };
  }
  animation.timeline = { VIEW_DEFAULTS, FRAME_WIDTHS, DENSITIES, NAME_WIDTHS, normalizeViewState,
    nearestFrameWidth, rowHeight, nameWidth, majorTickStep, layerHasContent, visibleLayers,
    extent, fitFrameWidth, rangeFor, buildPanelState, selection };
})(window);
