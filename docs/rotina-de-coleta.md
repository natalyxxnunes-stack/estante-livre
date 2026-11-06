# Estante Livre · rotina de coleta

Documento interno. Tudo aqui usa fonte pública e cabe em cerca de duas horas por mês. A metodologia pública está em `metodologia.html`.

## Cadência

| Frequência | Fonte | O que fazer |
| --- | --- | --- |
| Contínua | Alertas do Google e do Google Notícias | Um alerta por palavra-chave da lista abaixo |
| Contínua | Formulário de relatos | Triagem no Notion ("Estante Livre · triagem de relatos"), sem dados de contato |
| Semanal | Etiqueta "censura" no PublishNews e imprensa regional | Leitura rápida, anotar pistas na triagem |
| Mensal | Querido Diário (diários oficiais municipais) | Buscar as palavras-chave nos municípios já citados no catálogo e nas capitais |
| Mensal | Diários oficiais estaduais | Buscar nas UFs com casos registrados |
| Mensal | Sites das assembleias e das câmaras das capitais | Projetos de lei sobre conteúdo em escolas e bibliotecas |
| Semestral | FNDE e resultados do PNLD | Listas de obras aprovadas e excluídas |
| Semestral | Google Acadêmico e repositórios (UFMG, Unicamp, UFSC, UFRGS) | Alerta de citação e novos trabalhos sobre censura de livros |

## Palavras-chave

recolhimento de livros · retirada de livros · livro recolhido · livro proibido escola · "ideologia de gênero" livro · biblioteca escolar censura · "conteúdo impróprio" livro · "recolher os exemplares" · "retirar do acervo" · "sala de leitura" livro retirado

## Do relato ao catálogo

1. Pista ou relato entra na triagem como **Em apuração**. Não vai para o site.
2. Com uma fonte confiável e o livro, o ato e o motivo identificados (os três elementos da definição), vira registro com `verificado:"Parcialmente"`, pendência e lacuna cadastradas.
3. Com segunda fonte independente ou confirmação pública do órgão, passa a `verificado:"Sim"` (nível Confirmado).
4. Com documento oficial primário cadastrado em `FONTES` e listado em `docPrimario` do ato, o nível sobe para Documentado sozinho.
5. Antes de publicar o nome de agente público em caso novo, procurar o órgão por e-mail e registrar data e resultado na ficha.
6. Toda mudança de nível ou de fato entra em `CORRECOES`.
7. Rodar `node scripts/gerar.js`.

## Teste do codebook

A cada novo lote de casos, reclassificar cinco registros antigos sem olhar a classificação anterior. Onde der diferente, a definição do campo no Glossário está frouxa e precisa ser reescrita.
