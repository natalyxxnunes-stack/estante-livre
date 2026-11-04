# Auditoria da camada temporal de filiações partidárias do PR #4

**Data da auditoria:** 04/11/2026  
**Origem:** branch `feature/capas-redesign-ux`, PR #4  
**Destino pretendido:** PR #5, somente após revisão editorial e técnica.

## Resultado

A camada foi recuperada e auditada em nível de metadados e coerência temporal. **Não foi portada como dado estruturado para o site** nesta rodada: a branch de consolidação não contém o objeto `FILIACOES`, e uma parte das fontes comprova candidatura/eleição ou situação em data posterior, não necessariamente a filiação no dia do episódio. Exibir todas as siglas como “partido à época” produziria falsa precisão.

A regra adotada é: partido só pode ser apresentado como filiação na data do fato quando a fonte cobre aquela data ou um mandato/registro institucional contemporâneo compatível. Candidatura eleitoral anterior, notícia posterior e partido do governo são contexto, não prova automática da filiação individual na data do ato. Governo em exercício nunca é prova de autoria da medida.

## Registros recuperados

| Pessoa / agente | Registro partidário recuperado no PR #4 | Limite temporal e decisão editorial |
|---|---|---|
| Eduardo Leite | PSDB no governo do RS em 2024; filiação ao PSD em 09/05/2025 | Contexto do governo no episódio de 2024; troca posterior documentada por UOL. Não inferir autoria. |
| Eduardo Riedel | PSDB como governador eleito em 2022; filiação ao PP em 19/08/2025 | PSDB é compatível com 2024; fonte de partido é perfil partidário de 2022 e troca posterior. Preferir fonte oficial contemporânea para afirmação categórica no dia do fato. |
| Ratinho Júnior | PSD na reeleição de 2022 | TSE confirma candidatura/eleição em 2022, não constitui isoladamente certidão de filiação em cada data posterior. |
| Ronaldo Caiado | União Brasil na candidatura ao governo em 2022 | Fonte eleitoral de 2022; contexto provável do mandato de 2024, mas não registro partidário contemporâneo ao episódio. |
| Jorginho Mello | PL no perfil institucional da Alesc | Perfil institucional da Alesc; manter como contexto do governo desde 2023, sem atribuição de autoria. |
| Marcos Rocha | PSL na candidatura ao governo em 2018 | Fonte eleitoral de 2018 é distante do episódio de 2020. Não exibir como filiação em 2020 sem fonte contemporânea adicional. |
| Anderson Farias | PSD na candidatura municipal de 2024; filiação indicada desde 2022 | A ficha recuperada cita dados eleitorais de 2024; não comprova, por si só, data inicial da filiação. |
| Marcelo Belinati | PP nas eleições municipais de 2017 e 2021 | Perfil oficial de Londrina registra eleições pelo PP e mandato 2021–2024; boa evidência contextual do mandato, não de autoria. |
| Sérgio Victor | Novo na eleição de 2024 | Evidência eleitoral para a candidatura; prefeito somente a partir de janeiro de 2025. Não usar como agente de atos anteriores à posse. |
| Sérgio Motta | Republicanos na 20ª Legislatura | Memória Política da Alesc registra partido e legislatura 2023–2027; evidência institucional contemporânea para o episódio de 2024. |
| Jéssica Ramos Moreno | PP na candidatura municipal de 2024 | Evidência eleitoral contemporânea à candidatura; não substitui certidão histórica de filiação na data do requerimento. |
| Amauri Ribeiro | União Brasil em notícia de gabinete da Alego de 01/04/2024 | A notícia identifica a legenda e reivindica liderança posterior ao episódio; não prova pressão anterior nem autoria da decisão da Seduc. |
| Rinaldo Modesto | Eleito pelo Podemos em 2022; lista oficial da Alems de 09/07/2024 o registra no Podemos | O pedido ocorreu em março de 2024. As fontes recuperadas não fecham a filiação em 07/03/2024. Exibir como “eleito em 2022 pelo Podemos; filiação na data do pedido não confirmada”. |
| Thomaz Henrique | Folha registra candidatura pelo PL em 2024; Diário Oficial da Câmara o lista no PL em 07/06/2024 | Episódio em 04/06/2024. A fonte oficial é três dias posterior; não afirmar filiação exata em 04/06 sem prova contemporânea. |
| Gustavo Gayer | PL na eleição de 2022 e perfil da Câmara em 2023 | Perfil institucional da Câmara para o mandato 2023–2027 é evidência compatível com 2023; não é necessário inferir a partir apenas da candidatura. |
| Zelinda Pastora | PRD na eleição municipal de 2024 | Episódio relatado em 2025; candidatura de 2024 não comprova filiação no momento do pedido de 2025. |
| Leonel Camasão | PSOL no resultado eleitoral de 2024 | Fonte do TRE-SC confirma legenda na eleição; não usar como prova para outros períodos. |
| Lia Nogueira | PSDB em perfil parlamentar da Alems de 2022 | Perfil institucional registra a legenda; para março de 2024, é evidência histórica relevante, mas a fonte citada é uma página de homologação/teste e precisa ser substituída por registro oficial estável antes de publicação. |
| Clayton Silva | PSC na posse de 2017; notícia local registra mudança para PTC em abril de 2020 | Não apresentar PSC como partido no episódio de 2019 sem confirmação adicional; a mudança de abril de 2020 é posterior ao episódio. |

## Fontes recuperadas na camada original

- Amauri Ribeiro / Alego, notícia de gabinete (01/04/2024): https://portal.al.go.leg.br/noticias-dos-gabinetes/143079/amauri-ribeiro-lidera-movimento-para-retirada-de-livro-com-conteudo-pornografico-que-estava-sendo-usado-em-escolas-de-goias
- Sérgio Motta / Alesc, Memória Política: https://memoriapolitica.alesc.sc.gov.br/biografia/1008-Sergio_Motta
- Rinaldo Modesto / eleição 2022: https://www1.folha.uol.com.br/poder/eleicoes/candidatos/2022/ms/deputado-estadual/professor-rinaldo-modesto-120001615778.shtml
- Rinaldo Modesto / lista oficial Alems (09/07/2024): https://al.ms.gov.br/upload/Pdf/2024_07_09_12_25_33_lista-de-autoridades-09-07-24.pdf
- Eduardo Leite / mudança para PSD (09/05/2025): https://noticias.uol.com.br/politica/ultimas-noticias/2025/05/09/eduardo-leite-se-filia-ao-psd-de-kassab.ghtm
- Eduardo Riedel / mudança para PP (19/08/2025): https://noticias.uol.com.br/ultimas-noticias/agencia-estado/2025/08/19/ultimo-governador-do-psdb-eduardo-riedel-do-ms-assina-filiacao-ao-pp.amp.htm
- Ratinho Júnior / TSE (eleição 2022): https://www.tse.jus.br/comunicacao/noticias/2022/Outubro/ratinho-junior-psd-se-reelege-governador-do-parana
- Ronaldo Caiado / candidatura 2022: https://www1.folha.uol.com.br/poder/eleicoes/candidatos/2022/go/governador/ronaldo-caiado-90001646326.shtml
- Jorginho Mello / Alesc, Memória Política: https://memoriapolitica.alesc.sc.gov.br/biografia/514-Jorginho_Mello
- Marcos Rocha / candidatura 2018: https://agenciasertao.com/eleicoes/candidato/RO/coronel-marcos-rocha-psl-ro--220000625838/?ano=2018
- Anderson Farias / candidatura 2024: https://www1.folha.uol.com.br/poder/eleicoes/candidatos/2024/sp/prefeito/anderson-250001946210.shtml
- Marcelo Belinati / Perfil de Londrina 2025: https://repositorio.londrina.pr.gov.br/index.php/menu-planejamento/gpi/perfil-de-londrina-2025/68692-1-1-1-4/file
- Sérgio Victor / candidatura 2024: https://www1.folha.uol.com.br/poder/eleicoes/candidatos/2024/sp/prefeito/sergio-victor-250001928721.shtml
- Jéssica Ramos Moreno / candidatura 2024: https://www1.folha.uol.com.br/poder/eleicoes/candidatos/2024/pr/vereador/jessicao-160002026792.shtml
- Thomaz Henrique / candidatura 2024: https://www1.folha.uol.com.br/poder/eleicoes/candidatos/2024/sp/vereador/thomaz-henrique-250002124819.shtml
- Thomaz Henrique / Diário Oficial da Câmara (07/06/2024): https://diario.camarasjc.sp.gov.br/uploads/dio/publicacoes/2024/diariooficialsjc648-1717720847.pdf
- Gustavo Gayer / Câmara dos Deputados (2023): https://www.camara.leg.br/deputados/220568?ano=2023
- Gustavo Gayer / candidatura 2022: https://www1.folha.uol.com.br/poder/eleicoes/candidatos/2022/go/deputado-federal/gustavo-gayer-90001652508.shtml
- Zelinda Pastora / candidatura 2024: https://www1.folha.uol.com.br/poder/eleicoes/candidatos/2024/sp/vereador/zelinda-pastora-250002194882.shtml
- Leonel Camasão / TRE-SC, resultado eleitoral 2024: https://apps.tre-sc.jus.br/site/fileadmin/arquivos/eleicoes/eleicoes2024/resultados_turno_1/votacao_secao/pdfs/VotSecao_81051_50500.pdf
- Lia Nogueira / perfil parlamentar Alems: https://hmlalems.easynet.com.br/Deputados/Visualizar/1045
- Clayton Silva / Câmara de Limeira, posse 2017: https://www.limeira.sp.leg.br/noticias/view/2017-01-02_vereadores-prefeito-e-vice-prefeito-tomam-posse
- Clayton Silva / mudança partidária noticiada em 2020: https://elimeira.com.br/noticias/limeira/seis-vereadores-de-limeira-mudaram-de-partido/

## Pendências antes de publicar a camada no site

1. Substituir fontes eleitorais secundárias por dados oficiais do DivulgaCandContas/TSE sempre que o objetivo for afirmar filiação na data da candidatura.
2. Obter/identificar registros partidários contemporâneos para Rinaldo Modesto (março/2024), Thomaz Henrique (04/06/2024), Zelinda Pastora (2025), Marcos Rocha (2020), Clayton Silva (2019) e Lia Nogueira (2024).
3. Corrigir a página de análise para não classificar Clayton Silva como parlamentar que pediu retirada: o requerimento citado documenta questionamento e pedido de informações, não pedido formal de recolhimento.
4. Manter Amauri Ribeiro separado de quem antecedeu ou determinou a decisão: a notícia de gabinete é posterior e reivindica liderança do movimento.
5. Manter governos em exercício em campo separado de autoria, decisão, assinatura e execução.
6. Portar apenas o componente de dados/consulta partidária após validação; não portar capas, URLs de imagens ou o mecanismo de capas externas do PR #4, pois a cadeia de direitos não está documentada.

## Decisão

**Camada recuperada e auditada; integração no site ainda bloqueada por evidência temporal insuficiente em parte dos registros.** O PR #4 não deve ser mesclado integralmente. A próxima implementação deve ser uma camada de contexto partidário temporal que exiba explicitamente a data coberta pela fonte e o grau de confirmação, sem converter candidatura ou partido de governo em filiação comprovada na data do episódio.


## Adendo de pesquisa em fontes oficiais — 04/11/2026

A rodada adicional localizou fontes públicas institucionais que substituem ou fortalecem registros anteriormente apoiados em imprensa ou páginas instáveis. Isso reduz algumas lacunas, sem transformar toda a camada em prova de filiação individual na data exata.

### Correções e reforços incorporados

| Agente | Fonte pública adicional | Conclusão permitida |
|---|---|---|
| **Amauri Ribeiro** | Perfil biográfico oficial da Alego: https://portal.al.go.leg.br/deputados/perfil-biografico/137 | A tabela da própria Assembleia registra UB na 20ª Legislatura (2023–2027), até 02/04/2026, e PL a partir de 03/04/2026. Isso confirma União Brasil no período de abril de 2024. A notícia de gabinete de 01/04/2024 continua sendo posterior ao episódio de março; não prova que ele tenha iniciado a pressão antes da decisão. |
| **Professor Rinaldo Modesto** | Página oficial da 12ª Legislatura da ALEMS: https://al.ms.gov.br/Paginas/783/12-legislatura | A lista oficial, com fonte declarada TRE-MS, registra Podemos para toda a legislatura de 01/02/2023 a 31/01/2027. Isso cobre março de 2024 e resolve a lacuna temporal anterior. Notícias da ALEMS de 06/02/2024 e 15/05/2024 também o identificam como Podemos: https://al.ms.gov.br/Noticias/140152/b-ordem-do-dia-b-dia-do-atleta-e-aprovado-e-vai-a-sancao e https://al.ms.gov.br/Noticias/139767/deputado-ressalta-importancia-da-criacao-do-sistema-estadual-de-esporte |
| **Marcos Rocha** | Procuradoria-Geral do Estado de Rondônia, publicação de 04/01/2021: https://pge.ro.gov.br/2021/01/04/estado-de-rondonia-completa-39-anos-concretizando-sonhos-acalentados-desde-1960/ | Fonte do próprio governo estadual, publicada logo após 2020, afirma expressamente que Marcos Rocha foi eleito pelo PSL em 2018 e assumiu em 01/01/2019. Em conjunto com a identificação contemporânea do partido em fontes eleitorais, sustenta o contexto PSL durante 2020. A formulação deve ser “eleito pelo PSL e governador no período”, não autoria partidária de ato administrativo. |
| **Thomaz Henrique** | Câmara Municipal de São José dos Campos, notícia oficial de 07/02/2024: https://www.camarasjc.sp.gov.br/noticias/8444/camara-entrega-titulo-de-cidada-joseense-a-ex-jogadora-de-volei-patricia-borges | A Câmara identifica Thomaz Henrique, em fevereiro de 2024, como coautor de decreto junto a vereadores “todos do PL”. O Diário Oficial de 07/06/2024 já localizado o registra no PL três dias após o episódio de 04/06. As duas fontes institucionais, uma anterior e outra posterior, dão forte sustentação ao PL no período, embora não sejam certidão individual de filiação emitida no dia 04/06. |
| **Lia Nogueira** | Perfil parlamentar oficial atual da ALEMS: https://al.ms.gov.br/Deputados/Visualizar/1045 | A página oficial confirma que se filiou ao PSDB em 2022. Substitui a página antiga de homologação/hmlalems.easynet.com.br. A página oficial da 12ª Legislatura também a lista no PSDB para 2023–2027. |
| **Clayton Silva** | Câmara Municipal de Limeira, publicação de 29/11/2019: https://www.limeira.sp.leg.br/noticias/view/2019-11-29_camara-cassa-mandato-do-vereador-clayton-silva-por-falta-de-decoro | A Câmara o identifica expressamente como vereador do PSC em novembro de 2019. A notícia local de 06/04/2020 registra a saída do PSC para o PTC durante a janela partidária. Fica resolvida a filiação no episódio de 2019, desde que a data do episódio seja anterior à troca. |
| **Zelinda Pastora** | Ficha eleitoral de 2024: https://www1.folha.uol.com.br/poder/eleicoes/candidatos/2024/sp/vereador/zelinda-pastora-250002194882.shtml; perfil da Câmara de Taubaté na legislatura 2025–2028: https://www.radartaubate.com.br/camara/vereadores/zelinda-pastora | As fontes confirmam PRD na eleição de 2024 e na composição da legislatura 2025–2028. A segunda página é reprodução/compilação de dados oficiais da Câmara, não substitui documento primário datado do pedido de 2025. Classificação continua como evidência contextual forte, não prova isolada da filiação na data exata. |

### Regra de evidência aplicada

A pesquisa confirma que é possível fechar diversas lacunas sem requerimentos: perfis oficiais por legislatura, listas partidárias cuja fonte declarada é o TRE, notícias institucionais datadas, diários oficiais e biografias parlamentares com histórico de mudanças partidárias. Para cada registro, a data de cobertura da fonte deve ser exibida. Não se deve confundir:

- partido pelo qual a pessoa foi eleita;
- partido listado pela casa legislativa durante determinada legislatura;
- filiação individual anotada no FILIA em data específica;
- partido do chefe do Executivo;
- autoria, iniciativa ou responsabilidade administrativa pelo ato.

O TSE informa que as relações públicas de filiados são divulgadas por períodos e que a certidão histórica individual é emitida pelo sistema de filiação; a regulamentação limita a divulgação pública de histórico de filiações canceladas. Fontes: https://www.tse.jus.br/servicos-eleitorais/servicos/carta-de-servicos-ao-eleitor ; https://www.tse.jus.br/legislacao/compilada/res/2019/resolucao-no-23-596-de-20-de-agosto-de-2019 ; https://www.tse.jus.br/comunicacao/noticias/2021/Abril/tse-conclui-verificacao-de-duplicidades-em-registros-de-filiacao-partidaria . Portanto, quando não há fonte pública datada suficiente, a saída correta é exibir o contexto e a data da evidência, ou declarar “não confirmado”, e não preencher a lacuna por inferência.

### Situação revista

- **Resolvidas por fonte institucional temporalmente adequada:** Rinaldo Modesto (legislatura 2023–2027); Amauri Ribeiro (registro oficial por legislatura e data de mudança em 2026); Lia Nogueira (filiação em 2022 e lista 2023–2027); Clayton Silva (PSC em novembro de 2019 e troca em abril de 2020); Marcos Rocha (PSL na eleição e início do mandato, com confirmação oficial publicada em janeiro de 2021).
- **Fortalecida por triangulação oficial anterior e posterior:** Thomaz Henrique (PL em fevereiro e junho de 2024).
- **Contextual, sem prova exata no dia do episódio:** Zelinda Pastora (PRD na eleição de 2024 e legislatura 2025–2028; falta registro oficial datado da filiação em 2025).
- **Demais nomes:** permanecem classificados conforme a matriz original, sem ampliar a força da evidência além do que as fontes permitem.

A camada continua não integrada ao site nesta rodada. A documentação já pode, porém, corrigir os status de evidência e as referências das pessoas acima sem importar capas ou código visual do PR #4.
