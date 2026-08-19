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

  const ANCHO = 13;        // px por frame
  const EXTRA = 24;        // frames de más al final, para seguir armando

  class TimelineView {
    constructor(host, doc) {
      this.host = typeof host === "string" ? document.querySelector(host) : host;
      this.doc = doc;
      this.playback = null;
      this._desuscribir = doc ? doc.subscribe(() => this.render()) : null;
    }
    setDoc(doc) {
      if (this._desuscribir) this._desuscribir();
      this.doc = doc;
      this._desuscribir = doc ? doc.subscribe(() => this.render()) : null;
      this.render();
    }
    dispose() { if (this._desuscribir) this._desuscribir(); if (this.host) this.host.innerHTML = ""; }

    _frames() {
      const doc = this.doc;
      return Math.max((doc ? doc.scene.lastFrame() : 0) + EXTRA, 48, doc ? doc.frame + 8 : 0);
    }

    render() {
      if (!this.host || !this.doc) return;
      const doc = this.doc, sc = doc.scene;
      const total = this._frames();
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
        t.className = "tl2-tick" + (f % 6 === 1 ? " seg" : "") + (f === doc.frame ? " actual" : "");
        // el número solo cada 6: con uno por frame no se lee nada
        if (f % 6 === 1) t.textContent = String(f);
        t.onclick = () => doc.goTo(f);
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
        ojo.onclick = (e) => { e.stopPropagation(); ly.visible = !ly.visible; doc.touch(); doc.emit("layers"); };
        const txt = document.createElement("span");
        txt.textContent = ly.name;
        cab.append(ojo, txt);
        cab.onclick = () => doc.selectLayer(ly.id);
        fila.appendChild(cab);

        const track = document.createElement("div");
        track.className = "tl2-track";
        for (let f = 1; f <= total; f++) {
          const v = ly.cellAt(f);
          const hold = ly.isHold(f);
          const inicio = v != null && !hold;
          const c = document.createElement("i");
          c.className = "tl2-cell" + (v == null ? "" : " llena")
            + (inicio ? " inicio" : "") + (hold ? " hold" : "")
            + (f === doc.frame ? " actual" : "");
          if (inicio) c.textContent = String(v);
          c.title = v == null ? `Frame ${f}` : `Frame ${f} · dibujo ${v}${hold ? " (sostenido)" : ""}`;
          c.onclick = () => { doc.selectLayer(ly.id); doc.goTo(f); };
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
  }

  animation.TimelineView = TimelineView;
  animation.TL_ANCHO = ANCHO;
})(window);
