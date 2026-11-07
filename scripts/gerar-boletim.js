#!/usr/bin/env node
/* Estante Livre · gera o rascunho de uma edição do boletim a partir da base.
   Uso:   node scripts/gerar-boletim.js 2026-10-01            (tudo o que mudou desde essa data)
          node scripts/gerar-boletim.js 2026-10-01 2026-10-31 (janela fechada)
   Saída: docs/boletim/edicao-<data final>.md, em Markdown pronto para colar no Substack.
   O que é dado sai pronto; o que é texto autoral fica marcado com [ESCREVER]. */

const fs = require("fs"), path = require("path"), vm = require("vm");
const RAIZ = path.resolve(__dirname, "..");
const SITE = "https://estante-livre-br.vercel.app";

const desde = process.argv[2], ate = process.argv[3] || new Date().toISOString().slice(0,10);
if(!/^\d{4}-\d{2}-\d{2}$/.test(desde||"")){ console.error("Informe a data inicial: node scripts/gerar-boletim.js AAAA-MM-DD [AAAA-MM-DD]"); process.exit(1); }
const dentro = d => d && d >= desde && d <= ate;

const ctx = { document:{addEventListener(){},getElementById(){return null}}, location:{href:SITE+"/",origin:SITE,pathname:"/"}, console };
vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(RAIZ,"assets/dados.js"),"utf8") +
  ";this.D={CASOS,ATOS,LIVROS,FONTES,NORMAS,CORRECOES,ATUALIZADO,DOI};", ctx);
const { CASOS, ATOS, FONTES, NORMAS, CORRECOES, ATUALIZADO, DOI } = ctx.D;

const MESES = ["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"];
const data = s => { const [a,m,d] = s.split("-").map(Number); return `${d} de ${MESES[m-1]} de ${a}`; };
const dias = (a,b) => Math.round((new Date(b)-new Date(a))/864e5);
const link = (txt,url) => `[${txt}](${url})`;
const urlAto = k => `${SITE}/atos/${k.toLowerCase()}.html`;
const urlCaso = id => `${SITE}/casos/${id.toLowerCase()}.html`;
const fonte = k => FONTES[k] ? link(FONTES[k].veic, FONTES[k].url) : "";

/* blocos */
const atosNovos = Object.entries(ATOS).filter(([k,a])=>dentro(a.data)).sort((x,y)=>x[1].data.localeCompare(y[1].data));
const reversoes = Object.entries(ATOS).filter(([k,a])=>a.reversao && dentro(a.reversao.data));
const normasMud = NORMAS.filter(n=>dentro(n.situacaoEm) || dentro(n.data));
const correcoes = CORRECOES.filter(c=>dentro(c.data));
const espera = Object.entries(ATOS).filter(([k,a])=>a.cumprimento).map(([k,a])=>({k,a,d:dias(a.cumprimento.desde,ate)})).sort((x,y)=>y.d-x.d);

const obrasDoAto = k => [...new Set(CASOS.filter(c=>c.ato===k).map(c=>c.obra))];
const nAtos = Object.keys(ATOS).length, nCasos = CASOS.length, nObras = new Set(CASOS.map(c=>c.obra)).size;
const efetivos = Object.keys(ATOS).filter(k=>CASOS.some(c=>c.ato===k && ["Decisão ou ordem","Execução comprovada"].includes(c.estagio)));
const revertidos = efetivos.filter(k=>ATOS[k].reversao).length;

let md = `# Estante Livre · boletim de ${data(ate)}

*Censura e retirada de livros no Brasil, de ${data(desde)} a ${data(ate)}.*

[ESCREVER: abertura em dois ou três parágrafos. O que marcou o período e por que importa. Se não houve caso novo, esse também é um dado.]

## Os números de hoje

- ${nCasos} registros, ${nObras} obras e conjuntos, ${nAtos} atos em ${new Set(Object.values(ATOS).map(a=>a.uf)).size} unidades da federação.
- ${revertidos} de ${efetivos.length} medidas que chegaram a ser decididas ou executadas foram revertidas.
- ${NORMAS.length} leis e projetos de lei na ${link("trilha de normas", SITE+"/normas.html")}, ${NORMAS.filter(n=>n.situacao==="Em vigor").length} deles em vigor.

`;

md += `## Casos novos no período\n\n`;
md += atosNovos.length ? atosNovos.map(([k,a])=>`- **${data(a.data)} · ${a.cidade?a.cidade+", ":""}${a.uf}.** ${link(a.nome, urlAto(k))}. Obras: ${obrasDoAto(k).join("; ")}.`).join("\n") : "Nenhum ato novo entrou no catálogo neste período.";
md += "\n\n";

md += `## Desfechos\n\n`;
md += reversoes.length ? reversoes.map(([k,a])=>`- **${a.nome}.** ${a.reversao.via} em ${data(a.reversao.data)}, ${dias(a.data,a.reversao.data)} dias depois do ato. ${a.reversao.nota} Fonte: ${fonte(a.reversao.fonte)}.`).join("\n") : "Nenhuma reversão registrada neste período.";
md += "\n\n";

md += `## À espera de cumprimento\n\nDecisões que mandaram devolver livros e ainda não têm cumprimento confirmado, contadas até ${data(ate)}:\n\n`;
md += espera.map(({k,a,d})=>`- **${d} dias** · ${link(a.nome, urlAto(k))}. ${a.cumprimento.decisao}. Falta: ${a.cumprimento.falta}.`).join("\n");
md += "\n\n";

md += `## Leis e projetos\n\n`;
md += normasMud.length ? normasMud.map(n=>`- **${n.numero}** (${n.cidade?n.cidade+", ":""}${n.uf}) · ${n.situacao} em ${data(n.situacaoEm)}. ${n.resumo}`).join("\n") : "Nenhuma mudança registrada nas normas acompanhadas.";
md += "\n\n";

md += `## Correções\n\n`;
md += correcoes.length ? correcoes.map(c=>`- **${c.id}** (${data(c.data)}). ${c.texto}`).join("\n") : "Nenhuma correção neste período.";
md += "\n\n";

md += `## Para ler

[ESCREVER ou apagar: uma a três leituras sobre o tema, com uma linha de comentário cada.]

## Relate um caso

Sabe de um livro retirado de escola ou biblioteca? ${link("Conte pelo formulário", SITE+"/relate.html")}. Só a editora do Estante Livre lê as respostas, e o contato de quem relata é apagado quando a verificação termina.

---

Dados abertos sob DOI ${link(DOI, "https://doi.org/"+DOI)}. Base atualizada em ${data(ATUALIZADO)}.
`;

const out = path.join(RAIZ, "docs/boletim", `edicao-${ate}.md`);
fs.mkdirSync(path.dirname(out), {recursive:true});
fs.writeFileSync(out, md);
console.log("ok · " + path.relative(RAIZ,out) + ` · ${atosNovos.length} atos novos, ${reversoes.length} desfechos, ${normasMud.length} normas, ${correcoes.length} correções`);
