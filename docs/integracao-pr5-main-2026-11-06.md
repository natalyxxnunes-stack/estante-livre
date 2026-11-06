# Integração do PR #5 com main — 06/11/2026

## Objetivo

Preparar uma linha de integração segura a partir da versão atual de `main`, sem substituir atualizações recentes por uma árvore antiga e divergente.

## Estado observado na abertura da integração

- Repositório: `natalyxxnunes-stack/estante-livre`.
- Branch de origem: `feat/estante-livre-auditoria-profissional`.
- PR: #5.
- HEAD observado do PR: `103b97b9b771d53b9acfc12aec8792dc62528b12`.
- Base declarada do PR: `main`.
- O PR está aberto e o GitHub informa `mergeable: false`.
- O workflow #525 do HEAD do PR passou nas verificações automatizadas descritas no próprio PR. Isso não equivale a aprovação de integração nem a QA visual/manual.
- A comparação de refs retornou histórico divergente (655 commits exclusivos na branch do PR e 116 na linha de main). O número de commits, isoladamente, não mede a quantidade de conteúdo aproveitável.

## Diferenças de conteúdo já confirmadas

- `assets/dados.js` na versão atual de main contém 34 casos (EL-001 a EL-034).
- A branch do PR contém 37 casos (EL-001 a EL-037), incluindo EL-035, EL-036 e EL-037.
- Os 34 casos comuns também apresentam diferenças de conteúdo. Portanto, copiar integralmente o arquivo de uma branch sobre a outra perderia correções e detalhes editoriais.
- A versão atual de main tem `ATUALIZADO = "2026-11-06"`; a branch do PR ainda registra `2026-11-04`.
- A branch do PR acrescenta componentes e páginas importantes, entre eles `CONTEXTO_PARTIDARIO`, `poder.html`, `dossies.html`, `relatorio-2026.html`, páginas de agentes, gerador e auditoria estática de acessibilidade.
- O PR contém páginas estáticas geradas e documentos de pesquisa; eles não devem ser portados cegamente antes de reconciliar a base e os scripts-fonte.

## Linha de integração criada

Esta branch foi criada a partir de `main` em 06/11/2026:

`integration/estante-livre-mainline-2026-11-06`

Ela é a linha de trabalho para a integração. A branch principal e a branch de auditoria permanecem intactas.

## Procedimento obrigatório antes de qualquer merge

1. Reconciliar `assets/dados.js` por entidade e por chave, preservando:
   - as correções recentes de main;
   - os três casos adicionais EL-035 a EL-037;
   - os registros de livros, atos, fontes, agentes, papéis, lacunas e correções associados;
   - os 19 registros de contexto partidário, com seus limites temporais e fontes.
2. Portar os scripts e templates necessários à geração, sem sobrescrever mudanças recentes de main sem comparação.
3. Regenerar HTML, CSV, JSON, sitemap e demais artefatos a partir da base reconciliada. Não tratar HTML gerado como fonte primária.
4. Portar documentos editoriais e de pesquisa que ainda não existam em main; quando houver versões dos dois lados, comparar e consolidar em vez de sobrescrever.
5. Executar novamente o workflow de validação na branch integrada.
6. Fazer QA visual real em desktop e celular e testes manuais de teclado/leitor de tela.
7. Confirmar preview e deploy de produção antes de anunciar o lançamento.

## Bloqueios que permanecem explícitos

- Não executar merge do PR #5 enquanto o GitHub indicar conflito ou enquanto a reconciliação de dados não estiver validada.
- Não afirmar que a validação automatizada equivale a acessibilidade integral.
- Não afirmar que o site está publicado em produção sem verificar o endereço efetivamente implantado.
- Não elevar registros parcialmente verificados a totalmente comprovados. Os limites probatórios devem permanecer visíveis na publicação.

## Estado desta etapa

A branch de integração foi criada a partir de main. Nenhum conteúdo do PR #5 foi mesclado ou copiado nesta etapa; isso é intencional, para não sobrescrever as atualizações recentes de main. O próximo passo técnico é reconciliar a base de dados e portar seletivamente as fontes de implementação.


## Auditoria técnica complementar — comparação de árvores e geradores

A comparação recursiva das árvores de `main` e da branch do PR confirmou que a divergência não se limita ao catálogo:

- A árvore de `main` contém 134 entradas; a branch do PR contém 247.
- A branch do PR acrescenta páginas de agentes, páginas de casos EL-035 a EL-037, páginas de atos e livros, páginas temáticas (`poder.html`, `dossies.html`, `relatorio-2026.html`), documentos editoriais/de pesquisa, `scripts/acessibilidade.js` e um workflow de validação.
- Também há arquivos removidos na branch do PR que existem em `main`, incluindo o workflow `.github/workflows/regenerate-site.yml`, capas e páginas de livros/relatórios. Não se deve interpretar a ausência como exclusão editorial aprovada.
- Há alterações em páginas existentes, folhas de estilo, scripts, páginas de casos/atos/livros e dados exportados. Portanto, copiar a árvore inteira de uma branch para a outra não é uma integração seletiva.

### Incompatibilidade entre os geradores

O gerador de `main` carrega e exporta um conjunto de dados/funções diferente do gerador da branch do PR. O gerador do PR passou a depender explicitamente de `CONTEXTO_PARTIDARIO` e da função `linksFonte`, ausentes na lista de dependências carregadas pelo gerador de `main`. O gerador de `main`, por sua vez, mantém seu próprio conjunto de saídas e validações. Isso exige portar em conjunto os contratos de dados, `assets/comum.js`, `scripts/gerar.js` e os testes; não basta copiar páginas HTML.

### CI observado

Os dez workflows mais recentes listados para `main` em 06/11/2026 estavam concluídos com resultado `success`. Isso confirma que a rotina de regeneração de `main` está operacional naquele estado. O workflow do PR #5 também passou em seu HEAD observado, mas executa uma rotina diferente. Dois pipelines verdes, isoladamente, não demonstram compatibilidade entre as duas linhas.

### Decisão técnica desta rodada

A integração automática continua bloqueada. A sequência segura é fazer uma reconciliação explícita do contrato de dados e dos arquivos-fonte; depois, portar os componentes em lotes coerentes e regenerar tudo a partir da base consolidada. Nenhum arquivo gerado, dado de main ou dado do PR foi sobrescrito nesta rodada.
