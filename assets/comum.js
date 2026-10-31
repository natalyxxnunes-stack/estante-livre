/* Estante Livre · funções compartilhadas entre as páginas. */

const norm = s => (s||"").toString().toLowerCase()
  .normalize("NFD").replace(/[\u0300-\u036f]/g,"");
const ano = c => c.data.slice(0,4);
const esc = s => String(s ?? "").replace(/[&<>"']/g,
  c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
/* O selo editorial é manual. O código só confere se há ao menos duas referências cadastradas; não prova sozinho que sejam independentes. */
const verificado = c => c.verificado === "Sim" && (c.fontes||[]).length >= 2;
const conta = (arr,campo,val) => arr.filter(c=>c[campo]===val).length;
/* obra a que o registro se refere; registros de episódio (EL-030, EL-031, EL-034) apontam para o livro */
const obraDe = c => c.obra || c.titulo;
/* prefixo de caminho: páginas geradas em casos/ e livros/ definem RAIZ_SITE = "../" */
const RAIZ = (typeof RAIZ_SITE!=="undefined") ? RAIZ_SITE : "";
const slug = s => norm(s).replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"").slice(0,70).replace(/-+$/,"");
const urlCaso = id => RAIZ + "casos/" + id.toLowerCase() + ".html";
const urlLivro = t => RAIZ + "livros/" + slug(t) + ".html";
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
    estagio: so(p.get("est"), ESTAGIOS),
    situacao: so(p.get("sit"), SITUACOES),
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
  if(F.estagio) p.set("est",F.estagio);
  if(F.situacao) p.set("sit",F.situacao);
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
    if(F.estagio && c.estagio!==F.estagio) return false;
    if(F.situacao && c.situacao!==F.situacao) return false;
    if(F.eixo && c.eixo!==F.eixo) return false;
    if(F.uf && c.uf!==F.uf) return false;
    if(F.ano && ano(c)!==F.ano) return false;
    if(F.tipo && c.tipo!==F.tipo) return false;
    if(F.busca){
      const alvo = norm([c.titulo,c.obra,c.estagio,c.situacao,c.autoria,c.editora,c.cidade,c.uf,c.quem,
        c.alegacao,c.eixo,c.modalidade,c.desfecho,c.nota,c.id,c.governo,c.pressao,
        ...Object.values((typeof RESPONSABILIDADES!=="undefined" && RESPONSABILIDADES[c.id])||{}), (typeof DOCUMENTOS_ATOS!=="undefined" && DOCUMENTOS_ATOS[c.id])||""].join(" "));
      if(!alvo.includes(norm(F.busca))) return false;
    }
    return true;
  });
}

function ordenar(arr, modo){
  const a=[...arr];
  if(modo==="data-desc") a.sort((x,y)=> y.data.localeCompare(x.data) || x.id.localeCompare(y.id));
  else if(modo==="data-asc") a.sort((x,y)=> x.data.localeCompare(y.data) || x.id.localeCompare(y.id));
  else if(modo==="titulo") a.sort((x,y)=> obraDe(x).localeCompare(obraDe(y),"pt"));
  else if(modo==="uf") a.sort((x,y)=> x.uf.localeCompare(y.uf) || x.data.localeCompare(y.data));
  else a.sort((x,y)=> x.id.localeCompare(y.id));
  return a;
}

/* ---------- componentes ---------- */
const clsSituacao = d => ({"Em vigor":"ret","Revertido":"rev","Em aberto":"aberto","Sem efeito":"parcial"})[d] || "";
const clsEstagio = e => ({"Execução comprovada":"e4","Decisão ou ordem":"e3","Pedido formal":"e2","Pressão pública":"e1"})[e] || "";

function capaHTML(c, cls){
  const k = cls||"capa";
  const L = (typeof LIVROS!=="undefined" && LIVROS[obraDe(c)]) || {};
  const src = c.capa ? `${RAIZ}assets/capas/${esc(c.capa)}.jpg` : L.capaUrl;
  if(src){
    const alt = `Capa de referência de ${obraDe(c)}${c.autoria?", de "+c.autoria:""}`;
    const credito = L.capaFonte
      ? `<a href="${esc(L.capaFonte)}" target="_blank" rel="noopener noreferrer">${esc(L.capaEdicao||c.editora||"fonte da imagem")}</a>`
      : esc(c.editora||"edição catalogada");
    const nota = L.capaUrl ? `<span class="capa-nota">Imagem de referência; a edição envolvida no episódio pode ser outra.</span>` : "";
    return `<div class="capa-wrap"><img class="${k}" alt="${esc(alt)}" src="${src}" width="213" height="320" loading="lazy" decoding="async" referrerpolicy="no-referrer">
      <div class="capa-cred">Capa · ${credito}</div>${nota}</div>`;
  }
  /* Sem capa identificada: representação tipográfica, nunca uma falsa capa editorial. */
  const t = c.conjunto ? (L.legenda || "Conjunto de obras") : obraDe(c).split(":")[0];
  return `<div><div class="${k}-tipo m-${slug(c.modalidade)}" aria-hidden="true"><b>${esc(t)}</b><span>${esc((c.autoria||"").split(",")[0])}</span></div>${c.conjunto?'<div class="capa-cred">Conjunto de obras · sem capa individual identificada</div>':""}</div>`;
}

function linksFonte(ids){
  if(!ids || !ids.length) return "";
  return `<div class="fontes"><div class="fontes-lab">FONTES</div>` +
    ids.map(k=>{ const f=FONTES[k]; if(!f) return "";
      return `<a class="flink" href="${esc(f.url)}" target="_blank" rel="noopener">
        <span class="v">${esc(f.veic)}${f.data?` · ${dataCurta(f.data)}`:""}</span>
        <span class="t">${esc(f.tit)}</span></a>`;
    }).join("") + `</div>`;
}

const urlAto = a => RAIZ + "atos/" + a.toLowerCase() + ".html";
/* agentes com papel no ato, agrupados por pessoa ou instituição */
function agentesDoAto(ato){
  if(typeof PAPEIS==="undefined") return [];
  const g = {};
  PAPEIS.filter(p=>p.ato===ato).forEach(p=>{
    (g[p.agente] ||= {ag:AGENTES[p.agente], cargo:p.cargo, papeis:[]}).papeis.push(p.papel.toLowerCase()+(p.atribuido?" (atribuída)":""));
  });
  return Object.entries(g).map(([k,v])=>({id:k, ...v}));
}
const CARIMBO = {"Execução comprovada":"EXECUTADO","Decisão ou ordem":"ORDEM EMITIDA","Pedido formal":"PEDIDO FORMAL","Pressão pública":"PRESSÃO"};

/* ficha no formato prontuário */
function casoHTML(c, q, nivel){
  const m = t => marcar(t, q);
  const H = nivel || "h3";
  const r = (typeof RESPONSABILIDADES !== "undefined" && RESPONSABILIDADES[c.id]) || {};
  const A = (typeof ATOS!=="undefined" && ATOS[c.ato]) || {};
  const linhaResp = (rotulo, valor) => valor ? '<div class="resp-linha"><span class="k">'+rotulo+'</span><div>'+esc(valor)+'</div></div>' : "";
  const campo = (k, v) => v ? '<div class="pront-campo"><div class="k">'+k+'</div><div class="v">'+v+'</div></div>' : "";
  const ags = agentesDoAto(c.ato);
  const pend = c.pendencia;
  return '<article class="caso pront" id="'+c.id+'" aria-labelledby="t-'+c.id+'">'+
    '<div class="pront-cab">'+
      '<a class="pront-num" href="'+urlCaso(c.id)+'" title="Página deste registro"><span>REGISTRO</span><b>'+c.id+'</b></a>'+
      '<div class="pront-tit">'+
        '<'+H+' class="caso-tit" id="t-'+c.id+'">'+m(c.titulo)+'</'+H+'>'+
        '<div class="caso-aut">'+m([c.autoria,c.editora].filter(Boolean).join(" · "))+(c.pnld?" · no PNLD":"")+'</div>'+
      '</div>'+
      '<div class="pront-carimbo '+clsEstagio(c.estagio)+'" aria-hidden="true">'+(CARIMBO[c.estagio]||"")+'<span>'+esc(c.uf)+' · '+c.data.slice(0,4)+'</span></div>'+
    '</div>'+
    '<div class="pront-corpo">'+
      capaHTML(c)+
      '<div class="caso-body">'+
        '<div class="pront-grade">'+
          campo("MECANISMO", '<span class="tag t-mod">'+esc(c.modalidade)+'</span>')+
          campo("ATÉ ONDE CHEGOU", '<span class="tag t-est '+clsEstagio(c.estagio)+'">'+esc(c.estagio)+'</span>')+
          campo("SITUAÇÃO", '<span class="tag t-des '+clsSituacao(c.situacao)+'">'+esc(c.situacao)+'</span>')+
          campo("ONDE", m([c.cidade,c.uf].filter(Boolean).join(", ")))+
          campo("QUANDO", dataLegivel(c))+
          campo("BIBLIOTECA", c.tipo+' · rede '+c.rede.toLowerCase())+
          campo("ATO", A.nome ? '<a href="'+urlAto(c.ato)+'">'+esc(A.nome)+'</a>' : esc(c.ato))+
          campo("INSTÂNCIA REGISTRADA", m(c.quem))+
          campo("GOVERNO NA ÉPOCA", m(c.governo||""))+
        '</div>'+
        '<div class="responsa">'+
          '<div class="responsa-tit">QUEM FEZ O QUÊ</div>'+
          linhaResp("PRESSÃO / PEDIDO",r.pressao||c.pressao)+
          linhaResp("ATO / DOCUMENTO",A.documento)+
          linhaResp("DECISÃO",r.decisor)+
          linhaResp("ASSINATURA DO ATO",r.assinantes)+
          linhaResp("EXECUÇÃO",r.executor)+
          linhaResp("FISCALIZAÇÃO / DENÚNCIA",r.fiscalizacao)+
          linhaResp("RESPOSTA / REVERSÃO",r.resposta)+
          linhaResp("OBSERVAÇÃO SOBRE RESPONSABILIDADE INDIVIDUAL",r.responsavel)+
          (ags.length ? '<div class="agentes-lin"><span class="k">AGENTES IDENTIFICADOS</span>'+ags.map(a=>
            '<a class="ag" href="'+RAIZ+'atos.html#ag-'+a.id+'"><b>'+esc(a.ag.nome)+'</b>'+(a.cargo?' · '+esc(a.cargo):'')+' <i>'+esc(a.papeis.join(", "))+'</i></a>').join("")+'</div>' : "")+
        '</div>'+
        '<div class="caso-aleg"><span class="k">JUSTIFICATIVA DECLARADA</span><div>'+m(c.alegacao)+'</div></div>'+
        (c.nota?'<div class="caso-nota">'+m(c.nota)+'</div>':"")+
        '<div class="caso-desf"><span class="k">DESFECHO</span> '+m(c.desfecho)+'</div>'+
        linksFonte(c.fontes)+
        (pend?'<div class="caso-pend"><span class="k">O QUE AINDA APURAMOS</span><div>'+esc(pend)+' <a href="'+RAIZ+'pendencias.html#'+String(c.ato).toLowerCase()+'">Todas as lacunas do catálogo</a></div></div>':"")+
        '<div class="pront-rod"><span>'+(c.verificado==="Sim"?"Verificado com duas ou mais fontes":"Parcialmente verificado")+'</span>'+
          '<button class="copiar" type="button" data-copiar="'+c.id+'">copiar link</button></div>'+
      '</div>'+
    '</div></article>';
}
/* copiar link de um caso */
document.addEventListener("click", e=>{
  const b = e.target.closest("[data-copiar]"); if(!b) return;
  const url = new URL(urlCaso(b.dataset.copiar), location.href).href;
  const ok = ()=>{ const t=b.textContent; b.textContent="link copiado"; setTimeout(()=>b.textContent=t,1600); };
  if(navigator.clipboard) navigator.clipboard.writeText(url).then(ok, ()=>prompt("Copie o link:", url));
  else prompt("Copie o link:", url);
});

function livroHTML(titulo, ocs, q, nivel){
  const m = t => marcar(t, q);
  const H = nivel || "h3";
  const ref = ocs[0], L = LIVROS[titulo] || {};
  const ficha = [L.ano, L.genero, ref.editora, L.premio, ref.pnld?"No PNLD":null].filter(Boolean).map(esc).join(" · ");
  const ufs = [...new Set(ocs.map(o=>o.uf))];
  const motivos = [...new Set(ocs.map(o=>o.eixo))];
  const mods = [...new Set(ocs.map(o=>o.modalidade))];
  const rev = ocs.filter(o=>o.situacao==="Revertido").length;
  const linhas = [...ocs].sort((a,b)=>a.data.localeCompare(b.data)).map(o=>`
    <div class="ocorr">
      <a class="ocorr-id" href="${urlCaso(o.id)}">${o.id}</a>
      <div class="ocorr-onde">${esc([o.cidade,o.uf].filter(Boolean).join(", ")||o.uf)}<br>
        <span class="ocorr-data">${dataLegivel(o)}</span></div>
      <div class="ocorr-aleg">
        ${o.titulo!==titulo?`<div class="ocorr-ep">${esc(o.titulo)}</div>`:""}
        <b>JUSTIFICATIVA DECLARADA:</b> ${m(o.alegacao)}<br>
        <span class="ocorr-quem">${esc(o.quem)} · ${esc(o.tipo.toLowerCase())}</span>
        ${(()=>{const r=(typeof RESPONSABILIDADES!=="undefined"&&RESPONSABILIDADES[o.id])||{};return [
          r.pressao||o.pressao?'<div><b>PRESSÃO / PEDIDO:</b> '+esc(r.pressao||o.pressao)+'</div>':"",
          r.decisor?'<div><b>DECISÃO:</b> '+esc(r.decisor)+'</div>':"",
          r.assinantes?'<div><b>ASSINATURA:</b> '+esc(r.assinantes)+'</div>':"",
          r.executor?'<div><b>EXECUÇÃO:</b> '+esc(r.executor)+'</div>':""
        ].join("");})()}
      </div>
      <div class="ocorr-tags">
        <span class="tag t-mod">${esc(o.modalidade)}</span>
        <span class="tag t-est ${clsEstagio(o.estagio)}">${esc(o.estagio)}</span>
        <span class="tag t-des ${clsSituacao(o.situacao)}">${esc(o.situacao)}</span></div>
    </div>`).join("");

  return `<div class="livro" id="${slug(titulo)}">
    <div class="livro-head">
      ${capaHTML(ref,"livro-capa")}
      <div>
        <${H} class="livro-tit"><a href="${urlLivro(titulo)}">${m(titulo)}</a></${H}>
        <div class="livro-aut">${m(ref.autoria||"")}</div>
        ${ficha?`<div class="livro-ficha">${ficha}</div>`:""}
        ${L.sinopse?`<div class="livro-sin">${esc(L.sinopse)}</div>`:""}
        ${L.nota?`<div class="livro-nota">${esc(L.nota)}</div>`:""}
        <div class="livro-stats">
          <div class="lstat"><div class="n">${ocs.length}</div><div class="l">${ocs.length===1?"OCORRÊNCIA":"OCORRÊNCIAS"}</div></div>
          <div class="lstat"><div class="n">${ufs.length}</div><div class="l">${ufs.length===1?"UNIDADE DA FEDERAÇÃO":"UNIDADES DA FEDERAÇÃO"}</div></div>
          ${rev?`<div class="lstat"><div class="n">${rev}</div><div class="l">${rev===1?"REVERTIDA":"REVERTIDAS"}</div></div>`:""}
        </div>
      </div>
    </div>
    <div class="livro-motivos">
      <span class="mini">UF: <b>${ufs.join(", ")}</b></span>
      <span class="mini">Motivos: <b>${motivos.map(esc).join(", ")}</b></span>
      <span class="mini">Mecanismos: <b>${mods.map(esc).join(", ")}</b></span>
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
  if(cs.some(c=>c.situacao==="Revertido")) return "REVERSÃO";
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
  const tits = [...new Set(cs.map(obraDe))];
  const et = tipoFonte(f, cs);
  const vis = `<div class="cvis" style="background:${p.bg}" aria-hidden="true">
         ${ondasSVG(p.bg==="#FFFFFF"?"#1B2BD6":"#fff")}
         <span class="sigla" style="color:${p.bg==="#FFFFFF"?"#1B2BD6":"#fff"}">${sigla(f.veic)}</span></div>`;
  const resumo = tits.length===1 ? tits[0] : `${cs.length} casos · ${tits.length} títulos`;
  return `<a class="ccard" href="${esc(f.url)}" target="_blank" rel="noopener">
    ${vis}
    <div class="cbody">
      <div class="ckicker"><span class="cdot" style="background:${p.bg}"></span>${et}</div>
      <div class="ctit">${esc(f.tit)}</div>
      <div class="cdesc">Sustenta ${esc(resumo)}</div>
      <div class="cfoot">
        <div class="cmeta"><b>${esc(f.veic)}</b>${dataCurta(f.data)}</div>
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
function hidratarCapas(){
  if(typeof LIVROS==="undefined" || typeof CASOS==="undefined") return;
  document.querySelectorAll(".livro-capa-tipo, .capa-tipo").forEach(el=>{
    const artigo=el.closest(".caso");
    const card=el.closest(".livro");
    const tituloEl=(card||document).querySelector(".livro-tit");
    let titulo="";
    if(artigo){
      const c=CASOS.find(x=>x.id===artigo.id);
      if(c) titulo=obraDe(c);
    }else if(tituloEl) titulo=tituloEl.textContent.trim();
    const L=LIVROS[titulo];
    if(!L?.capaUrl) return;
    const wrap=el.parentElement;
    if(!wrap || wrap.querySelector("img")) return;
    const img=document.createElement("img");
    img.className=card?"livro-capa":"capa";
    img.src=L.capaUrl;
    img.alt=`Capa de referência de ${titulo}${L.autoria?", de "+L.autoria:""}`;
    img.width=213; img.height=320; img.loading="lazy"; img.decoding="async";
    img.referrerPolicy="no-referrer";
    const cred=document.createElement("div"); cred.className="capa-cred";
    const link=document.createElement("a"); link.href=L.capaFonte||"#"; link.target="_blank"; link.rel="noopener noreferrer";
    link.textContent=L.capaEdicao||"fonte da imagem";
    cred.append("Capa · ",link);
    const note=document.createElement("span"); note.className="capa-nota"; note.textContent="Imagem de referência; a edição envolvida no episódio pode ser outra.";
    wrap.replaceChildren(img,cred,note);
  });
}
hidratarCapas();

function montarRodape(){
  const el = document.getElementById("foot-meta");
  if(!el) return;
  const as = CASOS.map(ano).sort();
  const [ya,ma] = (typeof ATUALIZADO!=="undefined" ? ATUALIZADO : "").split("-");
  const quando = ya ? `${MES[ma].toLowerCase()} de ${ya}` : "";
  el.innerHTML = `${CASOS.length} registros · ${as[0]} a ${as[as.length-1]}` + (quando?` · base revisada em <time datetime="${ATUALIZADO}">${quando}</time>`:"") + ` · <a href="${RAIZ}metodologia.html">Metodologia</a>`;
}
