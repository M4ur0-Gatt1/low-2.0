/* C01 · Reproducción: el contrato de controles del rig.
   Uso: node tools/repro_c01_controles.js

   Objetivo: probar, ANTES de proponer cualquier arreglo, dos cosas sobre el
   estado actual de `rig.controls` / `rig.controllers`:

     1. `rig.controllers` es una clave fantasma. Nada la escribe ni la lee; el
        store real de los controles es `rig.controls`.
     2. `clearRig()` resetea la fantasma y NO el store real, así que después de
        "Eliminar esqueleto completo" quedan controles huérfanos apuntando a
        canales y huesos que ya no existen.

   Este archivo NO arregla nada: solo deja el defecto reproducible. */
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const files = [
  "ui/core/history.js",
  "ui/animation/palette.js",
  "ui/animation/scene-model.js",
  "ui/animation/rig-policy.js",
  "ui/rigging/binding.js",
  "ui/rigging/rig-input.js",
  "ui/animation/exposures.js",
  "ui/animation/onion.js",
  "ui/animation/mocap.js",
  "ui/animation/document.js",
];
global.window = global; global.self = global;
for (const rel of files) eval(fs.readFileSync(path.join(root, rel), "utf8"));
const A = global.LOW.animation;

let fallas = 0;
const dice = (cond, nombre, detalle) => {
  console.log((cond ? "  ok    " : "  FALLA ") + nombre + (detalle == null ? "" : "  " + JSON.stringify(detalle)));
  if (!cond) fallas++;
};

function armar() {
  const doc = new A.LowDoc();
  doc.ensureRigBones([
    { id: "brazo", name: "brazo", parentId: null, head: { x: 0, y: 0 }, tail: { x: 50, y: 0 }, pivot: { x: 0, y: 0 } },
    { id: "codo", name: "codo", parentId: "brazo", head: { x: 50, y: 0 }, tail: { x: 100, y: 0 }, pivot: { x: 50, y: 0 } },
  ], "bones");
  doc.setHistory(new global.LOW.core.HistoryManager());
  return doc;
}

console.log("\n== 1. Dónde vive realmente un control ==");
{
  const doc = armar();
  const creado = doc.createRigControl("boca_abierta", { name: "boca abierta", min: 0, max: 1, default: 0 });
  const rig = doc.scene.rig;
  dice(creado === true, "createRigControl devuelve true");
  dice(!!(rig.controls && rig.controls.boca_abierta), "el control aparece en rig.controls");
  dice(Object.keys(rig.controllers || {}).length === 0,
    "rig.controllers queda VACÍA aunque acabamos de crear un control", { controllers: rig.controllers });
  dice(!!doc.scene.rigControl("boca_abierta"), "scene.rigControl() lo encuentra (lee de rig.controls)");
}

console.log("\n== 2. clearRig: qué borra y qué deja ==");
{
  const doc = armar();
  doc.createRigControl("boca_abierta", { name: "boca abierta", min: 0, max: 1, default: 0 });
  doc.createRigAction("codo_flex", { name: "Codo flexionado", driverBone: "codo", min: 0, max: 90, length: 2 });

  const antes = {
    huesos: Object.keys(doc.scene.rig.bones || {}).length,
    controls: Object.keys(doc.scene.rig.controls || {}).length,
    actions: Object.keys(doc.scene.rig.actions || {}).length,
  };
  console.log("  antes de clearRig:", JSON.stringify(antes));

  doc.clearRig();
  const rig = doc.scene.rig;
  const despues = {
    huesos: Object.keys(rig.bones || {}).length,
    controls: Object.keys(rig.controls || {}).length,
    actions: Object.keys(rig.actions || {}).length,
  };
  console.log("  después de clearRig:", JSON.stringify(despues));

  dice(despues.huesos === 0, "clearRig borra los huesos");
  dice(despues.actions === 0, "clearRig borra las acciones");
  // ESTE es el defecto: se espera 0 y quedan controles vivos.
  dice(despues.controls === 0,
    "clearRig debería borrar los controles (DEFECTO si falla)", { quedaron: Object.keys(rig.controls || {}) });

  if (despues.controls > 0 && despues.huesos === 0) {
    console.log("  -> control huérfano:", JSON.stringify(rig.controls[Object.keys(rig.controls)[0]]));
  }

  // La consecuencia que sí ve el artista: como createRigControl rechaza un id
  // ya existente, tras borrar el esqueleto completo NO se puede volver a crear
  // un control con el mismo nombre. El id quedó tomado por un fantasma.
  const recrea = doc.createRigControl("boca_abierta", { name: "boca abierta", min: 0, max: 1 });
  dice(recrea === true,
    "tras clearRig se puede volver a crear un control con el mismo nombre (DEFECTO si falla)",
    { createRigControl: recrea });

  // Y el canal sí se fue: el control huérfano no tiene animación que lo respalde.
  const ruta = "controls/boca_abierta";
  dice(!(rig.channels || {})[ruta],
    "el canal del control sí se borró (queda la definición sin animación)", { canal: (rig.channels || {})[ruta] });
}

console.log("\n== 3. ¿Alguien LEE rig.controllers para decidir algo? ==");
{
  // Contar apariciones del texto "controllers" era una assertion frágil:
  // cualquier comentario que la mencionara rompía la cuenta (de hecho la rompió
  // el comentario del propio arreglo). Lo que importa no es cuántas veces se
  // escribe la palabra, sino si alguien LEE el valor para tomar una decisión.
  const sinComentarios = (t) => t.replace(/\/\*[\s\S]*?\*\//g, "").replace(/(^|[^:])\/\/.*$/gm, "$1");
  const lecturas = [], escrituras = [];
  const rec = (dir) => {
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
      if (e.name === "node_modules" || e.name.startsWith(".")) continue;
      if (e.name === "repro_c01_controles.js") continue;
      const f = path.join(dir, e.name);
      if (e.isDirectory()) { rec(f); continue; }
      if (!e.name.endsWith(".js")) continue;
      const t = sinComentarios(fs.readFileSync(f, "utf8"));
      for (const m of t.matchAll(/(\w+)\.controllers\s*(=(?!=))?/g)) {
        const donde = path.relative(root, f) + " :: " + m[1] + ".controllers";
        (m[2] ? escrituras : lecturas).push(donde);
      }
    }
  };
  rec(path.join(root, "ui")); rec(path.join(root, "tools"));
  console.log("  escrituras:", JSON.stringify(escrituras));
  console.log("  lecturas:  ", JSON.stringify(lecturas));

  // Nadie consulta `rig.controllers`. La única lectura es `source.controllers`
  // en replaceRig, que la copia hacia adelante sin mirar su contenido: es una
  // clave de PASO heredada, no una fuente de verdad.
  const leeElRig = lecturas.filter((l) => /rig\.controllers/.test(l));
  dice(leeElRig.length === 0, "nadie lee rig.controllers para decidir nada", { lecturas: leeElRig });
  dice(lecturas.length > 0 && lecturas.every((l) => /source\.controllers/.test(l)),
    "la única lectura es el clonado de paso en replaceRig", { lecturas });
}

console.log("\n== 4. Renombrar el rótulo conserva animación y conductor ==");
{
  const doc = armar();
  // Un dial con el nombre mal escrito, ya animado y conduciendo una acción.
  doc.createRigControl("boca_abierat", { name: "boca abierat", min: 0, max: 1 });
  doc.setRigControlValue("boca_abierat", 1, 0.4);
  doc.setRigControlValue("boca_abierat", 12, 0.9);
  doc.createRigAction("boca_flex", { name: "Boca", driverControl: "boca_abierat", min: 0, max: 1, length: 2 });

  const rig = doc.scene.rig, ruta = "controls/boca_abierat";
  const clavesAntes = Object.keys((rig.channels[ruta] || {}).keys || {}).length;
  dice(clavesAntes === 2, "el dial arranca con 2 claves de animación", { claves: clavesAntes });
  dice(rig.actions.boca_flex.driver.path === ruta, "la acción lo tiene como conductor");

  // La operación que el artista necesita: corregir el rótulo.
  dice(doc.setRigControlName("boca_abierat", "boca abierta") === true, "setRigControlName devuelve true");
  dice(rig.controls.boca_abierat.name === "boca abierta", "el rótulo quedó corregido");
  dice(doc.scene.rigControl("boca_abierat").name === "boca abierta", "la escena lo ve corregido");

  // Lo que NO debe pasar: perder la animación o el conductor. Borrar y recrear
  // (la única salida antes de esta operación) perdía las dos cosas.
  const clavesDespues = Object.keys((rig.channels[ruta] || {}).keys || {}).length;
  dice(clavesDespues === 2, "conserva las 2 claves de animación", { claves: clavesDespues });
  dice(rig.actions.boca_flex.driver && rig.actions.boca_flex.driver.path === ruta,
    "conserva el conductor de la acción", { driver: rig.actions.boca_flex.driver });

  // El id NO cambia: es la referencia, y no se muestra en el panel.
  dice(rig.controls.boca_abierat.id === "boca_abierat", "el id se mantiene (es la referencia interna)");

  // Rechazos sensatos
  dice(doc.setRigControlName("boca_abierat", "   ") === false, "rechaza un rótulo vacío");
  dice(doc.setRigControlName("boca_abierat", "boca abierta") === false, "rechaza un rótulo idéntico (no ensucia el historial)");
  dice(doc.setRigControlName("no_existe", "x") === false, "rechaza un control inexistente");

  // Un solo Undo devuelve el rótulo viejo.
  doc.setRigControlName("boca_abierat", "boca cerrada");
  doc.history.undo();
  dice(doc.scene.rigControl("boca_abierat").name === "boca abierta",
    "un solo Undo revierte el renombrado", { name: doc.scene.rigControl("boca_abierat").name });
}

console.log("\n" + (fallas ? "FALLAS: " + fallas : "sin fallas"));
process.exit(0);
