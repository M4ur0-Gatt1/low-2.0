/* ══════════════════════════════════════════════════════════════════════════
   GIRO POR VISTAS DIBUJADAS (C04) — la interfaz

   El modelo ya sabe atar un slot a un control y elegir el dibujo que manda en
   cada punto del giro (`rigViewSet` en scene-model.js). Esto es la mitad que
   lo vuelve usable sin escribir comandos.

   La decisión de diseño que importa está en el pie del panel: **se muestra qué
   está dibujado y qué falta**. El plan de trabajo lo pide con todas las letras
   —«no presentar un giro 360 automático si faltan vistas»— y la razón es
   práctica: si la interfaz dibuja una rueda completa con dos dibujos, quien
   anima descubre el agujero recién cuando el personaje pega el salto.

   @module rigging/view-set-ui
   ══════════════════════════════════════════════════════════════════════════ */
(function (global) {
  "use strict";
  const LOW = global.LOW = global.LOW || {};
  const rigging = LOW.rigging = LOW.rigging || {};
  const $ = (sel) => document.querySelector(sel);
  const doc = () => (typeof DZ !== "undefined" && DZ.doc) ? DZ.doc : null;
  const avisar = (m) => { if (typeof dzSetStatus === "function") dzSetStatus(" " + m); };

  /** El slot con el que se está trabajando: el del hueso elegido. */
  function slotActual() {
    const d = doc();
    const hueso = (typeof DZ !== "undefined" && (DZ.rigSelectedId || (DZ.sel && DZ.sel.id))) || null;
    if (!d || !hueso) return null;
    const slots = Object.values(d.scene.rig.slots || {});
    return slots.find((s) => s.boneId === hueso) || null;
  }
  /** El juego de vistas del slot actual, si ya existe. */
  function juegoActual() {
    const d = doc(), slot = slotActual();
    if (!d || !slot) return null;
    return d.scene.rigViewSetsOf(slot.id)[0] || null;
  }
  const seleccionada = () => { const s = $("#rigVistasList"); return s && s.value ? s.value : null; };

  /** Crea el juego para el slot elegido, conducido por el control elegido. */
  function nuevo() {
    const d = doc(), slot = slotActual();
    if (!d) return;
    if (!slot) return avisar("Elegí primero la pieza (el hueso) cuya vista va a cambiar");
    if (juegoActual()) return avisar("Esa pieza ya tiene un juego de vistas");
    const control = $("#rigVistasDriver") && $("#rigVistasDriver").value;
    if (!control) return avisar("Hace falta un control que conduzca el giro: creá uno en Mandos");
    const ctl = d.scene.rigControl(control);
    const id = "vistas_" + slot.id.replace(/[^\w]+/g, "_");
    const ok = d.createRigViewSet(id, { slotId: slot.id, name: "Giro de " + (slot.name || slot.id),
      driverPath: LOW.animation.rigControlPath(control),
      min: ctl ? ctl.min : -90, max: ctl ? ctl.max : 90 });
    if (ok === false) return avisar("No pude crear el juego de vistas");
    avisar("Juego creado. Poné el control donde querés y tocá «Agregar vista acá»");
    sync();
  }

  /** Suma el dibujo activo del slot como la vista de este punto del control. */
  function agregar() {
    const d = doc(), juego = juegoActual();
    if (!d || !juego) return avisar("Creá primero el juego de vistas");
    const slot = d.scene.rig.slots[juego.slotId];
    const attachmentId = slot && slot.activeAttachmentId;
    if (!attachmentId) return avisar("Elegí en el slot el dibujo que va a ser esta vista");
    const at = Number($("#rigVistasAt") ? $("#rigVistasAt").value : 0) || 0;
    if (d.addRigView(juego.id, attachmentId, at) === false) {
      const ya = juego.views.find((v) => v.attachmentId === attachmentId);
      return avisar(ya ? "Ese dibujo ya es una vista de este juego (está en " + ya.at + ")"
                       : "No pude agregar esa vista");
    }
    avisar("Vista agregada en " + at);
    sync();
  }

  function quitar() {
    const d = doc(), juego = juegoActual(), id = seleccionada();
    if (!d || !juego || !id) return avisar("Elegí una vista de la lista");
    d.removeRigView(juego.id, id);
    avisar("Vista quitada del giro. El dibujo sigue estando: no se borró nada");
    sync();
  }

  /** Clava en el cuadro actual la vista que el control elige. El puente con
   *  las sustituciones de siempre, para forzar un cuadro puntual. */
  function clavar() {
    const d = doc(), juego = juegoActual();
    if (!d || !juego) return avisar("Creá primero el juego de vistas");
    if (d.bakeRigViewAt(juego.id, d.frame) === false) return avisar("No hay vista que clavar en este cuadro");
    avisar("Vista clavada en el cuadro " + d.frame);
    sync();
  }

  /** El texto que impide prometer un giro que nadie dibujó. */
  function textoCobertura(d, juego) {
    if (!juego) return "Todavía no hay juego de vistas para esta pieza.";
    const c = d.scene.rigViewSetCoverage(juego.id);
    if (!c.vistas) return "El juego está vacío: agregá el primer dibujo como vista.";
    if (c.vistas === 1) return "Hay UNA vista (en " + c.desde + "). Con un solo dibujo no hay giro: " +
      "agregá al menos otra.";
    const partes = ["Dibujado de " + c.desde + " a " + c.hasta + " · " + c.vistas + " vistas"];
    if (!c.completo) {
      const falta = [];
      if (!c.llegaAlMinimo) falta.push("hasta " + juego.driver.min);
      if (!c.llegaAlMaximo) falta.push("hasta " + juego.driver.max);
      partes.push("FALTA dibujar " + falta.join(" y ") + ": fuera de eso se sostiene el extremo, " +
        "no es un giro completo");
    }
    // 45° es el espaciado NORMAL de un giro (frente, tres cuartos, perfil):
    // avisar ahí sería dar un mal consejo. Se avisa del salto que de verdad
    // se va a notar, el que se saltea una vista intermedia.
    const grande = c.huecos.filter((h) => h.salto > 45);
    if (grande.length) partes.push("saltos grandes entre vistas (" +
      grande.map((h) => h.desde + "→" + h.hasta).join(", ") + "): ahí el cambio se va a notar");
    return partes.join(" · ");
  }

  /** Redibuja el panel con lo que dice el documento. */
  function sync() {
    const d = doc();
    const lista = $("#rigVistasList"), estado = $("#rigVistasEstado"), cob = $("#rigVistasCobertura");
    const selDriver = $("#rigVistasDriver");
    if (!lista || !estado) return;
    const juego = d ? juegoActual() : null;
    const slot = d ? slotActual() : null;

    // controles disponibles para conducir el giro
    if (selDriver) {
      const previo = selDriver.value;
      const controles = d ? Object.values(d.scene.rig.controls || {}) : [];
      selDriver.innerHTML = "";
      for (const c of controles) {
        const o = document.createElement("option");
        o.value = c.id; o.textContent = c.name || c.id;
        selDriver.appendChild(o);
      }
      if (previo && controles.some((c) => c.id === previo)) selDriver.value = previo;
      selDriver.disabled = !!juego || !controles.length;
      if (juego && juego.driver) {
        // con el juego creado, el conductor ya no se cambia desde acá: se ve
        const id = juego.driver.path.split("/").pop();
        if ([...selDriver.options].some((o) => o.value === id)) selDriver.value = id;
      }
    }

    const previa = lista.value;
    lista.innerHTML = "";
    for (const v of (juego ? juego.views : [])) {
      const att = d.scene.rigAttachment(v.attachmentId);
      const o = document.createElement("option");
      o.value = v.attachmentId;
      o.textContent = v.at + "  ·  " + (v.name || (att && att.name) || v.attachmentId);
      lista.appendChild(o);
    }
    if (previa) lista.value = previa;

    estado.textContent = !slot ? "elegí una pieza"
      : !juego ? "sin juego de vistas"
      : juego.views.length + " vista(s)";
    if (cob) cob.textContent = d ? textoCobertura(d, juego) : "";

    const hay = !!juego;
    const btn = (sel, on) => { const b = $(sel); if (b) b.disabled = !on; };
    btn("#rigVistasNew", !!slot && !hay);
    btn("#rigVistasAdd", hay);
    btn("#rigVistasBake", hay && juego.views.length > 0);
    btn("#rigVistasRemove", hay && !!lista.value);
  }

  function wire() {
    if (wire._puesto) return;
    wire._puesto = true;
    const on = (sel, fn) => { const b = $(sel); if (b) b.onclick = fn; };
    on("#rigVistasNew", nuevo);
    on("#rigVistasAdd", agregar);
    on("#rigVistasBake", clavar);
    on("#rigVistasRemove", quitar);
    const lista = $("#rigVistasList");
    if (lista) lista.onchange = () => sync();
  }

  /* SE ENGANCHA SOLO al refresco del panel de rig que ya existe, en vez de
     pedirle una linea a `app.js`: el presupuesto de §12 esta justo en el techo
     y la regla del repo es que lo nuevo no lo haga crecer. Se envuelve en
     `DOMContentLoaded` porque este modulo carga ANTES que app.js y ahi
     `dzSmartPanelSync` todavia no existe. La marca evita envolver dos veces. */
  function autoEnganche() {
    const previo = global.dzSmartPanelSync;
    if (typeof previo !== "function" || previo.__conVistas) return;
    const envuelto = function (...args) {
      const r = previo.apply(this, args);
      try { wire(); sync(); } catch (_) { /* el panel de vistas no puede tumbar al del rig */ }
      return r;
    };
    envuelto.__conVistas = true;
    global.dzSmartPanelSync = envuelto;
  }
  if (document.readyState === "loading")
    document.addEventListener("DOMContentLoaded", autoEnganche, { once: true });
  else autoEnganche();

  rigging.viewSetUI = { wire, sync, nuevo, agregar, quitar, clavar, juegoActual, slotActual,
    textoCobertura, autoEnganche };
  global.dzVistasPanelSync = sync;
})(window);
