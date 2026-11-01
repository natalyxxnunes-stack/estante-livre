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
const cssPath = path.join(root, "assets", "estilo.css");
const css = fs.existsSync(cssPath) ? fs.readFileSync(cssPath, "utf8") : "";
if (!css.includes("@media")) errors.push("assets/estilo.css: media query responsiva ausente");
if (!css.includes("prefers-reduced-motion")) warnings.push("assets/estilo.css: prefers-reduced-motion não encontrado");
console.log("Auditoria estática: " + htmlFiles.length + " páginas HTML e " + images + " imagens.");
console.log("Resultado: " + errors.length + " erro(s) bloqueante(s), " + warnings.length + " alerta(s) para revisão manual.");
for (const warning of warnings) console.warn("AVISO: " + warning);
for (const error of errors) console.error("ERRO: " + error);
if (errors.length) process.exitCode = 1;
