# Estante Livre · teste de acessibilidade

**Data:** 6 de novembro de 2026

## O que foi testado

- **axe-core 4** (regras WCAG 2.0, 2.1 e 2.2, níveis A e AA) em 19 páginas: as 16 páginas principais e uma ficha de caso, uma de livro e uma de ato. Cada página foi testada em 1280 px e em 390 px de largura.
- **Teclado:** 25 tabulações em Painel, Guia, Para jornalistas e Normas. O link "Pular para o conteúdo" vem primeiro, a ordem segue a leitura e todos os elementos focados têm indicação visível.
- **Reflow:** nenhuma página tem rolagem horizontal em 390 px, largura equivalente a 1280 px com zoom de 400%.

## Resultado

- Primeira rodada: 1 problema. O carimbo da prateleira do Painel ficava invisível por opacidade e era lido com contraste insuficiente.
- Correção: o carimbo passou a usar `visibility`, o que também o esconde de leitores de tela enquanto não aparece.
- Segunda rodada: **zero violações automáticas**.

## Limites

Testes automáticos encontram parte dos problemas. Ficam para uma rodada manual:

- leitura com leitor de tela real (NVDA no Windows, VoiceOver no iPhone e no Mac);
- interação com gráficos e filtros por leitor de tela;
- zoom de texto a 200% sem ampliar a página;
- teste com pessoas com deficiência.
