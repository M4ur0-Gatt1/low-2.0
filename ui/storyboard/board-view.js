/* ══════════════════════════════════════════════════════════════════════════
   STORYBOARD — panel de paneles y generador de tomas

   Vista del `Scene.storyboard`: la lista de paneles y, para el que esté
   elegido, el generador de cámara. Pedís «plano medio, contrapicado» y la
   cámara se ubica sola; el encuadre se dibuja encima de la figura para que la
   decisión se vea antes de aceptarla.

   No guarda estado propio: todo lo que se edita va por comandos de LowDoc, así
   que entra en Undo y se guarda con la escena. Lo único que vive acá es qué
   panel está seleccionado, que es cursor de interfaz, no obra.

   @module storyboard/board-view
   ══════════════════════════════════════════════════════════════════════════ */
(function (global) {
  "use strict";
  const LOW = global.LOW = global.LOW || {};
  const storyboard = LOW.storyboard = LOW.storyboard || {};

  class BoardView {
    constructor(host, doc) {
      this.host = typeof host === "string" ? document.querySelector(host) : host;
      this.doc = doc;
      this.selectedId = null;
      this.status = null;
      this._desuscribir = doc ? doc.subscribe((_d, reason) => {
        if (reason === "storyboard" || reason === "frame") this.render();
      }) : null;
    }
    setDoc(doc) {
      if (this._desuscribir) this._desuscribir();
      this.doc = doc;
      this._desuscribir = doc ? doc.subscribe((_d, reason) => {
        if (reason === "storyboard" || reason === "frame") this.render();
      }) : null;
      this.render();
    }
    dispose() { if (this._desuscribir) this._desuscribir(); if (this.host) this.host.innerHTML = ""; }

    _shots() { return storyboard.shots; }
    _selected() {
      const boards = this.doc ? this.doc.scene.storyboard.boards : [];
      if (!boards.length) return null;
      return boards.find((b) => b.id === this.selectedId) || boards[0];
    }
    /** La figura de referencia del panel. Sin una, el generador no tiene con
     *  qué medir el encuadre: se usa la de fábrica y se dice cuál es. */
    _subject(board) {
      // Quien manda es la figura ENFOCADA del escenario: el plano se mide sobre
      // alguien concreto, no sobre una figura abstracta. `subject` queda de
      // respaldo para paneles viejos que todavía no tienen reparto.
      const shot = board && board.shot;
      const cast = (shot && shot.cast) || [];
      const foco = cast.find((f) => f.id === (shot && shot.focus)) || cast[0];
      if (foco) return { x: foco.x, y: 0, z: foco.z, height: foco.height };
      return (shot && shot.subject) || this._shots().DEFAULT_SUBJECT;
    }
    _aspect() {
      const sc = this.doc && this.doc.scene;
      return sc && sc.height > 0 ? sc.width / sc.height : this._shots().DEFAULT_ASPECT;
    }

    /** Regenera la cámara del panel con el tipo y ángulo elegidos, conservando
     *  el lente: cambiar de plano no le cambia la óptica al director. */
    _regenerate(board, patch) {
      const shots = this._shots();
      const shot = { ...board.shot, ...patch };
      const camera = shots.frameShot(shot.type, this._subject(board),
        shot.camera || {}, { angle: shot.angle, aspect: this._aspect() });
      this.doc.updateStoryboardBoard(board.id, { shot: { ...shot, camera } }, "Encuadrar la toma");
      if (this.status) {
        const tipo = shots.SHOT_TYPES.find((t) => t.id === camera.shotType);
        this.status(`Toma: ${tipo ? tipo.name : camera.shotType} · ${tipo ? tipo.framing : ""}`);
      }
    }

    render() {
      if (!this.host || !this.doc) return;
      const shots = this._shots(), sc = this.doc.scene;
      const boards = sc.storyboard.boards, tiempos = sc.boardTiming();
      const elegido = this._selected();
      this.selectedId = elegido ? elegido.id : null;
      this.host.innerHTML = "";

      const raiz = document.createElement("div");
      raiz.className = "sb2";

      // ── barra: agregar y quitar paneles ──
      const barra = document.createElement("div"); barra.className = "sb2-tools";
      const boton = (texto, titulo, accion, extra = "") => {
        const b = document.createElement("button");
        b.type = "button"; b.textContent = texto; b.title = titulo;
        b.setAttribute("aria-label", titulo);
        if (extra) b.className = extra;
        b.onclick = accion; barra.appendChild(b); return b;
      };
      // Un panel nuevo nace con una toma REAL, no vacío: esto es un generador,
      // así que agregar un panel ya tiene que darte una cámara que mirar.
      const nuevoPanel = (at) => {
        const subject = shots.DEFAULT_SUBJECT;
        const camera = shots.frameShot("plano-medio", subject, {}, { aspect: this._aspect() });
        const id = this.doc.addStoryboardBoard({ duration: this.doc.scene.fps || 24,
          shot: { type: "plano-medio", angle: "nivel", camera, subject,
            cast: [{ id: "fig_1", x: 0, z: 0, height: subject.height, pose: "de-pie" }],
            focus: "fig_1" } }, at);
        this.selectedId = id; this.render();
      };
      boton("+ Panel", "Agregar un panel al final", () => nuevoPanel(null), "primary");
      boton("+ Antes", "Insertar un panel antes del elegido", () => {
        const at = boards.findIndex((b) => b.id === this.selectedId);
        nuevoPanel(at < 0 ? 0 : at);
      }).disabled = !elegido;
      boton("↑", "Mover el panel hacia atrás", () => {
        const at = boards.findIndex((b) => b.id === this.selectedId);
        if (at > 0) this.doc.moveStoryboardBoard(this.selectedId, at - 1);
      }).disabled = !elegido || boards[0] === elegido;
      boton("↓", "Mover el panel hacia adelante", () => {
        const at = boards.findIndex((b) => b.id === this.selectedId);
        if (at >= 0 && at < boards.length - 1) this.doc.moveStoryboardBoard(this.selectedId, at + 1);
      }).disabled = !elegido || boards[boards.length - 1] === elegido;
      boton("Quitar", "Quitar el panel elegido", () => {
        if (!this.selectedId) return;
        this.doc.removeStoryboardBoard(this.selectedId);
        this.selectedId = null; this.render();
      }).disabled = !elegido;
      boton("Escenario 3D", "Ver y armar la toma en el escenario", () => {
        if (this.onStage) this.onStage(this.selectedId);
      }).disabled = !elegido;
      const total = document.createElement("span");
      total.className = "sb2-total";
      const fps = Math.max(1, sc.fps || 24);
      total.textContent = `${boards.length} panel(es) · ${sc.boardDuration()} cuadros · ${(sc.boardDuration() / fps).toFixed(1)} s`;
      barra.appendChild(total);
      raiz.appendChild(barra);

      if (!boards.length) {
        const vacio = document.createElement("div");
        vacio.className = "sb2-empty";
        vacio.textContent = "Todavía no hay paneles. «+ Panel» crea el primero y ahí elegís la toma.";
        raiz.appendChild(vacio);
        this.host.appendChild(raiz);
        return;
      }

      // ── lista de paneles ──
      const lista = document.createElement("div"); lista.className = "sb2-list";
      boards.forEach((board, i) => {
        const t = tiempos[i];
        const fila = document.createElement("div");
        fila.className = "sb2-board" + (board.id === this.selectedId ? " sel" : "");
        fila.tabIndex = 0;
        fila.onclick = () => { this.selectedId = board.id; this.render(); };
        const num = document.createElement("b"); num.textContent = String(i + 1);
        let miniatura;
        if (board.drawingRef && board.drawingRef.png) {
          miniatura = document.createElement("img");
          miniatura.className = "sb2-thumb"; miniatura.src = board.drawingRef.png;
          miniatura.alt = "Referencia del panel " + (i + 1);
        } else {
          miniatura = document.createElement("span");
          miniatura.className = "sb2-thumb"; miniatura.title = "Sin referencia todavía";
        }
        const cuerpo = document.createElement("div"); cuerpo.className = "sb2-board-body";
        const tipo = shots.SHOT_TYPES.find((x) => x.id === board.shot.type);
        const cab = document.createElement("span"); cab.className = "sb2-shot";
        cab.textContent = (tipo ? tipo.name : board.shot.type) +
          (board.shot.angle && board.shot.angle !== "nivel" ? " · " + board.shot.angle : "");
        const acc = document.createElement("small");
        acc.textContent = board.action || board.dialogue || "sin acción";
        cuerpo.append(cab, acc);
        const tiempo = document.createElement("small"); tiempo.className = "sb2-time";
        tiempo.textContent = `F${t.from}–${t.to}`;
        fila.append(num, miniatura, cuerpo, tiempo);
        lista.appendChild(fila);
      });
      raiz.appendChild(lista);

      // ── generador de la toma elegida ──
      const gen = document.createElement("div"); gen.className = "sb2-gen";
      const titulo = document.createElement("div"); titulo.className = "sb2-gen-title";
      titulo.textContent = "Generador de toma";
      gen.appendChild(titulo);

      const campo = (etiqueta, control) => {
        const l = document.createElement("label"); l.className = "sb2-field";
        const s = document.createElement("span"); s.textContent = etiqueta;
        l.append(s, control); gen.appendChild(l); return control;
      };
      const tipoSel = document.createElement("select");
      shots.SHOT_TYPES.forEach((t) => {
        const o = document.createElement("option"); o.value = t.id; o.textContent = t.name;
        o.title = t.framing; tipoSel.appendChild(o);
      });
      tipoSel.value = elegido.shot.type;
      tipoSel.onchange = () => this._regenerate(elegido, { type: tipoSel.value });
      campo("Plano", tipoSel);

      const anguloSel = document.createElement("select");
      shots.ANGLES.forEach((a) => {
        const o = document.createElement("option"); o.value = a.id; o.textContent = a.name;
        anguloSel.appendChild(o);
      });
      anguloSel.value = elegido.shot.angle;
      anguloSel.onchange = () => this._regenerate(elegido, { angle: anguloSel.value });
      campo("Ángulo", anguloSel);

      const lente = document.createElement("input");
      lente.type = "number"; lente.min = "8"; lente.max = "300"; lente.step = "1";
      lente.value = String(Math.round((elegido.shot.camera && elegido.shot.camera.focalLength) || 50));
      lente.onchange = () => this._regenerate(elegido,
        { camera: { ...(elegido.shot.camera || {}), focalLength: Math.max(8, +lente.value || 50) } });
      campo("Lente (mm)", lente);

      const dur = document.createElement("input");
      dur.type = "number"; dur.min = "1"; dur.step = "1"; dur.value = String(elegido.duration);
      dur.onchange = () => this.doc.updateStoryboardBoard(elegido.id,
        { duration: Math.max(1, Math.round(+dur.value || 1)) }, "Cambiar la duración del panel");
      campo("Dura (cuadros)", dur);

      const accion = document.createElement("input");
      accion.type = "text"; accion.value = elegido.action; accion.placeholder = "qué pasa en este plano";
      accion.onchange = () => this.doc.updateStoryboardBoard(elegido.id, { action: accion.value }, "Escribir la acción");
      campo("Acción", accion);

      const dialogo = document.createElement("input");
      dialogo.type = "text"; dialogo.value = elegido.dialogue; dialogo.placeholder = "diálogo o voz en off";
      dialogo.onchange = () => this.doc.updateStoryboardBoard(elegido.id, { dialogue: dialogo.value }, "Escribir el diálogo");
      campo("Diálogo", dialogo);

      // Lectura de la cámara: la decisión se ve en números, no hay que creerle.
      const lectura = document.createElement("div"); lectura.className = "sb2-read";
      const camara = elegido.shot.camera;
      if (camara) {
        const clasificada = shots.classify(camara, this._subject(elegido), this._aspect());
        const distancia = Math.abs(this._subject(elegido).z - camara.z);
        lectura.innerHTML =
          `<span>distancia <b>${Math.round(distancia)}</b></span>` +
          `<span>altura <b>${Math.round(camara.y)}</b></span>` +
          `<span>FOV <b>${shots.verticalFov(camara, this._aspect()).toFixed(1)}°</b></span>` +
          `<span>ocupa <b>${(clasificada.coverage * 100).toFixed(0)}%</b> del cuadro</span>`;
      } else {
        lectura.innerHTML = "<span>Elegí un plano para generar la cámara.</span>";
      }
      gen.appendChild(lectura);
      raiz.appendChild(gen);
      this.host.appendChild(raiz);
    }
  }

  storyboard.BoardView = BoardView;
})(typeof window !== "undefined" ? window : globalThis);
