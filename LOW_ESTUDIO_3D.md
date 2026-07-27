# LOW Estudio — módulo de dibujo 3D (estado real, julio 2026)

Este documento describe lo que **efectivamente corre hoy** en el producto para el
dibujo 3D. Si estás por tocar algo relacionado con "3D" en este repo, leé esto
primero — hay varios intentos anteriores que NO son el camino actual (ver
"Intentos anteriores / no usar" más abajo).

## Qué es

**LOW Estudio** es el módulo de dibujo 3D estilo Feather (guías de dibujo:
plano/cilindro/esfera/toro/loft, trazos con presión, deshacer/rehacer,
selección por click y por lazo, borrador, vistas orto/perspectiva). Se abre
con el botón 🧊 de la barra lateral izquierda de LOW (id `abL3d`, tooltip
"LOW Estudio").

## Cómo está armado (arquitectura real)

El motor **NO** es código nativo de LOW ni vive en `ui/*.js` a mano. Es una
app web independiente — React + TypeScript + Three.js, construida con Vite —
que vive en su propio proyecto:

```
low2-hybrid/                    ← proyecto fuente (React/TS/Three.js/Vite)
  src/...                       ← el motor real: guías, trazos, cámara, etc.
  package.json                 → script "build:renderer": vite build
  dist/renderer/                ← build estático (index.html + assets/*.js)
```

Ese build estático **no usa nada de Electron ni de Node** — es HTML/JS/CSS
puro (`base: './'` en `vite.config.ts`, sin `window.electronAPI`, sin
`require`). Por eso se puede incrustar en cualquier lado sin tocar nada.

Para que quede **integrado dentro del mismo LOW.exe** (un solo software, sin
instalador aparte), el build de `low2-hybrid` se copia tal cual dentro del
proyecto principal:

```
ui/estudio3d/                  ← copia de low2-hybrid/dist/renderer/*
  index.html
  assets/index-XXXX.js
```

Y en la UI principal de LOW (`ui/index.html` + `ui/app.js`) el botón 🧊 abre
un panel (`#l3dView`) que contiene un `<iframe id="l3dFrame">` apuntando a
`estudio3d/index.html` (carga perezosa: el `src` se asigna la primera vez que
se abre, no antes). Ver `openL3d()` / `closeL3d()` en `ui/app.js`.

`ui/index.html` (`('ui', 'ui')` en `LOW.spec`) ya empaqueta la carpeta
`ui/` completa recursivamente en el instalador — no hace falta tocar el
`.spec` ni el `.iss` para que `estudio3d/` viaje adentro del `.exe`.

## Cómo hacer una corrección al motor 3D

El código que hay que editar para corregir/mejorar el dibujo 3D está en
**`low2-hybrid/src/`** (TypeScript + React + Three.js), NO en `ui/estudio3d/`
(esa carpeta es un build generado, se pisa entera cada vez).

Flujo:
1. Editar el código en `low2-hybrid/src/...`
2. `cd low2-hybrid && npm run build:renderer` (equivale a `vite build`,
   genera `low2-hybrid/dist/renderer/`)
3. Copiar el resultado a `ui/estudio3d/` (reemplaza todo el contenido):
   ```
   rm -rf ui/estudio3d/*
   cp -r low2-hybrid/dist/renderer/* ui/estudio3d/
   ```
4. Reconstruir el `.exe`/instalador de LOW como siempre (PyInstaller +
   Inno Setup / GitHub Actions).

No hace falta tocar `electron/`, `electron-builder`, ni nada del empaquetado
de Electron de `low2-hybrid` para este flujo — eso solo se usaba para probar
el motor como app de escritorio suelta, y quedó descartado (ver abajo).

## Intentos anteriores / NO usar como referencia

Hubo (al menos) tres líneas de trabajo distintas para "dibujo 3D" en este
repo. Para evitar confusión, dos quedaron descartadas:

1. **`ui/lienzo3d.js`** ("Lienzo 3D", funciones `l3d*`, vendorizaba
   `ui/vendor/three.min.js` + `three-orbit.js`). Era una reimplementación
   nativa (vanilla JS) más vieja y menos completa del mismo concepto
   (superficies-guía Feather-style). **Reemplazada** por LOW Estudio en
   julio 2026 — el archivo sigue en el repo por si sirve de referencia, pero
   ya no está enlazado desde `ui/index.html` (se sacaron los `<script>` que
   lo cargaban). No seguir desarrollando ahí.

2. **`low2-hybrid` empaquetado como app Electron independiente**
   (`electron/main.cjs`, `npm run dist:win`, instalador `.exe` separado
   "LOW 3D"). Se llegó a publicar una build portable suelta en un release de
   GitHub (`low2-hybrid-v0.1.0-portable`) para probarla antes de integrarla.
   **Descartado como forma de distribución** — el motor de ese proyecto es
   el que se **incrustó** dentro de LOW (ver arriba), pero ya NO se
   distribuye como `.exe`/app aparte. Si alguien pide "bajar el 3D suelto",
   la respuesta correcta es "ya está adentro de LOW, no hace falta bajar
   nada más".

3. **`ARCHITECTURE.md` (raíz del repo) + `CMakeLists.txt` + `include/Low/*`
   + `low2-hybrid/native/`**: un ADR para un motor 3D nativo en **C++20 +
   OpenGL 4.6** ("Programar Motores, no Herramientas"), pensado para
   10M+ puntos de control. Es un documento de **diseño/aspiracional**, no
   hay un motor C++ funcional integrado a LOW hoy. No confundir ese plan con
   LOW Estudio (que es el motor real que corre ahora, en Three.js/WebGL). Si
   se retoma ese camino nativo en el futuro, actualizar este archivo.

## Resumen para el próximo modelo que lea esto

- ¿Dónde está el motor 3D que usa el usuario? → `low2-hybrid/src/` (fuente),
  `ui/estudio3d/` (build embebido), botón 🧊 = "LOW Estudio".
- ¿Dónde NO tocar? → `ui/lienzo3d.js` (viejo, desconectado),
  `ARCHITECTURE.md`/C++ (plan a futuro, no implementado).
- ¿Cómo se prueba sin instalar nada? → `ui/mock-api.js`, abrir
  `ui/index.html?mock=1` con un `python -m http.server` en la carpeta `ui/`.
