# Plano de implementação — Estante Livre

**Versão:** 1.0 · **Data:** 1º de novembro de 2026  
**Princípio:** priorizar segurança documental e utilidade editorial antes de ampliar funcionalidades.

## P0 — Crítico

| Entrega | Critério de conclusão | Estado |
|---|---|---|
| Revisão dos registros parcialmente verificados | Cada pendência encerrada por documento/fonte ou mantida explicitamente com justificativa | EL-005 e EL-015 a EL-021 verificados no núcleo factual; 8 registros parcialmente verificados permanecem (EL-022 a EL-024, EL-028, EL-030 a EL-032 e EL-035) |
| Identificação de signatários | Nome, papel, documento e fonte primária; ou indicação explícita de que não foi identificado | Sete registros em estágio de decisão/execução (EL-025 a EL-029, EL-032 e EL-033) ainda sem signatário formal identificado. EL-030 é pedido parlamentar de autoria nominal; EL-035 tem pedido assinado por cargos, mas nomes não divulgados e autoridade individual da SME não identificada. EL-031 não tem ordem de retirada cuja assinatura seja aplicável; não preencher por inferência |
| Revisão de fontes e links | URL testada, tipo de fonte, afirmação sustentada e independência avaliadas | Protocolo criado; classificação individual pendente |
| Revisão de atribuições políticas | Governo, partido, agente e papel separados; relação causal documentada | Regra editorial definida; revisão caso a caso pendente |
| Direitos e créditos de capas | Origem, titular, licença/permissão, crédito e uso registrado | Inventário de sete capas criado; origem e autorização individual ainda precisam ser verificadas antes de ampliar ou manter a reprodução |

## P1 — Essencial

| Entrega | Critério de conclusão | Estado |
|---|---|---|
| Taxonomia de fontes | Tipos documentais e critérios de independência publicados | Protocolo publicado; 81/82 fontes classificadas; uma fonte de blog pendente |
| Documentos originais | Link ou cópia legalmente preservada para cada ato disponível | Parcial; lista de solicitações no relatório P0 |
| Cidades e localidades | Localidade sustentada por fonte; desconhecido continua explícito | 12 registros anteriormente sem município receberam abrangência estadual explícita (GO-2024, MS-2024, RO-2020 e EL-005); nenhum município foi inferido |
| Linha do tempo | Cada marco com data, contexto e duas fontes pertinentes, preferencialmente primárias | Atualizada a 2026, com 19 marcos e fontes para Londrina e São José dos Campos; revisão bibliográfica aprofundada ainda necessária |
| Análises automatizadas | Números e tabelas derivados de CASOS, ATOS, AGENTES e PAPEIS | Implementação nesta branch |
| Poder e censura | Consulta de agentes e papéis derivados da base | Implementado nesta branch, com perfis individuais gerados por agente |
| Domínio próprio | Domínio escolhido, DNS, HTTPS e canonical conferidos | Depende de decisão e acesso da responsável |
| Acessibilidade e mobile | Testes manuais e automatizados documentados; sem falhas críticas | CSS/estrutura preparados; auditoria de navegador pendente |

## P2 — Estratégico

| Entrega | Critério de conclusão |
|---|---|
| Mapa interativo | O painel já possui mapa navegável por UF; evolução para geolocalização depende de completar e validar localidades, sem inventar coordenadas |
| Perfis de responsáveis | Página individual por agente com papéis, atos, fontes, cargos na data e ressalvas | Implementado nesta branch; geração automática em `agentes/<id>.html`
| Dossiês temáticos | Recortes de dados por tema, com vínculos para casos e fontes; reportagens longas continuam sendo trabalho editorial futuro | Índice temático automatizado implementado; ensaios aprofundados pendentes
| Bibliotecas públicas | Recorte, fontes e protocolo de coleta próprios; não misturar automaticamente com bibliotecas escolares |
| Relatórios periódicos | Data de corte, metodologia, alterações e limites explicitados | Relatório-base 2026 gerado da base; cadência anual e edição analítica continuam pendentes
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
