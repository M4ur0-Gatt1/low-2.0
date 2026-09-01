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

print("CONTRATOS 2D OK: Escape, rueda, modos, rig, vectores y tableta")
