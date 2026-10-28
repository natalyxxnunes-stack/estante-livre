/* Estante Livre · funções compartilhadas entre as páginas. */

const norm = s => (s||"").toString().toLowerCase()
  .normalize("NFD").replace(/[\u0300-\u036f]/g,"");
const ano = c => c.data.slice(0,4);
const esc = s => String(s ?? "").replace(/[&<>"']/g,
  c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
/* O selo editorial é manual. O código só confere se há ao menos duas referências cadastradas; não prova sozinho que sejam independentes. */
const verificado = c => c.verificado === "Sim" && (c.fontes||[]).length >= 2;
const conta = (arr,campo,val) => arr.filter(c=>c[campo]===val).length;
const unicos = (arr,campo) => new Set(arr.map(c=>c[campo]).filter(Boolean)).size;

const MES = {"01":"Janeiro","02":"Fevereiro","03":"Março","04":"Abril","05":"Maio","06":"Junho",
  "07":"Julho","08":"Agosto","09":"Setembro","10":"Outubro","11":"Novembro","12":"Dezembro"};

function dataLegivel(c){
  const [a,m,d] = c.data.split("-");
  if(m==="01" && d==="01") return a;
  return MES[m] + " de " + a;
}
function dataCurta(s){
  if(!s) return "sem data";
  const p = s.split("-");
  if(p.length===3) return `${p[2]}/${p[1]}/${p[0]}`;
  if(p.length===2) return `${p[1]}/${p[0]}`;
  return p[0];
}

/* destaque de busca que atravessa acento */
function marcar(txt, termo){
  if(!termo || !txt) return txt||"";
  const alvo = norm(termo); if(!alvo) return txt;
  let plano="", inicio=[], fim=[], pos=0;
  for(const caractere of txt){
    const normalizado = caractere.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase();
    for(let j=0;j<normalizado.length;j++){ plano+=normalizado[j]; inicio.push(pos); fim.push(pos+caractere.length); }
    pos+=caractere.length;
  }
  let out="", cursor=0;
  const original = i => i>=inicio.length ? txt.length : (inicio[i]??txt.length);
  while(true){
    const p=plano.indexOf(alvo,cursor);
    if(p<0){out+=txt.slice(original(cursor));break;}
    const a=inicio[p], b=fim[Math.min(p+alvo.length-1,fim.length-1)];
    if(a<original(cursor)){cursor=p+alvo.length;continue;}
    out+=txt.slice(original(cursor),a)+"<mark>"+txt.slice(a,b)+"</mark>";
    cursor=p+alvo.length;
  }
  return out;
}
/* ---------- estado de filtros via URL ---------- */
function lerURL(){
  const p = new URLSearchParams(location.search);
  const so = (v, lista) => lista.includes(v) ? v : null;   /* aceita só valores que existem na base */
  const ufs = [...new Set(CASOS.map(c=>c.uf))];
  const anos = [...new Set(CASOS.map(ano))];
  return {
    busca: (p.get("q")||"").slice(0,80),
    modalidade: so(p.get("mod"), MODALIDADES),
    eixo: so(p.get("eixo"), EIXOS) || "",
    uf: so((p.get("uf")||"").toUpperCase(), ufs),
    ano: so(p.get("ano"), anos),
    tipo: so(p.get("tipo"), ["Escolar","Pública","Universitária","Especializada"]) || "",
  };
}
function gravarURL(F){
  const p = new URLSearchParams();
  if(F.busca) p.set("q",F.busca);
  if(F.modalidade) p.set("mod",F.modalidade);
  if(F.eixo) p.set("eixo",F.eixo);
  if(F.uf) p.set("uf",F.uf);
  if(F.ano) p.set("ano",F.ano);
  if(F.tipo) p.set("tipo",F.tipo);
  const s = p.toString();
  history.replaceState(null,"", (s ? "?"+s : location.pathname) + location.hash);
}

function aplicar(F, base){
  return (base||CASOS).filter(c=>{
    if(F.modalidade && c.modalidade!==F.modalidade) return false;
    if(F.eixo && c.eixo!==F.eixo) return false;
    if(F.uf && c.uf!==F.uf) return false;
    if(F.ano && ano(c)!==F.ano) return false;
    if(F.tipo && c.tipo!==F.tipo) return false;
    if(F.busca){
      const alvo = norm([c.titulo,c.autoria,c.editora,c.cidade,c.uf,c.quem,
        c.alegacao,c.eixo,c.modalidade,c.desfecho,c.nota,c.id,c.governo,c.pressao].join(" "));
      if(!alvo.includes(norm(F.busca))) return false;
    }
    return true;
  });
}

function ordenar(arr, modo){
  const a=[...arr];
  if(modo==="data-desc") a.sort((x,y)=> y.data.localeCompare(x.data) || x.id.localeCompare(y.id));
  else if(modo==="data-asc") a.sort((x,y)=> x.data.localeCompare(y.data) || x.id.localeCompare(y.id));
  else if(modo==="titulo") a.sort((x,y)=> x.titulo.localeCompare(y.titulo,"pt"));
  else if(modo==="uf") a.sort((x,y)=> x.uf.localeCompare(y.uf) || x.data.localeCompare(y.data));
  else a.sort((x,y)=> x.id.localeCompare(y.id));
  return a;
}

/* ---------- componentes ---------- */
const MOD_ALT = ["Restrição de acesso","Veto a aquisição","Ocultação","Autocensura"];
const clsDesfecho = d => ({"Retirado":"ret","Revertido":"rev","Em aberto":"aberto","Mantido com restrição":"parcial"})[d] || "";

function capaHTML(c, cls){
  const k = cls||"capa";
  if(c.capa) return `<div><img class="${k}" alt="Capa de ${esc(c.titulo)}" src="assets/capas/${esc(c.capa)}.jpg" width="213" height="320" loading="lazy" decoding="async">
    ${c.editora?`<div class="capa-cred">Capa · ${c.editora}</div>`:""}</div>`;
  return `<div><div class="${k}-vazia"><span>${c.capaVazia||"Capa não disponível"}</span></div></div>`;
}

function linksFonte(ids){
  if(!ids || !ids.length) return "";
  return `<div class="fontes"><div class="fontes-lab">FONTES</div>` +
    ids.map(k=>{ const f=FONTES[k]; if(!f) return "";
      return `<a class="flink" href="${esc(f.url)}" target="_blank" rel="noopener">
        <span class="v">${f.veic}${f.data?` · ${dataCurta(f.data)}`:""}</span>
        <span class="t">${f.tit}</span></a>`;
    }).join("") + `</div>`;
}

function casoHTML(c, q){
  const m = t => marcar(t, q);
  const r = (typeof RESPONSABILIDADES !== "undefined" && RESPONSABILIDADES[c.id]) || {};
  const linhaResp = (rotulo, valor) => valor ? '<div class="resp-linha"><span class="k">'+rotulo+'</span><div>'+esc(valor)+'</div></div>' : "";
  return '<article class="caso" id="'+c.id+'" aria-labelledby="t-'+c.id+'">'+
    capaHTML(c)+
    '<div class="caso-body">'+
      '<div class="caso-top"><a class="caso-id" href="#'+c.id+'" title="Link para este caso">'+c.id+'</a>'+
        '<h3 class="caso-tit" id="t-'+c.id+'">'+m(c.titulo)+'</h3>'+
        '<button class="copiar" type="button" data-copiar="'+c.id+'">copiar link</button></div>'+
      '<div class="caso-aut">'+m([c.autoria,c.editora].filter(Boolean).join(" · "))+(c.pnld?" · no PNLD":"")+'</div>'+
      '<div class="caso-grid">'+
        '<div class="campo"><div class="k">ONDE</div><div class="v">'+m([c.cidade,c.uf].filter(Boolean).join(", "))+'</div></div>'+
        '<div class="campo"><div class="k">QUANDO</div><div class="v">'+dataLegivel(c)+'</div></div>'+
        '<div class="campo"><div class="k">BIBLIOTECA</div><div class="v">'+c.tipo+' · rede '+c.rede.toLowerCase()+'</div></div>'+
        '<div class="campo"><div class="k">ÓRGÃO/INSTÂNCIA NO REGISTRO</div><div class="v">'+m(c.quem)+'</div></div>'+
      '</div>'+
      (c.governo?'<div class="poder"><div><span class="k">GOVERNO NA ÉPOCA</span>'+m(c.governo)+'</div></div>':"")+
      '<div class="responsa">'+
        '<div class="responsa-tit">QUEM FEZ O QUÊ</div>'+
        linhaResp("PRESSÃO / PEDIDO",r.pressao||c.pressao)+
        linhaResp("DECISÃO",r.decisor)+
        linhaResp("ASSINATURA DO ATO",r.assinantes)+
        linhaResp("EXECUÇÃO",r.executor)+
        linhaResp("FISCALIZAÇÃO / DENÚNCIA",r.fiscalizacao)+
        linhaResp("RESPOSTA / REVERSÃO",r.resposta)+
        linhaResp("RESPONSABILIDADE AINDA NÃO INDIVIDUALIZADA",r.responsavel)+
        linhaResp("PENDÊNCIA DE APURAÇÃO",r.pendencia)+
        '<p class="responsa-nota">Pressão, pedido, decisão, assinatura e execução são papéis diferentes. O observatório não atribui a uma pessoa a ordem formal sem documento ou fonte que sustente essa atribuição.</p>'+
      '</div>'+
      '<div class="caso-aleg"><span class="k">JUSTIFICATIVA DECLARADA PARA A RETIRADA</span><div>'+m(c.alegacao)+'</div></div>'+
      (c.nota?'<div class="caso-nota">'+m(c.nota)+'</div>':"")+
      '<div class="tags">'+
        '<span class="tag t-mod '+(MOD_ALT.includes(c.modalidade)?"alt":"")+'">'+c.modalidade+'</span>'+
        '<span class="tag t-des '+clsDesfecho(c.desfecho)+'">'+c.desfecho+'</span>'+
        (c.pendencia?'<span class="tag t-pend">'+c.pendencia+'</span>':"")+
      '</div>'+
      linksFonte(c.fontes)+
    '</div></article>';
}
/* copiar link de um caso */
document.addEventListener("click", e=>{
  const b = e.target.closest("[data-copiar]"); if(!b) return;
  const url = location.origin + location.pathname.replace(/[^/]*$/,"") + "casos.html#" + b.dataset.copiar;
  const ok = ()=>{ const t=b.textContent; b.textContent="link copiado"; setTimeout(()=>b.textContent=t,1600); };
  if(navigator.clipboard) navigator.clipboard.writeText(url).then(ok, ()=>prompt("Copie o link:", url));
  else prompt("Copie o link:", url);
});

function livroHTML(titulo, ocs, q){
  const m = t => marcar(t, q);
  const ref = ocs[0], L = LIVROS[titulo] || {};
  const ficha = [L.ano, L.genero, ref.editora, L.premio, ref.pnld?"No PNLD":null].filter(Boolean).join(" · ");
  const ufs = [...new Set(ocs.map(o=>o.uf))];
  const motivos = [...new Set(ocs.map(o=>o.eixo))];
  const mods = [...new Set(ocs.map(o=>o.modalidade))];
  const rev = ocs.filter(o=>o.desfecho==="Revertido").length;
  const linhas = [...ocs].sort((a,b)=>a.data.localeCompare(b.data)).map(o=>`
    <div class="ocorr">
      <div class="ocorr-id">${o.id}</div>
      <div class="ocorr-onde">${[o.cidade,o.uf].filter(Boolean).join(", ")||o.uf}<br>
        <span style="font-size:11.5px;color:var(--cinza);font-weight:400">${dataLegivel(o)}</span></div>
      <div class="ocorr-aleg">${m(o.alegacao)}<br>
        <span style="font-style:normal;font-size:11.5px">${o.quem} · ${o.tipo.toLowerCase()}</span></div>
      <div class="ocorr-tags">
        <span class="tag t-mod ${MOD_ALT.includes(o.modalidade)?"alt":""}">${o.modalidade}</span>
        <span class="tag t-des ${clsDesfecho(o.desfecho)}">${o.desfecho}</span></div>
    </div>`).join("");

  return `<div class="livro">
    <div class="livro-head">
      ${capaHTML(ref,"livro-capa")}
      <div>
        <div class="livro-tit">${m(titulo)}</div>
        <div class="livro-aut">${m(ref.autoria||"")}</div>
        ${ficha?`<div class="livro-ficha">${ficha}</div>`:""}
        ${L.sinopse?`<div class="livro-sin">${L.sinopse}</div>`:""}
        ${L.nota?`<div class="livro-nota">${L.nota}</div>`:""}
        <div class="livro-stats">
          <div class="lstat"><div class="n">${ocs.length}</div><div class="l">${ocs.length===1?"OCORRÊNCIA":"OCORRÊNCIAS"}</div></div>
          <div class="lstat"><div class="n">${ufs.length}</div><div class="l">${ufs.length===1?"ESTADO":"ESTADOS"}</div></div>
          ${rev?`<div class="lstat"><div class="n">${rev}</div><div class="l">${rev===1?"REVERTIDA":"REVERTIDAS"}</div></div>`:""}
        </div>
      </div>
    </div>
    <div class="livro-motivos">
      <span class="mini">Estados: <b>${ufs.join(", ")}</b></span>
      <span class="mini">Motivos: <b>${motivos.join(", ")}</b></span>
      <span class="mini">Modalidades: <b>${mods.join(", ")}</b></span>
    </div>
    <div class="livro-ocorr">${linhas}</div>
  </div>`;
}

/* ---------- cards de cobertura ---------- */
const PALETA = [
  {bg:"#1B2BD6", et:"#E3F63C", etTxt:"#1B2BD6"},
  {bg:"#D62410", et:"#FFFFFF", etTxt:"#8C1508"},
  {bg:"#FFFFFF", et:"#1B2BD6", etTxt:"#FFFFFF"},
];
const hashN = s => { let h=0; for(let i=0;i<s.length;i++) h=(h*31+s.charCodeAt(i))>>>0; return h; };

function sigla(veic){
  const limpo = veic.replace(/\(.*?\)/g,"").trim();
  const stop = ["de","da","do","das","dos","e","a","o"];
  const ps = limpo.split(/[\s·]+/).filter(p=>p && !stop.includes(p.toLowerCase()));
  if(ps.length===1) return ps[0].slice(0,2).toUpperCase();
  return ps.slice(0,2).map(p=>p[0]).join("").toUpperCase();
}

function tipoFonte(f, cs){
  const v = f.veic.toLowerCase();
  if(v.includes("pesquisa") || v.includes("eca-usp")) return "PESQUISA";
  if(v.includes("substack") || v.includes("blog") || v.includes("gênio")) return "ANÁLISE";
  if(cs.some(c=>c.desfecho==="Revertido")) return "REVERSÃO";
  return "REPORTAGEM";
}

function ondasSVG(cor){
  return `<svg class="ondas" width="200" height="200" viewBox="0 0 200 200" aria-hidden="true">
    <circle cx="100" cy="100" r="88" fill="none" stroke="${cor}" stroke-width="12" opacity=".22"/>
    <circle cx="100" cy="100" r="62" fill="none" stroke="${cor}" stroke-width="12" opacity=".3"/>
    <circle cx="100" cy="100" r="36" fill="none" stroke="${cor}" stroke-width="12" opacity=".38"/>
    <circle cx="100" cy="100" r="13" fill="${cor}" opacity=".45"/>
  </svg>`;
}
function pontosSVG(){
  let d="";
  for(let y=0;y<4;y++) for(let x=0;x<6;x++)
    d += `<circle cx="${4+x*10}" cy="${4+y*10}" r="2" fill="#fff"/>`;
  return `<svg class="pontos" width="62" height="42" viewBox="0 0 62 42" aria-hidden="true">${d}</svg>`;
}

function cardCoberturaHTML(chave, cs){
  const f = FONTES[chave];
  const p = PALETA[hashN(f.veic) % PALETA.length];
  const tits = [...new Set(cs.map(c=>c.titulo))];
  const et = tipoFonte(f, cs);
  const capaRef = cs.find(c=>c.capa);
  const vis = capaRef
    ? `<div class="cvis" style="background:${p.bg}">
         <img src="assets/capas/${capaRef.capa}.jpg" alt="" loading="lazy">
         <span class="cetiq" style="background:${p.et};color:${p.etTxt}">${et}</span></div>`
    : `<div class="cvis" style="background:${p.bg}">
         ${ondasSVG("#fff")}${pontosSVG()}
         <span class="sigla">${sigla(f.veic)}</span>
         <span class="cetiq" style="background:${p.et};color:${p.etTxt}">${et}</span></div>`;
  const resumo = tits.length===1 ? tits[0] : `${cs.length} casos · ${tits.length} títulos`;
  return `<a class="ccard" href="${f.url}" target="_blank" rel="noopener">
    ${vis}
    <div class="cbody">
      <div class="ckicker"><span class="cdot" style="background:${p.bg}"></span>${et}</div>
      <div class="ctit">${f.tit}</div>
      <div class="cdesc">Sustenta ${resumo}</div>
      <div class="cfoot">
        <div class="cmeta"><b>${f.veic}</b>${dataCurta(f.data)}</div>
        <svg class="cseta" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg>
      </div>
    </div></a>`;
}

/* ---------- CSV ---------- */
function baixarCSV(linhas, nome){
  const blob = new Blob(["\uFEFF"+linhas.join("\n")],{type:"text/csv;charset=utf-8"});
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob); a.download = nome; a.click();
  URL.revokeObjectURL(a.href);
}
const escCSV = v => `"${(v??"").toString().replace(/"/g,'""')}"`;

/* ---------- rodapé ---------- */
function montarRodape(){
  const el = document.getElementById("foot-meta");
  if(!el) return;
  const as = CASOS.map(ano).sort();
  const [ya,ma] = (typeof ATUALIZADO!=="undefined" ? ATUALIZADO : "").split("-");
  const quando = ya ? `${MES[ma].toLowerCase()} de ${ya}` : "";
  el.innerHTML = `${CASOS.length} registros · ${as[0]} a ${as[as.length-1]}` + (quando?` · base revisada em <time datetime="${ATUALIZADO}">${quando}</time>`:"") + ` · <a href="metodologia.html">Metodologia</a>`;
}
