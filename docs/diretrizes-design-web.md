# Diretrizes de design e web design — Estante Livre

## Direção editorial

O Estante Livre deve ser percebido como um arquivo jornalístico-documental, não como um painel administrativo nem como uma lista de livros proibidos. A interface precisa conduzir da obra ao episódio, do episódio ao ato e do ato aos responsáveis e às fontes.

A identidade existente deve ser preservada: Fraunces nos títulos, Inter nos textos funcionais, paleta de vermelho/azul/papel e amarelo-neon como marca de ênfase. A metáfora das tarjas é um recurso editorial distintivo e não deve ser aplicada indiscriminadamente.

## Hierarquia de leitura

Nas páginas de livro e de caso, manter três níveis:

1. Identificação: obra, autoria, edição de referência, local e data.
2. Responsabilização: pressão/pedido, decisão, assinatura, execução e resposta.
3. Documentação: justificativa declarada, contexto, desfecho, fontes e pendências.

O primeiro nível deve ser compreendido rapidamente; o detalhamento documental pode ocupar mais espaço.

## Capas

- Proporção de referência: 2:3.
- Não cortar a capa para preencher o quadro; usar `object-fit: contain`.
- Informar edição e origem da imagem.
- Quando a edição do exemplar atingido não estiver documentada, usar a expressão “capa de referência; a edição envolvida no episódio pode ser outra”.
- Não fabricar capas para conjuntos de obras ou lotes de exemplares.
- Priorizar imagens cedidas por editoras/autores ou com licença/uso autorizado.
- A hospedagem externa é provisória; arquivos autorizados devem ser preservados localmente com metadados de proveniência.

## Responsividade

Em telas estreitas, a capa deve permanecer visível na ficha de caso. Ela pode diminuir, mas não deve desaparecer: é a principal referência visual do objeto investigado.

A ficha deve usar uma coluna estreita para a capa e uma coluna flexível para os dados; abaixo de 390px, reduzir a largura da capa e preservar os campos com quebra de linha.

## Acessibilidade e comportamento

- Imagens devem ter texto alternativo descritivo.
- Imagens devem carregar com lazy loading e decoding assíncrono.
- Links de crédito externos devem usar `rel="noopener noreferrer"`.
- A interface deve respeitar `prefers-reduced-motion`.
- O foco de teclado deve permanecer visível nos controles.
- Informação de estágio, situação e mecanismo não pode depender exclusivamente da cor.

## Decisões desta rodada

- Adicionadas 16 imagens externas de referência com fonte e edição identificadas.
- Mantidas as sete capas locais existentes.
- Mantidas representações tipográficas para seis registros agregados sem uma capa individual que os represente.
- Incluídos créditos e ressalva editorial sobre a edição do exemplar atingido.
- Atualizada a prateleira da página inicial para usar as capas cadastradas.
- Corrigida a apresentação das capas em telas móveis: a capa não é mais ocultada nas fichas de caso.
- Adicionada hidratação das capas em páginas estáticas já publicadas, para que as imagens apareçam mesmo antes de uma regeneração completa.
- Acrescentada validação no gerador para impedir imagens externas sem fonte e identificação de edição.

## Pontos ainda dependentes de validação manual

1. Testar os 16 endereços externos em desktop e celular; fornecedores podem bloquear hotlink ou alterar URLs.
2. Confirmar a licença/ autorização de uso de cada imagem.
3. Hospedar localmente as imagens autorizadas para garantir preservação e estabilidade.
4. Conferir em aparelhos reais o contraste, a quebra dos créditos e a navegação por teclado.
5. Executar `node scripts/gerar.js` após cada atualização de dados e verificar a saída do gerador antes do deploy.
