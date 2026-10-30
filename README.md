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

Quase tudo fica em `assets/dados.js`:

- `CASOS`: um bloco por registro. Para acrescentar, copie um bloco e edite.
- `LIVROS`: ficha de cada obra (ano, gênero, prêmio, sinopse, nota). A chave tem de ser igual ao `obra` do caso (ou ao `titulo`, quando não há `obra`).
- `FONTES`: reportagens e pesquisas citadas pelos casos.
- `CONTEXTO`: episódios fora de biblioteca que aparecem no painel sem entrar na contagem.
- `CORRECOES`: registro público de correções, exibido na página Metodologia.
- `ATUALIZADO`: data da última revisão, mostrada no rodapé e no sitemap.
- `CONTATO`: e-mail e Instagram exibidos na página Sobre. E-mail vazio não aparece.
- `FORMULARIOS`: os links dos três formulários de relato. Botão sem link não aparece.

A página Mundo lê `assets/mundo.js`.

## Campos de um caso

`id`, `data` (AAAA-MM-DD; dia 01 quando só o mês é conhecido), `ato`, `governo`, `pressao`, `fim`, `obra` (opcional: o livro, quando o título do registro descreve o episódio), `conjunto` (opcional: `true` para lotes sem lista título a título), `titulo`, `autoria`, `editora`, `pnld`, `capa`, `cidade`, `uf`, `tipo`, `rede`, `quem`, `alegacao`, `eixo`, `modalidade`, `estagio`, `situacao`, `desfecho`, `verificado`, `fontes`, `pendencia`, `nota`.

Três campos usam listas fechadas, definidas em `dados.js` e explicadas no Glossário:

- `modalidade` (mecanismo): Retirada · Ocultação ou restrição de acesso · Exclusão de lista de leitura · Veto a atividade · Veto a aquisição ou doação · Descarte ou destruição · Autocensura
- `estagio`: Pressão pública · Pedido formal · Decisão ou ordem · Execução comprovada
- `situacao`: Em vigor · Revertido · Sem efeito · Em aberto

O texto livre do que aconteceu depois fica em `desfecho`.

Um caso só conta como verificado com `verificado:"Sim"` e duas fontes. A regra é aplicada pelo código.

## Páginas

index (painel), casos, livros, analises, mundo, glossario, metodologia, sobre, cobertura, relate, e as páginas geradas em `casos/` e `livros/`.

Contornos do mapa: svg-maps, licença CC BY 4.0.
