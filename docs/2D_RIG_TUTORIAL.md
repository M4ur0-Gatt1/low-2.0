# Rig 2D de LOW — cómo se usa hoy (v3.29.47)

Este documento explica el flujo **tal como está implementado**, no como debería
ser. Al final hay una lista de las cosas que hoy hacen que el flujo se sienta
raro comparado con Harmony u OpenToonz, con el lugar exacto del código.

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
   - el desplegable **Vínculo** del panel, o
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
4. Al crear el hueso, LOW intenta **vincular solo** el dibujo que esté debajo de
   la articulación. Si no lo logra —o si agarra la pieza equivocada, que es lo
   habitual hoy (ver *Problemas*, punto 1)— hacelo a mano: seleccioná la pieza
   en la mesa, seleccioná el hueso, y **Vincular dibujo**.
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
| jerarquía en Timeline / Node view | parenting por columna en la Xsheet | arrastrar el **cuadrado** al **círculo** del padre, en la mesa |
| peg de la capa | pegbar de la columna | el nodo del rig (no hay peg aparte) |
| pivote con la Transform Tool | *center* con la Animate Tool | botón **Pivote** |
| Transform Tool para animar | Animate Tool | modo **FK** + herramienta **Posar** |
| Deformers (Bone / Curve) | Plastic / Skeleton | **Crear hueso** (misma entidad que las piezas) |
| claves en la timeline de la capa | claves en la columna | **Clave** / **Clave global** / **Auto-clave** |

La diferencia grande: en Harmony y OpenToonz **la jerarquía se arma en la
timeline**, y en LOW se arma **en el canvas**. Si venís de esos programas, ese
es el paso que no vas a encontrar donde lo buscás.

---

## Problemas del flujo actual

Esto no es opinión de estilo: son cosas que rompen el trabajo o que enseñan mal.

1. **El auto-vínculo agarra la pieza equivocada.** Al crear un hueso, LOW busca
   el dibujo que hay bajo la articulación con `dzRigArtAtPoint`
   (`ui/app.js`), que recorre las piezas **en orden de dibujo** y devuelve la
   primera cuyo **rectángulo envolvente** contiene el punto. En un personaje, la
   primera pieza suele ser el cuerpo, y su rectángulo cubre casi todo: los
   huesos de la pata, la oreja o la mano terminan vinculados al cuerpo. Debería
   mirar la tinta real bajo el punto (`document.elementFromPoint`, o
   `isPointInFill`), y ante empate elegir la pieza más chica o la de más arriba.

2. **"Registrar piezas del dibujo" satura la mesa.** Registra todas las piezas
   de golpe, cada una con su círculo y su etiqueta encima del dibujo. Con 35
   piezas no se ve el personaje ni se puede apuntar a nada. En Harmony no ves
   35 pivotes a la vez: ves la capa que estás tocando.

3. **"Vínculo" nombra dos cosas distintas en el mismo panel**: el desplegable
   *Vínculo* es el **padre jerárquico**, y el botón *Vincular dibujo* es el
   **arte que arrastra el hueso**. Son conceptos que en Harmony ni se tocan.

4. **La jerarquía no se ve en la mesa.** El tirador de vínculo se dibuja solo
   para el nodo seleccionado y no hay líneas de padre a hijo, así que no hay
   forma de leer el esqueleto de un vistazo. El árbol del panel es la única
   fuente, y es chico.

5. **Piezas y huesos conviven en la misma lista con el mismo símbolo**, pero se
   posan distinto: el nodo-pieza no tiene cuerpo que agarrar. Nada en pantalla
   te dice cuál es cuál.

6. **La pieza puede perder su nombre.** Al crear un hueso sobre una pieza sin
   `id`, la pieza adopta el nombre del hueso
   (`if (art && !art.id) art.id = id;`), así que el dibujo pasa a llamarse
   `hueso_12`.
