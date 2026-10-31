/* Estante Livre · prateleira com tarja da home. */
(function(){
  const raiz = document.getElementById("prateleira");
  if(!raiz || typeof CASOS==="undefined") return;
  const BASE = raiz.dataset.assets || "assets/";
  const PADRAO = ["Memórias póstumas de Brás Cubas","Os sertões","O castelo",
    "O menino marrom","O diário do diabo: os segredos de Alfred Rosenberg, o maior intelectual do nazismo","O avesso da pele"];
  const lista = (typeof DESTAQUES!=="undefined" && Array.isArray(DESTAQUES) && DESTAQUES.length) ? DESTAQUES : PADRAO;
  const esc = s => (s??"").toString().replace(/[&<>"']/g,ch=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));
  const tira = s => (s||"").replace(/[“”"]/g,"").trim(); // tira as aspas da alegação; o componente põe as suas
  const curto = t => t.split(":")[0];
  const NOME_UF = {AC:"Acre",AL:"Alagoas",AP:"Amapá",AM:"Amazonas",BA:"Bahia",CE:"Ceará",DF:"Distrito Federal",ES:"Espírito Santo",
    GO:"Goiás",MA:"Maranhão",MT:"Mato Grosso",MS:"Mato Grosso do Sul",MG:"Minas Gerais",PA:"Pará",PB:"Paraíba",PR:"Paraná",
    PE:"Pernambuco",PI:"Piauí",RJ:"Rio de Janeiro",RN:"Rio Grande do Norte",RS:"Rio Grande do Sul",RO:"Rondônia",RR:"Roraima",
    SC:"Santa Catarina",SP:"São Paulo",SE:"Sergipe",TO:"Tocantins"};
  /* carimbo: diz até onde a medida chegou, não só o mecanismo */
  const FEITO = {"Retirada":"retirado","Ocultação ou restrição de acesso":"ocultado","Exclusão de lista de leitura":"excluído da lista",
    "Veto a atividade":"atividade suspensa","Veto a aquisição ou doação":"doação vetada","Descarte ou destruição":"descartado","Autocensura":"autocensura"};
  const ORDEM = {"Retirada":"ordem de retirada","Ocultação ou restrição de acesso":"ordem de ocultação","Exclusão de lista de leitura":"ordem de exclusão",
    "Veto a atividade":"ordem de suspensão","Veto a aquisição ou doação":"veto à doação","Descarte ou destruição":"anúncio de descarte","Autocensura":"autocensura"};
  const carimbo = o => o.estagio==="Execução comprovada" ? FEITO[o.modalidade]
    : o.estagio==="Decisão ou ordem" ? ORDEM[o.modalidade]
    : o.estagio==="Pedido formal" ? "pedido de retirada" : "contestado";

  /* monta um item por título, usando a ocorrência mais antiga como referência */
  const livros = lista.map(t=>{
    const ocs = CASOS.filter(c=>obraDe(c)===t).sort((a,b)=>a.data.localeCompare(b.data));
    if(!ocs.length) return null;
    return {titulo:t, ocs, ref:ocs[0], L:(typeof LIVROS!=="undefined" && LIVROS[t])||{}};
  }).filter(Boolean).sort((a,b)=>(a.L.ano||9999)-(b.L.ano||9999));
  if(!livros.length){ raiz.hidden = true; return; }

  /* linha-resumo calculada */
  const anosPub = livros.map(l=>l.L.ano).filter(Boolean);
  const ufs = new Set(livros.flatMap(l=>l.ocs.map(o=>o.uf)));
  const premiados = livros.filter(l=>l.L.premio).length;
  document.getElementById("prat-resumo").textContent =
    [`${livros.length} livros`, anosPub.length>1?`publicados entre ${Math.min(...anosPub)} e ${Math.max(...anosPub)}`:null,
     `${ufs.size} ${ufs.size===1?"unidade da federação":"unidades da federação"}`, premiados?`${premiados} premiado${premiados>1?"s":""}`:null]
     .filter(Boolean).join(" · ");

  const capa = (l,i) => {
    const src = l.ref.capa ? `${BASE}capas/${esc(l.ref.capa)}.jpg` : l.L.capaUrl;
    return src
      ? `<img src="${src}" alt="Capa de referência de ${esc(l.titulo)}" width="213" height="320" loading="lazy" decoding="async" referrerpolicy="no-referrer">`
      : `<div class="prat-tipo" aria-hidden="true"><b>${esc(curto(l.titulo))}</b><span>${esc(l.ref.autoria)}</span></div>`;
  };

  const ul = document.getElementById("prat-lista");
  ul.innerHTML = livros.map((l,i)=>{
    const o=l.ref, verbo = carimbo(o);
    const rotulo = `${l.titulo}, de ${o.autoria}${l.L.ano?`, ${l.L.ano}`:""}. ${verbo[0].toUpperCase()+verbo.slice(1)} em ${NOME_UF[o.uf]||o.uf}, ${ano(o)}. Alegação: ${tira(o.alegacao)}`;
    return `<li class="prat-item" style="--i:${i}">
      <button class="prat-livro" type="button" data-i="${i}" aria-expanded="false" aria-controls="prat-comp" aria-label="${esc(rotulo)}">
        <span class="prat-capa c${(i%3)+1}">${capa(l,i)}
          <span class="prat-tarja" aria-hidden="true"></span>
          <span class="prat-carimbo" aria-hidden="true"><b>${esc(verbo)}</b><span>${esc(o.uf)} ${esc(ano(o))}</span></span></span>
        <span class="prat-meta" aria-hidden="true"><span class="t">${esc(curto(l.titulo))}</span><span class="a">${esc(o.autoria)}${l.L.ano?` · ${l.L.ano}`:""}</span></span>
        <span class="prat-aleg" aria-hidden="true">“${esc(tira(o.alegacao).split("·")[0].trim())}”</span>
      </button></li>`;
  }).join("");

  /* tarjas ao rolar, uma de cada vez */
  const itens = [...ul.children];
  const calmo = matchMedia("(prefers-reduced-motion: reduce)").matches;
  raiz.classList.add("tarjado");
  const tarjar = () => itens.forEach((li,i)=> calmo ? li.classList.add("on") : setTimeout(()=>li.classList.add("on"), i*220));
  if(calmo || !("IntersectionObserver" in window)) tarjar();
  else {
    const io = new IntersectionObserver(es=>{ if(es.some(e=>e.isIntersecting)){ tarjar(); io.disconnect(); } },{threshold:.35});
    io.observe(ul);
  }

  /* botão "tirar as tarjas" */
  const tg = document.getElementById("prat-toggle");
  tg.addEventListener("click", ()=>{
    const livre = tg.getAttribute("aria-pressed")!=="true";
    tg.setAttribute("aria-pressed", livre);
    raiz.classList.toggle("tarjado", !livre);
    tg.textContent = livre ? "Recolocar as tarjas" : "Tirar as tarjas";
    if(!livre) itens.forEach(li=>li.classList.add("on"));
  });

  /* comparador */
  const comp = document.getElementById("prat-comp");
  const botoes = [...ul.querySelectorAll(".prat-livro")];
  function abrir(i, rolar){
    const l = livros[i], o = l.ref, L = l.L;
    const idade = L.ano ? (+ano(o) - L.ano) : null;
    const outras = l.ocs.slice(1);
    const fontes = (o.fontes||[]).map(k=>FONTES[k]).filter(Boolean).slice(0,3)
      .map(f=>`<a href="${esc(f.url)}" target="_blank" rel="noopener">${esc(f.veic)}</a>`).join(" · ");
    comp.innerHTML = `
      <div class="prat-col">
        <div class="lab">O que o livro é</div>
        <h3>${esc(l.titulo)}</h3>
        <div class="sub">${esc([o.autoria, L.ano, L.genero].filter(Boolean).join(" · "))}</div>
        ${L.sinopse?`<p>${esc(L.sinopse)}</p>`:""}
        ${L.premio?`<p><strong>${esc(L.premio)}.</strong></p>`:""}
        ${L.nota?`<p style="color:var(--cinza);font-size:13.5px">${esc(L.nota)}</p>`:""}
        ${idade!==null?`<div class="prat-fato"><span class="n">${idade}</span><span class="l">anos entre a publicação (${L.ano}) e o episódio (${esc(ano(o))})</span></div>`:""}
      </div>
      <div class="prat-col alegaram">
        <div class="lab">O que alegaram</div>
        <div class="prat-quote">“${esc(tira(o.alegacao))}”</div>
        ${o.verificado!=="Sim"?`<div class="prat-aviso">Registro parcialmente verificado. O que falta apurar está na ficha.</div>`:""}
        <dl class="prat-dl">
          <dt>QUEM</dt><dd>${esc(o.quem)}</dd>
          <dt>ONDE</dt><dd>${esc([o.cidade, NOME_UF[o.uf]||o.uf].filter(Boolean).join(", "))}</dd>
          <dt>QUANDO</dt><dd>${esc(dataLegivel(o))}</dd>
          <dt>COMO</dt><dd>${esc(o.modalidade)} · ${esc(o.estagio.toLowerCase())}</dd>
          <dt>DEPOIS</dt><dd>${esc(o.desfecho)}</dd>
          ${fontes?`<dt>FONTES</dt><dd>${fontes}</dd>`:""}
        </dl>
        ${outras.length?`<p style="font-size:13px;color:var(--cinza)">Mais ${outras.length} ${outras.length===1?"ocorrência":"ocorrências"}: ${esc([...new Set(outras.map(x=>x.uf))].join(", "))}.</p>`:""}
        <div class="prat-links">
          <a class="btn" href="${urlCaso(o.id)}">Ver o caso ${esc(o.id)}</a>
          <a class="btn ghost" href="${urlLivro(l.titulo)}">Ficha do livro</a>
        </div>
      </div>`;
    comp.hidden = false;
    botoes.forEach((b,j)=>b.setAttribute("aria-expanded", j===i));
    if(rolar){
      const r = comp.getBoundingClientRect();
      if(r.top > innerHeight*.7) comp.scrollIntoView({behavior: calmo?"auto":"smooth", block:"nearest"});
    }
  }
  ul.addEventListener("click", e=>{
    const b = e.target.closest(".prat-livro"); if(!b) return;
    const i = +b.dataset.i;
    if(b.getAttribute("aria-expanded")==="true"){ comp.hidden = true; b.setAttribute("aria-expanded","false"); return; }
    abrir(i, true);
  });
  /* setas esquerda/direita andam entre os livros */
  ul.addEventListener("keydown", e=>{
    if(e.key!=="ArrowRight" && e.key!=="ArrowLeft") return;
    const i = botoes.indexOf(document.activeElement); if(i<0) return;
    e.preventDefault();
    const n = (i + (e.key==="ArrowRight"?1:-1) + botoes.length) % botoes.length;
    botoes[n].focus(); botoes[n].scrollIntoView({block:"nearest",inline:"nearest",behavior:calmo?"auto":"smooth"});
  });
})();
