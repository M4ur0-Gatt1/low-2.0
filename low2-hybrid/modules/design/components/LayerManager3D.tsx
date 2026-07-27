/**
 * Gestor de capas del módulo 3D.
 *
 * Lista las capas del proyecto, permite seleccionar la activa, alternar
 * visibilidad y bloqueo, y agregar/eliminar. Todo vive en el store global.
 *
 * @module design/components/LayerManager3D
 */

import React from 'react';
import { useLowStore } from '../../../store/low-store';

const panelStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  width: '220px',
  maxHeight: '260px',
  backgroundColor: '#2d2d2d',
  borderRadius: '8px',
  boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
  color: '#ccc',
  fontSize: '12px',
  fontFamily: 'system-ui, sans-serif',
  overflow: 'hidden',
};

const headerStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px 12px',
  borderBottom: '1px solid #444',
};

const iconBtn: React.CSSProperties = {
  border: 'none',
  background: 'transparent',
  color: '#ccc',
  cursor: 'pointer',
  fontSize: '14px',
  lineHeight: 1,
  padding: '2px 6px',
  borderRadius: '4px',
};

export const LayerManager3D: React.FC = () => {
  const {
    layers,
    activeLayerId,
    setActiveLayer,
    addLayer,
    removeLayer,
    toggleLayerVisibility,
    toggleLayerLock,
  } = useLowStore();

  return (
    <div style={panelStyle}>
      <div style={headerStyle}>
        <span style={{ textTransform: 'uppercase', letterSpacing: '0.5px', color: '#888' }}>
          Capas
        </span>
        <button style={iconBtn} title="Nueva capa" onClick={() => addLayer()}>
          ＋
        </button>
      </div>

      <div style={{ overflowY: 'auto' }}>
        {/* Se muestran arriba las capas más nuevas */}
        {[...layers].reverse().map((layer) => {
          const isActive = layer.id === activeLayerId;
          return (
            <div
              key={layer.id}
              onClick={() => setActiveLayer(layer.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 12px',
                cursor: 'pointer',
                backgroundColor: isActive ? '#0078d4' : 'transparent',
                color: isActive ? '#fff' : '#ccc',
              }}
            >
              <button
                style={{ ...iconBtn, color: 'inherit', opacity: layer.visible ? 1 : 0.4 }}
                title={layer.visible ? 'Ocultar' : 'Mostrar'}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleLayerVisibility(layer.id);
                }}
              >
                {layer.visible ? '👁' : '⊘'}
              </button>
              <button
                style={{ ...iconBtn, color: 'inherit', opacity: layer.locked ? 1 : 0.4 }}
                title={layer.locked ? 'Desbloquear' : 'Bloquear'}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleLayerLock(layer.id);
                }}
              >
                {layer.locked ? '🔒' : '🔓'}
              </button>
              <span style={{ flex: 1, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {layer.name}
              </span>
              <button
                style={{ ...iconBtn, color: 'inherit', opacity: layers.length > 1 ? 0.7 : 0.2 }}
                title="Eliminar capa"
                disabled={layers.length <= 1}
                onClick={(e) => {
                  e.stopPropagation();
                  removeLayer(layer.id);
                }}
              >
                🗑
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LayerManager3D;
