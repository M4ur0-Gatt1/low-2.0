/* ══════════════════════════════════════════════════════════════════════════
   TIMELINE — la misma escena, leída en horizontal

   La X-sheet mira el tiempo hacia abajo (planilla de papel); la timeline lo
   mira hacia la derecha (una fila por capa). Son dos vistas del MISMO modelo,
   como en OpenToonz: lo que se cambia en una aparece en la otra al instante,
   porque ninguna guarda estado propio.

   Sirve para lo que la vertical no: ver muchas capas a la vez y arrastrar
   bloques de exposición de un lado a otro.

   @module animation/timeline-view
   ══════════════════════════════════════════════════════════════════════════ */
(function (global) {
  "use strict";
  const LOW = global.LOW = global.LOW || {};
  const animation = LOW.animation = LOW.animation || {};
  const icon = (id) => `<svg class="ico"><use href="#${id}"/></svg>`;

  const ANCHO = 13;        // px por frame
  const EXTRA = 24;        // frames de más al final, para seguir armando

  class TimelineView {
    constructor(host, doc) {
      this.host = typeof host === "string" ? document.querySelector(host) : host;
      this.doc = doc;
      this.playback = null;
      this._desuscribir = doc ? doc.subscribe((_d, reason) => this._docChanged(reason)) : null;
    }
    setDoc(doc) {
      if (this._desuscribir) this._desuscribir();
      this.doc = doc;
      this._desuscribir = doc ? doc.subscribe((_d, reason) => this._docChanged(reason)) : null;
      this.render();
    }
    dispose() { if (this._desuscribir) this._desuscribir(); if (this.host) this.host.innerHTML = ""; }
    _docChanged(reason) { if (reason === "frame") this._updateCursor(); else this.render(); }
    _updateCursor() {
      if (!this.host || !this.doc) return;
      this.host.querySelectorAll(".actual").forEach((n) => n.classList.remove("actual"));
      this.host.querySelectorAll(`[data-frame="${this.doc.frame}"]`).forEach((n) => n.classList.add("actual"));
      const label = this.host.querySelector(".tl2-rulername");
      if (label) label.textContent = `${this.doc.frame} / ${this.doc.scene.playRange().out}`;
      const active = this.host.querySelector(`.tl2-cell[data-layer-id="${this.doc.layerId}"][data-frame="${this.doc.frame}"]`);
      if (active && active.scrollIntoView) active.scrollIntoView({ inline: "nearest", block: "nearest" });
    }

    _frames() {
      const doc = this.doc;
      return Math.max((doc ? doc.scene.lastFrame() : 0) + EXTRA, 48, doc ? doc.frame + 8 : 0);
    }

    render() {
      if (!this.host || !this.doc) return;
      const doc = this.doc, sc = doc.scene;
      const total = this._frames();
      const cameraKeys = (sc.camera && sc.camera.keys) || {};
      const cont = document.createElement("div");
      cont.className = "tl2";

      // ── regla de frames ──
      const regla = document.createElement("div");
      regla.className = "tl2-ruler";
      const nombre = document.createElement("div");
      nombre.className = "tl2-name tl2-rulername";
      nombre.textContent = `${doc.frame} / ${sc.playRange().out}`;
      regla.appendChild(nombre);
      const pista = document.createElement("div");
      pista.className = "tl2-track";
      for (let f = 1; f <= total; f++) {
        const t = document.createElement("i");
        t.className = "tl2-tick" + (f % 6 === 1 ? " seg" : "") + (f === doc.frame ? " actual" : "")
          + (cameraKeys[f] ? " camkey" : "");
        if (cameraKeys[f]) t.title = `Clave de camara en el frame ${f}`;
        t.dataset.frame = String(f);
        // el número solo cada 6: con uno por frame no se lee nada
        if (f % 6 === 1) t.textContent = String(f);
        // SCRUBBING: arrastrar por la regla recorre la animación con la mano.
        // Es la forma real de revisar un movimiento — el playback te muestra el
        // resultado, el scrub te deja buscar el frame exacto donde algo falla.
        t.onpointerdown = (ev) => {
          if (ev.button !== 0) return;
          ev.preventDefault();
          if (this.playback) this.playback.stop();
          const rect = pista.getBoundingClientRect();
          const aFrame = (x) => Math.max(1, Math.min(total,
            1 + Math.floor((x - rect.left + pista.scrollLeft) / ANCHO)));
          doc.goTo(aFrame(ev.clientX));
          const mover = (e2) => doc.goTo(aFrame(e2.clientX));
          const soltar = () => {
            document.removeEventListener("pointermove", mover);
            document.removeEventListener("pointerup", soltar);
          };
          document.addEventListener("pointermove", mover);
          document.addEventListener("pointerup", soltar);
        };
        pista.appendChild(t);
      }
      regla.appendChild(pista);
      cont.appendChild(regla);

      // ── una fila por capa ──
      for (const ly of sc.layers) {
        const fila = document.createElement("div");
        fila.className = "tl2-row" + (ly.id === doc.layerId ? " sel" : "");

        const cab = document.createElement("div");
        cab.className = "tl2-name";
        const ojo = document.createElement("button");
        ojo.className = "tl2-eye";
        ojo.textContent = ly.visible ? "◉" : "◌";
        ojo.title = ly.visible ? "Ocultar la capa" : "Mostrar la capa";
        ojo.innerHTML = icon(ly.visible ? "i-eye" : "i-eye-off");
        ojo.setAttribute("aria-label", ojo.title);
        ojo.onclick = (e) => { e.stopPropagation(); doc.setLayerProperty(ly.id, "visible", !ly.visible,
          ly.visible ? "Ocultar capa" : "Mostrar capa"); };
        const lock = document.createElement("button");
        lock.className = "tl2-eye"; lock.innerHTML = icon(ly.locked ? "i-lock" : "i-unlock");
        lock.title = ly.locked ? "Desbloquear capa" : "Bloquear capa"; lock.setAttribute("aria-label", lock.title);
        lock.onclick = (e) => { e.stopPropagation(); doc.setLayerProperty(ly.id, "locked", !ly.locked,
          ly.locked ? "Desbloquear capa" : "Bloquear capa"); };
        const txt = document.createElement("span");
        txt.textContent = ly.name;
        cab.append(ojo, lock, txt);
        cab.onclick = () => doc.selectLayer(ly.id);
        fila.appendChild(cab);

        const track = document.createElement("div");
        track.className = "tl2-track";
        for (let f = 1; f <= total; f++) {
          const v = ly.cellAt(f);
          const hold = ly.isHold(f);
          const inicio = v != null && !hold;
          const c = document.createElement("i");
          c.dataset.frame = String(f); c.dataset.layerId = ly.id;
          c.className = "tl2-cell" + (v == null ? "" : " llena")
            + (inicio ? " inicio" : "") + (hold ? " hold" : "")
            + (this._inSelection(ly.id, f) ? " rango" : "")
            + (f === doc.frame ? " actual" : "");
          if (inicio) c.textContent = String(v);
          c.title = v == null ? `Frame ${f}` : `Frame ${f} · dibujo ${v}${hold ? " (sostenido)" : ""}`;
          c.onclick = (e) => {
            const prior = doc.cellSelection;
            if (e.shiftKey && prior) doc.selectCellRange(prior.anchorLayerId, prior.anchorFrame, ly.id, f);
            else doc.selectCellRange(ly.id, f, ly.id, f);
            doc.selectLayer(ly.id); doc.goTo(f); this.render();
          };
          // arrastrar un bloque de exposición a otro frame
          if (inicio) {
            c.draggable = true;
            c.ondragstart = (e) => {
              e.dataTransfer.setData("text/plain", JSON.stringify({
                layerId: ly.id, from: ly.holdStart(f), largo: ly.holdLength(f) }));
              e.dataTransfer.effectAllowed = "move";
            };
          }
          c.ondragover = (e) => { e.preventDefault(); };
          c.ondrop = (e) => {
            e.preventDefault();
            try {
              const d = JSON.parse(e.dataTransfer.getData("text/plain"));
              if (d.layerId !== ly.id) return;    // por ahora, dentro de la misma capa
              doc.apply("move", d.from, d.from + d.largo - 1, f);
            } catch (_) { /* soltaron cualquier cosa */ }
          };
          track.appendChild(c);
        }
        fila.appendChild(track);
        cont.appendChild(fila);
      }

      this.host.innerHTML = "";
      this.host.appendChild(cont);
      // seguir el cursor de reproducción sin marear
      const act = cont.querySelector(".tl2-cell.actual") || cont.querySelector(".tl2-tick.actual");
      if (act && act.scrollIntoView) act.scrollIntoView({ inline: "nearest", block: "nearest" });
    }
    _inSelection(layerId, frame) {
      const s = this.doc && this.doc.cellSelection;
      if (!s) return false;
      const layers = this.doc.scene.layers, i = layers.findIndex((l) => l.id === layerId);
      const a = layers.findIndex((l) => l.id === s.fromLayerId), b = layers.findIndex((l) => l.id === s.toLayerId);
      return i >= a && i <= b && frame >= s.from && frame <= s.to;
    }
  }

  animation.TimelineView = TimelineView;
  animation.TL_ANCHO = ANCHO;
})(window);
