# Triagem editorial e técnica do PR #4 — 05/11/2026

## Escopo e método

Foi comparada a branch `feature/capas-redesign-ux` (PR #4) com `feat/estante-livre-auditoria-profissional` (PR #5), arquivo a arquivo, sem mesclar branches nem alterar a branch de produção.

Na comparação consultada, o PR #4 tinha **65 commits exclusivos** e o PR #5 tinha **mais de 600 commits exclusivos**. A comparação retornou 12 arquivos com diferenças. Os números são fotografia da comparação em 05/11/2026 e podem mudar com novos commits.

## Decisões por arquivo

| Arquivo do PR #4 | Conteúdo exclusivo relevante | Decisão |
|---|---|---|
| `.github/workflows/validar-gerador.yml` | Workflow antigo de validação e geração | Não portar automaticamente. O PR #5 já tem workflow próprio e execução #502 aprovada. |
| `analises.html` | Texto de 29/10 sobre sete parlamentares, contexto partidário e bloco de SC | Não substituir a versão atual. O texto é anterior à revisão de 05/11; a página atual tem data, dados e estrutura posteriores. Manter `poder.html` como página de contexto e responsabilidade. |
| `politica.html` | Página agregada de governos/partidos e papéis | Não portar como está. Depende da estrutura legada `FILIACOES`, removida da base atual. A versão atual usa `CONTEXTO_PARTIDARIO` com 19 registros e já apresenta a cobertura temporal em `poder.html`. |
| `assets/comum.js` | Renderização/hidratação de capas externas e inclusão automática do link `politica.html` | Não portar. O tratamento de imagens foi excluído por direitos não comprovados; a navegação atual já aponta para `poder.html`. |
| `assets/dados.js` | Versão anterior da base, com fontes e registros até EL-034 | Não portar. A base atual tem 37 registros e inclui EL-035, EL-036 e EL-037, além da camada `CONTEXTO_PARTIDARIO`. Não foi identificado ID EL exclusivo do PR #4. |
| `assets/estilo.css` | Estilos de capas e da antiga página `politica.html` | Não portar em bloco. Os estilos correspondem a recursos que não foram mantidos. |
| `assets/prateleira.js` | Carregamento de capas remotas na prateleira | Não portar. Manter representação tipográfica até esclarecer direitos. |
| `scripts/gerar.js` | Geração de `politica.html`, navegação antiga e validação de URLs de capas | Não portar em bloco. O gerador atual contempla `poder.html`, dados atuais e validações mais recentes. |
| `docs/apuracao-politica-e-documentos.md` | Cronologia de PR/GO/MS, filiações e SC | Não substituir documentos atuais. SC foi reescrito em documento próprio; a cronologia partidária está na auditoria de 19 agentes; EL-002, EL-003 e EL-004 têm suas fichas e fontes na base atual. O texto antigo pode servir como pista de pesquisa, nunca como versão vigente. |
| `docs/credito-das-capas.md` | Inventário das 16 imagens externas e edição/origem declaradas | Preservar como inventário histórico, atualizado para deixar claro que nenhuma imagem está ativa e que autorização não foi comprovada. |
| `docs/diretrizes-design-web.md` | Hierarquia editorial, responsividade, acessibilidade e critérios para capas | Preservar em versão atualizada, alinhada à decisão de retirar as imagens não autorizadas e às validações manuais pendentes. |
| `docs/criterios-responsabilidade-politica.md` | Critérios para separar contexto, pressão, pedido, decisão e autoria | Conteúdo aproveitado e ampliado no documento atual, incluindo limites temporais de filiação, reivindicação de gabinete e encaminhamento “de ordem do governador”. Não substituir a versão atual pela antiga. |

## Revisão do histórico de 65 commits exclusivos

A lista completa de commits do PR #4 foi consultada pelo endpoint de commits do próprio pull request (65 entradas). O histórico confirma três blocos principais:

1. **Capas e apresentação visual:** commits para adicionar 16 imagens externas, manter sete arquivos locais, renderizar créditos, hidratar capas em páginas estáticas, corrigir URLs, ajustar a prateleira e preservar imagens no mobile. Não integrar enquanto não houver autorização/licença individual e correspondência bibliográfica documentadas. O inventário foi preservado em `docs/credito-das-capas.md`.
2. **Apuração política e filiações:** commits de criação da página política, matriz de 19 pessoas, recortes temporais, correções sobre Rinaldo Modesto, Thomaz Henrique, Zelinda Pastora, Eduardo Riedel, Amauri Ribeiro e outros, além da separação entre pressão, pedido, decisão e reivindicação posterior. O resultado útil foi refeito/absorvido na camada `CONTEXTO_PARTIDARIO` de 19 registros, em `poder.html`, na auditoria temporal e nas fichas atuais. As versões antigas de `FILIACOES` e da página `politica.html` não devem ser copiadas.
3. **Cadeias documentais de PR, GO e MS:** os commits acrescentaram fontes e cronologias para EL-002, EL-003 e EL-004. As informações centrais estão presentes nas fichas e fontes da base atual; EL-004 recebeu fontes adicionais e ressalva de que “em processo de devolução” não comprova retorno a cada escola. A cronologia de SC foi reescrita em documento próprio.

A lista do PR também inclui commits de validação do gerador, navegação e documentação. O workflow antigo do PR #4 não substitui o pipeline atual, que passou na execução #502.

**Resultado do histórico:** não foi identificado, no conjunto de 65 commits, um registro EL exclusivo que justifique importar a versão antiga de `assets/dados.js`. O material de apuração política foi incorporado seletivamente; os componentes de capas e a página política antiga foram rejeitados por incompatibilidade ou falta de direitos comprovados.

## Resultado da triagem

### Conteúdo preservado/absorvido
- A camada partidária temporal do PR #4 foi pesquisada, revisada e implementada na base atual como `CONTEXTO_PARTIDARIO`, com 19 contextos e fontes/limites temporais, em `poder.html`.
- A cronologia de Santa Catarina foi reescrita e atualizada em `docs/apuracao-santa-catarina-el-005-2024.md`, com distinção entre indicação, encaminhamento, orientação da Seduc, assinatura e execução não comprovada.
- Os critérios de responsabilidade política foram ampliados em `docs/criterios-responsabilidade-politica.md`.
- Os dados de EL-002, EL-003 e EL-004 permanecem na base atual, com fontes e ressalvas de execução/devolução.

### Conteúdo deliberadamente não integrado
- A antiga página `politica.html` e seus estilos/scripts: incompatíveis com o modelo de dados atual e redundantes em relação a `poder.html`.
- Hidratação e exibição das 16 capas externas e sete imagens locais: sem comprovação individual de autorização/licença.
- A versão antiga de `analises.html`: substituída pela revisão mais recente.
- A versão antiga do gerador e workflow: não substituir as rotinas atuais.

## Próxima decisão sobre o PR #4

A triagem funcional dos 12 arquivos está concluída. **Não há motivo para mesclar o PR #4 integralmente.** Manter o PR aberto até que o histórico/commits exclusivos sejam revisados e a documentação final seja conferida. Se a revisão do histórico não revelar conteúdo funcional ou documental exclusivo que justifique integração, encerrar o PR como supersedido, registrando o motivo e preservando os documentos históricos úteis.

Nenhuma imagem do PR #4 deve voltar ao build sem autorização/licença documentada. Nenhuma página deve ser publicada apenas porque compila: inspeção visual, teclado e leitor de tela continuam pendentes.
