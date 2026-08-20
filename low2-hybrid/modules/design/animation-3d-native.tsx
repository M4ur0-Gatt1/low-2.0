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
  light: 'radial-gradient(120% 120% at 50% 10%, #eceef2 0%, #e2e6ee 70%, #d8dde7 100%)',
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
  /** Estado del panel de exportación STL. Antes esto era window.confirm(), y
   *  dentro de pywebview los diálogos nativos del navegador NO responden: el
   *  botón "no hacía nada". Ahora el aviso es DOM propio del estudio, que
   *  funciona igual en la app y en el navegador. */
  const [stlPanel, setStlPanel] = useState<null | {
    solidos: number; trazos: number; rellenos: number; guias: number;
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
    } catch (error) { window.alert(error instanceof Error ? error.message : 'No se pudo abrir el proyecto'); }
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
          {barBtn('STL', pedirSTL, false,
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
        <Toolbar3D engine={engineRef} />
      </Panel3D>
      <Panel3D title="Pincel / Superficie" initial={{ right: 14, top: 60 }} width={220}>
        <PropertiesPanel3D />
      </Panel3D>
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
