/* ══════════════════════════════════════════════════════════════════════════
   ATAJOS DE ANIMACIÓN

   Los que se usan sin mirar el teclado, tomados del flujo de OpenToonz. El
   detalle que más cambia el trabajo diario es la distinción entre moverse por
   FRAMES y moverse por DIBUJOS: dentro de un hold de cuatro frames uno no
   quiere pulsar cuatro veces para llegar al dibujo siguiente.

     ← →            frame anterior / siguiente
     ↑ ↓            dibujo anterior / siguiente (saltea los holds)
     Inicio / Fin   primer / último frame del rango
     Espacio        reproducir / parar
     L              loop
     . ,            alargar / acortar la exposición actual
     Insert         insertar un frame vacío
     Supr           vaciar la celda (el DIBUJO no se toca)
     O              papel cebolla
     Ctrl+C/X/V     copiar / cortar / pegar celdas

   No se activan mientras se escribe en un campo: eso arruinaba los atajos de
   una tecla en cualquier programa que lo haya intentado.

   @module animation/shortcuts
   ══════════════════════════════════════════════════════════════════════════ */
(function (global) {
  "use strict";
  const LOW = global.LOW = global.LOW || {};
  const animation = LOW.animation = LOW.animation || {};

  function escribiendo() {
    const e = document.activeElement;
    if (!e) return false;
    const t = (e.tagName || "").toLowerCase();
    return t === "input" || t === "textarea" || t === "select" || e.isContentEditable;
  }

  /** Portapapeles de celdas: guarda REFERENCIAS, no dibujos. Pegar en otro
   *  lado no duplica el dibujo, lo vuelve a exponer — que es justo la ventaja
   *  de tener el nivel separado del tiempo. */
  const clip = { cells: [] };

  function wire(getDoc, getPlayback, opciones) {
    const opts = opciones || {};
    if (global.__lowAnimKeys) return;
    global.__lowAnimKeys = true;

    global.addEventListener("keydown", (e) => {
      const doc = getDoc && getDoc();
      const pb = getPlayback && getPlayback();
      if (!doc || escribiendo()) return;
      const ctrl = e.ctrlKey || e.metaKey;
      const ly = doc.layer;
      let manejado = true;

      switch (e.key) {
        case "ArrowLeft":  pb ? pb.step(-1) : doc.step(-1); break;
        case "ArrowRight": pb ? pb.step(+1) : doc.step(+1); break;
        // ↑ va hacia ATRÁS en el tiempo: en una xsheet el tiempo baja, así que
        // "arriba" es el dibujo anterior. Es la convención de OpenToonz.
        case "ArrowUp":    pb ? pb.stepDrawing(-1) : doc.stepDrawing(-1); break;
        case "ArrowDown":  pb ? pb.stepDrawing(+1) : doc.stepDrawing(+1); break;
        case "Home":       pb ? pb.first() : doc.goTo(1); break;
        case "End":        if (pb) pb.last(); else doc.goTo(doc.scene.lastFrame() || 1); break;
        case " ":          if (pb) pb.toggle(); break;
        case "Insert":     doc.apply("insert", doc.frame, 1); break;
        case "Delete":     doc.apply("clear", doc.frame, doc.frame); break;
        case ".":          doc.apply("stepChange", doc.frame, +1); break;
        case ",":          doc.apply("stepChange", doc.frame, -1); break;
        default: manejado = false;
      }

      if (!manejado && !ctrl) {
        const k = e.key.toLowerCase();
        if (k === "l" && pb) { pb.setLoop(!pb.loop); manejado = true; }
        else if (k === "o" && opts.toggleOnion) { opts.toggleOnion(); manejado = true; }
      }

      // copiar / cortar / pegar CELDAS (referencias, no dibujos)
      if (!manejado && ctrl && ly) {
        const k = e.key.toLowerCase();
        const sel = (opts.getSelection && opts.getSelection()) || { from: doc.frame, to: doc.frame };
        if (k === "c") {
          clip.cells = animation.exposures.read(ly, sel.from, sel.to);
          manejado = true;
          if (opts.status) opts.status(`${clip.cells.length} celda(s) copiada(s)`);
        } else if (k === "x") {
          clip.cells = animation.exposures.read(ly, sel.from, sel.to);
          doc.apply("clear", sel.from, sel.to);
          manejado = true;
        } else if (k === "v" && clip.cells.length) {
          animation.exposures.write(ly, doc.frame, clip.cells);
          doc.touch(); doc.emit("cells");
          manejado = true;
          if (opts.status) opts.status(`${clip.cells.length} celda(s) pegada(s) en el frame ${doc.frame}`);
        }
      }

      if (manejado) { e.preventDefault(); e.stopPropagation(); }
    }, true);   // en captura: los atajos de animación mandan sobre los del editor
  }

  animation.shortcuts = { wire, clip };
})(window);
