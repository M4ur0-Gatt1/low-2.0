# Handoff activo — Codex ↔ Claude

**Proyecto:** LOW 2.0  
**Fecha:** 2026-09-04  
**Objetivo común:** llevar LOW a calidad profesional sin duplicar estado, funciones ni arquitecturas.

## Reglas de coordinación

1. `Scene` / `LowDoc` son la fuente canónica del documento; el DOM es vista/adaptador.
2. El módulo 3D estilo Feather permanece independiente y sirve para producir fondos/escenarios. No se usa como compositor 2D.
3. La mesa multiplano pertenece al workspace **Composición** y opera sobre Levels/elementos 2D, cámara, Z, parallax y foco.
4. No sobrescribir cambios concurrentes. Antes de editar `ui/app.js`, `ui/app.css`, `ui/index.html`, `scene-model.js` o `document.js`, revisar el diff actual.
5. Una intención del artista equivale a una entrada de Undo. Los previews no se guardan ni se transmiten como operaciones definitivas.
6. No declarar terminado sin prueba automática, prueba de interacción y guardado/reapertura.

## Bloque de Codex — Composición, pinceles y colaboración

### Implementado

- `ui/composition/multiplane-model.js`
  - Normalización XYZ/rotación/escala.
  - Snapping espacial, Z, angular y de escala.
  - Lente/FOV, proyección, parallax y aproximación de profundidad de campo.
  - Contrato `composition.plane.transform`.
- `ui/composition/controller.js`
  - Begin/preview/commit/cancel de un gesto.
  - Auto-key por frame.
  - Emisión de una operación colaborativa al confirmar.
- `Scene.composition`
  - Planos, source, transform base, claves, cámara y settings persistentes.
  - Interpolación por frame y borrado de claves.
- `LowDoc.setCompositionTransform`
  - Mutación transaccional, Undo/Redo y eventos `composition`/`frame`.
- Workspace **Composición**
  - Abre el viewport dedicado `#dzComposition3D`; `#dzZPanel` queda como compatibilidad.
  - Outliner, Perspectiva/Frente/Arriba, grid, órbita/pan/zoom, inspector XYZ/rotación/escala, gizmos XY/Z/R/S y Auto-key persistente.
  - Atajos de viewport `G`, `G Z`, `R`, `S`, `Esc`, numpad `1/7/5`.
  - Migración progresiva desde `data-z`; `Scene` decide y el atributo queda como adaptador para render/export legacy.
  - El adaptador de cámara aplica X/Y/Z, rotación Z y escala del modelo canónico en preview/export.
- Pinceles
  - `ui/drawing/brush-engine-pro.js`: dinámica de presión, tilt, velocidad, spacing, scatter, vector outline y raster dabs deterministas.
- Colaboración
  - `ui/collaboration/session.js`: roles, presencia, locks, Lamport, idempotencia y cola offline.
- Diseño
  - `ui/design/studio-polish.css`: foco visible, estados, touch targets y reduced motion.

### Pruebas actuales

```text
node tools/run_multiplane_tests.js              14/14
node tools/run_drawing_collaboration_tests.js    8/8
node tools/run_2d_model_tests.js               312/312
node tools/check_multiplane_ui.js              OK
python tools/check_multiplane_backend.py       OK
node tools/check_workspace_ui.js               OK
```

### Pendiente de Codex

- Snapping configurable y restricciones X/Y individuales durante `G`.
- Resolver migración final para retirar `data-z` como estado persistente duplicado.
- Presencia visual y transporte WebSocket reales.
- Smoke manual del ejecutable empaquetado; el puente Python real ya cubre escritura atómica de `.lowscene`, reapertura JSON y secuencia PNG en disco temporal.

## Bloque concurrente de Claude detectado

El árbol contiene cambios activos en Timeline, rigging, panel docking y pruebas. Codex no asume su estado final ni los reescribe. Claude debe completar aquí, antes de release:

**HECHO**

1. *Timeline y menú Ventana* — el trabajo en vuelo que había en el árbol tenía las 284
   pruebas de modelo en verde pero tres defectos que ninguna cubría, reproducidos con
   eventos reales antes de tocar nada:
   - el menú **Ventana** abría vacío (`dzWindowMenuRender` sólo corría desde `dzWsAplicar`,
     y `dzWsInit()` vive dentro de `openDesign()`);
   - la tilde **mentía**: encender un panel por su propio botón no la actualizaba;
   - cerrar «Línea de tiempo» ocultaba `#dzTimeline` pero dejaba `#dzTlGrid` en pantalla.
   Arreglo de raíz: la lista se dibuja **al abrir el menú**, y el panel Timeline trata sus
   dos superficies como una sola.
2. *IK/FK match y pole real (bloque cut-out de la Biblia)* — el `bend` era un flag binario:
   pasar de FK a IK daba vuelta el codo y no había forma de animar hacia dónde dobla la
   rodilla. Ahora hay **pole animable** (keyable, interpolado, manda sobre `bend`, con
   fallback estable si cae sobre la recta raíz→objetivo), **match IK→FK** («Emparejar IK»)
   y **match FK←IK** («Pasar a FK», hornea la pose incluso en un cuadro interpolado).
   En la mesa: manija de pole arrastrable para la cadena activa, con pole **sugerido**
   (punteado) del lado por el que ya dobla — aceptarlo no mueve nada.
3. *Pins de apoyo* — `pinned` sólo significaba «raíz». Ahora una cadena puede **clavar su
   extremo** (`pinKeys`, estado sostenido, no interpolado): mover la cadera deja de
   arrastrar el pie. La corrección se aplica dentro de `_rigChange`, así que entra en la
   **misma entrada de Undo** que el gesto que la disparó. Clavar no mueve nada (hace match
   primero); soltar también deja su cuadro.
4. *Timeline compactable a lo ANCHO* (pedido de Mauro). La columna de nombres era el
   único costo horizontal fijo: 128 px en **todas** las filas, sticky, siempre en pantalla.
   Ahora un botón la reduce a 34 px —quedan pliegue, ojo y candado; el nombre pasa al
   tooltip— y devuelve ~94 px por fila para tiempo. La escala del tiempo **no se toca**:
   eso lo sigue mandando el zoom. `fitFrameWidth` y el ancla del zoom ya no asumen 128 px
   fijos, así que «Encajar» calcula contra el encabezado real. Es estado de vista:
   persiste, no ensucia el documento y no entra en Undo.
5. *Sellado de versión del CSS* — `stamp_version.py` sólo sellaba `<script>`. Reproducido:
   con VERSION 4.9.9 sella 47 scripts y deja `app.css?v=dev1787259000` y
   `studio-polish.css?v=4.0.2` intactos ⇒ **tras actualizar, el usuario corre el JS nuevo
   con el CSS de la versión anterior**. Corregido: ahora sella también las hojas propias,
   respeta `vendor/` y URLs externas, y es idempotente (49 sellos).

**CAMBIADO**

| Archivo | Qué |
|---|---|
| `ui/animation/scene-model.js` | `rigPointAt`, `rigPoleAt`, `rigPinnedAt`, `rigPinnedConstraints`, `rigMatchIK`; pole en `rigSolveIK` (+ `poleOverride` para previsualizar el arrastre) |
| `ui/animation/document.js` | `setRigIKPole`, `matchRigIK`, `matchRigFK`, `setRigPin`, `_writeRigPoses`, `_enforceRigPins`; `_rigChange(label, mutate, options)` con `frame`/`skipPin` |
| `ui/rigging/rig-input.js` | `suggestedPole` (pura) |
| `ui/app.js` | 2 hunks de menú Ventana + Timeline; manija y arrastre de pole; `dzRigMatchIK`, `dzRigMatchFK`, `dzRigTogglePin`; estado del apoyo en el panel |
| `ui/index.html` | botones `#rigIkMatch`, `#rigIkToFk`, `#rigIkPin` en la sección IK |
| `ui/app.css` | `.dz-rig-pole`, `.dz-rig-pole-line`, `.dz-rig-target.clavado`, `.dz-panel-menu`; `.tl2-name` pasa a `var(--tl-name-w)` y estilos de `[data-compact="1"]` |
| `ui/animation/timeline.js` | `compact` en el estado de vista, `NAME_WIDTHS` y `nameWidth()` |
| `ui/animation/timeline-view.js` | botón «Compactar la columna de pistas», var `--tl-name-w`, `title` de pista, y `fit`/zoom miden el encabezado real |
| `ui/animation/model-tests.js` | pruebas 37 (match), 38 (pole), 39 (pins) y 40 (compactar a lo ancho) — **agregadas debajo de las 35–36 de Codex, sin tocarlas** |
| `tools/stamp_version.py` | sella también las hojas de estilo |
| `tools/check_workspace_ui.js` | **nuevo** — menú Ventana + vista de Timeline |
| `tools/check_rig_ik_ui.js` | **nuevo** — match, pole, apoyo clavado y paso a FK |

**PROBADO**

```text
node tools/run_2d_model_tests.js        312/312   (28 aserciones nuevas)
python tools/check_2d_interaction_contracts.py    OK
node tools/check_workspace_ui.js        OK
node tools/check_rig_ik_ui.js           OK   ← cubre la puerta «E2E rigging concurrente»
node tools/check_rig_skeleton_ui.js     OK
node tools/check_coloring_ui.js         OK
```

Cada prueba nueva se verificó **discriminante**, no sólo verde: rompiendo a propósito la
corrección de lado del match, el pole del solver, la aplicación de pins, el ancho variable
de la columna de pistas y el cableado del botón «Emparejar», las pruebas correspondientes
fallan y ninguna otra. Todo restaurado.

**PROBLEMAS**

- **Arnés E2E — cuatro trampas que hacen que la prueba mienta o se cuelgue.** Ya están
  resueltas en **los cinco** `check_*_ui.js`: además de los dos scripts nuevos, endurecí
  `check_coloring_ui.js` y `check_rig_skeleton_ui.js` (pestaña propia que se cierra al
  terminar, caché desactivada y diálogos atendidos). Lo detecté porque `check_coloring_ui`
  se colgó con «CDP sin respuesta»: se enganchaba a *la primera pestaña* —que era la del
  panel del navegador, con una escena abierta— y el `confirm()` de recuperación congelaba
  el renderer. No estaba roto el coloreo: estaba roto el arnés. Las trampas:
  1. `index.html` pide `app.js?v=<versión>`: sin `Network.setCacheDisabled` antes de
     navegar, Chromium sirve el archivo anterior y la prueba certifica código que ya no
     existe (me costó una hora: los arreglos «no funcionaban» y no se estaban ejecutando).
  2. El `confirm()` de recuperación de escena **congela el renderer**: `Page.enable` y
     `Runtime.evaluate` dan timeout y parece que la app se colgó. Hay que atender
     `Page.javascriptDialogOpening`.
  3. `localStorage` contamina entre corridas (`low.timeline.view.v1`, `low.timeline.height`).
  4. Esperar por reloj tras `Page.navigate` hace la prueba **intermitente**: con la máquina
     cargada (dos sesiones de agente + Chromium) el sleep fijo se queda corto, la app
     todavía no expuso `openDesign`/`dzDocInit` y la prueba falla por lentitud, no por una
     regresión. Lo vi fallar una vez y no reproducirse. Ahora ambos scripts **esperan por
     condición** (hasta 15 s) en vez de por 2400 ms; 6 corridas seguidas en verde.
  Además: el host de la Timeline es `#dzTlgRows`, no `#dzTimeline` (ése es sólo el
  transporte); y dos `mousedown` seguidos sobre el mismo menú lo **cierran**.
- **Árbol limpio (puerta de release).** Faltan dos cosas que no toqué para no pisar:
  `.gitignore` está envuelto en backticks de markdown (` ``` ` como primera y última línea)
  y hay ~20 carpetas `.e2e-*` en la raíz sin ignorar — son perfiles de Chromium de corridas
  anteriores, no artefactos del proyecto.
- **`model-tests.js` es el único punto real de colisión**: 35–36 son de Codex, 37–39 mías,
  todas antes de `const fallan`. Reescribir el archivo entero pierde uno de los dos bloques.
- El catálogo de paneles pasó de 11 a 12 entradas con el panel multiplano de Codex; el E2E
  de workspace no fija el número, así que lo tolera.

**SIGUIENTE**

- Del bloque cut-out queda **sustituciones visibles** (el panel `#rigVars` ya existe y
  funciona; lo que falta es **verlas en la Timeline**: hoy no hay ninguna marca de clave de
  sustitución) y **Schematic básico**. La pista de sustituciones y la de claves de
  profundidad de Codex son la misma zona de `timeline-view.js`: conviene que las haga una
  sola de las dos sesiones para no duplicar la fila.

**COMMIT/REVISIÓN**

Sin commitear por pedido de Mauro (sesiones en paralelo sobre el mismo árbol). Los cambios
están en el working tree, acotados a los archivos de la tabla. Al integrar, el bump de
versión son **cuatro** pasos, no tres: `VERSION`, `LOW_VERSION` en `main.py`, `AppVersion`
en `low_installer.iss` y después `python tools/stamp_version.py` (que ahora sí sella el CSS).

## Archivos compartidos de alto riesgo

| Archivo | Codex | Claude | Regla |
|---|---|---|---|
| `ui/app.js` | Adaptador UI multiplano | Integraciones 2D/rig/timeline | Revisar hunks; no reemplazar archivo completo. |
| `ui/index.html` | Carga de módulos + controles Z | Paneles/timeline | Mantener orden de scripts y nuevos IDs. |
| `ui/animation/scene-model.js` | `Scene.composition` | Rig/canales | Fusionar por dominios; conservar ambos campos. |
| `ui/animation/document.js` | comando de composición | comandos de rig/timing | Una única HistoryManager. |
| `ui/workspace/workspaces.js` | panel multiplano | docking/presets | Conservar catálogo enriquecido. |
| `ui/app.css` | Sin cambios de Codex para multiplano | Cambios activos de Claude | Codex usa `studio-polish.css` para evitar conflicto. |

## Puerta conjunta de release

No publicar mientras cualquiera sea falso:

- [x] Claude completa su bloque y confirma archivos. *(commit pendiente: Mauro decide cuándo)*
- [x] Modelo 2D automático aprobado. *(312/312)*
- [x] Workspace E2E aprobado.
- [x] E2E multiplano de viewport, Z, Auto-key, Undo/Redo y reapertura del modelo aprobado.
- [x] E2E multiplano del payload de guardado/reapertura y SVG exportado por frame aprobado.
- [x] Smoke multiplano contra el puente Python, `.lowscene` y PNG reales aprobado.
- [x] E2E rigging concurrente aprobado. *(`tools/check_rig_ik_ui.js`)*
- [x] Árbol limpio sin artefactos de build/E2E accidentales. *(hecho por Claude: `.gitignore` estaba envuelto en backticks de markdown — git leía ` ``` ` como patrón — y no cubría `build-*/`, `.e2e-*/` ni `.low/`. Untracked bajó de 35 a 16, y los 16 son fuente/docs reales del bloque. **Sin borrar nada**: las carpetas siguen en disco, `rm -rf .e2e-* build-release-* build-rig-* build-check build-verified` las limpia cuando Mauro quiera.)*
  - Quedan dos archivos sueltos que no son de ninguno de los dos bloques y **nadie borró**: `_run_model_tests.js` (harness temporal, duplica `tools/run_2d_model_tests.js`) y `package-lock.json` (sin `package.json`, `packages: {}`).
  - Preexistente, no lo tocamos: los `.pyc` de `__pycache__/` están **rastreados** aunque `.gitignore` los excluye (`git rm -r --cached __pycache__` lo resuelve, pero cambia el índice).
- [ ] Versión fuente, ejecutable, instalador y notas coinciden. *(el bump son 4 pasos: VERSION, main.py, .iss y `stamp_version.py`)*
- [ ] Smoke manual del ejecutable empaquetado aprobado.
- [ ] Sin P0/P1 conocidos.

## Estado de release

**NO PUBLICAR todavía.** El bloque merece una build interna cuando terminen los E2E de multiplano y rigging. Un release público sólo después de integrar el trabajo de Claude, limpiar artefactos, probar el ejecutable y actualizar versión/notas.
