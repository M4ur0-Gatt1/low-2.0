/* ══════════════════════════════════════════════════════════════════════════
   X-SHEET — la planilla de exposición

   Filas = frames, columnas = capas, celdas = qué dibujo se ve ahí. Lo que se
   escribe en una celda es el NÚMERO del dibujo, no el dibujo: por eso el mismo
   número repetido es un hold y no una copia.

   Lo que la hace usable (y que la timeline anterior no tenía):
     · el hold se ve — solo la primera celda del bloque lleva número, el resto
       es una línea vertical continua, como en una planilla de papel;
     · se escribe el número directo en la celda para sustituir un dibujo;
     · la manija de abajo estira la exposición arrastrando;
     · las operaciones de timing (2s, 3s, extender, mover) están a un clic.

   Esta vista NO guarda estado: lee del documento y le pide cambios. Todo el
   estado vive en el modelo.

   @module animation/xsheet-view
   ══════════════════════════════════════════════════════════════════════════ */
(function (global) {
  "use strict";
  const LOW = global.LOW = global.LOW || {};
  const animation = LOW.animation = LOW.animation || {};

  const FILAS_EXTRA = 12;   // filas vacías después del final, para seguir armando

  class XsheetView {
    constructor(host, doc) {
      this.host = typeof host === "string" ? document.querySelector(host) : host;
      this.doc = doc;
      this.sel = null;              // { layerId, from, to }
      this._desuscribir = doc ? doc.subscribe(() => this.render()) : null;
    }
    setDoc(doc) {
      if (this._desuscribir) this._desuscribir();
      this.doc = doc;
      this._desuscribir = doc ? doc.subscribe(() => this.render()) : null;
      this.render();
    }
    dispose() { if (this._desuscribir) this._desuscribir(); this.host && (this.host.innerHTML = ""); }

    /** Cuántas filas mostrar. */
    _filas() {
      const ultimo = this.doc ? this.doc.scene.lastFrame() : 0;
      return Math.max(ultimo + FILAS_EXTRA, 24, this.doc ? this.doc.frame + 4 : 0);
    }

    render() {
      if (!this.host || !this.doc) return;
      const doc = this.doc, sc = doc.scene;
      const filas = this._filas();
      const marcas = animation.onion
        ? animation.onion.markers(sc, doc.layerId, doc.frame, doc.onionCfg)
        : [];
      const porFrame = new Map(marcas.map((m) => [m.frame, m]));

      const tabla = document.createElement("div");
      tabla.className = "xs2";

      // ── encabezado: una columna por capa ──
      const head = document.createElement("div");
      head.className = "xs2-head";
      head.appendChild(this._celda("xs2-corner", "#"));
      for (const ly of sc.layers) {
        const h = document.createElement("div");
        h.className = "xs2-col-head" + (ly.id === doc.layerId ? " sel" : "");
        h.textContent = ly.name;
        h.title = "Clic: capa activa · doble clic: renombrar";
        h.onclick = () => doc.selectLayer(ly.id);
        h.ondblclick = () => {
          const n = prompt("Nombre de la capa:", ly.name);
          if (n) { ly.name = n; doc.touch(); doc.emit("layers"); }
        };
        head.appendChild(h);
      }
      const mas = document.createElement("button");
      mas.className = "xs2-addcol";
      mas.textContent = "+";
      mas.title = "Agregar capa";
      mas.onclick = () => doc.addLayer();
      head.appendChild(mas);
      tabla.appendChild(head);

      // ── cuerpo ──
      const cuerpo = document.createElement("div");
      cuerpo.className = "xs2-body";
      for (let f = 1; f <= filas; f++) {
        const fila = document.createElement("div");
        fila.className = "xs2-row" + (f === doc.frame ? " actual" : "") + (f % 6 === 1 ? " seg" : "");

        // número de frame + marca de papel cebolla
        const num = document.createElement("div");
        num.className = "xs2-fnum";
        num.textContent = f;
        const marca = porFrame.get(f);
        if (marca) {
          const rombo = document.createElement("i");
          rombo.className = "xs2-onion";
          rombo.style.background = marca.color;
          rombo.title = marca.tipo === "fixed" ? "Papel cebolla fijo" : "Papel cebolla";
          num.appendChild(rombo);
        }
        num.onclick = () => doc.goTo(f);
        // clic derecho en el número: fijar/soltar marca de papel cebolla
        num.oncontextmenu = (e) => {
          e.preventDefault();
          doc.onionCfg = animation.onion.toggleFixed(doc.onionCfg || animation.onion.DEFAULTS, f);
          doc.emit("onion");
        };
        fila.appendChild(num);

        for (const ly of sc.layers) {
          fila.appendChild(this._celdaXs(ly, f));
        }
        cuerpo.appendChild(fila);
      }
      tabla.appendChild(cuerpo);

      this.host.innerHTML = "";
      this.host.appendChild(this._barra());
      this.host.appendChild(tabla);

      // dejar visible el frame actual sin saltos bruscos
      const act = cuerpo.querySelector(".xs2-row.actual");
      if (act && act.scrollIntoView) act.scrollIntoView({ block: "nearest" });
    }

    _celda(cls, txt) {
      const d = document.createElement("div");
      d.className = cls;
      d.textContent = txt;
      return d;
    }

    /** Una celda de la planilla. */
    _celdaXs(ly, f) {
      const doc = this.doc;
      const val = ly.cellAt(f);
      const esHold = ly.isHold(f);
      const inicio = val != null && !esHold;
      const c = document.createElement("div");
      c.className = "xs2-cell"
        + (val == null ? " vacia" : "")
        + (esHold ? " hold" : "")
        + (inicio ? " inicio" : "")
        + (ly.id === doc.layerId && f === doc.frame ? " cursor" : "");
      // Solo la PRIMERA celda del bloque muestra el número; el resto es la
      // línea de continuación. Así se lee de un vistazo dónde cambia el dibujo,
      // que es lo único que importa cuando mirás timing.
      c.textContent = inicio ? String(val) : "";
      c.title = val == null ? "Vacía" : `Dibujo ${val}${esHold ? " (sostenido)" : ""}`;

      c.onclick = () => { doc.selectLayer(ly.id); doc.goTo(f); this.sel = { layerId: ly.id, from: f, to: f }; };
      // doble clic: escribir el número del dibujo (sustitución directa)
      c.ondblclick = () => {
        const n = prompt(`Dibujo en el frame ${f} (vacío = borrar la exposición):`, val == null ? "" : String(val));
        if (n === null) return;
        const t = n.trim();
        doc.setCell(f, t === "" ? null : Math.max(1, parseInt(t, 10) || 1), ly.id);
      };
      // arrastrar hacia abajo: estirar la exposición (manija de relleno)
      c.onpointerdown = (e) => {
        if (val == null || e.button !== 0) return;
        const y0 = e.clientY, alto = c.getBoundingClientRect().height || 18;
        let hasta = f;
        const mover = (ev) => {
          const nf = f + Math.max(0, Math.round((ev.clientY - y0) / alto));
          if (nf !== hasta) { hasta = nf; }
        };
        const soltar = () => {
          document.removeEventListener("pointermove", mover);
          document.removeEventListener("pointerup", soltar);
          if (hasta > f) doc.apply("fillHandle", ly.holdStart(f), f, hasta);
        };
        document.addEventListener("pointermove", mover);
        document.addEventListener("pointerup", soltar);
      };
      return c;
    }

    /** Barra de operaciones de timing. Son las que se usan todo el tiempo. */
    _barra() {
      const doc = this.doc;
      const b = document.createElement("div");
      b.className = "xs2-bar";
      const rango = () => {
        const ly = doc.layer;
        const s = this.sel && this.sel.layerId === doc.layerId ? this.sel : null;
        return s ? [s.from, s.to] : [1, Math.max(1, ly ? ly.lastFrame() : 1)];
      };
      const btn = (txt, title, fn) => {
        const x = document.createElement("button");
        x.className = "xs2-op"; x.textContent = txt; x.title = title;
        x.onclick = fn; b.appendChild(x); return x;
      };
      btn("1s", "Un frame por dibujo (saca los holds)", () => { const [a, z] = rango(); doc.apply("step", a, z, 1); });
      btn("2s", "Cada dibujo dura 2 frames", () => { const [a, z] = rango(); doc.apply("step", a, z, 2); });
      btn("3s", "Cada dibujo dura 3 frames", () => { const [a, z] = rango(); doc.apply("step", a, z, 3); });
      btn("+", "Alargar la exposición del frame actual", () => doc.apply("stepChange", doc.frame, +1));
      btn("−", "Acortar la exposición del frame actual", () => doc.apply("stepChange", doc.frame, -1));
      btn("⤒", "Insertar un frame vacío acá", () => doc.apply("insert", doc.frame, 1));
      btn("⌫", "Quitar este frame y correr lo que sigue", () => doc.apply("remove", doc.frame, doc.frame));
      btn("↔", "Rellenar los huecos sosteniendo cada dibujo", () => { const [a, z] = rango(); doc.apply("autoexpose", a, z); });
      btn("⟲", "Invertir el orden", () => { const [a, z] = rango(); doc.apply("reverse", a, z); });
      btn("⇄", "Ida y vuelta (swing)", () => { const [a, z] = rango(); doc.apply("swing", a, z); });
      return b;
    }
  }

  animation.XsheetView = XsheetView;
})(window);
