# Direção de arte e identidade editorial — Estante Livre

**Versão:** 1.0 · **Data:** 2 de novembro de 2026  
**Posicionamento:** observatório jornalístico de censura literária, política pública e circulação de livros.

## Conceito

O Estante Livre deve parecer uma revista jornalística contemporânea que investiga cultura e poder — não um dashboard corporativo, um catálogo de e-commerce ou um relatório burocrático.

A identidade combina cor saturada, tipografia editorial, papel quente, composição modular e hierarquia de informação. A personalidade visual deve chamar atenção para a relevância pública do assunto, sem dramatizar indevidamente a evidência nem dificultar a leitura.

## Paleta

| Cor | Código | Função |
|---|---|---|
| Vermelho-alaranjado | `#E4472E` | Marca, chamadas, alertas editoriais e destaques |
| Azul-cobalto | `#2447D8` | Navegação de dados, links, interação e informação |
| Amarelo ácido | `#F2D23C` | Contraponto, marcações, números e sinalização |
| Papel marfim | `#F5F1E8` | Fundo principal e áreas de leitura |
| Branco quente | `#FFFCF5` | Cartões, documentos e superfícies de conteúdo |
| Preto tinta | `#191817` | Texto, linhas estruturais e contraste |
| Verde profundo | `#286B50` | Categoria semântica secundária, quando necessária |

### Regras de uso

- Vermelho, azul e amarelo são cores de identidade; não devem ser usadas todas com a mesma intensidade em cada bloco.
- Marfim e branco quente preservam conforto de leitura e dão unidade editorial.
- Preto tinta estrutura a página e garante contraste.
- Cores de status precisam manter significado consistente: pendência, confirmação, reversão e alerta não podem depender apenas da cor.
- Não usar amarelo ácido como cor de texto sobre fundo claro.
- Verificar contraste WCAG para cada combinação de texto e fundo, inclusive estados de hover e foco.

## Tipografia

- **Fraunces:** títulos, manchetes, números de destaque e chamadas editoriais.
- **Inter:** corpo, navegação, filtros, tabelas, legendas, metadados e interface.
- Títulos grandes devem ter ritmo de manchete, sem sacrificar legibilidade ou quebrar palavras de modo imprevisível.
- Dados tabulares devem usar algarismos alinhados e hierarquia discreta.

## Composição e linguagem gráfica

1. **Manchetes:** títulos fortes e específicos, com subtítulos que contextualizam a apuração.
2. **Ritmo editorial:** alternar áreas de leitura, dados, documentos e imagens; evitar uma sequência uniforme de cartões.
3. **Grandes números:** destacar escala e recortes, sempre acompanhados de definição, data de corte e fonte.
4. **Capas e fotografias:** tratar como elementos documentais, com crédito, edição, origem e condição de uso.
5. **Documentos:** privilegiar trechos legíveis, identificação do órgão, número, data e link para a íntegra.
6. **Gráficos:** usar cor para codificar informação, não como decoração. Incluir rótulos, valores e alternativa textual.
7. **Responsabilidade política:** diferenciar visualmente pressão, pedido, decisão, assinatura, execução e reversão. Não sugerir causalidade que a documentação não prova.

## Experiência e acessibilidade

- Fundo marfim e texto escuro são o padrão para leitura longa.
- Navegação deve ser clara, responsiva e consistente em todas as páginas.
- Foco de teclado precisa ser visível; links devem ser reconhecíveis sem depender apenas da cor.
- Respeitar `prefers-reduced-motion`.
- Não esconder informação essencial em hover, animação ou interação.
- Em celular, preservar hierarquia, legibilidade e acesso às fontes; não reduzir tabelas a texto ilegível.
- Conferir contraste WCAG 2.2 AA, zoom, teclado, leitor de tela e alvos de toque em teste manual.

## Critério editorial

A identidade deve ter personalidade sem transformar suspeita em acusação, dado em conclusão ou imagem em prova. O projeto é contundente porque documenta — não porque usa cores fortes.

## Implementação

A camada de identidade está centralizada no bloco **IDENTIDADE EDITORIAL 2026** ao final de `assets/estilo.css`. As variáveis de cor ficam em `:root`, e os ajustes responsivos e de movimento reduzido acompanham o mesmo bloco.

A atualização de CSS é uma primeira implementação visual. A aprovação final depende de inspeção visual manual em desktop e celular, verificação de contraste e conferência de páginas com conteúdo real.
