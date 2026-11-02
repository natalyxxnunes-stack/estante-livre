#!/usr/bin/env node
"use strict";
const fs = require("fs");
const path = require("path");
const root = path.resolve(__dirname, "..");
const ignored = new Set([".git", "node_modules", ".vercel"]);
const htmlFiles = [];
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory() && !ignored.has(entry.name)) walk(full);
    else if (entry.isFile() && entry.name.toLowerCase().endsWith(".html")) htmlFiles.push(full);
  }
}
walk(root);
const errors = [];
const warnings = [];
let images = 0;
for (const file of htmlFiles) {
  const html = fs.readFileSync(file, "utf8");
  const rel = path.relative(root, file);
  if (!html.includes('<html lang="pt-BR">')) errors.push(rel + ": idioma pt-BR ausente");
  if (!html.includes('name="viewport"')) errors.push(rel + ": meta viewport ausente");
  if (!html.includes('class="pular" href="#conteudo"')) errors.push(rel + ": link para pular ao conteúdo ausente");
  if (!html.includes('<main id="conteudo"')) errors.push(rel + ": main#conteudo ausente");
  const tags = html.match(/<img\b[^>]*>/gi) || [];
  for (const tag of tags) {
    images++;
    if (!/\balt\s*=/.test(tag)) errors.push(rel + ": imagem sem atributo alt");
  }
  const external = html.match(/<a\b[^>]*target="_blank"[^>]*>/gi) || [];
  for (const tag of external) {
    if (!/\brel="[^"]*noopener/i.test(tag)) warnings.push(rel + ": link target=_blank sem rel=noopener");
  }
}
/* Integridade da trilha de investigação nas páginas estáticas geradas. */
const casePages = htmlFiles.filter(file => /^casos\\/el-\\d+\\.html$/i.test(path.relative(root, file)));
const bookPages = htmlFiles.filter(file => /^livros\\/.+\\.html$/i.test(path.relative(root, file)));
const actPages = htmlFiles.filter(file => /^atos\\/.+\\.html$/i.test(path.relative(root, file)));
for (const file of casePages) {
  const html = fs.readFileSync(file, "utf8"), rel = path.relative(root, file);
  if (!html.includes('class="rota-investigacao"')) errors.push(rel + ": trilha livro → ato → agentes ausente");
  if (!html.includes('class="fontes"')) errors.push(rel + ": referências vinculadas ao registro ausentes");
  if (/atos\\.html#ag-/.test(html)) errors.push(rel + ": agente ainda aponta para âncora genérica, não para perfil documental");
}
for (const file of bookPages) {
  const html = fs.readFileSync(file, "utf8"), rel = path.relative(root, file);
  if (!html.includes('class="trilha-livro"')) errors.push(rel + ": ligação do livro com registro, ato e agentes ausente");
  if (!html.includes('class="provas-ocorrencia"')) errors.push(rel + ": consulta de fontes por ocorrência ausente");
}
for (const file of actPages) {
  const html = fs.readFileSync(file, "utf8"), rel = path.relative(root, file);
  if (!html.includes('class="rota-ato"')) errors.push(rel + ": percurso do ato para registros e agentes ausente");
  if (!html.includes('class="fonte-contexto"')) errors.push(rel + ": orientação sobre o alcance das fontes ausente");
}
console.log("Trilha de investigação: " + casePages.length + " fichas de registro, " + bookPages.length + " fichas de obra e " + actPages.length + " páginas de ato verificadas.");

const cssPath = path.join(root, "assets", "estilo.css");
const css = fs.existsSync(cssPath) ? fs.readFileSync(cssPath, "utf8") : "";
if (!css.includes("@media")) errors.push("assets/estilo.css: media query responsiva ausente");
if (!css.includes("prefers-reduced-motion")) warnings.push("assets/estilo.css: prefers-reduced-motion não encontrado");

function luminancia(hex) {
  const rgb = hex.replace("#", "").match(/../g).map(v => parseInt(v, 16) / 255);
  const linear = rgb.map(v => v <= 0.04045 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4));
  return 0.2126 * linear[0] + 0.7152 * linear[1] + 0.0722 * linear[2];
}
function contraste(a, b) {
  const x = luminancia(a), y = luminancia(b);
  return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05);
}
const paresDeContraste = [
  ["texto claro sobre vermelho editorial", "#FFFCF5", "#C83220"],
  ["texto vermelho editorial sobre papel", "#C83220", "#F5F1E8"],
  ["texto amarelo sobre azul", "#F2D23C", "#2447D8"],
  ["texto escuro sobre amarelo", "#191817", "#F2D23C"],
  ["texto claro sobre azul", "#FFFCF5", "#2447D8"],
  ["texto claro sobre verde", "#FFFCF5", "#286B50"]
];
for (const [nome, frente, fundo] of paresDeContraste) {
  const ratio = contraste(frente, fundo);
  console.log("Contraste " + nome + ": " + ratio.toFixed(2) + ":1");
  if (ratio < 4.5) errors.push("contraste insuficiente (WCAG AA texto normal): " + nome + " = " + ratio.toFixed(2) + ":1");
}

console.log("Auditoria estática: " + htmlFiles.length + " páginas HTML e " + images + " imagens.");
console.log("Resultado: " + errors.length + " erro(s) bloqueante(s), " + warnings.length + " alerta(s) para revisão manual.");
for (const warning of warnings) console.warn("AVISO: " + warning);
for (const error of errors) console.error("ERRO: " + error);
if (errors.length) process.exitCode = 1;
