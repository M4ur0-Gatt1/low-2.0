# LOW v4.18.0 — Composición deja de ser un diorama

El reporte fue «este módulo es totalmente fake», y después, más preciso: «las
herramientas no hacen nada dentro de composición, no puedo cambiar las
posiciones de los planos». Las dos cosas eran ciertas de la experiencia, y
ninguna era cierta del motor. Vale la pena separarlo.

## Lo que sí era real (medido antes de tocar nada)

Poner Z escribe `data-z` en el elemento → se guarda en el dibujo → llega al
cuadro que se exporta → `dzCamView` aplica **paralaje de verdad**
(`p = 100/(100+z)`, con el dolly compensado para que lo cercano crezca más
rápido). Las cuatro manijas del gizmo funcionan y escriben en el modelo: XY
(x 0→120, y 0→50), Z (0→120), R (rotación 0→45°), S (escala 1→1,4).

## Por qué se sentía falso

**1. Agarrar un plano no lo movía.** Sólo hacía algo si antes apretabas G, R o
S — una interfaz modal estilo Blender que nadie adivina. Por omisión no hay
herramienta puesta, así que agarrabas un plano y no pasaba **nada**.

**2. No había cámara en la pantalla.** Y el paralaje sólo existe cuando la
cámara **se mueve**; la cámara vivía en otro panel. Ordenabas la profundidad y
no veías ningún resultado. La pantalla misma lo admitía: *«todos los planos
están en Z 0: la mesa se ve plana»*.

Trabajo sin resultado visible. Eso es lo que se siente falso aunque el motor
ande.

## Lo que cambia

**Arrastrar un plano lo mueve.** Y si el plano no estaba elegido, el mismo
gesto lo elige y lo mueve — antes el `click` llegaba *después* del arrastre, así
que agarrar un plano nuevo movía el anterior. Las teclas G/R/S siguen mandando
cuando están puestas. El rótulo de la barra ahora dice el gesto en vez de
«Seleccionar»: *«Arrastrá un plano para moverlo · Z profundidad · R rotar · S
escalar»*.

**Vista CÁMARA**, junto a Perspectiva / Frente / Arriba. No dibuja una
aproximación: pinta **el cuadro que se va a exportar**, pasado por el mismo
`dzCamView` que usa la exportación. Si el paralaje no se nota, es porque no
está, no porque la vista mienta.

- **arrastrar** panea la cámara y el paralaje se ve en el acto;
- **rueda** hace dolly;
- **Auto-key** deja clave de cámara al soltar, en **un** paso de historial;
- sin Auto-key la cámara se mueve sólo para mirar y no guarda nada — asomarse
  por el visor sin tocar la animación.

Y una línea que dice si hay algo que ver: *«planos en distinta profundidad:
paneá para ver el paralaje»* o *«todos a la misma profundidad: paneá y se mueven
juntos»*.

## Un arreglo de rendimiento que venía de arriba

`manipulate()` llamaba a `render()` en **cada** `pointermove`, y `render()` vacía
las tarjetas y **clona el dibujo de cada plano**. Con una escena real eso es
clonar el arte completo sesenta veces por segundo, y además destruía y recreaba
la tarjeta que uno tiene agarrada. Ahora el arrastre mueve sólo la tarjeta
arrastrada; el render completo va al soltar. Medido: **2 renders por arrastre**,
contra uno por cada movimiento del puntero.

## Pruebas

`tools/check_composition_ui.js`, nuevo y en la puerta de CI. Verifica el
paralaje **midiendo que dos planos a distinta profundidad se muevan distinto**
—no que «algo cambie»—, y cuenta los renders del arrastre. Se comprobó que
falla con el código viejo, con el mensaje del reporte: *«agarrar un plano y
arrastrarlo NO lo mueve»*.

El recorrido que ya existía (`check_multiplane_ui`) certificaba **presencia**:
contaba gizmos y nunca arrastraba ninguno. Sigue, y ahora hay uno que prueba
conducta.

8 contratos estáticos nuevos.

## La puerta de `app.js` frenó este trabajo, y estuvo bien

Este cambio le agregaba líneas a `app.js`, y la puerta lo rechazó. Así que el
puente de composición —9 funciones, 149 líneas— se fue a
`ui/panels/composition-panel.js`, donde pertenece: al lado del modelo, la vista
y la cámara. `app.js` pasa de 18.008 a **17.863** líneas.

## Reversión

Estable previa: `v4.17.1`. El motor de composición no cambió: cambia cómo se lo
maneja y que ahora se puede ver el resultado.
