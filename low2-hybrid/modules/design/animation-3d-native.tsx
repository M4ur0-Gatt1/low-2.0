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

const bg: Record<Theme, string> = {
  light: 'radial-gradient(120% 120% at 50% 10%, #ffffff 0%, #eef1f6 70%, #e6eaf1 100%)',
  dark: 'radial-gradient(120% 120% at 50% 15%, #1b2030 0%, #0e0f13 60%, #08090c 100%)',
};

interface Props {
  projectId?: string;
  readOnly?: boolean;
}

export const Animation3DNative: React.FC<Props> = ({ projectId = 'default' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef<WebGLDesign3D | null>(null);
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;
    const engine = new WebGLDesign3D();
    engine.mount(canvasRef.current, containerRef.current);
    engine.setTheme(theme);
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

  const [view, setView] = useState<ViewName>('persp');
  const [axes, setAxes] = useState(false);

  const dark = theme === 'dark';
  const chipBg = dark ? 'rgba(20,22,28,0.6)' : 'rgba(255,255,255,0.7)';
  const chipFg = dark ? '#8a93a6' : '#5b6472';
  const chipActive = '#0078d4';

  const eng = () => engineRef.current;
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

      <Panel3D title="Herramientas" initial={{ left: 14, top: 60 }}>
        <Toolbar3D />
      </Panel3D>
      <Panel3D title="Pincel / Superficie" initial={{ right: 14, top: 60 }} width={220}>
        <PropertiesPanel3D />
      </Panel3D>
      <Panel3D title="Capas" initial={{ left: 14, bottom: 14 }} width={240}>
        <LayerManager3D engine={engineRef} />
      </Panel3D>

      <button
        onClick={() => setTheme(dark ? 'light' : 'dark')}
        title="Fondo claro / oscuro"
        style={{
          position: 'absolute',
          top: 14,
          right: 250,
          zIndex: 100,
          width: 36,
          height: 36,
          borderRadius: 8,
          border: 'none',
          cursor: 'pointer',
          background: chipBg,
          color: chipFg,
          fontSize: 16,
        }}
      >
        {dark ? '☀' : '☾'}
      </button>

      {/* Barra superior central: deshacer/rehacer + vistas */}
      <div
        style={{
          position: 'absolute',
          top: 14,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 100,
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          padding: 4,
          borderRadius: 8,
          background: chipBg,
        }}
      >
        {barBtn('⟲', () => eng()?.undo(), false, 'Deshacer (Ctrl+Z)')}
        {barBtn('⟳', () => eng()?.redo(), false, 'Rehacer (Ctrl+Alt+Z / Ctrl+Shift+Z)')}
        <span style={{ width: 1, height: 18, background: dark ? '#3a3f4b' : '#cfd4dd', margin: '0 4px' }} />
        {barBtn('Persp', () => applyView('persp'), view === 'persp')}
        {barBtn('Frente', () => applyView('front'), view === 'front', 'Vista ortogonal de frente (para el primer dibujo)')}
        {barBtn('Detrás', () => applyView('back'), view === 'back', 'Vista ortogonal de atrás')}
        {barBtn('Izquierda', () => applyView('left'), view === 'left', 'Vista ortogonal desde la izquierda')}
        {barBtn('Derecha', () => applyView('right'), view === 'right', 'Vista ortogonal desde la derecha')}
        {barBtn('Arriba', () => applyView('top'), view === 'top', 'Vista ortogonal desde arriba')}
        {barBtn('Abajo', () => applyView('bottom'), view === 'bottom', 'Vista ortogonal desde abajo')}
        <span style={{ width: 1, height: 18, background: dark ? '#3a3f4b' : '#cfd4dd', margin: '0 4px' }} />
        {barBtn('XYZ', () => setAxes(!!eng()?.toggleAxes()), axes,
          'Ejes globales XYZ + puntos de fuga de cada eje (solo en perspectiva) — guía visual, no se dibuja ni exporta')}
      </div>

      <button
        onClick={() => engineRef.current?.deleteGuide()}
        title="Borrar la última guía creada (los trazos se conservan) — para borrar cualquier otra, Goma + click sobre ella"
        style={{
          position: 'absolute',
          top: 14,
          right: 294,
          zIndex: 100,
          height: 36,
          padding: '0 12px',
          borderRadius: 8,
          border: 'none',
          cursor: 'pointer',
          background: chipBg,
          color: chipFg,
          fontSize: 12,
          display: 'flex',
          alignItems: 'center',
          gap: 6,
        }}
      >
        🗑 Borrar guía
      </button>

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
Teclas: P lápiz · G guía · V mover · A puntos · E goma · Shift recta · Alt hilo tenso (eje X/Y/Z) · Ctrl+C/V copia · Supr borra · Ctrl+Z/Ctrl+Alt+Z
      </div>
    </div>
  );
};

export default Animation3DNative;
