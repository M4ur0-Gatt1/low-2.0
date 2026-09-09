# Matriz de regresión de LOW 2D

Casos derivados de problemas reales comunicados por usuarios de software de
animación. Esta matriz es un contrato de producto: un control no se considera
terminado hasta modificar el modelo real, participar de Undo/Redo, guardarse y
tener una comprobación proporcional al riesgo.

## P0 — integridad y recuperación

| ID | Escenario de aceptación | Tipo | Estado |
| --- | --- | --- | --- |
| SAVE-01 | Modificar un Drawing, `Ctrl+S`, cerrar y reabrir: contenido idéntico. | Modelo/integración | Automatizado |
| SAVE-02 | Modificar varios Levels, exposiciones, paleta, cámara y onion skin: un único guardado recupera todo. | Modelo/integración | Automatizado |
| SAVE-03 | Si falla la escritura, la versión guardada anterior permanece intacta y el documento sigue dirty. | Integración host/filesystem | Automatizado (`check_save_recovery_ui.js`) |
| SAVE-04 | El mensaje de éxito sólo aparece después de confirmar la escritura completa. | Interacción | Automatizado (`check_save_recovery_ui.js`) |
| HIST-01 | Cada comando destructivo publica nombres concretos para Undo y Redo. | Unidad | Automatizado |
| HIST-02 | Copy/cut/paste desde Xsheet y Timeline ejecutan los mismos comandos y producen el mismo estado. | Modelo/interacción | Automatizado (comando único `shortcuts.cells`) |
| HIST-03 | Una transacción compuesta se deshace en un solo paso y en orden inverso. | Unidad | Automatizado por HistoryManager |
| RECV-01 | Un checkpoint conserva ruta, contenido, hora y última operación. | Unidad | Automatizado |
| RECV-02 | Tras cierre inesperado se ofrecen Recover, Discard y Compare sin cargar silenciosamente el archivo. | E2E | Automatizado (`check_save_recovery_ui.js`) |
| RECV-03 | Descartar una recuperación no modifica el documento guardado ni vuelve a ofrecerla. | Unidad/E2E | Unidad automatizada |
| CRASH-01 | Un crash report incluye versión, OS, GPU/render, escena y último comando sin contenido privado innecesario. | Integración | Implementado con lista blanca en los dos lados del puente |
| LEVEL-01 | Crear un Level exige o propone un nombre descriptivo y conserva un ID interno estable. | Interacción/modelo | Automatizado (modelo) + propuesta de nombre y renombrado en la UI |
| STYLE-01 | Un estilo usado no puede borrarse sin reasignación. | Modelo | Automatizado |
| STYLE-02 | Reasignar y borrar forma una operación reversible y no deja referencias huérfanas. | Modelo | Automatizado (`replaceStyle`, una transacción) |

## P1 — estados que deben explicarse solos

| ID | Escenario de aceptación | Resultado esperado |
| --- | --- | --- |
| VIEW-01 | Frame actual sin exposición | Explica Level y frame; ofrece exposición anterior, crear Drawing o exponer el actual. |
| VIEW-02 | Drawing referenciado pero inexistente | Muestra número, Level y rango de frames afectado. |
| CAM-01 | Viewer con arte y Camera Output vacío | Diagnóstico por visibilidad, cobertura de cámara y conexión de output. |
| CAM-02 | Cambiar Drawing/Camera/Final Output | El modo activo queda rotulado inequívocamente. |
| ROOM-01 | Cerrar o mover todos los paneles y ejecutar Reset Current Room | Recupera el preset sin cambiar escena, frame, selección, onion ni History. |
| ROOM-02 | Reset All Rooms | Borra sólo layouts personalizados; nunca datos del proyecto. |
| AUDIO-01 | Importar WAV/MP3/OGG compatible | Muestra nombre, duración, frecuencia, canales y estado Ready. |
| AUDIO-02 | Audio válido sin sonido porque está muted | Diagnóstico `Playback is muted` con acción Unmute. |
| AUDIO-03 | Codec no compatible | Mensaje específico; no `Error` genérico. |
| ALPHA-01 | Exportar JPG con transparencia | Advierte que JPEG no admite alpha y ofrece PNG o fondo explícito. |
| PAL-01 | Cambiar de Level | Level, Palette y Style activos se actualizan juntos y quedan visibles. |
| SHORT-01 | Ejecutar comando por menú, toolbar, shortcut o contexto | Todas las rutas llaman al mismo Command Registry. |

## P2/P3 — crecimiento profesional

| ID | Escenario de aceptación | Prioridad |
| --- | --- | --- |
| BRUSH-01 | Crear, renombrar, agrupar, buscar y compartir un BrushPreset real. | P2 |
| BRUSH-02 | Cada parámetro visible produce una diferencia medible en el trazo. | P1 — **cerrado en v4.21.0**; automatizado (`check_brush_params_ui`). En raster los nueve cambian el trazo; en vectorial siete, y los dos que no —Presión → opacidad y Dureza— están **apagados con su motivo**, porque una cinta rellena no puede variar opacidad a lo largo ni difuminar el borde. |
| SAFE-01 | Inicio seguro usa workspace, shortcuts y brushes por defecto; no carga plugins ni proyecto previo. | P1 — automatizado en modelo, host y Chromium (`--safe-mode`) |
| SAFE-02 | Reset UI/Shortcuts/Brushes/2D actúa por dominio y permite cancelar. | P1 — automatizado; preserva escenas y recuperación |
| XS-COL | La hoja de exposición tiene las columnas que §6 pide: niveles, cámara, audio y efectos. | P2 — **automatizado en v4.26.0** (`check_xsheet_columnas_ui`). El audio se lee con `peakAt`, que aplica el desplazamiento de la pista; la aserción está verificada contra su violación. |
| NODE-01 | Editar puntos de un trazado, polígono o línea: mover, borrar, y un solo paso de historial por gesto. | P1 — **automatizado en v4.22.0** (`check_vector_nodes_ui`): formato del trazado (relativo, H/V, L implícita), mover sin deformar el resto, piso contra trazados degenerados, el arranque no se pierde, y **un gesto = un Ctrl+Z**. |
| INI-01 | LOW abre en el estudio 2D: la invitación ofrece crear o abrir, sus botones **responden al clic de verdad**, y se va —sin taparlo— en cuanto hay un documento abierto por cualquier camino. | P0 — **automatizado en v4.29.0** (`check_pantalla_inicial_ui`, 4 contratos). Dos defectos de v4.28.0 reportados por Mauro y cerrados acá: la invitación vive dentro del lienzo y sin estar en `DZ_UI_SEL` el `preventDefault()` del dibujo se comía el click; y `hayTrabajoAbierto()` miraba sólo `DZ.path`/`DZ.doc`, que con un diseño `.svg` abierto están **los dos en null**. Las dos aserciones verificadas contra su violación. |
| INI-02 | El estudio 2D se ve **al arrancar**, no cuando termina de cargar el lado de la IA. | P0 — **automatizado en v4.30.0** (`check_pantalla_inicial_ui` se instrumenta antes de navegar y compara el instante en que se pinta contra el de la llamada del arranque; 4 contratos). Medido en la app real: aparecía a los **6.542 ms**, porque la llamada está al final de `init()`, detrás de `api.get_state()`, `loadChatTabs()` y `resume()` — el dibujo esperando al chat. Ahora hay una fase temprana colgada de `DOMContentLoaded`, con las acciones apagadas hasta que existe el puente. Verificado mordiendo con el código anterior. |
| FORMA-01 | Una forma nace **sólo con contorno** —trazo y grosor actuales, sin relleno— y hay un interruptor para pedirla rellena. | P1 — **automatizado en v4.31.0** (`check_shape_tool_ui`, 2 contratos). Antes salía un bloque rojo macizo con `fill` y ningún `stroke`, que en una mesa de animación es al revés de lo que se necesita. Verificado mordiendo con el código anterior. |
| FORMA-02 | Al contorno de una forma se le puede poner **un pincel** como línea, y la forma guarda su geometría, su pincel y su grosor. | P1 — **automatizado en v4.31.0** (`check_shape_tool_ui`, 3 contratos). Los hijos del grupo son un render; el dato es `data-d`. El pincel va por id porque si al re-dibujar se leyera el actual, deformar la forma le cambiaría el trazo. Falta producción: un dibujo entintado de verdad con esto. |
| FORMA-03 | Una forma se **deforma libremente** con una jaula de puntos: la jaula queda guardada, se repone entera o de a un punto, la densidad se cambia sin perder lo hecho, y un tirón es **un** Ctrl+Z. | P1 — **automatizado en v4.31.0** (`check_warp_cage_ui`, 6 contratos). Usa `rigMalla` —la misma malla que dobla los dibujos del rig— y `dzDeformarElemento`. Con el contorno entintado, el pincel se rehace sobre la curva nueva: es lo que hace que FORMA-01/02/03 compongan. Falta producción: una escena animada con deformación. |
| RIG-01 | Un modo contextual explica por qué un Level no admite mesh/bones y cómo prepararlo. | P3 |
| MOCAP-01 | Cancelar el análisis conserva íntegramente las siluetas anteriores y el estado del video. | P1 — automatizado en modelo/contrato |
| MOCAP-02 | Un punto sólo se completa entre dos observaciones confirmadas; nunca se extrapola fuera de ellas. | P1 — automatizado |
| MOCAP-03 | Reducir claves conserva extremos y cambios que superan la tolerancia elegida. | P1 — automatizado |
| MOCAP-07 | Una máscara válida produce geometría SVG visible; una máscara vacía no crea un cuadro blanco. | P0 — automatizado en modelo y Chromium |
| MOCAP-04 | Aplicar una toma al rig forma una sola transacción y no cambia pivotes ni jerarquía. | P1 — automatizado |
| MOCAP-05 | Un video real con oclusiones, paneo y dos sujetos produce diagnóstico comprensible y corrección manual. | P1 — **parcial**: validado con video real de UN sujeto sin oclusiones ni paneo. Faltan los tres casos difíciles |
| MOCAP-06 | El filtro elimina ruido aislado, mantiene continuidad de identidad y marca ausencia del sujeto como oclusión. | P1 — automatizado |
| MOCAP-13 | Fondo elegido, validación y navegación por problemas persisten y son reversibles con Ctrl+Z. | P1 — modelo/UI automatizados |
| MOCAP-08 | Los 33 hitos MediaPipe se traducen a 13 articulaciones LOW respetando región, confianza y lados. | P0 — automatizado |
| MOCAP-09 | Reanalizar reemplaza detecciones automáticas pero conserva cuadros corregidos manualmente. | P0 — automatizado |
| MOCAP-10 | Pose Landmarker ejecuta inferencia en un worker local y el hilo visual conserva un fallback seguro. | P1 — E2E Chromium |
| MOCAP-11 | Los apoyos se agrupan por pie e intervalo; Pies firmes estabiliza el contacto sin deformar la pose relativa. | P1 — modelo/UI automatizados |
| MOCAP-12 | La máscara semántica se proyecta desde la región del sujeto al cuadro completo sin borrar correcciones manuales. | P1 — **aceptado** (v4.14.0, video real: 67 siluetas y nivel de calco creado) |

## Límites conocidos y medidos

- **Resolución de la silueta: 192 px de ancho como máximo** (`localSilhouetteEngine`,
  `width = min(192, …)`). En una escena de 1920 cada píxel de máscara se agranda diez
  veces, y por eso el nivel de calco se ve a manchones. Es un techo elegido para que el
  análisis de decenas de cuadros no congele la interfaz, no un defecto del filtro.
- Con **line art** como entrada, la diferencia contra el fondo sólo se dispara donde hay
  tinta: el resultado son los trazos, no una silueta rellena. Es lo correcto para calcar,
  pero conviene no esperar una mancha sólida como con video de acción real.

## Regla para nuevos tests

Cada incidencia debe expresarse con una secuencia reproducible:

```text
estado inicial → acción → estado observable → guardar/cerrar/reabrir → estado final
```

Los tests de modelo cubren invariantes y serialización; los de integración
cubren el puente Python/pywebview y el filesystem; los E2E cubren mensajes,
botones de recuperación y flujos multiventana. Las pruebas visuales sólo se
usan para layout, contraste, selección y estados activos: nunca sustituyen una
afirmación sobre el modelo.
