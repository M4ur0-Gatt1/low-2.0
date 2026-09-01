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
| SAVE-03 | Si falla la escritura, la versión guardada anterior permanece intacta y el documento sigue dirty. | Integración host/filesystem | Pendiente |
| SAVE-04 | El mensaje de éxito sólo aparece después de confirmar la escritura completa. | Interacción | Pendiente |
| HIST-01 | Cada comando destructivo publica nombres concretos para Undo y Redo. | Unidad | Automatizado |
| HIST-02 | Copy/cut/paste desde Xsheet y Timeline ejecutan los mismos comandos y producen el mismo estado. | Modelo/interacción | Parcial: modelo automatizado |
| HIST-03 | Una transacción compuesta se deshace en un solo paso y en orden inverso. | Unidad | Automatizado por HistoryManager |
| RECV-01 | Un checkpoint conserva ruta, contenido, hora y última operación. | Unidad | Automatizado |
| RECV-02 | Tras cierre inesperado se ofrecen Recover, Discard y Compare sin cargar silenciosamente el archivo. | E2E | Pendiente |
| RECV-03 | Descartar una recuperación no modifica el documento guardado ni vuelve a ofrecerla. | Unidad/E2E | Unidad automatizada |
| CRASH-01 | Un crash report incluye versión, OS, GPU/render, escena y último comando sin contenido privado innecesario. | Integración | Pendiente |
| LEVEL-01 | Crear un Level exige o propone un nombre descriptivo y conserva un ID interno estable. | Interacción/modelo | Pendiente |
| STYLE-01 | Un estilo usado no puede borrarse sin reasignación. | Modelo | Automatizado |
| STYLE-02 | Reasignar y borrar forma una operación reversible y no deja referencias huérfanas. | Modelo | Reasignación automatizada; transacción pendiente |

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
| BRUSH-02 | Cada parámetro visible produce una diferencia medible en el trazo. | P1/P2 |
| SAFE-01 | Inicio seguro usa workspace, shortcuts y brushes por defecto; no carga plugins ni proyecto previo. | P1 |
| SAFE-02 | Reset UI/Shortcuts/Brushes/2D actúa por dominio y permite cancelar. | P1 |
| RIG-01 | Un modo contextual explica por qué un Level no admite mesh/bones y cómo prepararlo. | P3 |
| MOCAP-01 | Cancelar el análisis conserva íntegramente las siluetas anteriores y el estado del video. | P1 — automatizado en modelo/contrato |
| MOCAP-02 | Un punto sólo se completa entre dos observaciones confirmadas; nunca se extrapola fuera de ellas. | P1 — automatizado |
| MOCAP-03 | Reducir claves conserva extremos y cambios que superan la tolerancia elegida. | P1 — automatizado |
| MOCAP-04 | Aplicar una toma al rig forma una sola transacción y no cambia pivotes ni jerarquía. | P1 — automatizado |
| MOCAP-05 | Un video real con oclusiones, paneo y dos sujetos produce diagnóstico comprensible y corrección manual. | P1 — aceptación humana pendiente |
| MOCAP-06 | El filtro elimina ruido aislado, mantiene continuidad de identidad y marca ausencia del sujeto como oclusión. | P1 — automatizado |
| MOCAP-07 | Fondo elegido, validación y navegación por problemas persisten y son reversibles con Ctrl+Z. | P1 — modelo/UI automatizados |
| MOCAP-08 | Los 33 hitos MediaPipe se traducen a 13 articulaciones LOW respetando región, confianza y lados. | P0 — automatizado |
| MOCAP-09 | Reanalizar reemplaza detecciones automáticas pero conserva cuadros corregidos manualmente. | P0 — automatizado |
| MOCAP-10 | Pose Landmarker ejecuta inferencia en un worker local y el hilo visual conserva un fallback seguro. | P1 — E2E Chromium |

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
