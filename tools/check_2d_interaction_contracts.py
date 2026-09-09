"""Contratos estáticos de interacción que bloquean un release si regresan.

No reemplazan las pruebas de navegador. Protegen reglas críticas mientras se
incorpora el arnés end-to-end: Escape no cierra 2D, la rueda no transforma el
rig y los gestos de tableta no mezclan Pointer Events con Mouse Events.
"""
import re
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
APP = (ROOT / "ui" / "app.js").read_text(encoding="utf-8")
# Extraidos de app.js en v4.16.0 (§12 AHORA·7). Los contratos apuntan a donde
# vive el codigo, no a donde vivia: cuando el panel de equipo y los arcos se
# movieron, esta prueba lo noto — que es exactamente para lo que esta.
COLABP = (ROOT / "ui" / "panels" / "colab-panel.js").read_text(encoding="utf-8")
ARCOSV = (ROOT / "ui" / "panels" / "arcs-view.js").read_text(encoding="utf-8")
FORMAS = (ROOT / "ui" / "panels" / "shape-tool.js").read_text(encoding="utf-8")
MPVIEW = (ROOT / "ui" / "composition" / "multiplane-view.js").read_text(encoding="utf-8")
CMPCAM = (ROOT / "ui" / "panels" / "composition-camera.js").read_text(encoding="utf-8")
CMPPAN = (ROOT / "ui" / "panels" / "composition-panel.js").read_text(encoding="utf-8")
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
ISS = (ROOT / "low_installer.iss").read_text(encoding="utf-8", errors="replace")
CI = (ROOT / ".github" / "workflows" / "build.yml").read_text(encoding="utf-8")


def function_body_doc(name: str, next_name: str) -> str:
    start = DOCUMENT.index(f"{name}(")
    end = DOCUMENT.index(f"{next_name}(", start)
    return DOCUMENT[start:end]


def require(condition: bool, message: str) -> None:
    if not condition:
        raise SystemExit("CONTRATO 2D INCUMPLIDO: " + message)


escape = function_body("dzEscapeActive", "dzApplyZoom")
# dzAddShape se mudo a ui/panels/shape-tool.js en v4.16.0: el tramo termina
# en la funcion que quedo despues.
resize = function_body("dzHandleDown", "dzDeleteSelected")
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

TRANS = (ROOT / "ui" / "collaboration" / "transport.js").read_text(encoding="utf-8")
RELE = (ROOT / "server" / "low_relay.py").read_text(encoding="utf-8")
require("RelayTransport" in TRANS and "dzColabConectar" in COLABP,
        "el transporte del trabajo remoto desaparecio")
require("this.cola.push(op)" in TRANS,
        "sin cola, lo que se dibuja sin red se pierde")
require("this.vistas.add(op.id)" in TRANS,
        "sin memoria de ids, cada trazo propio se dibuja dos veces al volver del servidor")
require("ESPERAS = [1000, 2000, 4000, 8000, 15000, 30000]" in TRANS,
        "se cayo la espera creciente: el cliente ataca al propio droplet")
require("this.seq = Math.max(this.seq, Number(m.seq) || 0)" in TRANS,
        "el cliente no toma el numero del servidor: pide la jornada entera en cada reconexion")
require("desde: this.seq" in TRANS,
        "sin punto de partida, reconectar se trae todo de nuevo")
require("def tomar" in RELE and "actual[\"actorId\"] != actor" in RELE,
        "el servidor dejo de arbitrar los bloqueos: dos personas creen que ganaron")
require("soltar_todo" in RELE,
        "los bloqueos del que se desconecta quedan trabados para siempre")
require("os.replace(tmp, ruta)" in RELE,
        "el registro de la sala se guarda sin atomicidad: un corte lo deja a medias")
require('op["actorId"] = c.actorId' in RELE,
        "el remitente lo pone el cliente: cualquiera puede firmar como otro")
require("applyRemoteSnapshot" in DOCUMENT and "snapshotPara" in DOCUMENT,
        "no hay por donde entrar ni salir el dibujo del equipo")
require("DZ.colabAplicando" in COLABP and "DZ.colabUltimo[clave] === texto" in COLABP,
        "sin el corte por contenido, dos LOW se devuelven la misma instantanea sin fin")
require("if (DZ.anim) DZ.anim.idx = i;" in APP,
        "dzGoFrame volvio a exigir la lista de archivos del modo viejo: "
        "con documento abierto los clicks en los chips no mueven nada")

TLVIEW = (ROOT / "ui" / "animation" / "timeline-view.js").read_text(encoding="utf-8")
XSVIEW = (ROOT / "ui" / "animation" / "xsheet-view.js").read_text(encoding="utf-8")
require('"1F"' in TLVIEW and '"1F"' in XSVIEW,
        "los botones de exposicion volvieron a decir 1s: en castellano se leen como segundos")
require('"1s"' not in TLVIEW and '"1s"' not in XSVIEW,
        "quedo un boton de exposicion rotulado en segundos")
require('data-act="premiere"' in INDEX and "dzExportPremiereDirecto" in APP,
        "el XML para Premiere volvio a estar solo dentro del modal: no lo encuentra nadie")
require("MP4 · PNG · XML" in INDEX,
        "el menu Archivo vuelve a prometer solo GIF/PNG y esconde el XML")

WS = (ROOT / "ui" / "workspace" / "workspaces.js").read_text(encoding="utf-8")
require('["dzColab","dzColabHead"]' in APP and 'id="dzColabHead"' in INDEX,
        "el panel de equipo dejo de ser acoplable: vuelve a taparle los paneles de atras")
require('colab:      { label: "Equipo"' in WS,
        "el panel de equipo no figura en el catalogo: no se puede abrir ni cerrar desde Ventana")
_colab_css = CSS_APP.split(".colab{")[1].split("}")[0] if ".colab{" in CSS_APP else ""
require("position:fixed" not in _colab_css and "z-index" not in _colab_css,
        "el panel de equipo volvio a ser un flotante clavado encima del muelle")
require("ahora - DZ.colabPresenciaAt < 1000" in COLABP,
        "se cayo el limite de presencia: pasar cuadros inunda el rele, 24 mensajes por segundo")
require("dzColabReproduciendo()" in COLABP and "filtro.checked && !dzColabReproduciendo()" in COLABP,
        "la lista de comentarios vuelve a repintarse en cada cuadro y traba la reproduccion")

SHORT = (ROOT / "ui" / "animation" / "shortcuts.js").read_text(encoding="utf-8")
require('if (id === this.layerId && frame === this.frame) this.emit("frame");' in DOCUMENT,
        "cambiar el dibujo del cuadro actual dejo de avisar: el volcado con retardo "
        "escribe el lienzo viejo encima y se pierde lo pegado")
require("copiarDibujo" in SHORT and "pegarDibujo" in SHORT and "copiarDibujo: () => dzCuadroCopiar()" in APP,
        "volvieron a existir dos copiar/pegar compitiendo segun si la X-sheet esta montada")
require("hayRango" in SHORT and "e.shiftKey && clip.range" in SHORT,
        "se cayo la regla de copiar/pegar: sin rango el dibujo, con rango las celdas, "
        "Ctrl+Shift+V el reuso")

ARCOS = (ROOT / "ui" / "animation" / "arcs.js").read_text(encoding="utf-8")
require("analizarArco" in ARCOS and "arcoDesfase" in ARCOS,
        "el modulo de arcos y espaciado desaparecio")
require('id="tlArco"' in INDEX and "dzArcoToggle" in ARCOSV,
        "el boton de arcos no esta en la barra de la timeline")
require("dz-penui dz-arco" in ARCOSV,
        "el arco dejo de ser solo-pantalla: se guardaria dentro del dibujo")
require("if (previo === dw.number) continue;" in ARCOSV,
        "el arco vuelve a poner un punto por cuadro dentro de un sostenido: "
        "se lee «lento» donde en realidad el dibujo no cambia")
require("dzArcoMuestras(ultimo).length" in ARCOSV,
        "el arco vuelve a depender del nodo del DOM: al mover la cabeza lectora "
        "se pierde la seleccion y el arco desaparece justo cuando uno lo mira")
require("mejor.error > 0.34" in ARCOS,
        "el desfase deja de callarse cuando dos movimientos no se parecen: "
        "inventa un numero de overlapping")

require("window.dzColabToggle = dzColabToggle" in COLABP
        and "window.dzArcoToggle = dzArcoToggle" in ARCOSV,
        "un panel extraido dejo de exponer sus nombres globales: los manejadores "
        "de la interfaz y los recorridos E2E los llaman por nombre")
require('src="panels/colab-panel.js' in INDEX and 'src="panels/arcs-view.js' in INDEX,
        "los paneles extraidos no se cargan: la interfaz queda sin equipo ni arcos")
require(INDEX.index('src="app.js') < INDEX.index('src="panels/'),
        "los paneles extraidos se cargan ANTES de app.js: usan DZ y $ de ahi")

require("dzFormaDown" in FORMAS and 'tool === "shape"' in APP,
        "la herramienta de formas dejo de recibir el gesto del puntero")
require("DZ_FORMA = null" in FORMAS and "dzFormaCancelar" in APP,
        "el gesto de forma no se puede cancelar: Escape o cambiar de herramienta "
        "dejarian una forma a medias")
require("DZPointerController.finish(g.gestureToken, g.pid)" in FORMAS,
        "el gesto de forma no cierra en el controlador de puntero; ojo que la API "
        "es finish(token, pointerId), no commit — inventar el nombre rompia el gesto "
        "a mitad y la forma quedaba sin seleccionar")
require("dzSnapshot();" in FORMAS.split("Recien ahora entra al historial".replace("ie","ié"))[-1][:200]
        if "historial" in FORMAS else False,
        "la forma entra al historial antes de soltar: se registrarian pasos por cada "
        "movimiento del puntero")
require("g.ancla" in FORMAS and "vb[0] + vb[2] / 2" not in FORMAS.split("if (!g.arrastro)")[-1][:400],
        "un clic simple volvio a plantar la forma en el CENTRO del lienzo: con la mesa "
        "paneada eso cae fuera de la pantalla y la herramienta parece rota")
require('src="panels/shape-tool.js' in INDEX,
        "el modulo de formas no se carga")

require('this.manipulate(e, plane, this.pendingTool || "xy")' in MPVIEW,
        "agarrar un plano volvio a no hacer nada sin apretar antes una tecla: "
        "es el reporte «no puedo cambiar las posiciones de los planos»")
require("if (plane.id !== this.selected) this.select(plane.id);" in MPVIEW,
        "agarrar un plano no elegido no lo elige: el click llega DESPUES del "
        "arrastre y se movia el plano anterior")
require("this.pintarTarjeta(plane);" in MPVIEW,
        "el arrastre volvio a reconstruir el escenario entero: render() clona el "
        "dibujo de cada plano y esto corre en cada pointermove")
require('"Arrastrá un plano para moverlo' in MPVIEW,
        "la pantalla de composicion dejo de explicar el gesto")
require("dzCmpCamRender" in CMPCAM and 'boton.dataset.v = "camera"' in CMPCAM,
        "se cayo la vista de camara de Composicion: sin ella se ordena profundidad "
        "sin poder ver el resultado, que es lo que la hacia sentir de juguete")
require("dzCamView(texto, cam)" in CMPCAM,
        "la vista de camara dejo de pintar el cuadro REAL: si no pasa por dzCamView "
        "muestra una aproximacion y miente sobre lo que se va a exportar")
require("DZ.compositionAutoKey) dzCmpCamClave" in CMPCAM,
        "mover la camara para mirar volvio a dejar claves sin Auto-key, o dejo de "
        "dejarlas con Auto-key puesto")
require('src="panels/composition-panel.js' in INDEX
        and INDEX.index('src="panels/composition-panel.js') < INDEX.index('src="panels/composition-camera.js'),
        "el puente de composicion se carga despues de la camara, que lo usa")
# app.js SIGUE llamando estas funciones y debe hacerlo: lo que no puede es
# volver a DEFINIRLAS.
require("function dzCompositionViewShow" in CMPPAN
        and "function dzCompositionViewShow" not in APP,
        "el puente de composicion volvio a definirse dentro de app.js")
require('src="panels/composition-camera.js' in INDEX,
        "el modulo de camara de composicion no se carga")

# ── Identidad, archivos .low y firma ──────────────────────────────────────
require('+ ".low";' in APP,
        "las escenas volvieron a ofrecerse con otra extension: la de LOW es .low")
require("(low|lowscene)$" in APP,
        "se dejo de reconocer .lowscene: los archivos guardados antes de la "
        "v4.19.0 tienen que seguir abriendose (§14)")
require("archivo_de_argv" in MAIN and '"open_file": s._abrir_al_inicio' in MAIN,
        "el doble clic en un .low no llega a la aplicacion: la asociacion queda "
        "decorativa")
require("s._abrir_al_inicio = None" in MAIN.split('"open_file"')[1][:200],
        "el archivo de arranque no se limpia: un refresco de la interfaz lo "
        "volveria a abrir encima de lo que el usuario tenga en pantalla")
require("dzSceneOpen(ruta)" in APP or "dzSceneOpen(ruta)" in APP,
        "el doble clic dejo de usar el mismo camino que Abrir escena: dos caminos "
        "que abren escenas se desincronizan")
require("ChangesAssociations=yes" in ISS and 'AppExt ".low"' in ISS
        and "low_doc.ico" in ISS,
        "el instalador dejo de asociar .low o de instalar su icono")
require("Root: HKCU" in ISS and "Root: HKLM" not in ISS,
        "la asociacion paso a HKLM: el instalador corre sin permisos de "
        "administrador y fallaria")
require((ROOT / "low_doc.ico").exists(),
        "falta low_doc.ico: los archivos .low quedarian con el icono generico")
require("LOW_PFX_BASE64" in CI and "timestamp.digicert.com" in CI,
        "se cayo la firma del ejecutable, o se firma sin sellado de tiempo — sin "
        "sello la firma muere cuando vence el certificado y los instaladores ya "
        "publicados empiezan a dar aviso")
require(CI.count("LOW_PFX_BASE64") >= 4,
        "se firma el exe pero no el instalador: lo primero que ejecuta el usuario "
        "es el setup y es eso lo que Windows mira")
require("33B5E8" in INDEX,
        "se saco el celeste del rayo del splash: es el rayo de Aladdin Sane y es "
        "identidad, no un resto del celeste que se quito de la interfaz")


# -- Punteria de la seleccion --------------------------------------------
HIT = (ROOT / "ui" / "drawing" / "hit-test.js").read_text(encoding="utf-8")
require('src="drawing/hit-test.js' in INDEX,
        "el modulo de punteria no se carga: la seleccion vuelve a fallar dentro "
        "de una forma sin relleno")
require("dzHitTest(e.clientX, e.clientY)" in APP,
        "dzPointerDown dejo de consultar la punteria: e.target solo acierta donde "
        "hay pintura, y una forma sin relleno no se puede agarrar por adentro")
require("isPointInFill" in HIT,
        "se dejo de probar la geometria del relleno: isPointInFill es lo unico "
        "que acierta el area de una forma con fill=none")
require("for (let i = candidatos.length - 1; i >= 0; i--)" in HIT,
        "la punteria dejo de recorrer de adelante hacia atras: ganaria el de "
        "atras, que es exactamente el defecto reportado")
require("dzHitDistanciaAlTrazo" in HIT,
        "se saco la holgura por distancia al trazado: una linea de un pixel "
        "volveria a exigir acertarle al pixel exacto")
require("function dzRigArtAtPoint" in HIT and "function dzRigArtAtPoint" not in APP,
        "dzRigArtAtPoint volvio a app.js o dejo de compartir la punteria: los "
        "huesos se colgarian del cuerpo en vez de la pieza dibujada con linea")
require("dz-onion" in HIT and "dz-penui" in HIT,
        "la punteria dejo de excluir el papel cebolla y las guias de pantalla")

# -- Inspector de Composicion --------------------------------------------
require("input.oninput" in MPVIEW,
        "los campos del inspector volvieron a escuchar solo change: tipear un "
        "valor no haria nada hasta salir del campo, y las flechas del teclado "
        "no harian nada nunca")
require("previa" in MPVIEW and "pintarTarjeta" in MPVIEW,
        "el inspector dejo de mostrar vista previa mientras se tipea")
require('texto.endsWith(".")' in MPVIEW,
        "un valor a medio escribir vuelve a mandar el plano al cero")

# -- BRUSH-02: los parametros del pincel hacen algo -----------------------
RENDER = (ROOT / "ui" / "drawing" / "brush-render.js").read_text(encoding="utf-8")
STUDIO = (ROOT / "ui" / "drawing" / "brush-studio.js").read_text(encoding="utf-8")
ENGINE = (ROOT / "ui" / "drawing" / "brush-engine-pro.js").read_text(encoding="utf-8")
require('src="drawing/brush-render.js' in INDEX,
        "el modulo del trazo final no se carga: el pincel se queda sin motor")
require("function dzBrushFinalElement" not in APP,
        "dzBrushFinalElement volvio a app.js")
require('brush && brush.engine === "raster" ? "raster" : "vector"' in RENDER,
        "volvio la comparacion cruda del motor: ocho pinceles incorporados no "
        "declaran engine y caerian otra vez al camino viejo, con todos sus "
        "parametros muertos")
require('brush.engine === "vector"' not in RENDER,
        "queda una comparacion contra 'vector' sin normalizar en el trazo final")
require('setAttribute("fill-opacity"' in RENDER,
        "la cinta vectorial volvio a salir siempre opaca: el deslizador de "
        "Opacidad existiria sin hacer nada")
require("dzBrushBordeSuave" in RENDER,
        "se saco la dureza del raster: el motor la calcula y nadie la pintaba")
require("function disperse" in ENGINE and "disperse(resample(" in ENGINE,
        "la dispersion vectorial dejo de aplicarse al eje de la cinta")
require("INERTES" in STUDIO and "pressureOpacity" in STUDIO and "hardness" in STUDIO,
        "el Estudio dejo de declarar que Presion->opacidad y Dureza no existen "
        "en una cinta vectorial: volverian a moverse sin hacer nada")
require("inerte" in (ROOT / "ui" / "design" / "studio-polish.css").read_text(encoding="utf-8"),
        "falta el estilo del deslizador apagado: se veria igual que uno vivo")

# -- Edicion vectorial: nodos --------------------------------------------
NODOS = (ROOT / "ui" / "vector" / "node-editor.js").read_text(encoding="utf-8")
require('src="vector/node-editor.js' in INDEX,
        "el editor de nodos no se carga: la herramienta de puntos queda muerta")
require("function dzPathParse" not in APP and "function dzNodesShow" not in APP,
        "el editor de nodos volvio a app.js")
require("dzNodesHistoria()" in NODOS and "dzNodesCerrarPaso()" in NODOS,
        "el gesto de nodos dejo de agruparse en una transaccion: volveria a "
        "dejar dos pasos de historial y el primer Ctrl+Z no se veria")
require("clearTimeout(DZ_DOC_TIMER)" in NODOS and "dzDocCommit()" in NODOS,
        "el volcado al documento ya no se fuerza dentro del gesto: caeria 260 ms "
        "despues, fuera de la transaccion, como un paso aparte")
require("DZ.history?.cancel?.()" in NODOS,
        "un gesto de nodos cancelado deja la transaccion abierta: el proximo "
        "cambio entraria en ella")
require('cmds.filter(s => s.c !== "Z").length <= 2' in NODOS,
        "se saco el piso del trazado: borrando puntos se podria dejar un trazado "
        "degenerado que no dibuja nada")

# -- Que version corre, y el papel cebolla -------------------------------
BADGE = (ROOT / "ui" / "core" / "version-badge.js").read_text(encoding="utf-8")
POLISH = (ROOT / "ui" / "design" / "studio-polish.css").read_text(encoding="utf-8")
# Los comentarios se sacan: el archivo EXPLICA que esa declaracion murio, y
# buscar el texto a secas encontraria la explicacion en vez de la declaracion.
CSS = re.sub(r"/\*.*?\*/", "", (ROOT / "ui" / "app.css").read_text(encoding="utf-8"), flags=re.S)
require('src="core/version-badge.js' in INDEX,
        "el modulo de version no se carga: la pantalla vuelve a no decir que "
        "build esta corriendo, y un reporte de «no anda» no se puede diagnosticar")
require("dzVersionSync?.(st)" in APP,
        "app.js dejo de sincronizar la version: el chip y el aviso de reinicio "
        "nunca se pintan")
require("binario_reemplazado" in MAIN and '"binario_viejo"' in MAIN,
        "se saco la deteccion de «se instalo con LOW abierto»: es la diferencia "
        "entre «no lo arreglaron» y «no lo reiniciaste»")
require("st_mtime" not in MAIN,
        "volvio la heuristica de la FECHA del ejecutable. No sirve: el instalador "
        "conserva la marca de tiempo del build, que corre en UTC, asi que en una "
        "maquina en UTC-3 el archivo dice estar horas en el futuro y el aviso salta "
        "en TODOS los arranques. Medido: mtime 12:47 con el reloj en 10:16")
require("def version_instalada" in MAIN and "winreg" in MAIN,
        "el aviso dejo de leer la version que el instalador anota: es la unica senal "
        "exacta, porque un ejecutable de un solo archivo no puede leer su propia "
        "version nueva sin desempacarse")
require('ValueName: "Version"' in ISS,
        "el instalador dejo de anotar la version instalada en el registro: sin eso "
        "el aviso de reinicio se queda sin senal")
require("def _version_tupla" in MAIN,
        "se comparan versiones como texto: «4.9.0» daria mayor que «4.26.0»")
require("_ARRANQUE" in MAIN,
        "falta el sello de arranque del proceso: sin el no se puede comparar con "
        "la fecha del ejecutable en disco")
require('log("── arranque ── LOW v%s' in MAIN,
        "el log volvio a escribir el arranque SIN version: es lo que hizo que un "
        "panel se midiera funcionando mientras se probaba otro build")
require("appearance: slider-vertical" not in CSS,
        "volvio `appearance: slider-vertical`, que Chrome elimino en la 121: en un "
        "WebView2 actual es letra muerta y solo confunde")
require("#designView .onion2-channel input[type=range] { height:94px; }" in POLISH,
        "los faders de papel cebolla perdieron su altura explicita: la regla de "
        "#designView les pone 14px con un selector de id, y el escape height:auto "
        "los dejaba en 129px desbordando una fila de grilla de 96")

# -- Mover un plano no es cambiar de cuadro ------------------------------
DOCJS = (ROOT / "ui" / "animation" / "document.js").read_text(encoding="utf-8")
GUARDIA = (ROOT / "ui" / "panels" / "onion-scroll-guard.js").read_text(encoding="utf-8")
require('this.emit("composition"); this.emit("frame")' not in DOCJS,
        "setCompositionTransform volvio a emitir «frame»: ese manejador reemplaza "
        "el lienzo desde el documento y deselecciona, asi que el cambio SIGUIENTE "
        "—la Z, por ejemplo— no hace nada. Medido en la app real")
require('else if (motivo === "composition") dzCompositionAplicar?.()' in APP,
        "nadie atiende el evento «composition»: mover un plano no se veria en el "
        "lienzo")
require("function dzCompositionAplicar" in CMPPAN,
        "falta dzCompositionAplicar: es lo que aplica la transformacion al lienzo "
        "sin repintar su contenido")
require("const lista = planes || []" in MPVIEW and "se muestra la mesa vacia" in MPVIEW,
        "setPlanes volvio a borrar la seleccion con una lista vacia: un repintado "
        "transitorio dejaria el proximo valor sin efecto")
require("if (!previa) this.root.querySelector" in MPVIEW,
        "el inspector volvio a quedarse mudo sin plano elegido")
require('src="panels/onion-scroll-guard.js' in INDEX and "requestAnimationFrame(devolver)" in GUARDIA,
        "se cayo el guardia del salto de scroll: tocar un fader del papel cebolla "
        "correria el panel bajo el puntero")
require('fill="#16171a"' in INDEX and 'fill="#eef0ea"' in INDEX,
        "las flechas de seleccion volvieron a pintarse con currentColor: la NEGRA "
        "salia rellena de blanco y la BLANCA hueca, al reves de como se llaman")

# -- El instrumento de la prueba maestra (§15) ---------------------------
P15 = (ROOT / "ui" / "core" / "session-recorder.js").read_text(encoding="utf-8")
BIBLIA = (ROOT / "docs" / "LOW_BIBLIA_PRODUCCION.md").read_text(encoding="utf-8")
require('src="core/session-recorder.js' in INDEX
        and 'href="design/session-recorder.css' in INDEX,
        "el instrumento de la §15 no se carga")
require('data-act="prueba15"' in INDEX,
        "no hay entrada de menu para la prueba maestra: el instrumento existiria y "
        "nadie podria abrirlo")
require("function dzMenuAction" in APP and '"prueba15"' not in APP,
        "la prueba maestra se cablo dentro de app.js: se atiende interceptando el "
        "clic, justamente para no hacerlo crecer")
require("def session_log" in MAIN and '"sesiones"' in MAIN,
        "el puente no escribe la bitacora: §15 pide que el proceso quede GRABADO "
        "como prueba repetible")

# Los doce pasos tienen que ser LOS DE LA BIBLIA, palabra por palabra. Si el
# instrumento y la §15 se separan, se mide otra cosa que la que se pide.
_i = BIBLIA.index("## 15. Prueba maestra")
_pasos_biblia = re.findall(r"^\s*(\d{1,2})\.\s+(.+?)$", BIBLIA[_i:_i + 1400], re.M)[:12]
require(len(_pasos_biblia) == 12,
        "no pude leer los doce pasos de §15 en la biblia: cambio el formato de la lista")
for _n, _texto in _pasos_biblia:
    require(_texto.strip() in P15,
            "el paso %s de §15 no esta en el instrumento tal como lo pide la biblia: "
            "«%s»" % (_n, _texto.strip()[:60]))
require(P15.count('id: "p') == 12,
        "el instrumento no tiene doce pasos con id estable: dos corridas no se "
        "podrian comparar")

# Las tres cosas que lo harian inutil si se caen.
require("if (!p || !p.inicio) return false" in P15,
        "se puede terminar un paso que nunca se empezo: un tiempo inventado ensucia "
        "la unica medicion limpia que hay")
require('global.addEventListener("error", contar)' in P15,
        "los errores dejaron de contarse solos: un conteo auto-reportado no vale nada")
require('p.ayudas.length && resultado === "ok" ? "con ayuda"' in P15,
        "«con ayuda» volvio a contar como logrado: §15 pide los doce pasos SIN ayuda")
require("aprobada: hechos === this.pasos.length" in P15,
        "el veredicto de §15 dejo de exigir los doce pasos sin ayuda")

# -- Las columnas de §6 en el X-sheet -----------------------------------
XSV = (ROOT / "ui" / "animation" / "xsheet-view.js").read_text(encoding="utf-8")
require("_celdaCamara" in XSV and "_celdaAudio" in XSV and "_celdaEfectos" in XSV,
        "faltan las columnas que §6 pide: «filas son fotogramas; columnas son "
        "niveles, camara, audio y efectos»")
require('"CÁM"' in XSV and '"AUDIO"' in XSV and '"EFEC"' in XSV,
        "las tres columnas fijas perdieron su encabezado")
require("pista.peakAt(f)" in XSV and "pista.peaks[f" not in XSV,
        "la columna de audio lee `peaks` CRUDO: mostraria la onda corrida respecto "
        "de lo que se escucha, porque peakAt es el que aplica el desplazamiento")
require("scene.camera && this.doc.scene.camera.keys" in XSV,
        "la columna de camara dejo de leer scene.camera.keys, que es la fuente que "
        "usa la camara para interpolar")
require(".xs2-fija { flex: 0 0 auto" in CSS,
        "las columnas fijas se estiran como las de capas: el espacio de la hoja es "
        "de los niveles")

print("CONTRATOS 2D OK: Escape, rueda, modos, rig, vectores, tableta, espejo, lipsync, equipo, arcos, punteria, pincel, nodos, version, composicion, prueba maestra y X-sheet")
