# Plano de implementação — Estante Livre

**Versão:** 1.1 · **Data:** 2 de novembro de 2026  
**Princípio:** priorizar segurança documental e utilidade editorial antes de ampliar funcionalidades.

## P0 — Crítico

| Entrega | Critério de conclusão | Estado |
|---|---|---|
| Revisão dos registros parcialmente verificados | Cada pendência encerrada por documento/fonte ou mantida explicitamente com justificativa | EL-005 e EL-015 a EL-021 verificados no núcleo factual; 10 registros parcialmente verificados permanecem (EL-022 a EL-024, EL-028, EL-030 a EL-032, EL-035 a EL-037) |
| Identificação de signatários | Nome, papel, documento e fonte primária; ou indicação explícita de que não foi identificado | Sete registros em estágio de decisão/execução (EL-025 a EL-029, EL-032 e EL-033) ainda sem signatário formal identificado. EL-030 é pedido parlamentar de autoria nominal; EL-035 tem pedido assinado por cargos, mas nomes não divulgados e autoridade individual da SME não identificada. EL-031 não tem ordem de retirada cuja assinatura seja aplicável; não preencher por inferência |
| Revisão de fontes e links | URL testada, tipo de fonte, afirmação sustentada e independência avaliadas | Protocolo publicado; 91/92 fontes classificadas; uma entrada de blog (Gênio Criador) permanece sem classificação por natureza documental |
| Revisão de atribuições políticas | Governo, partido, agente e papel separados; relação causal documentada | Regra editorial definida; revisão caso a caso pendente |
| Direitos e créditos de capas | Origem, titular, licença/permissão, crédito e uso registrado | Inventário de sete capas criado; origem e autorização individual ainda precisam ser verificadas antes de ampliar ou manter a reprodução |

## P1 — Essencial

| Entrega | Critério de conclusão | Estado |
|---|---|---|
| Taxonomia de fontes | Tipos documentais e critérios de independência publicados | Protocolo publicado; 91/92 fontes classificadas; uma entrada de blog (Gênio Criador) pendente |
| Documentos originais | Link ou cópia legalmente preservada para cada ato disponível | Parcial; lista de solicitações no relatório P0 |
| Cidades e localidades | Localidade sustentada por fonte; desconhecido continua explícito | 12 registros anteriormente sem município receberam abrangência estadual explícita (GO-2024, MS-2024, RO-2020 e EL-005); nenhum município foi inferido |
| Linha do tempo | Cada marco com data, contexto e duas fontes pertinentes, preferencialmente primárias | Atualizada a 2026, com 20 marcos e inclusão do episódio da Mundoteca em Canoinhas; revisão bibliográfica aprofundada ainda necessária; revisão bibliográfica aprofundada ainda necessária |
| Análises automatizadas | Números e tabelas derivados de CASOS, ATOS, AGENTES e PAPEIS | Implementação nesta branch |
| Poder e censura | Consulta de agentes e papéis derivados da base | Implementado nesta branch, com perfis individuais gerados por agente |
| Domínio próprio | Domínio escolhido, DNS, HTTPS e canonical conferidos | Depende de decisão e acesso da responsável |
| Acessibilidade e mobile | Testes manuais e automatizados documentados; sem falhas críticas | Auditoria estática no CI: 148 páginas e 36 imagens, zero erros bloqueantes/alertas; testes manuais de teclado, leitor de tela, contraste e dispositivos reais pendentes |

## P2 — Estratégico

| Entrega | Critério de conclusão | Estado |
|---|---|---|
| Mapa interativo | Painel navegável por UF; geolocalização depende de localidades comprovadas, sem coordenadas inferidas | Mapa por UF implementado; geocodificação individual pendente |
| Perfis de responsáveis | Página individual com papéis, atos, fontes, cargos na data e ressalvas | Implementado nesta branch; geração automática em `agentes/<id>.html` |
| Dossiês temáticos | Recortes de dados por tema, com vínculos para casos e fontes; reportagens longas são trabalho editorial futuro | Índice temático automatizado implementado; ensaios aprofundados pendentes |
| Bibliotecas públicas | Recorte, fontes e protocolo próprios; não misturar com bibliotecas escolares | Primeiro episódio incluído: Mundoteca/Canoinhas (dois títulos, um ato); ampliar cobertura e obter documentos municipais |
| Relatórios periódicos | Data de corte, metodologia, alterações e limites explicitados | Relatório-base 2026 gerado da base; cadência anual e edição analítica pendentes |
| Parcerias acadêmicas | Acordo de revisão, pesquisa ou distribuição com responsabilidades definidas | A iniciar |

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
