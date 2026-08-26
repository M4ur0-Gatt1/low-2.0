/* ══════════════════════════════════════════════════════════════════════════
   PALETA — el panel

   La paleta vieja de LOW era un tacho de colores en `localStorage`: hacer clic
   pintaba lo seleccionado con un color literal y ahí terminaba la historia. Lo
   que se ve acá es otra cosa: cada casillero es un ESTILO NUMERADO de la
   escena, y el número es lo que queda escrito en el trazo. Mover el selector
   de color recolorea, en vivo, todo lo que usa ese estilo — en todos los
   dibujos, expuestos o no.

   Por eso cada casillero muestra su número y cuántos elementos lo usan: es la
   información que hace falta para animarse a tocar un color sin miedo, y para
   saber cuál está de adorno.

   El botón "Adoptar" existe porque nadie empieza de cero: mete en la paleta los
   colores de lo que ya estaba dibujado, sin cambiar cómo se ve. Sin eso la
   paleta gobernaría solo lo nuevo.

   @module animation/palette-view
   ══════════════════════════════════════════════════════════════════════════ */
(function (global) {
  "use strict";
  const LOW = global.LOW = global.LOW || {};
  const animation = LOW.animation = LOW.animation || {};

  class PaletteView {
    constructor(host, doc, opts = {}) {
      this.host = typeof host === "string" ? document.querySelector(host) : host;
      this.doc = doc;
      this.onPick = opts.onPick || null;      // avisa qué estilo quedó activo
      this.current = opts.current || null;    // índice del estilo en uso
      this._sub(doc);
    }
    _sub(doc) {
      if (this._desuscribir) this._desuscribir();
      this._desuscribir = doc ? doc.subscribe((_d, m) => {
        if (m === "palette" || m === "content" || m === "level" || m === "layer") this.render();
      }) : null;
    }
    setDoc(doc) { this.doc = doc; this._sub(doc); this.render(); }
    dispose() { if (this._desuscribir) this._desuscribir(); if (this.host) this.host.innerHTML = ""; }

    /** El estilo activo, o el primero de la paleta si el activo ya no está. */
    activo() {
      const pal = this.doc && this.doc.palette;
      if (!pal) return null;
      return pal.byIndex(this.current) || pal.styles[0] || null;
    }
    setCurrent(i) {
      const pal = this.doc && this.doc.palette;
      const st = pal && pal.byIndex(i);
      if (!st) return false;
      this.current = st.index;
      if (this.onPick) this.onPick(st);
      this.render();
      return true;
    }

    render() {
      if (!this.host || !this.doc) return;
      const doc = this.doc, P = animation.palette;
      const pal = doc.palette;
      if (!pal) { this.host.innerHTML = ""; return; }
      const uso = P.usage(doc.scene, pal);
      const sueltos = P.orphans(doc.scene, pal);
      if (!pal.byIndex(this.current)) this.current = pal.styles[0] ? pal.styles[0].index : null;

      const box = document.createElement("div");
      box.className = "pal2" + (pal.locked ? " bloqueada" : "");

      // ── encabezado: nombre de la paleta y qué se puede hacer con ella ──
      const head = document.createElement("div");
      head.className = "pal2-head";
      const nombre = document.createElement("b");
      nombre.className = "pal2-name";
      nombre.textContent = pal.name;
      nombre.title = "Doble clic para renombrar la paleta";
      nombre.ondblclick = () => {
        const n = prompt("Nombre de la paleta:", pal.name);
        if (n != null && n.trim()) { pal.name = n.trim(); doc.touch(); doc.emit("palette"); }
      };
      const add = document.createElement("button");
      add.className = "pal2-btn"; add.textContent = "+";
      add.title = "Estilo nuevo, con el color del estilo activo";
      add.onclick = () => {
        const base = this.activo();
        const st = doc.addStyle(base ? base.color : "#000000");
        if (st) this.setCurrent(st.index);
      };
      const adoptar = document.createElement("button");
      adoptar.className = "pal2-btn pal2-adopt"; adoptar.textContent = "Adoptar";
      adoptar.title = "Meter en la paleta los colores de lo que ya está dibujado " +
                      "(no cambia cómo se ve: habilita recolorearlo)";
      adoptar.onclick = () => {
        const r = doc.adoptColors();
        if (!r || !r.elementos) { this._aviso("Todo lo dibujado ya usa la paleta."); return; }
        this._aviso(`${r.elementos} elemento(s) entraron a la paleta` +
                    (r.estilosNuevos ? ` · ${r.estilosNuevos} estilo(s) nuevo(s)` : ""));
      };
      if (pal.locked) {
        // el modelo canonico permite bloquear una paleta; si esta bloqueada, el
        // panel no ofrece lo que despues el modelo va a rechazar
        add.disabled = adoptar.disabled = true;
        add.title = adoptar.title = "La paleta esta bloqueada";
      }
      head.append(nombre, add, adoptar);
      box.appendChild(head);

      // ── los casilleros ────────────────────────────────────────────────
      const grid = document.createElement("div");
      grid.className = "pal2-grid";
      for (const st of pal.styles) {
        const u = uso[st.index] || { total: 0 };
        const cel = document.createElement("div");
        cel.className = "pal2-item" + (st.index === this.current ? " actual" : "") +
                        (u.total ? "" : " sinuso");
        cel.title = `${(st.name || `Estilo ${st.index}`)} · ${st.color} · ` +
                    (u.total ? `lo usan ${u.total} elemento(s)` : "no lo usa nada todavía") +
                    "\nclic: activarlo para dibujar · doble clic: renombrar";

        const sw = document.createElement("i");
        sw.className = "pal2-sw";
        sw.style.background = st.color;
        const num = document.createElement("b");
        num.className = "pal2-num";
        num.textContent = st.index;
        const nom = document.createElement("span");
        nom.className = "pal2-lbl";
        nom.textContent = (st.name || `Estilo ${st.index}`);
        const cuenta = document.createElement("i");
        cuenta.className = "pal2-use";
        cuenta.textContent = u.total || "";

        // El selector de color va adentro del casillero: recolorear es la
        // operación principal de una paleta, no puede estar a dos clics.
        const col = document.createElement("input");
        col.type = "color"; col.value = st.color; col.className = "pal2-color";
        col.title = "Cambiar el color de este estilo (recolorea todo lo que lo usa)";
        let desde = null;
        col.oninput = () => {
          if (desde == null) desde = st.color;         // color de partida, para el historial
          doc.setStyleColor(st.index, col.value, false);
          sw.style.background = col.value;             // sin re-render: no se pierde el foco
        };
        col.onchange = () => {
          doc.setStyleColor(st.index, col.value, true, desde);
          desde = null;
          if (st.index === this.current && this.onPick) this.onPick(st);
        };
        col.onclick = (e) => e.stopPropagation();
        if (pal.locked) { col.disabled = true; col.title = "La paleta esta bloqueada"; }

        cel.append(sw, num, nom, cuenta, col);
        cel.onclick = () => this.setCurrent(st.index);
        cel.ondblclick = () => {
          if (pal.locked) return;
          const n = prompt(`Nombre del estilo ${st.index}:`, st.name);
          if (n != null) doc.renameStyle(st.index, n.trim());
        };
        cel.oncontextmenu = (e) => { e.preventDefault(); this._menu(e, st, u, pal); };
        grid.appendChild(cel);
      }
      box.appendChild(grid);

      // ── referencias a estilos que ya no existen ────────────────────────
      if (sueltos.length) {
        const aviso = document.createElement("div");
        aviso.className = "pal2-orphans";
        aviso.textContent = `Hay trazos que apuntan a estilos borrados (${sueltos.join(", ")}): ` +
                            "se ven con su último color. Clic derecho en un estilo → " +
                            "\"Traer los sueltos\" para reasignarlos.";
        box.appendChild(aviso);
      }

      const pie = document.createElement("div");
      pie.className = "pal2-foot";
      const act = this.activo();
      pie.textContent = pal.locked
        ? "La paleta está bloqueada: se puede dibujar con sus estilos, no cambiarlos."
        : act ? `Dibujás con el estilo ${act.index} · ${(act.name || `Estilo ${act.index}`)}`
              : "La paleta está vacía";
      box.appendChild(pie);

      this.host.innerHTML = "";
      this.host.appendChild(box);
    }

    _aviso(txt) {
      const pie = this.host.querySelector(".pal2-foot");
      if (pie) pie.textContent = txt;
      if (global.dzSetStatus) global.dzSetStatus(" " + txt);
    }

    _menu(e, st, u, pal) {
      const doc = this.doc, P = animation.palette;
      document.querySelectorAll(".ls2-menu").forEach((m) => m.remove());
      const m = document.createElement("div");
      m.className = "ls2-menu";
      m.style.left = e.clientX + "px";
      m.style.top = e.clientY + "px";
      const item = (txt, fn) => {
        const b = document.createElement("button");
        b.textContent = txt;
        b.onclick = () => { m.remove(); fn(); };
        m.appendChild(b);
      };
      item("Activarlo para dibujar", () => this.setCurrent(st.index));
      item("Duplicar el estilo", () => {
        const nuevo = doc.addStyle(st.color, st.name ? st.name + " (copia)" : "");
        if (nuevo) this.setCurrent(nuevo.index);
      });
      const otros = pal.styles.filter((s) => s.index !== st.index);
      if (u.total && otros.length) {
        item(`Pasar sus ${u.total} elemento(s) a otro estilo…`, () => {
          const n = prompt(`Pasar lo que usa el estilo ${st.index} al estilo número:`,
                           String(otros[0].index));
          if (n == null) return;
          const movidos = doc.reassignStyle(st.index, parseInt(n, 10));
          this._aviso(movidos ? `${movidos} elemento(s) pasaron al estilo ${parseInt(n, 10)}`
                              : "Ese estilo no existe: no se movió nada");
        });
      }
      const sueltos = P.orphans(doc.scene, pal);
      if (sueltos.length) {
        item(`Traer los sueltos (${sueltos.join(", ")}) a este estilo`, () => {
          let total = 0;
          for (const i of sueltos) total += doc.reassignStyle(i, st.index);
          this._aviso(`${total} elemento(s) sueltos ahora usan el estilo ${st.index}`);
        });
      }
      item("Borrar el estilo", () => {
        if (u.total) {
          this._aviso(`No se puede borrar: ${u.total} elemento(s) usan el estilo ${st.index}. Reasignalos primero.`);
          return;
        }
        if (!doc.removeStyle(st.index)) this._aviso("El estilo no pudo borrarse");
      });
      document.body.appendChild(m);
      const cerrar = () => { m.remove(); document.removeEventListener("pointerdown", cerrar); };
      setTimeout(() => document.addEventListener("pointerdown", cerrar), 0);
    }
  }

  animation.PaletteView = PaletteView;
})(window);
