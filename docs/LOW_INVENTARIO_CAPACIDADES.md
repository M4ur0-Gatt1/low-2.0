# Inventario de capacidades — A01 del plan maestro

Fecha: 2026-09-10. Base: `v4.32.0`.

A01 pide «crear matriz por capacidad: entrada en UI, modelo, persistencia, Undo,
exportación, pruebas y evidencia humana; marcar cada punto como funcional,
parcial o no verificado». Esto no se armó leyendo los documentos viejos: se armó
**midiendo el repositorio**, porque los documentos se contradicen y el código no.

## Lo que hay, contado

| qué | cuántos |
|---|---|
| Recorridos de navegador (`tools/check_*_ui.js`) | 37 |
| Suites de modelo (`tools/run_*_tests.js`) | 12 |
| Comprobaciones de puente en Python | 7 |
| Contratos estáticos (`require(...)`) | 261 |
| Filas de la matriz de regresiones | 61 |

## Los tres agujeros que encontró este inventario

Se buscó, para cada capacidad, **quién la prueba**. Tres respuestas fueron
«nadie», y las tres se cerraron acá:

### 1. Dos recorridos existían y nadie los corría

`check_color_studio_ui.js` y `check_rig_control_ui.js` estaban en el árbol y
**no** en `build.yml`. Los dos pasan. El segundo es el del editor de mandos: se
escribió en `b2bb272` y nunca se cableó, así que una regresión en los controles
sobre el personaje no la agarraba la puerta. **Cableados los dos.**

Comprobación permanente: hoy los 37 recorridos, las 12 suites y las 7
comprobaciones de puente están en `build.yml`. Si aparece uno huérfano otra vez,
se ve con:

```bash
for f in tools/check_*_ui.js; do grep -q "$(basename $f)" .github/workflows/build.yml || echo "HUERFANO: $f"; done
```

### 2. La papelera —la única acción destructiva del 2D— no tenía NINGUNA prueba

«Mover documento a la papelera…» mueve un archivo del trabajo de alguien y no
tenía guard, ni contrato, ni prueba de puente. Se escribieron dos:

- **`check_papelera_backend.py`**: prueba las cuatro promesas del puente —mueve y
  no borra, rechaza rutas de afuera del proyecto, no pisa nombres repetidos
  dentro de la papelera, y no inventa archivos que no existen—. Las tres
  primeras verificadas contra su violación: aceptar rutas de afuera, `unlink()`
  en vez de `move()`, y sacar el contador de colisiones.
- **`check_papelera_ui.js`**: prueba el flujo. La aserción que importa es que
  **cancelar no llame al puente**: si se llamara antes de la confirmación, el
  «¿estás seguro?» sería decorado. Verificado contra su violación, con el
  mensaje exacto.

### 3. La exportación a Premiere tiene modelo y no tiene recorrido

`run_premiere_xml_tests.js` cubre el XML; ningún recorrido de navegador toca
`dzExportPremiereDirecto`. Queda **parcial**: el archivo que sale está probado,
el camino desde el menú no.

### 4. La UI flotante del lienzo se comía el dibujo (encontrado en v4.34.0)

El inventario dijo que la puntería de la selección estaba cubierta, y lo estaba.
Lo que nadie probó nunca es qué pasa cuando **un overlay transparente queda
encima del dibujo**. Medido: con el encuadre de cámara a la vista y el lápiz
elegido, **ningún trazo entraba en toda la mesa** y cada intento corría el plano
de la escena; y con un trazo seleccionado, los tiradores de la caja tapaban la
línea y las herramientas vectoriales se negaban a trabajar diciendo «acercate
más a una línea» estando justo encima. Cerrado con `check_camara_encuadre_ui`,
cinco contratos y el recorrido de dibujo de Codex, que fue quien lo delató.

## Estado por capacidad

Leyenda: **funcional** = hay recorrido de navegador con entrada real y
verificado contra su violación · **parcial** = hay modelo o contrato pero no
recorrido, o el recorrido no cubre el camino completo · **sin verificar** = nadie
lo prueba.

| capacidad | UI | modelo | persistencia | Undo | pruebas | estado |
|---|---|---|---|---|---|---|
| Arranque, Nuevo/Abrir, IA y vuelta, 2D↔3D | sí | — | sí | — | `check_arranque_recorrido_ui`, `check_pantalla_inicial_ui` | **funcional** |
| Almacenamiento de preferencias y rescate | sí | — | sí | — | 4 contratos + recorrido | **funcional** (v4.32.0) |
| Papelera del proyecto | sí | — | sí | no aplica | `check_papelera_ui` + `check_papelera_backend` | **funcional** (hoy) |
| Guardar / Guardar como / recuperación | sí | sí | sí | sí | `check_save_recovery_ui`, `check_document_recovery_tabs_ui` | **funcional** |
| Documentos múltiples y pestañas | sí | sí | sí | sí | `check_document_tabs_ui` | **funcional** |
| Dibujo y pincel | sí | sí | sí | sí | `check_brush_params_ui`, `check_brush_vector_import_ui` | **funcional** |
| Formas: contorno, pincel y deformación | sí | sí | sí | sí | `check_shape_tool_ui`, `check_warp_cage_ui` | **funcional** (v4.31.0) |
| Texto en la hoja | sí | sí | sí | sí | `check_drawing_workflow_ui` | **funcional** (v4.34.0) |
| Bomba de grosor sobre los tres tipos de trazo | sí | sí | sí | sí | `check_drawing_workflow_ui` | **funcional** (v4.34.0) |
| Ayuda al pasar el puntero por la barra | sí | — | — | — | `check_drawing_workflow_ui` | **funcional** (v4.34.0) |
| Editor de esquinas e inspector de elemento | sí | sí | sí | sí | ninguna | **sin verificar** — trabajo de Codex, sin recorrido propio |
| Edición vectorial por nodos | sí | sí | sí | sí | `check_vector_nodes_ui` | **funcional** |
| Puntería de la selección y overlays | sí | — | — | — | `check_hit_test_ui`, `check_camara_encuadre_ui`, `check_drawing_workflow_ui` | **funcional** (v4.34.0) |
| Color Studio | sí | sí | sí | sí | `check_color_studio_ui` | **funcional** (recién cableado) |
| Coloreo | sí | sí | sí | sí | `check_coloring_ui` | **funcional** |
| Papel cebolla | sí | sí | sí | — | `check_version_onion_ui` | **funcional** |
| X-sheet y columnas de §6 | sí | sí | sí | sí | `check_xsheet_columnas_ui`, `check_function_editor_ui` | **funcional** |
| Copiar y pegar entre cuadros | sí | sí | sí | sí | `check_copy_paste_ui` | **funcional** |
| Arcos y espaciado | sí | sí | — | — | `check_arcs_ui` | **funcional** |
| Esqueleto, IK/FK y pesos | sí | sí | sí | sí | `check_rig_skeleton_ui`, `check_rig_ik_ui`, `check_rig_weights_ui` | **funcional** |
| Miembro flexible y correctivos | sí | sí | sí | sí | `check_flexible_limb_ui`, `check_smart_bones_ui` | **funcional** |
| Mandos sobre el personaje (C02) | sí | sí | sí | sí | `check_rig_control_ui` | **funcional** (v4.32.0) |
| Composición y multiplano | sí | sí | sí | sí | `check_multiplane_ui`, `check_composition_ui`, `check_composition_z_ui` | **funcional** |
| Storyboard | sí | sí | sí | — | `check_storyboard_ui` | **funcional** |
| Lip-sync por amplitud | sí | sí | sí | — | `check_lipsync_ui` | **funcional** |
| Trabajo en equipo (relé) | sí | sí | — | — | `check_colab_ui` + `check_relay_server` | **funcional** |
| Estudio 3D | sí | — | sí | sí | `check_3d_studio_ui` | **funcional** |
| Modo seguro | sí | sí | sí | — | `check_safe_mode_ui` + puente | **funcional** |
| Espacios de trabajo y Timeline | sí | sí | sí | — | `check_workspace_ui` | **funcional** |
| Instrumento de la prueba §15 | sí | — | sí | — | `check_prueba15_ui` | **funcional** |
| Exportación a Premiere (XML) | sí | sí | — | — | `run_premiere_xml_tests` (modelo) | **parcial**: falta recorrido |
| Exportación de animación (MP4/PNG) | sí | — | — | — | ninguna | **sin verificar** |
| Motion capture | sí | sí | sí | sí | modelo y contratos; recorrido parcial | **parcial** — ver MOCAP-05 |
| Biblioteca de personajes y poses | — | parcial | — | — | ninguna | **sin verificar** — es D02 |

## Lo que este inventario NO dice

- **No dice que lo «funcional» esté terminado.** Dice que hay una prueba con
  entrada real que falla si se rompe. Producción es otra cosa: casi ninguna de
  estas capacidades se usó todavía en una escena larga de verdad, y eso es lo que
  frena las notas del balance.
- **No mide descubribilidad.** Ninguna prueba dice si una función se entiende sin
  explicación. El único probador humano de LOW es Mauro, que conoce el producto:
  para eso hace falta alguien que lo vea por primera vez, y eso sigue pendiente.
- **La exportación de animación (MP4/PNG) no tiene ninguna prueba.** Es el
  siguiente agujero a cerrar de esta lista, y es de los que se notan: si falla,
  falla al final del trabajo.
