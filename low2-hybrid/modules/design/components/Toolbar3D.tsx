/**
 * Barra de herramientas 3D.
 *
 * - Herramientas: Lápiz, Mover, Borrar, Liquify
 * - Superficies guía: Plano, Cilindro, Esfera, Toro, Loft
 * - Modo espejo X
 * - Pincel: color y grosor (opacidad/dureza viven en PropertiesPanel3D)
 *
 * @module design/components/Toolbar3D
 */

import React, { useState } from 'react';
import { useLowStore } from '../../../store/low-store';
import { ToolType, SurfaceType, GizmoMode, BrushSettings } from '../../../types/design-types';
import { ColorWheel } from './ColorWheel';

/** Presets de pincel: mismos parámetros del motor (size/hardness/presión/
 *  estabilizador), solo con distintos valores por defecto para que cada uno
 *  se sienta distinto — lápiz fino y parejo, tinta con calado marcado y
 *  brillo, pincel grueso y mate ("con volumen"). El color no se toca. */
const BRUSH_PRESETS: { id: string; label: string; values: Omit<BrushSettings, 'color'> }[] = [
  { id: 'pencil', label: 'Lápiz', values: { size: 6, opacity: 1, hardness: 0.3, pressureSensitivity: 0.25, stabilization: 0.2 } },
  { id: 'ink', label: 'Tinta', values: { size: 10, opacity: 1, hardness: 0.95, pressureSensitivity: 0.75, stabilization: 0.45 } },
  { id: 'brush', label: 'Pincel', values: { size: 22, opacity: 0.92, hardness: 0.15, pressureSensitivity: 0.55, stabilization: 0.35 } },
];

const Icons = {
  Pencil: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 2l4 4-10 10H7v-5L18 2z"/></svg>,
  Guide: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3" strokeLinecap="round"><line x1="3" y1="20" x2="21" y2="4"/></svg>,
  Move: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="5 9 2 12 5 15"/><polyline points="9 5 12 2 15 5"/><polyline points="15 19 12 22 9 19"/><polyline points="19 9 22 12 19 15"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="12" y1="2" x2="12" y2="22"/></svg>,
  Select: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 3l7 17 2-7 7-2z" strokeLinejoin="round"/><circle cx="4" cy="3" r="1.6" fill="currentColor" stroke="none"/><circle cx="11" cy="20" r="1.6" fill="currentColor" stroke="none"/><circle cx="18" cy="11" r="1.6" fill="currentColor" stroke="none"/></svg>,
  Eraser: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 20H7L3 16c-.8-.8-.8-2 0-2.8L14 2.2c.8-.8 2-.8 2.8 0L22 7.4c.8.8.8 2 0 2.8L12 20"/></svg>,
  Liquify: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 3c-1.3 0-2.5.5-3.5 1.5C3.5 5.5 3 6.7 3 8s.5 2.5 1.5 3.5S7 13 8 13s2.5-.5 3.5-1.5S13 9 13 8s-.5-2.5-1.5-3.5S9 3 8 3z"/><path d="M16 11c-1.3 0-2.5.5-3.5 1.5S11 15 11 16s.5 2.5 1.5 3.5 2.5 1.5 3.5 1.5 2.5-.5 3.5-1.5 1.5-2.5 1.5-3.5-.5-2.5-1.5-3.5-2.5-1.5-3.5-1.5z"/></svg>,
  Plane: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="3"/></svg>,
  Cylinder: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.7 4 3 9 3s9-1.3 9-3V5"/></svg>,
  Sphere: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9"/><ellipse cx="12" cy="12" rx="9" ry="3"/><path d="M12 3v18"/></svg>,
  Torus: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9"/><ellipse cx="12" cy="12" rx="9" ry="4"/></svg>,
  Loft: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 7c3-2 6-2 9 0s6 2 9 0M3 17c3-2 6-2 9 0s6 2 9 0"/><path d="M3 7v10M21 7v10"/></svg>,
  Mirror: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 3v18M3 12h18"/><path d="M8 7l-4 5 4 5M16 7l4 5-4 5"/></svg>,
  GizmoMove: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M2 12h20"/><path d="M9 5l3-3 3 3M9 19l3 3 3-3M5 9l-3 3 3 3M19 9l3 3-3 3"/></svg>,
  GizmoScale: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="4" width="9" height="9"/><path d="M13 20h7v-7M20 20L11 11"/></svg>,
};

export const Toolbar3D: React.FC = () => {
  const {
    currentTool,
    setCurrentTool,
    activeSurface,
    setActiveSurface,
    mirrorMode,
    setMirrorMode,
    brushSettings,
    setBrushSettings,
    gizmoMode,
    setGizmoMode,
  } = useLowStore();
  const [showWheel, setShowWheel] = useState(false);

  const tools: { id: ToolType; icon: React.FC; label: string }[] = [
    { id: 'pencil', icon: Icons.Pencil, label: 'Lápiz' },
    { id: 'guide', icon: Icons.Guide, label: 'Línea guía (referencia punteada)' },
    { id: 'move', icon: Icons.Move, label: 'Seleccionar / Mover (click o lazo)' },
    { id: 'select', icon: Icons.Select, label: 'Editar puntos (nodos del vector, como la flecha blanca)' },
    { id: 'eraser', icon: Icons.Eraser, label: 'Borrar' },
    { id: 'liquify', icon: Icons.Liquify, label: 'Liquify' },
  ];

  const surfaces: { id: SurfaceType; icon: React.FC; label: string }[] = [
    { id: 'plane', icon: Icons.Plane, label: 'Plano' },
    { id: 'cylinder', icon: Icons.Cylinder, label: 'Cilindro' },
    { id: 'sphere', icon: Icons.Sphere, label: 'Esfera' },
    { id: 'torus', icon: Icons.Torus, label: 'Toro' },
    { id: 'loft', icon: Icons.Loft, label: 'Loft' },
  ];

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        padding: '12px',
        backgroundColor: '#2d2d2d',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
        minWidth: '60px',
        maxHeight: 'calc(100vh - 28px)',
        overflowY: 'auto',
      }}
    >
      {/* Herramientas */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        {tools.map((tool) => (
          <button
            key={tool.id}
            onClick={() => setCurrentTool(tool.id)}
            title={tool.label}
            style={{
              width: '40px',
              height: '40px',
              border: 'none',
              borderRadius: '6px',
              backgroundColor: currentTool === tool.id ? '#0078d4' : 'transparent',
              color: currentTool === tool.id ? '#fff' : '#ccc',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              if (currentTool !== tool.id) {
                e.currentTarget.style.backgroundColor = '#3d3d3d';
                e.currentTarget.style.color = '#fff';
              }
            }}
            onMouseLeave={(e) => {
              if (currentTool !== tool.id) {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#ccc';
              }
            }}
          >
            <div style={{ width: '20px', height: '20px' }}>
              <tool.icon />
            </div>
          </button>
        ))}
      </div>

      {currentTool === 'move' && (
        <>
          <div style={{ height: '1px', backgroundColor: '#444', margin: '4px 0' }} />
          {/* Modo del gizmo (con 1 trazo seleccionado): mover o redimensionar */}
          <div style={{ display: 'flex', gap: '4px' }}>
            {([
              { id: 'translate' as GizmoMode, icon: Icons.GizmoMove, label: 'Mover (gizmo por ejes)' },
              { id: 'scale' as GizmoMode, icon: Icons.GizmoScale, label: 'Redimensionar (gizmo)' },
            ]).map((g) => (
              <button
                key={g.id}
                onClick={() => setGizmoMode(g.id)}
                title={g.label}
                style={{
                  width: '32px', height: '32px', border: 'none', borderRadius: '6px',
                  backgroundColor: gizmoMode === g.id ? '#0078d4' : 'transparent',
                  color: gizmoMode === g.id ? '#fff' : '#ccc', cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}
              >
                <div style={{ width: '16px', height: '16px' }}><g.icon /></div>
              </button>
            ))}
          </div>
        </>
      )}

      <div style={{ height: '1px', backgroundColor: '#444', margin: '4px 0' }} />

      {/* Superficies guía */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        {surfaces.map((surface) => (
          <button
            key={surface.id}
            onClick={() =>
              setActiveSurface(
                surface.id === activeSurface?.type
                  ? null
                  : { type: surface.id, params: {} }
              )
            }
            title={surface.label}
            style={{
              width: '40px',
              height: '40px',
              border: 'none',
              borderRadius: '6px',
              backgroundColor: activeSurface?.type === surface.id ? '#0078d4' : 'transparent',
              color: activeSurface?.type === surface.id ? '#fff' : '#ccc',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              if (activeSurface?.type !== surface.id) {
                e.currentTarget.style.backgroundColor = '#3d3d3d';
                e.currentTarget.style.color = '#fff';
              }
            }}
            onMouseLeave={(e) => {
              if (activeSurface?.type !== surface.id) {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#ccc';
              }
            }}
          >
            <div style={{ width: '20px', height: '20px' }}>
              <surface.icon />
            </div>
          </button>
        ))}
      </div>

      <div style={{ height: '1px', backgroundColor: '#444', margin: '4px 0' }} />

      {/* Modo espejo */}
      <button
        onClick={() => setMirrorMode(!mirrorMode)}
        title="Modo Espejo X"
        style={{
          width: '40px',
          height: '40px',
          border: 'none',
          borderRadius: '6px',
          backgroundColor: mirrorMode ? '#0078d4' : 'transparent',
          color: mirrorMode ? '#fff' : '#ccc',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.2s',
        }}
      >
        <div style={{ width: '20px', height: '20px' }}>
          <Icons.Mirror />
        </div>
      </button>

      {/* Presets de pincel: mismos parámetros, distinta sensación */}
      <div style={{ height: '1px', backgroundColor: '#444', margin: '4px 0' }} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        {BRUSH_PRESETS.map((p) => (
          <button
            key={p.id}
            onClick={() => setBrushSettings({ ...brushSettings, ...p.values })}
            title={`Preset "${p.label}"`}
            style={{
              width: '40px', height: '26px', border: 'none', borderRadius: '6px',
              backgroundColor: 'transparent', color: '#ccc', cursor: 'pointer',
              fontSize: '9px', fontFamily: 'system-ui, sans-serif',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#3d3d3d'; e.currentTarget.style.color = '#fff'; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#ccc'; }}
          >
            {p.label}
          </button>
        ))}
      </div>

      {/* Pincel: color + grosor */}
      <div style={{ marginTop: '8px', display: 'flex', flexDirection: 'column', gap: '8px', position: 'relative' }}>
        <button
          onClick={() => setShowWheel(!showWheel)}
          title="Color del pincel (círculo cromático)"
          style={{
            width: '40px',
            height: '40px',
            border: showWheel ? '2px solid #0078d4' : '2px solid transparent',
            borderRadius: '6px',
            cursor: 'pointer',
            backgroundColor: brushSettings.color,
          }}
        />
        {showWheel && (
          <div
            style={{
              position: 'absolute', left: '48px', top: '0', zIndex: 200,
              padding: '12px', backgroundColor: '#2d2d2d', borderRadius: '8px',
              boxShadow: '0 4px 16px rgba(0,0,0,0.4)',
            }}
          >
            <ColorWheel
              value={brushSettings.color}
              onChange={(color) => setBrushSettings({ ...brushSettings, color })}
            />
          </div>
        )}
        <input
          type="range"
          min="1"
          max="100"
          value={brushSettings.size}
          onChange={(e) => setBrushSettings({ ...brushSettings, size: Number(e.target.value) })}
          title="Tamaño del pincel"
          style={{
            width: '40px',
            height: '4px',
            writingMode: 'vertical-lr',
            direction: 'rtl',
            accentColor: '#0078d4',
          }}
        />
      </div>
    </div>
  );
};

export default Toolbar3D;
