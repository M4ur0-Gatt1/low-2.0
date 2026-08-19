/* ══════════════════════════════════════════════════════════════════════════
   PRUEBAS FUNCIONALES DEL MODELO 2D

   No comprueban que el código "corra": comprueban que se pueda hacer el
   trabajo. La última prueba es el test de aceptación pedido — poses en 1,5,9,13,
   trabajar en 2s, extender un hold, mover una exposición y borrarla SIN perder
   el dibujo, guardar, reabrir y seguir donde se dejó.

   Se ejecuta desde la consola:  LOW.animation.runTests()

   @module animation/model-tests
   ══════════════════════════════════════════════════════════════════════════ */
(function (global) {
  "use strict";
  const LOW = global.LOW = global.LOW || {};
  const animation = LOW.animation = LOW.animation || {};

  function runTests() {
    const { Scene, exposures: X, onion } = animation;
    const res = [];
    const ok = (nombre, cond, detalle) => res.push({ nombre, ok: !!cond, detalle: detalle || "" });
    const cells = (ly, n) => Array.from({ length: n }, (_, i) => ly.cellAt(i + 1));

    // ── 1. Drawing ≠ Frame: un dibujo expuesto en varios frames es UN dibujo ──
    {
      const sc = new Scene({ fps: 24 });
      const lv = sc.addLevel("A");
      const ly = sc.addLayer(lv.id, "A");
      sc.expose(ly.id, 1, 1); sc.expose(ly.id, 2, 1); sc.expose(ly.id, 3, 1);
      ok("un dibujo en 3 frames sigue siendo UN dibujo", lv.drawings.length === 1,
         `dibujos=${lv.drawings.length}`);
      ok("los 3 frames resuelven al mismo objeto",
         sc.drawingAt(ly.id, 1) === sc.drawingAt(ly.id, 3));
      ok("el hold se detecta", ly.isHold(2) && ly.holdLength(1) === 3,
         `largo=${ly.holdLength(1)}`);
    }

    // ── 2. Borrar una exposición NO borra el dibujo ──
    {
      const sc = new Scene();
      const lv = sc.addLevel("A"); const ly = sc.addLayer(lv.id, "A");
      sc.expose(ly.id, 1, 1); sc.expose(ly.id, 2, 2);
      lv.byNumber(2).content = "<path d='M0 0 L10 10'/>";
      X.clear(ly, 2, 2);
      ok("borrar la celda deja el dibujo en el nivel", !!lv.byNumber(2));
      ok("y conserva su contenido", lv.byNumber(2).content.includes("path"));
      ok("la celda quedó vacía", ly.cellAt(2) == null);
    }

    // ── 3. Trabajar en 2s ──
    {
      const sc = new Scene();
      const lv = sc.addLevel("A"); const ly = sc.addLayer(lv.id, "A");
      [1, 2, 3, 4].forEach((n) => sc.expose(ly.id, n, n));
      X.step(ly, 1, 4, 2);
      ok("step 2 → 1,1,2,2,3,3,4,4", JSON.stringify(cells(ly, 8)) === JSON.stringify([1,1,2,2,3,3,4,4]),
         JSON.stringify(cells(ly, 8)));
      X.each(ly, 1, 8, 2);
      ok("each 2 vuelve a 1s", JSON.stringify(cells(ly, 4)) === JSON.stringify([1,2,3,4]),
         JSON.stringify(cells(ly, 4)));
    }

    // ── 4. Extender y acortar un hold ──
    {
      const sc = new Scene();
      const lv = sc.addLevel("A"); const ly = sc.addLayer(lv.id, "A");
      sc.expose(ly.id, 1, 1); sc.expose(ly.id, 2, 2); sc.expose(ly.id, 3, 3);
      X.stepChange(ly, 1, +2);
      ok("extender el hold empuja lo que sigue",
         JSON.stringify(cells(ly, 5)) === JSON.stringify([1,1,1,2,3]), JSON.stringify(cells(ly, 5)));
      X.stepChange(ly, 1, -2);
      ok("acortarlo lo devuelve", JSON.stringify(cells(ly, 3)) === JSON.stringify([1,2,3]),
         JSON.stringify(cells(ly, 3)));
    }

    // ── 5. Mover una exposición sin destruir nada ──
    {
      const sc = new Scene();
      const lv = sc.addLevel("A"); const ly = sc.addLayer(lv.id, "A");
      [1,2,3,4].forEach((n) => sc.expose(ly.id, n, n));
      X.move(ly, 1, 1, 4);
      ok("mover deja los 4 dibujos vivos", lv.drawings.length === 4);
      ok("y ninguna celda se perdió", cells(ly, 4).filter((c) => c != null).length === 4,
         JSON.stringify(cells(ly, 4)));
    }

    // ── 6. Navegar entre DIBUJOS salteando holds ──
    {
      const sc = new Scene();
      const lv = sc.addLevel("A"); const ly = sc.addLayer(lv.id, "A");
      [1,1,1,2,2,3].forEach((n, i) => sc.expose(ly.id, i + 1, n));
      ok("desde el frame 1, el próximo dibujo está en el 4", X.nextDrawingFrame(ly, 1, 1) === 4,
         String(X.nextDrawingFrame(ly, 1, 1)));
      ok("desde el 6, el anterior está en el 4", X.nextDrawingFrame(ly, 6, -1) === 4,
         String(X.nextDrawingFrame(ly, 6, -1)));
    }

    // ── 7. ONION SKIN sobre dibujos, no sobre frames ──
    {
      const sc = new Scene();
      const lv = sc.addLevel("A"); const ly = sc.addLayer(lv.id, "A");
      // 1,1,1,2,2,3 — parado en el frame 3 (último del hold del dibujo 1)
      [1,1,1,2,2,3].forEach((n, i) => sc.expose(ly.id, i + 1, n));
      lv.drawings.forEach((d) => { d.content = "<path d='M0 0 L1 1'/>"; });
      const r = onion.resolve(sc, ly.id, 3, { before: 1, after: 1 });
      const nums = r.map((s) => s.drawing.number).sort();
      ok("el papel cebolla NO repite el dibujo del hold", !nums.includes(1),
         `mostró ${JSON.stringify(nums)}`);
      ok("muestra el dibujo siguiente distinto (2)", nums.includes(2), JSON.stringify(nums));
      const r2 = onion.resolve(sc, ly.id, 4, { before: 1, after: 1 });
      const n2 = r2.map((s) => s.drawing.number).sort();
      ok("desde el 4 muestra el 1 (atrás) y el 3 (adelante)",
         n2.includes(1) && n2.includes(3), JSON.stringify(n2));
      const conColor = r2.every((s) => s.color && s.opacity > 0);
      ok("cada uno viene con color y opacidad", conColor);
    }

    // ── 8. Fill handle: repetir y continuar progresiones ──
    {
      const sc = new Scene();
      const lv = sc.addLevel("A"); const ly = sc.addLayer(lv.id, "A");
      sc.expose(ly.id, 1, 1); sc.expose(ly.id, 2, 3); sc.expose(ly.id, 3, 5);
      X.fillHandle(ly, 1, 3, 6);
      ok("continúa la progresión 1,3,5 → 7,9,11",
         JSON.stringify(cells(ly, 6)) === JSON.stringify([1,3,5,7,9,11]), JSON.stringify(cells(ly, 6)));
    }

    // ── 9. TEST DE ACEPTACIÓN: el flujo completo ──
    {
      const sc = new Scene({ fps: 24, name: "Prueba" });
      const lv = sc.addLevel("Personaje");
      const ly = sc.addLayer(lv.id, "Personaje");
      // poses en 1, 5, 9, 13
      [[1,1],[5,2],[9,3],[13,4]].forEach(([f, d]) => sc.expose(ly.id, f, d));
      lv.drawings.forEach((d) => { d.content = `<path d='M0 0 L${d.number} ${d.number}'/>`; });
      X.autoexpose(ly, 1, 16);
      ok("autoexpose sostiene cada pose hasta la siguiente",
         ly.cellAt(4) === 1 && ly.cellAt(8) === 2 && ly.cellAt(12) === 3,
         JSON.stringify(cells(ly, 16)));
      // intercalar un dibujo nuevo
      const inter = lv.addDrawing(5, "<path d='M0 0 L5 5'/>");
      sc.expose(ly.id, 3, inter.number);
      ok("se puede intercalar sin tocar el resto", ly.cellAt(3) === 5 && ly.cellAt(4) === 1);
      // pasar a 2s
      X.step(ly, 1, 16, 2);
      const enDos = cells(ly, 8);
      ok("pasar a 2s duplica cada exposición", enDos[0] === enDos[1] && enDos[2] === enDos[3],
         JSON.stringify(enDos));
      // extender un hold y borrar una exposición
      const antesDibujos = lv.drawings.length;
      X.stepChange(ly, 1, +2);
      X.clear(ly, 5, 5);
      ok("después de todo el timing, no se perdió ni un dibujo",
         lv.drawings.length === antesDibujos, `${lv.drawings.length} vs ${antesDibujos}`);
      // guardar → reabrir
      const json = JSON.stringify(sc.toJSON());
      const sc2 = new animation.Scene(JSON.parse(json));
      const ly2 = sc2.layers[0], lv2 = sc2.levels[0];
      ok("al reabrir, mismos dibujos", lv2.drawings.length === lv.drawings.length);
      ok("al reabrir, mismo timing",
         JSON.stringify(ly2.cells) === JSON.stringify(ly.cells));
      ok("al reabrir, el contenido de los dibujos sigue ahí",
         lv2.drawings.every((d) => d.content === lv.byNumber(d.number).content));
      ok("al reabrir, los fps se conservan", sc2.fps === 24);
    }

    const fallan = res.filter((r) => !r.ok);
    return { total: res.length, ok: res.length - fallan.length, fallan, detalle: res };
  }

  animation.runTests = runTests;
})(window);
