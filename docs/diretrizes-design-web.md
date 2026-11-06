# Diretrizes editoriais de design e web design — Estante Livre

**Atualização: 05/11/2026.** Este documento consolida decisões de interface. Não substitui inspeção visual em navegador, teste com teclado, leitor de tela ou validação em aparelhos reais.

## Direção editorial

O Estante Livre deve ser percebido como um arquivo jornalístico-documental, não como um painel administrativo nem como uma lista genérica de livros proibidos. A navegação deve conduzir da obra ao episódio, do episódio ao ato e do ato aos agentes, às instituições e às fontes.

Preservar a identidade editorial existente: Fraunces nos títulos, Inter nos textos funcionais, paleta de vermelho/azul/papel e amarelo-neon como marca de ênfase. A metáfora das tarjas é um recurso editorial distintivo, não um efeito decorativo a aplicar indiscriminadamente.

A interface precisa distinguir visualmente e no texto:
- alegação, denúncia ou crítica;
- pedido formal ou informal;
- decisão ou ordem;
- assinatura;
- execução comprovada;
- reversão, devolução ou desfecho;
- lacuna documental.

Nenhuma dessas categorias pode depender apenas da cor.

## Hierarquia de leitura

Nas páginas de livro e de caso, manter três níveis:

1. **Identificação:** obra, autoria, edição de referência quando comprovada, local e data.
2. **Responsabilização:** pressão/pedido, decisão, assinatura, execução, fiscalização e resposta.
3. **Documentação:** justificativa declarada, contexto, desfecho, fontes e pendências.

O primeiro nível deve ser compreendido rapidamente; o detalhamento documental pode ocupar mais espaço. A ficha precisa deixar claro quando uma edição/capa não corresponde necessariamente ao exemplar atingido.

## Representação visual de livros e capas

**Estado atual:** nenhuma imagem de capa está ativa no build consolidado. As sete imagens locais sem cadeia de direitos esclarecida foram retiradas, assim como as 16 referências externas do PR #4. Permanecem representações tipográficas para identificar obras e conjuntos sem simular capas.

Critérios obrigatórios para eventual reintrodução:
- proporção de referência 2:3;
- usar `object-fit: contain`, sem cortar a capa;
- registrar edição, ISBN quando disponível, origem, titular, licença/autorização e data de consulta;
- informar “capa de referência; a edição envolvida no episódio pode ser outra” quando a edição atingida não estiver documentada;
- não fabricar capas para conjuntos de obras ou lotes de exemplares;
- priorizar imagens cedidas por editoras/autores ou com licença/uso autorizado;
- preservar localmente apenas arquivos cuja utilização esteja autorizada ou juridicamente fundamentada, com metadados de proveniência.

A hospedagem externa/hotlink não é estratégia de preservação: endereços podem mudar, bloquear acesso ou deixar de funcionar.

## Responsividade

A ficha de caso deve manter a hierarquia entre identificação, responsabilização e fontes em telas estreitas. Quando uma capa autorizada for reintroduzida, ela poderá diminuir, mas não deve desaparecer da ficha: é referência visual do objeto investigado.

Em telas estreitas:
- manter uma coluna estreita para a imagem e outra flexível para os dados;
- abaixo de 390px, reduzir a largura da imagem e preservar os campos com quebra de linha;
- evitar rolagem horizontal da página; tabelas extensas podem usar contêiner próprio com indicação de rolagem;
- testar títulos longos, nomes próprios, URLs, créditos e notas de incerteza.

## Acessibilidade e comportamento

- Imagens devem ter texto alternativo descritivo, dimensões declaradas, lazy loading e decoding assíncrono.
- Links externos que abrem nova aba devem usar `rel="noopener noreferrer"` e deixar essa ação compreensível.
- Respeitar `prefers-reduced-motion`; movimento não pode ser necessário para acessar conteúdo.
- O foco de teclado deve permanecer visível e seguir ordem lógica.
- Controles devem ter nome acessível, estado exposto e área acionável adequada.
- Informação de estágio, situação e mecanismo não pode depender exclusivamente da cor.
- Tabelas precisam de cabeçalhos identificáveis; em dispositivos móveis, a solução de rolagem deve continuar utilizável por teclado.
- Não usar imagens meramente decorativas como substituto de informação textual.

## Decisões vigentes

- A camada temporal de contexto partidário está publicada em `poder.html`, com 19 agentes/contextos e ressalvas sobre cobertura temporal.
- `poder.html` é a página atual de agentes, governos, partidos e responsabilidades; a antiga `politica.html` do PR #4 não foi portada porque depende da estrutura de dados legada `FILIACOES`.
- O build atual usa representações tipográficas, não capas sem autorização esclarecida.
- A auditoria estática está documentada em `docs/auditoria-acessibilidade-mobile.md`; seus resultados não equivalem a teste manual.

## Pontos ainda dependentes de validação manual

1. Inspecionar desktop e celular em navegador real, incluindo larguras de 320, 360, 390, 768 e 1280px.
2. Testar navegação integral por teclado, ordem de foco, foco visível e ativação de todos os controles.
3. Testar com ao menos um leitor de tela e conferir nomes, estados, títulos, tabelas e avisos.
4. Conferir contraste em componentes renderizados, inclusive estados de foco, hover, links e avisos; a checagem de tokens não cobre todos os elementos.
5. Revalidar navegação, links, quebras e desempenho após qualquer reintrodução autorizada de imagens.
6. Registrar navegador, sistema, dispositivo, data, resultado e evidência de cada teste.

**Decisão editorial:** não mesclar nem publicar com base apenas em aprovação automatizada. A inspeção manual permanece uma etapa de lançamento.
