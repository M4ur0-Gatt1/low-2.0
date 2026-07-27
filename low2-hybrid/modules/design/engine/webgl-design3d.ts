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
import { TransformControls } from 'three/examples/jsm/controls/TransformControls.js';
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
  /** Capa/grupo al que pertenece el trazo (id del store). Determina
   *  visibilidad y opacidad grupal. */
  layerId: string;
  /** Opacidad propia del trazo (del pincel al crearlo); la opacidad efectiva
   *  es baseOpacity × opacidad de la capa. */
  baseOpacity: number;
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
  // varias guías pueden coexistir (crear una nueva ya NO borra las
  // anteriores) — `activeGuide` es la más reciente, usada como fallback de
  // plano infinito en resolveHit; cualquiera se borra individualmente con la
  // goma (click sobre ella) o deleteGuide() borra la última.
  private guides: { id: string; mesh: THREE.Mesh; plane?: THREE.Plane }[] = [];
  private activeGuide: { id: string; mesh: THREE.Mesh; plane?: THREE.Plane } | null = null;
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
    /** normal de la superficie sobre la que se apoyó el primer punto — para
     *  que una guía nueva salga PERPENDICULAR al plano en el que se estaba
     *  dibujando (ver buildGuideSurface), no siempre de cara a la cámara. */
    baseNormal?: THREE.Vector3;
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

  // gizmo de transformación (herramienta 'move', un solo trazo seleccionado):
  // pensado como base para animación futura (posar y grabar keyframes).
  private gizmo?: TransformControls;
  private gizmoTarget: THREE.Object3D | null = null;
  private gizmoDragStart = new THREE.Vector3();

  // portapapeles: copiar/pegar trazos (Ctrl+C / Ctrl+V)
  private clipboard: { points: THREE.Vector3[]; pressures: number[] }[] = [];

  // estabilizador de pulso ("Stable Strokes"): el punto que se agrega al
  // trazo persigue con retraso al punto crudo del puntero.
  private smoothed: THREE.Vector3 | null = null;

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
  private brush: BrushSettings = { color: '#22252e', size: 12, opacity: 1, hardness: 0.8, pressureSensitivity: 0.6, stabilization: 0.35 };
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

    // gizmo de mover (translate): solo responde al botón izquierdo (lo
    // decide TransformControls internamente), así que nunca pisa el
    // giro con el botón derecho de OrbitControls. Empieza sin objeto — inerte
    // hasta que haya exactamente un trazo seleccionado con la herramienta 'move'.
    this.gizmo = new TransformControls(this.camera, this.canvas);
    this.gizmo.setMode('translate');
    this.gizmo.setSize(0.85);
    this.gizmo.detach();
    this.gizmo.addEventListener('dragging-changed', (ev) => {
      this.controls.enabled = !ev.value;
      if (ev.value) {
        this.gizmoTarget = (this.gizmo!.object as THREE.Object3D | undefined) ?? null;
        if (this.gizmoTarget) this.gizmoDragStart.copy(this.gizmoTarget.position);
      } else if (this.gizmoTarget) {
        const obj = this.gizmoTarget;
        const before = this.gizmoDragStart.clone();
        const after = obj.position.clone();
        this.gizmoTarget = null;
        if (before.distanceToSquared(after) > 1e-8) {
          this.pushCmd({ undo: () => obj.position.copy(before), redo: () => obj.position.copy(after) });
        }
      }
    });
    this.scene.add(this.gizmo);

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
    this.gizmo?.dispose();
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
    if (this.gizmo) this.gizmo.camera = this.camera as THREE.Camera;
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

  /** Superficie primitiva activa (plano/cilindro/esfera/toro/loft) — solo UNA
   *  a la vez, como ya sugiere el botón-toggle de la barra. Antes, apagar o
   *  cambiar de tipo nunca borraba la malla anterior: quedaban "fantasmas"
   *  acumulados en `surfaces` interfiriendo con resolveHit (raycasts que
   *  pegaban en un plano viejo en una orientación rarísima e inesperada). */
  private activeSurfaceId: string | null = null;

  private removeActiveSurface(): void {
    if (!this.activeSurfaceId) return;
    const s = this.surfaces.find((x) => x.id === this.activeSurfaceId);
    if (s) {
      this.surfacesGroup.remove(s.mesh);
      s.mesh.traverse((o) => {
        const m = o as THREE.Mesh;
        m.geometry?.dispose();
        const mat = m.material as THREE.Material | THREE.Material[] | undefined;
        if (Array.isArray(mat)) mat.forEach((x) => x.dispose());
        else mat?.dispose();
      });
      this.surfaces = this.surfaces.filter((x) => x.id !== this.activeSurfaceId);
    }
    this.activeSurfaceId = null;
  }

  private addSurface(type: SurfaceType): void {
    this.removeActiveSurface();
    const geo = type === 'plane' ? new THREE.PlaneGeometry(4, 4) : this.surfaceGeometry(type, 1.4);
    const mesh = this.makeSurfaceMesh(geo);
    mesh.position.copy(this.controls.target);
    if (type === 'plane') mesh.lookAt(this.camera.position);
    const s: SurfaceObj = { id: `surf-${this.seq++}`, type, mesh };
    mesh.userData.surfaceId = s.id;
    this.surfacesGroup.add(mesh);
    this.surfaces.push(s);
    this.activeSurfaceId = s.id;
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
    const toolChanged = this.tool !== s.currentTool;
    this.tool = s.currentTool;
    this.brush = s.brushSettings;
    this.mirror = s.mirrorMode;
    const key = s.activeSurface ? s.activeSurface.type : '';
    if (key !== this.lastSurfaceKey) {
      if (key) this.addSurface(s.activeSurface!.type);
      else this.removeActiveSurface();
    }
    this.lastSurfaceKey = key;
    if (toolChanged) this.syncGizmo();
    this.gizmo?.setMode(s.gizmoMode || 'translate');
    this.applyLayerStyles(); // visibilidad/opacidad de capas
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
    // Guía activa: si el rayo no tocó la malla finita, proyectar sobre el PLANO
    // (infinito) de la guía → los trazos caen EXACTAMENTE donde se hizo la guía,
    // no en el centro del dibujo (como esperaba el usuario en vista de lado).
    // NO al crear una guía nueva (tool 'guide'): esa se dibuja sobre el plano
    // de la cámara, no sobre la guía anterior.
    if (this.tool !== 'guide' && this.activeGuide?.plane) {
      const gp = new THREE.Vector3();
      if (this.raycaster.ray.intersectPlane(this.activeGuide.plane, gp)) {
        return { point: gp.clone(), normal: this.activeGuide.plane.normal.clone() };
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
      // el pointerdown sobre un handle del gizmo lo maneja TransformControls
      // solo (su propio listener, ya enterado por el hover del pointermove
      // anterior) — no arrancar además un lazo/mover libre encima.
      if (this.gizmo?.axis) return;
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

  private static readonly TOOL_KEYS: Record<string, ToolType> = {
    p: 'pencil', g: 'guide', v: 'move', a: 'select', e: 'eraser', l: 'liquify',
  };

  private onKeyDown = (e: KeyboardEvent): void => {
    const ctrl = e.ctrlKey || e.metaKey;
    const target = document.activeElement;
    const typing = target && ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName);
    if (!ctrl && !e.altKey && !typing && WebGLDesign3D.TOOL_KEYS[e.key.toLowerCase()]) {
      e.preventDefault();
      lowStore.setCurrentTool(WebGLDesign3D.TOOL_KEYS[e.key.toLowerCase()]);
      return;
    }
    if (ctrl && e.key.toLowerCase() === 'z') {
      e.preventDefault();
      if (e.shiftKey || e.altKey) this.redo();
      else this.undo();
    } else if (ctrl && e.key.toLowerCase() === 'y') {
      e.preventDefault();
      this.redo();
    } else if (e.key === 'Delete' || e.key === 'Backspace') {
      if (this.selected.size) { e.preventDefault(); this.deleteSelection(); }
    } else if (ctrl && e.key.toLowerCase() === 'c') {
      if (this.selected.size) { e.preventDefault(); this.copySelection(); }
    } else if (ctrl && e.key.toLowerCase() === 'v') {
      if (this.clipboard.length) { e.preventDefault(); this.pasteClipboard(); }
    } else if (e.key === 'Escape') {
      this.setSelection([]);
      this.clearPointEdit();
    }
  };

  // ---------------------------------------------------------------- portapapeles

  copySelection(): void {
    const strokesOnly = [...this.selected].filter((r) => r.kind === 'stroke');
    if (!strokesOnly.length) return;
    this.clipboard = strokesOnly.map((r) => ({
      points: r.points.map((p) => p.clone().add(r.object.position)),
      pressures: [...r.pressures],
    }));
  }

  pasteClipboard(): void {
    if (!this.clipboard.length) return;
    const offset = new THREE.Vector3(0.18, 0, 0.18); // corrido para no tapar el original
    const created: StrokeRecord[] = [];
    for (const c of this.clipboard) {
      const pts = c.points.map((p) => p.clone());
      const pressures = [...c.pressures];
      const group = new THREE.Group();
      const a = this.buildTube(pts, pressures);
      if (a) group.add(a);
      group.position.copy(offset);
      const rec: StrokeRecord = {
        id: `stroke-${this.seq++}`, object: group, points: pts, pressures, kind: 'stroke',
        layerId: this.activeLayerId(), baseOpacity: 1,
      };
      group.userData.strokeId = rec.id;
      created.push(rec);
    }
    for (const rec of created) this.addStrokeRecord(rec);
    this.setSelection(created);
    this.pushCmd({
      undo: () => created.forEach((r) => this.removeStrokeRecord(r)),
      redo: () => created.forEach((r) => this.addStrokeRecord(r)),
    });
  }

  // ---------------------------------------------------------------- dibujo

  /** Presión normalizada 0–1 para esta muestra. El mouse no reporta presión
   *  real (siempre ~0.5 con botón apretado) → se ignora y dibuja a ancho
   *  completo; solo el lápiz/tableta modula el ancho del trazo. */
  private samplePressure(e: PointerEvent): number {
    if (e.pointerType !== 'pen') return 1;
    return THREE.MathUtils.clamp(e.pressure || 0.5, 0, 1);
  }

  private static readonly SNAP_PX = 14;

  /** Si el puntero está cerca (en pantalla) de un vértice de un trazo ya
   *  dibujado, devuelve ese punto exacto en mundo — para poder arrancar (o
   *  terminar) una línea nueva pegada a una existente sin tener que apuntar
   *  perfecto. Las guías no cuentan: no retienen sus puntos tras dibujarlas. */
  private findSnapVertex(e: PointerEvent, refPoint?: THREE.Vector3, maxWorld = Infinity): THREE.Vector3 | null {
    const rect = this.canvas.getBoundingClientRect();
    const px = e.clientX - rect.left, py = e.clientY - rect.top;
    const cam = this.camera as THREE.Camera;
    let best: THREE.Vector3 | null = null;
    let bestDist = WebGLDesign3D.SNAP_PX;
    for (const rec of this.strokes) {
      for (const p of rec.points) {
        const world = p.clone().add(rec.object.position);
        // filtro de PROFUNDIDAD: no enganchar vértices que solo caen cerca en
        // pantalla pero están a otra profundidad (lo que rompía en vista de lado)
        if (refPoint && world.distanceTo(refPoint) > maxWorld) continue;
        const v = world.clone().project(cam);
        const sx = ((v.x + 1) / 2) * rect.width, sy = ((1 - v.y) / 2) * rect.height;
        const d = Math.hypot(sx - px, sy - py);
        if (d < bestDist) { bestDist = d; best = world; }
      }
    }
    return best;
  }

  /** "Hilo tenso": ajusta el punto final para que el segmento start→raw
   *  quede exactamente paralelo al eje X, Y o Z del mundo (el que más se
   *  parezca a la dirección real que tiró el gesto) — proyecta el vector de
   *  arrastre sobre ese eje. Una recta paralela a un eje SIEMPRE converge a
   *  el punto de fuga de ese eje al verla en perspectiva, sin importar desde
   *  dónde salga — por eso no hace falta apuntar al punto de fuga a mano. */
  private snapToNearestAxis(start: THREE.Vector3, raw: THREE.Vector3): THREE.Vector3 {
    const drag = raw.clone().sub(start);
    if (drag.lengthSq() < 1e-10) return raw;
    const dragN = drag.clone().normalize();
    let bestAxis = WebGLDesign3D.VP_AXES[0][0];
    let bestAbsCos = -1;
    for (const [axis] of WebGLDesign3D.VP_AXES) {
      const c = Math.abs(dragN.dot(axis));
      if (c > bestAbsCos) { bestAbsCos = c; bestAxis = axis; }
    }
    const proj = drag.dot(bestAxis);
    return start.clone().add(bestAxis.clone().multiplyScalar(proj));
  }

  private beginDraw(e: PointerEvent): void {
    // arrancar puede engancharse a un vértice existente, pero SOLO si está cerca
    // en 3D de la superficie donde se dibuja (evita agarrar un vértice de otro
    // plano que solo cae cerca en pantalla, p. ej. en vista de lado).
    const surf = this.resolveHit();
    const snap = this.findSnapVertex(e, surf?.point, 0.8);
    const hit = snap ? { point: snap, normal: surf?.normal ?? new THREE.Vector3(0, 0, 1) } : surf;
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
    this.smoothed = hit.point.clone(); // sin retraso en el primer punto
    this.current = {
      points: [hit.point], pressures: [this.samplePressure(e)], kind, line, mirrorLine,
      baseNormal: hit.normal.clone(),
    };
    this.updatePreview();
  }

  /** "Stable Strokes": qué tan rápido el punto agregado al trazo alcanza al
   *  punto crudo del puntero. 0 = sin estabilizar (comportamiento de antes,
   *  sigue exacto). Más cerca de 1 = más retraso = pulso más limpio, a costa
   *  de "cortar camino" en curvas muy rápidas — por eso el piso en 0.15, no
   *  0, para que nunca se vuelva inmanejable. */
  private stabilizedPoint(raw: THREE.Vector3): THREE.Vector3 {
    const amt = THREE.MathUtils.clamp(this.brush.stabilization ?? 0, 0, 1);
    if (!this.smoothed) this.smoothed = raw.clone();
    if (amt <= 0) { this.smoothed.copy(raw); return raw; }
    const catchUp = THREE.MathUtils.lerp(1, 0.15, amt);
    this.smoothed.lerp(raw, catchUp);
    return this.smoothed;
  }

  /** Segunda pasada de "Stable Strokes": al soltar el trazo, además del
   *  retraso en vivo (`stabilizedPoint`), se aplican unas pasadas de media
   *  móvil de 3 puntos (like `dzRefineStroke`/`dzMovingAvg` del editor 2D) —
   *  el temblor de alta frecuencia que el retraso en vivo no llega a limar
   *  del todo queda mejor resuelto post-trazo, sin perder los extremos
   *  (inicio/fin no se tocan, para no mover dónde arrancó/terminó el gesto). */
  private refineStroke(points: THREE.Vector3[], pressures: number[]): { points: THREE.Vector3[]; pressures: number[] } {
    const amt = THREE.MathUtils.clamp(this.brush.stabilization ?? 0, 0, 1);
    if (amt <= 0 || points.length < 4) return { points, pressures };
    const passes = Math.round(THREE.MathUtils.lerp(0, 3, amt));
    let pts = points.map((p) => p.clone());
    let prs = [...pressures];
    for (let pass = 0; pass < passes; pass++) {
      const nextPts = pts.map((p, i) => (i === 0 || i === pts.length - 1)
        ? p.clone()
        : pts[i - 1].clone().add(p).add(pts[i + 1]).divideScalar(3));
      const nextPrs = prs.map((v, i) => (i === 0 || i === prs.length - 1)
        ? v
        : (prs[i - 1] + v + prs[i + 1]) / 3);
      pts = nextPts;
      prs = nextPrs;
    }
    return { points: pts, pressures: prs };
  }

  private moveDraw(e: PointerEvent): void {
    if (!this.current) return;
    // El cuerpo del trazo NO engancha a vértices (eso hacía saltar los puntos a
    // vértices de otros planos en vista de lado). El snap solo aplica al inicio
    // (beginDraw) y al cierre (endDraw).
    const hit = this.resolveHit();
    if (!hit) return;
    const pts = this.current.points;
    const pressures = this.current.pressures;

    if (e.altKey && pts.length >= 1) {
      // "Hilo tenso": recta pegada al eje X/Y/Z más parecido al gesto —
      // al ser paralela a ese eje del mundo, converge sola hacia SU punto de
      // fuga cuando se ve en perspectiva (ver updateVPOverlay). No hace falta
      // apuntar al punto de fuga a mano, alcanza con tirar en esa dirección.
      const start = pts[0];
      const raw = this.stabilizedPoint(hit.point).clone();
      const end = this.snapToNearestAxis(start, raw);
      pts.length = 1;
      pressures.length = 1;
      if (end.distanceTo(start) >= MIN_SAMPLE_DIST) {
        pts.push(end);
        pressures.push(this.samplePressure(e));
      }
      this.updatePreview();
      return;
    }

    if (e.shiftKey && pts.length >= 1) {
      // Shift: línea recta desde el punto inicial hasta el punto actual — se
      // reemplazan los intermedios en cada movimiento (rubber-band), no se
      // "traba" en modo recto: al soltar Shift sigue a mano libre normal.
      const start = pts[0];
      const end = this.stabilizedPoint(hit.point).clone();
      pts.length = 1;
      pressures.length = 1;
      if (end.distanceTo(start) >= MIN_SAMPLE_DIST) {
        pts.push(end);
        pressures.push(this.samplePressure(e));
      }
      this.updatePreview();
      return;
    }

    const point = this.stabilizedPoint(hit.point).clone();
    if (point.distanceTo(pts[pts.length - 1]) < MIN_SAMPLE_DIST) return;
    pts.push(point);
    pressures.push(this.samplePressure(e));
    this.updatePreview();
  }

  private endDraw(e: PointerEvent): void {
    // cierre opcional: enganchar SOLO el último punto a un vértice existente
    // cercano en pantalla Y en 3D → conectar limpio con una línea previa sin
    // afectar el cuerpo del trazo.
    if (this.current && this.current.points.length >= 2 && this.current.kind === 'stroke') {
      const pts = this.current.points;
      const last = pts[pts.length - 1];
      const v = this.findSnapVertex(e, last, 0.6);
      if (v) pts[pts.length - 1] = v.clone();
    }
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

  /** Guía 3D estilo Feather: una "hoja" GRANDE (no una tira angosta con la
   *  forma exacta del trazo) — así se puede seguir dibujando en cualquier
   *  dirección sobre ella, lejos de la línea que la creó, con la misma
   *  precisión. El trazo original queda marcado en naranja como referencia,
   *  pero no define el límite de la superficie.
   *
   *  Orientación: la guía nueva sale PERPENDICULAR al plano sobre el que se
   *  estaba dibujando (el "suelo", otra guía, una superficie primitiva…),
   *  como cuando en Feather trazás un lado de la base y aparece una "hoja"
   *  vertical parada sobre ese lado — no siempre de cara a la cámara. Si no
   *  había ninguna superficie activa (el primer trazo del proyecto, dibujado
   *  sobre el plano de reserva que mira a la cámara), el resultado es
   *  equivalente a una guía de cara a la cámara, que es lo correcto en ese
   *  caso — no es un caso especial, sale solo de la misma fórmula. */
  private static readonly GUIDE_SIZE = 24;

  private buildGuideSurface(points: THREE.Vector3[], baseNormal?: THREE.Vector3): THREE.Mesh | null {
    if (points.length < 2) return null;
    const camAxis = new THREE.Vector3();
    (this.camera as THREE.Camera).getWorldDirection(camAxis).normalize();

    const centroid = new THREE.Vector3();
    points.forEach((p) => centroid.add(p));
    centroid.multiplyScalar(1 / points.length);

    // normal = (dirección del trazo) × (normal del plano de apoyo) → un
    // plano que CONTIENE la línea trazada y es perpendicular al plano donde
    // se apoyó (dos planos son perpendiculares cuando sus normales lo son).
    const lineDir = points[points.length - 1].clone().sub(points[0]);
    const base = baseNormal ?? camAxis;
    let axis = lineDir.lengthSq() > 1e-6 ? lineDir.clone().cross(base) : base.clone();
    if (axis.lengthSq() < 1e-6) axis = camAxis.clone(); // trazo paralelo al eje de apoyo: no hay perpendicular única
    axis.normalize();

    const size = WebGLDesign3D.GUIDE_SIZE;
    const geo = new THREE.PlaneGeometry(size, size);
    const mesh = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({
      color: 0x4c9bff, roughness: 1, metalness: 0, transparent: true,
      opacity: 0.08, side: THREE.DoubleSide, depthWrite: false,
    }));
    mesh.position.copy(centroid);
    mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), axis);

    mesh.add(new THREE.LineSegments(new THREE.EdgesGeometry(geo),
      new THREE.LineBasicMaterial({ color: 0x4c9bff, transparent: true, opacity: 0.25 })));

    // trazo original en espacio LOCAL de la guía (queda pegado al plano
    // aunque no defina su tamaño)
    const invQ = mesh.quaternion.clone().invert();
    const localPts = points.map((p) => p.clone().sub(centroid).applyQuaternion(invQ));
    mesh.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(localPts),
      new THREE.LineBasicMaterial({ color: 0xffa53a })));

    // plano infinito: por lejos que se dibuje del cuadrado finito, el rayo
    // sigue proyectando sobre este plano (ver resolveHit) — nunca se "sale"
    // de la guía.
    mesh.userData.guidePlane = new THREE.Plane().setFromNormalAndCoplanarPoint(axis, centroid);
    return mesh;
  }

  private mirrored(points: THREE.Vector3[]): THREE.Vector3[] {
    return points.map((p) => new THREE.Vector3(-p.x, p.y, p.z));
  }

  private commitStroke(): void {
    if (!this.current) return;
    this.smoothed = null;
    for (const l of [this.current.line, this.current.mirrorLine]) {
      if (!l) continue;
      this.strokesGroup.remove(l);
      l.geometry.dispose();
      (l.material as THREE.Material).dispose();
    }
    let { points, pressures } = this.current;
    const { kind, baseNormal } = this.current;
    this.current = null;
    if (points.length < 2) return;

    if (kind === 'guide') {
      const mesh = this.buildGuideSurface(points, baseNormal);
      if (mesh) this.setGuide(mesh);
      return;
    }
    ({ points, pressures } = this.refineStroke(points, pressures));
    const group = new THREE.Group();
    const a = this.buildTube(points, pressures);
    if (a) group.add(a);
    if (this.mirror) { const b = this.buildTube(this.mirrored(points), pressures); if (b) group.add(b); }
    const rec: StrokeRecord = {
      id: `stroke-${this.seq++}`, object: group, points, pressures, kind,
      layerId: this.activeLayerId(), baseOpacity: this.brush.opacity,
    };
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
    this.applyLayerStyles();
  }

  private removeStrokeRecord(rec: StrokeRecord): void {
    this.strokesGroup.remove(rec.object);
    this.strokes = this.strokes.filter((s) => s !== rec);
    this.selected.delete(rec);
    if (this.editingStroke === rec) this.clearPointEdit();
    if (this.gizmo?.object === rec.object) this.gizmo.detach();
  }

  // ---------------------------------------------------------------- capas / grupos

  private activeLayerId(): string {
    return lowStore.getState().activeLayerId ?? 'layer-0';
  }

  /** Aplica visibilidad y opacidad de cada capa a sus trazos. Se llama en cada
   *  cambio del store (visibilidad, opacidad) y al agregar trazos. */
  private applyLayerStyles(): void {
    const layers = lowStore.getState().layers;
    const byId = new Map(layers.map((l) => [l.id, l]));
    for (const rec of this.strokes) {
      const layer = byId.get(rec.layerId);
      const visible = layer ? layer.visible : true;
      const op = layer ? layer.opacity : 1;
      rec.object.visible = visible;
      rec.object.traverse((o) => {
        const m = (o as THREE.Mesh).material as THREE.MeshStandardMaterial | undefined;
        if (m && 'opacity' in m) {
          m.opacity = rec.baseOpacity * op;
          m.transparent = m.opacity < 1;
          m.needsUpdate = true;
        }
      });
    }
  }

  private strokesOfLayer(id: string): StrokeRecord[] {
    return this.strokes.filter((r) => r.layerId === id);
  }

  /** Selección masiva: todas las curvas de una capa (para transformar o
   *  recolorear en bloque, como el long-press de grupo en Feather). */
  selectLayer(id: string): void {
    this.setSelection(this.strokesOfLayer(id));
    this.syncGizmo();
  }

  private getStrokeColor(rec: StrokeRecord): string {
    let hex = '#22252e';
    rec.object.traverse((o) => {
      const m = (o as THREE.Mesh).material as THREE.MeshStandardMaterial | undefined;
      if (m && m.color) hex = '#' + m.color.getHexString();
    });
    return hex;
  }

  private paintStroke(rec: StrokeRecord, hex: string): void {
    const col = new THREE.Color(hex);
    rec.object.traverse((o) => {
      const m = (o as THREE.Mesh).material as THREE.MeshStandardMaterial | undefined;
      if (m && m.color) {
        m.color.copy(col);
        if (m.emissive) m.emissive.copy(col.clone().multiplyScalar(0.06));
        m.needsUpdate = true;
      }
    });
  }

  /** Cambia el color de TODOS los trazos de una capa (undoable). */
  setLayerColor(id: string, hex: string): void {
    const recs = this.strokesOfLayer(id);
    if (!recs.length) return;
    const before = recs.map((r) => this.getStrokeColor(r));
    const apply = () => recs.forEach((r) => this.paintStroke(r, hex));
    apply();
    this.pushCmd({
      undo: () => recs.forEach((r, i) => this.paintStroke(r, before[i])),
      redo: apply,
    });
  }

  /** Borra una capa Y sus trazos (undoable), luego quita la metadata del store. */
  deleteLayer(id: string): void {
    const recs = this.strokesOfLayer(id);
    const remove = () => recs.forEach((r) => this.removeStrokeRecord(r));
    const add = () => recs.forEach((r) => this.addStrokeRecord(r));
    remove();
    if (recs.length) this.pushCmd({ undo: add, redo: remove });
    lowStore.removeLayer(id);
  }

  // ---------------------------------------------------------------- guías

  /** Agrega una guía SIN tocar las que ya existen — se puede tener varias
   *  guías a la vez, cada una se borra individualmente (goma, click sobre
   *  ella) en vez de que la última creada reemplace a la anterior. */
  private setGuide(mesh: THREE.Mesh): void {
    const id = `guide-${this.seq++}`;
    mesh.userData.surfaceId = id;
    mesh.userData.guideId = id;
    const plane = mesh.userData.guidePlane as THREE.Plane | undefined;
    const g = { id, mesh, plane };
    const attach = () => {
      this.guidesGroup.add(mesh);
      this.surfaces.push({ id, type: 'loft', mesh });
      this.guides.push(g);
      this.activeGuide = g;
    };
    attach();
    this.pushCmd({
      undo: () => this.detachGuide(g),
      redo: () => attach(),
    });
  }

  private detachGuide(g: { id: string; mesh: THREE.Mesh }): void {
    this.guidesGroup.remove(g.mesh);
    this.surfaces = this.surfaces.filter((s) => s.id !== g.id);
    this.guides = this.guides.filter((x) => x.id !== g.id);
    if (this.activeGuide?.id === g.id) this.activeGuide = this.guides[this.guides.length - 1] ?? null;
  }

  /** Borra la ÚLTIMA guía creada (botón "Borrar guía" de la barra). */
  deleteGuide(): boolean {
    if (!this.activeGuide) return false;
    return this.deleteGuideById(this.activeGuide.id);
  }

  /** Borra una guía específica por id (undoable) — usado por el botón
   *  "Borrar guía" (la última) y por la goma con click sobre cualquiera. */
  private deleteGuideById(id: string): boolean {
    const g = this.guides.find((x) => x.id === id);
    if (!g) return false;
    this.detachGuide(g);
    this.pushCmd({
      undo: () => { this.guidesGroup.add(g.mesh); this.surfaces.push({ id: g.id, type: 'loft', mesh: g.mesh }); this.guides.push(g); this.activeGuide = g; },
      redo: () => this.detachGuide(g),
    });
    return true;
  }

  /** Guía bajo el puntero actual (para borrarla individualmente con la
   *  goma), o null si no hay ninguna ahí. */
  private pickGuide(): { id: string; mesh: THREE.Mesh } | null {
    this.raycaster.setFromCamera(this.pointer, this.camera as THREE.Camera);
    const hits = this.raycaster.intersectObjects(this.guidesGroup.children, false);
    if (!hits.length) return null;
    let obj: THREE.Object3D | null = hits[0].object;
    while (obj && !obj.userData.guideId) obj = obj.parent;
    if (!obj) return null;
    const id = obj.userData.guideId as string;
    return this.guides.find((g) => g.id === id) ?? null;
  }

  hasGuide(): boolean {
    return this.guides.length > 0;
  }

  // ---------------------------------------------------------------- selección

  private setSelection(recs: StrokeRecord[]): void {
    for (const r of this.selected) this.highlight(r, false);
    this.selected = new Set(recs);
    for (const r of this.selected) this.highlight(r, true);
    this.syncGizmo();
  }

  /** El gizmo de mover solo se muestra con la herramienta 'move' y
   *  exactamente UN trazo seleccionado (con varios, sigue funcionando el
   *  arrastre libre de siempre — el gizmo es para posar con precisión). */
  private syncGizmo(): void {
    if (!this.gizmo) return;
    if (this.tool === 'move' && this.selected.size === 1) {
      this.gizmo.attach([...this.selected][0].object);
    } else {
      this.gizmo.detach();
    }
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
        else { const g = this.pickGuide(); if (g) this.deleteGuideById(g.id); } // click en una guía: borra solo esa
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
    for (const g of [...this.guides]) this.detachGuide(g);
    this.removeActiveSurface();
    this.selected.clear();
    this.clearPointEdit();
    this.gizmo?.detach();
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
    const rec: StrokeRecord = {
      id: `stroke-${this.seq++}`, object: g, points: pts, pressures, kind: 'stroke',
      layerId: this.activeLayerId(), baseOpacity: 1,
    };
    g.userData.strokeId = rec.id;
    this.addStrokeRecord(rec);
  }
}

export default WebGLDesign3D;
