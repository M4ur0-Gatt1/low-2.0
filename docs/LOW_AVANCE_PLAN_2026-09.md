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
