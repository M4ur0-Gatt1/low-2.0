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
import { ObjectList3D } from './components/ObjectList3D';
import { Panel3D } from './components/Panel3D';
import { LOW_ACCENT } from './theme';

const bg: Record<Theme, string> = {
  // El claro NO llega al blanco puro. Arrancaba en #ffffff justo en el centro,
  // que es donde uno dibuja: contra ese fondo se perdían de vista el anillo del
  // pincel y el cursor. Un gris claro los deja siempre visibles y no cansa.
  light: 'radial-gradient(120% 115% at 50% 8%, #f3f2ef 0%, #e7e6e2 68%, #d9d8d4 100%)',
  dark: 'radial-gradient(120% 115% at 50% 10%, #202124 0%, #131416 62%, #0c0d0e 100%)',
};

const OrientationJoystick: React.FC<{
  view: ViewName; dark: boolean; onView: (view: ViewName) => void;
}> = ({ view, dark, onView }) => {
  const surface = dark ? 'rgba(24,25,27,.88)' : 'rgba(250,250,248,.82)';
  const line = dark ? 'rgba(255,255,255,.11)' : 'rgba(20,20,18,.12)';
  const fg = dark ? '#c9cac7' : '#555650';
  const nav = (v: ViewName, label: string, title: string, style: React.CSSProperties) => (
    <button onClick={() => onView(v)} title={title} aria-label={title} style={{
      position: 'absolute', width: 30, height: 30, padding: 0, borderRadius: 9,
      border: `1px solid ${view === v ? 'rgba(240,69,14,.6)' : 'transparent'}`,
      background: view === v ? 'rgba(240,69,14,.16)' : 'transparent',
      color: view === v ? '#f05a32' : fg, cursor: 'pointer', font: '600 9px/1 Inter, system-ui',
      transition: 'background .14s ease, color .14s ease, transform .14s ease', ...style,
    }}>{label}</button>
  );
  return (
    <div title="Navegador de vistas" aria-label="Navegador de orientación 3D" style={{
      position: 'absolute', right: 16, bottom: 48, zIndex: 105, width: 116, height: 116,
      borderRadius: '50%', background: surface, border: `1px solid ${line}`,
      boxShadow: '0 14px 38px rgba(0,0,0,.22), inset 0 1px rgba(255,255,255,.08)',
      backdropFilter: 'blur(16px)',
    }}>
      <div aria-hidden="true" style={{ position: 'absolute', inset: 13, borderRadius: '50%', border: `1px solid ${line}` }} />
      {nav('top', 'Y+', 'Vista superior', { left: 43, top: 4 })}
      {nav('left', 'X−', 'Vista izquierda', { left: 4, top: 43 })}
      {nav('right', 'X+', 'Vista derecha', { right: 4, top: 43 })}
      {nav('front', 'Z+', 'Vista frontal', { left: 43, bottom: 4 })}
      <button onClick={() => onView('persp')} title="Vista perspectiva" aria-label="Vista perspectiva" style={{
        position: 'absolute', left: 38, top: 38, width: 40, height: 40, padding: 0,
        borderRadius: 12, border: `1px solid ${view === 'persp' ? 'rgba(240,69,14,.72)' : line}`,
        background: view === 'persp' ? 'rgba(240,69,14,.18)' : (dark ? '#2a2b2e' : '#eeede9'),
        color: view === 'persp' ? '#f05a32' : fg, cursor: 'pointer',
        boxShadow: '0 5px 14px rgba(0,0,0,.16)', font: '700 10px/1 Inter, system-ui',
      }}><span aria-hidden="true" style={{ fontSize: 17, display: 'block', marginBottom: 1 }}>◇</span>3D</button>
      <i aria-hidden="true" style={{ position: 'absolute', left: 57, top: 15, width: 1, height: 11, background: '#45b97c', opacity: .72 }} />
      <i aria-hidden="true" style={{ position: 'absolute', left: 15, top: 57, width: 11, height: 1, background: '#f05a5f', opacity: .72 }} />
      <i aria-hidden="true" style={{ position: 'absolute', left: 57, bottom: 15, width: 1, height: 11, background: '#5596f6', opacity: .72 }} />
    </div>
  );
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
      // Escape primero CANCELA lo que esté en curso (un arrastre del joystick,
      // un trazo a medio hacer, la selección). Solo cierra el módulo cuando no
      // quedaba nada que cancelar: antes, soltar la selección con Escape se
      // llevaba puesto el módulo 3D entero.
      if (eng()?.escapeConsume()) return;
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
  const chipBg = dark ? 'rgba(24,25,27,.86)' : 'rgba(250,250,248,.82)';
  const chipFg = dark ? '#b5b6b2' : '#555650';
  const chipActive = LOW_ACCENT;

  const eng = () => engineRef.current;
  // Ruta del archivo abierto/guardado. Mientras exista, Guardar SOBRESCRIBE sin
  // diálogo ni aviso: "guardar" tiene que ser un gesto invisible. El diálogo es
  // solo para "Guardar como…" o para el primer guardado de un proyecto nuevo.
  const projectPathRef = useRef<string>('');
  const [savedTick, setSavedTick] = useState(0);
  /** Estado del panel de exportación STL. Antes esto era window.confirm(), y
   *  dentro de pywebview los diálogos nativos del navegador NO responden: el
   *  botón "no hacía nada". Ahora el aviso es DOM propio del estudio, que
   *  funciona igual en la app y en el navegador. */
  /** "Nuevo proyecto" preguntaba con window.confirm, que dentro de pywebview no
   *  responde: el botón no hacía absolutamente nada (mismo problema que tenía
   *  el de STL). El aviso es DOM propio del estudio. */
  const [confirmNuevo, setConfirmNuevo] = useState(false);
  /** Avisos que antes iban por window.alert y tampoco se veían. */
  const [aviso, setAviso] = useState('');
  const [stlPanel, setStlPanel] = useState<null | {
    solidos: number; trazos: number; rellenos: number; guias: number; caras: number;
    triangulos: number; exportables: number; seleccion: number;
    aristasAbiertas: number; cerrada: boolean;
    /** El panel NO se cierra al exportar: se queda esperando la respuesta del
     *  host y termina mostrando la RUTA del archivo. Antes se cerraba al
     *  instante y, si algo fallaba de ahi para abajo, el boton parecia no
     *  hacer nada: ni archivo, ni error, ni idea de donde habia quedado. */
    fase: 'informe' | 'guardando' | 'listo' | 'falla';
    msg: string;
  }>(null);

  /** Abre el panel con el informe previo: un STL solo lleva triángulos, así que
   *  hay que decir QUÉ entra y QUÉ queda afuera ANTES de escribir el archivo.
   *  Enterarse después, con el archivo ya en el slicer, es mucho peor. */
  const pedirSTL = () => {
    const e = eng();
    if (!e) return;
    const rep = e.stlReport(false);
    setStlPanel({ ...rep, seleccion: e.selectedCount(), fase: 'informe', msg: '' });
  };

  /** Escribe el STL. `soloSel` lo elige el usuario en el panel. */
  const hacerSTL = (soloSel: boolean) => {
    const fase = (f: 'guardando' | 'listo' | 'falla', msg: string) =>
      setStlPanel((p) => (p ? { ...p, fase: f, msg } : p));
    // TODO el cuerpo va en try/catch: este codigo corre dentro de un iframe que
    // no tiene el puente de la app, asi que una excepcion aca no aparece en
    // low.log ni en ningun lado. Sin esto, un error se ve igual que un boton
    // muerto.
    try {
      const e = eng();
      if (!e) { fase('falla', 'El motor 3D todavia no esta listo.'); return; }
      const r = e.exportSTL({ binary: true, scale: 10, onlySelection: soloSel });
      if (!r) { fase('falla', 'No habia nada exportable en la escena.'); return; }
      const name = (projectId || 'modelo') + '.stl';
      const bytes = r.data instanceof DataView
        ? new Uint8Array(r.data.buffer, r.data.byteOffset, r.data.byteLength)
        : new TextEncoder().encode(String(r.data));
      const kb = Math.max(1, Math.round(bytes.length / 1024));
      // Dentro de LOW el estudio corre en un iframe de pywebview, donde la
      // descarga del navegador no hace nada: se le pasa al host en base64 y el
      // host contesta con low:saved-binary diciendo DONDE quedo.
      if (window.parent !== window) {
        let bin = '';
        for (let i = 0; i < bytes.length; i++) bin += String.fromCharCode(bytes[i]);
        fase('guardando', `Generado: ${r.report.triangulos.toLocaleString('es-AR')} triangulos, ${kb} KB. Elegi donde guardarlo.`);
        window.parent.postMessage(
          { type: 'low:save-binary', name, base64: btoa(bin) }, '*');
        return;
      }
      // Copia a un ArrayBuffer propio: TS 5.7 distingue ArrayBuffer de
      // SharedArrayBuffer y no acepta el Uint8Array genérico como BlobPart.
      const blobBytes = new Uint8Array(bytes.byteLength);
      blobBytes.set(bytes);
      const url = URL.createObjectURL(new Blob([blobBytes.buffer], { type: 'model/stl' }));
      const link = document.createElement('a');
      link.href = url; link.download = name; link.click();
      setTimeout(() => URL.revokeObjectURL(url), 0);
      fase('listo', `Descargado ${name} (${kb} KB).`);
    } catch (err) {
      const detalle = err instanceof Error ? err.message : String(err);
      fase('falla', 'No pude generar el STL: ' + detalle);
      // que quede en low.log: el host si tiene puente con Python
      try {
        window.parent.postMessage({ type: 'low:log', text: 'STL: ' + detalle }, '*');
      } catch { /* estamos en un navegador suelto */ }
    }
  };

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
    } catch (error) { setAviso(error instanceof Error ? error.message : 'No se pudo abrir el proyecto'); }
  };
  /** Abrir por la app (pywebview): así SÍ queda la ruta y Guardar sobrescribe. */
  const openProjectViaHost = () => window.parent.postMessage({ type: 'low:open-project' }, '*');

  // respuestas del host: ruta con la que quedó el proyecto
  useEffect(() => {
    const onMsg = (ev: MessageEvent) => {
      const m = ev.data as {
        type?: string; path?: string; json?: string;
        bytes?: number; error?: string; cancelado?: boolean } | null;
      if (!m || typeof m !== 'object') return;
      if (m.type === 'low:saved-binary') {
        // el host ya escribio (o no): el panel muestra la RUTA real
        setStlPanel((pnl) => {
          if (!pnl) return pnl;
          if (m.cancelado) return { ...pnl, fase: 'informe', msg: '' };
          if (m.error) return { ...pnl, fase: 'falla', msg: 'No se pudo guardar: ' + m.error };
          const kb = Math.max(1, Math.round((m.bytes || 0) / 1024));
          return { ...pnl, fase: 'listo',
                   msg: `Guardado (${kb} KB) en:
${m.path || '(ruta desconocida)'}` };
        });
        return;
      }
      if (m.type === 'low:saved') {
        if (m.path) projectPathRef.current = m.path;
        setSavedTick((n) => n + 1);
      } else if (m.type === 'low:opened' && typeof m.json === 'string') {
        try {
          eng()?.importProject(JSON.parse(m.json));
          projectPathRef.current = m.path || '';
        } catch { setAviso('No se pudo abrir el proyecto'); }
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
        height: 30, minWidth: 30,
        padding: '0 8px',
        borderRadius: 8,
        border: `1px solid ${active ? 'rgba(240,69,14,.65)' : 'transparent'}`,
        cursor: 'pointer',
        background: active ? 'rgba(240,69,14,.16)' : 'transparent',
        color: active ? chipActive : chipFg,
        fontSize: 12, fontWeight: 550,
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
        position: 'absolute', top: 12, left: 12, right: 12, zIndex: 110,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        gap: 8, pointerEvents: 'none',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, pointerEvents: 'auto', flex: '0 0 auto' }}>
          {onRequestClose && (
            <button onClick={onRequestClose} title="Cerrar módulo 3D (Esc)" style={{
              width: 36, height: 36, padding: 0, border: '1px solid rgba(127,127,127,.12)', borderRadius: 10, cursor: 'pointer',
              background: chipBg, color: chipFg, fontSize: 17, backdropFilter: 'blur(14px)',
            }} aria-label="Salir de 3D">←</button>
          )}
        </div>

        <div style={{
          display: 'flex', alignItems: 'center', gap: 2, padding: 4, borderRadius: 8,
          background: chipBg, border: '1px solid rgba(127,127,127,.12)', boxShadow: '0 10px 30px rgba(0,0,0,.12)',
          backdropFilter: 'blur(14px)', pointerEvents: 'auto', flex: '0 1 auto', overflowX: 'auto',
        }}>
          {barBtn('⟲', () => eng()?.undo(), false, 'Deshacer (Ctrl+Z)')}
          {barBtn('⟳', () => eng()?.redo(), false, 'Rehacer (Ctrl+Alt+Z / Ctrl+Shift+Z)')}
          <span style={{ width: 1, height: 18, background: dark ? '#3a3f4b' : '#cfd4dd', margin: '0 4px' }} />
          {barBtn('＋', () => {
            setConfirmNuevo(true);
          }, false, 'Nuevo proyecto (descarta el dibujo actual)')}
          {barBtn('⌁', () => {
            if (window.parent !== window) openProjectViaHost(); else fileInputRef.current?.click();
          }, false, 'Abrir proyecto LOW 3D')}
          {barBtn('▣', () => saveProject(false), false,
            savedTick && projectPathRef.current
              ? `Guardar (Ctrl+S) — sobrescribe ${projectPathRef.current}`
              : 'Guardar proyecto LOW 3D (Ctrl+S)')}
          {barBtn('▣+', () => saveProject(true), false,
            'Guardar en otro archivo (Ctrl+Shift+S)')}
          {barBtn('⬡', pedirSTL, false,
            'Exportar como STL para impresión 3D — dice antes qué entra y qué queda afuera')}
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
          {barBtn('⌘', () => { eng()?.groupSelection(); }, false,
            'Agrupar lo seleccionado (Ctrl+G) — se elige, se mueve y se deforma como una sola pieza. Ctrl+Shift+G lo desarma')}
          {barBtn('⬢', () => { eng()?.solidifySelection(); }, false,
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
              background: chipBg, color: chipFg, fontSize: 16, whiteSpace: 'nowrap' }} aria-label="Borrar guía">⌫</button>
          <button onClick={() => setTheme(dark ? 'light' : 'dark')} title="Fondo claro / oscuro"
            style={{ width: 36, height: 36, borderRadius: 8, border: 'none', cursor: 'pointer',
              background: chipBg, color: chipFg, fontSize: 16 }}>{dark ? '☀' : '☾'}</button>
        </div>
      </header>

      <Panel3D title="Herramientas" initial={{ left: 14, top: 60 }}>
        <Toolbar3D engine={engineRef} />
      </Panel3D>
      <Panel3D title="Pincel / Superficie" initial={{ right: 14, top: 60 }} width={220}>
        <PropertiesPanel3D />
      </Panel3D>
      {(confirmNuevo || aviso) && (
        <div style={{
          position: 'absolute', inset: 0, zIndex: 91, display: 'grid', placeItems: 'center',
          background: 'rgba(0,0,0,.45)', pointerEvents: 'auto',
        }} onClick={() => { setConfirmNuevo(false); setAviso(''); }}>
          <div onClick={(ev) => ev.stopPropagation()} style={{
            width: 340, padding: 16, borderRadius: 10,
            background: dark ? '#1b1d23' : '#f4f6fa',
            border: `1px solid ${dark ? '#2a2d35' : '#d3d8e2'}`,
            boxShadow: '0 24px 60px rgba(0,0,0,.5)',
            color: dark ? '#e6e9f0' : '#23272f',
            font: '400 12px/1.5 Figtree, system-ui, sans-serif',
          }}>
            <div style={{ font: '600 11px/1 Figtree, sans-serif', letterSpacing: .8,
                          textTransform: 'uppercase', opacity: .7, marginBottom: 10 }}>
              {confirmNuevo ? 'Proyecto nuevo' : 'Aviso'}
            </div>
            <div>{confirmNuevo
              ? 'Se descarta el dibujo actual. Si querés conservarlo, cancelá y guardalo primero.'
              : aviso}</div>
            <div style={{ display: 'flex', gap: 8, marginTop: 16, justifyContent: 'flex-end' }}>
              <button onClick={() => { setConfirmNuevo(false); setAviso(''); }} style={{
                height: 30, padding: '0 12px', borderRadius: 7, cursor: 'pointer',
                border: `1px solid ${dark ? '#2a2d35' : '#d3d8e2'}`,
                background: 'transparent', color: 'inherit', fontSize: 12,
              }}>{confirmNuevo ? 'Cancelar' : 'Cerrar'}</button>
              {confirmNuevo && (
                <button onClick={() => { setConfirmNuevo(false); eng()?.newProject(); }} style={{
                  height: 30, padding: '0 14px', borderRadius: 7, cursor: 'pointer',
                  border: 'none', background: LOW_ACCENT, color: '#fff', fontSize: 12, fontWeight: 600,
                }}>Empezar de nuevo</button>
              )}
            </div>
          </div>
        </div>
      )}

      {stlPanel && (
        <div style={{
          position: 'absolute', inset: 0, zIndex: 90, display: 'grid', placeItems: 'center',
          background: 'rgba(0,0,0,.45)', pointerEvents: 'auto',
        }} onClick={() => setStlPanel((p) => (p && p.fase === 'guardando' ? p : null))}>
          <div onClick={(ev) => ev.stopPropagation()} style={{
            width: 372, padding: 16, borderRadius: 10,
            background: dark ? '#1b1d23' : '#f4f6fa',
            border: `1px solid ${dark ? '#2a2d35' : '#d3d8e2'}`,
            boxShadow: '0 24px 60px rgba(0,0,0,.5)',
            color: dark ? '#e6e9f0' : '#23272f',
            font: '400 12px/1.5 Figtree, system-ui, sans-serif',
          }}>
            <div style={{ font: '600 11px/1 Figtree, sans-serif', letterSpacing: .8,
                          textTransform: 'uppercase', opacity: .7, marginBottom: 10 }}>
              Exportar STL
            </div>
            {stlPanel.fase !== 'informe' ? (
              <div>
                <div style={{ padding: '9px 10px', borderRadius: 6, whiteSpace: 'pre-wrap',
                  wordBreak: 'break-all',
                  background: stlPanel.fase === 'falla' ? 'rgba(240,69,14,.14)'
                    : stlPanel.fase === 'listo' ? 'rgba(30,132,73,.16)'
                    : (dark ? 'rgba(255,255,255,.06)' : 'rgba(0,0,0,.05)'),
                  border: `1px solid ${stlPanel.fase === 'falla' ? 'rgba(240,69,14,.45)'
                    : stlPanel.fase === 'listo' ? 'rgba(30,132,73,.5)'
                    : (dark ? '#2a2d35' : '#d3d8e2')}` }}>
                  {stlPanel.msg}
                </div>
                {stlPanel.fase === 'guardando' && (
                  <div style={{ opacity: .7, marginTop: 8 }}>
                    Se abrio el dialogo de la app para elegir la carpeta. Si no lo ves,
                    puede estar detras de esta ventana.
                  </div>
                )}
              </div>
            ) : stlPanel.exportables === 0 ? (
              <div>
                No hay nada sólido para exportar.
                <div style={{ opacity: .7, marginTop: 8 }}>
                  Un STL solo lleva triángulos: sirven los trazos (que son tubos cerrados) y los
                  volúmenes (<b>Ctrl+E</b>). Las guías son andamio y los rellenos son caras sin
                  espesor, así que no se pueden imprimir.
                </div>
              </div>
            ) : (
              <div>
                <div>
                  Se exportan <b>{stlPanel.exportables}</b> objeto(s): {stlPanel.solidos} volumen(es)
                  y {stlPanel.trazos} trazo(s), <b>{stlPanel.triangulos.toLocaleString('es-AR')}</b> triángulos.
                </div>
                {stlPanel.caras > 0 && (
                  <div style={{ opacity: .7, marginTop: 8 }}>
                    De {stlPanel.caras} figura(s) va el contorno, no la cara: una cara
                    no tiene espesor. Para imprimirla, convertila en volumen con <b>Ctrl+E</b>.
                  </div>
                )}
                {(stlPanel.rellenos > 0 || stlPanel.guias > 0) && (
                  <div style={{ opacity: .7, marginTop: 8 }}>
                    Quedan afuera
                    {stlPanel.rellenos > 0 && ` ${stlPanel.rellenos} relleno(s) — caras sin espesor`}
                    {stlPanel.rellenos > 0 && stlPanel.guias > 0 && ' y'}
                    {stlPanel.guias > 0 && ` ${stlPanel.guias} guía(s) — son andamio`}.
                  </div>
                )}
                <div style={{ opacity: .7, marginTop: 8 }}>
                  Escala: 1 unidad de LOW = 10 mm.
                </div>
                {/* Para imprimir, que la malla CIERRE es el dato que importa.
                    Los volúmenes cierran; los trazos quedan abiertos porque el
                    tubo y sus tapas no están soldados. Decirlo antes evita la
                    sorpresa en el slicer. */}
                <div style={{ marginTop: 10, padding: '7px 9px', borderRadius: 6,
                  background: stlPanel.cerrada ? 'rgba(30,132,73,.16)' : 'rgba(240,69,14,.14)',
                  border: `1px solid ${stlPanel.cerrada ? 'rgba(30,132,73,.5)' : 'rgba(240,69,14,.45)'}` }}>
                  {stlPanel.cerrada ? (
                    <span>La malla <b>cierra</b>: lista para imprimir.</span>
                  ) : (
                    <span>
                      La malla <b>no cierra</b> ({stlPanel.aristasAbiertas} aristas abiertas).
                      Se exporta igual y la mayoría de los slicers la repara al abrirla.
                      {stlPanel.trazos > 0 && ' Los trazos quedan abiertos: para un sólido cerrado, convertilos en volumen con Ctrl+E.'}
                    </span>
                  )}
                </div>
              </div>
            )}
            <div style={{ display: 'flex', gap: 8, marginTop: 16, justifyContent: 'flex-end' }}>
              {stlPanel.fase === 'guardando' ? (
                <span style={{ opacity: .6, alignSelf: 'center' }}>Esperando el dialogo…</span>
              ) : (
                <button onClick={() => setStlPanel(null)} style={{
                  height: 30, padding: '0 12px', borderRadius: 7, cursor: 'pointer',
                  border: `1px solid ${dark ? '#2a2d35' : '#d3d8e2'}`,
                  background: 'transparent', color: 'inherit', fontSize: 12,
                }}>{stlPanel.fase === 'informe' && stlPanel.exportables > 0 ? 'Cancelar' : 'Cerrar'}</button>
              )}
              {stlPanel.fase === 'informe' && stlPanel.exportables > 0 && stlPanel.seleccion > 0 && (
                <button onClick={() => hacerSTL(true)} style={{
                  height: 30, padding: '0 12px', borderRadius: 7, cursor: 'pointer',
                  border: `1px solid ${LOW_ACCENT}`, background: 'transparent',
                  color: LOW_ACCENT, fontSize: 12,
                }}>Solo la selección ({stlPanel.seleccion})</button>
              )}
              {stlPanel.fase === 'informe' && stlPanel.exportables > 0 && (
                <button onClick={() => hacerSTL(false)} style={{
                  height: 30, padding: '0 14px', borderRadius: 7, cursor: 'pointer',
                  border: 'none', background: LOW_ACCENT, color: '#fff', fontSize: 12, fontWeight: 600,
                }}>Exportar</button>
              )}
              {stlPanel.fase === 'falla' && (
                <button onClick={() => setStlPanel((pn) => (pn ? { ...pn, fase: 'informe', msg: '' } : pn))} style={{
                  height: 30, padding: '0 14px', borderRadius: 7, cursor: 'pointer',
                  border: `1px solid ${LOW_ACCENT}`, background: 'transparent',
                  color: LOW_ACCENT, fontSize: 12,
                }}>Volver a intentar</button>
              )}
            </div>
          </div>
        </div>
      )}

      <Panel3D title="Objetos" initial={{ right: 14, bottom: 14 }} width={230}>
        <ObjectList3D engine={engineRef} />
      </Panel3D>

      <Panel3D title="Capas" initial={{ left: 14, bottom: 14 }} width={240}>
        <LayerManager3D engine={engineRef} />
      </Panel3D>

      <OrientationJoystick view={view} dark={dark} onView={applyView} />


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
