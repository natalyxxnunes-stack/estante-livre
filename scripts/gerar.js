#!/usr/bin/env node
/* Estante Livre · gerador estático.
   Rode depois de editar assets/dados.js:   node scripts/gerar.js
   Sem dependências. O que ele faz:
   1. valida os dados (listas fechadas, campos obrigatórios, fontes e fichas de livro existentes);
   2. padroniza cabeçalho, menu e rodapé de todas as páginas;
   3. escreve o HTML completo das fichas dentro de casos.html e livros.html, para buscadores lerem sem JavaScript;
   4. gera uma página por caso (casos/el-001.html) e por obra (livros/<nome>.html);
   5. gera dados/estante-livre-casos.csv e .json, sitemap.xml, robots.txt, llms.txt e 404.html. */

const fs = require("fs"), path = require("path"), vm = require("vm");

/* Troque aqui quando o domínio próprio estiver no ar. Todas as URLs absolutas saem daqui. */
const SITE = "https://estante-livre-br.vercel.app";

const RAIZ_REPO = path.resolve(__dirname, "..");
const ler = f => fs.readFileSync(path.join(RAIZ_REPO, f), "utf8");
const gravar = (f, txt) => { const p = path.join(RAIZ_REPO, f); fs.mkdirSync(path.dirname(p), {recursive:true}); fs.writeFileSync(p, txt); };

/* ---------- carrega dados e funções do site num contexto isolado ---------- */
function contexto(raiz){
  const ctx = {
    RAIZ_SITE: raiz,
    document: { addEventListener(){}, getElementById(){ return null; } },
    location: { href: SITE + "/", origin: SITE, pathname: "/" },
    console
  };
  vm.createContext(ctx);
  vm.runInContext(ler("assets/dados.js") + "\n;this.__D={ATOS,AGENTES,PAPEIS,TIPOS_PAPEL,CASOS,LIVROS,FONTES,MODALIDADES,ESTAGIOS,SITUACOES,EIXOS,CORRECOES,RESPONSABILIDADES,DOCUMENTOS_ATOS,ATUALIZADO,CONTATO,OBSTACULOS,LACUNAS};", ctx);
  vm.runInContext(ler("assets/comum.js") + "\n;this.__F={esc,obraDe,slug,ordenar,casoHTML,livroHTML,dataLegivel,urlCaso,urlLivro,urlAto,agentesDoAto};", ctx);
  return Object.assign(ctx.__F, {__D: ctx.__D});
}
const R = contexto("");      // páginas na raiz
const S = contexto("../");   // páginas em casos/ e livros/
const D = R.__D;
const { CASOS, LIVROS, FONTES, MODALIDADES, ESTAGIOS, SITUACOES, EIXOS, ATUALIZADO, ATOS, AGENTES, PAPEIS, TIPOS_PAPEL, OBSTACULOS, LACUNAS } = D;
const esc = R.esc, obraDe = R.obraDe, slug = R.slug;

/* ---------- 1. validação ---------- */
const erros = [];
const ids = new Set();
const OBRIG = ["id","data","ato","titulo","uf","tipo","rede","quem","alegacao","eixo","modalidade","estagio","situacao","desfecho","verificado","fontes"];
for(const c of CASOS){
  for(const k of OBRIG) if(c[k]===undefined || c[k]==="") erros.push(`${c.id||"?"}: campo ${k} vazio`);
  if(ids.has(c.id)) erros.push(`${c.id}: id repetido`); ids.add(c.id);
  if(!/^\d{4}-\d{2}-\d{2}$/.test(c.data||"")) erros.push(`${c.id}: data fora do formato AAAA-MM-DD`);
  if(!MODALIDADES.includes(c.modalidade)) erros.push(`${c.id}: mecanismo fora da lista: ${c.modalidade}`);
  if(!ESTAGIOS.includes(c.estagio)) erros.push(`${c.id}: estágio fora da lista: ${c.estagio}`);
  if(!SITUACOES.includes(c.situacao)) erros.push(`${c.id}: situação fora da lista: ${c.situacao}`);
  if(!EIXOS.includes(c.eixo)) erros.push(`${c.id}: eixo fora da lista: ${c.eixo}`);
  if(!["Sim","Parcialmente"].includes(c.verificado)) erros.push(`${c.id}: verificado deve ser "Sim" ou "Parcialmente"`);
  for(const f of c.fontes||[]) if(!FONTES[f]) erros.push(`${c.id}: fonte inexistente: ${f}`);
  if(c.capa && !fs.existsSync(path.join(RAIZ_REPO,"assets/capas",c.capa+".jpg"))) erros.push(`${c.id}: capa inexistente: ${c.capa}.jpg`);
}
for(const t of Object.keys(LIVROS)) if(!CASOS.some(c=>obraDe(c)===t)) erros.push(`LIVROS: ficha sem caso correspondente: “${t}”`);
const obras = [...new Set(CASOS.map(obraDe))];
const slugs = {};
for(const c of CASOS){
  if(!ATOS[c.ato]) erros.push(`${c.id}: ato inexistente em ATOS: ${c.ato}`);
  if(!LIVROS[obraDe(c)]) erros.push(`${c.id}: obra sem ficha em LIVROS: ${obraDe(c)}`);
}
for(const [k,a] of Object.entries(ATOS)){
  for(const f of ["nome","data","uf","tipo","rede","quem"]) if(!a[f]) erros.push(`ATOS ${k}: campo ${f} vazio`);
  if(!CASOS.some(c=>c.ato===k)) erros.push(`ATOS ${k}: ato sem registro`);
}
for(const p of PAPEIS){
  if(!ATOS[p.ato]) erros.push(`PAPEIS: ato inexistente ${p.ato}`);
  if(!AGENTES[p.agente]) erros.push(`PAPEIS: agente inexistente ${p.agente}`);
  if(!TIPOS_PAPEL.includes(p.papel)) erros.push(`PAPEIS: papel fora da lista: ${p.papel}`);
}
for(const k of Object.keys(AGENTES)) if(!PAPEIS.some(p=>p.agente===k)) erros.push(`AGENTES ${k}: sem papel em nenhum ato`);
for(const t of obras){ const s = slug(t); if(slugs[s] && slugs[s]!==t) erros.push(`endereço repetido para “${t}” e “${slugs[s]}”`); slugs[s]=t; }
for(const k of new Set(CASOS.filter(c=>c.pendencia).map(c=>c.ato))) if(!LACUNAS[k]) erros.push(`LACUNAS: o ato ${k} tem pendência e não tem lacuna cadastrada`);
for(const [k,L] of Object.entries(LACUNAS)){
  if(!ATOS[k]) erros.push(`LACUNAS ${k}: ato inexistente`);
  if(!CASOS.some(c=>c.ato===k && c.pendencia)) erros.push(`LACUNAS ${k}: nenhum registro do ato tem pendência; retire a lacuna ou registre a pendência`);
  if(!L.obstaculos?.length) erros.push(`LACUNAS ${k}: sem obstáculo`);
  for(const o of L.obstaculos||[]) if(!OBSTACULOS.includes(o)) erros.push(`LACUNAS ${k}: obstáculo fora da lista: ${o}`);
  if(!L.caminho) erros.push(`LACUNAS ${k}: sem caminho`);
}
if(erros.length){ console.error("Erros nos dados:\n- " + erros.join("\n- ")); process.exit(1); }

/* ---------- 2. cabeçalho, menu e rodapé ---------- */
const NAV = [["index.html","Painel"],["casos.html","Casos"],["livros.html","Livros"],["atos.html","Atos"],["analises.html","Análises"],
  ["historia.html","História"],["mundo.html","Mundo"],["metodologia.html","Metodologia"],["sobre.html","Sobre"]];
const TAGLINE = "Observatório de censura de livros · quem mandou tirar da estante, com qual ato, e o que aconteceu depois";

function cabecalho(raiz, atual){
  const links = NAV.map(([href,nome]) => href===atual
    ? `<a href="${raiz}${href}" class="on" aria-current="page">${nome}</a>`
    : `<a href="${raiz}${href}">${nome}</a>`).join("\n      ");
  return `<header class="topo">
  <div class="topo-in">
    <a class="logo" href="${raiz}index.html" aria-label="Estante Livre, página inicial">Estante <span class="redact">Livre<span class="bar" aria-hidden="true"></span></span></a>
    <div class="tagline">${TAGLINE}</div>
    <nav class="nav" aria-label="Seções">
      ${links}
    </nav>
  </div>
</header>`;
}
function rodape(raiz){
  return `<footer class="foot">
  <div class="foot-in">
    <span>Estante Livre · um projeto de Nataly Nunes Pinto</span>
    <span class="foot-links"><a href="${raiz}glossario.html">Glossário</a><a href="${raiz}cobertura.html">Cobertura</a><a href="${raiz}pendencias.html">O que falta apurar</a><a href="${raiz}relate.html">Relate um caso</a><a href="${raiz}dados/estante-livre-casos.csv">Dados abertos</a><a href="${raiz}sobre.html">Contato</a></span>
    <span id="foot-meta"></span>
  </div>
</footer>`;
}
const blocoGerado = (html, nome, conteudo) => {
  const re = new RegExp(`<!-- GERADO:${nome} -->[\\s\\S]*?<!-- /GERADO:${nome} -->`);
  if(!re.test(html)) throw new Error(`marcador GERADO:${nome} não encontrado`);
  return html.replace(re, `<!-- GERADO:${nome} -->${conteudo}<!-- /GERADO:${nome} -->`);
};
const jsonld = obj => `<script type="application/ld+json">${JSON.stringify(obj).replace(/</g,"\\u003c")}</script>`;
function comJsonLd(html, obj){
  const bloco = `<!-- GERADO:jsonld -->${jsonld(obj)}<!-- /GERADO:jsonld -->`;
  if(html.includes("<!-- GERADO:jsonld -->")) return html.replace(/<!-- GERADO:jsonld -->[\s\S]*?<!-- \/GERADO:jsonld -->/, bloco);
  return html.replace("</head>", bloco + "\n</head>");
}

const ORG = {"@type":"Organization","name":"Estante Livre","url":SITE+"/","founder":{"@type":"Person","name":"Nataly Nunes Pinto"}};
const DATASET = {"@context":"https://schema.org","@type":"Dataset",
  "name":"Estante Livre: catálogo de censura de livros em bibliotecas e escolas brasileiras",
  "description":"Registros de retiradas, ocultações, vetos, pedidos e pressões sobre livros em bibliotecas e escolas do Brasil desde 2019, com quem pediu, quem decidiu, quem assinou, quem executou, justificativa declarada, desfecho e fontes.",
  "url":SITE+"/casos.html","inLanguage":"pt-BR","creator":ORG,"dateModified":ATUALIZADO,
  "spatialCoverage":{"@type":"Place","name":"Brasil"},"temporalCoverage":"2019/..",
  "isAccessibleForFree":true,
  "variableMeasured":["mecanismo","estágio","situação","unidade da federação","tipo de biblioteca","justificativa declarada"],
  "distribution":[
    {"@type":"DataDownload","encodingFormat":"text/csv","contentUrl":SITE+"/dados/estante-livre-casos.csv"},
    {"@type":"DataDownload","encodingFormat":"application/json","contentUrl":SITE+"/dados/estante-livre-casos.json"}]};

const PAGINAS = ["index.html","casos.html","livros.html","analises.html","historia.html","mundo.html","glossario.html","metodologia.html","sobre.html","cobertura.html","relate.html"];
for(const f of PAGINAS){
  let h = ler(f);
  h = h.replace(/<header class="topo">[\s\S]*?<\/header>/, cabecalho("", f));
  h = h.replace(/<footer class="(?:foot|rodape)">[\s\S]*?<\/footer>/, rodape(""));
  h = h.split("https://estante-livre-br.vercel.app").join(SITE);
  if(f==="index.html") h = comJsonLd(h, {"@context":"https://schema.org","@graph":[
    {"@type":"WebSite","name":"Estante Livre","url":SITE+"/","inLanguage":"pt-BR","publisher":ORG}, ORG]});
  if(f==="casos.html"){
    h = comJsonLd(h, DATASET);
    h = blocoGerado(h, "lista", R.ordenar(CASOS,"data-desc").map(c=>R.casoHTML(c,"")).join(""));
  }
  if(f==="livros.html"){
    const g = {}; CASOS.forEach(c=>(g[obraDe(c)] ||= []).push(c));
    const tits = Object.keys(g).sort((a,b)=> g[b].length-g[a].length || a.localeCompare(b,"pt"));
    h = blocoGerado(h, "lista", tits.map(t=>R.livroHTML(t,g[t],"")).join(""));
  }
  gravar(f, h);
}

/* ---------- 3. páginas individuais ---------- */
const NOME_UF = {AC:"Acre",AL:"Alagoas",AP:"Amapá",AM:"Amazonas",BA:"Bahia",CE:"Ceará",DF:"Distrito Federal",ES:"Espírito Santo",
  GO:"Goiás",MA:"Maranhão",MT:"Mato Grosso",MS:"Mato Grosso do Sul",MG:"Minas Gerais",PA:"Pará",PB:"Paraíba",PR:"Paraná",
  PE:"Pernambuco",PI:"Piauí",RJ:"Rio de Janeiro",RN:"Rio Grande do Norte",RS:"Rio Grande do Sul",RO:"Rondônia",RR:"Roraima",
  SC:"Santa Catarina",SP:"São Paulo",SE:"Sergipe",TO:"Tocantins"};

function pagina({titulo, descricao, url, raiz, atual, ld, corpo, ogType}){
  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(titulo)}</title>
<meta name="description" content="${esc(descricao)}">
<link rel="icon" href="${raiz}favicon.ico" sizes="32x32">
<link rel="icon" href="${raiz}favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="${raiz}apple-touch-icon.png">
<meta name="theme-color" content="#D62410">
${url?`<link rel="canonical" href="${url}">`:`<meta name="robots" content="noindex">`}
<meta property="og:type" content="${ogType||"article"}">
<meta property="og:locale" content="pt_BR">
<meta property="og:site_name" content="Estante Livre">
<meta property="og:title" content="${esc(titulo)}">
<meta property="og:description" content="${esc(descricao)}">
${url?`<meta property="og:url" content="${url}">`:""}
<meta property="og:image" content="${SITE}/og-estante-livre.jpg">
<meta name="twitter:card" content="summary_large_image">
<link rel="stylesheet" href="${raiz}assets/estilo.css">
${ld?jsonld(ld):""}
</head>
<body>
<a class="pular" href="#conteudo">Pular para o conteúdo</a>
${cabecalho(raiz, atual)}

<main id="conteudo" tabindex="-1">
${corpo}
</main>

${rodape(raiz)}

<script>const RAIZ_SITE = "${raiz}";</script>
<script src="${raiz}assets/dados.js"></script>
<script src="${raiz}assets/comum.js"></script>
<script>montarRodape();</script>
</body>
</html>
`;
}

const mesAno = c => R.dataLegivel(c).replace(/^./, x=>x.toLowerCase());
const ondeTxt = c => [c.cidade, c.uf].filter(Boolean).join(", ");
function verboTitulo(c){
  if(c.estagio==="Pressão pública") return "quem contestou";
  if(c.estagio==="Pedido formal") return "quem pediu a retirada";
  return ({"Retirada":"quem mandou retirar","Ocultação ou restrição de acesso":"quem mandou ocultar",
    "Exclusão de lista de leitura":"quem excluiu da lista de leitura","Veto a atividade":"quem suspendeu a atividade",
    "Veto a aquisição ou doação":"quem vetou a doação","Descarte ou destruição":"quem anunciou o descarte","Autocensura":"autocensura"})[c.modalidade];
}
const curto = t => t.length>70 ? t.slice(0,67).replace(/\s+\S*$/,"")+"…" : t;

fs.rmSync(path.join(RAIZ_REPO,"casos"), {recursive:true, force:true});
fs.rmSync(path.join(RAIZ_REPO,"livros"), {recursive:true, force:true});

const urlsCasos = [];
for(const c of CASOS){
  const obra = obraDe(c);
  const url = `${SITE}/casos/${c.id.toLowerCase()}.html`; urlsCasos.push(url);
  const titulo = c.conjunto
    ? `${curto(c.titulo)} (${c.uf}, ${c.data.slice(0,4)}) · Estante Livre`
    : `${curto(obra)}: ${verboTitulo(c)} (${c.uf}, ${c.data.slice(0,4)}) · Estante Livre`;
  const resumo = `${c.conjunto?c.titulo:`${obra}${c.autoria?", de "+c.autoria:""}`}. ${ondeTxt(c)}, ${mesAno(c)}. ${c.modalidade}; ${c.estagio.toLowerCase()}; situação: ${c.situacao.toLowerCase()}.`;
  const descricao = `${resumo} Quem pediu, quem decidiu, quem assinou, justificativa declarada e fontes.`.slice(0,300);
  const irmaosAto = CASOS.filter(x=>x.ato===c.ato && x.id!==c.id);
  const irmaosObra = CASOS.filter(x=>obraDe(x)===obra && x.id!==c.id && x.ato!==c.ato);
  const lista = arr => arr.map(x=>`<a href="${x.id.toLowerCase()}.html">${esc(x.id)} · ${esc(curto(obraDe(x)))} (${esc(x.uf)}, ${x.data.slice(0,4)})</a>`).join("<br>");
  const fontesLd = (c.fontes||[]).map(k=>FONTES[k]).filter(Boolean).map(f=>({"@type":"CreativeWork","name":f.tit,"url":f.url,"publisher":f.veic}));
  const ld = {"@context":"https://schema.org","@type":"Article",
    "headline":titulo.replace(/ · Estante Livre$/,""),"description":descricao,"url":url,"inLanguage":"pt-BR",
    "dateModified":ATUALIZADO,"author":{"@type":"Person","name":"Nataly Nunes Pinto"},"publisher":ORG,
    "isPartOf":{"@type":"Dataset","name":DATASET.name,"url":DATASET.url},
    "about": c.conjunto ? {"@type":"CreativeWork","name":c.titulo} : {"@type":"Book","name":obra, ...(c.autoria?{"author":{"@type":"Person","name":c.autoria}}:{})},
    "contentLocation":{"@type":"Place","name":`${ondeTxt(c)}, Brasil`},
    "temporalCoverage":c.data.slice(0,7),
    "citation":fontesLd};
  const corpo = `<div class="wrap">
  <div class="hero-pg">
    <p class="migalha"><a href="../index.html">Painel</a> › <a href="../casos.html">Casos</a> › ${c.id}</p>
    <p class="resumo-fato">${esc(resumo)}</p>
  </div>
</div>
<div class="wrap">
  <section style="border-bottom:0">
    ${S.casoHTML(c,"","h1")}
    ${irmaosAto.length?`<div class="irmaos"><h2>Outros títulos do mesmo ato</h2>${lista(irmaosAto)}</div>`:""}
    ${irmaosObra.length?`<div class="irmaos"><h2>Outras ocorrências com esta obra</h2>${lista(irmaosObra)}</div>`:""}
    ${!c.conjunto?`<div class="irmaos"><a href="../livros/${slug(obra)}.html">Ficha da obra ${esc(curto(obra))}</a></div>`:""}
    <div class="como-citar"><span class="k">COMO CITAR</span>Estante Livre, observatório de censura de livros, de Nataly Nunes Pinto. Registro ${c.id}: ${esc(c.conjunto?c.titulo:obra)} (${esc(c.uf)}, ${c.data.slice(0,4)}). Disponível em: ${url}. Acesso em: [data].</div>
  </section>
</div>`;
  gravar(`casos/${c.id.toLowerCase()}.html`, pagina({titulo, descricao, url, raiz:"../", atual:"casos.html", ld, corpo}));
}

const urlsLivros = [];
for(const obra of obras){
  const ocs = CASOS.filter(c=>obraDe(c)===obra);
  const ref = ocs[0], L = LIVROS[obra]||{};
  const url = `${SITE}/livros/${slug(obra)}.html`; urlsLivros.push(url);
  const ufs = [...new Set(ocs.map(o=>o.uf))];
  const titulo = ref.conjunto
    ? `${curto(obra)} · Estante Livre`
    : `${curto(obra)}${ref.autoria?", de "+ref.autoria.split(",")[0]:""}: registros de censura · Estante Livre`;
  const descricao = `${ocs.length} ${ocs.length===1?"registro":"registros"} no Estante Livre (${ufs.join(", ")}). ${L.sinopse||""}`.trim().slice(0,300);
  const ld = {"@context":"https://schema.org","@type": ref.conjunto?"CreativeWork":"Book","name":obra,"url":url,"inLanguage":"pt-BR",
    ...(ref.autoria && !ref.conjunto?{"author":{"@type":"Person","name":ref.autoria}}:{}),
    ...(L.ano?{"datePublished":String(L.ano)}:{}),
    ...(L.genero?{"genre":L.genero}:{}),
    ...(L.premio?{"award":L.premio}:{}),
    "subjectOf":ocs.map(o=>({"@type":"Article","url":`${SITE}/casos/${o.id.toLowerCase()}.html`,"name":`${o.id} · ${o.uf}, ${o.data.slice(0,4)}`}))};
  const corpo = `<div class="wrap">
  <div class="hero-pg">
    <p class="migalha"><a href="../index.html">Painel</a> › <a href="../livros.html">Livros</a> › ${esc(curto(obra))}</p>
  </div>
</div>
<div class="wrap">
  <section style="border-bottom:0">
    ${S.livroHTML(obra, ocs, "", "h1")}
    <div class="como-citar"><span class="k">COMO CITAR</span>Estante Livre, observatório de censura de livros, de Nataly Nunes Pinto. Ficha: ${esc(obra)}. Disponível em: ${url}. Acesso em: [data].</div>
  </section>
</div>`;
  gravar(`livros/${slug(obra)}.html`, pagina({titulo, descricao, url, raiz:"../", atual:"livros.html", ld, corpo}));
}

/* páginas de ato e índice de atos e agentes */
fs.rmSync(path.join(RAIZ_REPO,"atos"), {recursive:true, force:true});
const urlsAtos = [];
const tabPapeis = (ato, raiz) => {
  const ps = PAPEIS.filter(p=>p.ato===ato);
  if(!ps.length) return "";
  return `<div class="tab-wrap"><table class="tab"><thead><tr><th>PAPEL</th><th>QUEM</th><th>CARGO NA DATA</th><th>OBSERVAÇÃO</th></tr></thead><tbody>${
    ps.map(p=>`<tr><td>${esc(p.papel)}${p.atribuido?" (atribuída pela fonte)":""}</td><td><a href="${raiz}atos.html#ag-${p.agente}">${esc(AGENTES[p.agente].nome)}</a></td><td>${esc(p.cargo||"")}</td><td>${esc(p.nota||"")}</td></tr>`).join("")
  }</tbody></table></div>`;
};
for(const [k,A] of Object.entries(ATOS)){
  const regs = CASOS.filter(c=>c.ato===k);
  const url = `${SITE}/atos/${k.toLowerCase()}.html`; urlsAtos.push(url);
  const fontesIds = [...new Set(regs.flatMap(c=>c.fontes||[]))];
  const titulo = `${A.nome} · Estante Livre`;
  const descricao = `${A.nome}: ${regs.length} ${regs.length===1?"título atingido":"títulos atingidos"}, ${A.uf}, ${R.dataLegivel(A).toLowerCase()}. Quem pediu, quem decidiu, quem assinou e quem executou, com fontes.`;
  const ld = {"@context":"https://schema.org","@type":"Article","headline":A.nome,"description":descricao,"url":url,"inLanguage":"pt-BR",
    "dateModified":ATUALIZADO,"author":{"@type":"Person","name":"Nataly Nunes Pinto"},"publisher":ORG,
    "contentLocation":{"@type":"Place","name":`${[A.cidade,A.uf].filter(Boolean).join(", ")}, Brasil`},"temporalCoverage":A.data.slice(0,7),
    "hasPart":regs.map(c=>({"@type":"Article","url":`${SITE}/casos/${c.id.toLowerCase()}.html`,"name":`${c.id} · ${obraDe(c)}`})),
    "mentions":PAPEIS.filter(p=>p.ato===k).map(p=>({"@type":AGENTES[p.agente].tipo==="Pessoa"?"Person":"Organization","name":AGENTES[p.agente].nome}))};
  const r = A.papeis||{};
  const linha = (rot,v)=> v?`<div class="resp-linha"><span class="k">${rot}</span><div>${esc(v)}</div></div>`:"";
  const corpo = `<div class="wrap">
  <div class="hero-pg">
    <p class="migalha"><a href="../index.html">Painel</a> › <a href="../atos.html">Atos</a> › ${esc(k)}</p>
    <h1>${esc(A.nome)}</h1>
    <p class="lede">${esc([A.cidade,A.uf].filter(Boolean).join(", "))} · ${R.dataLegivel(A)} · biblioteca ${esc(A.tipo.toLowerCase())}, rede ${esc(A.rede.toLowerCase())}${A.governo?` · ${esc(A.governo)}`:""}</p>
  </div>
</div>
<div class="wrap">
  <section>
    <div class="sechead"><span class="kicker">01</span><h2>O documento</h2></div>
    <p class="note">${esc(A.documento||"Documento ainda não identificado no cadastro.")}</p>
  </section>
  <section>
    <div class="sechead"><span class="kicker">02</span><h2>Quem fez o quê</h2></div>
    ${tabPapeis(k,"../")}
    <div class="responsa">${linha("PRESSÃO / PEDIDO",r.pressao||A.pressao)}${linha("DECISÃO",r.decisor)}${linha("ASSINATURA",r.assinantes)}${linha("EXECUÇÃO",r.executor)}${linha("FISCALIZAÇÃO / DENÚNCIA",r.fiscalizacao)}${linha("RESPOSTA / REVERSÃO",r.resposta)}${linha("OBSERVAÇÃO",r.responsavel)}</div>
  </section>
  <section>
    <div class="sechead"><span class="kicker">03</span><h2>${regs.length===1?"Título atingido":`${regs.length} títulos atingidos`}</h2></div>
    <div class="irmaos">${regs.map(c=>`<a href="../casos/${c.id.toLowerCase()}.html">${esc(c.id)} · ${esc(c.titulo)}</a> <span class="mini-tags">${esc(c.modalidade.toLowerCase())} · ${esc(c.estagio.toLowerCase())} · ${esc(c.situacao.toLowerCase())}</span>`).join("<br>")}</div>
  </section>
  <section style="border-bottom:0">
    <div class="sechead"><span class="kicker">04</span><h2>Fontes</h2></div>
    <div class="fontes">${fontesIds.map(f=>FONTES[f]).filter(Boolean).map(f=>`<a class="flink" href="${esc(f.url)}" target="_blank" rel="noopener"><span class="v">${esc(f.veic)}</span><span class="t">${esc(f.tit)}</span></a>`).join("")}</div>
    <div class="como-citar"><span class="k">COMO CITAR</span>Estante Livre, observatório de censura de livros, de Nataly Nunes Pinto. Ato ${esc(k)}: ${esc(A.nome)}. Disponível em: ${url}. Acesso em: [data].</div>
  </section>
</div>`;
  gravar(`atos/${k.toLowerCase()}.html`, pagina({titulo, descricao, url, raiz:"../", atual:"atos.html", ld, corpo}));
}
{
  const atosOrd = Object.entries(ATOS).sort((a,b)=>b[1].data.localeCompare(a[1].data));
  const pessoas = Object.entries(AGENTES).sort((a,b)=>a[1].tipo.localeCompare(b[1].tipo)||a[1].nome.localeCompare(b[1].nome,"pt"));
  const corpo = `<div class="wrap">
  <div class="hero-pg">
    <h1>Atos e responsáveis</h1>
    <p class="lede">Cada ato é o documento ou episódio que gerou um ou mais registros: um memorando, um ofício, um requerimento, um anúncio. Aqui estão os ${atosOrd.length} atos do catálogo e as ${pessoas.length} pessoas e instituições com papel documentado neles.</p>
  </div>
</div>
<div class="wrap">
  <section>
    <div class="sechead"><span class="kicker">01</span><h2>Atos</h2><span class="count"><b>${atosOrd.length}</b> atos · ${CASOS.length} registros</span></div>
    <div class="tab-wrap"><table class="tab"><thead><tr><th>DATA</th><th>ATO</th><th>UF</th><th>TÍTULOS</th><th>ATÉ ONDE CHEGOU</th></tr></thead><tbody>${
      atosOrd.map(([k,A])=>{const regs=CASOS.filter(c=>c.ato===k); const est=[...new Set(regs.map(c=>c.estagio))].join(", ");
        return `<tr><td>${R.dataLegivel(A)}</td><td><a href="atos/${k.toLowerCase()}.html">${esc(A.nome)}</a></td><td>${esc(A.uf)}</td><td>${regs.length}</td><td>${esc(est)}</td></tr>`;}).join("")
    }</tbody></table></div>
  </section>
  <section style="border-bottom:0">
    <div class="sechead"><span class="kicker">02</span><h2>Pessoas e instituições</h2></div>
    <p class="note">Pessoas aparecem só pelo papel que exerceram num ato documentado, com o cargo que ocupavam na data. Papel “atribuído” quer dizer que a fonte atribui a decisão a alguém sem documento assinado que a comprove. Denunciar ou reverter uma medida também é papel, e está identificado como tal.</p>
    <div class="agentes-idx">${pessoas.map(([id,ag])=>`<div class="agente" id="ag-${id}"><h3>${esc(ag.nome)} <span>${esc(ag.tipo)}</span></h3>${
      PAPEIS.filter(p=>p.agente===id).map(p=>`<div class="ag-papel"><b>${esc(p.papel)}${p.atribuido?" (atribuída)":""}</b>${p.cargo?` · ${esc(p.cargo)}`:""} · <a href="atos/${p.ato.toLowerCase()}.html">${esc(ATOS[p.ato].nome)}</a>${p.nota?`<div class="ag-nota">${esc(p.nota)}</div>`:""}</div>`).join("")
    }</div>`).join("")}</div>
  </section>
</div>`;
  gravar("atos.html", pagina({titulo:"Atos e responsáveis · Estante Livre", descricao:`Os ${atosOrd.length} atos que geraram os registros do Estante Livre e as pessoas e instituições com papel documentado em cada um.`, url:`${SITE}/atos.html`, raiz:"", atual:"atos.html", ogType:"website", corpo}));
}

/* ---------- página O que falta apurar ---------- */
{
  const comPend = CASOS.filter(c=>c.pendencia);
  const parciais = CASOS.filter(c=>c.verificado!=="Sim");
  const atosPend = Object.keys(LACUNAS).sort((a,b)=>{
    const pa = CASOS.some(c=>c.ato===a && c.verificado!=="Sim"), pb = CASOS.some(c=>c.ato===b && c.verificado!=="Sim");
    return (pb-pa) || ATOS[b].data.localeCompare(ATOS[a].data);
  });
  const contagem = OBSTACULOS.map(o=>[o, atosPend.filter(k=>LACUNAS[k].obstaculos.includes(o)).length]).filter(x=>x[1]);
  const cartao = k => {
    const A = ATOS[k], L = LACUNAS[k], regs = CASOS.filter(c=>c.ato===k);
    const pend = regs.filter(c=>c.pendencia);
    const textos = [...new Set(pend.map(c=>c.pendencia))];
    const nParc = regs.filter(c=>c.verificado!=="Sim").length;
    const porTexto = t => pend.filter(c=>c.pendencia===t).map(c=>`<a href="casos/${c.id.toLowerCase()}.html">${esc(c.id)}</a>`).join(", ");
    return `<article class="lac" id="${k.toLowerCase()}">
      <div class="lac-cab"><h3><a href="atos/${k.toLowerCase()}.html">${esc(A.nome)}</a></h3>
        <span class="lac-meta">${esc([A.cidade,A.uf].filter(Boolean).join(", "))} · ${A.data.slice(0,4)} · ${regs.length} ${regs.length>1?"registros":"registro"}${nParc?` · <b>${nParc} parcialmente ${nParc>1?"verificados":"verificado"}</b>`:" · verificado"}</span></div>
      <div class="lac-tags">${L.obstaculos.map(o=>`<span class="lac-tag">${esc(o)}</span>`).join("")}</div>
      <div class="lac-bloco"><span class="k">O QUE FALTA</span>${textos.map(t=>`<p>${esc(t)}${textos.length>1||pend.length<regs.length?` <span class="lac-ids">(${porTexto(t)})</span>`:""}</p>`).join("")}</div>
      <div class="lac-bloco"><span class="k">CAMINHO PARA FECHAR</span><p>${esc(L.caminho)}</p></div>
    </article>`;
  };
  const parc = atosPend.filter(k=>CASOS.some(c=>c.ato===k && c.verificado!=="Sim"));
  const verif = atosPend.filter(k=>!parc.includes(k));
  const corpo = `<div class="wrap">
  <div class="hero-pg">
    <h1>O que falta apurar</h1>
    <p class="lede">O catálogo publica o que está documentado e também o que ainda não conseguiu comprovar. Esta página reúne as lacunas de todos os registros, o tipo de obstáculo de cada uma e o caminho para fechá-la. Quando uma lacuna é fechada, a mudança entra no <a href="metodologia.html">registro público de correções</a>.</p>
  </div>
  <div class="lac-nums">
    <div><b>${parciais.length}</b><span>de ${CASOS.length} registros parcialmente verificados</span></div>
    <div><b>${comPend.length}</b><span>registros com alguma pendência</span></div>
    <div><b>${atosPend.length}</b><span>de ${Object.keys(ATOS).length} atos com lacuna aberta</span></div>
  </div>
  <div class="lac-resumo"><span class="k">OBSTÁCULOS MAIS FREQUENTES</span>${contagem.sort((a,b)=>b[1]-a[1]).map(([o,n])=>`<span class="lac-tag">${esc(o)} <b>${n}</b></span>`).join("")}</div>
</div>
<div class="wrap">
  <section>
    <div class="sechead"><span class="kicker">01</span><h2>Atos com registros parcialmente verificados</h2><span class="count"><b>${parc.length}</b> atos</span></div>
    <p class="note">“Parcialmente verificado” quer dizer que o registro tem documentação pública, mas falta uma segunda fonte, um documento original ou a confirmação do desfecho. Esses registros entram nos totais do painel e aparecem sempre com essa marcação.</p>
    ${parc.map(cartao).join("")}
  </section>
  <section>
    <div class="sechead"><span class="kicker">02</span><h2>Registros verificados com detalhe em aberto</h2><span class="count"><b>${verif.length}</b> atos</span></div>
    <p class="note">O fato central destes registros tem duas ou mais fontes. Falta um detalhe, como o nome de quem assinou ou a confirmação de que os livros voltaram às escolas.</p>
    ${verif.map(cartao).join("")}
  </section>
  <section style="border-bottom:0">
    <div class="sechead"><span class="kicker">03</span><h2>Se você tem um desses documentos</h2></div>
    <p class="note">Ofícios, respostas a pedidos de acesso à informação, atas, listas de títulos e decisões judiciais públicas ajudam a fechar as lacunas acima. Veja como enviar em <a href="relate.html">Relate um caso</a>. Pedidos via Lei de Acesso à Informação podem ser feitos por qualquer pessoa, sem justificar o motivo.</p>
  </section>
</div>`;
  gravar("pendencias.html", pagina({titulo:"O que falta apurar · Estante Livre", descricao:`As lacunas de cada registro do Estante Livre: ${parciais.length} de ${CASOS.length} registros parcialmente verificados, o tipo de obstáculo e o caminho para fechar cada um.`, url:`${SITE}/pendencias.html`, raiz:"", atual:"", ogType:"website", corpo}));
}

/* ---------- 4. dados abertos ---------- */
const RESP = D.RESPONSABILIDADES, DOC = D.DOCUMENTOS_ATOS;
const linhas = R.ordenar(CASOS,"id").map(c=>{
  const r = RESP[c.id]||{};
  return {id:c.id, url:`${SITE}/casos/${c.id.toLowerCase()}.html`, data:c.data, ato:c.ato, ato_nome:ATOS[c.ato].nome, obra:obraDe(c), titulo_registro:c.titulo,
    conjunto:!!c.conjunto, autoria:c.autoria||"", editora:c.editora||"", ano_publicacao:(LIVROS[obraDe(c)]||{}).ano||"",
    cidade:c.cidade||"", uf:c.uf, tipo_biblioteca:c.tipo, rede:c.rede, governo_na_epoca:c.governo||"",
    instancia_registrada:c.quem, mecanismo:c.modalidade, estagio:c.estagio, situacao:c.situacao, desfecho:c.desfecho,
    eixo_tematico:c.eixo, justificativa_declarada:c.alegacao,
    pressao_ou_pedido:r.pressao||c.pressao||"", decisao:r.decisor||"", assinatura:r.assinantes||"", execucao:r.executor||"",
    resposta_ou_reversao:r.resposta||"", ato_ou_documento:DOC[c.id]||"", verificado:c.verificado,
    pendencia:r.pendencia||c.pendencia||"", nota:c.nota||"",
    agentes:PAPEIS.filter(p=>p.ato===c.ato).map(p=>({nome:AGENTES[p.agente].nome, tipo:AGENTES[p.agente].tipo, papel:p.papel, cargo:p.cargo||"", atribuido:!!p.atribuido})),
    fontes:(c.fontes||[]).map(k=>FONTES[k]).filter(Boolean).map(f=>({veiculo:f.veic, titulo:f.tit, data:f.data||"", url:f.url}))};
});
gravar("dados/estante-livre-casos.json", JSON.stringify({
  nome:"Estante Livre: catálogo de censura de livros em bibliotecas e escolas brasileiras",
  autoria:"Nataly Nunes Pinto", atualizado:ATUALIZADO, licenca:"CC BY 4.0",
  como_citar:"Estante Livre, observatório de censura de livros, de Nataly Nunes Pinto",
  metodologia:SITE+"/metodologia.html", registros:linhas}, null, 1));
const colunas = Object.keys(linhas[0]);
const csv = v => `"${(Array.isArray(v) ? v.map(x=>x.url || `${x.nome} (${x.papel.toLowerCase()})`).join("; ") : v??"").toString().replace(/"/g,'""')}"`;
gravar("dados/estante-livre-casos.csv", "\uFEFF" + [colunas.join(","), ...linhas.map(l=>colunas.map(k=>csv(l[k])).join(","))].join("\n") + "\n");

/* ---------- 5. sitemap, robots, llms.txt, 404 ---------- */
const topo = [...PAGINAS, "atos.html", "pendencias.html"].map(f => f==="index.html" ? SITE+"/" : `${SITE}/${f}`);
gravar("sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[...topo, ...urlsCasos, ...urlsLivros, ...urlsAtos].map(u=>`  <url><loc>${u}</loc><lastmod>${ATUALIZADO}</lastmod></url>`).join("\n")}
</urlset>
`);
gravar("robots.txt", `User-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`);
gravar("llms.txt", `# Estante Livre

> Observatório de censura de livros em bibliotecas e escolas brasileiras, desde 2019. Cada registro identifica quem pediu, quem decidiu, quem assinou e quem executou a medida, a justificativa declarada, até onde a medida chegou e o que aconteceu depois, com fontes. Projeto de Nataly Nunes Pinto.

Registro não equivale a banimento consumado: cada caso traz o estágio (pressão pública, pedido formal, decisão ou ordem, execução comprovada) e a situação (em vigor, revertido, sem efeito, em aberto).

## Dados
- [Base completa em JSON](${SITE}/dados/estante-livre-casos.json)
- [Base completa em CSV](${SITE}/dados/estante-livre-casos.csv)

## Páginas
- [Casos](${SITE}/casos.html): todos os registros
- [Livros](${SITE}/livros.html): uma ficha por obra
- [Metodologia](${SITE}/metodologia.html): critérios, vieses conhecidos e correções
- [Glossário](${SITE}/glossario.html): definições de mecanismo, estágio e situação
- [Análises](${SITE}/analises.html): leitura dos dados

Atualizado em ${ATUALIZADO}. Citação: Estante Livre, observatório de censura de livros, de Nataly Nunes Pinto.
`);
gravar("404.html", pagina({titulo:"Página não encontrada · Estante Livre", descricao:"Página não encontrada no Estante Livre.", url:"", raiz:"/", atual:"", ogType:"website",
  corpo:`<div class="wrap"><div class="hero-pg"><h1>Esta página não está na estante</h1>
  <p class="lede">O endereço pode ter mudado. Os casos estão em <a href="/casos.html">Casos</a> e as obras em <a href="/livros.html">Livros</a>; a busca da página de casos encontra livro, cidade, órgão ou justificativa.</p></div></div>`}));

console.log(`ok · ${CASOS.length} casos · ${obras.length} obras · ${Object.keys(ATOS).length} atos · ${Object.keys(AGENTES).length} agentes · ${PAGINAS.length} páginas padronizadas · sitemap com ${topo.length+urlsCasos.length+urlsLivros.length+urlsAtos.length} URLs`);
