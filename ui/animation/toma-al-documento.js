/* ══ 🎞 LA ACTUACIÓN, ADENTRO DEL DOCUMENTO ══════════════════════════════════
   El titiritero captura la mesa muchas veces por segundo mientras movés el
   muñeco con la mano, y al cortar guarda la toma. Guardarla era escribir
   archivos `nombre_fNNN.svg` al lado del diseño, por el puente:

       api.record_take(DZ.path, snaps)

   Con un `.low` eso no existe: `DZ.path` está en null y el puente encima exige
   que el archivo se llame `_fNNN.svg`. Resultado: con el flujo por defecto del
   programa —«Nuevo documento»— el titiritero contestaba «abrí un diseño
   primero» y no se podía actuar nada.

   Acá la toma se escribe donde vive el trabajo: cada captura es un DIBUJO del
   nivel de la capa activa, expuesto en cuadros consecutivos después del último.
   Es lo mismo que hace el programa cuando duplicás un cuadro, sólo que muchas
   veces seguidas y en una sola operación. */
(function (global) {
  "use strict";

  /**
   * Escribe una toma completa como cuadros consecutivos del documento.
   * @param {object} doc  LowDoc abierto.
   * @param {string[]} contenidos  el contenido de la mesa, uno por captura.
   * @returns {{desde:number, n:number}|{error:string}}
   */
  function dzTomaAlDocumento(doc, contenidos) {
    if (!doc || !doc.scene) return { error: "no hay documento donde grabar la toma" };
    if (!Array.isArray(contenidos) || !contenidos.length) return { error: "toma vacía" };
    const sc = doc.scene;
    const capa = doc.layer || (sc.layers || [])[0];
    if (!capa) return { error: "el documento no tiene capas donde grabar la toma" };
    if (capa.locked) return { error: "la capa está bloqueada: destrabala y volvé a actuar" };
    const nivel = typeof sc.level === "function" ? sc.level(capa.levelId) : null;
    if (!nivel || typeof nivel.addDrawing !== "function")
      return { error: "la capa no tiene nivel donde escribir los dibujos" };

    // Después del último cuadro EXPUESTO de toda la escena: una toma nueva no
    // pisa lo que ya estaba animado, se agrega atrás como una toma más.
    const ultimo = typeof sc.lastFrame === "function" ? sc.lastFrame() : 0;
    const desde = Math.max(1, ultimo + 1);
    // Y con números de dibujo libres: reusar uno existente cambiaría el dibujo
    // en TODOS los cuadros donde ya estaba expuesto.
    const usados = typeof nivel.numbers === "function" ? nivel.numbers() : [];
    let numero = (usados.length ? Math.max.apply(null, usados) : 0) + 1;

    for (let i = 0; i < contenidos.length; i++) {
      nivel.addDrawing(numero + i, contenidos[i] || "");
      sc.expose(capa.id, desde + i, numero + i);
    }
    if (typeof doc.touch === "function") doc.touch();
    else if (typeof sc.touch === "function") sc.touch();
    return { desde, n: contenidos.length };
  }

  global.dzTomaAlDocumento = dzTomaAlDocumento;
  global.LOW = global.LOW || {};
  global.LOW.animation = global.LOW.animation || {};
  global.LOW.animation.tomaAlDocumento = dzTomaAlDocumento;
})(typeof window !== "undefined" ? window : globalThis);
