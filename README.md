# Estante Livre

Observatório de censura e retirada de livros em bibliotecas brasileiras. Um projeto de Nataly Nunes Pinto.

Site estático em HTML, CSS e JavaScript puro, sem build. Na Vercel: Framework Preset "Other", Build Command e Output Directory em branco.

## Onde se edita

Quase tudo fica em `assets/dados.js`:

- `CASOS`: um bloco por registro. Para acrescentar, copie um bloco e edite.
- `LIVROS`: ficha de cada obra (ano, gênero, sinopse, nota).
- `FONTES`: reportagens e pesquisas citadas pelos casos.
- `CONTEXTO`: episódios fora de biblioteca que aparecem no painel sem entrar na contagem.
- `CORRECOES`: registro público de correções, exibido na página Metodologia.
- `ATUALIZADO`: data da última revisão, mostrada no rodapé.
- `FORMULARIOS`: os links dos três formulários de relato. Botão sem link não aparece.

A página Mundo lê `assets/mundo.js`.

Campos de um caso: `id`, `data` (AAAA-MM-DD), `ato`, `governo`, `pressao`, `fim`, `titulo`, `autoria`, `editora`, `cidade`, `uf`, `tipo`, `rede`, `quem`, `alegacao`, `eixo`, `modalidade`, `desfecho`, `verificado`, `fontes`, `pendencia`, `nota`, `capa`.

Um caso só conta como verificado com duas fontes. A regra é aplicada pelo código.

## Páginas

index (painel), casos, livros, cobertura, mundo, glossario, relate, metodologia.

Contornos do mapa: svg-maps, licença CC BY 4.0.
