"""Contratos estáticos de interacción que bloquean un release si regresan.

No reemplazan las pruebas de navegador. Protegen reglas críticas mientras se
incorpora el arnés end-to-end: Escape no cierra 2D, la rueda no transforma el
rig y los gestos de tableta no mezclan Pointer Events con Mouse Events.
"""
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
APP = (ROOT / "ui" / "app.js").read_text(encoding="utf-8")
INDEX = (ROOT / "ui" / "index.html").read_text(encoding="utf-8")


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

print("CONTRATOS 2D OK: Escape, rueda, modos y tableta")
