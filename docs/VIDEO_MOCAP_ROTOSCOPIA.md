# Video mocap y rotoscopía en LOW

## Objetivo

Convertir un video importado en material útil para animación 2D: referencia
sincronizada, siluetas, articulaciones y movimiento aplicable a un rig. El
artista conserva el control de cada corrección y de las claves generadas.

## Flujo de producción

1. **Importar** un MP4, WebM, MOV o AVI y definir entrada/salida.
2. **Marcar sujeto** cuando hay varias personas u oclusiones.
3. **Analizar** por etapas: segmentación, pose y seguimiento temporal.
4. **Corregir** máscara, articulaciones perdidas, escala y piso.
5. **Aplicar** como siluetas, guía de dibujo, esqueleto nuevo o movimiento de un rig.

## Contrato técnico

`MotionCaptureTrack` es parte del documento y persiste metadatos, rango,
muestras de pose y siluetas. El archivo pesado se mantiene externo y puede
revincularse. Los motores se registran mediante `mocapEngines.register(id,
engine)` y deben implementar `analyze(track, video)`; así LOW puede usar un
motor local, una GPU remota o una API sin contaminar el modelo de animación.

## Reglas de calidad

- El zoom o la resolución del visor no alteran coordenadas normalizadas.
- La silueta y la pose tienen confianza por cuadro y se pueden corregir.
- El seguimiento no genera saltos de identidad entre personas.
- El retargeting crea una capa de movimiento reversible.
- Reducir claves respeta contactos de pies, manos y extremos de movimiento.
- Guardar, cerrar y reabrir conserva resultados aunque el video necesite revincularse.

## Estado

Base implementada: importación local, visor sincronizado, región de sujeto
editable, extracción local de siluetas de movimiento, corrector por cuadro para
agregar o borrar máscara con tableta, guía superpuesta en el lienzo y conversión
reversible a un nivel de calco con exposiciones, persistencia del modelo y
registro de motores. La extracción local compara contra el primer cuadro y está
pensada para cámara fija; no se presenta como detección corporal. Pendiente para
producción: segmentación semántica estable, pose, corrector visual, retargeting,
reducción de claves y pruebas de aceptación con videos diversos.

El análisis muestra progreso y se puede cancelar. Una cancelación restaura el
conjunto anterior de siluetas y devuelve el video a su tiempo y reproducción
previos; cancelar nunca deja un análisis parcial presentado como completo.
