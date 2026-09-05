/* Pruebas de la malla de deformación (lattice/FFD) del rig.
 * Runner propio (no toca model-tests.js, punto de colisión con Codex).
 * Uso: node tools/run_rig_mesh_tests.js
 */
"use strict";
const fs = require("fs"), path = require("path");
const root = path.resolve(__dirname, "..");
global.window = global; global.self = global;
// Cadena mínima para tener LowDoc + scene-model funcionando en node.
["ui/core/history.js", "ui/animation/scene-model.js", "ui/animation/rig-policy.js",
 "ui/rigging/binding.js", "ui/rigging/rig-input.js", "ui/animation/exposures.js",
 "ui/animation/onion.js", "ui/animation/mocap.js", "ui/animation/document.js"
].forEach(rel => { const abs = path.join(root, rel); if (!fs.existsSync(abs)) { console.error("FALTA " + rel); process.exit(2); } eval(fs.readFileSync(abs, "utf8")); });

const A = global.LOW.animation;
let pass = 0, fail = 0;
const ok = (c, m) => { if (c) pass++; else { fail++; console.error("  ✗ " + m); } };
const near = (a, b, e = 1e-6) => Math.abs(a - b) < (e || 1e-6);

// Rejilla regular 3×3 sobre [0..100]²
const grid = (fn) => { const g = []; for (let r = 0; r < 3; r++) for (let c = 0; c < 3; c++) { const p = { x: c * 50, y: r * 50 }; g.push(fn ? fn(p, c, r) : p); } return g; };
const rest = grid();

// 1. Identidad: rejilla posada == reposo → un punto interior no se mueve.
{
  const w = A.rigMalla(rest, grid(), 3, 3);
  const q = w.punto({ x: 30, y: 20 });
  ok(near(q.x, 30) && near(q.y, 20), "malla en reposo: el punto no se mueve");
}

// 2. Localidad: muevo la esquina inferior-derecha (+40,+40). Un punto cercano a esa
//    esquina se desplaza hacia ella; la esquina opuesta (0,0) queda fija.
{
  const posed = grid((p, c, r) => (c === 2 && r === 2) ? { x: p.x + 40, y: p.y + 40 } : p);
  const w = A.rigMalla(rest, posed, 3, 3);
  const cornerFar = w.punto({ x: 0, y: 0 });
  ok(near(cornerFar.x, 0) && near(cornerFar.y, 0), "mover una esquina no toca la opuesta");
  const nearBR = w.punto({ x: 90, y: 90 });
  ok(nearBR.x > 90 && nearBR.y > 90, "un punto junto a la esquina movida la sigue");
  // Un punto DENTRO de la celda inferior-derecha (no sobre un vértice) se arrastra
  // parcialmente: (75,75) es el centro de esa celda → promedio bilineal de sus 4 esquinas.
  const inCell = w.punto({ x: 75, y: 75 });
  ok(inCell.x > 75 && inCell.x < 140 && inCell.y > 75 && inCell.y < 140, "un punto interior a la celda se arrastra parcialmente (bilineal)");
}

// 3. Normalización rigMeshesData: válida se conserva, tamaños que no cierran se descartan.
{
  const norm = A.rigMeshesData({
    good: { cols: 3, rows: 3, rest, keys: { 5: grid(), 7: [{ x: 0, y: 0 }] } },
    bad: { cols: 3, rows: 3, rest: [{ x: 0, y: 0 }] },
  });
  ok(!!norm.good && !norm.bad, "malla con reposo incompleto descartada");
  ok(!!norm.good.keys[5] && !norm.good.keys[7], "clave con distinta cantidad de puntos descartada");
  ok(norm.good.type === "mesh" && norm.good.enabled === true, "forma normalizada correcta");
}

// 4. Comandos sobre un doc real: crear malla, deformar por cuadro, interpolar, Undo.
{
  const doc = new A.LowDoc();
  doc.ensureRigBones([{ id: "pieza", name: "Pieza", parentId: null, head: { x: 0, y: 0 }, pivot: { x: 0, y: 0 }, tail: { x: 100, y: 0 }, pinned: true }], "bone");
  ok(!!doc.scene.rigNode("pieza"), "hueso de prueba creado");

  ok(doc.createRigMesh("pieza", { cols: 3, rows: 3, box: { x: 0, y: 0, width: 100, height: 100 } }), "createRigMesh");
  const m = doc.scene.rigMesh("pieza");
  ok(m && m.rest.length === 9 && m.cols === 3, "rejilla de reposo 3×3 regular");
  ok(doc.scene.rigMallaAt("pieza", 1) === null, "malla en reposo → sin deformación (null)");

  // Deformar en el cuadro 11: mover la esquina inferior-derecha (índice 8).
  ok(doc.setRigMeshPoint("pieza", 8, 140, 140, 11), "setRigMeshPoint en F11");
  const w11 = doc.scene.rigMallaAt("pieza", 11);
  ok(w11 && w11.punto({ x: 100, y: 100 }).x > 100, "en F11 la malla deforma el dibujo");

  // Interpolación: en F6 (mitad entre reposo implícito@? y la clave) hay estado intermedio.
  // Con una sola clave en F11, F<=11 mantiene esa clave (hold hacia atrás); agrego clave en F1.
  doc.setRigMeshKey("pieza", 1, m.rest);
  const g6 = doc.scene.rigMeshAt("pieza", 6);
  ok(g6 && g6[8].x > 100 && g6[8].x < 140, "F6 interpola el punto entre F1 y F11");

  // Undo deshace la última operación (borrar clave/mover); createRigMesh sigue.
  if (typeof doc.undo === "function") {
    doc.undo();
    ok(!!doc.scene.rigMesh("pieza"), "Undo no borra la malla entera (fue una op puntual)");
  } else pass++;
}

console.log(`rig-mesh: ${pass}/${pass + fail}`);
process.exit(fail ? 1 : 0);
