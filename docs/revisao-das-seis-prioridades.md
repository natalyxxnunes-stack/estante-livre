> **Atualização operacional — 05/11/2026:** a base contém 37 registros, 32 obras, 19 atos e 71 agentes. Seis registros estão marcados como parcialmente verificados: EL-025, EL-028, EL-030, EL-031, EL-032 e EL-035; cinco são prioridade P0. GitHub Actions **#500 passou** no head atual, e a Vercel retornou sucesso. A geração confirmou 14 páginas padronizadas, sitemap com 175 URLs, 176 páginas HTML auditadas, zero imagens, zero erros bloqueantes e zero alertas de revisão manual; resta um alerta editorial não bloqueante em EL-031 porque o signatário formal da avaliação do link não está identificado. As quatro novas fontes receberam classificação tipológica. A branch está 629 commits à frente e quatro atrás de `main`; na comparação com PR #4, há 65 commits exclusivos no PR #4 e 631 no PR #5. A camada partidária de 19 contextos está em `poder.html`; a apuração de SC/2024 foi incorporada a EL-005, Análises e documentação própria. O Relatório Público 01/CNIRC continua não localizado. Não houve merge, deploy de produção nem inspeção visual/manual em navegador real.

**Data:** 2 de novembro de 2026  
**Branch examinada:** `feat/estante-livre-auditoria-profissional`  
**PR principal:** [#5](https://github.com/natalyxxnunes-stack/estante-livre/pull/5)

Este documento registra o que foi executado, o que passou por validação automatizada e o que depende de inspeção presencial, autorização de terceiros ou resposta de órgão público. Não transforma pendência externa em tarefa concluída.

## 1. Inspeção visual em desktop e celular

**Executado**
- Revisão estrutural do HTML da home e das regras CSS existentes.
- Conferência de breakpoints já presentes no CSS, inclusive regras para telas até 700/760/820 px e componentes específicos.
- Ajustes de espaçamento e composição da capa editorial e dos cartões de prioridades.
- Revisão da navegação, hierarquia e presença dos links para Poder, Pendências e Análises.

**Limite**
A inspeção em navegador real, com capturas em 320, 375, 768 e 1280 px, não foi executada. O ambiente de trabalho desta revisão não conseguiu abrir o repositório pela rede nem renderizar a prévia da Vercel. Não há evidência suficiente para declarar a inspeção visual manual concluída.

**Critério para fechar**
Abrir a prévia do PR em navegador real e registrar capturas nas quatro larguras; testar também zoom 200% e 400%, textos longos, tabelas e navegação.

## 2. Acessibilidade, contraste e teclado

**Executado**
- O script `scripts/acessibilidade.js` passou a calcular contraste dos pares centrais da paleta e bloquear a validação quando um par de texto normal fica abaixo de 4,5:1.
- O vermelho vivo `#E4472E` foi preservado como acento (`--verm-vivo`). Para texto e superfícies com texto claro, o token funcional `--verm` foi ajustado para `#C83220`.
- Os pares principais da paleta foram conferidos: texto claro/vermelho, vermelho/papel, amarelo/azul, tinta/amarelo, texto claro/azul e texto claro/verde.
- Mantidos foco visível, link de salto e respeito a `prefers-reduced-motion`.

**Limite**
O teste de contraste verifica pares de tokens definidos, não todos os estados e elementos efetivamente renderizados. Ainda faltam navegação integral por teclado, leitor de tela e testes em dispositivos reais. Não é uma certificação WCAG 2.2 AA.

**Critério para fechar**
Executar o novo workflow e, depois, testar home, casos, ficha de caso, livro, Poder, Análises, Dossiês, Metodologia e Relate com teclado e ao menos um leitor de tela.

## 3. Direitos das sete capas locais

**Resultado da verificação**
As sete capas do diretório `assets/capas/` continuam sem URL de obtenção, data de obtenção, ISBN/edição confirmada para o arquivo específico, titular da arte, licença ou autorização documentada no repositório. O crédito à editora não substitui autorização de reprodução.

**Decisão**
Nenhuma capa foi declarada liberada. Não foram acrescentadas novas imagens nem se presumiu que a disponibilidade em loja ou catálogo autorize a reprodução. A questão permanece como bloqueio editorial para merge/publicação até que exista autorização ou análise jurídica específica para cada uso.

**Arquivos**
- `docs/inventario-de-imagens.md`
- `docs/politica-de-direitos-e-imagens.md`

**Critério para fechar**
Para cada arquivo: obter autorização/licença ou registrar fundamento jurídico validado; caso não seja possível, retirar a imagem da versão publicada e manter ficha tipográfica com link para a editora. A decisão deve ser tomada arquivo a arquivo.

## 4. Registros parcialmente verificados

A base atual marca **seis registros** como parcialmente verificados. Cinco são prioridade P0; EL-031 é uma pendência complementar de menor prioridade.

| Registro | Lacuna central que impede o fechamento |
|---|---|
| EL-025 | Íntegra do Relatório Público 01/CNIRC e lista final de 300 títulos em fonte primária; transcrição secundária de 261 entradas ainda sem cotejo integral com o original; destino físico dos livros não comprovado |
| EL-028 | Data de intimação da sentença de 20/07/2026 e prova de restituição física às escolas; eventual recurso/cumprimento |
| EL-030 | Requerimento integral de Jéssica Ramos Moreno, destinatário formal, resposta da Secretaria e confirmação de eventual recolhimento |
| EL-031 | Nota institucional original não recuperada; o que está documentado é a retirada temporária de um link de resenha para avaliação, sem retirada do livro, veto ou adoção obrigatória |
| EL-032 | Requerimento e resposta integrais, mensagem/ordem original, parecer técnico completo e prova de redistribuição física de *Pipoca e Picolé* |
| EL-035 | Número do processo SEI, pedido de providências, despacho da SME, quantitativo, avaliação técnica e destino final de *O bebê vem com a cegonha?!?* |

**P0 documental:** EL-025, EL-028, EL-030, EL-032 e EL-035. A ausência dos documentos originais ou da prova de execução impede elevar esses cinco registros a integralmente comprovados.

### Pendências documentais complementares em registros cujo núcleo factual está verificado

As lacunas abaixo continuam relevantes para preservação do arquivo e completude das listas, mas não alteram a verificação do núcleo factual atualmente registrado na base.

| Registro | Lacuna complementar |
|---|---|
| EL-022 | Recuperar o Adendo SEI 10053329 original e o resultado da sindicância estadual; a lista reproduzida contém 19 entradas e 18 títulos distintos |
| EL-023 | Recuperar o Adendo SEI original e o resultado da sindicância; a instrução geral relativa às obras de Rubem Alves está documentada na reprodução consultada |
| EL-024 | Recuperar o Adendo SEI original e o resultado da sindicância para preservar a relação integral dos demais títulos |
| EL-036 | Obter o despacho integral do procedimento do MPSC, recibo de transferência e localização atual dos exemplares da Mundoteca |
| EL-037 | Mesmas diligências de EL-036, mantendo a ficha separada por título e ato |

## 5. Documentos faltantes e pedidos de acesso à informação

Foi criado `docs/pedidos-lai-prontos.md` com minutas organizadas por órgão e grupo de registros. O documento cobre Rondônia (EL-022 a EL-024), São José dos Campos (EL-028), Londrina 2024 (EL-030), Distrito Federal (EL-031), Taubaté (EL-032), Londrina 2026 (EL-035) e Canoinhas (EL-036 e EL-037).

**Limite**
Os pedidos não foram protocolados. Não foi usada conta pessoal, não houve envio a órgãos públicos e não se afirma que qualquer documento novo tenha sido obtido.

**Critério para fechar**
A responsável deve revisar e protocolar cada pedido nos canais oficiais. Ao receber resposta, preservar número de protocolo, documento, data e órgão; registrar também respostas de inexistência, negativa ou sigilo parcial.

## 6. Integração dos PRs #4 e #5

**Resultado da comparação**
- PR #4: branch `feature/capas-redesign-ux`.
- PR #5: branch `feat/estante-livre-auditoria-profissional`.
- As branches divergiram a partir do commit comum `528718c57e2e3b14e127620f8c138283dff5327e`.
- Na comparação direta, PR #5 está 185 commits à frente e 65 atrás da branch do PR #4; portanto, PR #5 não contém integralmente o trabalho do PR #4.
- PR #4 inclui, entre outras mudanças, 16 capas externas, ajustes compartilhados de catálogo e a página `politica.html`.
- PR #5 contém uma camada mais ampla de dados, perfis de agentes e `poder.html`, além de documentação e validações próprias. Há sobreposição em `assets/dados.js`, `assets/comum.js`, `assets/estilo.css`, `analises.html` e `scripts/gerar.js`.

**Decisão técnica**
Não fazer merge automático entre PRs divergentes. A página `poder.html` do PR #5 cumpre o papel ampliado de cadeia de responsabilidade que a página `politica.html` do PR #4 iniciou; as alterações de capas do PR #4 não devem ser incorporadas enquanto os direitos não estiverem resolvidos. A integração futura deve ser seletiva, arquivo a arquivo, após revisão de diff e CI.

**Estado**
Os dois PRs permanecem abertos e sem merge. A branch do PR #5 também está quatro commits atrás de `main`; atualizar a base exige nova validação integral. Não houve publicação.

## Fotografia da base conferida

- 37 registros.
- 32 obras e conjuntos.
- 19 atos.
- 235 associações de fontes nos registros.
- 109 entradas únicas na tabela FONTES, todas com tipo válido (P1, P2, P3, S1, S2, A1, O1, R1 ou B1); 235 associações de fontes nos registros. O artigo do Gênio Criador permanece B1 (blog institucional/editorial).
- 5 registros parcialmente verificados no fechamento de 04/11/2026: EL-025, EL-028, EL-030, EL-032 e EL-035.

**Conclusão operacional:** a revisão técnica e documental foi aprofundada, mas não é correto declarar as seis prioridades integralmente encerradas. As etapas que dependem de navegador real, direitos de terceiros e respostas oficiais permanecem bloqueios explícitos. O PR #5 não deve ser mesclado nem publicado enquanto os bloqueios de direitos e inspeção visual não forem resolvidos.
