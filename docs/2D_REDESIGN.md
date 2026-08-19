# Reenfoque del módulo 2D de LOW

Estado: **en curso**. Referencia estructural: OpenToonz 1.7.
Este documento es el plan de trabajo; se actualiza a medida que avanzan las fases.

---

## 1. Auditoría de lo que hay hoy (agosto 2026)

Medido, no estimado:

| | |
|---|---|
| `ui/app.js` | **9.526 líneas** — acá vive TODO el módulo 2D |
| `ui/animation/*`, `ui/drawing/*`, `ui/workspace/*` | **371 líneas** repartidas en 15 archivos |

Los módulos existen como **fachada**: `scene-model.js` (66 líneas) tiene 0 menciones en `app.js`;
`layouts.js`, `stroke-engine.js`, `stabilization.js` y `pointer-input.js` también 0. La lógica real
no está ahí.

### El problema de fondo: no hay modelo de datos

```js
DZ.anim = { frames: [rutas de archivo], idx, playing, onion, cache }
```

Un "frame" es **un archivo .svg en disco**. De ahí se desprende todo lo demás:

- **No existe Drawing.** No hay una entidad dibujo separada del frame.
- **No existe Exposure.** Un dibujo no puede ocupar varios frames: cada frame es otro archivo.
- **No hay holds** — ni 2s, ni 3s, ni extender exposición. Es estructuralmente imposible.
- **El Onion Skin mira `idx ± n`**, o sea frames vecinos. Con un hold mostraría el mismo dibujo
  repetido. Por eso el papel cebolla actual no sirve: no es un bug, es el modelo.
- Todo se opera **directo sobre el DOM del SVG**, sin capa intermedia. Por eso cada arreglo toca
  el DOM y rompe otra cosa.

### Qué se conserva

- El **motor de trazo** y el manejo de puntero/presión (funciona y tiene estabilizador).
- El **sistema de paneles separables** a otra ventana (v3.29.22–28), que ya sirve para dos monitores.
- El **módulo 3D completo**: no se toca. La integración es posterior.
- La idea de `scene-model.js`/`exposures.js` (Level → exposures → drawingId) es **conceptualmente
  correcta**: se completa y se pone a gobernar de verdad, no se tira.

### Qué se reemplaza

- `DZ.anim.frames` como lista de archivos → modelo Scene/Level/Drawing/Exposure.
- El Onion Skin actual → uno que trabaja sobre **drawings**, no sobre índices de frame.
- La timeline actual → Xsheet/Timeline con celdas, exposiciones y holds.
- El layout fijo → **Workspaces** con definición serializable.

---

## 2. Cómo lo resuelve OpenToonz (lo que importa copiar)

Investigado en la documentación oficial 1.7.1.

**Xsheet.** Columnas = capas, filas = frames, celdas = contenido de esa capa en ese frame.
Varias celdas pueden referirse **al mismo dibujo sin duplicarlo**. Un hold es la misma referencia
repetida en celdas consecutivas. Si el dibujo referido no existe, la celda se muestra en rojo.

**Operaciones de celda** (las que definen el oficio): Increase/Decrease Step, Step 2/3/4,
Each 2/3/4, Reframe, Repeat, Reverse, Swing, Random, Autoexpose, Reset Step, Insert, Delete,
Cut/Copy/Paste, Roll Up/Down, Time Stretch, Replace Level. Más el **Fill Handle**: arrastrar la
manija extiende la secuencia con criterio (repite un dibujo, continúa una progresión 1,3,5 → 7,9,11,
y borra si se arrastra hacia atrás).

**Sustitución de dibujo:** se escribe el número del dibujo directamente en la celda.

**Navegación:** flechas mueven por frames; **Shift+↑/↓ salta al dibujo anterior/siguiente
salteando los holds**. Ese detalle es el que hace usable una xsheet.

**Onion Skin:** marcadores romboidales a la izquierda de la columna de frames. Dos modos:
**relativo** (respecto del frame actual) y **fijo** (frames marcados, independientes del actual).
Color configurable para anteriores y posteriores, y *Paper Thickness* para la transparencia.
Aplicado desde el Level Strip trabaja sobre la secuencia del nivel; desde la Xsheet, sobre lo
expuesto en escena.

**Rooms:** pestañas a la derecha de la barra de menú. Cambiar de room **no toca la escena**, solo el
layout. Se renombran con doble clic, se reordenan arrastrando, los paneles se acoplan arrastrando su
barra de título, y hay *Lock Room Panes* y *Reset to Default Rooms*.

Paneles disponibles: Viewer, ComboViewer, Xsheet, Timeline, Level Strip, Palette, Style Editor,
Studio Palette, Color Model, Tool Options Bar, Toolbar, Command Bar, Function Editor, Schematic,
Flipbook, File Browser, Scene Cast, Cleanup Settings, History, Message Center, Tasks, Batch Servers.

---

## 3. Arquitectura objetivo

### Entidades (Fase 1)

```
Scene
 ├── fps, rango de reproducción, cámara, audio
 ├── Level[]                    "el material dibujado"
 │    ├── id, nombre, tipo (vector|raster), paleta
 │    └── Drawing[]             numerados: 1, 2, 3… (renumerables)
 │         └── contenido (SVG), pivote, metadatos
 └── Layer[]                    "la columna de la xsheet"
      ├── id, nombre, visible, bloqueada, opacidad, Z
      └── Cell[frame] → { levelId, drawingNumber } | vacía
```

Reglas que se derivan y que el código debe respetar:

1. **Drawing ≠ Frame.** El dibujo vive en el Level; el frame solo lo *referencia*.
2. Un mismo `drawingNumber` en celdas consecutivas **es** un hold. No se duplica nada.
3. Borrar una celda **no borra el dibujo**. Borrar el dibujo es otra operación, explícita.
4. Mover exposiciones reordena referencias, nunca contenido.
5. El Onion Skin recorre **celdas distintas hacia atrás/adelante**, salteando holds.

### Capas de código

```
ui/animation/scene-model.js    entidades + invariantes (sin DOM)
ui/animation/exposures.js      operaciones de celda (step, each, reframe, repeat…)
ui/animation/onion.js          cálculo de qué drawings mostrar (sin DOM)
ui/workspace/workspaces.js     definición de layouts como DATOS + persistencia
ui/app.js                      solo vista y eventos; deja de ser el dueño del estado
```

El modelo **no toca el DOM**. Eso permite probarlo de verdad y es lo que hoy no existe.

### Workspaces (Fase 2)

Definición serializable, nunca layout hardcodeado en la UI:

```js
{ name: "Animation",
  panels: [
    { id: "viewer",   dock: "center" },
    { id: "tools",    dock: "left",   size: 56 },
    { id: "options",  dock: "top",    size: 34 },
    { id: "xsheet",   dock: "bottom", size: 320 },
    { id: "palette",  dock: "right",  size: 240, hidden: true }
  ] }
```

Workspaces iniciales: **Drawing · Animation · Cleanup · Ink & Paint · Compositing · Camera · 3D**.
Cambiar de workspace cambia **solo** layout/paneles/barras/contexto. La escena, los documentos
abiertos y el estado del proyecto quedan intactos. Se guardan fuera del archivo de escena.

---

## 4. Fases y criterio de terminado

Una fase termina cuando se puede hacer el flujo real, no cuando compila.

| Fase | Contenido | Estado |
|---|---|---|
| 1 | Modelo: Scene/Level/Drawing/Cell/Exposure + operaciones de celda | ✅ hecho |
| 2 | Workspaces genéricos + los 7 layouts | ✅ base hecha |
| 3 | Xsheet/Timeline sobre el modelo (holds, steps, rangos) | ◐ planilla y navegación hechas |
| 4 | El dibujo entra al modelo solo + escena en un archivo | ✅ hecho |
| 5 | Onion Skin sobre drawings | ✅ hecho |
| 6 | Workflow: copiar/pegar, insertar, atajos, navegación | ✅ hecho (falta renumerar) |
| 7 | Playback: FPS real, rango, loop | ◐ falta audio y scrubbing |
| 8 | Paletas y estilos, pegbars, function editor, schematic | pendiente |
| 9 | Integración con el módulo 3D | pendiente |

### Lo que ya está (v3.29.29)

**Fase 1 — modelo.** `ui/animation/scene-model.js` (Scene · Level · Drawing · Layer · Cell),
`exposures.js` (step, each, stepChange, insert, clear, remove, move, repeat, reverse, swing,
resetStep, dedupe, autoexpose, fillHandle, nextDrawingFrame, keyFrames) y `onion.js` (relativo +
fijo, sobre dibujos). Ninguno toca el DOM.

**Pruebas: 27/27**, con `LOW.animation.runTests()` — incluye el test de aceptación completo
(poses en 1/5/9/13 → autoexpose → intercalar → 2s → extender hold → borrar exposición → guardar →
reabrir → seguir). Verifican, entre otras cosas, que borrar una exposición **no** borra el dibujo
y que el onion skin **no** repite el dibujo de un hold.

Una prueba falló al escribirla y era de criterio, no de código: al navegar hacia atrás entre
dibujos, aterrizar en el último frame del hold anterior deja el cursor en el medio del bloque.
Ahora siempre se cae en el **primer** frame de la exposición.

**Fase 2 — workspaces.** `ui/workspace/workspaces.js`: catálogo de paneles + 7 presets como datos
(Dibujo · Animación · Limpieza · Color · Composición · Cámara · 3D), guardado, duplicado y reset.
Pestañas siempre visibles a la derecha de la barra de menú. Verificado: cambiar de workspace
reorganiza los paneles y **la escena queda intacta** (mismo SVG, mismo contenido, mismo archivo).

**Detalle de infraestructura:** los scripts de `ui/` se sellan con la versión
(`tools/stamp_version.py`, correr en cada bump). Sin eso el WebView puede seguir ejecutando el
`app.js` anterior tras actualizar, y el arreglo "no aparece".

**Fase 3 — planilla y navegación (v3.29.30).** `document.js` (LowDoc: dueño de la escena, del
frame y del dibujo actual, con migración desde la animación vieja) y `xsheet-view.js` (la planilla:
columnas por capa, holds dibujados como línea de continuación, número editable en la celda, manija
para estirar la exposición y las operaciones de timing a un clic).

Verificado en pantalla, no solo en tests: dibujar en el frame 1, ir al 5, dibujar otra pose, volver
— cada dibujo queda donde debe y **no se duplica nada** (2 dibujos, 5 celdas). Parado dentro de un
hold, el papel cebolla **no repite el dibujo sostenido** y muestra el siguiente distinto.

Al probar la planilla en pantalla apareció un bug que los tests no cazaban: las operaciones que
ACORTAN la secuencia (1s sobre un 2s, `each`, `dedupe`) dejaban las celdas viejas del final
colgando — dibujos fantasma al final de la escena. Corregido con `replace()` y con tres pruebas
nuevas (**30/30**).

**Fases 5, 6 y 7 (v3.29.33).**

*Papel cebolla:* panel nuevo, sobre dibujos, con puntos de un clic para cuántos ver de cada
lado, color por lado, desvanecido por distancia y marcadores fijos. Se saca a otra ventana.

*Atajos* (`shortcuts.js`), los que se usan sin mirar el teclado: `←/→` frame, **`↑/↓` DIBUJO —
saltea los holds**, `Inicio/Fin`, `Espacio` reproducir, `L` loop, `.`/`,` alargar y acortar la
exposición, `Insert`, `Supr` (vacía la celda, no toca el dibujo), `O` papel cebolla,
`Ctrl+C/X/V` sobre celdas. Copiar celdas copia REFERENCIAS: pegar no duplica dibujos —
verificado, 3 dibujos antes y después de pegar.

*Playback* (`playback.js`): reproduce sobre el modelo, sin precargar archivos. El frame se
calcula por RELOJ REAL, así que si la máquina no llega saltea frames en vez de ir en cámara
lenta. Medido: 12 frames en 1 s a 12 fps, loop correcto, y sin loop se detiene al final.
No usa `requestAnimationFrame`: despierta 60 veces por segundo para nada a 12 fps, y se PAUSA
con la ventana oculta — con la timeline en el otro monitor la reproducción se congelaba.

*X-sheet:* transporte propio (reproducir, dibujo anterior/siguiente, primero/último, loop, FPS,
rango, y el fps real medido mientras corre) y selección de rango con Shift+clic, que es sobre lo
que actúan las operaciones de timing.

**Fase 4 (v3.29.34).** Toda edición del lienzo entra al dibujo del modelo sola, por
`dzMarkDirty` con 260 ms de retardo: antes solo se volcaba al cambiar de frame, así que dibujar
y guardar sin moverse perdía ese trazo.

La escena entera —niveles, dibujos, capas, exposiciones, fps, rango— va a **un** archivo
`.lowscene` (Animación → Guardar escena, `Ctrl+Shift+S`), con autoguardado local cada 8 s y
recuperación al abrir si LOW se cerró mal.

Test de aceptación corrido de punta a punta en la app: dibujar tres poses → autoexpose (holds de
4) → guardar → descartar todo de memoria (cerrar) → reabrir del archivo → **3 dibujos, mismo
timing, mismo fps, mismo rango, contenido intacto** → navegar y seguir dibujando encima sin crear
dibujos de más. Y como prueba automática: **37/37**.

**Timeline nueva (v3.29.35).** `timeline-view.js`: una fila por capa, el tiempo hacia la derecha,
regla de frames, ojo de visibilidad y arrastre de bloques de exposición. Es la otra lectura del
MISMO documento — lo que cambiás en la planilla aparece acá al instante, sin sincronizar nada a
mano. Verificado: 3 exposiciones y 6 holds en la timeline y los mismos 3 números en la X-sheet,
las dos marcando el frame actual.

### Lo que sigue

Retirar `DZ.anim.frames` y la timeline vieja, que todavía conviven con lo nuevo (la timeline de
abajo sigue siendo la anterior; la planilla nueva es la de la X-sheet). Después: renumerar
dibujos, audio y scrubbing, paletas y estilos.

### Test de aceptación (el que define si esto sirve)

Escena a 24 fps → crear un nivel → dibujar poses en 1, 5, 9, 13 → exponerlas → onion skin →
intercalar → cambiar el timing → pasar a 2s → extender un hold → mover una exposición →
borrar una exposición **sin perder el dibujo** → reproducir → guardar → cerrar LOW → reabrir →
seguir trabajando donde se dejó.

Mientras alguna de esas operaciones falle o sea incoherente, la fase no está terminada.

---

## 5. Fuentes

- [Interface Overview — OpenToonz 1.7.1](https://opentoonz.readthedocs.io/en/latest/interface_overview.html)
- [Working in Xsheet/Timeline — OpenToonz 1.7.1](https://opentoonz.readthedocs.io/en/latest/working_in_xsheet.html)
- [Drawing Animation Levels — OpenToonz 1.7.1](https://opentoonz.readthedocs.io/en/latest/drawing_animation_levels.html)
- [Rooms — OpenToonz Wikia](https://opentoonz.fandom.com/wiki/Rooms)
