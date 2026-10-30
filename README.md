# Estante Livre

Observatório de censura e retirada de livros em bibliotecas brasileiras. Um projeto de Nataly Nunes Pinto.

Site estático em HTML, CSS e JavaScript puro. Na Vercel: Framework Preset "Other", Build Command e Output Directory em branco. As páginas geradas ficam no repositório, então o site funciona sem etapa de build.

## Depois de editar os dados, rode o gerador

```
node scripts/gerar.js
```

Ele valida os dados e para com uma lista de erros se algo estiver fora do padrão (mecanismo fora da lista, fonte inexistente, ficha de livro sem caso). Se tudo estiver certo, ele:

- padroniza cabeçalho, menu e rodapé de todas as páginas;
- escreve o HTML das fichas dentro de `casos.html` e `livros.html`, para buscadores e ferramentas de IA lerem sem JavaScript;
- gera uma página por caso (`casos/el-001.html`) e por obra (`livros/<nome>.html`), com dados estruturados e sugestão de citação;
- gera `dados/estante-livre-casos.csv` e `.json`, `sitemap.xml`, `robots.txt`, `llms.txt` e `404.html`.

Quando o domínio próprio estiver no ar, troque a constante `SITE` no topo de `scripts/gerar.js` e rode de novo.

## Onde se edita

Quase tudo fica em `assets/dados.js`, organizado em quatro entidades ligadas por chave:

- `CASOS` (registros): um título atingido por um ato. Aponta para a obra (`obra`) e para o ato (`ato`) e guarda o que é próprio do registro: mecanismo, estágio, situação, alegação, desfecho, fontes, pendência, nota.
- `LIVROS` (obras): autoria, editora, capa, PNLD, ano, gênero, prêmio, sinopse, nota. `conjunto:true` e `legenda` para lotes sem lista título a título.
- `ATOS`: o documento ou episódio, com nome, data, UF, cidade, tipo de biblioteca, rede, governo, instância, documento e o texto de cada papel (`papeis`).
- `AGENTES` e `PAPEIS`: pessoas e instituições com papel documentado em cada ato (pressão, pedido, decisão, assinatura, execução, denúncia, resposta), com o cargo na data. `atribuido:true` quando a fonte atribui o papel sem documento assinado.

No fim do arquivo, uma etapa de montagem copia os campos do ato e da obra para cada registro; as páginas leem os registros já montados. Para um caso novo: crie a obra e o ato se forem novos, copie um bloco de `CASOS`, aponte para eles e rode o gerador.
- `FONTES`: reportagens e pesquisas citadas pelos casos.
- `CONTEXTO`: episódios fora de biblioteca que aparecem no painel sem entrar na contagem.
- `CORRECOES`: registro público de correções, exibido na página Metodologia.
- `LACUNAS`: para cada ato com pendência, os obstáculos (da lista fechada `OBSTACULOS`) e o caminho para fechar. Alimenta a página O que falta apurar. O gerador recusa ato com pendência e sem lacuna, e lacuna de ato sem pendência.
- `ATUALIZADO`: data da última revisão, mostrada no rodapé e no sitemap.
- `CONTATO`: e-mail e Instagram exibidos na página Sobre. E-mail vazio não aparece.
- `FORMULARIOS`: os links dos três formulários de relato. Botão sem link não aparece. Com pelo menos um link preenchido, a página Relate um caso troca sozinha o aviso de canal fechado pelo protocolo do canal aberto.

A página Mundo lê `assets/mundo.js`.

## Campos de um registro

`id`, `ato`, `obra`, `titulo` (opcional: só quando o registro descreve um episódio, e não a obra), `alegacao`, `eixo`, `modalidade`, `estagio`, `situacao`, `desfecho`, `verificado`, `fontes`, `pendencia`, `nota`. Datas dos atos em AAAA-MM-DD, com dia 01 quando só o mês é conhecido.

Três campos usam listas fechadas, definidas em `dados.js` e explicadas no Glossário:

- `modalidade` (mecanismo): Retirada · Ocultação ou restrição de acesso · Exclusão de lista de leitura · Veto a atividade · Veto a aquisição ou doação · Descarte ou destruição · Autocensura
- `estagio`: Pressão pública · Pedido formal · Decisão ou ordem · Execução comprovada
- `situacao`: Em vigor · Revertido · Sem efeito · Em aberto

O texto livre do que aconteceu depois fica em `desfecho`.

Um caso só conta como verificado com `verificado:"Sim"` e duas fontes. A regra é aplicada pelo código.

## Páginas

index (painel), casos, livros, analises, historia (linha do tempo, escrita à mão), mundo, glossario, metodologia, sobre, cobertura, relate. Geradas pelo script: atos.html e as páginas em `casos/`, `livros/` e `atos/`.

Contornos do mapa: svg-maps, licença CC BY 4.0.
