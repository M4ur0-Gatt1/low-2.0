/* ══════════════════════════════════════════════════════════════════════════
   ELEGIR UNA HERRAMIENTA DE DIBUJO CON EL ESQUELETO PUESTO

   Reportado mirando la pantalla: «las herramientas del rigging tienen
   defectos, aparece como un pincel en lugar de hacer lo que debería».

   Medido: con `DZ.rigMode` encendido, el riel sigue ofreciendo TODAS las
   herramientas de dibujo —brush, pencil, eraser, bucket, dropper, pen, ruler,
   inflator, iron, pliers, magnet— y `dzSetTool()` las acepta sin preguntar.
   Queda un pincel encima del esqueleto: el gesto que uno hace para mover una
   articulación pinta, y la herramienta de rig «no hace lo que debería».

   El contrato ya existía y no se estaba usando: `application/mode-machine.js`
   es «la autoridad sobre qué herramientas son válidas en dibujo y rigging»,
   pero `dzSetTool` nunca la consultaba.

   QUÉ HACE ESTE MÓDULO. Si se elige una herramienta de dibujo con el esqueleto
   puesto, SALE del modo rig y la aplica. No la rechaza: el botón dice «pincel»
   y quien lo aprieta quiere pintar; un botón que no hace nada es otro defecto,
   no un arreglo. Pero lo DICE, porque salir de un modo sin avisar es la otra
   forma de perder a alguien.

   Se envuelve `dzSetTool` desde afuera: `app.js` está justo en el techo del
   presupuesto de §12 y esto es una preocupación separada.

   @module application/herramienta-y-modo
   ══════════════════════════════════════════════════════════════════════════ */
(function (global) {
  "use strict";
  const LOW = global.LOW = global.LOW || {};
  const application = LOW.application = LOW.application || {};

  /** Las que SÍ se usan con el esqueleto puesto. Las de rig empiezan con
   *  «rig»; las otras tres se listan porque son de navegación y edición
   *  estructural, no de pintar: sirven igual mientras se arma el muñeco. */
  const SIRVEN_CON_RIG = new Set(["select", "direct", "hand", "pivot"]);
  const esDeRig = (t) => typeof t === "string" && t.startsWith("rig");
  const valeConRig = (t) => esDeRig(t) || SIRVEN_CON_RIG.has(t);

  function enRigMode() {
    // OJO: `DZ` es `const` en app.js, asi que NO es propiedad de window.
    // Leerlo como `global.DZ` da undefined EN SILENCIO y este guard no se
    // activa nunca. Ya me paso una vez y el verificador de contratos del repo
    // lo marca: se nombra suelto, con guarda `typeof`.
    const estado = (typeof DZ !== "undefined") ? DZ : null;
    return !!(estado && estado.rigMode);
  }

  /** Envuelve `dzSetTool`. Declaración de función en script clásico: vive en el
   *  objeto global, así que reemplazarla acá alcanza para todos los llamadores. */
  function envolver() {
    const original = global.dzSetTool;
    if (typeof original !== "function" || original.__conModo) return false;
    const envuelto = function (t) {
      if (enRigMode() && !valeConRig(t)) {
        // el botón dice «pincel»: se sale del rig y se pinta, pero se avisa
        try {
          if (typeof global.dzRigToggle === "function") global.dzRigToggle();
          if (typeof global.dzSetStatus === "function")
            global.dzSetStatus(" Salí del esqueleto para usar «" + t + "»: " +
              "las herramientas de dibujo no se aplican sobre el rig");
        } catch (_) { /* si no se puede salir, al menos no queda un pincel mudo */ }
      }
      return original.call(this, t);
    };
    envuelto.__conModo = true;
    global.dzSetTool = envuelto;
    return true;
  }

  application.herramientaYModo = { SIRVEN_CON_RIG, valeConRig, esDeRig, envolver, enRigMode };
  // carga DESPUÉS de app.js, así que `dzSetTool` ya existe
  envolver();
})(window);
