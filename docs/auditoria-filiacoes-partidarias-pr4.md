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
| **Zelinda Pastora** | Documento oficial assinado pela vereadora em 06/03/2025, publicado no sistema de documentos da Câmara: https://www.camarataubate.sp.gov.br/DownloadServlet?id=boylt7l7ectu0yrvyxisrv8e6rkna9rj ; boletins oficiais de 2025 também a identificam como PRD: https://www.camarataubate.sp.gov.br/DownloadServlet?id=4mnalbgumegbwvh3itij42tjkbxcwvd3 | **Resolvido para o período documentado de março de 2025 em diante.** O documento institucional datado e assinado identifica “Vereadora Zelinda Pastora (PRD)” em 06/03/2025. Como o episódio é descrito como ocorrido em 2025, isso comprova sua identificação partidária em data contemporânea, mas não permite retroagir automaticamente para uma eventual abordagem anterior a 06/03. Se o ato narrado ocorreu antes dessa data, registrar o limite. |

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


## Segundo adendo — novas fontes primárias e refinamento temporal (04/11/2026)

### Zelinda Pastora: fonte primária contemporânea localizada

Foi localizado documento primário no repositório oficial da Câmara Municipal de Taubaté: solicitação de uso do plenário para audiência pública, datada de **06/03/2025**, assinada digitalmente e identificada no próprio documento como **“Vereadora Zelinda Pastora (PRD)”**. Link direto: https://www.camarataubate.sp.gov.br/DownloadServlet?id=boylt7l7ectu0yrvyxisrv8e6rkna9rj . Boletim oficial da Câmara também lista Zelinda Pastora como PRD: https://www.camarataubate.sp.gov.br/DownloadServlet?id=4mnalbgumegbwvh3itij42tjkbxcwvd3 .

Isso substitui a necessidade de depender apenas de ficha eleitoral secundária ou agregador de mandatos: há documento público primário, datado e assinado, emitido pela própria vereadora. A conclusão segura é **PRD em 06/03/2025**. A reportagem posterior informa que a reclamação e o pedido ao secretário ocorreram “no ano passado”, mas não fixa o dia da abordagem. Portanto, se o episódio ocorreu antes de 06/03/2025, a fonte não prova retroativamente a filiação naquele dia; se ocorreu nessa data ou depois, a identificação partidária contemporânea está documentada. O registro deixa de ser “apenas contextual” e passa a “comprovado em 06/03/2025; extensão ao dia do episódio depende da data exata do pedido”.

### Thomaz Henrique: a mudança para PL foi anterior ao episódio

Uma reportagem local contemporânea de 07/03/2024 informa que Thomaz Henrique deixou o Novo no fim de 2023 e se filiou ao PL em **04/03/2024**, com declaração atribuída ao próprio vereador: https://portalaquivale.com.br/thomaz-henrique-filia-se-ao-pl . Outra reportagem local publicada em 05/03/2024 registra a filiação e reproduz declaração pública do vereador: https://www.meon.com.br/noticias/vale-do-paraiba-regiao/sjc-apos-deixar-o-novo-vereador-thomaz-henrique-entra-no-pl . O episódio investigado está datado de 04/06/2024; logo, as fontes situam a filiação três meses antes. O registro pode ser classificado como **PL confirmado antes do episódio por declaração pública contemporânea**, embora a fonte da data exata seja imprensa local, não certidão do FILIA.

### Anderson Farias: data explícita de filiação ao PSD

O diretório estadual do PSD publicou em 04/02/2022 que Anderson Farias assinou a ficha de filiação ao partido junto com o então prefeito Felício Ramuth, em evento realizado em 18/01/2022: https://psd-sp.org.br/noticias/prefeito-de-sao-jose-dos-campos-se-filia-ao-psd/ . A fonte partidária primária identifica expressamente a data do ato de filiação. Para episódios posteriores a 18/01/2022 e anteriores a eventual desfiliação, é evidência direta e datada, superior à ficha eleitoral de 2024 isolada. O texto não deve ser estendido para datas anteriores à filiação.

### Estado consolidado após a rodada

- **Zelinda Pastora:** documento primário da Câmara confirma PRD em 06/03/2025; a data exata da abordagem sobre o livro precisa ser comparada com esse marco antes de rotular “partido no dia do pedido”.
- **Thomaz Henrique:** filiação ao PL em 04/03/2024 documentada por declaração pública contemporânea; antecede o episódio de 04/06/2024.
- **Anderson Farias:** ficha de filiação ao PSD assinada em 18/01/2022, segundo publicação do próprio diretório estadual do partido.

A evidência partidária agora está mais bem fechada para esses três casos. A regra permanece: publicar a data da fonte e o intervalo que ela sustenta, sem afirmar continuidade além do que está demonstrado.


## Terceiro adendo — ampliação das fontes e cronologia partidária (04/11/2026)

Esta rodada aprofundou cinco agentes do Executivo e voltou ao episódio de Taubaté. A conclusão abaixo deve prevalecer sobre formulações mais cautelosas ou incompletas das tabelas anteriores.

### Eduardo Leite — PSDB no episódio de 2024; PSD desde 09/05/2025

O próprio PSD publicou que Leite assinou sua ficha de filiação em 09/05/2025: https://psd.org.br/noticias/governador-eduardo-leite-assina-sua-filiacao-ao-psd/ . A notícia informa que ele deixou o PSDB após 24 anos de filiação. Para episódio em 2024, o registro correto é **PSDB**; a mudança para PSD é posterior e tem data primária do próprio partido. Não usar o PSD para reclassificar eventos de 2024.

### Eduardo Riedel — PSDB no período 2022–2025; PP em agosto de 2025

O diretório do PSDB publicou perfil de Riedel como governador do partido: https://www.psdb.org.br/ms/conheca-nossos-representantes/governador/ . A página institucional partidária confirma o vínculo público durante o mandato iniciado em 2023. Em 2025, o Correio do Estado informou que a certidão de filiação disponibilizada no TSE registrava assinatura da ficha ao PP em 15/08/2025: https://correiodoestado.com.br/politica/eduardo-riedel-ja-se-filiou-ao-pp-e-deve-ter-cargo-na-executiva/453017/ . O registro de filiação ao PP ocorreu em agosto de 2025; para fatos de 2024, a classificação sustentada é **PSDB**. A fonte sobre a data exata da mudança cita certidão do TSE, mas o documento individual não foi anexado à base.

### Ratinho Júnior — PSD desde 10/03/2016

O próprio PSD publicou em 11/03/2016 que Ratinho Junior assinou sua ficha de filiação na quinta-feira, 10/03/2016: https://psd.org.br/noticias/17401/ . Isso é evidência partidária primária e datada de ingresso no PSD, muito anterior ao episódio de 2022–2025 em que aparece como governador. O TSE também o identificou como Ratinho Junior (PSD) ao noticiar sua reeleição em 02/10/2022: https://www.tse.jus.br/comunicacao/noticias/2022/Outubro/ratinho-junior-psd-se-reelege-governador-do-parana . Classificação: **PSD**, com marco de filiação em 10/03/2016 e confirmação eleitoral oficial em 2022. Não estender automaticamente para período posterior a eventual mudança não coberta pelas fontes.

### Ronaldo Caiado — DEM no mandato 2019–2022; União Brasil no mandato 2023–2026; PSD desde janeiro de 2026

A biografia oficial da Câmara dos Deputados discrimina os mandatos externos: governador de Goiás pelo DEM de 2019 a 2023 e pelo União Brasil de 2023 a 2026: https://www.camara.leg.br/deputados/74813/biografia . A página oficial do TSE explica que União Brasil resultou da fusão de DEM e PSL, deferida em 08/02/2022: https://www.tse.jus.br/partidos/partidos-registrados-no-tse/registrados-no-tse . Em janeiro de 2026, Caiado deixou o União Brasil e se filiou ao PSD; fonte contemporânea: https://www1.folha.uol.com.br/poder/2026/01/caiado-deixa-uniao-brasil-e-se-filia-ao-psd-de-kassab.shtml . Portanto, a etiqueta deve ser **DEM** para fatos anteriores à eficácia da fusão e **União Brasil** para o período posterior até janeiro de 2026; não usar PSD em episódios de 2024/2025. A biografia parlamentar é fonte institucional para os mandatos, e a fusão partidária é ato formal registrado no TSE.

### Jorginho Mello — PL em 2020 e no governo 2023–2027

A página da Memória Política da Alesc registra a trajetória partidária e afirma que Jorginho Mello ingressou no PL; registra também o mandato de governador de 01/02/2023 a 31/01/2027 pelo PL: https://memoriapolitica.alesc.sc.gov.br/biografia/514-Jorginho_Mello . A página registra ainda que em 30/10/2020 ele foi escolhido vice-líder do Governo no Congresso, após a informação de ingresso no PL. O TSE o identifica como candidato eleito pelo PL em 30/10/2022: https://www.tse.jus.br/comunicacao/noticias/2022/Outubro/jorginho-mello-pl-e-eleito-governador-de-santa-catarina . Uma fonte eleitoral contemporânea de 2022 confirma a legenda, mas a data exata de ingresso no PL não está explicitada na biografia oficial. Para episódios de 2023 em diante, **PL confirmado**; para 2020, manter como evidência institucional contextual forte, sem atribuir dia de filiação.

### Zelinda Pastora — data do discurso não é data do pedido original

A reportagem de OVALE/Sampi informa que Zelinda fez a declaração na tribuna em **03/03/2026** e que o requerimento de Isaac do Carmo e Talita foi aprovado em 10/03/2026. Na mesma fala, ela disse ter recebido reclamação de uma mãe “ainda no ano passado” e ter pedido ao secretário a retirada do livro: https://sampi.net.br/ovale/noticias/2972973/sessao-extra/2026/04/livro-sobre-menina-com-duas-maes-e-retirado-de-escolas-em-taubate . A matéria posterior de julho repete o relato, sem indicar data exata da conversa com o secretário: https://sampi.net.br/ovale/noticias/2991910/vale-do-paraiba/2026/07/taubate-escolas-voltarao-a-usar-livro-sobre-menina-com-duas-maes . Assim, o que se pode datar é: **declaração pública em 03/03/2026; pedido informal ao secretário em algum momento de 2025, sem data identificada**. O documento oficial da Câmara de 06/03/2025 a identifica como PRD (adendo anterior). A fonte é contemporânea ao ano do pedido, mas não prova se a conversa ocorreu antes ou depois de 06/03/2025. Status: **PRD comprovado em 06/03/2025; filiação no dia da conversa informal de 2025 ainda não fechada**. Não atribuir ao episódio uma data inventada.

### Resumo dos cinco agentes do Executivo

| Pessoa | Cronologia sustentada | Aplicação editorial |
|---|---|---|
| Eduardo Leite | PSDB até 08/05/2025; PSD a partir de 09/05/2025 | PSDB em 2024; PSD somente após filiação formal |
| Eduardo Riedel | PSDB no mandato iniciado em 2023; ficha PP assinada em 15/08/2025 | PSDB em 2024; PP após agosto de 2025 |
| Ratinho Júnior | PSD desde 10/03/2016; TSE confirma PSD em 2022 | PSD nos episódios cobertos por essa cronologia |
| Ronaldo Caiado | DEM no mandato 2019–2022; União Brasil no mandato 2023–2026; PSD desde janeiro de 2026 | DEM antes da fusão; União Brasil em 2024/2025 |
| Jorginho Mello | PL antes de 30/10/2020; TSE confirma PL em 2022 e mandato estadual 2023–2027 | PL em 2023 em diante; para 2020, evidência forte sem data exata de ingresso |

### Limites e próximos passos documentais

1. Não foi localizada a data precisa da conversa informal de Zelinda Pastora com o secretário; a Câmara documenta a declaração pública em 03/03/2026, não a conversa de 2025.
2. A certidão individual de Riedel citada pelo Correio do Estado não foi baixada/anexada; a data de assinatura é reproduzida com atribuição explícita à certidão TSE.
3. A data exata de ingresso de Jorginho Mello no PL ainda precisa de registro datado; a fonte oficial da Alesc documenta a trajetória e o exercício de liderança em 2020, e o TSE confirma a candidatura PL em 2022.
4. As filiações partidárias e cargos de governo são dados de contexto; não comprovam autoria, ordem, motivação ou execução dos atos de retirada/recolhimento de livros.
