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

    def sellar(m: "re.Match[str]") -> str:
        src = m.group(1)
        # vendor/ y las URLs externas quedan como están: no las versionamos
        if src.startswith("vendor/") or "://" in src:
            return m.group(0)
        base = src.split("?")[0]
        return f'<script src="{base}?v={version}"></script>'

    nuevo = re.sub(r'<script src="([^"]+)"></script>', sellar, html)
    if nuevo != html:
        index.write_text(nuevo, encoding="utf-8")
    print(f"scripts sellados con v{version}: {nuevo.count('?v=' + version)}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
