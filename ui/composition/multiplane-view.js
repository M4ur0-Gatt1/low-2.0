(function (global) {
  "use strict";
  const LOW = global.LOW = global.LOW || {};
  const composition = LOW.composition = LOW.composition || {};

  class MultiplaneView {
    constructor(root, options = {}) {
      this.root = root; this.options = options; this.rx = -18; this.ry = 28; this.zoom = .72;
      this.panX = 0; this.panY = 25; this.selected = null; this.planes = []; this.autoKey = !!options.autoKey; this.pendingTool = null; this.snap = true;
      this.mount();
    }
    mount() {
      this.root.innerHTML = `<div class="cmp3-toolbar">
        <button data-a="2d" title="Volver al dibujo 2D">2D</button><i></i>
        <button data-v="perspective" class="active">Perspectiva</button><button data-v="front">Frente</button><button data-v="top">Arriba</button>
        <button data-a="grid" class="active" title="Mostrar u ocultar cuadrícula">Grid</button><button data-a="snap" class="active" title="Ajuste: XY/Z 10 · rotación 5° · escala 5% (Ctrl desactiva durante el gesto)">Snap</button><button data-a="home" title="Centrar vista">Centrar</button><i></i>
        <button data-a="autokey" title="Crear claves de composición en el cuadro actual">Auto-key</button><strong class="cmp3-mode">Seleccionar</strong>
      </div><div class="cmp3-stage"><div class="cmp3-world"><div class="cmp3-grid"></div><div class="cmp3-cards"></div></div></div>
      <aside class="cmp3-outliner"><header>Planos</header><div class="cmp3-list"></div></aside>
      <aside class="cmp3-inspector"><header>Transformar</header>
        <label><span>X</span><input data-p="x" type="number" step="10"></label>
        <label><span>Y</span><input data-p="y" type="number" step="10"></label>
        <label><span>Z</span><input data-p="z" type="number" step="10"></label>
        <label><span>Rotación</span><input data-p="rotationZ" type="number" step="1"></label>
        <label><span>Escala</span><input data-p="scaleX" type="number" step="0.05"></label>
      </aside><div class="cmp3-axis" aria-hidden="true"><b>X</b><b>Y</b><b>Z</b></div>`;
      this.stage = this.root.querySelector(".cmp3-stage"); this.world = this.root.querySelector(".cmp3-world");
      this.root.tabIndex = 0; this.root.onkeydown = event => this.key(event);
      this.cards = this.root.querySelector(".cmp3-cards"); this.list = this.root.querySelector(".cmp3-list");
      this.root.querySelector('[data-a="2d"]').onclick = () => this.options.onExit?.();
      this.root.querySelector('[data-a="grid"]').onclick = e => { e.currentTarget.classList.toggle("active"); this.root.classList.toggle("no-grid"); };
      this.root.querySelector('[data-a="snap"]').onclick = e => { this.snap = !this.snap; e.currentTarget.classList.toggle("active", this.snap); };
      this.root.querySelector('[data-a="home"]').onclick = () => { this.rx = -18; this.ry = 28; this.zoom = .72; this.panX = 0; this.panY = 25; this.applyView(); };
      this.root.querySelector('[data-a="autokey"]').onclick = e => { this.autoKey = !this.autoKey; e.currentTarget.classList.toggle("active", this.autoKey); this.options.onAutoKey?.(this.autoKey); };
      this.root.querySelector('[data-a="autokey"]').classList.toggle("active", this.autoKey);
      this.root.querySelectorAll("[data-v]").forEach(button => button.onclick = () => this.setView(button.dataset.v));
      this.root.querySelectorAll(".cmp3-inspector input").forEach(input => input.onchange = () => this.input(input));
      this.stage.onpointerdown = event => { this.root.focus({ preventScroll: true }); this.navigate(event); };
      this.stage.onwheel = event => { event.preventDefault(); this.zoom = Math.max(.18, Math.min(2.5, this.zoom * (event.deltaY < 0 ? 1.1 : .9))); this.applyView(); };
      this.applyView();
    }
    setView(name) {
      const views = { perspective: [-18, 28], front: [0, 0], top: [-89.9, 0] };
      [this.rx, this.ry] = views[name] || views.perspective;
      this.root.querySelectorAll("[data-v]").forEach(b => b.classList.toggle("active", b.dataset.v === name)); this.applyView();
    }
    applyView() { this.world.style.transform = `translate3d(${this.panX}px,${this.panY}px,0) scale(${this.zoom}) rotateX(${this.rx}deg) rotateY(${this.ry}deg)`; }
    navigate(event) {
      if (event.target.closest(".cmp3-card")) return;
      const sx = event.clientX, sy = event.clientY, start = { rx: this.rx, ry: this.ry, x: this.panX, y: this.panY }, pan = event.shiftKey || event.button === 1;
      const move = e => { if (pan) { this.panX = start.x + e.clientX - sx; this.panY = start.y + e.clientY - sy; }
        else { this.ry = start.ry + (e.clientX - sx) * .35; this.rx = Math.max(-90, Math.min(90, start.rx - (e.clientY - sy) * .35)); } this.applyView(); };
      const up = () => { global.removeEventListener("pointermove", move); global.removeEventListener("pointerup", up); };
      global.addEventListener("pointermove", move); global.addEventListener("pointerup", up);
    }
    setPlanes(planes) { this.planes = planes || []; if (!this.planes.some(p => p.id === this.selected)) this.selected = this.planes[0]?.id || null; this.render(); }
    select(id) { this.selected = id; this.render(); this.options.onSelect?.(id); }
    render() {
      this.cards.innerHTML = ""; this.list.innerHTML = "";
      for (const plane of this.planes) {
        const t = plane.transform || {}, card = document.createElement("div");
        card.className = "cmp3-card" + (plane.id === this.selected ? " selected" : ""); card.dataset.id = plane.id;
        card.style.transform = `translate3d(${t.x || 0}px,${t.y || 0}px,${-(t.z || 0)}px) rotateX(${t.rotationX || 0}deg) rotateY(${t.rotationY || 0}deg) rotateZ(${t.rotationZ || 0}deg) scale(${t.scaleX ?? 1},${t.scaleY ?? 1})`;
        const surface = document.createElement("div"); surface.className = "cmp3-surface";
        if (plane.node) surface.appendChild(plane.node.cloneNode(true));
        const tag = document.createElement("span"); tag.textContent = `${plane.name} · Z ${Math.round(t.z || 0)}`;
        card.append(surface, tag);
        if (plane.id === this.selected) {
          const gizmo = document.createElement("div"); gizmo.className = "cmp3-gizmo";
          gizmo.innerHTML = '<button data-axis="xy" title="Mover en X/Y">XY</button><button data-axis="z" title="Mover en profundidad">Z</button><button data-axis="r" title="Rotar en el plano">R</button><button data-axis="s" title="Escala uniforme">S</button>';
          gizmo.querySelectorAll("button").forEach(handle => handle.onpointerdown = e => this.manipulate(e, plane, handle.dataset.axis));
          card.appendChild(gizmo);
        }
        card.onpointerdown = e => { this.root.focus({ preventScroll: true }); if (this.pendingTool) this.manipulate(e, plane, this.pendingTool); };
        card.onclick = e => { e.stopPropagation(); this.select(plane.id); }; this.cards.appendChild(card);
        const row = document.createElement("button"); row.className = plane.id === this.selected ? "active" : "";
        row.innerHTML = `<i></i><span></span><small>Z ${Math.round(t.z || 0)}</small>`; row.querySelector("span").textContent = plane.name; row.onclick = () => this.select(plane.id); this.list.appendChild(row);
      }
      const active = this.planes.find(p => p.id === this.selected), inspector = this.root.querySelector(".cmp3-inspector");
      inspector.classList.toggle("disabled", !active);
      inspector.querySelectorAll("input").forEach(input => input.value = active ? (active.transform?.[input.dataset.p] ?? (input.dataset.p === "scaleX" ? 1 : 0)) : "");
    }
    input(input) {
      const active = this.planes.find(p => p.id === this.selected); if (!active) return;
      const patch = { [input.dataset.p]: Number(input.value) || 0 };
      if (input.dataset.p === "scaleX") patch.scaleY = patch.scaleX;
      this.options.onTransform?.(active.id, patch); 
    }
    setTool(tool) {
      this.pendingTool = tool;
      const names = { xy: "Mover XY", z: "Mover Z", r: "Rotar", s: "Escalar" };
      this.root.querySelector(".cmp3-mode").textContent = names[tool] || "Seleccionar";
    }
    key(event) {
      if (event.target.matches?.("input")) return;
      if (event.code === "Numpad1") { event.preventDefault(); return this.setView("front"); }
      if (event.code === "Numpad7") { event.preventDefault(); return this.setView("top"); }
      if (event.code === "Numpad5") { event.preventDefault(); return this.setView("perspective"); }
      const key = event.key.toLowerCase();
      if (key === "escape") { event.preventDefault(); return this.setTool(null); }
      if (key === "g") { event.preventDefault(); return this.setTool("xy"); }
      if (key === "z" && this.pendingTool === "xy") { event.preventDefault(); return this.setTool("z"); }
      if (key === "r") { event.preventDefault(); return this.setTool("r"); }
      if (key === "s") { event.preventDefault(); return this.setTool("s"); }
    }
    manipulate(event, plane, axis) {
      event.preventDefault(); event.stopPropagation();
      const startX = event.clientX, startY = event.clientY, start = { ...(plane.transform || {}) };
      const move = e => {
        const dx = (e.clientX - startX) / Math.max(.18, this.zoom);
        const useSnap = this.snap && !e.ctrlKey, q = (value, step) => useSnap ? Math.round(value / step) * step : value;
        const patch = axis === "z" ? { z: q((start.z || 0) + dx, 10) }
          : axis === "r" ? { rotationZ: q((start.rotationZ || 0) + dx * .4, 5) }
          : axis === "s" ? { scaleX: Math.max(.05, q((start.scaleX ?? 1) + dx / 300, .05)), scaleY: Math.max(.05, q((start.scaleY ?? 1) + dx / 300, .05)) }
          : { x: q((start.x || 0) + dx, 10), y: q((start.y || 0) + (e.clientY - startY) / Math.max(.18, this.zoom), 10) };
        plane.transform = { ...start, ...patch }; this.render();
      };
      const up = e => {
        global.removeEventListener("pointermove", move); global.removeEventListener("pointerup", up);
        const patch = axis === "z" ? { z: plane.transform.z || 0 }
          : axis === "r" ? { rotationZ: plane.transform.rotationZ || 0 }
          : axis === "s" ? { scaleX: plane.transform.scaleX ?? 1, scaleY: plane.transform.scaleY ?? 1 }
          : { x: plane.transform.x || 0, y: plane.transform.y || 0 };
        this.options.onTransform?.(plane.id, patch);
        this.setTool(null);
      };
      global.addEventListener("pointermove", move); global.addEventListener("pointerup", up);
    }
  }
  composition.MultiplaneView = MultiplaneView;
})(typeof window !== "undefined" ? window : globalThis);
