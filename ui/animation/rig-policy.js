/* Reglas puras de producto para el flujo de rigging.
   Mantenerlas fuera de app.js evita que la interfaz vuelva a decidir por su
   cuenta qué puede probarse o animarse. */
(function (global) {
  "use strict";
  const LOW = global.LOW = global.LOW || {};
  const animation = LOW.animation = LOW.animation || {};

  animation.rigWorkflowStatus = function (report, artCount = 0) {
    const r = report || {}, loose = r.unboundElementIds?.length || 0;
    if (r.errors?.length) return { state: "error", title: "Rig con errores",
      detail: `${r.errors.length} problema(s) de jerarquía o vínculos · corregilos antes de animar.` };
    if (r.readyToAnimate && r.boundBoneCount > 0) return {
      state: loose ? "warning" : "ready", title: "Rig listo para animar",
      detail: `${r.boundBoneCount} hueso(s) vinculados` +
        (loose ? ` · ${loose} pieza(s) todavía sueltas` : " · todas las piezas detectadas están vinculadas")
    };
    if (r.readyToAnimate) return { state: "skeleton", title: "Esqueleto animable",
      detail: `${r.boneCount || 0} hueso(s) · podés crear movimiento ahora y vincular el personaje después` };
    if (artCount) return { state: "warning", title: "Arte sin esqueleto",
      detail: `${artCount} pieza(s) detectadas · colocá una plantilla o dibujá el alambre.` };
    return { state: "empty", title: "Rig sin preparar", detail: "Importá piezas o colocá un esqueleto." };
  };
})(window);
