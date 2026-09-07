# Balance de LOW — septiembre de 2026 (v4.14.0)

Medido contra la biblia (`LOW_BIBLIA_PRODUCCION.md`), no contra la impresión de
que «anda bien». La regla de §13 es la que manda: **la nota de un área es la
menor de sus cuatro evidencias** —implementación, automatización, validación
humana y producción—. Una interfaz bonita no compensa un motor roto.

La escala es la de §2: 5–6 beta, 7–8 producción limitada, 9 producción
profesional, 10 referencia del mercado.

---

## Dónde estamos: nota por área

| Área | Nota | Cuál de las cuatro evidencias la frena |
|---|---|---|
| **Rigging** | **8** | Producción: sobrevive el proyecto de ejemplo; no hay todavía un corto real terminado con un personaje rigueado. |
| Dibujo | 7 | Automatización de rendimiento: el presupuesto de 16 ms por trazo nunca se midió. |
| Cuadro a cuadro | 7 | Validación humana: copiar y pegar **borraba trabajo** hasta v4.13.3, y lo encontró el artista, no la prueba. |
| Timeline | 7 | Producción: curvas y arcos existen y se prueban; falta una escena larga que los use en serio. |
| Confiabilidad | 7 | Validación humana: guardado atómico y recuperación están automatizados, pero en esta misma tanda apareció una pérdida de datos real. |
| Vector | 6 | Automatización: la edición de nodos y contornos casi no tiene pruebas propias. BRUSH-02 sigue abierto. |
| X-sheet | 6 | Implementación: falta la columna de notas de una hoja profesional. |
| Cámara y composición | 6 | Validación humana: la pantalla de composición se rehízo porque «no se entendía el flujo». |
| IA | 6 | Producción: mocap acotado y cancelable, probado con un video; falta el caso difícil (oclusiones, paneo, dos sujetos). |
| Interfaz | 6 | Validación humana: **dos «no lo pude encontrar» en una sola sesión** (el XML para Premiere y las herramientas de movimiento). |
| Distribución | 5 | Producción: se compilan tres instaladores por release y **sólo el de Windows lo arrancó alguien**. |
| Rendimiento | 4 | Automatización: **cero medición** contra los presupuestos de §10. |
| 3D | 4 | Implementación: hay escenario multiplano, no un módulo 3D autónomo con superficies, guías, cámara y exportación. |

**Nota del producto: 6 — beta avanzada.** Recorrido completo de punta a punta,
con límites visibles y dos áreas (rendimiento y 3D) en alfa.

No es 7 por una razón concreta: 7 es «confiable en proyectos definidos», y en
esta tanda aparecieron **dos defectos que le comen trabajo al artista** —copiar
y pegar, y el guardado que borraba el punto de recuperación—. Los dos están
arreglados y con guardia, pero la nota mide la confianza que el programa se
ganó, no la que quisiéramos.

---

## Qué se ganó (cifras, no adjetivos)

| | |
|---|---|
| Suites de modelo en la puerta de CI | 11 |
| Casos de modelo | 600 |
| Recorridos E2E en Chromium | 16 de 17 |
| Comprobaciones del puente Python | 4 |
| Contratos estáticos | 128 |
| Filas de la matriz de regresión | 44 (P0 y P1: todas cerradas) |
| Instaladores por release | 4 (Windows exe + instalador, macOS, Linux) |

Cerrado en las últimas versiones: los seis niveles de deformación de §4.3, el
editor de curvas, pesos y mallas, Smart Bones, controles, lipsync, XML para
Premiere, trabajo remoto en servidor propio y arcos con espaciado.

---

## Cuánto falta para «terminado»

«Terminado» no lo define una lista de funciones: lo definen §14 y §15. Contra
eso, faltan **seis cosas**, y están ordenadas por lo que más mueve la aguja.

### 1. La prueba maestra de §15 — nunca se corrió

Es *la* que decide. Pide que **una persona que no participó del desarrollo**
haga un proyecto completo sin ayuda: dibujar con tableta, X-sheet, importar un
segundo personaje, riguear, FK e IK, animar una caminata, cámara y audio,
guardar, reabrir, exportar y recuperar tras un cierre forzado.

Nunca se hizo, ni una vez, ni completa. Todo lo que sabemos de validación humana
viene de una sola persona —que además es quien pide las funciones—. Mientras
esto no se haga, **ningún área puede pasar de 8**, porque la evidencia
«validación humana» no existe en el sentido que pide la biblia.

Esfuerzo: una jornada de una persona ajena, más el instrumento para medir
errores, tiempo, interrupciones y pedidos de ayuda.

### 2. Rendimiento: medir antes de opinar (§10)

Hay seis presupuestos escritos —16 ms de respuesta al trazo, 60 FPS de
interacción con piso de 30, reproducción sin saltos, guardado que no congela,
recuperación, apertura con progreso— y **ninguno se ha medido nunca**. La única
medición sistemática de la sesión fue por un problema reportado (el panel de
Equipo, 206 ms contra 553 ms), y sirvió: había un defecto real.

La biblia dice «no se optimiza por intuición». Hoy tampoco se verifica por
medición. Falta un arnés de rendimiento en la puerta de CI, con escena patrón.

### 3. Humo sobre el ejecutable empaquetado, en los tres sistemas (§9·4)

Se publican cuatro artefactos por release. El de Windows lo arranca el artista
todos los días. **A los de macOS y Linux nunca los abrió nadie.** Son binarios
que compilan, no binarios que funcionan: la diferencia es exactamente lo que
§9·4 exige comprobar.

### 4. Partir `app.js` (§12 AHORA·7) — y va para atrás

| | líneas |
|---|---|
| `app.js` | **18.564** |
| los otros 73 módulos, juntos | 36.477 |

Un solo archivo con un tercio del frontend. Y esta sesión **le sumó unas 850
líneas** (equipo y arcos), así que el punto no sólo está abierto: está
empeorando.

Hay que decir la otra mitad: §12 AHORA cierra con «no entran nuevas familias de
funciones durante esta etapa», y en las últimas versiones entraron cuatro
—lipsync, XML, trabajo remoto, arcos—. Fueron pedidas y se entregaron probadas,
así que la decisión es del que manda; pero la deuda que eso genera es real y
tiene un nombre y un número.

### 5. MOCAP-05: el caso difícil

Mocap quedó **aceptado en parte**: un video real, 67 siluetas, nivel de calco
creado, validado por el artista. Falta lo que la fila pide de verdad:
oclusiones, paneo y dos sujetos, con diagnóstico comprensible y corrección
manual.

Límite medido y ya escrito en la matriz: la silueta se analiza a **192 px de
ancho como máximo**, y por eso el calco se ve a manchones en una escena de 1920.
Es un techo elegido para no congelar la interfaz, no un defecto — pero si se
quiere calco fino, hay que subirlo y pagar el costo.

### 6. Los P1 que quedan abiertos

- **BRUSH-02** — que cada parámetro visible del pincel produzca una diferencia
  medible en el trazo. Hoy hay parámetros que no se puede afirmar que hagan algo.
- **SAFE-01 / SAFE-02** — inicio seguro y reset por dominio. Cuando algo se
  rompe, no hay forma de arrancar limpio.

---

## Lo que yo haría, en este orden

1. **El arnés de rendimiento** (falta 2). Es lo único que puede estar
   empeorando sin que nadie se entere, y ya tenemos la prueba de que medir
   encuentra defectos reales.
2. **Humo en macOS y Linux** (falta 3). Es publicar binarios sin saber si
   arrancan; se resuelve en una tarde y saca a Distribución de 5.
3. **Partir `app.js`** (falta 4), con una regla simple: nada nuevo entra en
   `app.js`, y cada función nueva se lleva un pedazo afuera al salir.
4. **La prueba maestra de §15** (falta 1) cuando las tres anteriores estén, para
   que la persona ajena no choque contra cosas que ya sabemos.

Los dos primeros son días. El tercero es semanas. El cuarto es el que decide si
LOW está a la altura de su promesa, y hasta que se haga, la respuesta honesta a
«¿cuánto falta?» es: **el programa está listo para que lo use su autor, y todavía
no probado para que lo use otro**.
