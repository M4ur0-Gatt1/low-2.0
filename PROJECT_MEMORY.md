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

Resolver el rigging 2D superficial. La auditoría y los criterios obligatorios
están en `docs/2D_REDESIGN.md`, sección **Rigging 2D: auditoría y deuda P0**.

## Últimos bloques 2D confirmados

- Rangos rectangulares multi-columna, copy/cut/paste y Undo en XSheet.
- Selección múltiple y drag Level Strip → XSheet.
- Papel cebolla visible y conectado al documento.
- Docks y paneles apilados redimensionables con persistencia.
- Herramientas vectoriales Pump/Pinch/Plancha configurables.
- Mesa de dibujo editable en una ventana nativa para segundo monitor.

