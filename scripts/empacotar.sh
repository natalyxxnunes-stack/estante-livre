#!/usr/bin/env bash
# Estante Livre · monta o pacote de produção para hospedagem estática (HostGator, public_html).
# Uso:  bash scripts/empacotar.sh
# Saída: dist/ (pasta pronta) e estante-livre-site.zip (para subir pelo Gerenciador de Arquivos).
set -euo pipefail
cd "$(dirname "$0")/.."

node scripts/gerar.js

rm -rf dist estante-livre-site.zip
mkdir -p dist
# só o que o site precisa no ar
cp -r *.html .htaccess robots.txt sitemap.xml llms.txt favicon.ico favicon.svg apple-touch-icon.png og-estante-livre.jpg guia-estante-livre.pdf LICENSE dist/
cp -r assets casos livros atos dados dist/

# conferências
for f in index.html 404.html .htaccess assets/estilo.css assets/dados.js assets/fontes/Fraunces.woff2 dados/estante-livre-casos.csv; do
  [ -f "dist/$f" ] || { echo "FALTA: $f"; exit 1; }
done
paginas=$(find dist -name '*.html' | wc -l)
(cd dist && zip -qr ../estante-livre-site.zip . -x '.DS_Store')
echo "ok · $paginas páginas HTML · $(du -sh dist | cut -f1) · estante-livre-site.zip"
