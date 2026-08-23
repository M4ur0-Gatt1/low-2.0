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

  const ANCHO = 16;        // px por frame; coincide con la escala legible del tema
  const EXTRA = 24;        // frames de más al final, para seguir armando

  class TimelineView {
    constructor(host, doc) {
      this.host = typeof host === "string" ? document.querySelector(host) : host;
      this.doc = doc;
      this.playback = null;
      this.onionEnabled = true;
      this.toggleOnion = null;
      this.openOnion = null;
      this.loadAudio = null;
      this.status = null;
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

    /** El tramo vive en el modelo, pero el export y el transporte leen los
     *  casilleros In/Out de la barra. Si se escribe uno solo, terminan
     *  diciendo cosas distintas: se arrastra el tramo y el export saca otro. */
    _escribirTramo(desde, hasta) {
      const doc = this.doc, sc = doc.scene;
      sc.range.in = desde;
      sc.range.out = hasta;
      const campoIn = document.querySelector("#tlIn"), campoOut = document.querySelector("#tlOut");
      if (campoIn) campoIn.value = desde;
      if (campoOut) campoOut.value = hasta;
      if (this.playback && this.playback.setRange) this.playback.setRange(desde, hasta);
      doc.touch(); doc.emit("frame");
    }

    /** Arrastrar un borde del tramo activo sobre la regla. */
    _arrastrarTramo(ev, borde, pista, total, tramo) {
      if (ev.button !== 0) return;
      ev.preventDefault(); ev.stopPropagation();      // que no haga scrub
      const doc = this.doc, sc = doc.scene;
      const pointerId = ev.pointerId;
      const rect = pista.getBoundingClientRect();
      const aFrame = (x) => Math.max(1, Math.min(total,
        1 + Math.floor((x - rect.left + pista.scrollLeft) / ANCHO)));
      const mover = (e2) => {
        if (e2.pointerId !== pointerId) return;
        const f = aFrame(e2.clientX);
        let a = borde === "in" ? f : tramo.in;
        let z = borde === "in" ? tramo.out : f;
        if (a > z) { const tmp = a; a = z; z = tmp; }
        // al arrastrarlo queda fijo: si lo dejara abierto, llevarlo al final
        // pareceria no hacer nada
        this._escribirTramo(a, z);
        this.render();
      };
      const soltar = (e2) => {
        if (e2 && e2.pointerId != null && e2.pointerId !== pointerId) return;
        document.removeEventListener("pointermove", mover);
        document.removeEventListener("pointerup", soltar);
        document.removeEventListener("pointercancel", soltar);
        const r = sc.playRange();
        if (this.status) this.status("Tramo activo: F" + r.in + " a F" + r.out +
          " \u00b7 " + (r.out - r.in + 1) + " cuadros \u00b7 doble clic en la regla para toda la escena");
      };
      document.addEventListener("pointermove", mover);
      document.addEventListener("pointerup", soltar);
      document.addEventListener("pointercancel", soltar);
    }
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

      // ── herramientas de celdas ──
      const tools = document.createElement("div"); tools.className = "tl2-tools";
      const group = () => { const g = document.createElement("span"); g.className = "tl2-toolgroup"; tools.appendChild(g); return g; };
      const button = (host, icon, title, action, active=false, badge="") => {
        const b = document.createElement("button");
        b.title = title; b.setAttribute("aria-label", title);
        b.className = (active ? "on " : "") + (badge ? "tl2-badge" : "");
        if (icon) b.innerHTML = `<svg class="tl2-icon" aria-hidden="true"><use href="#${icon}"></use></svg>`;
        if (badge) b.innerHTML += `<span aria-hidden="true">${badge}</span>`;
        b.onclick = action; host.appendChild(b); return b;
      };
      const selected = () => doc.cellSelection || { fromLayerId: doc.layerId, toLayerId: doc.layerId,
        anchorLayerId: doc.layerId, anchorFrame: doc.frame, from: doc.frame, to: doc.frame };
      const edit = group();
      button(edit, "i-blank-frame", "Crear un dibujo vacío en la celda actual", () => {
        if (doc.cell == null) doc.ensureDrawing();
        else { const d = doc.duplicateDrawing(doc.cell); if (d) doc.setCell(doc.frame, d.number); }
        doc.emit("frame");
      });
      button(edit, "i-level", "Crear un nivel y una columna", () => { doc.addLayer(); doc.emit("frame"); });
      const clipboard = group(), clip = animation.shortcuts && animation.shortcuts.clip;
      button(clipboard, "i-cut", "Cortar las celdas seleccionadas", () => {
        if (!clip) return; clip.range = doc.readCells(selected()); doc.clearCells(selected(), "Cortar rango");
      });
      button(clipboard, "i-copy", "Copiar las celdas seleccionadas", () => {
        if (!clip) return; clip.range = doc.readCells(selected()); if (this.status) this.status("Celdas copiadas");
      });
      button(clipboard, "i-paste", "Pegar desde la celda actual", () => {
        if (clip && clip.range) doc.pasteCells(clip.range, doc.layerId, doc.frame, { label: "Pegar rango" });
      });
      const timing = group();
      button(timing, "i-insert", "Insertar una celda antes del fotograma actual", () => doc.apply("insert", doc.frame, 1));
      button(timing, "i-eraser", "Vaciar las celdas sin borrar sus dibujos", () => doc.clearCells(selected(), "Vaciar rango"));
      button(timing, "i-exposure-less", "Acortar la exposición actual", () => doc.apply("stepChange", doc.frame, -1));
      button(timing, "i-exposure-more", "Extender la exposición actual", () => doc.apply("stepChange", doc.frame, +1));
      const sequence = group();
      button(sequence, "", "Exponer cada dibujo por un fotograma", () => { const s = selected(); doc.apply("step", s.from, s.to, 1); }, false, "1s");
      button(sequence, "", "Exponer cada dibujo por dos fotogramas", () => { const s = selected(); doc.apply("step", s.from, s.to, 2); }, false, "2s");
      button(sequence, "", "Exponer cada dibujo por tres fotogramas", () => { const s = selected(); doc.apply("step", s.from, s.to, 3); }, false, "3s");
      button(sequence, "i-autoexpose", "Completar los huecos sosteniendo el dibujo anterior", () => { const s = selected(); doc.apply("autoexpose", s.from, s.to); });
      button(sequence, "i-dedupe", "Dejar una celda por dibujo", () => { const s = selected(); doc.apply("dedupe", s.from, s.to); });
      button(sequence, "i-loop", "Repetir el rango seleccionado", () => { const s = selected(); doc.apply("repeat", s.from, s.to, 1); });
      button(sequence, "i-reverse", "Invertir el orden del rango seleccionado", () => { const s = selected(); doc.apply("reverse", s.from, s.to); });
      button(sequence, "i-swing", "Crear un ciclo ping-pong con el rango", () => { const s = selected(); doc.apply("swing", s.from, s.to); });
      const media = group();
      button(media, "i-onion", "Activar el papel cebolla", () => { if (this.toggleOnion) this.toggleOnion(); }, this.onionEnabled);
      button(media, "i-mixer", "Abrir los faders de papel cebolla", () => { if (this.openOnion) this.openOnion(); });
      button(media, "i-audio", "Cargar una pista de audio", () => { if (this.loadAudio) this.loadAudio(); });
      cont.appendChild(tools);

      // ── regla de frames ──
      const regla = document.createElement("div");
      regla.className = "tl2-ruler";
      const nombre = document.createElement("div");
      nombre.className = "tl2-name tl2-rulername";
      nombre.textContent = `${doc.frame} / ${sc.playRange().out}`;
      regla.appendChild(nombre);
      const pista = document.createElement("div");
      pista.className = "tl2-track";
      // TRAMO ACTIVO: de que cuadro a que cuadro se anima. Lo de afuera se
      // atenua y no se reproduce. Los dos bordes se arrastran, como la zona
      // activa de Toon Boom / OpenToonz; antes solo se podian escribir a mano.
      const ultimo = Math.max(1, sc.lastFrame() || 1);
      const abierto = !(sc.range.out > 0);
      const tramo = { in: Math.max(1, sc.range.in || 1),
                      out: abierto ? ultimo : Math.max(1, sc.range.out) };
      for (let f = 1; f <= total; f++) {
        const t = document.createElement("i");
        t.className = "tl2-tick" + (f % 6 === 1 ? " seg" : "") + (f === doc.frame ? " actual" : "")
          + (cameraKeys[f] ? " camkey" : "")
          + (f < tramo.in || f > tramo.out ? " fuera" : "")
          + (f === tramo.in ? " borde-in" : "") + (f === tramo.out ? " borde-out" : "");
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
          const ir = (x) => {
            const f = aFrame(x);
            if (f !== doc.frame) { doc.goTo(f); if (this.audio) this.audio.scrub(f); }
          };
          ir(ev.clientX);
          const mover = (e2) => ir(e2.clientX);
          const soltar = () => {
            document.removeEventListener("pointermove", mover);
            document.removeEventListener("pointerup", soltar);
          };
          document.addEventListener("pointermove", mover);
          document.addEventListener("pointerup", soltar);
        };
        // manija de cada borde: se agarra y se arrastra para mover el tramo
        for (const borde of (f === tramo.in ? ["in"] : []).concat(f === tramo.out ? ["out"] : [])) {
          const mango = document.createElement("b");
          mango.className = "tl2-mango " + borde;
          mango.title = borde === "in" ? "Primer cuadro del tramo \u2014 arrastr\u00e1"
                                       : "\u00daltimo cuadro del tramo \u2014 arrastr\u00e1";
          mango.onpointerdown = (ev) => this._arrastrarTramo(ev, borde, pista, total, tramo);
          t.appendChild(mango);
        }
        pista.appendChild(t);
      }
      // doble clic en un hueco de la regla: volver a toda la escena
      pista.ondblclick = (ev) => {
        if (ev.target.closest(".tl2-mango")) return;
        this._escribirTramo(1, 0);
        this.render();
        if (this.status) this.status("Tramo activo: toda la escena");
      };
      regla.appendChild(pista);
      cont.appendChild(regla);

      // ── mesa de luz rápida ──
      // Los marcadores se fijan sin mover el playhead: sirven para calcar una
      // pose lejana mientras se dibuja en el fotograma actual.
      const luz = document.createElement("div"); luz.className = "tl2-lighttable";
      const luzNombre = document.createElement("div"); luzNombre.className = "tl2-name";
      luzNombre.textContent = "Referencias";
      const limpiar = document.createElement("button"); limpiar.textContent = "Limpiar";
      limpiar.title = "Quitar todas las referencias fijas";
      limpiar.onclick = () => { doc.onionCfg = { ...(doc.onionCfg || {}), fixed: [] };
        doc.touch(); doc.emit("onion"); };
      luzNombre.appendChild(limpiar); luz.appendChild(luzNombre);
      const luzTrack = document.createElement("div"); luzTrack.className = "tl2-track";
      const cfg = animation.onion.config(doc.onionCfg);
      const fixed = new Set((cfg.fixed || []).map(Number));
      for (let f = 1; f <= total; f++) {
        const c = document.createElement("i"), drawing = doc.layer && doc.layer.cellAt(f);
        c.className = "tl2-lightcell" + (fixed.has(f) ? " marked " + (f < doc.frame ? "before" : "after") : "")
          + (f === doc.frame ? " current" : "") + (drawing == null ? " empty" : "");
        c.dataset.frame = String(f);
        c.title = drawing == null ? `Frame ${f}: no hay dibujo para fijar` :
          (fixed.has(f) ? `Quitar referencia fija del frame ${f}` : `Fijar el frame ${f} como referencia`);
        luzTrack.appendChild(c);
      }
      // Clic y arrastre pinta o borra una serie de referencias, igual que los
      // marcadores de la barra de tiempo de OpenToonz.
      luzTrack.onpointerdown = (event) => {
        if (event.button !== 0) return;
        const start = event.target.closest && event.target.closest(".tl2-lightcell");
        if (!start || start.classList.contains("empty") || start.classList.contains("current")) return;
        event.preventDefault();
        const values = new Set((cfg.fixed || []).map(Number));
        const turnOn = !values.has(+start.dataset.frame);
        const painted = new Set();
        const paint = (cell) => {
          if (!cell || cell.classList.contains("empty") || cell.classList.contains("current")) return;
          const frame = +cell.dataset.frame; if (painted.has(frame)) return; painted.add(frame);
          if (turnOn) values.add(frame); else values.delete(frame);
          cell.classList.toggle("marked", turnOn);
          cell.classList.toggle("before", turnOn && frame < doc.frame);
          cell.classList.toggle("after", turnOn && frame > doc.frame);
        };
        paint(start);
        const move = (e) => paint(document.elementFromPoint(e.clientX, e.clientY)?.closest?.(".tl2-lightcell"));
        const up = () => {
          document.removeEventListener("pointermove", move); document.removeEventListener("pointerup", up);
          doc.onionCfg = { ...cfg, fixed: [...values].sort((a, b) => a - b) };
          doc.touch(); doc.emit("onion");
        };
        document.addEventListener("pointermove", move); document.addEventListener("pointerup", up);
      };
      luz.appendChild(luzTrack); cont.appendChild(luz);

      // ── pista del esqueleto: una pose global reúne las claves de todas las
      // piezas sin inventar otro timeline. Doble clic clava; Alt+clic borra.
      const rigNodes = Object.values((sc.rig && sc.rig.nodes) || {});
      if (rigNodes.length) {
        const fila = document.createElement("div"); fila.className = "tl2-row tl2-rig";
        const cab = document.createElement("div"); cab.className = "tl2-name";
        const badge = document.createElement("span"); badge.textContent = "◇";
        const nombreRig = document.createElement("span"); nombreRig.textContent = "Esqueleto";
        cab.append(badge, nombreRig); fila.appendChild(cab);
        const track = document.createElement("div"); track.className = "tl2-track";
        for (let f = 1; f <= total; f++) {
          const keyed = rigNodes.some(node => node.keys && node.keys[f]);
          const c = document.createElement("i"); c.dataset.frame = String(f);
          c.className = "tl2-cell rig" + (keyed ? " rigkey" : "") + (f === doc.frame ? " actual" : "");
          c.title = keyed ? `Pose del esqueleto en F${f} · Alt+clic: borrar` : `F${f} · doble clic: crear pose global`;
          c.onclick = e => { if (e.altKey && keyed) doc.deleteRigPoseKeys(null, f); else doc.goTo(f); };
          c.ondblclick = () => {
            const poses = Object.fromEntries(rigNodes.map(node => [node.id, sc.rigPose(node.id, f)]));
            doc.setRigPoseKeys(poses, f, "Clave global del rig");
          };
          track.appendChild(c);
        }
        fila.appendChild(track); cont.appendChild(fila);
      }

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

      // ── pista de AUDIO (si hay) ──
      if (this.audio && this.audio.peaks.length) {
        const fila = document.createElement("div");
        fila.className = "tl2-row tl2-audio";
        const cab = document.createElement("div");
        cab.className = "tl2-name";
        const mudo = document.createElement("button");
        mudo.className = "tl2-eye";
        mudo.textContent = this.audio.muted ? "🔇" : "🔊";
        mudo.title = this.audio.muted ? "Activar el sonido" : "Silenciar";
        mudo.onclick = (e) => { e.stopPropagation(); this.audio.setMuted(!this.audio.muted); this.render(); };
        const nom = document.createElement("span");
        nom.textContent = this.audio.name || "audio";
        nom.title = "Arrastrá la onda para correr el audio y calzarlo con la acción";
        cab.append(mudo, nom);
        fila.appendChild(cab);

        const track = document.createElement("div");
        track.className = "tl2-track tl2-wave";
        for (let f = 1; f <= total; f++) {
          const pico = this.audio.peakAt(f);
          const b = document.createElement("i");
          b.className = "tl2-peak" + (f === doc.frame ? " actual" : "");
          b.style.setProperty("--h", Math.round(pico * 100) + "%");
          b.title = `Frame ${f}`;
          track.appendChild(b);
        }
        // arrastrar la onda = correr el audio en frames (calzarlo con la acción)
        track.onpointerdown = (ev) => {
          if (ev.button !== 0) return;
          ev.preventDefault();
          const x0 = ev.clientX, off0 = this.audio.offset;
          const mover = (e2) => {
            this.audio.offset = off0 + Math.round((e2.clientX - x0) / ANCHO);
            this.render();
          };
          const soltar = () => {
            document.removeEventListener("pointermove", mover);
            document.removeEventListener("pointerup", soltar);
            this.audio.setOffset(this.audio.offset);
          };
          document.addEventListener("pointermove", mover);
          document.addEventListener("pointerup", soltar);
        };
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
