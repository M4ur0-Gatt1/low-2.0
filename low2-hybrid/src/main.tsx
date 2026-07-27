/**
 * Punto de entrada del renderer (Vite + React) para el estudio 3D de LOW 2.0.
 */
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Animation3DNative } from '../modules/design/animation-3d-native';

const el = document.getElementById('root');
if (!el) throw new Error('No se encontró #root');

createRoot(el).render(
  <React.StrictMode>
    <Animation3DNative projectId="demo" />
  </React.StrictMode>
);
