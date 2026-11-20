"""Regenera public/og.jpg (1200x630) a partir de diseno/og.html.
Uso: python3 herramientas/generar_og.py  (necesita Playwright + Chrome)"""
from pathlib import Path
from playwright.sync_api import sync_playwright
from PIL import Image
raiz = Path(__file__).resolve().parent.parent
with sync_playwright() as p:
    b = p.chromium.launch(executable_path="/usr/bin/google-chrome", args=["--allow-file-access-from-files"])
    pg = b.new_page(viewport={"width": 1200, "height": 630})
    pg.goto((raiz / "diseno/og.html").as_uri()); pg.wait_for_timeout(600)
    pg.screenshot(path=str(raiz / "diseno/og.png"))
    b.close()
Image.open(raiz / "diseno/og.png").convert("RGB").save(raiz / "public/og.jpg", quality=84, optimize=True)
(raiz / "diseno/og.png").unlink()
print("public/og.jpg listo")
