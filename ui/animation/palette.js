/* ══════════════════════════════════════════════════════════════════════════
   PALETA — del registro del color a que el color mande

   `scene-model.js` ya tiene el registro canónico: `Palette` y `Style`, con su
   color, su opacidad y su número. Lo que falta para que eso sirva mientras se
   dibuja es el otro lado del vínculo: **que el trazo referencie al estilo**.

   Sin esa referencia, el color sigue siendo un valor literal pegado adentro de
   cada trazo (`stroke="#F0450E"`), y aclarar la línea de un personaje son
   cuatrocientos trazos repartidos en ciento veinte dibujos, uno por uno.

   Con la referencia, el color vive en un solo lugar: cambiar el estilo 3
   recolorea, de una, todo lo que lo usa — en todos los dibujos, expuestos o
   no. Es la misma separación que sostiene el resto del módulo: `Level`/`Cell`
   separa el dibujo del tiempo, la paleta separa el dibujo del color.

   Dos papeles, como el ink & paint de siempre:

     data-stk="3"   el estilo 3 gobierna la LÍNEA de este elemento
     data-fil="3"   el estilo 3 gobierna el RELLENO de este elemento

   Un elemento puede llevar los dos (contorno con un estilo, relleno con otro).
   El lápiz y la pluma son línea; el pincel de LOW es una cinta rellena.

   Se referencia el NÚMERO del estilo, no su `id`: un uid repetido en cada
   elemento del SVG no se lee ni se escribe a mano, y el número es justamente
   lo que en una paleta se nombra — igual que el número de dibujo en la celda.

   Cómo se aplica el color, y por qué así: el estilo se resuelve con una hoja
   CSS que se inyecta en el SVG (`css()`), no reescribiendo los atributos de
   cada trazo. Dos razones concretas:

     · en CSS, una regla le gana al atributo de presentación del elemento, así
       que el color literal que quedó en el archivo sigue ahí como respaldo —
       el dibujo se abre en cualquier visor aunque no haya paleta;
     · recolorear es cambiar UNA línea de texto, no recorrer el DOM de todos
       los dibujos. Arrastrar el selector de color se ve al instante.

   Este archivo NO toca el DOM: opera sobre los strings de contenido de los
   dibujos. Por eso se puede probar de verdad.

   @module animation/palette
   ══════════════════════════════════════════════════════════════════════════ */
(function (global) {
  "use strict";
  const LOW = global.LOW = global.LOW || {};
  const animation = LOW.animation = LOW.animation || {};

  /** Atributos que llevan la referencia al estilo. Los nombres son cortos a
   *  propósito: van repetidos en cada trazo de cada dibujo del archivo. */
  const ATTR = { ink: "data-stk", paint: "data-fil" };

  /** Los cinco colores con los que se empieza: línea, rough, relleno, sombra y
   *  luz. No es decoración — aparecen en cualquier plano, y tenerlos numerados
   *  desde el principio es lo que hace que el trabajo entre a la paleta sin que
   *  haya que armarla antes de dibujar. */
  const SEMILLA = [
    ["Línea", "#1a1a1a"], ["Rough", "#f0450e"], ["Relleno", "#ffffff"],
    ["Sombra", "#7a86c4"], ["Luz", "#ffe9a8"],
  ];
  function seed(palette) {
    if (!palette || palette.styles.length) return palette;
    for (const [n, c] of SEMILLA) palette.addStyle(n, c);
    return palette;
  }

  const normColor = (c) => (animation.Style ? animation.Style.normalizeColor(c) : c);
  /** ¿Es un color de verdad, o un "none"/vacío? Solo los de verdad se adoptan. */
  function esColor(v) {
    if (!v) return false;
    const s = String(v).trim().toLowerCase();
    return s !== "" && s !== "none" && s !== "transparent" && !s.startsWith("url(");
  }

  /* ── resolución del color ────────────────────────────────────────────── */

  /** Hoja de estilo que hace que la paleta gobierne el color.
   *
   *  `!important` no es pereza: los trazos guardan su color literal como
   *  respaldo para abrirse en cualquier visor, y algunos además llevan estilo
   *  inline. Sin `!important` ganaría el inline y la paleta no haría nada. */
  function css(palette, scope) {
    if (!palette || !palette.styles.length) return "";
    const pre = scope ? scope + " " : "";
    const reglas = [];
    for (const s of palette.styles) {
      if (!s.index) continue;
      reglas.push(`${pre}[${ATTR.ink}="${s.index}"]{stroke:${s.color} !important}`);
      reglas.push(`${pre}[${ATTR.paint}="${s.index}"]{fill:${s.color} !important}`);
      if (s.opacity < 1) {
        reglas.push(`${pre}[${ATTR.ink}="${s.index}"],${pre}[${ATTR.paint}="${s.index}"]` +
                    `{opacity:${s.opacity}}`);
      }
    }
    return reglas.join("\n");
  }

  /* ── lectura de los dibujos (strings, sin DOM) ───────────────────────── */

  /** Recorre las etiquetas de apertura de un fragmento SVG.
   *  Alcanza y sobra para el SVG que escribe LOW, y no arrastra un parser. */
  function _tags(contenido, fn) {
    const re = /<([a-zA-Z][\w:-]*)((?:"[^"]*"|'[^']*'|[^>"'])*?)(\/?)>/g;
    let m;
    while ((m = re.exec(contenido))) fn(m, m[1], m[2] || "");
  }
  function _attr(attrs, nombre) {
    const m = new RegExp(nombre + '\\s*=\\s*"([^"]*)"').exec(attrs);
    return m ? m[1] : null;
  }
  /** Los dibujos de la escena que dependen de una paleta (o todos si no se
   *  pasa ninguna). Un nivel sin `paletteId` no está gobernado por nadie. */
  function _drawingsDe(scene, palette) {
    const out = [];
    for (const lv of scene.levels) {
      if (palette && lv.paletteId !== palette.id) continue;
      for (const d of lv.drawings) out.push(d);
    }
    return out;
  }

  /** Cuántos elementos usan cada estilo, por número:
   *  `{ 3: { ink: 12, paint: 0, total: 12 } }`. Con esto la vista puede avisar
   *  "este estilo lo usan 12 trazos" antes de que alguien lo borre. */
  function usage(scene, palette) {
    const cuenta = {};
    const sumar = (i, papel) => {
      const n = Number(i);
      if (!n) return;
      const c = cuenta[n] || (cuenta[n] = { ink: 0, paint: 0, total: 0 });
      c[papel]++; c.total++;
    };
    for (const d of _drawingsDe(scene, palette)) {
      _tags(d.content || "", (_m, _tag, attrs) => {
        sumar(_attr(attrs, ATTR.ink), "ink");
        sumar(_attr(attrs, ATTR.paint), "paint");
      });
    }
    return cuenta;
  }

  /** Referencias a estilos que ya no están en la paleta. Es el equivalente de
   *  la celda en rojo de OpenToonz: no se corrige solo, se muestra. */
  function orphans(scene, palette) {
    const u = usage(scene, palette);
    return Object.keys(u).map(Number).filter((i) => !palette.byIndex(i)).sort((a, b) => a - b);
  }

  function _swap(contenido, attr, from, to) {
    const re = new RegExp('(' + attr + '\\s*=\\s*")' + Number(from) + '(")', "g");
    return contenido.replace(re, "$1" + Number(to) + "$2");
  }

  /** Pasa todo lo que usaba el estilo `from` a usar `to`. Es lo que se hace
   *  antes de borrar un estilo, y también para unificar dos colores que
   *  terminaron siendo el mismo. Devuelve cuántos elementos cambiaron. */
  function reassign(scene, from, to, palette) {
    if (Number(from) === Number(to)) return 0;
    const antes = usage(scene, palette)[Number(from)];
    if (!antes) return 0;
    for (const d of _drawingsDe(scene, palette)) {
      const c = d.content || "";
      if (!c) continue;
      const nuevo = _swap(_swap(c, ATTR.ink, from, to), ATTR.paint, from, to);
      if (nuevo !== c) d.content = nuevo;
    }
    return antes.total;
  }

  /** ADOPTAR: mete en la paleta lo que se dibujó antes de que la paleta
   *  gobernara. Cada trazo con color literal queda referenciando el estilo de
   *  ese color, creándolo si no estaba. Sin esto la paleta solo manda sobre lo
   *  nuevo y el trabajo viejo queda afuera para siempre.
   *
   *  Devuelve `{ elementos, estilosNuevos }`. No cambia ningún color: el dibujo
   *  se ve idéntico, la diferencia es que ahora se puede recolorear. */
  function adopt(scene, palette) {
    let elementos = 0, estilosNuevos = 0;
    const estiloDe = (color, sugerido) => {
      let s = palette.byColor(color);
      if (!s) {
        // el número va en el nombre: si no, tres colores adoptados se llaman
        // todos "Relleno" y la paleta no se puede leer
        s = palette.addStyle(`${sugerido} ${palette.nextIndex()}`, color);
        estilosNuevos++;
      }
      return s;
    };
    for (const d of _drawingsDe(scene, palette)) {
      const c = d.content || "";
      if (!c) continue;
      const parches = [];        // se aplican al final, para no correr los índices
      _tags(c, (m, tag, attrs) => {
        if (tag === "svg" || tag === "style" || tag === "defs") return;
        const finTag = m.index + m[0].length - (m[3] ? 2 : 1);   // antes de "/>" o ">"
        const añadir = [];
        if (!_attr(attrs, ATTR.ink)) {
          const ink = _attr(attrs, "stroke");
          if (esColor(ink)) añadir.push(`${ATTR.ink}="${estiloDe(ink, "Línea").index}"`);
        }
        if (!_attr(attrs, ATTR.paint)) {
          const paint = _attr(attrs, "fill");
          if (esColor(paint)) añadir.push(`${ATTR.paint}="${estiloDe(paint, "Relleno").index}"`);
        }
        if (añadir.length) { parches.push({ at: finTag, txt: " " + añadir.join(" ") }); elementos++; }
      });
      if (!parches.length) continue;
      let out = c;
      for (let i = parches.length - 1; i >= 0; i--)          // de atrás hacia adelante
        out = out.slice(0, parches[i].at) + parches[i].txt + out.slice(parches[i].at);
      d.content = out;
    }
    return { elementos, estilosNuevos };
  }

  /** Marca un fragmento de contenido con un estilo. Uso interno y de pruebas:
   *  en el lienzo la marca la pone el propio trazo cuando nace. */
  function tag(contenido, index, papel) {
    const attr = papel === "paint" ? ATTR.paint : ATTR.ink;
    let out = contenido;
    const parches = [];
    _tags(contenido, (m, tagName, attrs) => {
      if (tagName === "svg" || tagName === "style") return;
      if (_attr(attrs, attr) != null) {
        parches.push({ from: m.index, len: m[0].length,
                       txt: m[0].replace(new RegExp(attr + '\\s*=\\s*"[^"]*"'), `${attr}="${index}"`) });
      } else {
        parches.push({ from: m.index + m[0].length - (m[3] ? 2 : 1), len: 0,
                       txt: ` ${attr}="${index}"` });
      }
    });
    for (let i = parches.length - 1; i >= 0; i--) {
      const p = parches[i];
      out = out.slice(0, p.from) + p.txt + out.slice(p.from + p.len);
    }
    return out;
  }

  animation.palette = { ATTR, SEMILLA, seed, css, usage, orphans, reassign, adopt, tag, normColor };
})(window);
