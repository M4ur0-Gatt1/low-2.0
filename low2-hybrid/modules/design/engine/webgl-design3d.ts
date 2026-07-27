/**
 * Motor de dibujo 3D estilo Feather para LOW 2.0 (backend WebGL / Three.js).
 *
 * PROFUNDIDAD: el lápiz emite un rayo de cámara y el punto se resuelve sobre una
 * SUPERFICIE (guía extruida, primitiva, o plano frontal por defecto). Nunca se
 * adivina Z.
 *
 * SISTEMA DE GUÍAS (Feather): la herramienta Guía extruye tu trazo a una
 * superficie translúcida perpendicular a la vista. Hay UNA guía activa a la vez
 * (una nueva reemplaza a la anterior; se puede borrar). Los trazos NO se borran
 * con la guía.
 *
 * Este archivo también implementa: vistas ortogonales (frente/lado/arriba) +
 * perspectiva, deshacer/rehacer (Ctrl+Z / Ctrl+Alt+Z / Ctrl+Shift+Z),
 * selección por click y por LAZO, mover y borrar selección, y goma con lazo.
 *
 * @module design/engine/webgl-design3d
 */

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { lowStore, type LowStore } from '../../../store/low-store';
import type { BrushSettings, SurfaceType, ToolType } from '../../../types/design-types';

export type Theme = 'light' | 'dark';
export type ViewName = 'persp' | 'front' | 'back' | 'top' | 'bottom' | 'left' | 'right';

interface SurfaceObj {
  id: string;
  type: SurfaceType;
  mesh: THREE.Mesh;
}

interface StrokeRecord {
  id: string;
  object: THREE.Object3D; // grupo (trazo) o malla (guía)
  points: THREE.Vector3[];
  /** Presión 0–1 por punto (mismo índice que `points`). Solo relevante para
   *  trazos ('stroke'); las guías no varían de ancho. */
  pressures: number[];
  kind: 'stroke' | 'guide';
}

interface Command {
  undo: () => void;
  redo: () => void;
}

const MIN_SAMPLE_DIST = 0.012;
const DRAG_THRESHOLD = 6; // px para distinguir click de arrastre
const ORTHO_SIZE = 4;
const NS = 'http://www.w3.org/2000/svg';

export class WebGLDesign3D {
  private renderer!: THREE.WebGLRenderer;
  private scene!: THREE.Scene;
  private perspCamera!: THREE.PerspectiveCamera;
  private camera!: THREE.Camera & { position: THREE.Vector3 }; // cámara activa
  private controls!: OrbitControls;
  private raycaster = new THREE.Raycaster();
  private pointer = new THREE.Vector2();

  private surfacesGroup!: THREE.Group;
  private guidesGroup!: THREE.Group;
  private strokesGroup!: THREE.Group;
  private grid!: THREE.GridHelper;

  private surfaces: SurfaceObj[] = [];
  private strokes: StrokeRecord[] = [];
  private activeGuide: { id: string; mesh: THREE.Mesh } | null = null;
  private selected = new Set<StrokeRecord>();

  private fallbackPlane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);

  private view: ViewName = 'persp';
  private orthoSize = ORTHO_SIZE;

  // interacción
  private mode: 'idle' | 'draw' | 'move' | 'lasso' | 'point-drag' = 'idle';
  private current: {
    points: THREE.Vector3[];
    pressures: number[];
    kind: 'stroke' | 'guide';
    line?: THREE.Line;
    mirrorLine?: THREE.Line;
  } | null = null;
  private downScreen = new THREE.Vector2();
  private lastMoveWorld = new THREE.Vector3();
  private moveStart = new Map<THREE.Object3D, THREE.Vector3>();
  private lassoPts: [number, number][] = [];
  private lassoEl!: SVGSVGElement;
  private lassoPoly!: SVGPolygonElement;

  // ejes globales XYZ + puntos de fuga automáticos (solo guía visual — NUNCA
  // se dibujan ni se exportan, se recalculan en vivo según la cámara)
  private axesHelper!: THREE.AxesHelper;
  private showAxes = false;
  private vpEl!: SVGSVGElement;

  // edición de nodos (herramienta 'select'): un trazo a la vez, sus puntos de
  // control se muestran como esferitas arrastrables en 3D.
  private handlesGroup!: THREE.Group;
  private editingStroke: StrokeRecord | null = null;
  private pointHandles: THREE.Mesh[] = [];
  private dragPointIndex = -1;
  private dragPointStart = new THREE.Vector3();

  // historia
  private undoStack: Command[] = [];
  private redoStack: Command[] = [];

  private canvas!: HTMLCanvasElement;
  private container!: HTMLElement;
  private cursorEl!: HTMLDivElement;
  private ro?: ResizeObserver;
  private raf = 0;
  private unsub?: () => void;
  private seq = 0;
  private disposed = false;

  private tool: ToolType = 'pencil';
  private brush: BrushSettings = { color: '#22252e', size: 12, opacity: 1, hardness: 0.8, pressureSensitivity: 0.6 };
  private mirror = false;
  private theme: Theme = 'light';
  private lastSurfaceKey = '';

  // ---------------------------------------------------------------- ciclo de vida

  mount(canvas: HTMLCanvasElement, container: HTMLElement): void {
    this.canvas = canvas;
    this.container = container;

    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.05;

    this.scene = new THREE.Scene();

    this.perspCamera = new THREE.PerspectiveCamera(45, 1, 0.05, 500);
    this.perspCamera.position.set(0, 1.2, 6);
    this.camera = this.perspCamera;

    this.makeControls();
    this.controls.target.set(0, 0.6, 0);

    this.buildEnvironment();

    this.surfacesGroup = new THREE.Group();
    this.guidesGroup = new THREE.Group();
    this.strokesGroup = new THREE.Group();
    this.handlesGroup = new THREE.Group();
    this.scene.add(this.surfacesGroup, this.guidesGroup, this.strokesGroup, this.handlesGroup);

    this.axesHelper = new THREE.AxesHelper(3);
    this.axesHelper.visible = false;
    this.scene.add(this.axesHelper);

    // overlay SVG para los puntos de fuga (guía pura, no se dibuja ni exporta)
    this.vpEl = document.createElementNS(NS, 'svg') as SVGSVGElement;
    Object.assign(this.vpEl.style, {
      position: 'absolute', left: '0', top: '0', width: '100%', height: '100%',
      pointerEvents: 'none', zIndex: '20', display: 'none',
    } as CSSStyleDeclaration);
    container.appendChild(this.vpEl);

    this.cursorEl = document.createElement('div');
    Object.assign(this.cursorEl.style, {
      position: 'absolute', left: '0', top: '0', borderRadius: '50%',
      border: '1.5px solid #333', transform: 'translate(-50%, -50%)',
      pointerEvents: 'none', display: 'none', zIndex: '50', mixBlendMode: 'difference',
    } as CSSStyleDeclaration);
    container.appendChild(this.cursorEl);

    // overlay SVG para el lazo
    this.lassoEl = document.createElementNS(NS, 'svg') as SVGSVGElement;
    Object.assign(this.lassoEl.style, {
      position: 'absolute', left: '0', top: '0', width: '100%', height: '100%',
      pointerEvents: 'none', zIndex: '40', display: 'none',
    } as CSSStyleDeclaration);
    this.lassoPoly = document.createElementNS(NS, 'polygon') as SVGPolygonElement;
    this.lassoPoly.setAttribute('fill', 'rgba(76,155,255,0.12)');
    this.lassoPoly.setAttribute('stroke', '#4c9bff');
    this.lassoPoly.setAttribute('stroke-width', '1.5');
    this.lassoPoly.setAttribute('stroke-dasharray', '5 4');
    this.lassoEl.appendChild(this.lassoPoly);
    container.appendChild(this.lassoEl);

    this.syncFromStore(lowStore.getState() as unknown as LowStore);
    this.unsub = lowStore.subscribe(() => this.syncFromStore(lowStore.getState() as unknown as LowStore));

    canvas.style.cursor = 'none';
    canvas.style.touchAction = 'none';
    canvas.addEventListener('pointerdown', this.onPointerDown);
    canvas.addEventListener('pointermove', this.onPointerMove);
    canvas.addEventListener('pointerleave', this.onPointerLeave);
    window.addEventListener('pointerup', this.onPointerUp);
    window.addEventListener('keydown', this.onKeyDown);

    this.ro = new ResizeObserver(() => this.resize());
    this.ro.observe(container);
    this.resize();
    this.setTheme(this.theme);
    this.animate();
  }

  dispose(): void {
    this.disposed = true;
    cancelAnimationFrame(this.raf);
    this.unsub?.();
    this.ro?.disconnect();
    this.canvas?.removeEventListener('pointerdown', this.onPointerDown);
    this.canvas?.removeEventListener('pointermove', this.onPointerMove);
    this.canvas?.removeEventListener('pointerleave', this.onPointerLeave);
    window.removeEventListener('pointerup', this.onPointerUp);
    window.removeEventListener('keydown', this.onKeyDown);
    this.cursorEl?.remove();
    this.lassoEl?.remove();
    this.vpEl?.remove();
    this.controls?.dispose();
    this.scene?.traverse((o) => this.disposeNode(o));
    this.renderer?.dispose();
  }

  private makeControls(): void {
    this.controls?.dispose();
    this.controls = new OrbitControls(this.camera, this.canvas);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.08;
    this.controls.mouseButtons = {
      LEFT: -1 as unknown as THREE.MOUSE,
      MIDDLE: THREE.MOUSE.PAN,
      RIGHT: THREE.MOUSE.ROTATE,
    };
    this.controls.touches = { ONE: THREE.TOUCH.ROTATE, TWO: THREE.TOUCH.DOLLY_PAN };
    this.controls.enableRotate = this.view === 'persp';
  }

  // ---------------------------------------------------------------- entorno / tema

  private buildEnvironment(): void {
    this.scene.add(new THREE.HemisphereLight(0xffffff, 0x9099aa, 1.1));
    const key = new THREE.DirectionalLight(0xffffff, 1.15);
    key.position.set(3, 6, 5);
    this.scene.add(key);
    const rim = new THREE.DirectionalLight(0xbcd0ff, 0.5);
    rim.position.set(-5, 2, -4);
    this.scene.add(rim);

    this.grid = new THREE.GridHelper(20, 40, 0xc2c8d2, 0xd7dce4);
    const gm = this.grid.material as THREE.Material;
    gm.transparent = true;
    gm.opacity = 0.5;
    this.scene.add(this.grid);
  }

  setTheme(theme: Theme): void {
    this.theme = theme;
    const dark = theme === 'dark';
    this.scene.fog = dark ? new THREE.FogExp2(0x0e0f13, 0.025) : null;
    const gm = this.grid.material as THREE.LineBasicMaterial;
    const colors = this.grid.geometry.getAttribute('color') as THREE.BufferAttribute;
    const c1 = new THREE.Color(dark ? 0x3a3f4b : 0xc2c8d2);
    const c2 = new THREE.Color(dark ? 0x23262e : 0xd7dce4);
    for (let i = 0; i < colors.count; i++) {
      const c = i < colors.count / 2 ? c1 : c2;
      colors.setXYZ(i, c.r, c.g, c.b);
    }
    colors.needsUpdate = true;
    gm.opacity = dark ? 0.35 : 0.5;
    this.cursorEl.style.borderColor = dark ? '#e6ebf5' : '#2a2f3a';
  }

  // ---------------------------------------------------------------- ejes / puntos de fuga

  /** Prende/apaga los ejes XYZ y, en perspectiva, los puntos de fuga de cada
   *  eje (recalculados en vivo — es guía pura, jamás se dibuja ni exporta). */
  toggleAxes(): boolean {
    this.showAxes = !this.showAxes;
    this.axesHelper.visible = this.showAxes;
    this.updateVPOverlay();
    return this.showAxes;
  }

  axesOn(): boolean { return this.showAxes; }

  private static readonly VP_AXES: [THREE.Vector3, string][] = [
    [new THREE.Vector3(1, 0, 0), '#e74c3c'],
    [new THREE.Vector3(0, 1, 0), '#2ecc71'],
    [new THREE.Vector3(0, 0, 1), '#3b82f6'],
  ];

  /** Punto de fuga = a dónde converge en pantalla una dirección del mundo al
   *  proyectarla al infinito. Solo tiene sentido en perspectiva — en
   *  ortográfica las líneas paralelas a un eje siguen paralelas en pantalla,
   *  no convergen a ningún punto. Se recalcula cada frame según la cámara. */
  private updateVPOverlay(): void {
    if (!this.vpEl) return;
    if (!this.showAxes || this.view !== 'persp') {
      this.vpEl.style.display = 'none';
      return;
    }
    this.vpEl.style.display = 'block';
    while (this.vpEl.lastChild) this.vpEl.removeChild(this.vpEl.lastChild);
    const rect = this.canvas.getBoundingClientRect();
    const w = rect.width || 1, h = rect.height || 1;
    const cam = this.camera as THREE.Camera;
    const camFwd = new THREE.Vector3();
    cam.getWorldDirection(camFwd);
    const span = Math.max(w, h) * 3;
    for (const [axis, color] of WebGLDesign3D.VP_AXES) {
      // de las dos direcciones (+eje/-eje) usamos la que mira "hacia adelante"
      // — así el punto de fuga aparece del lado que se está mirando, no
      // detrás de la cámara.
      const align = camFwd.dot(axis);
      if (Math.abs(align) > 0.985) continue; // cámara casi alineada con el eje: sin convergencia útil
      const d = align >= 0 ? axis : axis.clone().negate();
      const far = cam.position.clone().add(d.clone().multiplyScalar(500));
      const ndc = far.project(cam);
      if (!isFinite(ndc.x) || !isFinite(ndc.y)) continue;
      const sx = ((ndc.x + 1) / 2) * w, sy = ((1 - ndc.y) / 2) * h;
      if (Math.abs(sx) > w * 4 || Math.abs(sy) > h * 4) continue; // demasiado lejos: no aporta
      const g = document.createElementNS(NS, 'g');
      const N = 8;
      for (let i = 0; i < N; i++) {
        const a = (i / N) * Math.PI * 2;
        const line = document.createElementNS(NS, 'line');
        line.setAttribute('x1', sx.toFixed(1)); line.setAttribute('y1', sy.toFixed(1));
        line.setAttribute('x2', (sx + Math.cos(a) * span).toFixed(1));
        line.setAttribute('y2', (sy + Math.sin(a) * span).toFixed(1));
        line.setAttribute('stroke', color);
        line.setAttribute('stroke-width', '1.4');
        line.setAttribute('stroke-opacity', '0.4');
        g.appendChild(line);
      }
      const dot = document.createElementNS(NS, 'circle');
      dot.setAttribute('cx', sx.toFixed(1)); dot.setAttribute('cy', sy.toFixed(1));
      dot.setAttribute('r', '5'); dot.setAttribute('fill', color);
      g.appendChild(dot);
      this.vpEl.appendChild(g);
    }
  }

  // ---------------------------------------------------------------- vistas orto / persp

  setView(v: ViewName): void {
    const t = this.controls.target.clone();
    const dist = this.camera.position.distanceTo(t) || 8;
    if (v === 'persp') {
      this.camera = this.perspCamera;
    } else {
      const dir: Record<Exclude<ViewName, 'persp'>, [number, number, number]> = {
        front: [0, 0, 1], back: [0, 0, -1], top: [0, 1, 0],
        bottom: [0, -1, 0], left: [-1, 0, 0], right: [1, 0, 0],
      };
      const d = dir[v];
      const ortho = new THREE.OrthographicCamera(-1, 1, 1, -1, -500, 500);
      ortho.position.set(t.x + d[0] * dist, t.y + d[1] * dist, t.z + d[2] * dist);
      if (v === 'top' || v === 'bottom') ortho.up.set(0, 0, v === 'top' ? -1 : 1);
      this.camera = ortho;
    }
    this.view = v;
    this.camera.lookAt(t);
    this.makeControls();
    this.controls.target.copy(t);
    this.applyOrthoFrustum();
  }

  private applyOrthoFrustum(): void {
    if (this.view === 'persp') return;
    const cam = this.camera as THREE.OrthographicCamera;
    const c = this.renderer.domElement;
    const aspect = (c.clientWidth || 1) / (c.clientHeight || 1);
    cam.left = -this.orthoSize * aspect;
    cam.right = this.orthoSize * aspect;
    cam.top = this.orthoSize;
    cam.bottom = -this.orthoSize;
    cam.updateProjectionMatrix();
  }

  // ---------------------------------------------------------------- superficies-guía (toolbar)

  private addSurface(type: SurfaceType): void {
    const geo = type === 'plane' ? new THREE.PlaneGeometry(4, 4) : this.surfaceGeometry(type, 1.4);
    const mesh = this.makeSurfaceMesh(geo);
    mesh.position.copy(this.controls.target);
    if (type === 'plane') mesh.lookAt(this.camera.position);
    const s: SurfaceObj = { id: `surf-${this.seq++}`, type, mesh };
    mesh.userData.surfaceId = s.id;
    this.surfacesGroup.add(mesh);
    this.surfaces.push(s);
  }

  private makeSurfaceMesh(geo: THREE.BufferGeometry): THREE.Mesh {
    const mesh = new THREE.Mesh(
      geo,
      new THREE.MeshStandardMaterial({
        color: 0x4c7bd0, roughness: 0.9, metalness: 0, transparent: true,
        opacity: 0.08, side: THREE.DoubleSide, depthWrite: false,
      })
    );
    mesh.add(new THREE.LineSegments(
      new THREE.EdgesGeometry(geo),
      new THREE.LineBasicMaterial({ color: 0x4c9bff, transparent: true, opacity: 0.3 })
    ));
    return mesh;
  }

  private surfaceGeometry(type: SurfaceType, r: number): THREE.BufferGeometry {
    switch (type) {
      case 'sphere': return new THREE.SphereGeometry(r, 48, 32);
      case 'cylinder': return new THREE.CylinderGeometry(r, r, r * 2, 48, 1, true);
      case 'torus': return new THREE.TorusGeometry(r, r * 0.35, 24, 64);
      default: return new THREE.PlaneGeometry(r * 2, r * 2);
    }
  }

  // ---------------------------------------------------------------- store

  private syncFromStore(s: LowStore): void {
    if (this.tool === 'select' && s.currentTool !== 'select') this.clearPointEdit();
    this.tool = s.currentTool;
    this.brush = s.brushSettings;
    this.mirror = s.mirrorMode;
    const key = s.activeSurface ? s.activeSurface.type : '';
    if (key && key !== this.lastSurfaceKey) this.addSurface(s.activeSurface!.type);
    this.lastSurfaceKey = key;
  }

  // ---------------------------------------------------------------- input

  private setPointerFromEvent(e: PointerEvent): void {
    const rect = this.canvas.getBoundingClientRect();
    this.pointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    this.pointer.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
  }

  private screenOf(e: PointerEvent): [number, number] {
    const rect = this.canvas.getBoundingClientRect();
    return [e.clientX - rect.left, e.clientY - rect.top];
  }

  private updateCursor(e: PointerEvent): void {
    const [x, y] = this.screenOf(e);
    const size = Math.max(6, this.brush.size);
    this.cursorEl.style.display = 'block';
    this.cursorEl.style.width = `${size}px`;
    this.cursorEl.style.height = `${size}px`;
    this.cursorEl.style.left = `${x}px`;
    this.cursorEl.style.top = `${y}px`;
  }

  /** Rayo → superficie/guía si hay; si no, plano que mira a la cámara. */
  private resolveHit(): { point: THREE.Vector3; normal: THREE.Vector3 } | null {
    this.raycaster.setFromCamera(this.pointer, this.camera as THREE.Camera);
    const targets = this.surfaces.map((s) => s.mesh);
    if (targets.length) {
      const hits = this.raycaster.intersectObjects(targets, false);
      if (hits.length) {
        const h = hits[0];
        const normal = h.face
          ? h.face.normal.clone().transformDirection(h.object.matrixWorld).normalize()
          : new THREE.Vector3(0, 0, 1);
        return { point: h.point.clone(), normal };
      }
    }
    const camDir = new THREE.Vector3();
    (this.camera as THREE.Camera).getWorldDirection(camDir);
    this.fallbackPlane.setFromNormalAndCoplanarPoint(camDir.clone().negate(), this.controls.target);
    const p = new THREE.Vector3();
    if (this.raycaster.ray.intersectPlane(this.fallbackPlane, p)) {
      return { point: p.clone(), normal: this.fallbackPlane.normal.clone() };
    }
    return null;
  }

  private pickStroke(): StrokeRecord | null {
    this.raycaster.setFromCamera(this.pointer, this.camera as THREE.Camera);
    const meshes: THREE.Object3D[] = [];
    const collect = (g: THREE.Group) => g.traverse((o) => { if ((o as THREE.Mesh).isMesh) meshes.push(o); });
    collect(this.strokesGroup);
    collect(this.guidesGroup);
    const hits = this.raycaster.intersectObjects(meshes, false);
    if (!hits.length) return null;
    let obj: THREE.Object3D | null = hits[0].object;
    while (obj && !obj.userData.strokeId) obj = obj.parent;
    if (!obj) return null;
    return this.strokes.find((s) => s.id === obj!.userData.strokeId) ?? null;
  }

  private onPointerDown = (e: PointerEvent): void => {
    if (e.button !== 0 || e.pointerType === 'touch') return;
    this.setPointerFromEvent(e);
    this.updateCursor(e);
    this.downScreen.set(...this.screenOf(e));

    if (this.tool === 'pencil' || this.tool === 'guide') {
      this.beginDraw(e);
    } else if (this.tool === 'move') {
      const rec = this.pickStroke();
      if (rec) {
        if (!this.selected.has(rec)) this.setSelection([rec]);
        this.beginMove();
      } else {
        this.beginLasso(e);
      }
    } else if (this.tool === 'select') {
      this.onSelectPointerDown(e);
    } else if (this.tool === 'eraser') {
      this.beginLasso(e); // click corto = borrar bajo cursor; arrastre = lazo
    }
  };

  private onPointerMove = (e: PointerEvent): void => {
    this.updateCursor(e);
    this.setPointerFromEvent(e);
    if (this.mode === 'draw') this.moveDraw(e);
    else if (this.mode === 'move') this.moveDrag(e);
    else if (this.mode === 'lasso') this.moveLasso(e);
    else if (this.mode === 'point-drag') this.movePointDrag();
  };

  private onPointerLeave = (): void => {
    if (this.mode === 'idle') this.cursorEl.style.display = 'none';
  };

  private onPointerUp = (e: PointerEvent): void => {
    if (this.mode === 'draw') { this.endDraw(e); }
    else if (this.mode === 'move') { this.endMove(); }
    else if (this.mode === 'lasso') { this.endLasso(e); }
    else if (this.mode === 'point-drag') { this.endPointDrag(); }
    this.mode = 'idle';
    this.controls.enabled = true;
    try { this.canvas.releasePointerCapture(e.pointerId); } catch { /* noop */ }
  };

  private onKeyDown = (e: KeyboardEvent): void => {
    const ctrl = e.ctrlKey || e.metaKey;
    if (ctrl && e.key.toLowerCase() === 'z') {
      e.preventDefault();
      if (e.shiftKey || e.altKey) this.redo();
      else this.undo();
    } else if (ctrl && e.key.toLowerCase() === 'y') {
      e.preventDefault();
      this.redo();
    } else if (e.key === 'Delete' || e.key === 'Backspace') {
      if (this.selected.size) { e.preventDefault(); this.deleteSelection(); }
    } else if (e.key === 'Escape') {
      this.setSelection([]);
      this.clearPointEdit();
    }
  };

  // ---------------------------------------------------------------- dibujo

  /** Presión normalizada 0–1 para esta muestra. El mouse no reporta presión
   *  real (siempre ~0.5 con botón apretado) → se ignora y dibuja a ancho
   *  completo; solo el lápiz/tableta modula el ancho del trazo. */
  private samplePressure(e: PointerEvent): number {
    if (e.pointerType !== 'pen') return 1;
    return THREE.MathUtils.clamp(e.pressure || 0.5, 0, 1);
  }

  private beginDraw(e: PointerEvent): void {
    const hit = this.resolveHit();
    if (!hit) return;
    this.canvas.setPointerCapture(e.pointerId);
    this.mode = 'draw';
    this.controls.enabled = false;
    const kind = this.tool === 'guide' ? 'guide' : 'stroke';
    const line = this.makePreviewLine(kind);
    this.strokesGroup.add(line);
    let mirrorLine: THREE.Line | undefined;
    if (this.mirror && kind === 'stroke') {
      mirrorLine = this.makePreviewLine(kind);
      this.strokesGroup.add(mirrorLine);
    }
    this.current = { points: [hit.point], pressures: [this.samplePressure(e)], kind, line, mirrorLine };
    this.updatePreview();
  }

  private moveDraw(e: PointerEvent): void {
    if (!this.current) return;
    const hit = this.resolveHit();
    if (!hit) return;
    const pts = this.current.points;
    if (hit.point.distanceTo(pts[pts.length - 1]) < MIN_SAMPLE_DIST) return;
    pts.push(hit.point);
    this.current.pressures.push(this.samplePressure(e));
    this.updatePreview();
  }

  private endDraw(_e: PointerEvent): void {
    this.commitStroke();
  }

  private makePreviewLine(kind: 'stroke' | 'guide'): THREE.Line {
    const geo = new THREE.BufferGeometry();
    const mat = new THREE.LineBasicMaterial({
      color: kind === 'guide' ? 0xffa53a : new THREE.Color(this.brush.color),
      transparent: true, opacity: kind === 'guide' ? 0.95 : Math.max(this.brush.opacity, 0.6),
    });
    return new THREE.Line(geo, mat);
  }

  private updatePreview(): void {
    if (!this.current) return;
    this.current.line?.geometry.setFromPoints(this.current.points);
    if (this.current.mirrorLine) this.current.mirrorLine.geometry.setFromPoints(this.mirrored(this.current.points));
  }

  private strokeRadius(): number {
    return 0.01 + (this.brush.size / 100) * 0.12;
  }

  /** Radio en el punto de índice `i` (0..n-1) según su presión: con
   *  `pressureSensitivity` en 0 el ancho es constante (comportamiento de
   *  antes); en 1 llega a angostarse hasta ~15% del ancho con presión mínima.
   *  El piso evita que el trazo desaparezca del todo con presión 0. */
  private radiusAt(pressure: number): number {
    const base = this.strokeRadius();
    const sens = THREE.MathUtils.clamp(this.brush.pressureSensitivity ?? 0, 0, 1);
    const floor = THREE.MathUtils.lerp(1, 0.15, sens);
    return base * THREE.MathUtils.lerp(floor, 1, THREE.MathUtils.clamp(pressure, 0, 1));
  }

  /** Interpola `pressures[]` (indexado 0..n-1, uniforme) al parámetro `t`
   *  crudo de la curva (NO al `u` de arco-longitud de getPointAt). */
  private pressureAtT(pressures: number[], t: number): number {
    const n = pressures.length;
    if (n < 2) return pressures[0] ?? 1;
    const pos = THREE.MathUtils.clamp(t, 0, 1) * (n - 1);
    const i0 = Math.floor(pos);
    const i1 = Math.min(i0 + 1, n - 1);
    const frac = pos - i0;
    return pressures[i0] * (1 - frac) + pressures[i1] * frac;
  }

  /** Tubo de ancho variable: arma un TubeGeometry de radio unitario (misma
   *  malla/normales que Three.js generaría con radio fijo) y después re-escala
   *  cada anillo según la presión interpolada en ese punto de la curva. Así
   *  se reusa el cálculo de frames (Frenet/parallel-transport) de Three.js —
   *  sin reimplementarlo a mano — y solo se toca el radio. */
  private buildTube(points: THREE.Vector3[], pressures: number[]): THREE.Mesh | null {
    if (points.length < 2) return null;
    const curve = new THREE.CatmullRomCurve3(points, false, 'centripetal');
    const radialSegs = 10;
    const segs = Math.min(Math.max(points.length * 6, 8), 1400);
    const geo = new THREE.TubeGeometry(curve, segs, 1, radialSegs, false);
    const pos = geo.getAttribute('position') as THREE.BufferAttribute;
    const vertsPerRing = radialSegs + 1;
    const ringCount = segs + 1;
    for (let i = 0; i < ringCount; i++) {
      const u = i / segs;
      const t = curve.getUtoTmapping(u, 0);
      const center = curve.getPoint(t);
      const radius = this.radiusAt(this.pressureAtT(pressures, t));
      for (let j = 0; j < vertsPerRing; j++) {
        const vi = i * vertsPerRing + j;
        const ox = pos.getX(vi) - center.x;
        const oy = pos.getY(vi) - center.y;
        const oz = pos.getZ(vi) - center.z;
        pos.setXYZ(vi, center.x + ox * radius, center.y + oy * radius, center.z + oz * radius);
      }
    }
    pos.needsUpdate = true;
    geo.computeVertexNormals();
    const col = new THREE.Color(this.brush.color);
    return new THREE.Mesh(geo, new THREE.MeshStandardMaterial({
      color: col, emissive: col.clone().multiplyScalar(0.06),
      roughness: THREE.MathUtils.lerp(0.9, 0.25, this.brush.hardness ?? 0.8), metalness: 0,
      transparent: this.brush.opacity < 1, opacity: this.brush.opacity,
    }));
  }

  /** Superficie-guía: extruye el trazo perpendicular a la vista. Limpia: solo
   *  borde + línea naranja (sin secciones que confundan con trazos). */
  private buildGuideSurface(points: THREE.Vector3[]): THREE.Mesh | null {
    if (points.length < 2) return null;
    const axis = new THREE.Vector3();
    (this.camera as THREE.Camera).getWorldDirection(axis).normalize();
    const box = new THREE.Box3().setFromPoints(points);
    const D = THREE.MathUtils.clamp(box.getSize(new THREE.Vector3()).length() * 0.6, 1, 4);
    const n = points.length;
    const pos: number[] = [];
    const idx: number[] = [];
    const front: THREE.Vector3[] = [];
    const back: THREE.Vector3[] = [];
    for (let i = 0; i < n; i++) {
      const p = points[i];
      const f = p.clone().add(axis.clone().multiplyScalar(D));
      const b = p.clone().add(axis.clone().multiplyScalar(-D));
      front.push(f); back.push(b);
      pos.push(f.x, f.y, f.z, b.x, b.y, b.z);
    }
    for (let i = 0; i < n - 1; i++) {
      const a = 2 * i, b = 2 * i + 1, c = 2 * (i + 1), d = 2 * (i + 1) + 1;
      idx.push(a, b, c, c, b, d);
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    geo.setIndex(idx);
    geo.computeVertexNormals();
    const mesh = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({
      color: 0x4c9bff, roughness: 1, metalness: 0, transparent: true,
      opacity: 0.1, side: THREE.DoubleSide, depthWrite: false,
    }));
    const edgeMat = new THREE.LineBasicMaterial({ color: 0x4c9bff, transparent: true, opacity: 0.25 });
    mesh.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(front), edgeMat));
    mesh.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(back), edgeMat.clone()));
    mesh.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(points),
      new THREE.LineBasicMaterial({ color: 0xffa53a }))); // naranja = trazo original
    return mesh;
  }

  private mirrored(points: THREE.Vector3[]): THREE.Vector3[] {
    return points.map((p) => new THREE.Vector3(-p.x, p.y, p.z));
  }

  private commitStroke(): void {
    if (!this.current) return;
    for (const l of [this.current.line, this.current.mirrorLine]) {
      if (!l) continue;
      this.strokesGroup.remove(l);
      l.geometry.dispose();
      (l.material as THREE.Material).dispose();
    }
    const { points, pressures, kind } = this.current;
    this.current = null;
    if (points.length < 2) return;

    if (kind === 'guide') {
      const mesh = this.buildGuideSurface(points);
      if (mesh) this.setGuide(mesh);
      return;
    }
    const group = new THREE.Group();
    const a = this.buildTube(points, pressures);
    if (a) group.add(a);
    if (this.mirror) { const b = this.buildTube(this.mirrored(points), pressures); if (b) group.add(b); }
    const rec: StrokeRecord = { id: `stroke-${this.seq++}`, object: group, points, pressures, kind };
    group.userData.strokeId = rec.id;
    this.addStrokeRecord(rec);
    this.pushCmd({
      undo: () => this.removeStrokeRecord(rec),
      redo: () => this.addStrokeRecord(rec),
    });
  }

  /** Reconstruye la malla del trazo tras editar sus puntos (herramienta
   *  'select'). Descarta la malla vieja y crea una nueva con los mismos
   *  materiales/presión — más simple y robusto que mutar geometría en vivo. */
  private rebuildStrokeMesh(rec: StrokeRecord): void {
    while (rec.object.children.length) {
      const child = rec.object.children[0] as THREE.Mesh;
      rec.object.remove(child);
      child.geometry?.dispose();
      (child.material as THREE.Material)?.dispose();
    }
    const a = this.buildTube(rec.points, rec.pressures);
    if (a) rec.object.add(a);
    if (this.mirror) {
      const b = this.buildTube(this.mirrored(rec.points), rec.pressures);
      if (b) rec.object.add(b);
    }
  }

  private addStrokeRecord(rec: StrokeRecord): void {
    this.strokesGroup.add(rec.object);
    if (!this.strokes.includes(rec)) this.strokes.push(rec);
  }

  private removeStrokeRecord(rec: StrokeRecord): void {
    this.strokesGroup.remove(rec.object);
    this.strokes = this.strokes.filter((s) => s !== rec);
    this.selected.delete(rec);
    if (this.editingStroke === rec) this.clearPointEdit();
  }

  // ---------------------------------------------------------------- guías

  private setGuide(mesh: THREE.Mesh): void {
    const prev = this.activeGuide;
    const id = `guide-${this.seq++}`;
    mesh.userData.surfaceId = id;
    mesh.userData.strokeId = id;
    const attach = () => {
      this.guidesGroup.add(mesh);
      this.surfaces.push({ id, type: 'loft', mesh });
      this.activeGuide = { id, mesh };
    };
    if (prev) this.detachGuide(prev);
    attach();
    this.pushCmd({
      undo: () => { this.detachGuide({ id, mesh }); if (prev) { this.guidesGroup.add(prev.mesh); this.surfaces.push({ id: prev.id, type: 'loft', mesh: prev.mesh }); this.activeGuide = prev; } },
      redo: () => { if (prev) this.detachGuide(prev); attach(); },
    });
  }

  private detachGuide(g: { id: string; mesh: THREE.Mesh }): void {
    this.guidesGroup.remove(g.mesh);
    this.surfaces = this.surfaces.filter((s) => s.id !== g.id);
    if (this.activeGuide?.id === g.id) this.activeGuide = null;
  }

  deleteGuide(): boolean {
    const g = this.activeGuide;
    if (!g) return false;
    this.detachGuide(g);
    this.pushCmd({
      undo: () => { this.guidesGroup.add(g.mesh); this.surfaces.push({ id: g.id, type: 'loft', mesh: g.mesh }); this.activeGuide = g; },
      redo: () => this.detachGuide(g),
    });
    return true;
  }

  hasGuide(): boolean {
    return this.activeGuide !== null;
  }

  // ---------------------------------------------------------------- selección

  private setSelection(recs: StrokeRecord[]): void {
    for (const r of this.selected) this.highlight(r, false);
    this.selected = new Set(recs);
    for (const r of this.selected) this.highlight(r, true);
  }

  private highlight(rec: StrokeRecord, on: boolean): void {
    rec.object.traverse((o) => {
      const m = (o as THREE.Mesh).material as THREE.MeshStandardMaterial | undefined;
      if (m && m.emissive) {
        m.emissive.set(on ? 0x2b6fff : 0x000000);
        m.emissiveIntensity = on ? 0.9 : 1;
        m.needsUpdate = true;
      }
    });
  }

  selectedCount(): number {
    return this.selected.size;
  }

  deleteSelection(): void {
    const recs = [...this.selected];
    if (!recs.length) return;
    const wasGuide = new Map<string, { id: string; mesh: THREE.Mesh } | null>();
    const remove = () => {
      for (const r of recs) {
        r.object.parent?.remove(r.object);
        this.strokes = this.strokes.filter((s) => s !== r);
        if (r.kind === 'guide') { this.surfaces = this.surfaces.filter((s) => s.id !== r.id); if (this.activeGuide?.id === r.id) this.activeGuide = null; }
      }
    };
    const add = () => {
      for (const r of recs) {
        (r.kind === 'guide' ? this.guidesGroup : this.strokesGroup).add(r.object);
        if (!this.strokes.includes(r)) this.strokes.push(r);
        if (r.kind === 'guide') { this.surfaces.push({ id: r.id, type: 'loft', mesh: r.object as THREE.Mesh }); this.activeGuide = { id: r.id, mesh: r.object as THREE.Mesh }; }
      }
    };
    void wasGuide;
    remove();
    this.setSelection([]);
    this.pushCmd({ undo: add, redo: remove });
  }

  // ---------------------------------------------------------------- mover

  private beginMove(): void {
    this.mode = 'move';
    this.controls.enabled = false;
    const hit = this.resolveHit();
    this.lastMoveWorld.copy(hit ? hit.point : this.controls.target);
    this.moveStart.clear();
    for (const r of this.selected) this.moveStart.set(r.object, r.object.position.clone());
  }

  private moveDrag(_e: PointerEvent): void {
    const hit = this.resolveHit();
    if (!hit) return;
    const delta = hit.point.clone().sub(this.lastMoveWorld);
    for (const r of this.selected) r.object.position.add(delta);
    this.lastMoveWorld.copy(hit.point);
  }

  private endMove(): void {
    const moved = [...this.selected];
    const deltas = moved.map((r) => r.object.position.clone().sub(this.moveStart.get(r.object) ?? r.object.position));
    if (deltas.every((d) => d.lengthSq() < 1e-8)) return;
    this.pushCmd({
      undo: () => moved.forEach((r, i) => r.object.position.sub(deltas[i])),
      redo: () => moved.forEach((r, i) => r.object.position.add(deltas[i])),
    });
  }

  // ---------------------------------------------------------------- edición de nodos (herramienta 'select')
  //
  // Distinta de 'move': ahí se arrastra el TRAZO entero (su object.position).
  // Acá se edita un PUNTO DE CONTROL individual del vector — como la flecha
  // blanca de Illustrator frente a la negra. Solo aplica a trazos ('stroke'),
  // no a guías.

  private static readonly HANDLE_RADIUS = 0.028;

  private makeHandleMesh(): THREE.Mesh {
    const geo = new THREE.SphereGeometry(WebGLDesign3D.HANDLE_RADIUS, 16, 12);
    const mat = new THREE.MeshBasicMaterial({ color: 0x2b6fff, depthTest: false });
    const m = new THREE.Mesh(geo, mat);
    m.renderOrder = 999;
    return m;
  }

  /** Puntos de control en espacio MUNDO (el trazo puede estar desplazado por
   *  la herramienta 'move', que solo toca `object.position`). */
  private showPointHandles(rec: StrokeRecord): void {
    this.clearPointEdit();
    this.editingStroke = rec;
    this.pointHandles = rec.points.map((p, i) => {
      const h = this.makeHandleMesh();
      h.position.copy(p).add(rec.object.position);
      h.userData.pointIndex = i;
      this.handlesGroup.add(h);
      return h;
    });
  }

  private clearPointEdit(): void {
    for (const h of this.pointHandles) {
      this.handlesGroup.remove(h);
      h.geometry.dispose();
      (h.material as THREE.Material).dispose();
    }
    this.pointHandles = [];
    this.editingStroke = null;
    this.dragPointIndex = -1;
  }

  private pickHandle(): number {
    this.raycaster.setFromCamera(this.pointer, this.camera as THREE.Camera);
    const hits = this.raycaster.intersectObjects(this.pointHandles, false);
    if (!hits.length) return -1;
    return (hits[0].object.userData.pointIndex as number) ?? -1;
  }

  private onSelectPointerDown(e: PointerEvent): void {
    const idx = this.editingStroke ? this.pickHandle() : -1;
    if (idx >= 0 && this.editingStroke) {
      this.canvas.setPointerCapture(e.pointerId);
      this.mode = 'point-drag';
      this.controls.enabled = false;
      this.dragPointIndex = idx;
      this.dragPointStart.copy(this.editingStroke.points[idx]);
      return;
    }
    // click fuera de un handle: elegir otro trazo (o deseleccionar)
    const rec = this.pickStroke();
    if (rec && rec.kind === 'stroke') this.showPointHandles(rec);
    else this.clearPointEdit();
  }

  private movePointDrag(): void {
    if (!this.editingStroke || this.dragPointIndex < 0) return;
    const hit = this.resolveHit();
    if (!hit) return;
    const local = hit.point.clone().sub(this.editingStroke.object.position);
    this.editingStroke.points[this.dragPointIndex].copy(local);
    this.rebuildStrokeMesh(this.editingStroke);
    const h = this.pointHandles[this.dragPointIndex];
    if (h) h.position.copy(local).add(this.editingStroke.object.position);
  }

  private endPointDrag(): void {
    if (!this.editingStroke || this.dragPointIndex < 0) return;
    const rec = this.editingStroke;
    const idx = this.dragPointIndex;
    const before = this.dragPointStart.clone();
    const after = rec.points[idx].clone();
    this.dragPointIndex = -1;
    if (before.distanceToSquared(after) < 1e-8) return;
    this.pushCmd({
      undo: () => { rec.points[idx].copy(before); this.rebuildStrokeMesh(rec); if (this.editingStroke === rec) this.pointHandles[idx]?.position.copy(before).add(rec.object.position); },
      redo: () => { rec.points[idx].copy(after); this.rebuildStrokeMesh(rec); if (this.editingStroke === rec) this.pointHandles[idx]?.position.copy(after).add(rec.object.position); },
    });
  }

  // ---------------------------------------------------------------- lazo (selección / goma)

  private beginLasso(e: PointerEvent): void {
    this.mode = 'lasso';
    this.controls.enabled = false;
    this.canvas.setPointerCapture(e.pointerId);
    this.lassoPts = [this.screenOf(e)];
    this.lassoEl.style.display = 'block';
    this.lassoPoly.setAttribute('points', '');
  }

  private moveLasso(e: PointerEvent): void {
    this.lassoPts.push(this.screenOf(e));
    this.lassoPoly.setAttribute('points', this.lassoPts.map((p) => p.join(',')).join(' '));
  }

  private endLasso(e: PointerEvent): void {
    this.lassoEl.style.display = 'none';
    const moved = Math.hypot(...this.screenOf(e).map((v, i) => v - [this.downScreen.x, this.downScreen.y][i]));
    if (moved < DRAG_THRESHOLD) {
      // click corto: seleccionar/borrar el trazo bajo el cursor
      const rec = this.pickStroke();
      if (this.tool === 'eraser') {
        if (rec) { this.setSelection([rec]); this.deleteSelection(); }
      } else {
        this.setSelection(rec ? [rec] : []);
      }
      return;
    }
    const inside = this.strokesInLasso();
    if (this.tool === 'eraser') {
      this.setSelection(inside);
      this.deleteSelection();
    } else {
      this.setSelection(inside);
    }
  }

  private strokesInLasso(): StrokeRecord[] {
    if (this.lassoPts.length < 3) return [];
    const rect = this.canvas.getBoundingClientRect();
    const cam = this.camera as THREE.Camera;
    const res: StrokeRecord[] = [];
    for (const rec of this.strokes) {
      const pts = rec.points;
      let hitCount = 0;
      for (const p of pts) {
        const v = p.clone().applyMatrix4(rec.object.matrixWorld).project(cam);
        const sx = ((v.x + 1) / 2) * rect.width;
        const sy = ((-v.y + 1) / 2) * rect.height;
        if (this.pointInPoly(sx, sy)) { hitCount++; if (hitCount >= Math.max(1, pts.length * 0.3)) break; }
      }
      if (hitCount >= Math.max(1, pts.length * 0.3)) res.push(rec);
    }
    return res;
  }

  private pointInPoly(x: number, y: number): boolean {
    const poly = this.lassoPts;
    let inside = false;
    for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
      const [xi, yi] = poly[i];
      const [xj, yj] = poly[j];
      if ((yi > y) !== (yj > y) && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) inside = !inside;
    }
    return inside;
  }

  // ---------------------------------------------------------------- historia

  private pushCmd(cmd: Command): void {
    this.undoStack.push(cmd);
    this.redoStack = [];
  }

  undo(): void {
    const cmd = this.undoStack.pop();
    if (!cmd) return;
    cmd.undo();
    this.redoStack.push(cmd);
    this.setSelection([]);
  }

  redo(): void {
    const cmd = this.redoStack.pop();
    if (!cmd) return;
    cmd.redo();
    this.undoStack.push(cmd);
    this.setSelection([]);
  }

  canUndo(): boolean { return this.undoStack.length > 0; }
  canRedo(): boolean { return this.redoStack.length > 0; }

  // ---------------------------------------------------------------- utilidades

  private disposeNode(o: THREE.Object3D): void {
    o.traverse((c) => {
      const m = c as THREE.Mesh;
      if (m.geometry) m.geometry.dispose();
      const mat = m.material as THREE.Material | THREE.Material[] | undefined;
      if (Array.isArray(mat)) mat.forEach((x) => x.dispose());
      else mat?.dispose();
    });
  }

  clear(): void {
    for (const rec of this.strokes) { rec.object.parent?.remove(rec.object); }
    this.strokes = [];
    if (this.activeGuide) this.detachGuide(this.activeGuide);
    this.selected.clear();
    this.clearPointEdit();
    this.undoStack = [];
    this.redoStack = [];
  }

  // ---------------------------------------------------------------- loop / resize

  private resize(): void {
    const c = this.renderer.domElement;
    const pr = Math.min(window.devicePixelRatio, 2);
    const w = c.clientWidth, h = c.clientHeight;
    if (w === 0 || h === 0) return;
    const needW = Math.floor(w * pr), needH = Math.floor(h * pr);
    if (c.width === needW && c.height === needH) return;
    this.renderer.setPixelRatio(pr);
    this.renderer.setSize(w, h, false);
    if (this.view === 'persp') {
      this.perspCamera.aspect = w / h;
      this.perspCamera.updateProjectionMatrix();
    } else {
      this.applyOrthoFrustum();
    }
  }

  private animate = (): void => {
    if (this.disposed) return;
    this.raf = requestAnimationFrame(this.animate);
    this.resize();
    this.controls.update();
    this.renderer.render(this.scene, this.camera as THREE.Camera);
    if (this.showAxes) this.updateVPOverlay();
  };

  // ---------------------------------------------------------------- debug
  debugDemo(): void {
    const pts: THREE.Vector3[] = [];
    for (let i = 0; i <= 40; i++) {
      const a = (i / 40) * Math.PI * 2;
      pts.push(new THREE.Vector3(Math.cos(a) * 1.2, 0.6 + Math.sin(a) * 1.2, 0));
    }
    const pressures = pts.map(() => 1);
    const g = new THREE.Group();
    const t = this.buildTube(pts, pressures);
    if (t) g.add(t);
    const rec: StrokeRecord = { id: `stroke-${this.seq++}`, object: g, points: pts, pressures, kind: 'stroke' };
    g.userData.strokeId = rec.id;
    this.addStrokeRecord(rec);
  }
}

export default WebGLDesign3D;
