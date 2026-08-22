# Rig 2D de LOW — cómo se usa (v3.29.48)

Este documento explica el flujo **tal como está implementado**. Al final está
el estado de los seis problemas que encontré al revisarlo: cuatro arreglados en
la v3.29.48 y dos que siguen abiertos.

El mismo tutorial vive dentro del programa, en **Ayuda → Cómo se riggea un
personaje**.

---

## La idea de fondo: acá hay una sola entidad

En Harmony y en OpenToonz hay **dos sistemas separados**: la jerarquía de
cut-out (capas/columnas con pegs) por un lado, y los deformadores o el
esqueleto (Bone/Curve, Plastic) por otro.

En LOW hay **una sola cosa**: el *nodo de rig*. Todo lo que ves en el panel —
`pieza_9`, `hueso_35`— es el mismo tipo de objeto, con estos campos:

| campo | qué es | cuándo aparece |
| --- | --- | --- |
| `pivot` | el punto sobre el que rota | siempre |
| `head` / `tail` | los dos extremos del hueso | solo si lo creaste con **Crear hueso** |
| `parentId` | de quién cuelga | cuando lo vinculás |
| `elementId` | qué dibujo arrastra | cuando lo vinculás al arte |
| `keys` | las poses por cuadro (x, y, rot, escala) | al clavar |
| `pinned` | si es la raíz | con **Fijar raíz** |

Que sea una sola entidad tiene una consecuencia práctica: **un nodo se comporta
distinto según cómo lo creaste**, y nada en pantalla lo aclara. Un nodo hecho
con "Registrar piezas" no tiene `head`/`tail`, así que no tiene cuerpo de hueso
para agarrar: solo se lo puede posar desde su articulación. Uno hecho con
"Crear hueso" sí.

---

## Los dos caminos para armar el rig

### Camino A — Cut-out por piezas (el que se parece a OpenToonz)

Sirve cuando el personaje **ya está dibujado por partes separadas**.

1. **Dibujá o importá el personaje con cada parte como una pieza aparte.** Una
   pieza es un hijo directo del SVG del dibujo. Si todo el personaje es un solo
   trazo, no hay nada que riggear: primero separalo.
2. **Armado → Registrar piezas del dibujo.** Registra *todas* las piezas de una
   vez. Cada una queda con su pivote en el centro de su caja y **sin padre**.
   El contador de arriba te dice cuántas registró.
3. **Colocá el pivote de cada pieza.** Seleccionala y usá **Pivote**: donde
   pongas ese punto es donde va a rotar. Para un brazo, el hombro.
4. **Armá la jerarquía.** Dos formas, hacen lo mismo:
   - el desplegable **Cuelga de** del panel, o
   - arrastrar el **cuadradito** del nodo seleccionado hasta el **círculo**
     (pivote) del que va a ser su padre. Soltarlo en un área vacía rompe el
     vínculo.
5. **Fijá la raíz** (normalmente la cadera o el torso) con **Fijar raíz**: se
   dibuja como un círculo más grande.
6. Pasá a **FK** y posá.

### Camino B — Cadena de huesos (el que se parece a Moho/Harmony deformers)

Sirve cuando querés una cadena articulada, con o sin piezas separadas.

1. **Armado → Crear hueso.**
2. **Arrastrá desde la articulación hasta la punta.** Eso crea un hueso.
3. **Para continuar la cadena, empezá el siguiente arrastre cerca de la punta
   del anterior** (a menos de 18 px en pantalla): se engancha solo y queda como
   hijo. Si empezás lejos, nace suelto como raíz.
4. Al crear el hueso, LOW **vincula solo** el dibujo que esté debajo de la
   articulación, mirando la tinta real. Si querés cambiarlo, seleccioná la pieza
   en la mesa, seleccioná el hueso y tocá **Mueve el dibujo**.
5. Pasá a **FK** y posá.

Los dos caminos se pueden mezclar en el mismo personaje, y eso es parte de por
qué el panel se vuelve confuso: terminás con piezas y huesos en la misma lista.

---

## Los tres modos

| modo | para qué | qué herramientas quedan activas |
| --- | --- | --- |
| **Armado** | crear, pivotes, jerarquía | Seleccionar, Crear hueso (Posar queda apagado) |
| **FK** | posar articulación por articulación | Seleccionar, Posar (Crear hueso queda apagado) |
| **IK** | mover un extremo y que la cadena resuelva | Seleccionar, Posar |

Cambiar de modo cambia la herramienta sola, a propósito: al entrar en FK o IK
queda **Posar** para que arrastrar ya pose sin un paso extra.

### Posar en FK

- Arrastrar el **cuerpo del hueso** o su **punta** → rota sobre el pivote.
- Arrastrar la **articulación** (el círculo) → mueve el hueso, y los hijos
  siguen.
- Con **Auto-clave** tildado, cada gesto deja una clave en el cuadro actual.
  Destildado, podés probar sin grabar: **Enter** clava, **Esc** descarta.

### Posar en IK

1. Elegí **Hombro**, **Codo** y **Extremo** en los tres desplegables. Tienen que
   ser tres nodos **consecutivos** de la misma cadena, cada uno con pivote.
2. **Crear IK**.
3. Arrastrá el **rombo** verde en la mesa. Los dos huesos se clavan en una sola
   operación.
4. **Invertir** cambia el lado hacia el que flexiona el codo.

---

## Qué significa cada símbolo en la mesa

| símbolo | qué es |
| --- | --- |
| **círculo** chico | el pivote / articulación del nodo |
| **círculo grande** | la raíz (nodo fijado con *Fijar raíz*) |
| **línea** entre dos puntos | el cuerpo de un hueso (solo los creados con *Crear hueso*) |
| **círculo en la punta** | el extremo del hueso: de ahí sale la cadena |
| **cuadrado** con un brazo | el tirador de vínculo **del nodo seleccionado**: arrastralo al pivote del padre |
| **rombo** | el objetivo de una cadena IK |
| texto | el nombre del nodo |

---

## Equivalencias con lo que ya conocés

| en Harmony | en OpenToonz | en LOW hoy |
| --- | --- | --- |
| jerarquía en Timeline / Node view | parenting por columna en la Xsheet | **Cuelga de**, o arrastrar el **cuadrado** al **círculo** del padre |
| peg de la capa | pegbar de la columna | el nodo del rig (no hay peg aparte) |
| pivote con la Transform Tool | *center* con la Animate Tool | botón **Pivote** |
| Transform Tool para animar | Animate Tool | modo **FK** + herramienta **Posar** |
| Deformers (Bone / Curve) | Plastic / Skeleton | **Crear hueso** (misma entidad que las piezas) |
| claves en la timeline de la capa | claves en la columna | **Clave** / **Clave global** / **Auto-clave** |

La diferencia grande: en Harmony y OpenToonz **la jerarquía se arma en la
timeline**, y en LOW se arma **en el canvas**. Si venís de esos programas, ese
es el paso que no vas a encontrar donde lo buscás.

---

## Estado de los problemas que encontré

### Arreglados en la v3.29.48

**El auto-vínculo agarraba la pieza equivocada.** `dzRigArtAtPoint` recorría las
piezas *en orden de dibujo* y devolvía la primera cuyo **rectángulo envolvente**
contenía el punto. En un personaje, la primera pieza suele ser el cuerpo y su
rectángulo cubre casi todo: los huesos de la pata, la oreja o la mano terminaban
vinculados al cuerpo. Ahora mira la **tinta real** con `elementsFromPoint`, y si
el punto cae en un hueco elige la **caja más chica** que lo contenga, nunca la
primera. Medido sobre un cuerpo de 400×400 con una mano de 60×60 encima:
apuntando al centro de la mano, antes devolvía `cuerpo` y ahora devuelve `mano`.

**La mesa se saturaba de pivotes.** Registrar las piezas de un personaje deja
decenas de círculos encima del dibujo. Ahora, cuando hay más de ocho nodos, los
que no son el seleccionado ni su familia directa se **atenúan** y se achican.
Siguen estando y se siguen agarrando igual: el área invisible de agarre no
cambió.

**«Vínculo» nombraba dos cosas.** El desplegable pasó a llamarse **Cuelga de**
(la jerarquía) y el botón, **Mueve el dibujo** (qué arte arrastra el hueso).

**La pieza perdía su nombre.** Al crear un hueso sobre una pieza sin `id`, la
pieza adoptaba el nombre del hueso y el dibujo pasaba a llamarse `hueso_12`.
Ahora recibe nombre de pieza (`pieza_3`).

### Siguen abiertos

**Piezas y huesos comparten lista y símbolo**, pero se posan distinto: el
nodo-pieza no tiene cuerpo que agarrar, solo su articulación. Nada en pantalla
dice cuál es cuál. Falta un ícono distinto en la lista y una acción de «darle
hueso a esta pieza».

**La jerarquía de los huesos no se lee de un vistazo.** Ojo con esto, porque mi
primera lectura fue incorrecta: para una **pieza** con padre, el overlay **sí**
dibuja la línea que la une a él. Lo que no se ve es la relación entre un
**hueso** y su padre, porque ahí la línea ya está ocupada dibujando el cuerpo
del hueso.
