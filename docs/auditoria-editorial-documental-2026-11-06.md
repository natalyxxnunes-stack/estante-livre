# Estante Livre — auditoria editorial e documental
**Data da apuração:** 6 de novembro de 2026  
**Base examinada:** branch `main` do repositório `natalyxxnunes-stack/estante-livre`.  
**Escopo:** inspeção estática dos arquivos e dados acessíveis pelo GitHub; pesquisa documental pública complementar. Não é laudo de acessibilidade nem teste de produção.

## 1. Estado da base na branch main

- `assets/dados.js` contém 34 registros, de EL-001 a EL-034.
- 15 estão marcados como `verificado:"Sim"`; 19 como `"Parcialmente"`.
- 30 registros têm campo `pendencia`.
- A página `pendencias.html` informa 13 atos com lacuna aberta entre 17 atos.
- `ATUALIZADO` está em 2026-10-30.
- A divergência histórica 44/34 não se confirma na base atual: 34 é a contagem do arquivo da branch main inspecionada.

A regra de verificação em `assets/comum.js` exige selo editorial "Sim" e pelo menos duas referências cadastradas. O próprio comentário do código ressalva que a quantidade de URLs não prova independência das fontes.

## 2. Achado prioritário — Rondônia (RO-2020)

A base mantém os registros EL-015 a EL-024. Para a lista de Rondônia, há sete obras individualizadas, um agrupamento de 19 títulos de Rubem Fonseca, um agrupamento de obras de Rubem Alves sem relação individualizada e um agrupamento residual ("Demais títulos da lista de Rondônia").

A pesquisa encontrou:
- Reportagem contemporânea do Diario de Pernambuco, 6 fev. 2020, que confirma 43 títulos, reproduz a observação sobre todos os livros de Rubem Alves e informa que os documentos foram confirmados como oficiais: https://www.diariodepernambuco.com.br/noticia/brasil/2020/02/governo-de-ro-manda-recolher-macunaima-e-mais-42-livros-e-depois-rec.html
- A Folha afirma que a lista tinha 43 títulos e publica a relação em sua página: https://www1.folha.uol.com.br/amp/educacao/2020/02/governo-de-ro-manda-recolher-macunaima-e-mais-42-livros-e-depois-recua.shtml. A relação visível na página contém 42 entradas enumeráveis.
- Artigo acadêmico de 2024 reproduz a tabela documental: https://revistas.unicentro.br/index.php/revista_interfaces/article/viewFile/7833/5778. A tabela reproduzida e a cópia PDF hospedada por terceiros mostram 43 linhas, mas repetem “O Seminarista”.
- Cópia pública do memorando e da relação, com identificadores de autenticação SEI impressos no documento, está disponível em hospedagem de terceiro: https://kbook.com.br/wp-content/uploads/2020/02/livros-inadequados.pdf

**Conclusão:** a lista de títulos não está mais inteiramente ausente da documentação pública, mas a contagem não está reconciliada: a Folha anuncia 43 títulos e a lista visível contém 42 entradas; a reprodução acadêmica/PDF apresenta 43 linhas, com “O Seminarista” repetido. Antes de desmembrar os agrupamentos, é necessário identificar a 43ª entrada ou confirmar se a diferença decorre de duplicidade, além de normalizar grafias/títulos e separar o conjunto não enumerado de Rubem Alves. Não transformar automaticamente 43 linhas em 43 obras únicas. A distinção entre itens físicos, entradas da lista e obras distintas precisa ficar explícita. O processo SEI integral e a sindicância administrativa estadual continuam sem comprovação nesta apuração.

## 3. Palmares — esclarecimento parcial da contagem

Foi localizado o Relatório de Gestão 2021 da Fundação Cultural Palmares, publicado no portal oficial. Na seção 3.1.2, páginas impressas 70–71, o documento informa que os 9.565 itens do acervo eram compostos por 8.035 títulos diferentes e 1.530 folders e catálogos:
https://www.gov.br/palmares/pt-br/midias/arquivos-menu-acesso-a-informacao/resultados-gerados2021_ok.pdf

Isso confirma o número-base de 9.565 na fonte institucional e permite tratar 9.546, publicado pelo Jornal da Unesp, como divergência de reportagem sem explicação localizada. A pendência EL-025 foi refinada para separar a versão-base de 2021 das versões posteriores do Inventário Bibliográfico (9.665 em 2023 e 9.696 em 2024), além da identificação dos 5.165 itens classificados e da comprovação de seu destino final.

O documento oficial que sustenta a composição do total não deve ser confundido com o relatório temático "Retrato do Acervo":
https://www.gov.br/palmares/pt-br/midias/arquivos-menu-acesso-a-informacao/rel-gestao-2021-versao-final.pdf/view

## 4. São José dos Campos — atualização judicial

A cobertura de 28 jul. 2026 reproduz informações de sentença de 19 páginas, datada de 20 jul. 2026: ordem de restituição e redisponibilização do livro às salas de leitura e bibliotecas, prazo de cinco dias contado da intimação, multa diária de R$ 500 (limite inicial de R$ 50 mil) e proibição de novas restrições político-ideológicas sem procedimento formal e motivação técnico-pedagógica. A mesma reportagem informa que o cumprimento ainda não havia sido confirmado e que o vereador anunciara recurso:
https://noticias.uol.com.br/ultimas-noticias/agencia-estado/2026/07/28/juiza-ve-censura-e-manda-devolver-livro-com-marielle-as-escolas-de-sao-jose-dos-campos.htm

A classificação "Revertido" pode descrever a reversão judicial da medida, mas não deve ser interpretada como prova de que os exemplares já foram devolvidos fisicamente. A pendência de cumprimento e recurso continua pertinente.

## 5. Mato Grosso do Sul — devolução de O avesso da pele

A reportagem de 23 abr. 2024 informa que a Secretaria de Educação anunciou o processo de devolução, mas que apenas 75 das 349 escolas estaduais haviam recebido o livro antes do recolhimento e a pasta não esclareceu se as demais também o receberiam:
https://www.campograndenews.com.br/educacao-e-tecnologia/governo-devolve-livro-polemico-as-escolas-estaduais

A formulação atual da pendência sobre confirmação do retorno às 75 escolas deve ser mantida. "Em processo de devolução" não comprova a redistribuição integral.

## 6. Santa Catarina — episódio de novembro de 2023

A cobertura contemporânea identifica nove títulos e informa que o ofício foi assinado por Waldemar Ronssem Júnior e Anelise dos Santos de Medeiros. Uma reportagem do SCC10 atribui o encaminhamento à Coordenadoria Regional de Educação de Florianópolis:
https://scc10.com.br/cotidiano/educacao/governo-de-sc-manda-recolher-livros-de-escolas-publicas-entenda/

A pendência sobre a coordenadoria deve ser conferida contra o campo do ato e a fonte já cadastrada; não atribuir responsabilidade individual além do que os documentos sustentam.

## 7. Taubaté — Pipoca e Picolé

A reportagem de 10 abr. 2026 reproduz a resposta da prefeitura à Câmara e informa que os exemplares estavam na Secretaria para análise técnica:
https://sampi.net.br/ovale/noticias/2972973/sessao-extra/2026/04/livro-sobre-menina-com-duas-maes-e-retirado-de-escolas-em-taubate

O registro atual também cita informação posterior, de 14 jul. 2026, sobre retomada do uso pedagógico em turmas consideradas adequadas. A decisão administrativa de retomada não prova, sozinha, a devolução física de todos os exemplares às escolas. Manter essa distinção.

## 8. Auditoria técnica e acessibilidade — limites da inspeção

- `index.html` contém title, meta description, canonical, Open Graph, Twitter Card, JSON-LD, link de salto e landmarks.
- O repositório contém `robots.txt`, `sitemap.xml`, `llms.txt`, CSV e JSON.
- `scripts/gerar.js` existe e valida campos obrigatórios, listas fechadas, IDs, referências, capas, vínculos entre obras/atos/agentes e lacunas antes de gerar as páginas estáticas e os dados abertos.
- O documento `docs/auditoria-acessibilidade-mobile.md` foi removido da branch main em commit de 1 nov. 2026 ("Move documentação de acessibilidade para a branch de revisão"). O arquivo `scripts/acessibilidade.js` não foi encontrado na branch main examinada.
- Não foram comprovados nesta sessão testes manuais de teclado, leitor de tela, contraste, zoom 200%/400%, dispositivos reais ou navegação cross-browser.
- A tentativa de clonar o repositório para executar `node scripts/gerar.js` falhou por indisponibilidade de resolução de `github.com` no ambiente. Portanto, o gerador não foi executado manualmente nesta auditoria.
- Após as alterações documentais e de dados, o GitHub reportou o status de implantação Vercel como `success` para o commit `a27482bb1247ce63f0c0d928acb924740061dad6`.
- A ferramenta de inspeção web não conseguiu abrir as páginas públicas do domínio Vercel nesta sessão. O status de implantação é positivo, mas não substitui teste funcional de navegação, formulários, filtros, mobile e acessibilidade.

**Conclusão técnica:** a presença de boas práticas estáticas não equivale a certificação WCAG 2.2 AA. A acessibilidade manual e a validação real da produção permanecem não testadas.

## 9. Correção editorial aplicada nesta sessão

Em `index.html`, foram corrigidos dois trechos da página inicial:
- "Três atos" foi substituído por "Três episódios", pois a frase reunia episódios/ondas de censura, não três atos administrativos.
- A afirmação de que o catálogo conta um registro por título foi qualificada: a página agora informa que parte da lista de Rondônia permanece agrupada e que o total de registros não equivale ao número de obras atingidas.

Commit da correção: https://github.com/natalyxxnunes-stack/estante-livre/commit/7b92979742d2f23f700ea37196adaf05fe67da07

## 10. Reconciliação documental de Rondônia — atualização

A pendência de localizar o Adendo ID 10053329 foi parcialmente resolvida: foi encontrada uma cópia pública em PDF, hospedada por terceiro, que reproduz a relação de 43 linhas numeradas e o Memorando-Circular nº 4/2020/SEDUC-DGE. O documento indica o processo SEI nº 0029.051300/2020-91 e os identificadores SEI 10040389/CRC F6F331F8. A cópia não equivale à obtenção do processo integral no portal oficial do SEI:
https://questoesrelevantes.wordpress.com/wp-content/uploads/2020/02/rondonia-livros-proibidos.pdf

A leitura do PDF resolve a divergência de contagem:
- 43 linhas numeradas;
- 42 títulos distintos;
- “O Seminarista” aparece duas vezes, nas linhas 31 e 34;
- 19 linhas são atribuídas a Rubem Fonseca, correspondentes a 18 títulos distintos;
- a observação “Todos os livros do Rubem Alves devem ser recolhidos” aparece fora da tabela e não integra as 43 linhas.

A linha 1 aparece truncada na extração textual do PDF como “O Melhor De”; a Folha identifica a obra como “O Melhor de Caio Fernando Abreu — Contos e Crônicas”. A transcrição da Folha contém 42 entradas visíveis porque não reproduz a segunda ocorrência de “O Seminarista”; a cópia do PDF mostra a duplicidade:
https://www1.folha.uol.com.br/amp/educacao/2020/02/governo-de-ro-manda-recolher-macunaima-e-mais-42-livros-e-depois-recua.shtml

O registro EL-017 foi corrigido para “Os Sertões da Luta”, conforme o título da relação. Os agrupamentos de Rubem Fonseca e do Adendo foram renomeados para explicitar a diferença entre itens e obras distintas. A fonte do PDF foi vinculada aos registros de Rondônia.

**Reconciliação dos títulos concluída:** os 42 títulos distintos estão todos representados: sete em registros individuais (EL-015 a EL-021), 18 títulos distintos de Rubem Fonseca em conjunto documental (EL-022) e 17 títulos restantes em conjunto documental (EL-024). A duplicidade de O Seminarista está identificada. A instrução genérica sobre todos os livros de Rubem Alves permanece separada em EL-023 porque não há inventário individualizado nas fontes abertas consultadas. Os agrupamentos estão marcados como conjuntos; criar uma ficha por título seria melhoria de navegação, não condição para a contagem documental correta.

**O que permanece aberto:** obtenção do processo SEI integral, resultado da sindicância estadual, recomendação integral do MP-RO e identificação dos livros de Rubem Alves abrangidos pela ordem genérica. A regeneração integral das páginas estáticas foi executada pelo GitHub Actions em 6/11/2026 (run 42257619328), com validação e commit automático concluídos com sucesso.

## 11. Validação dos dados e implantação — atualização

- A base `assets/dados.js` foi analisada por execução JavaScript: sintaxe válida, 34 registros, 29 fichas de obra, 17 atos e 83 fontes.
- Foi reproduzida a lógica de validação de campos obrigatórios, IDs, datas, taxonomias, referências, vínculos caso/ato/obra, papéis de agentes e lacunas. Resultado: zero erros.
- Os dados abertos JSON e CSV foram atualizados para 6 de novembro de 2026 e conferidos com 34 registros cada.
- O GitHub Actions gerou as páginas e os dados abertos no commit `e27f326`. O Vercel, porém, marcou esse commit e o commit subsequente `ac5c199` como `failure`, com a mensagem `Deployment rate limited — retry in 24 hours`; portanto, a versão atualizada não está confirmada em produção.
- Foi adicionado `.github/workflows/regenerate-site.yml` para executar `node scripts/gerar.js` e versionar as páginas geradas após alterações relevantes. A execução do GitHub Actions foi confirmada: run 42257619328, job `regenerate`, com sucesso nas etapas de checkout, configuração do Node, validação/regeneração e commit dos arquivos gerados.

**Limite restante:** o script oficial foi executado com sucesso no GitHub Actions e os arquivos gerados foram versionados. O deploy Vercel está bloqueado por limite de builds por 24 horas, e não foi possível confirmar a versão nova em produção nem realizar teste funcional completo no navegador. A confirmação do job de geração não equivale à confirmação de publicação.

## 12. Palmares — atualização documental

O Relatório de Gestão 2021 da própria Fundação Cultural Palmares, seção 3.1.2, páginas impressas 70–71, informa um total agregado de 9.565 registros no acervo, composto por 8.035 títulos diferentes e 1.530 folders e catálogos; portanto, 9.565 não é a quantidade de títulos distintos: https://www.gov.br/palmares/pt-br/midias/arquivos-menu-acesso-a-informacao/resultados-gerados2021_ok.pdf

Assim, para o número-base de 2021, a fonte institucional confirma 9.565. O número 9.546 publicado pelo Jornal da Unesp é uma divergência de reportagem, sem explicação localizada.

A Fundação publicou versões posteriores do Inventário Bibliográfico com 9.665 títulos (04/09/2023) e 9.696 títulos (08/08/2024). Ambas informam que a compilação foi realizada entre julho e outubro de 2021. Não foi localizada nota metodológica que explique a diferença entre essas versões e o Relatório de Gestão. Os números não devem ser tratados como intercambiáveis.

O número 5.165 (54%) aparece no relatório “Retrato do Acervo” como classificação feita pela gestão da época. Não foi localizada lista pública individualizada que permita identificar todos esses itens, nem prova de que tenham sido efetivamente descartados ou doados.

A ação judicial sobre cerca de 300 livros permanece como registro próprio (EL-026), sem afirmar que esse conjunto seja mutuamente exclusivo dos 5.165. A página oficial da FCP sobre a Política de Gestão do Acervo registra a Ação Popular nº 5006660-67.2021.4.02.5117 e reproduz decisão que impedia a movimentação do acervo, exceto consulta local. Em janeiro de 2022, reportagem sobre decisão da 2ª Vara Federal de São Gonçalo informa que o ato de doação de parte do acervo foi anulado e que a Fundação não recorreria.

Fontes: https://www.gov.br/participamaisbrasil/politica-de-formacao-desenvolvimento-e-gestao-do-acervo-bibliografico-da-biblioteca-da-fundacao-cultural-palmares-fcp ; https://www.gov.br/palmares/pt-br/centrais-de-conteudo/publicacoes/ListadeLivrosAtualizada04.09.23.pdf ; https://www.gov.br/palmares/pt-br/centrais-de-conteudo/publicacoes/lista-de-livros-atualizada-8-8-2024-1.pdf ; https://www.gov.br/palmares/pt-br/midias/arquivos-menu-acesso-a-informacao/resultados-gerados2021_ok.pdf ; https://www.gazetadopovo.com.br/vida-e-cidadania/breves/justica-proibe-fundacao-palmares-doar-livros-socialismo-comunismo-acervo/

## 13. Critério de publicação

A base apresenta metodologia, fontes, marcação de verificação parcial e página pública de lacunas. Isso permite publicar material incompleto quando a incompletude está claramente sinalizada. A individualização em 42 fichas de caso não é necessária para a contagem documental: os agrupamentos EL-022 e EL-024 estão identificados como conjuntos e transcrevem os títulos distintos; EL-023 registra separadamente a orientação genérica sobre Rubem Alves. A geração está validada pelo GitHub Actions, mas a publicação em produção e a checagem funcional seguem pendentes por bloqueio temporário do Vercel.

---
Este documento registra achados e limites de verificação. Não substitui a atualização dos registros, das páginas geradas, do CSV/JSON e do sitemap.


## Atualização documental — Taubaté (EL-032), 06/11/2026

A cobertura de OVALE de 14/07/2026 reproduz a posição da Prefeitura de que a análise da Coordenação de Área e da Equipe de Práticas Pedagógicas da Educação Infantil foi favorável à utilização de *Pipoca e Picolé*, condicionada a planejamento pedagógico adequado, respeito à faixa etária e mediação docente qualificada. O título permaneceria no plano de ensino das turmas consideradas adequadas, com acompanhamento da Coordenação de Área. Isso permite atualizar o desfecho de EL-032: a análise técnica foi favorável e a retomada foi anunciada. Não permite afirmar que os exemplares tenham sido fisicamente redistribuídos nem que o livro tenha voltado efetivamente às salas de aula.

A reportagem de 10/04/2026 reproduz a resposta municipal segundo a qual os exemplares disponíveis foram encaminhados à Secretaria para análise, enquanto grande parte dos livros do programa já havia sido distribuída aos alunos. A mesma cobertura informa a compra de 3.280 kits para alunos e 116 para professores, por R$ 1,216 milhão. Esses números são de kits, não de exemplares de *Pipoca e Picolé*, e não devem ser convertidos em tiragem do título.

**Pendência residual:** obter o parecer técnico integral e documentos administrativos de devolução/redistribuição por unidade escolar; confirmar quais turmas receberam o livro e o uso efetivo em sala. O requerimento parlamentar e a resposta municipal são parcialmente conhecidos pela reprodução jornalística, mas seus documentos integrais ainda não foram localizados nas fontes abertas consultadas. Fontes registradas: ovale-tau-abr10, ovale-tau-jul14.


## Atualização documental — Funap / Remição em Rede (EL-033), 06/11/2026

A Folha de 14/02/2020 informa que, em 13/02, a Funap determinou a inclusão da lista inicialmente indicada pelo projeto e anunciou equipe multidisciplinar com Funap, SAP e Mulheres do Brasil. O mesmo texto esclarece que, em dezembro de 2019, as organizadoras haviam solicitado a devolução dos livros doados e que a Funap respondeu comunicando a restituição. Assim, a reversão da decisão sobre a lista não comprova que os exemplares físicos tenham sido enviados às unidades prisionais. Não foi localizado comprovante de nova doação ou remessa posterior.

A divergência quantitativa permanece sem explicação: a Folha registra 240 exemplares doados de 12 títulos; Benaglia e Heller, em artigo acadêmico de 2022, referem-se a 228 livros cuja circulação teria sido impedida. A diferença de 12 não deve ser interpretada como entrega, retenção parcial ou erro de fonte sem documentação que a esclareça. A lista dos 12 títulos está publicada na reportagem da Folha. As três obras que teriam motivado questionamentos internos não foram identificadas nas fontes abertas consultadas.

**Pendência residual:** mensagem original de Reginaldo Caetano da Silva; ata da reunião de 13/02/2020; nota integral da Funap; identificação das três obras; comprovante de eventual nova doação/envio; explicação documental da diferença 240/228. Fontes: folha-funap-11fev, folha-funap-14fev, benaglia-heller-2022, bdf-funap.


## Atualização documental — Mato Grosso do Sul (EL-004), 06/11/2026

A reportagem do Campo Grande News de 23/04/2024 informa que, após análise técnica, a SED anunciou que *O avesso da pele* estava em processo de devolução às bibliotecas das unidades escolares, com orientações pedagógicas de uso. A própria reportagem ressalva que a Secretaria não informou se a devolução se limitaria às 75 escolas que já haviam recebido o livro ou se alcançaria as demais 274 unidades, nem detalhou as orientações aos professores. Portanto, o desfecho de reversão está confirmado; o alcance material da redistribuição permanece sem comprovação pública. Fonte: cgn-volta.


## Atualização documental — Conselheiro Lafaiete / O menino marrom (EL-027), 06/11/2026

Foi localizada a sentença de mérito da Ação Popular nº 5006658-14.2024.8.13.0183, assinada em 02/12/2024 pelo juiz Espagner Wallysen Vaz Leite, da 1ª Vara Cível de Conselheiro Lafaiete. O juízo julgou procedentes os pedidos, anulou o ato administrativo da Secretaria Municipal de Educação que suspendera os trabalhos pedagógicos com *O Menino Marrom* e confirmou a tutela antecipada, tornando-a definitiva. A sentença registra ainda que o Município informou ter retomado as atividades normais com a obra após reunião de 21/06/2024 e envio de e-mail às unidades escolares em 28/06/2024. O Município alegou perda superveniente do objeto, mas o juízo afastou a preliminar porque o ato administrativo não havia sido anulado administrativamente.

A cópia integral foi localizada em reprodução pública no Jusbrasil, identificada como sentença do TJMG e com assinatura eletrônica em 02/12/2024: https://www.jusbrasil.com.br/jurisprudencia/tj-mg/2904317608/inteiro-teor-2904317613. A sentença melhora substancialmente o registro: já não é correto descrevê-lo apenas como suspensão cancelada por liminar; houve sentença de mérito anulando o ato e confirmando a tutela. O cumprimento material das atividades também foi informado pelo próprio Município no processo, embora a prova disponível seja a reprodução da sentença que resume a manifestação municipal.

**Pendências residuais:** a cópia consultada não contém certidão de trânsito em julgado; a decisão identifica a Secretaria como autora do ato, mas não individualiza quem o assinou. A sentença registra a retomada pedagógica em 28/06/2024. Não se deve confundir a retomada dos trabalhos com comprovação de recolhimento físico ou posterior redistribuição geral de exemplares, pois a controvérsia judicial tratou da suspensão de atividades pedagógicas.


## Atualização documental — Londrina / A mamãe vai ter um bebê (EL-030), 06/11/2026

A apuração anterior precisava de correção: a retirada do exemplar encontrado em um CMEI estava, de fato, confirmada em fonte contemporânea. Em 26/11/2024, a Secretaria Municipal de Educação informou à RIC e à Tarobá que o livro não havia sido adquirido nem distribuído pelo Município e não integrava o acervo distribuído às unidades. A pasta considerou provável que tivesse chegado por doação direta ou sido levado por aluno e esquecido na escola. A nota afirmou que o exemplar foi imediatamente retirado do acervo e que seria feita revisão completa do material disponível naquela unidade. Fontes: https://ric.com.br/politica/livro-detalha-ato-sexual-encontrado-cmei-londrina/ e https://taroba.com.br/noticias/cidade/livro-infantil-com-suposto-conteudo-erotico-e-encontrado-em-cmei-no-jardim-leonor/amp.

A informação de que a Secretaria ainda não havia respondido oficialmente ao requerimento parlamentar, publicada em 27/11/2024, não contradiz a nota da pasta sobre a retirada do exemplar encontrado. São coisas distintas: a resposta formal ao requerimento específico não foi localizada; a retirada imediata daquele exemplar foi confirmada pela nota reproduzida por dois veículos locais. Não há prova de recolhimento geral em outras unidades, de que existissem outros exemplares na rede, nem de devolução posterior do exemplar retirado.

Também foi localizado o documento oficial do PL 79/2024: Processo 148224, Documento 208880, assinado eletronicamente por Jéssica Ramos Moreno em 09/04/2024. Portanto, o projeto antecede em mais de sete meses o episódio do CMEI em novembro de 2024; não deve ser descrito como reação legislativa posterior ao caso. O texto propõe proibir uso e distribuição de livros com conteúdo erótico nas escolas municipais, mas ressalva a apresentação científico-biológica sobre o sistema reprodutivo, respeitada a idade apropriada. Documento: https://www1.cml.pr.gov.br/projetos/2024/PL000792024.pdf. A lei posterior é a Lei Municipal nº 13.930/2025, publicada em 21/03/2025.

**Pendências residuais:** cópia integral do requerimento parlamentar específico e da nota oficial da Secretaria; relatório ou registro da revisão do acervo do CMEI; confirmação de eventual existência de outros exemplares e de qualquer retirada em outras unidades. O cadastro foi corrigido para registrar execução parcial comprovada, sem extrapolar para recolhimento geral.

**Correção de fonte:** a URL antes cadastrada como fonte Folha de Londrina — “Educação vai recolher livro infantil com conteúdo sensível” — refere-se a outro título, *O bebê vem com a cegonha?!?*, e a outro episódio de março de 2026. Ela não serve como fonte de EL-030 e foi removida da lista de fontes desse registro. Não se deve confundir as duas obras ou os dois episódios.


## EL-028 — São José dos Campos — atualização de 06/11/2026

A sentença de mérito de 20/07/2026, proferida pela Vara da Infância e Juventude, determinou que a Prefeitura restitua e redisponibilize *Meninas sonhadoras, mulheres cientistas* nas salas de leitura e bibliotecas das unidades em que integrava o acervo, para consulta, empréstimo e uso pedagógico no Ensino Fundamental II. A sentença também proibiu restrições político-ideológicas sem procedimento formal e motivação técnico-pedagógica idônea, fixou multa diária de R$ 500 (limite inicial de R$ 50 mil) e negou indenização por dano moral coletivo. OVALE esclareceu que a liminar de 2024 havia sido suspensa pelo TJSP após recurso municipal e que a sentença de 2026 veio após instrução e audiência. UOL e OVALE informaram que a Prefeitura ainda não havia confirmado o cumprimento da nova ordem. Não foi localizada comprovação posterior de redistribuição, certidão de intimação, trânsito em julgado ou protocolo de recurso. Declaração do vereador de que recorreria não comprova recurso interposto.

**Pendências:** comprovar a redisponibilização por unidade escolar; obter cópia integral da sentença e certidão de intimação; verificar eventual recurso e trânsito em julgado. A íntegra da sentença não foi localizada em fonte pública, e o processo tramita sob segredo de Justiça.

Fontes: https://sampi.net.br/ovale/noticias/2994720/vale-do-paraiba/2026/07/sjc-justica-determina-volta-de-obra-que-cita-marielle-as-escolas ; https://noticias.uol.com.br/cotidiano/ultimas-noticias/2026/07/29/juiza-manda-prefeitura-devolver-as-escolas-livro-com-marielle-em-sao-jose.ghtm ; https://www1.folha.uol.com.br/ciencia/2026/07/justica-determina-volta-de-livro-que-retrata-marielle-a-escolas-em-sao-jose-dos-campos.shtml


## EL-029 — UniRV / Eu receberia as piores notícias de seus lindos lábios — 06/11/2026

Foi localizada uma publicação institucional anterior à controvérsia: em 12/04/2023, a própria UniRV divulgou a lista de obras do vestibular de Medicina e incluiu expressamente o romance de Marçal Aquino. A nota oficial de 26/04, publicada em 27/04, afirma que a Coordenação do Vestibular decidiu excluí-lo após tomar conhecimento do conteúdo e da polêmica, embora a indicação original tivesse sido feita por banca de professores. A nova fonte confirma a inclusão original e fortalece a cronologia; não resolve a lacuna de identificação nominal dos integrantes da Coordenação ou do agente que formalizou a exclusão. Fonte: https://unirv.edu.br/ver_noticias.php?codabr=18320.


## EL-005 — Santa Catarina / O avesso da pele — atualização de 06/11/2026

Localizado documento primário oficial antes ausente: Informação nº 304/2024/SED/DIEN, datada de 23/04/2024, no Processo Digital SCC 4288/2024, em resposta à IND/0154/2024 do deputado Sérgio Motta. A área técnica da Secretaria de Estado da Educação afirma que exemplares de *O avesso da pele* foram encontrados em algumas bibliotecas escolares estaduais e registra expressamente: “A Secretaria de Estado da Educação orientou que as escolas recolhessem as obras das bibliotecas escolares” e realizassem análise pedagógica do título e de todo o acervo, considerando o projeto político-pedagógico e as faixas etárias. O documento também esclarece que a obra não integra o Currículo Base do Território Catarinense. A Informação foi assinada digitalmente por Márcia Loch, Diretora de Ensino, e Jocelete Isaltina da Silveira dos Santos, Gerente do Ensino Médio e Profissional, em 27 e 29/04/2024. O Secretário de Estado da Educação Aristides Cimadon encaminhou a manifestação técnica por meio do Ofício/Gabs nº 1017/2024, de 28/05/2024, assinado digitalmente em 29/05. A resposta seguiu à ALESC por meio do Ofício nº 1064/SCC-DIAL-GEAPI, de 03/06/2024, recebido em 04/06/2024.

O documento confirma a orientação institucional de recolhimento para análise, mas não autoriza afirmar que todos os exemplares foram recolhidos, nem identifica quais unidades executaram a orientação, por quanto tempo os exemplares ficaram indisponíveis, qual foi o resultado da análise ou se/para onde foram devolvidos. A redistribuição mencionada pela Gazeta do Povo para CEDUPs e EJA diz respeito a livros em geral e não deve ser atribuída especificamente a este título sem comprovação. A ficha EL-005 foi corrigida: saiu a pendência de localizar segunda fonte/documento e entraram as lacunas efetivas de execução, parecer e destino dos exemplares.

Fonte primária: https://portalelegis.alesc.sc.gov.br/documentos/5aogB/download (Informação nº 304/2024/SED/DIEN, Ofício/Gabs nº 1017/2024 e Ofício nº 1064/SCC-DIAL-GEAPI). Tramitação da indicação: https://portalelegis.alesc.sc.gov.br/proposicoes/KXWdD/tramitacoes.


## EL-006 a EL-014 — Santa Catarina / ofício circular de 07/11/2023 — atualização de 06/11/2026

A coordenadoria regional foi identificada como a Coordenadoria Regional de Educação de Florianópolis por cruzamento de atos de nomeação publicados no Diário Oficial do Estado. O Ato nº 638/2023, publicado em 10/02/2023, designou Waldemar Ronssem Júnior para a função de Supervisor Regional de Educação da CRE de Florianópolis (DOE nº 21.959, p. 3). O Ato nº 2638/2023, publicado em 16/08/2023, designou Anelise dos Santos de Medeiros para a função de Integrador Regional de Educação da mesma CRE (DOE nº 22.083, p. 2). Ambos ocupavam as funções em 07/11/2023, data do ofício circular que, segundo as reportagens já cadastradas, determinou a retirada de nove obras de circulação e o armazenamento em local inacessível à comunidade escolar. Fontes oficiais: https://portal.doe.sea.sc.gov.br/repositorio/2023/20230210/Jornal/21959.pdf (Ato nº 638/2023); https://portal.doe.sea.sc.gov.br/repositorio/2023/20230816/Jornal/22083.pdf (Ato nº 2638/2023).

A identificação da CRE não equivale à localização do ofício original nem prova a execução em cada unidade. Permanecem pendentes: cópia integral e número do expediente, lista de escolas destinatárias, registros de recolhimento/armazenamento e eventual devolução das nove obras. Os nove registros EL-006 a EL-014 e a página de pendências foram atualizados para remover a lacuna já resolvida e explicitar as lacunas documentais reais.

## EL-027 — Conselheiro Lafaiete / *O menino marrom* — precisão processual

Revisão de redação em 06/11/2026: a sentença de mérito de 02/12/2024 anulou o ato administrativo da Secretaria Municipal de Educação e confirmou a tutela antecipada que havia determinado a retomada dos trabalhos pedagógicos com a obra. A decisão registra que o Município informou ter retomado as atividades em 28/06/2024, após reunião pedagógica de 21/06. Isso comprova o que foi declarado pelo Município no processo e o conteúdo da sentença, mas não comprova, por si só, o trânsito em julgado. A cópia pública consultada não contém certidão de trânsito em julgado; a identidade da pessoa que assinou/formalizou o ato administrativo original também não foi individualizada.

A ficha EL-027 foi ajustada para substituir a expressão ambígua “confirmada definitivamente” por “confirmou a tutela antecipada; trânsito em julgado não comprovado”. A sentença foi localizada em reprodução pública do documento judicial, e não se deve descrevê-la como certidão de trânsito ou decisão já irrecorrível.

Referência processual: Ação Popular nº 5006658-14.2024.8.13.0183, 1ª Vara Cível de Conselheiro Lafaiete/MG. Cópia pública da sentença e demais peças: https://www.jusbrasil.com.br/ (consulta pelo número do processo); decisão liminar de 27/06/2024 também disponível em reprodução pública: https://www.migalhas.com.br/arquivos/2024/6/C9AB64BF939FD5_%C2%B7ProcessoJudicialEletronico-1%C2%BA.pdf.


## 14. Operação de finalização — QA funcional, acessibilidade e coerência editorial (06/11/2026, fim da tarde)

### Ambiente e método

Repositório clonado e gerador executado localmente (`node scripts/gerar.js`: 34 casos, 29 obras, 17 atos, 39 agentes, zero erros). Site servido localmente e percorrido em Chrome headless (Playwright), com axe-core 4 (regras WCAG 2.0, 2.1 e 2.2, níveis A e AA). Produção e fontes externas conferidas no Chrome real da autora.

### Testes executados e resultado

- **94 páginas × 2 larguras (1366 px e 375 px):** zero erro de JavaScript, zero recurso local quebrado, zero rolagem horizontal no celular, exatamente um H1 por página.
- **Links internos:** 4 quebrados encontrados (registro de correções da Metodologia transformava "EL-025 e EL-026" num único link inexistente). Corrigido: cada número EL vira link próprio. Reteste: zero.
- **Interação (28 verificações):** busca, sete filtros, estado vazio, "limpar", filtro persistido na URL, download do CSV (35 linhas), "copiar link", busca de Livros, clique no mapa do painel, prateleira (abrir detalhe e alternar tarjas), link de salto, foco visível em 20 elementos seguidos, menu no celular, página 404, página Relate um caso sem botão morto. Todas passam após as correções abaixo.
- **Acessibilidade automatizada:** de 3 tipos de violação para zero.
  - Contraste: o subtítulo do carimbo dos prontuários usava `opacity:.8` sobre o vermelho, caindo para 3,66:1 (33 páginas). Sem a transparência, o vermelho da marca sobre o papel dá 4,58:1.
  - Alvo de toque: links "Outras ocorrências com esta obra" tinham 16 px de altura (12 páginas). Agora têm no mínimo 24 px.
  - Nome acessível divergente do texto visível (WCAG 2.5.3): botões da prateleira e linhas do gráfico de idade dos livros. Os botões passam a ter o nome formado pelo próprio texto visível; as linhas do gráfico começam o rótulo pelo título exibido.
- **Limites:** não houve teste com leitor de tela real, zoom de 400% nem navegadores além do Chromium. axe-core sem violações não equivale a certificação WCAG.

### Correções funcionais

- Filtro "tipo de biblioteca" era o único escrito à mão e oferecia "Pública", sem nenhum registro. Passa a ser gerado pelos dados, com contagem, como os demais.
- A prateleira de destaques procurava "Os sertões"; o título foi corrigido hoje para "Os Sertões da Luta" e o livro saiu da vitrine sem aviso. Religado. O título do bloco ("Seis livros...") passa a ser calculado pela quantidade real.

### Correções editoriais (contradições com a base atual)

- Painel: "Três atos administrativos respondem pela maior parte dos registros" → dois atos (RO-2020 com 10 e SC-2023 com 9; 19 de 34).
- Painel: "Autocensura e destruição: zero" contradizia o gráfico (1 registro de descarte, EL-025) → "Autocensura: zero. Descarte ou destruição: um registro, sem prova de execução."
- Painel: Rondônia "ainda precisa ser reconciliada" → reconciliação concluída; 42 títulos em nove registros, mais EL-023 (ordem genérica sobre Rubem Alves).
- Painel: indicador "COM 2 REFERÊNCIAS" renomeado para "VERIFICADOS", que é o que a regra mede.
- Análises: Londrina descrita como "sem retirada comprovada", em contradição com a ficha EL-030 corrigida hoje. Texto e tabela atualizados; data da leitura para 6 nov. 2026.
- Linha do tempo e Glossário: "Os sertões" → "Os Sertões da Luta"; Conselheiro Lafaiete inclui a sentença de mérito.
- Relate um caso: "identificá-la" → "identificar você".
- Registro público de correções (Metodologia): acrescentadas 8 entradas datadas de 06/11/2026 cobrindo as mudanças de hoje que alteram o que o leitor lê (EL-005, EL-006 a 014, EL-017/022/024, EL-025, EL-027, EL-028, EL-030 e o painel).

### Fontes externas

92 URLs testadas a partir do navegador: 90 respondem. Duas falharam:
- `relatorio-palmares-original`: o domínio `palmares.gov.br` saiu do ar. A cópia hospedada hoje no gov.br (`retrato_do_acervo.pdf`) tem 3 páginas e foi gerada em 2023, portanto não equivale ao original. A fonte passou a apontar para o snapshot do endereço oficial no Internet Archive (06/05/2023, status 200). Conteúdo conferido em cópia independente: "Relatório Público 01 – CNIRC", total de 9.565 e 5.165 (54%) de "temática alheia à negra".
- `cf-sc`: funcionava por redirecionamento; URL trocada pela canônica e conteúdo conferido (nomes dos signatários presentes).
- `fl-londrina` removida do cadastro: não era usada por nenhum caso e trazia data e episódio errados (ver seção sobre EL-030).

Limite: o teste de rede não distingue página 404 "macia" de conteúdo válido; as fontes primárias foram conferidas em rodadas anteriores desta data.

### Produção

Produção servia o commit `c5a621a` (15:54), confirmado no navegador: a ficha EL-027 ainda mostrava "tornando-a definitiva". Os commits seguintes foram recusados pela Vercel por limite de builds do plano gratuito (`build-rate-limit`), sem erro de código.

### Fora do escopo desta entrega (decisão)

Os PRs #5 e #6 (casos EL-035 a EL-037, contexto partidário, páginas Poder e censura, dossiês, relatório 2026, páginas de agentes) **não** foram integrados. O próprio plano de integração registra que exigem reconciliação transacional de dados e geradores ainda não validada. Integrá-los hoje colocaria em risco a versão íntegra e testada da `main`. Ficam como próxima etapa, depois do lançamento.
