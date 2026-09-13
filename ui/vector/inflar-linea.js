/* EL INFLADOR INFLA LA LÍNEA, COMO EL PUMP DE OPENTOONZ.

   LO QUE PIDIÓ MAURO: «el inflador debe ser como el inflador de línea de
   OpenToonz: lo que debe inflar es la línea, el contorno, ensancharla o
   desinflarla si lo uso con Alt».

   LO QUE HACÍA ANTES. Inflaba la FORMA: escalaba la geometría hacia afuera
   desde el centro, como un globo. El grosor del contorno no lo tocaba. Para un
   dibujante eso no es inflar una línea: es agrandar el dibujo.

   LO QUE HACE AHORA, y la diferencia importa:

   - Sobre un TRAZO DE PINCEL la hinchazón es LOCAL, que es lo que hace el Pump
     de OpenToonz: el trazo guarda un punto por muestra con su presión
     (`data-low-brush-points`), así que se sube la presión de los puntos que
     caen bajo el cursor, con caída suave hacia los costados, y se vuelve a
     entintar. La línea engorda DONDE pasás, no entera.
   - Sobre una forma entintada o un trazo común no hay ancho por punto: el
     grosor es uno solo para toda la línea (`data-grosor` o `stroke-width`), así
     que se infla toda y el aviso lo dice. Mentir sobre eso sería peor que la
     limitación.

   Con Alt, desinfla. Y como en el Pump, cada pasada suma: pasar dos veces
   engorda más, que es como uno modula una línea de verdad.

   @module vector/inflar-linea */

const DZ_INFLAR_MIN = 0.05, DZ_INFLAR_MAX = 8;      // límites de la presión por punto

/** Aplica una pasada del inflador en (x,y), en coordenadas del dibujo.
 *
 *  Devuelve `{ tipo: "local"|"global", puntos }` con lo que tocó, o null si ese
 *  elemento no tiene una línea que inflar.
 */
function dzInflarLinea(el, x, y, opciones) {
  if (!el || !el.tagName) return null;
  const factor = (opciones && opciones.factor) || 1.06;
  const radio = (opciones && opciones.radio) || 60;

  // ── 1. TRAZO DE PINCEL: hinchazón local, punto por punto
  if (el.hasAttribute && el.hasAttribute("data-low-brush-points")) {
    let puntos;
    try { puntos = JSON.parse(el.getAttribute("data-low-brush-points")); } catch (_) { return null; }
    if (!Array.isArray(puntos) || !puntos.length) return null;
    const r2 = radio * radio;
    let tocados = 0;
    for (const p of puntos) {
      const dx = p[0] - x, dy = p[1] - y, d2 = dx * dx + dy * dy;
      if (d2 > r2) continue;
      // caída suave: el centro del pincel infla todo, el borde casi nada. Sin
      // esto queda un escalón y la línea se ve mordida.
      const caida = 1 - Math.sqrt(d2) / radio;
      const f = 1 + (factor - 1) * caida;
      const presion = (typeof p[2] === "number" ? p[2] : 1) * f;
      p[2] = Math.max(DZ_INFLAR_MIN, Math.min(DZ_INFLAR_MAX, presion));
      tocados++;
    }
    if (!tocados) return { tipo: "local", puntos: 0 };
    el.setAttribute("data-low-brush-points", JSON.stringify(puntos));
    if (typeof dzBrushWidthState === "function" && typeof dzBrushWidthApply === "function") {
      // se vuelve a entintar con el MISMO tamaño: lo que cambió es la presión
      const estado = dzBrushWidthState(el);
      if (estado) dzBrushWidthApply(el, estado, estado.size);
    }
    return { tipo: "local", puntos: tocados };
  }

  // ── 2. FORMA ENTINTADA: un grosor para toda la línea
  if (typeof dzFormaPincelEs === "function" && dzFormaPincelEs(el)) {
    const antes = parseFloat(el.getAttribute("data-grosor")) || 1;
    const grosor = Math.max(0.2, Math.min(400, antes * factor));
    el.setAttribute("data-grosor", Math.round(grosor * 100) / 100);
    if (typeof dzFormaPincelRender === "function") dzFormaPincelRender(el);
    return { tipo: "global", puntos: 1, grosor };
  }

  // ── 3. TRAZO COMÚN: el `stroke-width`, que también es uno solo
  const sw = parseFloat(el.getAttribute("stroke-width") ||
    (el.style && el.style.strokeWidth) || "0");
  if (!sw) return null;
  const grosor = Math.max(0.2, Math.min(400, sw * factor));
  el.setAttribute("stroke-width", Math.round(grosor * 100) / 100);
  return { tipo: "global", puntos: 1, grosor };
}

/** El aviso que corresponde, que no promete lo que no hizo. */
function dzInflarAviso(resultado, desinfla) {
  if (!resultado) return "El inflador trabaja sobre una línea: acercate a un trazo";
  const verbo = desinfla ? "Desinflando" : "Inflando";
  if (resultado.tipo === "local")
    return "\u{1F388} " + verbo + " la línea donde pasás · " + resultado.puntos +
      " puntos · Alt desinfla";
  return "\u{1F388} " + verbo + " toda la línea — este trazo tiene un solo grosor · " +
    (resultado.grosor ? resultado.grosor.toFixed(1) + " px · " : "") + "Alt desinfla";
}

/** Una pasada del inflador donde esté el cursor, con su aviso. Alt desinfla.
 *  Vive acá y no en `app.js` porque el techo de `app.js` está al límite: lo que
 *  se agrega va en un módulo (biblia §12). */
function dzInflarPasada(el, e) {
  const p = dzToUser(e.clientX, e.clientY);
  const r = dzInflarLinea(el, p.x, p.y,
    { radio: 60 / (DZ.zoom || 1), factor: e.altKey ? 0.94 : 1.06 });
  dzSetStatus(dzInflarAviso(r, !!e.altKey));
  return r;
}
