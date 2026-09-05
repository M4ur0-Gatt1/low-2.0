/* Pruebas del modelo de storyboard de LOW (generador de tomas y cámaras).
   Uso: node tools/run_storyboard_tests.js */
const fs = require("fs");
const path = require("path");
global.window = global;
const cargar = (rel) => eval(fs.readFileSync(path.resolve(__dirname, "..", rel), "utf8"));
cargar("ui/composition/multiplane-model.js");
cargar("ui/core/history.js");
cargar("ui/animation/palette.js");
cargar("ui/animation/coloring.js");
cargar("ui/animation/scene-model.js");
cargar("ui/animation/rig-policy.js");
cargar("ui/core/pointer-controller.js");
cargar("ui/rigging/binding.js");
cargar("ui/rigging/rig-input.js");
cargar("ui/animation/exposures.js");
cargar("ui/animation/onion.js");
cargar("ui/animation/mocap.js");
cargar("ui/animation/document.js");
cargar("ui/storyboard/shot-model.js");

const S = LOW.storyboard.shots, fallan = [];
const check = (nombre, condicion, detalle) => {
  if (!condicion) fallan.push(nombre + (detalle ? " → " + detalle : ""));
};
const cerca = (a, b, tol = 0.5) => Math.abs(a - b) <= tol;

// Una figura de 170 de alto parada en el origen; la cámara mira desde -Z.
const persona = { x: 0, y: 0, z: 0, height: 170 };
const lente = { focalLength: 50, sensorWidth: 36 };

// ── óptica ────────────────────────────────────────────────────────────────
const vfov = S.verticalFov(lente, 16 / 9);
check("el FOV vertical sale del sensor y la relación de aspecto", cerca(vfov, 22.9, 0.2), String(vfov));
check("un lente largo encuadra menos que uno corto",
  S.verticalFov({ ...lente, focalLength: 85 }, 16 / 9) < vfov);
check("el alto encuadrado crece con la distancia",
  S.frameHeightAt(lente, 800, 16 / 9) > S.frameHeightAt(lente, 400, 16 / 9));

// ── clasificación ─────────────────────────────────────────────────────────
// A la distancia en que la figura ocupa exactamente el cuadro: plano entero.
const dEntero = 170 / (2 * Math.tan(vfov * Math.PI / 360));
check("la figura justa en el cuadro es un plano entero",
  S.classify({ ...lente, z: -dEntero }, persona, 16 / 9).id === "plano-entero",
  JSON.stringify(S.classify({ ...lente, z: -dEntero }, persona, 16 / 9)));
check("lejos es plano general y muy lejos gran plano general",
  S.classify({ ...lente, z: -dEntero * 2 }, persona, 16 / 9).id === "plano-general" &&
  S.classify({ ...lente, z: -dEntero * 8 }, persona, 16 / 9).id === "gran-plano-general");
check("muy cerca es primerísimo primer plano",
  S.classify({ ...lente, z: -dEntero / 8 }, persona, 16 / 9).id === "primerisimo-primer-plano");

// ── generador: pedir una toma y que la cámara se ubique sola ──────────────
// Es el invariante fuerte: lo que el generador arma, el clasificador lo
// reconoce. Si los dos no coinciden, el generador miente.
for (const tipo of S.SHOT_TYPES) {
  const camara = S.frameShot(tipo.id, persona, lente, { aspect: 16 / 9 });
  const vuelta = S.classify(camara, persona, 16 / 9);
  check("ida y vuelta del generador: " + tipo.id, vuelta.id === tipo.id,
    `pedí ${tipo.id} y quedó ${vuelta.id} (cobertura ${vuelta.coverage.toFixed(2)})`);
}
check("un plano más cerrado acerca la cámara",
  S.frameShot("primer-plano", persona, lente).z > S.frameShot("plano-general", persona, lente).z);
check("con lente largo, la misma toma pide más distancia",
  S.frameShot("plano-medio", persona, { ...lente, focalLength: 85 }).z <
  S.frameShot("plano-medio", persona, lente).z);

// ── altura de cámara: sigue lo que se encuadra ────────────────────────────
const primerPlano = S.frameShot("primer-plano", persona, lente);
const general = S.frameShot("plano-general", persona, lente);
check("el primer plano se para a la altura de la cabeza y el general al medio del cuerpo",
  primerPlano.y < general.y, JSON.stringify({ pp: primerPlano.y, pg: general.y }));
check("la cabeza no queda pegada al borde: hay aire arriba",
  S.headroomOf(primerPlano, persona, 16 / 9) > 0,
  String(S.headroomOf(primerPlano, persona, 16 / 9)));

// ── el nombre del plano tiene que coincidir con dónde CORTA ───────────────
// Sin esto el vocabulario es decorativo: «plano medio» podría cortar en los
// tobillos y nadie se enteraría hasta dibujarlo.
const corta = (tipo) => {
  const camara = S.frameShot(tipo, persona, lente, { aspect: 16 / 9 });
  const banda = S.frameBand(camara, persona, 16 / 9);
  return { arriba: banda.top / persona.height, abajo: banda.bottom / persona.height };
};
const entero = corta("plano-entero");
check("el plano entero deja el cuerpo completo con aire arriba y abajo",
  entero.arriba > 1 && entero.abajo < 0, JSON.stringify(entero));
const americano = corta("plano-americano");
check("el plano americano corta a la altura de las rodillas",
  americano.abajo > 0.20 && americano.abajo < 0.34, JSON.stringify(americano));
const medio = corta("plano-medio");
check("el plano medio corta a la altura de la cintura",
  medio.abajo > 0.45 && medio.abajo < 0.60, JSON.stringify(medio));
const pp = corta("primer-plano");
check("el primer plano corta en el pecho y deja hombros y cabeza",
  pp.abajo > 0.68 && pp.abajo < 0.85, JSON.stringify(pp));
const ppp = corta("primerisimo-primer-plano");
check("el primerísimo deja sólo la cara", ppp.abajo > 0.83, JSON.stringify(ppp));
for (const tipo of S.SHOT_TYPES)
  check("ningún plano corta la coronilla: " + tipo.id, corta(tipo.id).arriba > 1,
    JSON.stringify(corta(tipo.id)));

// ── ángulo ────────────────────────────────────────────────────────────────
const nivel = S.frameShot("plano-medio", persona, lente, { angle: "nivel" });
const picado = S.frameShot("plano-medio", persona, lente, { angle: "picado" });
const contra = S.frameShot("plano-medio", persona, lente, { angle: "contrapicado" });
check("a nivel la cámara no se inclina", nivel.rotationX === 0);
check("el picado mira desde arriba y el contrapicado desde abajo",
  picado.rotationX > 0 && contra.rotationX < 0 && picado.y < contra.y,
  JSON.stringify({ picado: picado.rotationX, contra: contra.rotationX }));
check("cambiar el ángulo no cambia el tipo de toma",
  S.classify(picado, persona, 16 / 9).id === "plano-medio" &&
  S.classify(contra, persona, 16 / 9).id === "plano-medio");
// Lo que el ángulo NO puede hacer es desencuadrar: la cámara gira alrededor de
// lo que se encuadra. Sin esto, un contrapicado se le comía la cabeza.
for (const a of ["nivel", "picado", "contrapicado"]) {
  const cam = S.frameShot("plano-medio", persona, lente, { angle: a, aspect: 16 / 9 });
  const banda = S.frameBand(cam, persona, 16 / 9);
  check("el ángulo no desencuadra al personaje: " + a,
    banda.top / persona.height > 1 && banda.top / persona.height < 1.12 &&
    Math.abs(banda.bottom / persona.height - 0.53) < 0.03,
    JSON.stringify({ arriba: banda.top / persona.height, abajo: banda.bottom / persona.height }));
}
check("el picado se para más alto que el contrapicado, a la misma distancia",
  picado.y < contra.y &&
  Math.abs(S.classify(picado, persona, 16/9).coverage - S.classify(contra, persona, 16/9).coverage) < 0.01);

// ── bordes ────────────────────────────────────────────────────────────────
check("una figura sin altura no rompe la cuenta",
  Number.isFinite(S.frameShot("plano-medio", { height: 0 }, lente).z));
check("un tipo de toma inventado cae en uno real",
  S.SHOT_TYPES.some((t) => t.id === S.frameShot("no-existe", persona, lente).shotType));
check("clasificar sin cámara ni figura no explota",
  typeof S.classify(null, null).id === "string");

// ── PANELES: la secuencia del storyboard vive en Scene, no en un store aparte ──
{
  const A = LOW.animation, doc = new A.LowDoc();
  const historia = new LOW.core.HistoryManager(); doc.setHistory(historia);
  const uno = doc.addStoryboardBoard({ action: "entra caminando", duration: 12 });
  const dos = doc.addStoryboardBoard({ action: "se detiene", duration: 8 });
  check("los paneles se agregan en orden y con id propio",
    typeof uno === "string" && uno !== dos &&
    doc.scene.storyboard.boards.map((b) => b.id).join(",") === uno + "," + dos);

  const tiempos = doc.scene.boardTiming();
  check("el tiempo de cada panel es acumulativo",
    tiempos[0].from === 1 && tiempos[0].to === 12 && tiempos[1].from === 13 && tiempos[1].to === 20,
    JSON.stringify(tiempos));
  check("la duración total es la suma de los paneles", doc.scene.boardDuration() === 20);

  const tres = doc.addStoryboardBoard({ action: "primer plano", duration: 6 }, 0);
  check("se puede insertar un panel ANTES de otro",
    doc.scene.storyboard.boards[0].id === tres && doc.scene.boardTiming()[1].from === 7);

  check("un panel que dura cero cuadros no existiría: se sube a uno",
    doc.updateStoryboardBoard(dos, { duration: 0 }) && doc.scene.board(dos).duration === 1);
  // El 0 lo atrapa el valor por defecto; el negativo sólo lo frena el tope.
  check("una duración negativa tampoco pasa",
    doc.updateStoryboardBoard(dos, { duration: -5 }) === false ||
    doc.scene.board(dos).duration >= 1, String(doc.scene.board(dos).duration));
  doc.updateStoryboardBoard(dos, { duration: 8 });

  // La toma se guarda como decisión, no como coordenadas sueltas.
  const camara = S.frameShot("plano-medio", persona, lente, { angle: "picado" });
  doc.updateStoryboardBoard(uno, { shot: { type: "plano-medio", angle: "picado", camera: camara } });
  check("el panel guarda la toma elegida y su cámara",
    doc.scene.board(uno).shot.type === "plano-medio" &&
    Math.round(doc.scene.board(uno).shot.camera.z) === Math.round(camara.z));

  doc.moveStoryboardBoard(tres, 2);
  check("reordenar cambia el tiempo pero no el contenido",
    doc.scene.storyboard.boards[2].id === tres &&
    doc.scene.board(tres).action === "primer plano" &&
    doc.scene.boardTiming()[0].from === 1);

  const antes = JSON.stringify(doc.scene.storyboard);
  doc.removeStoryboardBoard(uno);
  check("quitar un panel re-temporiza el resto",
    !doc.scene.board(uno) && doc.scene.boardTiming()[0].from === 1 &&
    doc.scene.boardTiming().length === 2);
  historia.undo();
  check("deshacer devuelve el panel con su tiempo", JSON.stringify(doc.scene.storyboard) === antes);
  historia.redo();
  check("rehacer lo vuelve a quitar", !doc.scene.board(uno));

  const reabierto = A.LowDoc.fromJSON(JSON.parse(JSON.stringify(doc.toJSON())));
  check("los paneles y sus tomas sobreviven guardar y reabrir",
    reabierto.scene.storyboard.boards.length === doc.scene.storyboard.boards.length &&
    reabierto.scene.boardDuration() === doc.scene.boardDuration() &&
    reabierto.scene.board(tres).action === "primer plano",
    JSON.stringify(reabierto.scene.storyboard));

  // ── el reparto del escenario ──
  const conReparto = doc.addStoryboardBoard({ shot: { cast: [
    { id: "ella", x: 0, z: 0, height: 168, pose: "caminando" },
    { id: "el", x: 90, z: 40, height: 181 },
    { id: "ella", x: 5, z: 5 },            // id repetido: no puede duplicarse
    null,
    { x: 10, z: 10, height: 9999 },        // sin id y con altura imposible
  ], focus: "ella" } });
  const reparto = doc.scene.board(conReparto).shot.cast;
  check("el reparto no admite ids repetidos ni entradas basura",
    reparto.length === 3 && reparto.map((f) => f.id).join(",") === "ella,el,fig_3",
    JSON.stringify(reparto.map((f) => f.id)));
  check("una altura imposible se acota a algo encuadrable",
    reparto[2].height <= 400 && reparto[2].height >= 20, String(reparto[2].height));
  check("la pose se conserva si existe y cae en una real si no",
    reparto[0].pose === "caminando" && reparto[1].pose === "de-pie");
  check("el foco dice a quién encuadra la cámara",
    doc.scene.board(conReparto).shot.focus === "ella");

  // Mover una figura es una intención del director: va por comando y con Undo.
  doc.updateStoryboardBoard(conReparto, { shot: { cast: reparto.map((f) =>
    f.id === "el" ? { ...f, x: 220 } : f) } }, "Mover figura");
  check("mover una figura queda guardado",
    doc.scene.board(conReparto).shot.cast[1].x === 220);
  historia.undo();
  check("y se deshace", doc.scene.board(conReparto).shot.cast[1].x === 90);
  historia.redo();

  const conRepartoReabierto = A.LowDoc.fromJSON(JSON.parse(JSON.stringify(doc.toJSON())));
  check("el reparto sobrevive guardar y reabrir",
    conRepartoReabierto.scene.board(conReparto).shot.cast.length === 3 &&
    conRepartoReabierto.scene.board(conReparto).shot.cast[0].pose === "caminando");
  doc.removeStoryboardBoard(conReparto);

  check("un documento sin storyboard responde vacío, no rompe",
    new A.LowDoc().scene.boardDuration() === 0 && new A.LowDoc().scene.boardTiming().length === 0);
}

console.log(`TOTAL ${fallan.length === 0 ? "OK" : "FALLAN " + fallan.length}`);
if (fallan.length) { fallan.forEach((f) => console.error("FALLO: " + f)); process.exit(1); }
console.log("STORYBOARD OK: óptica, clasificación de tomas, generador de cámara y ángulos");
