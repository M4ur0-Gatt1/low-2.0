/**
 * LOW 2.0 - Estudio de dibujo 3D estilo Feather.
 *
 * Monta el viewport WebGL (WebGLDesign3D) y superpone la UI flotante
 * (Toolbar / Properties / Layers) + toggle de fondo claro/oscuro. El motor es
 * dueño de la interacción y lee el store; los paneles solo mutan el store.
 *
 * @module design/animation-3d-native
 */

import React, { useEffect, useRef, useState } from 'react';
import { WebGLDesign3D, type Theme, type ViewName } from './engine/webgl-design3d';
import { lowStore } from '../../store/low-store';
import { Toolbar3D } from './components/Toolbar3D';
import { PropertiesPanel3D } from './components/PropertiesPanel3D';
import { LayerManager3D } from './components/LayerManager3D';
import { Panel3D } from './components/Panel3D';
import { LOW_ACCENT } from './theme';

const bg: Record<Theme, string> = {
  light: 'radial-gradient(120% 120% at 50% 10%, #ffffff 0%, #eef1f6 70%, #e6eaf1 100%)',
  dark: 'radial-gradient(120% 120% at 50% 15%, #1b2030 0%, #0e0f13 60%, #08090c 100%)',
};

interface Props {
  projectId?: string;
  readOnly?: boolean;
  onRequestClose?: () => void;
}

export const Animation3DNative: React.FC<Props> = ({ projectId = 'default', onRequestClose }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef<WebGLDesign3D | null>(null);
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;
    const engine = new WebGLDesign3D();
    engine.mount(canvasRef.current, containerRef.current);
    engine.setTheme(theme);
    // Retomar donde quedaste: el estudio autoguarda y al abrirlo restaura el
    // último proyecto (los botones Guardar/Abrir siguen siendo para archivos
    // .low3d propios, esto es la red por si cerraste sin guardar).
    if (engine.restoreAutosave()) setView(engine.currentView());
    engineRef.current = engine;
    (window as unknown as { __low3d?: WebGLDesign3D }).__low3d = engine;
    (window as unknown as { __lowStore?: typeof lowStore }).__lowStore = lowStore;
    return () => {
      engine.dispose();
      engineRef.current = null;
    };
    // solo al montar; los cambios de tema se aplican en el efecto de abajo
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [projectId]);

  useEffect(() => {
    engineRef.current?.setTheme(theme);
  }, [theme]);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== 'Escape' || !onRequestClose) return;
      event.preventDefault();
      onRequestClose();
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [onRequestClose]);

  const [view, setView] = useState<ViewName>('persp');
  const [axes, setAxes] = useState(false);
  const [guideOpacity, setGuideOpacity] = useState(100);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const dark = theme === 'dark';
  const chipBg = dark ? 'rgba(20,22,28,0.6)' : 'rgba(255,255,255,0.7)';
  const chipFg = dark ? '#8a93a6' : '#5b6472';
  const chipActive = LOW_ACCENT;

  const eng = () => engineRef.current;
  // Ruta del archivo abierto/guardado. Mientras exista, Guardar SOBRESCRIBE sin
  // diálogo ni aviso: "guardar" tiene que ser un gesto invisible. El diálogo es
  // solo para "Guardar como…" o para el primer guardado de un proyecto nuevo.
  const projectPathRef = useRef<string>('');
  const [savedTick, setSavedTick] = useState(0);
  const saveProject = (asNew = false) => {
    const project = eng()?.exportProject();
    if (!project) return;
    const json = JSON.stringify(project, null, 2);
    const name = `${projectId || 'proyecto'}.low3d`;
    // Dentro de LOW el estudio corre en un iframe de pywebview, donde la
    // descarga del navegador (blob + <a download>) NO hace nada: por eso el
    // botón Guardar "no respondía". Ahí le pasamos el JSON a la app, que lo
    // escribe con el diálogo nativo. En un navegador suelto, descarga normal.
    if (window.parent !== window) {
      window.parent.postMessage({
        type: 'low:save-project', name, json,
        path: asNew ? '' : projectPathRef.current,
      }, '*');
      return;
    }
    const url = URL.createObjectURL(new Blob([json], { type: 'application/json' }));
    const link = document.createElement('a');
    link.href = url;
    link.download = name;
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 0);
  };
  const openProject = async (file?: File) => {
    if (!file) return;
    try {
      eng()?.importProject(JSON.parse(await file.text()));
      // el navegador no da la ruta real del archivo: a partir de acá Guardar
      // vuelve a preguntar dónde, que es lo correcto (no sabemos de dónde vino)
      projectPathRef.current = '';
    } catch (error) { window.alert(error instanceof Error ? error.message : 'No se pudo abrir el proyecto'); }
  };
  /** Abrir por la app (pywebview): así SÍ queda la ruta y Guardar sobrescribe. */
  const openProjectViaHost = () => window.parent.postMessage({ type: 'low:open-project' }, '*');

  // respuestas del host: ruta con la que quedó el proyecto
  useEffect(() => {
    const onMsg = (ev: MessageEvent) => {
      const m = ev.data as { type?: string; path?: string; json?: string } | null;
      if (!m || typeof m !== 'object') return;
      if (m.type === 'low:saved') {
        if (m.path) projectPathRef.current = m.path;
        setSavedTick((n) => n + 1);
      } else if (m.type === 'low:opened' && typeof m.json === 'string') {
        try {
          eng()?.importProject(JSON.parse(m.json));
          projectPathRef.current = m.path || '';
        } catch { window.alert('No se pudo abrir el proyecto'); }
      }
    };
    window.addEventListener('message', onMsg);
    return () => window.removeEventListener('message', onMsg);
  }, []);

  // Ctrl+S guarda sobre el mismo archivo; Ctrl+Shift+S pregunta dónde.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!(e.ctrlKey || e.metaKey) || e.key.toLowerCase() !== 's') return;
      e.preventDefault();
      saveProject(e.shiftKey);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });
  const applyView = (v: ViewName) => {
    eng()?.setView(v);
    setView(v);
  };

  const barBtn = (label: string, onClick: () => void, active = false, title?: string): React.ReactNode => (
    <button
      onClick={onClick}
      title={title ?? label}
      style={{
        height: 30,
        padding: '0 10px',
        borderRadius: 6,
        border: 'none',
        cursor: 'pointer',
        background: active ? chipActive : 'transparent',
        color: active ? '#fff' : chipFg,
        fontSize: 12,
      }}
    >
      {label}
    </button>
  );

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', background: bg[theme], overflow: 'hidden' }} ref={containerRef}>
      <canvas ref={canvasRef} style={{ width: '100%', height: '100%', display: 'block' }} onContextMenu={(e) => e.preventDefault()} />
      <input ref={fileInputRef} type="file" accept=".low3d,application/json" hidden
        onChange={(e) => { void openProject(e.target.files?.[0]); e.currentTarget.value = ''; }} />

      {/* BARRA SUPERIOR: una sola fila con tres grupos (izquierda / centro /
          derecha). Antes cada bloque estaba posicionado por su cuenta con
          right:250/294/356 y se superponían entre sí y con la barra central
          apenas la ventana se achicaba. Con una fila flex no puede pasar. */}
      <header style={{
        position: 'absolute', top: 14, left: 14, right: 14, zIndex: 110,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        gap: 8, pointerEvents: 'none',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, pointerEvents: 'auto', flex: '0 0 auto' }}>
          {onRequestClose && (
            <button onClick={onRequestClose} title="Cerrar módulo 3D (Esc)" style={{
              height: 36, padding: '0 12px', border: 'none', borderRadius: 8, cursor: 'pointer',
              background: chipBg, color: chipFg, fontSize: 12,
            }}>← Salir de 3D</button>
          )}
        </div>

        <div style={{
          display: 'flex', alignItems: 'center', gap: 2, padding: 4, borderRadius: 8,
          background: chipBg, pointerEvents: 'auto', flex: '0 1 auto', overflowX: 'auto',
        }}>
          {barBtn('⟲', () => eng()?.undo(), false, 'Deshacer (Ctrl+Z)')}
          {barBtn('⟳', () => eng()?.redo(), false, 'Rehacer (Ctrl+Alt+Z / Ctrl+Shift+Z)')}
          <span style={{ width: 1, height: 18, background: dark ? '#3a3f4b' : '#cfd4dd', margin: '0 4px' }} />
          {barBtn('Nuevo', () => {
            if (window.confirm('¿Empezar un proyecto nuevo? Se descarta el dibujo actual.')) eng()?.newProject();
          }, false, 'Nuevo proyecto (descarta el dibujo actual)')}
          {barBtn('Abrir', () => {
            if (window.parent !== window) openProjectViaHost(); else fileInputRef.current?.click();
          }, false, 'Abrir proyecto LOW 3D')}
          {barBtn('Guardar', () => saveProject(false), false,
            savedTick && projectPathRef.current
              ? `Guardar (Ctrl+S) — sobrescribe ${projectPathRef.current}`
              : 'Guardar proyecto LOW 3D (Ctrl+S)')}
          {barBtn('Guardar como…', () => saveProject(true), false,
            'Guardar en otro archivo (Ctrl+Shift+S)')}
          <span style={{ width: 1, height: 18, background: dark ? '#3a3f4b' : '#cfd4dd', margin: '0 4px' }} />
          {/* vistas abreviadas: el nombre completo queda en el tooltip */}
          {barBtn('Persp', () => applyView('persp'), view === 'persp', 'Perspectiva')}
          {barBtn('Fre', () => applyView('front'), view === 'front', 'Frente (ortogonal)')}
          {barBtn('Det', () => applyView('back'), view === 'back', 'Detrás (ortogonal)')}
          {barBtn('Izq', () => applyView('left'), view === 'left', 'Izquierda (ortogonal)')}
          {barBtn('Der', () => applyView('right'), view === 'right', 'Derecha (ortogonal)')}
          {barBtn('Sup', () => applyView('top'), view === 'top', 'Arriba (ortogonal)')}
          {barBtn('Inf', () => applyView('bottom'), view === 'bottom', 'Abajo (ortogonal)')}
          <span style={{ width: 1, height: 18, background: dark ? '#3a3f4b' : '#cfd4dd', margin: '0 4px' }} />
          {barBtn('Unir', () => { eng()?.groupSelection(); }, false,
            'Agrupar lo seleccionado (Ctrl+G) — se elige, se mueve y se deforma como una sola pieza. Ctrl+Shift+G lo desarma')}
          {barBtn('Volumen', () => { eng()?.solidifySelection(); }, false,
            'Convertir lo seleccionado en un cuerpo con volumen (Ctrl+E): una silueta plana se extruye; trazos repartidos en el espacio se cierran por su casco. Los trazos de origen se conservan')}
          <span style={{ width: 1, height: 18, background: dark ? '#3a3f4b' : '#cfd4dd', margin: '0 4px' }} />
          {barBtn('XYZ', () => setAxes(!!eng()?.toggleAxes()), axes,
            'Ejes globales XYZ + puntos de fuga de cada eje (solo en perspectiva) — guía visual, no se dibuja ni exporta')}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 8, pointerEvents: 'auto', flex: '0 0 auto' }}>
          <div title="Opacidad de las guías — bajala a 0 para dibujar 'en el aire' sin que la hoja estorbe visualmente; sigue dando soporte a los trazos aunque no se vea (truco de Feather)"
            style={{ height: 36, padding: '0 10px', borderRadius: 8, background: chipBg, display: 'flex', alignItems: 'center', gap: 6 }}>
            <span style={{ fontSize: 11, color: chipFg }}>👻</span>
            <input type="range" min={0} max={100} value={guideOpacity}
              onChange={(e) => { const v = Number(e.target.value); setGuideOpacity(v); eng()?.setGuideOpacity(v / 100); }}
              style={{ width: 70, accentColor: LOW_ACCENT }} />
          </div>
          <button onClick={() => engineRef.current?.deleteGuide()}
            title="Borrar la última guía creada (los trazos se conservan) — para borrar cualquier otra, Goma + click sobre ella"
            style={{ height: 36, padding: '0 12px', borderRadius: 8, border: 'none', cursor: 'pointer',
              background: chipBg, color: chipFg, fontSize: 12, whiteSpace: 'nowrap' }}>🗑 Borrar guía</button>
          <button onClick={() => setTheme(dark ? 'light' : 'dark')} title="Fondo claro / oscuro"
            style={{ width: 36, height: 36, borderRadius: 8, border: 'none', cursor: 'pointer',
              background: chipBg, color: chipFg, fontSize: 16 }}>{dark ? '☀' : '☾'}</button>
        </div>
      </header>

      <Panel3D title="Herramientas" initial={{ left: 14, top: 60 }}>
        <Toolbar3D />
      </Panel3D>
      <Panel3D title="Pincel / Superficie" initial={{ right: 14, top: 60 }} width={220}>
        <PropertiesPanel3D />
      </Panel3D>
      <Panel3D title="Capas" initial={{ left: 14, bottom: 14 }} width={240}>
        <LayerManager3D engine={engineRef} />
      </Panel3D>

      <div title="Joystick de orientación" style={{
        position: 'absolute', right: 14, bottom: 62, zIndex: 105,
        display: 'grid', gridTemplateColumns: 'repeat(3, 34px)', gap: 3,
        padding: 6, borderRadius: 12, background: chipBg,
      }}>
        <span />{barBtn('Y+', () => applyView('top'), view === 'top', 'Vista superior')}<span />
        {barBtn('X−', () => applyView('left'), view === 'left', 'Vista izquierda')}
        {barBtn('3D', () => applyView('persp'), view === 'persp', 'Vista perspectiva')}
        {barBtn('X+', () => applyView('right'), view === 'right', 'Vista derecha')}
        <span />{barBtn('Z+', () => applyView('front'), view === 'front', 'Vista frontal')}<span />
      </div>


      <div
        style={{
          position: 'absolute',
          bottom: 14,
          right: 14,
          zIndex: 100,
          color: chipFg,
          fontSize: 11,
          fontFamily: 'system-ui, sans-serif',
          background: chipBg,
          padding: '6px 10px',
          borderRadius: 6,
          lineHeight: 1.5,
          pointerEvents: 'none',
        }}
      >
Teclas: P lápiz · G guía · F dibujo libre (sin guía, scroll = profundidad) · V mover (click en una guía = mover/deformar con gizmo, Ctrl+D duplica; con rotar, arrastrá el eje rosa) · A puntos · E goma · C tijera · Shift recta · Alt hilo tenso (eje X/Y/Z) · Ctrl+C/V copia · Supr borra · Ctrl+Z/Ctrl+Alt+Z
      </div>
    </div>
  );
};

export default Animation3DNative;
