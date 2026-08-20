# Memoria persistente del proyecto LOW

Última actualización: 2026-08-20.

## Reglas de trabajo acordadas

- Base histórica obligatoria del bloque 2D: `v3.29.37`, commit `9c00773`.
- Trabajar sobre la arquitectura existente. No crear variantes paralelas como
  `timeline-new.js`, `xsheet-new.js`, `animation-v2.js`, `opentoonz-mode.js` o
  `new-scene-model.js`.
- `LowDoc` y su `Scene` son el estado canónico: Level contiene Drawings y las
  Layers/Columns contienen Cells/Exposures. Timeline, XSheet y Level Strip son
  vistas del mismo documento.
- OpenToonz es referencia de comportamiento y profundidad profesional, no una
  fuente de código para copiar literalmente.
- No presentar controles decorativos, previews o paneles desconectados como
  funciones terminadas. Cada función debe modificar estado real, guardar,
  participar de Undo y tener una prueba de aceptación.
- Conservar los cambios concurrentes realizados por Claude. Al preparar el
  siguiente commit, revisar e incluir también su trabajo terminado; no
  sobrescribirlo ni dejar artefactos de compilación a medias. El mensaje y el
  informe del commit deben distinguir los cambios 2D de los de Claude.
- No tocar 3D desde el trabajo 2D salvo dependencia estricta. La instrucción de
  incluir el trabajo de Claude autoriza integrarlo en el commit después de
  validarlo, pero no autoriza modificarlo arbitrariamente.
- Antes de declarar un bloque terminado: pruebas automáticas, prueba manual del
  flujo, commit lógico y reporte `HECHO / CAMBIADO / PROBADO / PROBLEMAS /
  SIGUIENTE`.

## Prioridad activa

Completar sobre el rig cut-out rígido ya canónico: controles IK persistentes,
editor de curvas, Schematic y deformación flexible. No llamar “rig completo” a
un registro automático de formas: el armado profesional separa piezas/arte,
esqueleto o pegs, binding y controles de animación. La decisión está registrada en
`docs/ADR_2D_CUTOUT_RIG.md` y el estado en `docs/2D_REDESIGN.md`.

## Últimos bloques 2D confirmados

- Rangos rectangulares multi-columna, copy/cut/paste y Undo en XSheet.
- Selección múltiple y drag Level Strip → XSheet.
- Papel cebolla visible y conectado al documento.
- Docks y paneles apilados redimensionables con persistencia.
- Herramientas vectoriales Pump/Pinch/Plancha configurables.
- Mesa de dibujo editable en una ventana nativa para segundo monitor.
- Paneles desacoplados con foto inicial validada: Dibujos del nivel conserva previews SVG,
  selección y exposición; la mesa separada no hereda el zoom/paneo CSS de la ventana principal.
- Rig cut-out rígido canónico: piezas y pivotes, jerarquía matricial real, FK,
  IK de dos huesos, raíz fijada, límites, claves globales, Undo/Redo,
  guardado/reapertura, pista en Timeline y panel/mesa separables con controles
  de esqueleto para dos monitores.
- Corrección de armado: `Registrar piezas` ya no inventa el torso por área ni
  cuelga todo de una raíz falsa. Las piezas nacen sin padre; en la mesa el
  círculo mueve el pivote y el cuadrado crea o rompe el vínculo hijo→padre.
  El overlay ocupa el viewer completo y acepta puntero realmente. Esquema rig
  v3 con binding rígido explícito y migración desde escenas anteriores.
- Validación automática actual: 98/98, más prueba E2E de registro sin jerarquía,
  arrastre de pivote, vinculación gráfica y Undo.
