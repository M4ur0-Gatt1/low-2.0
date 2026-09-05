"""Sella los scripts propios de ui/index.html con la versión de LOW.

Sin esto, después de actualizar LOW el WebView puede seguir ejecutando el
`app.js` de la versión anterior: el usuario instala la nueva, no ve el cambio y
el arreglo parece no haberse hecho. Versionar la URL obliga a descargarlo.

Se corre en cada bump de versión, ANTES de commitear:

    python tools/stamp_version.py
"""
import re
import sys
from pathlib import Path

RAIZ = Path(__file__).resolve().parent.parent


def main() -> int:
    version = (RAIZ / "VERSION").read_text(encoding="utf-8").strip()
    index = RAIZ / "ui" / "index.html"
    html = index.read_text(encoding="utf-8")

    def propio(src: str) -> bool:
        # vendor/ y las URLs externas quedan como están: no las versionamos
        return not (src.startswith("vendor/") or "://" in src)

    def sellar(m: "re.Match[str]") -> str:
        src = m.group(1)
        if not propio(src):
            return m.group(0)
        base = src.split("?")[0]
        return f'<script src="{base}?v={version}"></script>'

    def sellar_css(m: "re.Match[str]") -> str:
        antes, src, despues = m.group(1), m.group(2), m.group(3)
        if not propio(src):
            return m.group(0)
        base = src.split("?")[0]
        return f'<link {antes}href="{base}?v={version}"{despues}>'

    nuevo = re.sub(r'<script src="([^"]+)"></script>', sellar, html)
    # La hoja de estilos necesita el mismo sello que los scripts. Sin esto el
    # usuario actualiza, recibe el JS nuevo y sigue con el CSS de la versión
    # anterior: la interfaz aparece rota o el arreglo visual no se ve.
    nuevo = re.sub(r'<link ([^>]*?)href="([^"]+\.css[^"]*)"([^>]*?)>', sellar_css, nuevo)
    if nuevo != html:
        index.write_text(nuevo, encoding="utf-8")
    print(f"scripts y hojas de estilo sellados con v{version}: {nuevo.count('?v=' + version)}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
