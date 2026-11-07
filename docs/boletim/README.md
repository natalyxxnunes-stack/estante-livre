# Boletim do Estante Livre

Cada edição sai da base com um comando:

```
node scripts/gerar-boletim.js 2026-11-01 2026-11-30
```

A primeira data é o início do período; a segunda, o fim (sem ela, vale hoje). O arquivo sai em `docs/boletim/edicao-<data final>.md`, em Markdown, pronto para colar no Substack ou em outra plataforma de newsletter.

## O que sai pronto

- Os números do dia (registros, obras, atos, reversões, normas em vigor).
- Casos novos: atos com data dentro do período.
- Desfechos: reversões com data dentro do período, com a fonte.
- À espera de cumprimento: todas as decisões sem cumprimento confirmado, com os dias contados até o fim do período.
- Leis e projetos com mudança no período.
- Correções feitas na base no período.
- Rodapé com o formulário de relato e o DOI.

## O que é seu

Dois blocos marcados com `[ESCREVER]`: a abertura e as leituras recomendadas. Se não houver nada a recomendar, apague o bloco.

## Ritmo sugerido

Mensal, no primeiro dia útil, cobrindo o mês anterior. Uma edição extra quando houver caso grande.

O arquivo `edicao-2026-11-06.md` é uma edição de demonstração, gerada com o período de 1º de outubro de 2025 a 6 de novembro de 2026.
