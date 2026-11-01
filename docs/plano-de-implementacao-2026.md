# Plano de implementação — Estante Livre

**Versão:** 1.0 · **Data:** 1º de novembro de 2026  
**Princípio:** priorizar segurança documental e utilidade editorial antes de ampliar funcionalidades.

## P0 — Crítico

| Entrega | Critério de conclusão | Estado |
|---|---|---|
| Revisão dos 18 registros parciais remanescentes | Cada pendência encerrada por documento/fonte ou mantida explicitamente com justificativa | EL-005 fechado no núcleo factual; 14 registros parciais seguem em apuração |
| Identificação de signatários | Nome, papel, documento e fonte primária; ou indicação explícita de que não foi identificado | Em apuração; não preencher por inferência |
| Revisão de fontes e links | URL testada, tipo de fonte, afirmação sustentada e independência avaliadas | Protocolo criado; classificação individual pendente |
| Revisão de atribuições políticas | Governo, partido, agente e papel separados; relação causal documentada | Regra editorial definida; revisão caso a caso pendente |
| Direitos e créditos de capas | Origem, titular, licença/permissão, crédito e uso registrado | Protocolo a implementar antes de ampliar as imagens |

## P1 — Essencial

| Entrega | Critério de conclusão | Estado |
|---|---|---|
| Taxonomia de fontes | Tipos documentais e critérios de independência publicados | Documento operacional criado |
| Documentos originais | Link ou cópia legalmente preservada para cada ato disponível | Parcial; lista de solicitações no relatório P0 |
| Cidades e localidades | Localidade sustentada por fonte; desconhecido continua explícito | 13 registros identificados para revisão |
| Linha do tempo | Cada marco com data, contexto e duas fontes pertinentes, preferencialmente primárias | Revisão histórica ainda necessária |
| Análises automatizadas | Números e tabelas derivados de CASOS, ATOS, AGENTES e PAPEIS | Implementação nesta branch |
| Poder e censura | Consulta de agentes e papéis derivados da base | Implementação nesta branch |
| Domínio próprio | Domínio escolhido, DNS, HTTPS e canonical conferidos | Depende de decisão e acesso da responsável |
| Acessibilidade e mobile | Testes manuais e automatizados documentados; sem falhas críticas | CSS/estrutura preparados; auditoria de navegador pendente |

## P2 — Estratégico

| Entrega | Critério de conclusão |
|---|---|
| Mapa interativo | Localização geográfica apenas quando cidade/endereço forem confiáveis; mapa não deve inventar precisão |
| Perfis de responsáveis | Página por agente com papéis, atos, fontes, cargos na data e ressalvas |
| Dossiês temáticos | Reportagem autoral com documentação e metodologia de seleção |
| Bibliotecas públicas | Recorte, fontes e protocolo de coleta próprios; não misturar automaticamente com bibliotecas escolares |
| Relatórios periódicos | Data de corte, metodologia, alterações e limites explicitados |
| Parcerias acadêmicas | Acordo de revisão, pesquisa ou distribuição com responsabilidades definidas |

## P3 — Futuro

- Versões em inglês e espanhol, com revisão humana e equivalência de conceitos.
- API pública versionada, documentação, licença e política de atualização.
- Acervo documental digital com metadados, preservação e direitos de acesso.
- Ferramentas de pesquisa para universidades e jornalistas.
- Relatório anual sobre censura literária.
- Coleções históricas temáticas, separadas do conjunto de casos contemporâneos.

## Dependências e riscos

- Não lançar formulário de relatos antes de implementar proteção, controle de acesso, retenção, descarte e protocolo de segurança para fontes humanas.
- Não migrar a arquitetura estática sem necessidade comprovada.
- Não publicar capa/documento sem conferir direitos e condições de uso.
- Não inferir partido, autoria ou causalidade a partir do governo em exercício.
- Não usar contagem de títulos como contagem de atos.
- Não automatizar conclusões editoriais; automatizar cálculos e apresentação dos dados.

## Sequência recomendada

1. Fechar os registros de maior risco documental.
2. Corrigir taxonomia e referências.
3. Automatizar a página de análises e a página Poder e censura.
4. Fazer auditoria de acessibilidade, responsividade, SEO e performance no site publicado.
5. Definir domínio próprio e estratégia de divulgação.
6. Publicar o primeiro relatório com data de corte e metodologia.
7. Só então ampliar recorte e produtos de pesquisa.
