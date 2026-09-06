"""Contratos estáticos de interacción que bloquean un release si regresan.

No reemplazan las pruebas de navegador. Protegen reglas críticas mientras se
incorpora el arnés end-to-end: Escape no cierra 2D, la rueda no transforma el
rig y los gestos de tableta no mezclan Pointer Events con Mouse Events.
"""
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
APP = (ROOT / "ui" / "app.js").read_text(encoding="utf-8")
INDEX = (ROOT / "ui" / "index.html").read_text(encoding="utf-8")
SHORTCUTS = (ROOT / "ui" / "animation" / "shortcuts.js").read_text(encoding="utf-8")
SCENE_MODEL = (ROOT / "ui" / "animation" / "scene-model.js").read_text(encoding="utf-8")


def function_body(name: str, next_name: str) -> str:
    start = APP.index(f"function {name}(")
    end = APP.index(f"function {next_name}(", start)
    return APP[start:end]


DOCUMENT = (ROOT / "ui" / "animation" / "document.js").read_text(encoding="utf-8")
CSS_APP = (ROOT / "ui" / "app.css").read_text(encoding="utf-8")
POLISH = (ROOT / "ui" / "design" / "studio-polish.css").read_text(encoding="utf-8")
MAIN = (ROOT / "main.py").read_text(encoding="utf-8")


def function_body_doc(name: str, next_name: str) -> str:
    start = DOCUMENT.index(f"{name}(")
    end = DOCUMENT.index(f"{next_name}(", start)
    return DOCUMENT[start:end]


def require(condition: bool, message: str) -> None:
    if not condition:
        raise SystemExit("CONTRATO 2D INCUMPLIDO: " + message)


escape = function_body("dzEscapeActive", "dzApplyZoom")
resize = function_body("dzHandleDown", "dzAddShape")
camera = APP[APP.index("function dzCamDrag("):APP.index("function dzKeyToggle(")]
timeline_scrub = APP[APP.index('$("#tlFrames").addEventListener'):APP.index("// herramientas de dibujo")]
disc = APP[APP.index("function dzDiscToggle("):APP.index("DZ.anim = null")]
wheel = APP[APP.index('$("#dzCanvas").addEventListener("wheel"'):APP.index(
    '$("#dzCanvas").addEventListener("contextmenu"')]
rig_mode = function_body("dzRigSetMode", "dzRigEnterTest")
rig_geometry = function_body("dzRigBoneGeometryDrag", "dzRigBoneFKDrag")
rig_pivot = function_body("dzRigBuildPivotDrag", "dzRigCommitPreview")
rig_ik = function_body("dzRigIKDrag", "dzRigOverlayRender")
rig_deformer = function_body("dzRigDeformadorDrag", "dzDeformadorCurvaDe")
rig_readiness = function_body("dzRigReadinessStatus", "dzRigPanelSync")
mocap_open = function_body("dzMocapOpen", "dzDocumentMayDiscard")
mocap_reset = function_body("dzMocapResetSession", "dzMocapSync")
vector_tx = APP[APP.index("const DZ_VECTOR_ATTRS"):APP.index("function dzVectorElementAt")]
inflator = function_body("dzInflatorDown", "dzInflatorMove") + function_body("dzInflatorMove", "dzInflatorUp") + function_body("dzInflatorUp", "dzVectorPrefs")
handler = function_body("dzHandlerDown", "dzHandlerMove") + function_body("dzHandlerUp", "dzHandlerGlobalMove")
iron = function_body("dzIronDown", "dzIronApply") + function_body("dzIronApply", "dzIronUp") + function_body("dzIronUp", "dzIronSmooth")
magnet = function_body("dzMagnetDown", "dzMagnetMove") + function_body("dzMagnetMove", "dzMagnetApply") + function_body("dzMagnetUp", "dzDiscToggle")

require("closeDesign" not in escape and "designView" not in escape,
        "Escape volvió a cerrar o abandonar el módulo 2D")
require('dzRigSetTool("select")' in escape and 'dzSetTool("select")' in escape,
        "Escape ya no suelta primero la herramienta activa")
require("pointermove" in resize and "pointerup" in resize and "pointercancel" in resize,
        "el tirador de transformación dejó de completar gestos de lápiz")
require("mousemove" not in resize and "mouseup" not in resize,
        "el tirador volvió a mezclar eventos de mouse con eventos de puntero")
require("mousemove" not in camera and "mouseup" not in camera and "pointercancel" in camera,
        "la cámara 2D volvió a perder gestos de lápiz o su cancelación")
require('addEventListener("pointerdown"' in timeline_scrub and "mousemove" not in timeline_scrub,
        "el scrub de fotogramas volvió a depender exclusivamente del mouse")
require('addEventListener("pointerdown"' in disc and "mousemove" not in disc,
        "la mesa giratoria volvió a depender exclusivamente del mouse")
require("wheelPolicy" in wheel and 'policy === "block"' in wheel,
        "la rueda puede atravesar otra vez el modo de rigging")
require(INDEX.index("application/mode-machine.js") < INDEX.index("app.js"),
        "la máquina de modos debe cargarse antes que la aplicación")
require("rigGestureCancel" in rig_mode and "rigBoneGeometryPreview = null" in rig_mode,
        "cambiar a Animar dejó de cancelar la edición pendiente del esqueleto")
require('DZ.rigSubmode !== "build" || DZ.rigTool !== "edit"' in rig_geometry,
        "un gesto iniciado en Construir puede volver a editar geometría dentro de Animar")
require('DZ.rigSubmode !== "build"' in rig_pivot,
        "un pointerup tardío puede volver a mover pivotes dentro de Animar")
require("dzRigTrackGesture" in rig_ik and 'addEventListener("pointercancel"' in rig_ik,
        "IK quedó fuera de la cancelación transaccional del rig")
require("dzRigTrackGesture" in rig_deformer and 'addEventListener("pointercancel"' in rig_deformer,
        "el deformador quedó fuera de la cancelación transaccional del rig")
require("setRigDeformerKey" not in rig_deformer[rig_deformer.index("const mover"):rig_deformer.index("const cleanup")],
        "el deformador volvió a grabar una clave por cada movimiento del lápiz")
require("rigModeAccess" in rig_readiness and "access.animate" in rig_readiness,
        "Animar volvió a depender del arte o sus metadatos en vez del esqueleto")
require('e.key === "Delete" && opts.deleteScene?.()' in SHORTCUTS and "deleteScene: () => dzDeleteContext()" in APP,
        "la X-sheet volvió a secuestrar Supr antes de borrar objetos o huesos")
require('DZ.rigSelectionSource = "rig"' in APP and 'DZ.rigSelectionSource = "art"' in APP and
        'DZ.rigSelectionSource === "rig"' in APP,
        "seleccionar el arte vinculado vuelve a perder el hueso activo")
require('$("#dzMocapPanel")' in mocap_open and "dzRigToggle" not in mocap_open,
        "Motion Capture volvió a depender del panel o modo Cut-out")
require("revokeObjectURL" in mocap_reset and 'overlay.innerHTML = ""' in mocap_reset and
        'panel.hidden = true' in mocap_reset,
        "un documento nuevo puede volver a heredar video, máscara o panel de Motion Capture")
require('id="dzMocapPanel"' in INDEX and INDEX.index('id="dzRigPanel"') < INDEX.index('id="dzMocapPanel"'),
        "Motion Capture dejó de ser un panel independiente")
require("const DEFAULT_WIDTH = 1920" in SCENE_MODEL and
        "width: 1920, height: 1080" in APP,
        "el documento nuevo dejó de ser Full HD 1920×1080")
require('owner: "vector:" + owner' in vector_tx and "dzVectorRestore" in vector_tx,
        "las herramientas vectoriales dejaron de compartir una transacción reversible")
for name, body in (("Inflador", inflator), ("Manejador", handler), ("Plancha", iron), ("Imán", magnet)):
    require("dzVectorBegin" in body and "dzVectorFinish" in body and "pointercancel" in body,
            f"{name} quedó fuera del controlador común o confirma un pointercancel")

mirror_toggle = function_body("dzMirrorToggle", "dzMirrorGuideRender")
mirror_guide = function_body("dzMirrorGuideRender", "dzMirrorClone")
mirror_clone = function_body("dzMirrorClone", "dzAIKeyModal")
require("dzMirrorGuideRender()" in mirror_toggle,
        "el modo espejo volvió a encenderse sin dibujar el eje de simetría")
require("vb[0] + vb[2] / 2" in mirror_guide and "vb[0] + vb[2] / 2" in mirror_clone,
        "la guía del espejo y el trazo reflejado dejaron de compartir el mismo eje")
require("dz-penui" in mirror_guide,
        "el eje del espejo dejó de ser UI de pantalla y puede entrar al documento")
require("dzMirrorGuideRender();" in function_body("dzCanvasSet", "dzDocCommit"),
        "repintar el lienzo vuelve a borrar el eje del espejo")

PANEL = (ROOT / "ui" / "animation_panel.html").read_text(encoding="utf-8")
ICONOS_RIEL = ("i-cursor", "i-cursor-open", "i-pencil", "i-brush", "i-eraser", "i-magnet")
require(all(f'id="{name}"' in PANEL for name in ICONOS_RIEL),
        "el panel separado perdió los iconos del riel y vuelve a mostrar solo texto")
require("t.icon" in PANEL and "<use href=" in PANEL[PANEL.index("function renderTools"):PANEL.index("function renderColor")],
        "el panel separado de herramientas volvió a dibujarse como una lista de texto")
require('icon: (b.querySelector("use")' in APP,
        "la foto del panel de herramientas dejó de viajar con su icono")
require("panels?.get?.(kind)?.dock" in APP,
        "acoplar un panel separado vuelve a mandarlo siempre a la derecha")

guardado_diseno = function_body("dzSave", "modalTools")
auto_guardado = function_body("dzPersist", "dzGoFrame")
recuperacion = function_body("dzRecoveryDecide", "dzGenBg")
require('r.path && !r.error' in APP,
        "un guardado fallido vuelve a contar como exitoso: el puente devuelve un objeto tambien al fallar")
require(APP.count("dzSaveOk(") >= 5,
        "algun camino de guardado dejo de verificar que la escritura ocurrio")
require("dzSaveOk(r)" in guardado_diseno and "dzSaveFallo" in guardado_diseno,
        "Ctrl+S del diseno volvio a dar por guardado lo que no se escribio")
require("dzSaveOk(r)" in auto_guardado and "saveNow" in auto_guardado,
        "el auto-guardado fallido dejo de conservar el trabajo en el punto de recuperacion")
require(auto_guardado.index("recovery?.clear") > auto_guardado.index("dzSaveOk(r)"),
        "el auto-guardado borra el punto de recuperacion antes de confirmar la escritura")
require(all(x in recuperacion for x in ('"recover"', '"discard"', '"keep"', "dzRcCompare")),
        "el dialogo de recuperacion perdio alguna de sus tres salidas o la comparacion")
require('decision === "discard"' in APP and 'dzQuiereRecuperar' not in APP,
        "cancelar la recuperacion vuelve a descartar el trabajo en silencio")
require("dzModalDismiss" in function_body("dzConfirmModal", "dzNotice"),
        "cerrar un modal con Escape vuelve a dejar su promesa colgada para siempre")

fin_trazo = function_body("_drawFinish", "_drawCommit") if "function _drawCommit(" in APP else APP[APP.index("function _drawFinish("):APP.index("function _drawFinish(") + 2500]
require("dzStyleTagInkAsFill(ribbon)" in fin_trazo and 'dzStyleTag(ribbon, "paint")' not in APP,
        "el pincel volvio a etiquetarse como Relleno: dibuja blanco sobre blanco")
require("ATTR.paint" in function_body("dzStyleTagInkAsFill", "dzStyleTag"),
        "la cinta del pincel dejo de aplicar el color de tinta sobre el relleno")
barra = function_body("dzToolsBarInit", "dzToolsBarFit")
require("dz-tools-grip" in barra and "pointerdown" in barra,
        "la barra de herramientas dejo de poder moverse")
require("dzToolsBarFit" in APP and "ResizeObserver" in barra,
        "la barra dejo de repartir entre riel y cajon segun el alto disponible")
require("dz-tools-drawer" in barra and "dzToolsDrawerHide" in APP,
        "desaparecio el cajon de herramientas de menos uso")
require("replaceStyle" in DOCUMENT and "history.begin" in function_body_doc("replaceStyle", "renameLevel"),
        "reasignar y borrar un estilo dejo de ser una sola transaccion")
require("renameLevel" in DOCUMENT and "lv.name = limpio" in function_body_doc("renameLevel", "reassignStyle"),
        "renombrar un nivel dejo de conservar su identidad")
require("dzCrashReport" in APP and "CRASH_FIELDS" in MAIN,
        "el informe de fallo dejo de existir o de filtrar sus campos")

FN = (ROOT / "ui" / "animation" / "function-editor.js").read_text(encoding="utf-8")
SHORTCUTS_CELLS = SHORTCUTS[SHORTCUTS.index("const cells = {"):SHORTCUTS.index("function wire(")]
require("animation.shortcuts = { wire, clip, cells }" in SHORTCUTS,
        "el comando unico de celdas dejo de exportarse")
require("readCells" not in APP and "pasteCells(clip.range" not in APP,
        "algun camino de la UI volvio a implementar copiar/pegar celdas por su cuenta")
require(all(x in FN for x in ("TANGENTES", "suave", "lineal", "escalon")),
        "el editor de curvas perdio alguna de sus tangentes")
require(all(x in FN for x in ("setRigChannelKey", "removeRigChannelKey", "setRigChannelEase",
                             "pasteRigChannelCurve", "rigCurveClipboardData")),
        "el editor de curvas dejo de escribir por los comandos del documento")
require("onFrame" in FN and "fn2-cabeza" in FN,
        "el editor de curvas dejo de compartir la cabeza lectora")
require('id="dzFnEditor"' in INDEX and "function-editor.js" in INDEX,
        "el panel del editor de funciones no esta montado")

SCENE_WEIGHTS = SCENE_MODEL[SCENE_MODEL.index("const rigWeightsData"):SCENE_MODEL.index("const rigMeshesData")]
require("rigNormalizeWeights" in SCENE_WEIGHTS and "rigAutoWeights" in SCENE_MODEL,
        "el flexi-binding por distancia desaparecio del modelo")
require("total ? w / total" in SCENE_WEIGHTS or "w / total" in SCENE_WEIGHTS,
        "los pesos de vertice dejaron de normalizarse: la pieza se encoge sola al posar")
require("rigMeshSkinnedAt" in SCENE_MODEL and "rigBindMatrix" in SCENE_MODEL,
        "la malla dejo de deformarse con los huesos")
require("rigMeshSkinnedAt(boneId, frame)" in SCENE_MODEL[SCENE_MODEL.index("rigMallaAt("):SCENE_MODEL.index("rigMallaAt(") + 900],
        "rigMallaAt volvio a ignorar el skinning")
require("paintRigMeshWeight" in DOCUMENT and "actual[boneId] = 1" in DOCUMENT,
        "un vertice puede volver a quedarse sin ningun hueso al restar peso")
require('"dzMeshOverlay"' in APP and 'id="dzMeshOverlay"' in INDEX,
        "el overlay de pesos no sobrevive a abrir un documento")
require('id="rigMeshCreate"' in INDEX and "dzMeshPanelSync" in APP,
        "el panel de malla y pesos no esta montado")

require("rigActionsData" in SCENE_MODEL and "rigActionPhase" in SCENE_MODEL,
        "el esquema de acciones de Smart Bone desaparecio")
require("rigPoseBase" in SCENE_MODEL and "rigActionDelta" in SCENE_MODEL,
        "la pose base y el aporte de las acciones volvieron a ser la misma cosa")
require("rigPoseBase(id, f)" in DOCUMENT,
        "escribir una clave vuelve a capturar la pose CON el aporte de la accion")
require("rigActionDelta(nodeId, frame)" in DOCUMENT,
        "_writeRigPoses dejo de descontar el aporte: la correccion se hornea y se aplica dos veces")
require("recordRigAction" in DOCUMENT and "createRigAction" in DOCUMENT,
        "faltan los comandos de Smart Bone")
require('id="rigSmartNew"' in INDEX and "dzSmartPanelSync" in APP,
        "el panel de Smart Bones no esta montado")

require('class="dz-optionsbar"' in INDEX and "art-bar-inline" in INDEX,
        "la barra de iconos volvio a ser una fila aparte de las opciones de herramienta")
require(INDEX.count('id="dzToolOpts"') == 1 and
        INDEX.index('id="dzToolOpts"') > INDEX.index('class="dz-optionsbar"'),
        "las opciones de herramienta salieron de la barra unica")
require('closest(".dz-optionsbar")' in APP,
        "las pestanas de documento vuelven a insertarse dentro de la barra de opciones")

require('id === "multiplane"' in APP and "dzCompositionViewShow(show)" in APP,
        "abrir el multiplano desde el menu Ventana vuelve a mostrar una capa vacia sobre todo")
require("visiblesDe(dock)" in APP and "visiblesDe(d).length" in APP,
        "los muelles y sus divisiones vuelven a contar paneles ocultos")
require("--cyan:#9AA2A9" in CSS_APP,
        "volvio el segundo acento celeste compitiendo con el naranja")
require("box-shadow: inset 0 2px var(--accent)" not in POLISH,
        "la solapa activa volvio a llevar una barra de acento cruzandola")
require("::-webkit-slider-thumb" in POLISH,
        "los controles deslizantes volvieron al widget por omision del navegador")
require("DZ_BARRA_SECUNDARIOS" in APP,
        "la barra de opciones dejo de mandar lo de menos uso al desborde")

require('case " ":' not in SHORTCUTS,
        "la barra espaciadora volvio a reproducir: es la mano, siempre")
require('play: "enter"' in APP and '"play") return dzPlayToggle()' in APP,
        "reproducir dejo de tener atajo propio o de ser reasignable")
require('e.key === "Enter" ? "enter"' in APP and 'k === "enter" && PEN' in APP,
        "Enter dejo de reproducir, o pisa el cierre del trazado de la pluma")
require("fijadas" in APP and "ocultas" in APP and "menuAnclar" in APP,
        "la barra de herramientas dejo de ser configurable por el usuario")
require('node.parentElement === drawer' in APP,
        "fijar herramientas volvio a estar invertido: lo del cajon tiene que ENTRAR al riel")

require("rigControlsData" in SCENE_MODEL and "rigControlValue" in SCENE_MODEL,
        "los controles de cara y manos desaparecieron del modelo")
require("rigControlPath" in SCENE_MODEL and "controls/" in SCENE_MODEL,
        "un control dejo de ser un canal: pierde claves, curvas y conductor")
require("createRigControl" in DOCUMENT and "setRigControlValue" in DOCUMENT,
        "faltan los comandos de control")
require('id="rigDialNew"' in INDEX and "dzDialPanelSync" in APP,
        "el panel de controles no esta montado")
require('startsWith("controls/")' in FN,
        "el filtro por seleccion vuelve a esconder los diales del editor de curvas")

PREMIERE = (ROOT / "ui" / "animation" / "premiere-xml.js").read_text(encoding="utf-8")
require("xmeml" in PREMIERE and "premiereXML" in PREMIERE,
        "el exportador de XML para Premiere desaparecio")
require("Math.round(f), ntsc" in PREMIERE,
        "el timebase NTSC volvio a escribirse mal: la secuencia se desfasa")
require("audioBufferAWav" in PREMIERE and "export_premiere" in MAIN,
        "el audio dejo de escribirse junto al XML: el montaje arranca pidiendo relinkear")
require('data-x="premiere"' in APP and "dzExportPremiere" in APP,
        "el boton de exportar para Premiere no esta en el modal")

LIP = (ROOT / "ui" / "animation" / "lipsync.js").read_text(encoding="utf-8")
require("lipsyncPorAmplitud" in LIP and "lipsyncPicosDeBuffer" in LIP,
        "el lipsync por amplitud desaparecio")
require("if (v < umbral) return 0" in LIP,
        "el silencio dejo de cerrar la boca: el lipsync se mueve en las pausas")
require("f - desdeCuadro >= sosten" in LIP,
        "se cayo el sosten minimo: la boca tiembla un cuadro por forma")
require("if (elegido !== anterior)" in LIP,
        "el lipsync volvio a escribir una clave por cuadro: la X-sheet se vuelve ilegible")
require("for (let f = desde; f <= hasta; f++)" in LIP and "if (v > maximo) maximo = v" in LIP,
        "la escala dejo de medirse contra el tramo: un grito lejano apaga toda la toma")
require("applyLipsync" in DOCUMENT and "history.begin(label)" in DOCUMENT,
        "el lipsync dejo de ser UNA transaccion: Undo lo saca clave por clave")
require("clearRigSwitchRange" in DOCUMENT,
        "sin borrado por tramo, rehacer un lipsync mezcla dos sincronizaciones")
require('id="rigLipGen"' in INDEX and "dzLipGenerar" in APP,
        "el panel de lipsync no esta montado")

print("CONTRATOS 2D OK: Escape, rueda, modos, rig, vectores, tableta, espejo y lipsync")
