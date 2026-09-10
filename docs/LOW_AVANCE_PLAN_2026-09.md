# Avance del plan maestro

## Primera entrega — guía de corte y articulación

Base: v4.31.0 (`c0daa4f`). Plan: `LOW_PLAN_MAESTRO_2026-09.md`.

| Tarea | Estado y evidencia |
|---|---|
| A01 inventario | Iniciado: controles y acciones existentes en document.js; transporte colaborativo presente; jaula de deformación libre incorporada por Claude en v4.31. No se consideran funciones ausentes. Falta la matriz completa de recorridos. |
| A04 3D | Publicado en v4.31 según bus y commit de release; bundle integrado y verificado previamente. Pendiente comprobar el instalador descargado. |
| B02 preparación | Implementada guía visual que sigue el puntero: línea de corte extendida y cadena provisional de articulación. Escape retira la guía sin modificar dibujo/historial. Se conserva la comprobación de cambio de documento/cuadro. |

Prueba: `node tools/check_flexible_limb_ui.js`. Pasan codo, rodilla, deformación visible, pesos, persistencia, corte, Undo/Redo, vista previa sin mutación y cancelación. Añadido recorrido con entrada física CDP para movimiento de puntero y Escape, y viewport explícito 1366×768. La regresión deliberada que elimina el listener de movimiento hace fallar el guard; el código se restaura al finalizar.

No se cierra B02 completo: falta revisión visual por el artista y ampliar la prueba a dibujos complejos. Tampoco se declara terminada la etapa A. Siguiente incremento: hacer más claro el paso de preparar a posar y evaluar correctivos sobre el mismo personaje de prueba, sin duplicar el modelo de rig.

## Segunda entrega — de crear a posar

B01/B02: al crear la articulación aparece **Posar articulación**. Activa FK y la herramienta Posar, seleccionando el hueso inferior recién creado. Usa las funciones existentes del rig y no agrega claves ni entradas de historial. Rechaza la acción si se cambió de documento o se deshizo la creación.

La suite de articulaciones pasa con comprobaciones del modo, herramienta, selección y ausencia de historial adicional. Se verificó que eliminar la activación de Posar hace fallar la prueba. Sigue pendiente la revisión artística del recorrido y el trabajo de correctivos B05.
