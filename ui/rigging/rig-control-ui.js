/* Editor visual de controles sobre el personaje (C02).
 *
 * Un control es un CANAL con nombre (ver docs/LOW_CONTRATO_CONTROLES_C01.md).
 * Este módulo no inventa un motor nuevo: sólo pone un mando sobre el dibujo y
 * escribe en el canal que ya existe, `controls/<id>`, con setRigControlValue.
 * Todo lo demás —curvas en el Function Editor, Smart Bones que lo toman como
 * conductor— sigue funcionando sin saber que este panel existe.
 *
 * Tres formas de mando, las de la etapa C del plan:
 *   deslizador · recorrido lineal entre min y max
 *   punto 2D   · par de controles enlazados, un eje cada uno
 *   selector   · opciones discretas
 *
 * Modo COLOCAR: clic sobre el dibujo para fijar dónde se para el mando.
 * Modo USAR: arrastrar el mando deja UNA clave en el cuadro actual.
 */
(function () {
  "use strict";
  const NS = "http://www.w3.org/2000/svg";
  let sesion = null;

  const byId = (id) => document.getElementById(id);
  const controlesDe = (doc) => (doc && doc.scene.rig.controls) || {};

  /* El lienzo vivo. Mismo camino que usa el correctivo de articulación. */
  const svgVivo = () => byId("dzCanvas") && byId("dzCanvas").querySelector(":scope > svg");

  const aUsuario = (svg, ev) =>
    new DOMPoint(ev.clientX, ev.clientY).matrixTransform(svg.getScreenCTM().inverse());

  /* La sesión muere sólo si cambió lo que la SOSTIENE: otro documento, el
   * lienzo desconectado, el modo rig apagado o el 3D adelante.
   *
   * Los cambios en `rig.controls` NO la matan. Antes sí, y era un defecto: el
   * editor se cerraba solo al cambiarle el mando a un control desde el panel,
   * que es justo lo que este editor viene a hacer. Ahora eso repinta. */
  function vigente(s) {
    return DZ.doc === s.doc && s.svg.isConnected && DZ.rigMode &&
      byId("l3dView") && byId("l3dView").hidden;
  }

  function cerrar() {
    const s = sesion;
    if (!s) return;
    sesion = null;
    clearInterval(s.reloj);
    s.abort.abort();
    s.overlay.remove();
  }

  function avisar(texto) {
    const h = byId("rigControlHint");
    if (h) h.textContent = texto;
    if (typeof dzSetStatus === "function") dzSetStatus(texto);
  }

  /* ── dibujo de los mandos ────────────────────────────────────────────── */

  const LARGO_DESLIZADOR = 60;
  const LADO_PUNTO2D = 44;

  function ejeDe(control) {
    return control.link && control.link.axis === "y" ? "y" : "x";
  }

  function normalizado(s, control) {
    const min = Math.min(control.min, control.max);
    const max = Math.max(control.min, control.max);
    const valor = s.doc.scene.rigChannelValue(
      LOW.animation.rigControlPath(control.id), s.doc.frame, control.default);
    return max - min < 1e-9 ? 0 : (valor - min) / (max - min);
  }

  function mando(s, control) {
    const g = document.createElementNS(NS, "g");
    g.dataset.control = control.id;
    g.style.cssText = "pointer-events:all;cursor:grab";
    const t = normalizado(s, control);
    const valor = s.doc.scene.rigChannelValue(
      LOW.animation.rigControlPath(control.id), s.doc.frame, control.default);

    if (control.kind === "selector") {
      // Una casilla por opción; la activa queda rellena.
      (control.options || []).forEach((op, i) => {
        const r = document.createElementNS(NS, "rect");
        r.setAttribute("x", control.x + i * 18);
        r.setAttribute("y", control.y);
        r.setAttribute("width", "14");
        r.setAttribute("height", "14");
        r.setAttribute("rx", "3");
        r.setAttribute("fill", Math.abs(valor - op.value) < 1e-6 ? "#9bf9d5" : "#1c1f22");
        r.setAttribute("stroke", "#9bf9d5");
        r.setAttribute("stroke-width", "1.5");
        r.dataset.opcion = String(op.value);
        r.style.cursor = "pointer";
        g.append(r);
      });
    } else if (control.kind === "point2d") {
      const caja = document.createElementNS(NS, "rect");
      caja.setAttribute("x", control.x);
      caja.setAttribute("y", control.y);
      caja.setAttribute("width", LADO_PUNTO2D);
      caja.setAttribute("height", LADO_PUNTO2D);
      caja.setAttribute("rx", "4");
      caja.setAttribute("fill", "rgba(28,31,34,0.5)");
      caja.setAttribute("stroke", "#9bf9d5");
      caja.setAttribute("stroke-width", "1.2");
      g.append(caja);
      const eje = ejeDe(control);
      const p = document.createElementNS(NS, "circle");
      p.setAttribute("cx", control.x + (eje === "x" ? t * LADO_PUNTO2D : LADO_PUNTO2D / 2));
      p.setAttribute("cy", control.y + (eje === "y" ? t * LADO_PUNTO2D : LADO_PUNTO2D / 2));
      p.setAttribute("r", "5");
      p.setAttribute("fill", "#ff9a65");
      p.dataset.tirador = "1";
      g.append(p);
    } else {
      const via = document.createElementNS(NS, "line");
      via.setAttribute("x1", control.x);
      via.setAttribute("y1", control.y);
      via.setAttribute("x2", control.x + LARGO_DESLIZADOR);
      via.setAttribute("y2", control.y);
      via.setAttribute("stroke", "#9bf9d5");
      via.setAttribute("stroke-width", "2");
      via.setAttribute("stroke-linecap", "round");
      g.append(via);
      const tirador = document.createElementNS(NS, "circle");
      tirador.setAttribute("cx", control.x + t * LARGO_DESLIZADOR);
      tirador.setAttribute("cy", control.y);
      tirador.setAttribute("r", "6");
      tirador.setAttribute("fill", "#ff9a65");
      tirador.setAttribute("stroke", "#303639");
      tirador.setAttribute("stroke-width", "1.5");
      tirador.dataset.tirador = "1";
      g.append(tirador);
    }

    const rotulo = document.createElementNS(NS, "text");
    rotulo.setAttribute("x", control.x);
    rotulo.setAttribute("y", control.y - 8);
    rotulo.setAttribute("fill", "#f4ecdd");
    rotulo.setAttribute("font-size", "10");
    rotulo.setAttribute("font-family", "system-ui");
    rotulo.textContent = control.name || control.id;
    rotulo.style.pointerEvents = "none";
    g.append(rotulo);
    return g;
  }

  function pintar(s) {
    s.capa.textContent = "";
    let colocados = 0;
    for (const control of Object.values(controlesDe(s.doc))) {
      if (!Number.isFinite(control.x) || !Number.isFinite(control.y)) continue;
      colocados++;
      s.capa.append(mando(s, control));
    }
    return colocados;
  }

  /* ── interacción ─────────────────────────────────────────────────────── */

  function conectar(s) {
    const signal = s.abort.signal;

    s.capa.addEventListener("pointerdown", (ev) => {
      const grupo = ev.target.closest && ev.target.closest("[data-control]");
      if (!grupo) return;
      const control = controlesDe(s.doc)[grupo.dataset.control];
      if (!control) return;
      ev.preventDefault();
      ev.stopPropagation();

      // Selector: la casilla clickeada ES el valor. No hay arrastre.
      if (ev.target.dataset.opcion != null) {
        s.doc.setRigControlValue(control.id, s.doc.frame, +ev.target.dataset.opcion);
        s.huella = JSON.stringify(s.doc.scene.rig.controls);
        pintar(s);
        aplicar(s);
        avisar("Control en " + ev.target.dataset.opcion + " · Ctrl+Z lo deshace");
        return;
      }
      if (ev.target.dataset.tirador == null) return;

      ev.target.setPointerCapture(ev.pointerId);
      s.arrastre = { id: control.id, pointer: ev.pointerId };
      s.capa.querySelectorAll("[data-control]").forEach((g) => { g.style.cursor = "grabbing"; });
    }, { signal });

    s.capa.addEventListener("pointermove", (ev) => {
      if (!s.arrastre || s.arrastre.pointer !== ev.pointerId) return;
      const control = controlesDe(s.doc)[s.arrastre.id];
      if (!control) return;
      ev.preventDefault();
      const p = aUsuario(s.svg, ev);
      const min = Math.min(control.min, control.max);
      const max = Math.max(control.min, control.max);
      const eje = control.kind === "point2d" ? ejeDe(control) : "x";
      const largo = control.kind === "point2d" ? LADO_PUNTO2D : LARGO_DESLIZADOR;
      const bruto = eje === "y" ? (p.y - control.y) / largo : (p.x - control.x) / largo;
      const valor = min + Math.max(0, Math.min(1, bruto)) * (max - min);
      // Arrastrar PREVISUALIZA escribiendo directo en el canal; al soltar se
      // compromete con setRigControlValue. Es una decision de RENDIMIENTO, no
      // de correccion: se midio que comprometer en cada movimiento da el mismo
      // resultado (una clave, un paso de historial) porque el modelo coalesce.
      // Esto evita abrir una transaccion de historial por cada evento.
      const canal = s.doc.scene.rigChannel(LOW.animation.rigControlPath(control.id));
      if (canal) canal.keys[Math.max(1, Math.round(s.doc.frame))] = valor;
      s.previo = valor;
      pintar(s);
      aplicar(s);
    }, { signal });

    const soltar = (ev) => {
      if (!s.arrastre || s.arrastre.pointer !== ev.pointerId) return;
      const id = s.arrastre.id;
      const valor = s.previo;
      s.arrastre = null;
      s.previo = null;
      s.capa.querySelectorAll("[data-control]").forEach((g) => { g.style.cursor = "grab"; });
      if (valor == null) return;
      // Una clave, no cien: el arrastre previsualizó, esto la deja en el historial.
      s.doc.setRigControlValue(id, s.doc.frame, valor);
      s.huella = JSON.stringify(s.doc.scene.rig.controls);
      pintar(s);
      aplicar(s);
      avisar("Clave en el cuadro " + Math.round(s.doc.frame) + " · Ctrl+Z la deshace");
    };
    s.capa.addEventListener("pointerup", soltar, { signal });
    s.capa.addEventListener("pointercancel", soltar, { signal });

    // Modo COLOCAR: el próximo clic sobre el dibujo fija la posición.
    s.svg.addEventListener("pointerdown", (ev) => {
      if (!s.colocando) return;
      ev.preventDefault();
      ev.stopPropagation();
      const p = aUsuario(s.svg, ev);
      const id = s.colocando;
      s.colocando = null;
      s.doc.setRigControlWidget(id, { x: Math.round(p.x), y: Math.round(p.y) });
      s.huella = JSON.stringify(s.doc.scene.rig.controls);
      pintar(s);
      avisar("Mando colocado · arrastralo para animarlo");
    }, { signal, capture: true });

    document.addEventListener("keydown", (ev) => {
      if (ev.key !== "Escape" || !sesion) return;
      ev.preventDefault();
      ev.stopImmediatePropagation();
      cerrar();
      avisar("Editor de mandos cerrado");
    }, { capture: true, signal });
  }

  function aplicar(s) {
    if (typeof dzRigApplyLive === "function") dzRigApplyLive(s.doc.frame);
    if (typeof dzMarkDirty === "function") dzMarkDirty();
  }

  /* ── ciclo de vida ───────────────────────────────────────────────────── */

  function abrir() {
    cerrar();
    const doc = DZ.doc;
    const svg = svgVivo();
    if (!doc) { avisar("Abrí un documento primero"); return false; }
    if (!svg) { avisar("El dibujo no está expuesto en este cuadro"); return false; }
    if (!DZ.rigMode) { avisar("Entrá al modo rig para manejar los mandos"); return false; }
    if (!Object.keys(controlesDe(doc)).length) {
      avisar("Todavía no hay controles · creá uno en el panel de diales");
      return false;
    }

    const overlay = document.createElement("div");
    overlay.className = "rig-control-overlay";
    overlay.style.cssText = "position:fixed;inset:0;pointer-events:none;z-index:10001";
    const capa = document.createElementNS(NS, "svg");
    // La capa no intercepta: sólo los mandos tienen pointer-events, así el
    // dibujo de abajo sigue clickeable.
    capa.style.cssText = "width:100%;height:100%;position:absolute;pointer-events:none";
    capa.setAttribute("aria-label", "Mandos de control sobre el personaje");
    overlay.append(capa);
    document.body.append(overlay);

    const s = sesion = {
      doc, svg, capa, overlay,
      abort: new AbortController(),
      arrastre: null, previo: null, colocando: null,
      huella: JSON.stringify(doc.scene.rig.controls),
      vista: null,
    };

    conectar(s);
    const colocados = pintar(s);

    // Repintar cuando cambia el encuadre (pan/zoom) y morir si cambió la escena.
    s.reloj = setInterval(() => {
      if (!vigente(s)) {
        cerrar();
        avisar("Cambió la escena; se cerró el editor de mandos");
        return;
      }
      // Repintar por dos motivos: se movió el encuadre (pan/zoom) o cambiaron
      // los controles desde cualquier lado (el panel, otro mando, un Undo).
      const m = s.svg.getScreenCTM();
      const clave = m ? [m.a, m.b, m.c, m.d, m.e, m.f].join(",") : "";
      const huella = JSON.stringify(DZ.doc.scene.rig.controls);
      if (s.vista !== clave || s.huella !== huella) {
        s.vista = clave; s.huella = huella; pintar(s);
      }
    }, 150);

    avisar(colocados
      ? "Arrastrá un mando para animarlo · Escape cierra"
      : "Ningún mando colocado todavía · usá «Colocar sobre el personaje»");
    return true;
  }

  function colocar(id) {
    if (!sesion && !abrir()) return false;
    const control = controlesDe(sesion.doc)[id];
    if (!control) { avisar("Elegí un control de la lista"); return false; }
    sesion.colocando = id;
    avisar("Clic sobre el personaje para poner el mando");
    return true;
  }

  function init() {
    const panel = byId("dzRigPanel");
    if (!panel) return;
    const seccion = document.createElement("section");
    seccion.className = "rig2-section";
    seccion.dataset.rigSection = "pose";
    seccion.innerHTML =
      '<div class="rig2-title"><b>Mandos sobre el personaje</b></div>' +
      '<p id="rigControlHint" class="rig2-hint">Poné los diales sobre el dibujo y animalos ahí mismo.</p>' +
      '<button id="rigControlEditar" style="width:100%">Editar mandos…</button>' +
      '<button id="rigControlColocar" style="width:100%;margin-top:6px">Colocar sobre el personaje</button>';
    const ancla = byId("rigDialLista") && byId("rigDialLista").closest("section");
    if (ancla) ancla.after(seccion); else panel.append(seccion);

    byId("rigControlEditar").onclick = abrir;
    byId("rigControlColocar").onclick = () => {
      const id = typeof dzDialSeleccionado === "function" ? dzDialSeleccionado() : null;
      if (!id) { avisar("Elegí primero un control en la lista de diales"); return; }
      colocar(id);
    };
    LOW.rigging = LOW.rigging || {};
    LOW.rigging.controlUI = { abrir, cerrar, colocar, sesion: () => sesion };
  }

  if (document.readyState === "loading")
    document.addEventListener("DOMContentLoaded", init, { once: true });
  else init();
})();
