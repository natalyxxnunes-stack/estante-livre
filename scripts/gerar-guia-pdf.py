#!/usr/bin/env python3
"""Estante Livre · gera guia-estante-livre.pdf a partir de guia.html.

Rode depois de editar o guia:  python3 scripts/gerar-guia-pdf.py
Precisa de: pip install playwright pypdf  e  playwright install chromium
(ou o Google Chrome instalado em /usr/bin/google-chrome).
A capa sai sozinha; o miolo sai com numeração de página; os dois são juntados.
"""
import http.server, io, os, socketserver, threading
from functools import partial
from playwright.sync_api import sync_playwright
from pypdf import PdfReader, PdfWriter

RAIZ = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SAIDA = os.path.join(RAIZ, "guia-estante-livre.pdf")

class Silencioso(http.server.SimpleHTTPRequestHandler):
    def log_message(self, *a): pass

def main():
    srv = socketserver.TCPServer(("127.0.0.1", 0), partial(Silencioso, directory=RAIZ))
    porta = srv.server_address[1]
    threading.Thread(target=srv.serve_forever, daemon=True).start()
    url = f"http://127.0.0.1:{porta}/guia.html"
    chrome = "/usr/bin/google-chrome" if os.path.exists("/usr/bin/google-chrome") else None
    with sync_playwright() as p:
        nav = p.chromium.launch(executable_path=chrome) if chrome else p.chromium.launch()
        pg = nav.new_page()
        pg.goto(url, wait_until="networkidle")
        pg.emulate_media(media="print")
        pg.evaluate("document.fonts.ready")
        # capa: só a primeira página, sem rodapé
        capa = pg.pdf(format="A4", print_background=True, prefer_css_page_size=True, page_ranges="1")
        # miolo: esconde a capa e numera
        pg.add_style_tag(content="@media print{.g-capa{display:none!important}} @page:first{margin:18mm 17mm 20mm}")
        rodape = ('<div style="width:100%;font-family:Inter,Arial,sans-serif;font-size:7.5pt;color:#6B5A52;'
                  'padding:0 17mm;display:flex;justify-content:space-between">'
                  '<span>Estante Livre · Quando mandam tirar um livro</span>'
                  '<span><span class="pageNumber"></span></span></div>')
        miolo = pg.pdf(format="A4", print_background=True, prefer_css_page_size=True,
                       display_header_footer=True, header_template="<span></span>", footer_template=rodape)
        nav.close()
    srv.shutdown()
    w = PdfWriter()
    for parte in (capa, miolo):
        for pagina in PdfReader(io.BytesIO(parte)).pages:
            w.add_page(pagina)
    w.add_metadata({"/Title": "Quando mandam tirar um livro · Guia do Estante Livre",
                    "/Author": "Nataly Nunes Pinto · Estante Livre",
                    "/Subject": "Guia prático para professores, bibliotecários e gestores escolares"})
    with open(SAIDA, "wb") as f: w.write(f)
    print(f"ok · {len(w.pages)} páginas · {SAIDA}")

if __name__ == "__main__":
    main()
