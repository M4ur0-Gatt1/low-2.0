# LOW v3.29.41 — borrador de integración

Estado: **pendiente de tag y publicación**. Este archivo registra exactamente
qué debe entrar en la próxima versión; no afirma que el instalador ya exista.

## Rigging y animación 2D

- Armado cut-out real sobre `Scene.rig`: registrar piezas ya no inventa una
  anatomía ni una raíz por tamaño.
- Pivotes arrastrables y vínculo gráfico hijo→padre directamente en la mesa.
- Binding rígido explícito, jerarquía, FK, IK de dos huesos, límites, claves,
  Undo/Redo y persistencia sobre el documento canónico.
- Corrección de la capa interactiva del rig para que ocupe realmente el Viewer
  y reciba eventos del puntero.
- Arquitectura profesional v4 definida para slots, attachments, mallas, pesos,
  constraints ordenadas, controles, acciones y rigs de múltiples vistas, sin
  crear una escena o sistema paralelo.

## Trabajo concurrente de Claude incluido en la rama

- `767f07e`: el dibujo sobre una superficie 3D permanece adherido a ella.
- `bcb8f08`: figuras planas con contorno/relleno y correcciones de raíz.
- `b474a19`: trazo exacto sobre superficie e informe STL coherente con la
  geometría exportada.

Estos cambios se conservan tal como fueron entregados. Su presencia en este
borrador no convierte una prueba pendiente en una validación aprobada.

## Verificación

- ✅ 98/98 pruebas del modelo 2D.
- ✅ E2E previo de registrar piezas, mover pivote, vincular y Undo.
- ✅ Compilación TypeScript sin errores.
- ✅ Build de producción del renderer híbrido.
- ✅ Prueba de plano guía del bloque 3D concurrente en los cinco casos.
- Prueba manual 2D: armar, posar, reproducir, Undo/Redo, guardar/reabrir y
  comparar Viewer/export: aprobada para el commit 2D `0d0a85c`; debe repetirse
  sobre el ejecutable final.
- ⏳ Prueba manual de los tres flujos 3D descritos arriba.
- ⏳ Sincronizar todas las fuentes de versión: el paquete híbrido todavía
  declara `3.29.39`, mientras el producto principal declara `3.29.40`.
- ⏳ Confirmar que tag, interfaz y ejecutable informen `3.29.41`.

El build advierte que el chunk principal supera 500 kB. No bloquea esta
integración, pero debe abordarse con división de código antes de sumar editores
pesados de malla y Schematic.
