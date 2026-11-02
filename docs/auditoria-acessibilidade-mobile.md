# Auditoria estática de acessibilidade e responsividade

**Data:** 2 de novembro de 2026  
**Escopo:** verificações automatizadas executadas no GitHub Actions para os arquivos HTML do projeto.

## O que o teste verifica

O script `scripts/acessibilidade.js` percorre os arquivos HTML do repositório e verifica:

- idioma do documento definido como português do Brasil;
- presença da meta tag de viewport;
- link de salto para o conteúdo principal;
- elemento `main` com o identificador usado pelo link de salto;
- atributo `alt` em todas as imagens;
- uso de `rel="noopener"` em links que abrem nova aba (alerta, não bloqueio);
- existência de media queries no CSS responsivo;
- presença de regra para `prefers-reduced-motion` (alerta, não bloqueio).

O teste é executado no workflow de validação depois da geração das páginas estáticas. Na execução 111, foram verificadas 166 páginas HTML e 36 imagens, com zero erros bloqueantes e zero alertas.

## Limites

Esta é uma auditoria estática inicial, não uma certificação WCAG 2.2 AA. Ela não substitui:

- navegação integral por teclado, incluindo menus, filtros, tabelas e controles;
- inspeção de foco visível e ordem de tabulação;
- leitura com NVDA, VoiceOver ou outro leitor de tela;
- avaliação de contraste de texto, ícones, estados e componentes;
- testes reais em larguras móveis, tablets e zoom de 200%/400%;
- verificação de reflow, textos longos, tabelas e imagens em dispositivos reais;
- testes com usuários com deficiência.

## Próxima etapa manual

1. Testar a página inicial, casos, ficha de caso, ficha de livro, Análises, Poder e censura, Dossiês, História, Metodologia e Relate um caso.
2. Repetir em larguras de 320, 375, 768 e 1280 px.
3. Navegar sem mouse e confirmar foco visível, ausência de armadilhas e acesso a todos os controles.
4. Conferir contraste de texto normal (4,5:1), texto grande (3:1) e componentes gráficos relevantes (3:1).
5. Testar ao menos uma página de cada tipo com leitor de tela.
6. Registrar defeitos com URL, dispositivo/navegador, passos para reproduzir e severidade.

**Status:** verificação estática incorporada ao CI. A auditoria manual e os testes com tecnologias assistivas continuam pendentes; o projeto não deve ser apresentado como plenamente acessível antes dessa etapa.
