/* Estante Livre · dados do catálogo.
   A base tem quatro entidades, ligadas por chave:
   - LIVROS (obras): o que a obra é. Chave: o nome da obra.
   - ATOS: o documento ou episódio que gerou os registros, com órgão, governo e papéis. Chave: o código do ato.
   - AGENTES e PAPEIS: pessoas e instituições com papel documentado em cada ato.
   - CASOS (registros): um título atingido por um ato, com mecanismo, estágio, situação, alegação e fontes.
   Para acrescentar um caso, copie um bloco de CASOS, aponte para a obra e o ato (criando-os se forem novos)
   e rode  node scripts/gerar.js , que valida tudo. Todas as páginas leem deste arquivo. */

/* ---------- RECORTE ----------
   Início da contagem. O marco é temático: em 2014 a disputa sobre "ideologia de gênero" no Plano Nacional
   de Educação abre o ciclo atual de pressão sobre conteúdo escolar. Casos anteriores ficam na página História.
   Todas as páginas leem o ano daqui. ANO_TESTE é o recorte antigo, usado no teste de sensibilidade (Análises). */
const RECORTE = { inicio: "2014-01-01", anoTeste: 2019 };
const ANO_INICIO = +RECORTE.inicio.slice(0,4);

/* ---------- REGISTROS ---------- */
const CASOS = [
 {id:"EL-001", ato:"RS-2024", obra:"O avesso da pele", alegacao:"“Vocabulário de baixo nível” · crítica da diretora Janaína Venzon, da Escola Estadual Ernesto Alves, em vídeo nas redes", eixo:"Linguagem e palavrão", modalidade:"Retirada", estagio:"Execução comprovada", situacao:"Revertido", desfecho:"Revertido", verificado:"Sim", fontes:["bdf-rs","pn-rs","icl-rs"], nota:"Depois do vídeo da diretora, um ofício do coordenador da 6ª Coordenadoria Regional de Educação, Luiz Ricardo Pinho de Moura, mandou retirar o livro das bibliotecas escolares de 18 municípios do Vale do Rio Pardo. A Secretaria estadual desautorizou a ordem no mesmo dia e a retirada durou poucas horas. Segundo a editora, a própria diretora havia assinado a ata de escolha da obra no PNLD. Foi o primeiro episódio de março de 2024; nas semanas seguintes vieram ordens no PR, em GO, no MS e em SC."},
 {id:"EL-002", ato:"PR-2024", obra:"O avesso da pele", alegacao:"Expressões, jargões e descrições de cenas de sexo que seriam “inadequados para exposição a menores de dezoito anos”", eixo:"Sexualidade e gênero", modalidade:"Retirada", estagio:"Execução comprovada", situacao:"Revertido", desfecho:"Revertido", verificado:"Sim", fontes:["cc-oficio","icl-pr","cc-pr","pn-volta"], nota:"A Secretaria encaminhou ofício assinado por Anderfábio Oliveira dos Santos, diretor de Educação; o Núcleo Regional de Educação de Curitiba também expediu ofício de teor semelhante, assinado por sua chefe, Laura Patrícia Lopes. A coleta foi programada para 5 a 8 de março. A Companhia das Letras foi à Justiça, e o livro voltou às escolas em abril de 2024, acompanhado de orientações pedagógicas."},
 {id:"EL-003", ato:"GO-2024", obra:"O avesso da pele", alegacao:"“Possibilitar uma análise do livro quanto ao atendimento da proposta pedagógica da rede”", eixo:"Linguagem e palavrão", modalidade:"Retirada", estagio:"Execução comprovada", situacao:"Revertido", desfecho:"Revertido", verificado:"Sim", fontes:["cc-go","pn-volta"], nota:"O livro voltou às escolas de Goiás em abril de 2024, um mês depois, junto com o Paraná."},
 {id:"EL-004", ato:"MS-2024", obra:"O avesso da pele", alegacao:"“Expressões impróprias” para menores de 18 anos · termo usado pelo deputado estadual Rinaldo Modesto ao cobrar a retirada", eixo:"Linguagem e palavrão", modalidade:"Retirada", estagio:"Execução comprovada", situacao:"Revertido", desfecho:"Revertido", verificado:"Sim", fontes:["gp-estados","cgn-volta","cgn-alems","cc-ms-avesso","ce-ms-volta"], pendencia:"A SED anunciou em 23/04/2024 que os exemplares estavam em processo de devolução às bibliotecas da rede. A reportagem não informa se a devolução alcançou todas as 75 escolas que haviam recebido a obra nem se outras unidades também receberam exemplares; falta comprovação da distribuição final por unidade.", nota:"Na Assembleia, a crítica uniu deputados de partidos opostos: Rinaldo Modesto (Podemos) pediu a retirada, Lia Nogueira (PSDB) chamou o livro de “nojento” e Pedro Kemp (PT) disse ter “muitas reservas” sobre o uso no ensino médio. O governador Eduardo Riedel mandou recolher os exemplares das 75 escolas da rede que tinham recebido o livro. Em 23 de abril de 2024, a Secretaria de Educação informou que a obra, após análise técnica, estava em processo de devolução às bibliotecas das unidades escolares, com orientações pedagógicas de uso. A reportagem esclareceu que a SED não informou se a devolução abrangeria apenas as 75 unidades que já tinham recebido o livro ou também as demais 274 escolas; tampouco detalhou as orientações aos professores. Portanto, a reversão da decisão está comprovada, mas não a distribuição final em todas as unidades originalmente alcançadas."},
 {id:"EL-005", ato:"SC-2024", obra:"O avesso da pele", alegacao:"Revisão pedagógica do acervo após indicação parlamentar que sugeria a retirada do livro das escolas estaduais.", eixo:"Sexualidade e gênero", modalidade:"Ocultação ou restrição de acesso", estagio:"Decisão ou ordem", situacao:"Em aberto", desfecho:"SED confirmou oficialmente orientação para recolher exemplares das bibliotecas escolares e submetê-los a análise pedagógica; redistribuição posterior não comprovada.", verificado:"Sim", fontes:["gp-estados","alesc-ind154-doc"], pendencia:"Confirmar quais escolas recolheram exemplares, por quanto tempo, o resultado da análise pedagógica e se/para quais unidades os livros foram devolvidos ou redistribuídos. Obter eventual ato interno que operacionalizou a orientação.", nota:"A Informação nº 304/2024/SED/DIEN, de 23/04/2024, integrante da resposta oficial encaminhada à ALESC, registra que exemplares foram localizados em algumas bibliotecas estaduais e que a Secretaria orientou as escolas a recolherem as obras das bibliotecas e realizarem análise pedagógica do título e de todo o acervo. O documento vincula a análise à adequação aos projetos político-pedagógicos e às faixas etárias. A resposta foi encaminhada pelo Secretário de Estado da Educação Aristides Cimadon, em Ofício/Gabs nº 1017/2024, de 28/05/2024, assinado digitalmente em 29/05. Isso confirma a orientação institucional, mas não demonstra que todos os exemplares foram recolhidos, nem o resultado da análise ou a redistribuição posterior. A Gazeta do Povo havia relatado redistribuição de parte de livros a CEDUPs e EJA, mas não se deve atribuir automaticamente essa redistribuição específica ao título sem comprovação por unidade."},
 {id:"EL-006", ato:"SC-2023", obra:"It: A coisa", alegacao:"Sem justificativa no ofício · determinava armazenar “em local não acessível à comunidade escolar”. A secretaria alegou depois “redistribuição por faixa etária”", eixo:"Sobrenatural e mágico", modalidade:"Ocultação ou restrição de acesso", estagio:"Decisão ou ordem", situacao:"Em aberto", desfecho:"Em aberto", verificado:"Sim", fontes:["cc-sc","gp-sc","p360-sc","cnn-sc","cf-sc","folha-sc","doe-waldemar-2023","doe-anelise-2023","cb-sc-origem"], pendencia:"A coordenadoria foi identificada como CRE de Florianópolis por atos de designação publicados no Diário Oficial. Permanecem pendentes a cópia integral e o número do ofício circular, a lista de escolas destinatárias e os registros de execução/recolhimento e eventual devolução das nove obras.", nota:"Ofício assinado pelo supervisor regional de educação Waldemar Ronssem Júnior e pela integradora regional Anelise dos Santos de Medeiros: “Determinamos que as obras listadas abaixo sejam retiradas de circulação”. O suplente de vereador Leonel Camasão (PSOL) levou o caso ao Ministério Público estadual."},
 {id:"EL-007", ato:"SC-2023", obra:"Laranja Mecânica", alegacao:"Sem justificativa no ofício · determinava armazenar “em local não acessível à comunidade escolar”. A secretaria alegou depois “redistribuição por faixa etária”", eixo:"Violência", modalidade:"Ocultação ou restrição de acesso", estagio:"Decisão ou ordem", situacao:"Em aberto", desfecho:"Em aberto", verificado:"Sim", fontes:["cc-sc","gp-sc","p360-sc","cnn-sc","cf-sc","folha-sc","doe-waldemar-2023","doe-anelise-2023","cb-sc-origem"], pendencia:"A coordenadoria foi identificada como CRE de Florianópolis por atos de designação publicados no Diário Oficial. Permanecem pendentes a cópia integral e o número do ofício circular, a lista de escolas destinatárias e os registros de execução/recolhimento e eventual devolução das nove obras.", nota:"Ofício assinado pelo supervisor regional de educação Waldemar Ronssem Júnior e pela integradora regional Anelise dos Santos de Medeiros: “Determinamos que as obras listadas abaixo sejam retiradas de circulação”. O suplente de vereador Leonel Camasão (PSOL) levou o caso ao Ministério Público estadual."},
 {id:"EL-008", ato:"SC-2023", obra:"Donnie Darko", alegacao:"Sem justificativa no ofício · determinava armazenar “em local não acessível à comunidade escolar”. A secretaria alegou depois “redistribuição por faixa etária”", eixo:"Sobrenatural e mágico", modalidade:"Ocultação ou restrição de acesso", estagio:"Decisão ou ordem", situacao:"Em aberto", desfecho:"Em aberto", verificado:"Sim", fontes:["cc-sc","gp-sc","p360-sc","cnn-sc","cf-sc","folha-sc","doe-waldemar-2023","doe-anelise-2023","cb-sc-origem"], pendencia:"A coordenadoria foi identificada como CRE de Florianópolis por atos de designação publicados no Diário Oficial. Permanecem pendentes a cópia integral e o número do ofício circular, a lista de escolas destinatárias e os registros de execução/recolhimento e eventual devolução das nove obras.", nota:"Ofício assinado pelo supervisor regional de educação Waldemar Ronssem Júnior e pela integradora regional Anelise dos Santos de Medeiros: “Determinamos que as obras listadas abaixo sejam retiradas de circulação”. O suplente de vereador Leonel Camasão (PSOL) levou o caso ao Ministério Público estadual."},
 {id:"EL-009", ato:"SC-2023", obra:"Coração Satânico", alegacao:"Sem justificativa no ofício · determinava armazenar “em local não acessível à comunidade escolar”. A secretaria alegou depois “redistribuição por faixa etária”", eixo:"Sobrenatural e mágico", modalidade:"Ocultação ou restrição de acesso", estagio:"Decisão ou ordem", situacao:"Em aberto", desfecho:"Em aberto", verificado:"Sim", fontes:["cc-sc","gp-sc","p360-sc","cnn-sc","cf-sc","folha-sc","doe-waldemar-2023","doe-anelise-2023","cb-sc-origem"], pendencia:"A coordenadoria foi identificada como CRE de Florianópolis por atos de designação publicados no Diário Oficial. Permanecem pendentes a cópia integral e o número do ofício circular, a lista de escolas destinatárias e os registros de execução/recolhimento e eventual devolução das nove obras.", nota:"Ofício assinado pelo supervisor regional de educação Waldemar Ronssem Júnior e pela integradora regional Anelise dos Santos de Medeiros: “Determinamos que as obras listadas abaixo sejam retiradas de circulação”. O suplente de vereador Leonel Camasão (PSOL) levou o caso ao Ministério Público estadual."},
 {id:"EL-010", ato:"SC-2023", obra:"Exorcismo", alegacao:"Sem justificativa no ofício · determinava armazenar “em local não acessível à comunidade escolar”. A secretaria alegou depois “redistribuição por faixa etária”", eixo:"Sobrenatural e mágico", modalidade:"Ocultação ou restrição de acesso", estagio:"Decisão ou ordem", situacao:"Em aberto", desfecho:"Em aberto", verificado:"Sim", fontes:["cc-sc","gp-sc","p360-sc","cnn-sc","cf-sc","folha-sc","doe-waldemar-2023","doe-anelise-2023","cb-sc-origem"], pendencia:"A coordenadoria foi identificada como CRE de Florianópolis por atos de designação publicados no Diário Oficial. Permanecem pendentes a cópia integral e o número do ofício circular, a lista de escolas destinatárias e os registros de execução/recolhimento e eventual devolução das nove obras.", nota:"Ofício assinado pelo supervisor regional de educação Waldemar Ronssem Júnior e pela integradora regional Anelise dos Santos de Medeiros: “Determinamos que as obras listadas abaixo sejam retiradas de circulação”. O suplente de vereador Leonel Camasão (PSOL) levou o caso ao Ministério Público estadual."},
 {id:"EL-011", ato:"SC-2023", obra:"Ed & Lorraine Warren: demonologistas — arquivos sobrenaturais", alegacao:"Sem justificativa no ofício · determinava armazenar “em local não acessível à comunidade escolar”. A secretaria alegou depois “redistribuição por faixa etária”", eixo:"Sobrenatural e mágico", modalidade:"Ocultação ou restrição de acesso", estagio:"Decisão ou ordem", situacao:"Em aberto", desfecho:"Em aberto", verificado:"Sim", fontes:["cc-sc","gp-sc","p360-sc","cnn-sc","cf-sc","folha-sc","doe-waldemar-2023","doe-anelise-2023","cb-sc-origem"], pendencia:"A coordenadoria foi identificada como CRE de Florianópolis por atos de designação publicados no Diário Oficial. Permanecem pendentes a cópia integral e o número do ofício circular, a lista de escolas destinatárias e os registros de execução/recolhimento e eventual devolução das nove obras.", nota:"Ofício assinado pelo supervisor regional de educação Waldemar Ronssem Júnior e pela integradora regional Anelise dos Santos de Medeiros: “Determinamos que as obras listadas abaixo sejam retiradas de circulação”. O suplente de vereador Leonel Camasão (PSOL) levou o caso ao Ministério Público estadual."},
 {id:"EL-012", ato:"SC-2023", obra:"O diário do diabo: os segredos de Alfred Rosenberg, o maior intelectual do nazismo", alegacao:"Sem justificativa no ofício · determinava armazenar “em local não acessível à comunidade escolar”. A secretaria alegou depois “redistribuição por faixa etária”", eixo:"Política e ideologia", modalidade:"Ocultação ou restrição de acesso", estagio:"Decisão ou ordem", situacao:"Em aberto", desfecho:"Em aberto", verificado:"Sim", fontes:["cc-sc","gp-sc","p360-sc","cnn-sc","cf-sc","folha-sc","doe-waldemar-2023","doe-anelise-2023","cb-sc-origem"], pendencia:"A coordenadoria foi identificada como CRE de Florianópolis por atos de designação publicados no Diário Oficial. Permanecem pendentes a cópia integral e o número do ofício circular, a lista de escolas destinatárias e os registros de execução/recolhimento e eventual devolução das nove obras.", nota:"Ofício assinado pelo supervisor regional de educação Waldemar Ronssem Júnior e pela integradora regional Anelise dos Santos de Medeiros: “Determinamos que as obras listadas abaixo sejam retiradas de circulação”. O suplente de vereador Leonel Camasão (PSOL) levou o caso ao Ministério Público estadual."},
 {id:"EL-013", ato:"SC-2023", obra:"A química entre nós", alegacao:"Sem justificativa no ofício · determinava armazenar “em local não acessível à comunidade escolar”. A secretaria alegou depois “redistribuição por faixa etária”", eixo:"Sexualidade e gênero", modalidade:"Ocultação ou restrição de acesso", estagio:"Decisão ou ordem", situacao:"Em aberto", desfecho:"Em aberto", verificado:"Sim", fontes:["cc-sc","gp-sc","p360-sc","cnn-sc","cf-sc","folha-sc","doe-waldemar-2023","doe-anelise-2023","cb-sc-origem"], pendencia:"A coordenadoria foi identificada como CRE de Florianópolis por atos de designação publicados no Diário Oficial. Permanecem pendentes a cópia integral e o número do ofício circular, a lista de escolas destinatárias e os registros de execução/recolhimento e eventual devolução das nove obras.", nota:"Ofício assinado pelo supervisor regional de educação Waldemar Ronssem Júnior e pela integradora regional Anelise dos Santos de Medeiros: “Determinamos que as obras listadas abaixo sejam retiradas de circulação”. O suplente de vereador Leonel Camasão (PSOL) levou o caso ao Ministério Público estadual."},
 {id:"EL-014", ato:"SC-2023", obra:"Os 13 porquês", alegacao:"Sem justificativa no ofício · determinava armazenar “em local não acessível à comunidade escolar”. A secretaria alegou depois “redistribuição por faixa etária”", eixo:"Outro", modalidade:"Ocultação ou restrição de acesso", estagio:"Decisão ou ordem", situacao:"Em aberto", desfecho:"Em aberto", verificado:"Sim", fontes:["cc-sc","gp-sc","p360-sc","cnn-sc","cf-sc","folha-sc","doe-waldemar-2023","doe-anelise-2023","cb-sc-origem"], pendencia:"A coordenadoria foi identificada como CRE de Florianópolis por atos de designação publicados no Diário Oficial. Permanecem pendentes a cópia integral e o número do ofício circular, a lista de escolas destinatárias e os registros de execução/recolhimento e eventual devolução das nove obras.", nota:"Ofício assinado pelo supervisor regional de educação Waldemar Ronssem Júnior e pela integradora regional Anelise dos Santos de Medeiros: “Determinamos que as obras listadas abaixo sejam retiradas de circulação”. O suplente de vereador Leonel Camasão (PSOL) levou o caso ao Ministério Público estadual."},
 {id:"EL-015", ato:"RO-2020", obra:"Macunaíma", alegacao:"“Conteúdos inadequados às crianças e adolescentes”", eixo:"Política e ideologia", modalidade:"Retirada", estagio:"Decisão ou ordem", situacao:"Revertido", desfecho:"Ordem suspensa no mesmo dia; exemplares que chegaram a ser recolhidos foram devolvidos, segundo o MPF", verificado:"Parcialmente", fontes:["gp-ro","pn-ro","publico-ro","cc-ro","dp-ro","estudo-ro","mpf-ro-arquivamento","adendo-ro-copia","rd-ro-fake"], pendencia:"Localizar a íntegra do processo SEI 0029.051300/2020-91, o resultado da sindicância administrativa da Seduc e a íntegra da recomendação do MP-RO. O MPF homologou o arquivamento do inquérito civil em 2021; isso não substitui a apuração administrativa estadual.", nota:"O Memorando-Circular nº 4/2020/SEDUC-DGE traz o nome do secretário Suamy Vivecananda no fecho; o registro eletrônico identifica Irany de Oliveira Lima Morais, diretora-geral de Educação, como signatária digital. A Seduc negou ter ordenado o recolhimento e afirmou que o processo foi encerrado antes de tramitar para escolas ou órgãos externos. Em decisão publicada no Diário do MPF em 30 de agosto de 2021, o órgão registrou que houve solicitação verbal de recolhimento, suspensa no mesmo dia, e que os livros que chegaram a ser recolhidos foram devolvidos às escolas. O MPF concluiu que o recolhimento não se concretizou, registrou a abertura de sindicância pela Seduc e a atuação do MP-RO, cuja recomendação foi acatada; o inquérito civil foi arquivado, com homologação do arquivamento pela Câmara competente. A cópia pública do Adendo ID 10053329 reproduz 19 linhas atribuídas a Rubem Fonseca: Diário de um Fescenino; Bufo & Spallanzani; O Melhor de Rubem Fonseca; Secreções, Excreções e Desatinos; Os Prisioneiros; Agosto; Amálgama; O Doente Molière; A Coleira do Cão; O Seminarista (duas ocorrências); Histórias Curtas; História de Amor; O Buraco na Parede; Feliz Ano Novo; Calibre 22; Mandrake: A Bíblia e a Bengala; Lúcia McCartney; Romance Negro e Outras Histórias. Portanto, são 18 títulos distintos em 19 itens. A cópia está hospedada por terceiro, não foi obtida diretamente do SEI; o memorando identifica o Adendo pelo ID 10053329. Um artigo acadêmico publicado em 2024 reproduz imagem do memorando. OAB-RO e Academia Brasileira de Letras enviaram notas de repúdio."},
 {id:"EL-016", ato:"RO-2020", obra:"Memórias póstumas de Brás Cubas", alegacao:"“Conteúdos inadequados às crianças e adolescentes”", eixo:"Política e ideologia", modalidade:"Retirada", estagio:"Decisão ou ordem", situacao:"Revertido", desfecho:"Ordem suspensa no mesmo dia; exemplares que chegaram a ser recolhidos foram devolvidos, segundo o MPF", verificado:"Parcialmente", fontes:["gp-ro","pn-ro","publico-ro","cc-ro","dp-ro","estudo-ro","mpf-ro-arquivamento","adendo-ro-copia","rd-ro-fake"], pendencia:"Localizar a íntegra do processo SEI 0029.051300/2020-91, o resultado da sindicância administrativa da Seduc e a íntegra da recomendação do MP-RO. O MPF homologou o arquivamento do inquérito civil em 2021; isso não substitui a apuração administrativa estadual.", nota:"Registro provisório de agrupamento para representar a relação documental do Adendo ID 10053329, não uma obra literária. A cópia pública consultada contém 43 linhas numeradas e 42 títulos distintos, pois O Seminarista aparece duas vezes. A relação de títulos e o comando adicional sobre todos os livros de Rubem Alves são elementos separados. A cópia foi localizada em hospedagem de terceiro e não equivale à obtenção do processo integral no SEI."},
 {id:"EL-017", ato:"RO-2020", obra:"Os Sertões da Luta", alegacao:"“Conteúdos inadequados às crianças e adolescentes”", eixo:"Política e ideologia", modalidade:"Retirada", estagio:"Decisão ou ordem", situacao:"Revertido", desfecho:"Ordem suspensa no mesmo dia; exemplares que chegaram a ser recolhidos foram devolvidos, segundo o MPF", verificado:"Parcialmente", fontes:["gp-ro","pn-ro","publico-ro","cc-ro","dp-ro","estudo-ro","mpf-ro-arquivamento","adendo-ro-copia","rd-ro-fake"], pendencia:"Localizar a íntegra do processo SEI 0029.051300/2020-91, o resultado da sindicância administrativa da Seduc e a íntegra da recomendação do MP-RO. O MPF homologou o arquivamento do inquérito civil em 2021; isso não substitui a apuração administrativa estadual.", nota:"O Memorando-Circular nº 4/2020/SEDUC-DGE traz o nome do secretário Suamy Vivecananda no fecho; o registro eletrônico identifica Irany de Oliveira Lima Morais, diretora-geral de Educação, como signatária digital. A Seduc negou ter ordenado o recolhimento e afirmou que o processo foi encerrado antes de tramitar para escolas ou órgãos externos. Em decisão publicada no Diário do MPF em 30 de agosto de 2021, o órgão registrou que houve solicitação verbal de recolhimento, suspensa no mesmo dia, e que os livros que chegaram a ser recolhidos foram devolvidos às escolas. O MPF concluiu que o recolhimento não se concretizou, registrou a abertura de sindicância pela Seduc e a atuação do MP-RO, cuja recomendação foi acatada; o inquérito civil foi arquivado, com homologação do arquivamento pela Câmara competente. Um artigo acadêmico publicado em 2024 reproduz imagem do memorando e da relação de títulos. OAB-RO e Academia Brasileira de Letras enviaram notas de repúdio."},
 {id:"EL-018", ato:"RO-2020", obra:"O castelo", alegacao:"“Conteúdos inadequados às crianças e adolescentes”", eixo:"Política e ideologia", modalidade:"Retirada", estagio:"Decisão ou ordem", situacao:"Revertido", desfecho:"Ordem suspensa no mesmo dia; exemplares que chegaram a ser recolhidos foram devolvidos, segundo o MPF", verificado:"Parcialmente", fontes:["gp-ro","pn-ro","publico-ro","cc-ro","dp-ro","estudo-ro","mpf-ro-arquivamento","adendo-ro-copia","rd-ro-fake"], pendencia:"Localizar a íntegra do processo SEI 0029.051300/2020-91, o resultado da sindicância administrativa da Seduc e a íntegra da recomendação do MP-RO. O MPF homologou o arquivamento do inquérito civil em 2021; isso não substitui a apuração administrativa estadual.", nota:"O Memorando-Circular nº 4/2020/SEDUC-DGE traz o nome do secretário Suamy Vivecananda no fecho; o registro eletrônico identifica Irany de Oliveira Lima Morais, diretora-geral de Educação, como signatária digital. A Seduc negou ter ordenado o recolhimento e afirmou que o processo foi encerrado antes de tramitar para escolas ou órgãos externos. Em decisão publicada no Diário do MPF em 30 de agosto de 2021, o órgão registrou que houve solicitação verbal de recolhimento, suspensa no mesmo dia, e que os livros que chegaram a ser recolhidos foram devolvidos às escolas. O MPF concluiu que o recolhimento não se concretizou, registrou a abertura de sindicância pela Seduc e a atuação do MP-RO, cuja recomendação foi acatada; o inquérito civil foi arquivado, com homologação do arquivamento pela Câmara competente. Um artigo acadêmico publicado em 2024 reproduz imagem do memorando e da relação de títulos. OAB-RO e Academia Brasileira de Letras enviaram notas de repúdio."},
 {id:"EL-019", ato:"RO-2020", obra:"Contos de terror, de mistério e de morte", alegacao:"“Conteúdos inadequados às crianças e adolescentes”", eixo:"Violência", modalidade:"Retirada", estagio:"Decisão ou ordem", situacao:"Revertido", desfecho:"Ordem suspensa no mesmo dia; exemplares que chegaram a ser recolhidos foram devolvidos, segundo o MPF", verificado:"Parcialmente", fontes:["gp-ro","pn-ro","publico-ro","cc-ro","dp-ro","estudo-ro","mpf-ro-arquivamento","adendo-ro-copia","rd-ro-fake"], pendencia:"Localizar a íntegra do processo SEI 0029.051300/2020-91, o resultado da sindicância administrativa da Seduc e a íntegra da recomendação do MP-RO. O MPF homologou o arquivamento do inquérito civil em 2021; isso não substitui a apuração administrativa estadual.", nota:"O Memorando-Circular nº 4/2020/SEDUC-DGE traz o nome do secretário Suamy Vivecananda no fecho; o registro eletrônico identifica Irany de Oliveira Lima Morais, diretora-geral de Educação, como signatária digital. A Seduc negou ter ordenado o recolhimento e afirmou que o processo foi encerrado antes de tramitar para escolas ou órgãos externos. Em decisão publicada no Diário do MPF em 30 de agosto de 2021, o órgão registrou que houve solicitação verbal de recolhimento, suspensa no mesmo dia, e que os livros que chegaram a ser recolhidos foram devolvidos às escolas. O MPF concluiu que o recolhimento não se concretizou, registrou a abertura de sindicância pela Seduc e a atuação do MP-RO, cuja recomendação foi acatada; o inquérito civil foi arquivado, com homologação do arquivamento pela Câmara competente. Um artigo acadêmico publicado em 2024 reproduz imagem do memorando e da relação de títulos. OAB-RO e Academia Brasileira de Letras enviaram notas de repúdio."},
 {id:"EL-020", ato:"RO-2020", obra:"A vida como ela é", alegacao:"“Conteúdos inadequados às crianças e adolescentes”", eixo:"Sexualidade e gênero", modalidade:"Retirada", estagio:"Decisão ou ordem", situacao:"Revertido", desfecho:"Ordem suspensa no mesmo dia; exemplares que chegaram a ser recolhidos foram devolvidos, segundo o MPF", verificado:"Parcialmente", fontes:["gp-ro","pn-ro","publico-ro","cc-ro","dp-ro","estudo-ro","mpf-ro-arquivamento","adendo-ro-copia","rd-ro-fake"], pendencia:"Localizar a íntegra do processo SEI 0029.051300/2020-91, o resultado da sindicância administrativa da Seduc e a íntegra da recomendação do MP-RO. O MPF homologou o arquivamento do inquérito civil em 2021; isso não substitui a apuração administrativa estadual.", nota:"O Memorando-Circular nº 4/2020/SEDUC-DGE traz o nome do secretário Suamy Vivecananda no fecho; o registro eletrônico identifica Irany de Oliveira Lima Morais, diretora-geral de Educação, como signatária digital. A Seduc negou ter ordenado o recolhimento e afirmou que o processo foi encerrado antes de tramitar para escolas ou órgãos externos. Em decisão publicada no Diário do MPF em 30 de agosto de 2021, o órgão registrou que houve solicitação verbal de recolhimento, suspensa no mesmo dia, e que os livros que chegaram a ser recolhidos foram devolvidos às escolas. O MPF concluiu que o recolhimento não se concretizou, registrou a abertura de sindicância pela Seduc e a atuação do MP-RO, cuja recomendação foi acatada; o inquérito civil foi arquivado, com homologação do arquivamento pela Câmara competente. Um artigo acadêmico publicado em 2024 reproduz imagem do memorando e da relação de títulos. OAB-RO e Academia Brasileira de Letras enviaram notas de repúdio."},
 {id:"EL-021", ato:"RO-2020", obra:"Beijo no asfalto", alegacao:"“Conteúdos inadequados às crianças e adolescentes”", eixo:"Sexualidade e gênero", modalidade:"Retirada", estagio:"Decisão ou ordem", situacao:"Revertido", desfecho:"Ordem suspensa no mesmo dia; exemplares que chegaram a ser recolhidos foram devolvidos, segundo o MPF", verificado:"Parcialmente", fontes:["gp-ro","pn-ro","publico-ro","cc-ro","dp-ro","estudo-ro","mpf-ro-arquivamento","adendo-ro-copia","rd-ro-fake"], pendencia:"Localizar a íntegra do processo SEI 0029.051300/2020-91, o resultado da sindicância administrativa da Seduc e a íntegra da recomendação do MP-RO. O MPF homologou o arquivamento do inquérito civil em 2021; isso não substitui a apuração administrativa estadual.", nota:"O Memorando-Circular nº 4/2020/SEDUC-DGE traz o nome do secretário Suamy Vivecananda no fecho; o registro eletrônico identifica Irany de Oliveira Lima Morais, diretora-geral de Educação, como signatária digital. A Seduc negou ter ordenado o recolhimento e afirmou que o processo foi encerrado antes de tramitar para escolas ou órgãos externos. Em decisão publicada no Diário do MPF em 30 de agosto de 2021, o órgão registrou que houve solicitação verbal de recolhimento, suspensa no mesmo dia, e que os livros que chegaram a ser recolhidos foram devolvidos às escolas. O MPF concluiu que o recolhimento não se concretizou, registrou a abertura de sindicância pela Seduc e a atuação do MP-RO, cuja recomendação foi acatada; o inquérito civil foi arquivado, com homologação do arquivamento pela Câmara competente. Um artigo acadêmico publicado em 2024 reproduz imagem do memorando e da relação de títulos. OAB-RO e Academia Brasileira de Letras enviaram notas de repúdio."},
 {id:"EL-022", conjunto:true, ato:"RO-2020", obra:"Obras de Rubem Fonseca (19 itens; 18 títulos distintos)", alegacao:"“Conteúdos inadequados às crianças e adolescentes”", eixo:"Violência", modalidade:"Retirada", estagio:"Decisão ou ordem", situacao:"Revertido", desfecho:"Ordem suspensa no mesmo dia; exemplares que chegaram a ser recolhidos foram devolvidos, segundo o MPF", verificado:"Parcialmente", fontes:["gp-ro","pn-ro","publico-ro","cc-ro","dp-ro","estudo-ro","mpf-ro-arquivamento","adendo-ro-copia","rd-ro-fake"], pendencia:"A lista do Adendo está reconciliada: 19 itens de Rubem Fonseca correspondem a 18 títulos distintos porque O Seminarista aparece duas vezes. A relação está preservada como conjunto documental; não há lacuna de identificação dos títulos neste agrupamento.", nota:"O Memorando-Circular nº 4/2020/SEDUC-DGE traz o nome do secretário Suamy Vivecananda no fecho; o registro eletrônico identifica Irany de Oliveira Lima Morais, diretora-geral de Educação, como signatária digital. A Seduc negou ter ordenado o recolhimento e afirmou que o processo foi encerrado antes de tramitar para escolas ou órgãos externos. Em decisão publicada no Diário do MPF em 30 de agosto de 2021, o órgão registrou que houve solicitação verbal de recolhimento, suspensa no mesmo dia, e que os livros que chegaram a ser recolhidos foram devolvidos às escolas. O MPF concluiu que o recolhimento não se concretizou, registrou a abertura de sindicância pela Seduc e a atuação do MP-RO, cuja recomendação foi acatada; o inquérito civil foi arquivado, com homologação do arquivamento pela Câmara competente. Um artigo acadêmico publicado em 2024 reproduz imagem do memorando e da relação de títulos. OAB-RO e Academia Brasileira de Letras enviaram notas de repúdio. A cópia pública do Adendo ID 10053329 reproduz 19 linhas atribuídas a Rubem Fonseca, correspondentes a 18 títulos distintos: Diário de um Fescenino; Bufo & Spallanzani; O Melhor de Rubem Fonseca; Secreções, Excreções e Desatinos; Os Prisioneiros; Agosto; Amálgama; O Doente Molière; A Coleira do Cão; O Seminarista; Histórias Curtas; História de Amor; O Buraco na Parede; Feliz Ano Novo; Calibre 22; Mandrake: A Bíblia e a Bengala; Lúcia McCartney; Romance Negro e Outras Histórias. O Seminarista aparece duas vezes na relação. A cópia está hospedada por terceiro; não foi obtida diretamente do SEI."},
 {id:"EL-023", conjunto:true, ato:"RO-2020", obra:"Obra completa de Rubem Alves", alegacao:"“Conteúdos inadequados às crianças e adolescentes”", eixo:"Política e ideologia", modalidade:"Retirada", estagio:"Decisão ou ordem", situacao:"Revertido", desfecho:"Ordem suspensa no mesmo dia; exemplares que chegaram a ser recolhidos foram devolvidos, segundo o MPF", verificado:"Parcialmente", fontes:["gp-ro","pn-ro","publico-ro","cc-ro","dp-ro","estudo-ro","mpf-ro-arquivamento","adendo-ro-copia","rd-ro-fake"], pendencia:"Sem relação de títulos", nota:"O Memorando-Circular nº 4/2020/SEDUC-DGE traz o nome do secretário Suamy Vivecananda no fecho; o registro eletrônico identifica Irany de Oliveira Lima Morais, diretora-geral de Educação, como signatária digital. A Seduc negou ter ordenado o recolhimento e afirmou que o processo foi encerrado antes de tramitar para escolas ou órgãos externos. Em decisão publicada no Diário do MPF em 30 de agosto de 2021, o órgão registrou que houve solicitação verbal de recolhimento, suspensa no mesmo dia, e que os livros que chegaram a ser recolhidos foram devolvidos às escolas. O MPF concluiu que o recolhimento não se concretizou, registrou a abertura de sindicância pela Seduc e a atuação do MP-RO, cuja recomendação foi acatada; o inquérito civil foi arquivado, com homologação do arquivamento pela Câmara competente. Um artigo acadêmico publicado em 2024 reproduz imagem do memorando e da relação de títulos. OAB-RO e Academia Brasileira de Letras enviaram notas de repúdio."},
 {id:"EL-024", conjunto:true, ato:"RO-2020", obra:"Relação do Adendo 10053329 (43 itens; 42 títulos distintos)", alegacao:"“Conteúdos inadequados às crianças e adolescentes”", eixo:"Outro", modalidade:"Retirada", estagio:"Decisão ou ordem", situacao:"Revertido", desfecho:"Ordem suspensa no mesmo dia; exemplares que chegaram a ser recolhidos foram devolvidos, segundo o MPF", verificado:"Parcialmente", fontes:["gp-ro","pn-ro","publico-ro","cc-ro","dp-ro","estudo-ro","mpf-ro-arquivamento","adendo-ro-copia","rd-ro-fake"], pendencia:"A lista de títulos do Adendo está reconciliada e registrada em conjunto documental. Permanecem pendentes a obtenção do processo SEI integral e a documentação da sindicância estadual e da recomendação do MP-RO.", nota:"O Memorando-Circular nº 4/2020/SEDUC-DGE traz o nome do secretário Suamy Vivecananda no fecho; o registro eletrônico identifica Irany de Oliveira Lima Morais, diretora-geral de Educação, como signatária digital. A Seduc negou ter ordenado o recolhimento e afirmou que o processo foi encerrado antes de tramitar para escolas ou órgãos externos. Em decisão publicada no Diário do MPF em 30 de agosto de 2021, o órgão registrou que houve solicitação verbal de recolhimento, suspensa no mesmo dia, e que os livros que chegaram a ser recolhidos foram devolvidos às escolas. O MPF concluiu que o recolhimento não se concretizou, registrou a abertura de sindicância pela Seduc e a atuação do MP-RO, cuja recomendação foi acatada; o inquérito civil foi arquivado, com homologação do arquivamento pela Câmara competente. Um artigo acadêmico publicado em 2024 reproduz imagem do memorando e da relação de títulos. OAB-RO e Academia Brasileira de Letras enviaram notas de repúdio. A cópia pública do Adendo ID 10053329 contém 43 linhas numeradas e 42 títulos distintos, pois O Seminarista aparece duas vezes. Este agrupamento reúne os 17 títulos distintos da relação que não têm ficha individual nem pertencem ao conjunto de Rubem Fonseca ou aos sete registros individualizados: O Melhor de Caio Fernando Abreu — Contos e Crônicas (Caio Fernando Abreu); Poemas Escolhidos (Ferreira Gullar); A Volta por Cima (Carlos Heitor Cony); Mar de Histórias — todos os volumes (Aurélio Buarque de Holanda Ferreira); O Irmão que tu me Deste (Carlos Heitor Cony); A Menina de Cá (Carlos Nascimento Silva); Guia Millôr da História do Brasil (Ivan Rubino Fernandes); O Ventre (Carlos Heitor Cony); Rosa Vegetal de Sangue (Carlos Heitor Cony); O Mistério da Moto de Cristal (Ana Lee e Carlos Heitor Cony); Estrangeira (Sonia Rodrigues); O Melhor de Nelson Rodrigues (Nelson Rodrigues); 13 dos Melhores Contos de Amor (Rosa Amanda Strausz); Mil e Uma Noites (Carlos Heitor Cony); Vestido de Noiva — graphic novel (autoria não indicada na relação); O Ato e o Fato (Carlos Heitor Cony); O Harém das Bananeiras (Carlos Heitor Cony). A instrução sobre todos os livros de Rubem Alves aparece fora da tabela e é registrada separadamente em EL-023. A transcrição normaliza erros evidentes de grafia do documento (Gular/Gullar, Hitor/Heitor, Ruben/Rubem e Alfalto/Asfalto); a primeira linha aparece truncada no PDF como “O Melhor De” e foi completada com base na relação publicada pela Folha."},
 {id:"EL-025", ato:"PALM-2021-06", obra:"Anúncio de descarte de 5.165 exemplares classificados como de “temática alheia à negra”", alegacao:"Relatório “Retrato do Acervo: três décadas de dominação marxista na Fundação Cultural Palmares” · classificação de 5.165 exemplares como de “temática alheia à negra”", eixo:"Política e ideologia", modalidade:"Descarte ou destruição", estagio:"Decisão ou ordem", situacao:"Em aberto", desfecho:"Destino final dos 5.165 exemplares não comprovado", verificado:"Parcialmente", fontes:["em-palmares","sbt-palm","gp-palmares","opovo-palm","palmares-inventario","palmares-inventario-2023","palmares-politica","relatorio-palmares-original","relatorio-gestao-palm-2021","unesp-palmares","participa-palm"], pendencia:"A divergência 9.565/9.546 foi esclarecida em favor do número 9.565 pelo Relatório de Gestão 2021 da própria FCP, que decompõe o total em 8.035 títulos diferentes e 1.530 folders/catálogos. Permanecem sem reconciliação as versões posteriores do inventário (9.665 em 2023 e 9.696 em 2024) e, sobretudo, a lista integral dos 5.165 itens classificados como de temática alheia à negra e a comprovação de seu destino final. A ação relativa aos cerca de 300 livros do EL-026 é tratada separadamente, sem afirmar que os conjuntos sejam mutuamente exclusivos.", nota:"O Relatório de Gestão 2021 da própria Fundação Cultural Palmares, seção 3.1.2, informa um total de 9.565 registros do acervo, composto por 8.035 títulos diferentes e 1.530 folders e catálogos. Para evitar confusão, 9.565 é o total agregado informado no relatório, não a quantidade de títulos distintos. Isso esclarece a divergência com a reportagem do Jornal da Unesp, que publicou 9.546: a fonte institucional de prestação de contas confirma 9.565, embora não explique a origem do número divergente usado pela reportagem. O relatório de 2021 classificou 5.165 (54%) como de temática alheia à negra; esse número é uma classificação da gestão, não prova de descarte. As versões públicas do Inventário Bibliográfico publicadas pela FCP em 2023 e 2024 informam, respectivamente, 9.665 e 9.696 títulos, embora ambas indiquem que a compilação foi realizada entre julho e outubro de 2021. Não foi localizada nota de revisão que reconcilie essas versões com os 9.565 do Relatório de Gestão. Também não foi localizada lista individualizada que permita identificar os 5.165 itens classificados nem comprovação de sua destinação final. A ação relativa aos cerca de 300 livros é registrada no EL-026; não há base para afirmar que os conjuntos sejam mutuamente exclusivos."},
 {id:"EL-026", ato:"PALM-2021-08", obra:"Segregação de cerca de 300 livros no chamado “Acervo da Vergonha”", alegacao:"Camargo chamou as obras de “bibliografia imprestável para a Palmares”, “marxistas” e “bandidólatras”.", eixo:"Política e ideologia", modalidade:"Ocultação ou restrição de acesso", estagio:"Decisão ou ordem", situacao:"Em aberto", desfecho:"Segregação anunciada; acesso público posterior não verificado", verificado:"Parcialmente", fontes:["opovo-palm","sbt-museu","oglobo-palm-300","oglobo-palm-ala","participa-palm","gp-palmares"], pendencia:"Obter inventário dos cerca de 300 livros, comprovar se foram fisicamente separados, por quanto tempo e quando voltaram à consulta pública.", nota:"A Justiça Federal já havia impedido a doação de cerca de 300 livros. Em 23 de julho de 2021, a Procuradoria-Geral Federal informou ao juízo que Sérgio Camargo desistira da doação, ao menos naquele momento. Em 3 de agosto, Camargo anunciou a criação de uma seção/sala para separar os livros que chamava de “vergonhosos e desviantes”. O anúncio público está documentado; a duração e o regime efetivo de acesso à sala ainda precisam de comprovação."},
 {id:"EL-027", ato:"MG-2024", obra:"O menino marrom", alegacao:"Pais consideraram a obra “agressiva”, citando passagens sobre pacto de sangue e conflitos entre personagens.", eixo:"Cultura afro-brasileira", modalidade:"Veto a atividade", estagio:"Decisão ou ordem", situacao:"Revertido", desfecho:"Ato administrativo anulado por sentença de mérito em 02/12/2024, que confirmou a tutela antecipada; trânsito em julgado não comprovado", verificado:"Sim", fontes:["pn-ziraldo","dp-ziraldo","comunicado-lafaiete","decisao-lafaiete","sentenca-lafaiete","fr-lafaiete-nota"], pendencia:"Confirmar o trânsito em julgado e identificar, se possível, o agente público que formalizou o ato administrativo original. A sentença de 02/12/2024 anulou o ato, mas a cópia pública consultada não traz certidão de trânsito em julgado.", nota:"Em comunicado de 20/06/2024, a Secretaria Municipal de Educação informou a suspensão temporária dos trabalhos pedagógicos com o livro após manifestações de pais, familiares e autoridades locais; a medida não foi um recolhimento geral dos exemplares. A sentença de 02/12/2024 registra que o Município informou ter retomado as atividades normais com a obra após reunião pedagógica de 21/06 e envio de e-mail às escolas em 28/06/2024. A decisão judicial de 27/06/2024 havia determinado o cancelamento imediato da suspensão, sob multa diária de R$ 5 mil. No mérito, o juiz Espagner Wallysen Vaz Leite, da 1ª Vara Cível de Conselheiro Lafaiete, julgou procedente a ação popular, anulou o ato administrativo da Secretaria e confirmou a tutela antecipada na sentença de mérito. A sentença afirma que a suspensão não foi anulada administrativamente; por isso, afastou a alegação municipal de perda do objeto. A íntegra da sentença foi localizada em reprodução pública, mas ainda não foi obtida certidão de trânsito em julgado. A decisão identifica a Secretaria como autora do ato, mas não individualiza seu signatário."},
 {id:"EL-028", ato:"SJC-2024", obra:"Meninas sonhadoras, mulheres cientistas", alegacao:"O vereador afirmou que a obra faria “apologia ao aborto” e promoveria “doutrinação ideológica”. A prefeitura sustentou posteriormente que a restrição decorria de avaliação curricular.", eixo:"Sexualidade e gênero", modalidade:"Retirada", estagio:"Execução comprovada", situacao:"Revertido", desfecho:"Sentença de mérito de 20/07/2026 reconheceu censura material e determinou a restituição do livro às salas de leitura e bibliotecas das escolas em que integrava o acervo; cumprimento não confirmado.", verificado:"Parcialmente", fontes:["pn-sjc","ap-sjc","op-sjc","migalhas-sjc","folha-sjc-ordem","uol-sjc-ordem","ovale-sjc-sentenca","jurinews-sjc-2024"], pendencia:"Obter cópia integral da sentença e certidão de intimação; comprovar a restituição e disponibilidade efetiva dos exemplares nas unidades; verificar eventual recurso contra a sentença e seu efeito. As reportagens de 28 a 30/07/2026 registraram que a Prefeitura não havia confirmado o cumprimento.", nota:"O livro foi recolhido das salas de leitura da rede municipal em junho de 2024, após a pressão pública do vereador. Segundo a apuração divulgada com base no processo, a ordem de retirada foi transmitida aos diretores por mensagens de WhatsApp, sem justificativa técnico-pedagógica contemporânea. Em 2024, na ação movida pelo Ministério Público e pela Defensoria Pública, uma liminar determinou a redistribuição da obra; a Prefeitura recorreu e o TJSP suspendeu os efeitos da liminar em outubro de 2024. O processo prosseguiu com produção de prova oral, audiência de instrução e alegações finais. Em sentença de mérito assinada em 20/07/2026, a juíza Renata Heloísa da Silva Salles, da Vara da Infância e Juventude, concluiu que a retirada configurou censura material, julgou parcialmente procedente a ação e determinou que o Município restituísse e redisponibilizasse a obra nas salas de leitura e bibliotecas das unidades em que integrava o acervo, assegurando consulta, empréstimo e uso pedagógico no Ensino Fundamental II. A sentença proibiu recolhimento, ocultação ou restrição por razões político-ideológicas sem procedimento administrativo formal e motivação técnico-pedagógica idônea, e fixou multa diária de R$ 500, inicialmente limitada a R$ 50 mil. A juíza negou o pedido de indenização por dano moral coletivo. As reportagens publicadas em 28, 29 e 30/07/2026 informaram que a Prefeitura ainda não havia confirmado a execução da ordem; não foi localizada comprovação posterior de redistribuição nem certidão de trânsito em julgado. O vereador declarou que recorreria, mas não foi localizada confirmação pública do protocolo de recurso."},
 {id:"EL-029", ato:"UNIRV-2023", obra:"Eu receberia as piores notícias de seus lindos lábios", alegacao:"O parlamentar classificou a obra como “pornográfica”; a universidade afirmou que a polêmica pesou na exclusão.", eixo:"Sexualidade e gênero", modalidade:"Exclusão de lista de leitura", estagio:"Execução comprovada", situacao:"Em vigor", desfecho:"Retirado da lista; decisão institucional confirmada", verificado:"Parcialmente", fontes:["unirv-lista-2023","fp-unirv","jo-unirv","folha-unirv","unirv-nota"], pendencia:"Identificar nominalmente quem compunha a Coordenação do Vestibular e quem formalizou a decisão; a nota pública identifica o órgão decisor, mas não traz ata ou despacho nominal.", nota:"Em 12/04/2023, a própria UniRV publicou a lista de obras para o vestibular de Medicina e incluiu expressamente o romance de Marçal Aquino. Em nota oficial datada de 26/04 e publicada em 27/04, a universidade afirmou que a Coordenação do Vestibular decidiu pela exclusão imediata da obra após tomar conhecimento do conteúdo e da polêmica; a indicação original havia sido feita por uma banca de professores. A instituição não identifica nominalmente quem, dentro da Coordenação, tomou a decisão nem apresenta ata ou despacho individual."},
 {id:"EL-030", ato:"LON-2024", obra:"A mamãe vai ter um bebê", titulo:"Requerimento de recolhimento de A mamãe vai ter um bebê e retirada de exemplar de CMEI (Londrina)", alegacao:"A vereadora classificou como inadequada para crianças uma ilustração de casal sob um edredom em contexto de reprodução humana.", eixo:"Sexualidade e gênero", modalidade:"Retirada", estagio:"Execução comprovada", situacao:"Em aberto", desfecho:"Secretaria retirou imediatamente o exemplar encontrado em um CMEI e revisou o acervo daquela unidade; não há prova de recolhimento de outros exemplares na rede. PL 79/2024 sancionado como Lei nº 13.930/2025.", verificado:"Sim", fontes:["ric-londrina-2024","taroba-londrina-2024","pedido-londrina","pl79-londrina","lei-londrina-13930","cml-pi582"], pendencia:"Obter cópia integral do requerimento parlamentar e da nota oficial da Secretaria; confirmar se a revisão do acervo identificou outros exemplares e se houve retirada em outras unidades. Não há comprovação de devolução do exemplar retirado.", nota:"Em 26/11/2024, durante vistoria em um CMEI após denúncia de uma família, a vereadora Jéssica Ramos Moreno (PP) encontrou o livro e pediu providências. A Secretaria Municipal de Educação afirmou à imprensa que a obra não havia sido adquirida nem distribuída pelo Município; acreditava que o exemplar chegara por doação direta ou fora levado por aluno e esquecido na unidade. A pasta declarou que o livro foi imediatamente retirado do acervo e que faria revisão completa do material disponível naquele CMEI. Portanto, a retirada de um exemplar em uma unidade está confirmada por nota oficial reproduzida contemporaneamente, mas não se comprova o recolhimento geral pedido pela vereadora nem a existência de outros exemplares na rede. A cobertura de 27/11 ainda informou que a Secretaria não havia respondido oficialmente ao requerimento parlamentar específico; isso não contradiz a nota sobre a retirada do exemplar encontrado. O PL 79/2024, de autoria da vereadora, já havia sido protocolado em 09/04/2024 (processo 148224, documento 208880), meses antes do episódio; foi aprovado e sancionado em 21/03/2025 como Lei Municipal nº 13.930. A lei posterior não prova recolhimento de exemplares."},
 {id:"EL-031", ato:"DF-2026", obra:"A bolsa amarela", titulo:"Controvérsia sobre atividade com resenha de A bolsa amarela", alegacao:"Pais consideraram inadequada para crianças de cerca de 9 anos uma passagem em que a protagonista deseja ter nascido menino.", eixo:"Sexualidade e gênero", modalidade:"Veto a atividade", estagio:"Pressão pública", situacao:"Sem efeito", desfecho:"Sem retirada de exemplares ou veto à obra comprovado", verificado:"Parcialmente", fontes:["met-bolsa1","met-bolsa2","piaui-bolsa"], pendencia:"A íntegra da nota oficial e o material complementar original não foram localizados em fonte pública. A cobertura contemporânea reproduz os principais esclarecimentos do colégio: o link foi retirado preventivamente para avaliação e não foi reinserido porque a atividade semanal já havia terminado.", nota:"A apuração da revista piauí e a reportagem do Metrópoles de 25/05/2026 esclarecem que A bolsa amarela não foi adotada como leitura obrigatória nem houve retirada de exemplares do acervo. O episódio envolveu um link externo para uma resenha, usado como material complementar em exercício de Língua Portuguesa. O colégio informou que retirou o link preventivamente para avaliação pedagógica; a análise não identificou prejuízo pedagógico nem direcionamento ideológico. O link não foi reinserido porque a atividade semanal já havia terminado. A piauí também ouviu o responsável pela comunicação do colégio, que afirmou que a resenha não apresentava problema pedagógico e que a obra poderia ser adotada. A íntegra da nota oficial e o material complementar original não foram localizados em fonte pública. Este registro documenta pressão pública e retirada temporária de um link de apoio, não banimento ou retirada do livro."},
 {id:"EL-032", ato:"TAU-2025", obra:"Pipoca e Picolé", alegacao:"A vereadora contestou a representação de uma família com duas mães e um pai e declarou: “Nós não vamos aceitar material como esse na nossa sala de aula”.", eixo:"Sexualidade e gênero", modalidade:"Retirada", estagio:"Execução comprovada", situacao:"Revertido", desfecho:"Análise técnica favorável à utilização, condicionada a planejamento pedagógico, respeito à faixa etária e mediação docente; uso efetivo nas escolas ainda não comprovado", verificado:"Parcialmente", fontes:["ovale-tau","ovale-tau-abr10","ovale-tau-jul14"], pendencia:"Obter cópia integral do parecer técnico favorável e registros administrativos que demonstrem a devolução/redistribuição dos exemplares às unidades, identificando escolas e turmas contempladas. A notícia de 14/07/2026 confirma a decisão de inclusão no plano de ensino das turmas adequadas, mas não comprova a execução material.", nota:"A vereadora Zelinda Pastora (PRD) afirmou que pediu ao secretário Hélcio Carvalho dos Santos o recolhimento, após reclamação de uma mãe. A Prefeitura confirmou à Câmara que retirou a obra. Na resposta divulgada em 10/04/2026, informou que os exemplares disponíveis haviam sido encaminhados à Secretaria Municipal de Educação para análise técnica; a maior parte dos livros do programa já havia sido distribuída aos alunos. Em 14/07/2026, a Prefeitura informou que a avaliação da Coordenação de Área e da Equipe de Práticas Pedagógicas da Educação Infantil foi favorável à utilização do livro na rede, desde que o trabalho ocorra com planejamento pedagógico adequado, respeito à faixa etária e mediação docente qualificada. O título permaneceria no plano de ensino das turmas consideradas adequadas, com acompanhamento da Coordenação de Área. A notícia confirma a decisão técnica e a orientação pedagógica de retomada, mas não informa quais unidades receberam exemplares, quando ocorreu a redistribuição nem se o livro voltou efetivamente a ser utilizado em sala. O município havia adquirido 3.280 kits para alunos e 116 para professores, mas a fonte não permite converter esses números em quantidade de exemplares do título."},
 {id:"EL-033", ato:"FUNAP-2020", obra:"Veto à lista de doze livros do projeto Remição em Rede", alegacao:"Em mensagem à articuladora, a Funap afirmou que um título não atendia às expectativas da gestão; em reunião, foram mencionadas três obras como problemáticas, sem identificação pública.", eixo:"Outro", modalidade:"Veto a aquisição ou doação", estagio:"Decisão ou ordem", situacao:"Revertido", desfecho:"Funap determinou a inclusão da lista original no programa em 13/02/2020 e criou equipe multidisciplinar; os exemplares doados haviam sido devolvidos aos doadores em dezembro de 2019, sem comprovação de novo envio", verificado:"Parcialmente", fontes:["bdf-funap","reimao-2023","folha-funap-11fev","folha-funap-14fev","benaglia-heller-2022"], pendencia:"Obter a mensagem original de Reginaldo Caetano da Silva, a ata da reunião de 13/02/2020 e a nota integral da Funap; identificar as três obras questionadas; localizar comprovante de eventual nova doação/envio após a devolução de dezembro de 2019; esclarecer a divergência entre 240 exemplares doados (Folha) e 228 cuja circulação teria sido impedida (Benaglia e Heller). Não presumir que a diferença de 12 corresponda a exemplares entregues ou retidos.", nota:"Em agosto de 2019, as editoras participantes do Remição em Rede doaram 240 exemplares de doze títulos para a biblioteca circulante, segundo a Folha (11 e 14/02/2020). A lista completa dos títulos foi publicada e está registrada nas fontes do caso. Segundo Janine Durand, articuladora do projeto, a lista foi riscada pelo então diretor-executivo da Funap, coronel Henrique Pereira de Souza Neto; em dezembro de 2019, após a medida, as organizadoras solicitaram a devolução dos livros doados, e a Funap respondeu comunicando a restituição. A Folha identifica Reginaldo Caetano da Silva, superintendente da Diretoria de Atendimento e Promoção Humana, como autor de mensagem de 03/12/2019 que dizia que um título não atendia às expectativas da gestão; em reunião, segundo Durand, foram mencionadas três obras, mas sem identificação. Em 13/02/2020, após repercussão pública, a Funap determinou que o programa incluísse a lista inicialmente indicada e anunciou equipe multidisciplinar da Funap, SAP e Mulheres do Brasil para tratar da seleção e da metodologia dos clubes. Isso comprova a reversão da decisão sobre a lista, não a entrega dos exemplares físicos: a notícia da Folha informa que os livros doados haviam sido devolvidos em dezembro de 2019, e não foi localizado comprovante de nova doação ou envio posterior. Há divergência quantitativa que deve permanecer explícita: a Folha registra 240 exemplares doados; Benaglia e Heller (artigo de 2022) mencionam 228 livros cuja circulação teria sido impedida. As fontes consultadas não explicam a diferença de 12; não se deve inferir que esses 12 tenham sido entregues ou liberados. A Folha e as demais fontes não identificam as três obras apontadas como problemáticas."},
 {id:"EL-034", ato:"LIM-2019", obra:"A bolsa amarela", titulo:"Questionamento parlamentar sobre A bolsa amarela — sem retirada comprovada", alegacao:"No requerimento, o vereador perguntou se o livro afrontava princípios morais de pais e alunos e chamou sua temática de “ideologia de gênero”.", eixo:"Sexualidade e gênero", modalidade:"Veto a atividade", estagio:"Pressão pública", situacao:"Sem efeito", desfecho:"Sem retirada: Secretaria defendeu a obra e manteve o projeto de leitura", verificado:"Sim", fontes:["reimao-2023","uninter-bolsa","camara-limeira-req","camara-limeira-resp"], nota:"O Requerimento nº 451/2019, de autoria de Clayton Silva (PSC), pediu informações sobre distribuição, atividades e critérios de escolha de A bolsa amarela. Na justificativa, o vereador afirmou que o livro abordava “ideologia de gênero” e questionou se afrontava princípios morais. A Secretaria Municipal de Educação respondeu em 24 de setembro que a obra integrava o Clube de Leitura, descreveu seu valor literário e declarou que ela não afrontava princípios morais. O documento não registra pedido de retirada nem retirada da obra. Este caso documenta pressão discursiva e questionamento parlamentar, não censura ou banimento."},
 {"id": "EL-035", "ato": "LON-2026", "obra": "O bebê vem com a cegonha?!?", "alegacao": "O pedido de providências descreveu trechos do livro como “conteúdo sensível” e potencialmente geradores de questionamentos junto às famílias. A Folha corrigiu a versão inicial para esclarecer que a iniciativa partiu da equipe da Gerência de Ensino Fundamental da SME, não da direção da escola.", "eixo": "Sexualidade e gênero", "modalidade": "Retirada", "estagio": "Decisão ou ordem", "situacao": "Em aberto", "desfecho": "A SME iniciou levantamento na rede e recolhimento de exemplares para análise pedagógica; não há confirmação pública do alcance por unidade nem da decisão final sobre retorno ou exclusão.", "verificado": "Parcialmente", "fontes": ["fl-londrina", "cbn-londrina-2026", "ogpl-sei-londrina-2026", "fl-londrina-errata-2026", "jornal-londrina-3630-2018", "bonde-londrina-2026"], "pendencia": "Localizar o número SEI, a íntegra do pedido de providências, o despacho da SME, o quantitativo recolhido, a avaliação técnica e a decisão final em repositórios públicos. A Folha informa que teve acesso ao pedido, mas o documento integral e os nomes dos signatários não foram localizados em fonte pública.", "nota": "A Folha de Londrina, em 11/03/2026, informou ter consultado um pedido de providências relacionado ao livro. A errata publicada em 12/03/2026 esclareceu que a iniciativa partiu da equipe da Gerência de Ensino Fundamental da SME, e não da direção da escola municipal. O texto da matéria informa que o pedido de providências foi assinado pela “gerente da unidade” e pela “diretora pedagógica”, mas não publica seus nomes nem permite inferir, sem o documento integral, os vínculos funcionais exatos desses signatários. A CBN Londrina, em 12/03/2026, confirmou que a Secretaria informou ter iniciado levantamento na rede para localizar exemplares e encaminhá-los à análise pedagógica. O número do processo SEI, a íntegra do pedido, os nomes dos signatários e a decisão final não foram localizados. Relatório do Observatório de Gestão Pública de Londrina sobre a transparência no SEI informa que, após 18/02/2025, apenas 15 processos do tipo Pedido de Providências foram classificados como públicos, enquanto 19.588 foram iniciados com restrição; a regra normativa citada no relatório, Portaria SMGP-GAB nº 28/2020, prevê publicidade como padrão. Assim, não é possível presumir que o processo específico esteja publicamente acessível, embora o tipo processual deva ser público em regra. O Bonde reproduz a apuração da Folha e não constitui uma segunda confirmação independente. Os 19.588 processos restritos registrados pelo OGPL são contexto estatístico e não provam que este processo específico esteja restrito.", "data": "2026-03-12", "uf": "PR", "cidade": "Londrina", "tipo": "Escolar", "rede": "Municipal", "governo": "Tiago Amaral (PSD) · prefeitura de Londrina", "quem": "Secretaria Municipal de Educação de Londrina", "autoria": "Patrícia Engel Secco", "editora": "Melhoramentos", "titulo": "O bebê vem com a cegonha?!?"},
 {"id": "EL-036", "ato": "CAN-2024", "obra": "Aparelho Sexual e Cia.", "alegacao": "A prefeita Juliana Maciel chamou os livros de “porcaria” e afirmou que não eram adequados a crianças e adolescentes; o Requerimento nº 149/2024 falava genericamente em acesso infantil a materiais “pornográficos”.", "eixo": "Sexualidade e gênero", "modalidade": "Retirada", "estagio": "Execução comprovada", "situacao": "Em aberto", "desfecho": "O TCE-SC concluiu que os exemplares não foram fisicamente descartados e estavam em poder da Fundação Cultural para análise de destinação. A localização e o acesso atuais não foram comprovados.", "verificado": "Sim", "fontes": ["canoinhas-req149", "canoinhas-sapl-req149", "canoinhas-online-2024", "canoinhas-instagram-juliana", "canoinhas-uol-investigacao", "canoinhas-uol-resposta", "canoinhas-uol-comprova", "canoinhas-local-nota", "canoinhas-secom-mundoteca", "canoinhas-tse-juliana", "canoinhas-bereia", "tce-canoinhas-lev-2024", "canoinhas-sapl-acessorios", "canoinhas-oficio-205", "canoinhas-fundacao-resposta-013", "canoinhas-mpsc-pauta-2024", "canoinhas-mpsc-diario-3698"], "pendencia": "A localização física atual dos dois exemplares e sua eventual reintegração ao acervo permanecem sem comprovação pública. A resposta municipal juntada ao TCE e as fotografias das fls. 14–32 seguem sob sigilo parcial; não foi localizado recibo público de transferência, inventário nominal ou registro posterior de movimentação. O Diário Oficial nº 3698 registra que o Conselho Superior conheceu e negou provimento ao recurso por unanimidade; a fundamentação integral da deliberação não foi recuperada.", "nota": "A decisão singular GCS/GSS-861/2024 do TCE-SC, no levantamento @LEV 24/80041829, registra que a prefeita Juliana Maciel Hoppe afirmou, em resposta juntada às fls. 14–32, que havia um exemplar de cada título e que os livros foram entregues à gestora da Fundação Cultural para análise de destinação. O TCE concluiu que os livros não foram efetivamente jogados no lixo e estavam em poder da Fundação Cultural. O Tribunal também qualificou a conduta pública da prefeita como irresponsável e apontou uso da imagem e da popularidade do cargo e de bens públicos para fins populistas, eleitoreiros e de autopromoção. O levantamento do TCE foi arquivado por baixa materialidade financeira e pela existência de notícia de fato no MPSC; isso não equivale a conclusão do Ministério Público. O Diário Oficial do MPSC nº 3698, publicado em 09/08/2024, registra que o Conselho Superior conheceu e negou provimento ao recurso interposto na Notícia de Fato nº 01.2024.00012159-3, por unanimidade. O extrato comprova o resultado do recurso, mas não reproduz a fundamentação da decisão revisora. O TCE determinou levantamento parcial do sigilo apenas quanto ao Relatório DGE-328/2024 e à decisão; a resposta da prefeita e as fotos das fls. 14–32 não integram o documento público do Diário. O Requerimento 149/2024, assinado por oito vereadores, pediu revisão e reorganização da Mundoteca e separação de materiais por faixa etária, não a retirada expressa destes dois títulos. A nova pesquisa localizou, no SAPL da Câmara, os dois ofícios acessórios do requerimento: o Ofício 205/2024, que o encaminhou à prefeita e ao coordenador de biblioteca, e a resposta da Fundação Cultural no Ofício 013/2024, de 14/05/2024. A resposta esclarece que a Mundoteca era de responsabilidade da Secretaria Municipal de Educação, não da Fundação Cultural; informa 569 obras, duas salas separadas por público, classificação por cores, abertura em 19/11/2022 e apenas um empréstimo registrado entre 15/03 e 14/04/2024. Essa resposta não identifica os dois títulos nem documenta seu recebimento, guarda ou destinação. Ela deve ser lida em conjunto com o TCE, que registra a afirmação da prefeita de que os dois exemplares foram entregues à gestora da Fundação Cultural para análise. O ponto de cadeia de custódia, portanto, continua aberto.", "data": "2024-04-17", "uf": "SC", "cidade": "Canoinhas", "tipo": "Pública", "rede": "Municipal", "governo": "Juliana Maciel Hoppe (PL) · prefeitura de Canoinhas", "quem": "Prefeitura de Canoinhas, sob a prefeita Juliana Maciel Hoppe", "autoria": "Zep (Philippe Chappuis) e Hélène Bruller", "editora": "Seguinte / Companhia das Letras", "titulo": "Aparelho Sexual e Cia."},
 {"id": "EL-037", "ato": "CAN-2024", "obra": "As Melhores do Analista de Bagé", "alegacao": "A prefeita Juliana Maciel incluiu o título no vídeo em que chamou os livros de “porcaria” e afirmou que não eram adequados a crianças e adolescentes; o requerimento parlamentar falava genericamente em materiais “pornográficos”.", "eixo": "Outro", "modalidade": "Retirada", "estagio": "Execução comprovada", "situacao": "Em aberto", "desfecho": "O TCE-SC concluiu que os exemplares não foram fisicamente descartados e estavam em poder da Fundação Cultural para análise de destinação. A localização e o acesso atuais não foram comprovados.", "verificado": "Sim", "fontes": ["canoinhas-req149", "canoinhas-sapl-req149", "canoinhas-instagram-juliana", "canoinhas-uol-investigacao", "canoinhas-uol-resposta", "canoinhas-uol-comprova", "canoinhas-local-nota", "canoinhas-secom-mundoteca", "canoinhas-tse-juliana", "canoinhas-bereia", "tce-canoinhas-lev-2024", "canoinhas-sapl-acessorios", "canoinhas-oficio-205", "canoinhas-fundacao-resposta-013", "canoinhas-mpsc-pauta-2024", "canoinhas-mpsc-diario-3698"], "pendencia": "A localização física atual dos dois exemplares e sua eventual reintegração ao acervo permanecem sem comprovação pública. A resposta municipal juntada ao TCE e as fotografias das fls. 14–32 seguem sob sigilo parcial; não foi localizado recibo público de transferência, inventário nominal ou registro posterior de movimentação. O Diário Oficial nº 3698 registra que o Conselho Superior conheceu e negou provimento ao recurso por unanimidade; a fundamentação integral da deliberação não foi recuperada.", "nota": "A decisão singular GCS/GSS-861/2024 do TCE-SC, no levantamento @LEV 24/80041829, registra que a prefeita Juliana Maciel Hoppe afirmou, em resposta juntada às fls. 14–32, que havia um exemplar de cada título e que os livros foram entregues à gestora da Fundação Cultural para análise de destinação. O TCE concluiu que os livros não foram efetivamente jogados no lixo e estavam em poder da Fundação Cultural. O Tribunal também qualificou a conduta pública da prefeita como irresponsável e apontou uso da imagem e da popularidade do cargo e de bens públicos para fins populistas, eleitoreiros e de autopromoção. O levantamento do TCE foi arquivado por baixa materialidade financeira e pela existência de notícia de fato no MPSC; isso não equivale a conclusão do Ministério Público. O Diário Oficial do MPSC nº 3698, publicado em 09/08/2024, registra que o Conselho Superior conheceu e negou provimento ao recurso interposto na Notícia de Fato nº 01.2024.00012159-3, por unanimidade. O extrato comprova o resultado do recurso, mas não reproduz a fundamentação da decisão revisora. O TCE determinou levantamento parcial do sigilo apenas quanto ao Relatório DGE-328/2024 e à decisão; a resposta da prefeita e as fotos das fls. 14–32 não integram o documento público do Diário. O Requerimento 149/2024, assinado por oito vereadores, pediu revisão e reorganização da Mundoteca e separação de materiais por faixa etária, não a retirada expressa destes dois títulos. A nova pesquisa localizou, no SAPL da Câmara, os dois ofícios acessórios do requerimento: o Ofício 205/2024, que o encaminhou à prefeita e ao coordenador de biblioteca, e a resposta da Fundação Cultural no Ofício 013/2024, de 14/05/2024. A resposta esclarece que a Mundoteca era de responsabilidade da Secretaria Municipal de Educação, não da Fundação Cultural; informa 569 obras, duas salas separadas por público, classificação por cores, abertura em 19/11/2022 e apenas um empréstimo registrado entre 15/03 e 14/04/2024. Essa resposta não identifica os dois títulos nem documenta seu recebimento, guarda ou destinação. Ela deve ser lida em conjunto com o TCE, que registra a afirmação da prefeita de que os dois exemplares foram entregues à gestora da Fundação Cultural para análise. O ponto de cadeia de custódia, portanto, continua aberto.", "data": "2024-04-17", "uf": "SC", "cidade": "Canoinhas", "tipo": "Pública", "rede": "Municipal", "governo": "Juliana Maciel Hoppe (PL) · prefeitura de Canoinhas", "quem": "Prefeitura de Canoinhas, sob a prefeita Juliana Maciel Hoppe", "autoria": "Luis Fernando Verissimo", "editora": "Objetiva", "titulo": "As Melhores do Analista de Bagé"},
 {"id": "EL-038", "ato": "FOZ-2025", "obra": "English After School", "alegacao": "Segundo o sindicato, vereadores acusaram professores de doutrinação e disseram que uma ilustração de duas meninas conversando em inglês induziria a sexualidade precoce. A Secretaria não divulgou o motivo oficial; em 2026, a Justiça mandou a prefeitura apontar as páginas e linhas que considera problemáticas.", "eixo": "Sexualidade e gênero", "modalidade": "Retirada", "estagio": "Execução comprovada", "situacao": "Revertido", "desfecho": "Revertido por liminar e devolvido às escolas em 2025. Em 2026, segundo a própria Secretaria, o material deixou de ser enviado às unidades. A ação segue em curso e uma CPI da Câmara investiga o caso.", "verificado": "Sim", "fontes": ["clickfoz-sinprefi", "h2foz-liminar", "aguas-liminar", "100f-foz", "h2foz-jurisprudencia", "h2foz-cpi-proposta", "h2foz-cpi-nota"], "pendencia": "Íntegra do Memorando nº 40218/2025, da liminar e o número do processo; documento da decisão de 2026 que deixou de enviar o material às escolas.", "nota": "Cerca de 7 mil exemplares do 4º e do 5º ano foram recolhidos de todas as escolas municipais no início de junho de 2025. O juiz Wendel Fernando Brunieri, da 2ª Vara da Fazenda Pública, entendeu que o ato não trazia motivação e suspendeu o memorando. Em fevereiro de 2026, o mesmo juízo mandou a prefeitura apresentar a íntegra da jurisprudência que citou e indicar os trechos do livro que considera impróprios. A CPI registrou que o recolhimento aconteceu enquanto tramitava uma proposta de R$ 576 mil para contratar material de outra editora sem licitação; a relação entre os dois fatos não está comprovada."},
 {"id": "EL-039", "ato": "MEC-2017", "obra": "Enquanto o sono não vem", "alegacao": "Parecer técnico da Secretaria de Educação Básica considerou a obra “não adequada para crianças de sete a oito anos”, pela abordagem do tema incesto.", "eixo": "Violência", "modalidade": "Retirada", "estagio": "Decisão ou ordem", "situacao": "Em vigor", "desfecho": "O ministro determinou o recolhimento dos 93 mil exemplares; não há registro público de devolução", "verificado": "Sim", "fontes": ["ufpel-mec-2017", "cb-mec-2017", "pn-mec-2017", "publica-sono-2018"], "pendencia": "O parecer da Secretaria de Educação Básica não foi publicado; só há o trecho citado pelo MEC à imprensa. Não há balanço público de quantos exemplares foram de fato devolvidos.", "nota": "A obra reúne contos da tradição oral. O que motivou a reação, A triste história de Eredegalda, trata de incesto. O livro chegou às escolas pelo acervo do Pnaic, o Pacto Nacional pela Alfabetização na Idade Certa, distribuído dentro do PNLD a alunos do 1º ao 3º ano; o lote foi selecionado em 2014, no governo Dilma Rousseff. O MEC justificou o recolhimento dizendo que crianças no ciclo de alfabetização são “leitores em formação e com vivências limitadas”. O Ceale, da UFMG, que havia avaliado a obra, publicou novo parecer atribuindo a polêmica a uma “leitura equivocada”. Vitória e Cariacica, no Espírito Santo, já tinham devolvido os exemplares, e Vila Velha suspendeu o uso antes de chegar às salas. Em junho de 2017, depois de questionamentos de professores e pais, o ministro Mendonça Filho pediu pareceres à Secretaria de Educação Básica e à Consultoria Jurídica e decidiu recolher os exemplares. Segundo a Pública, escolas do Espírito Santo já haviam levado o caso às redes locais, que recolheram exemplares antes da distribuição. Em 2018 a obra voltou ao noticiário numa mensagem falsa que atribuía a distribuição a Fernando Haddad, ministro até 2012."},
 {"id": "EL-040", "conjunto": true, "ato": "ARQ-2017", "obra": "Livros didáticos das escolas municipais de Ariquemes (títulos não identificados)", "alegacao": "Vereadores pediram a suspensão e o recolhimento para evitar o debate sobre “ideologia de gênero”; a prefeitura mirou páginas sobre diversidade sexual, casamento homoafetivo e uso de preservativos.", "eixo": "Sexualidade e gênero", "modalidade": "Retirada", "estagio": "Execução comprovada", "situacao": "Revertido", "desfecho": "A prefeitura suspendeu a entrega dos livros no início de 2017; a Justiça Federal arquivou a ação dos Ministérios Públicos em maio, e o TRF1 reverteu a decisão em agosto. A supressão de páginas não foi confirmada", "verificado": "Parcialmente", "fontes": ["bn-ariquemes-2017", "pa-ariquemes-2017", "souza-2018", "acapa-ariquemes-2017", "ra-juiza-2017", "ra-trf1-2017"], "pendencia": "Identificar os títulos e as páginas atingidas; confirmar se a supressão de páginas foi executada; localizar a decisão do TRF1 e o desfecho final da ação civil pública 1513-61.2017.4.01.4100.", "nota": "Oito dos doze vereadores presentes a uma reunião com o prefeito protocolaram ofício pedindo a suspensão e o recolhimento dos livros didáticos distribuídos pelo MEC em 2016. Em 23 de janeiro de 2017, a prefeitura proibiu a entrega dos livros e anunciou que as páginas sobre diversidade sexual, casamento homoafetivo e preservativos seriam suprimidas, com comissão de fiscalização. O Portal Amazônia, no dia seguinte, registrou que o sindicato dos professores pediu que a solicitação não fosse atendida e que a prefeitura, depois de ouvir a Procuradoria Municipal, propôs audiência pública e enquete. Souza (Em Questão, 2018) registra as páginas retiradas e comissões de revisão em todas as escolas; segundo o mesmo artigo, num primeiro recolhimento, em 2016, os alunos já tinham ficado cerca de seis meses sem livro didático. Depois de uma enquete na internet, o prefeito mandou recolher os livros. Em fevereiro, o MPF e o Ministério Público de Rondônia processaram o prefeito e sete vereadores por improbidade (ação 1513-61.2017.4.01.4100). Em 12 de maio de 2017, a juíza Maria da Penha Fontenele, da 1ª Vara Federal de Rondônia, arquivou a ação, entendendo que o prefeito seguia o Plano Municipal de Educação. Os Ministérios Públicos recorreram, e em 23 de agosto o TRF1 concedeu liminar contra a medida, afirmando que impedir a discussão de gênero na escola “significa conferir invisibilidade a tais questões”. A suspensão da entrega está confirmada; a supressão de páginas, não."},
 {"id": "EL-041", "ato": "REC-2016", "obra": "Juntos Nessa 5", "alegacao": "Vereadores contestaram dois parágrafos do capítulo sobre sexualidade que tratam de identidade sexual e de casais do mesmo sexo.", "eixo": "Sexualidade e gênero", "modalidade": "Retirada", "estagio": "Pedido formal", "situacao": "Em aberto", "desfecho": "A prefeitura defendeu o uso do livro; o desfecho do requerimento e do projeto de lei não foi localizado", "verificado": "Parcialmente", "fontes": ["abr-recife-2016", "bdf-generos-2016"], "pendencia": "Segunda fonte com apuração própria: a busca de novembro de 2026 em jornais pernambucanos, no G1 e em repositórios acadêmicos só encontrou reproduções da Agência Brasil; resposta formal ao requerimento e tramitação do Projeto de Lei nº 26/2016 na Câmara do Recife, cujo sistema público bloqueia leitura automática.", "nota": "Livro de ciências do 5º ano, da Leya, distribuído pelo MEC: 623 exemplares do aluno e 23 manuais do professor em dez escolas municipais. Luiz Eustáquio (Rede) apresentou requerimentos pedindo informações sobre os livros e a retirada de material que mencionasse gênero; Carlos Gueiros (PSB) apresentou projeto de lei para proibir a obra. A prefeitura de Geraldo Julio (PSB) defendeu o livro e avisou que não pagaria reposição. Na Assembleia Legislativa, Joel da Harpa (PROS) apresentou o PL 709/2016, com o mesmo objetivo. O Brasil de Fato, em julho de 2016, confirma que Gueiros e Eustáquio pediram a retirada dos livros e registra o PL 26/2016, mas repete os dados da Agência Brasil sobre a posição da prefeitura e do MEC; o Jornal Opção reproduz a mesma reportagem. Por isso o registro segue parcial."},
 {"id": "EL-042", "ato": "GRU-2015", "obra": "Menina não entra", "alegacao": "O presidente da Comissão de Direitos Humanos da Câmara chamou a abordagem de “ideologia de gênero” e pediu o recolhimento das bibliotecas escolares.", "eixo": "Sexualidade e gênero", "modalidade": "Retirada", "estagio": "Pedido formal", "situacao": "Sem efeito", "desfecho": "Sem retirada: a Secretaria de Educação manteve e distribuiu os livros em 139 escolas", "verificado": "Sim", "fontes": ["acapa-guarulhos-2015", "souza-2018"], "nota": "Livro sobre uma menina que, excluída pelos meninos, consegue jogar futebol. Fazia parte de um lote de livros contra o preconceito de gênero e a homofobia que a rede municipal distribuía em 2015. O debate na Câmara reuniu grupos religiosos e vereadores, e a Guarda Civil precisou intervir, segundo a Folha citada pelo portal A Capa. O secretário de Educação, Moacir de Souza, afirmou que os livros já estavam sendo distribuídos em 139 escolas."},
 {"id": "EL-043", "ato": "SA-2018", "obra": "Meninos sem pátria", "alegacao": "Pais de alunos do 6º ano disseram à escola que o livro “doutrina crianças com ideologia comunista”.", "eixo": "Política e ideologia", "modalidade": "Retirada", "estagio": "Execução comprovada", "situacao": "Em aberto", "desfecho": "A escola suspendeu o uso do livro no 6º ano sem nota pública; não há registro de que tenha voltado", "verificado": "Sim", "fontes": ["jb-santo-agostinho-2018", "almeida-hh-2022"], "pendencia": "Confirmar se o livro voltou à lista do colégio nos anos seguintes; localizar a reportagem original do Globo de 2 de outubro de 2018.", "nota": "Romance juvenil de Luiz Puntel, da Série Vaga-Lume (Ática), publicado em 1981, sobre um garoto cuja família vive no exílio durante a ditadura. Estava na 23ª edição em 2018. O caso ganhou repercussão nacional cinco dias antes do primeiro turno da eleição de 2018. A direção não se pronunciou publicamente. Alunos e ex-alunos fecharam a rua em frente ao colégio em protesto, e uma mãe chamou a suspensão de “um absurdo”. O autor disse que o livro trata do retorno dos exilados e não faz apologia ao comunismo. É o primeiro registro de escola privada no catálogo."},
];

/* ---------- OBRAS ----------
   conjunto: true quando o registro é um lote sem lista título a título. */
const LIVROS = {
 "Meninos sem pátria":{"chegada": "Escolha de professores", "autoria": "Luiz Puntel", "editora": "Ática", "genero": "Infantojuvenil", "sinopse": "Um garoto conta a vida da família no exílio durante a ditadura militar e a volta ao Brasil.", "nota": "Série Vaga-Lume, 1981. Usado com alunos do 6º ano do Colégio Santo Agostinho, no Rio."},
 "Enquanto o sono não vem":{"chegada": "Programa federal (PNLD)", "autoria": "José Mauro Brant", "editora": "Rocco", "genero": "Contos", "sinopse": "Contos da tradição oral para ler antes de dormir; um deles trata de incesto.", "nota": "Selecionado pelo MEC em 2014 e distribuído a alunos do 1º ao 3º ano do ensino fundamental."},
 "Livros didáticos das escolas municipais de Ariquemes (títulos não identificados)":{"chegada": "Programa federal (PNLD)", "conjunto": true, "legenda": "Coleções didáticas sem lista de títulos", "nota": "Livros didáticos distribuídos pelo MEC em 2016 às escolas municipais de Ariquemes (RO), do 1º ao 5º ano. As fontes não identificam os títulos."},
 "Juntos Nessa 5":{"chegada": "Programa federal (PNLD)", "editora": "Leya", "genero": "Não ficção", "sinopse": "Livro didático de ciências do 5º ano do ensino fundamental.", "nota": "623 exemplares do aluno e 23 manuais do professor em dez escolas municipais do Recife, segundo o MEC."},
 "Menina não entra":{"chegada": "Acervo, origem não informada", "autoria": "Telma Guimarães Castro Andrade", "editora": "Editora do Brasil", "genero": "Infantil", "sinopse": "Uma menina, excluída pelos meninos, consegue jogar futebol."},
 "English After School":{"chegada": "Escolha de professores", "autoria": "Professores da rede municipal de Foz do Iguaçu, com pesquisadores da UFPR e da PUC-PR", "genero": "Didático de Língua Inglesa (4º e 5º anos)", "sinopse": "Coleção de inglês para os anos iniciais, elaborada na própria rede municipal, com direitos autorais cedidos ao município.", "nota": "Usada havia quatro anos na rede quando foi recolhida, segundo a cobertura. Cerca de 7 mil exemplares."},
 "O bebê vem com a cegonha?!?":{"autoria": "Patrícia Engel Secco", "editora": "Melhoramentos", "ano": 2003, "genero": "Infantil", "sinopse": "Pedro tenta descobrir de onde vêm os bebês e recebe explicações fantasiosas até que sua mãe explica a fecundação e a reprodução humana.", "nota": "Obra presente na rede municipal de Londrina pelo menos desde 2009, segundo registros de aquisição citados pela imprensa. Em março de 2026, a SME iniciou levantamento e recolhimento para análise pedagógica; a decisão final sobre o acervo não foi localizada.", "chegada": "Compra da própria rede", "chegadaSegundo": "registros de aquisição da rede citados pela imprensa"},
 "Aparelho Sexual e Cia.":{"autoria": "Zep (Philippe Chappuis) e Hélène Bruller", "editora": "Seguinte / Companhia das Letras", "ano": 2018, "genero": "Infantojuvenil", "isbn": "9788555340789", "sinopse": "Guia ilustrado sobre anatomia, sexualidade e puberdade, voltado a leitores de 11 a 15 anos.", "nota": "A Mundoteca/FGM informou que a obra tinha indicação juvenil e havia sido emprestada uma vez a uma pessoa adulta. O Requerimento nº 149/2024 e a prefeita a trataram como material impróprio para crianças. A classificação etária deve ser lida conforme a edição brasileira identificada.", "chegada": "Acervo, origem não informada"},
 "As Melhores do Analista de Bagé":{"autoria": "Luis Fernando Verissimo", "editora": "Objetiva", "ano": 2007, "genero": "Crônicas / humor", "nota": "As fontes divergem sobre a indicação etária: a nota da Mundoteca reproduzida pelo UOL a descreve como adulta; o Coletivo Bereia a descreve como juvenil. Não fixar classificação sem conferir a edição e o catálogo editorial.", "chegada": "Acervo, origem não informada"},
 "O avesso da pele":{
   chegada:"Programa federal (PNLD)",
   autoria:"Jeferson Tenório",
   editora:"Companhia das Letras",
   pnld:true,
   capa:"avesso-da-pele",
   ano:2020,
   genero:"Romance",
   premio:"Prêmio Jabuti 2021, categoria Romance Literário",
   sinopse:"Um professor negro é morto pela polícia em Porto Alegre. O filho reconstrói a vida do pai a partir dos objetos, dos silêncios e do que a cidade fez com o corpo dele.",
   nota:"Aprovado no PNLD antes das retiradas. O parecer do MEC, obtido pela Fiquem Sabendo via Lei de Acesso à Informação, avaliou que a linguagem tinha coerência interna com a narrativa. Voltou às escolas do PR e de GO em abril de 2024; no MS, a devolução foi anunciada no fim de abril."},
 "It: A coisa":{
   chegada:"Compra da própria rede", chegadaSegundo:"o governo de SC", chegadaFonte:"cb-sc-origem",
   capa:"it-a-coisa",
   capaCred:"Capa de referência · Suma, 2014",
   autoria:"Stephen King",
   ano:1986,
   genero:"Terror",
   sinopse:"Sete crianças de uma cidade do Maine enfrentam uma entidade que se alimenta do medo, e voltam adultas para terminar o que começaram."},
 "Laranja Mecânica":{
   chegada:"Compra da própria rede", chegadaSegundo:"o governo de SC", chegadaFonte:"cb-sc-origem",
   autoria:"Anthony Burgess",
   capa:"laranja-mecanica",
   ano:1962,
   genero:"Romance",
   sinopse:"Numa Inglaterra distópica, um adolescente violento é submetido a um tratamento de condicionamento que o impede de escolher o mal — e, com isso, de escolher.",
   nota:"Livro sobre os limites do Estado ao suprimir a escolha individual, retirado por decisão de Estado."},
 "Donnie Darko":{
   chegada:"Compra da própria rede", chegadaSegundo:"o governo de SC", chegadaFonte:"cb-sc-origem",
   capa:"donnie-darko",
   capaCred:"Capa de referência · DarkSide, 2016",
   autoria:"Richard Kelly",
   genero:"Roteiro",
   sinopse:"O roteiro do filme de 2001 sobre um adolescente que, depois de escapar de um acidente, passa a ter visões de um coelho que anuncia o fim do mundo."},
 "Coração Satânico":{
   chegada:"Compra da própria rede", chegadaSegundo:"o governo de SC", chegadaFonte:"cb-sc-origem",
   capa:"coracao-satanico",
   capaCred:"Capa de referência · DarkSide, 2017",
   autoria:"William Hjortsberg",
   ano:1978,
   genero:"Romance policial",
   sinopse:"Um detetive de Nova York é contratado para achar um cantor desaparecido e descobre que o cliente tem planos para a alma de alguém."},
 "Exorcismo":{
   chegada:"Compra da própria rede", chegadaSegundo:"o governo de SC", chegadaFonte:"cb-sc-origem",
   capa:"exorcismo",
   capaCred:"Capa de referência · DarkSide, 2016",
   autoria:"Thomas B. Allen",
   ano:1993,
   genero:"Não ficção",
   sinopse:"Reconstrução jornalística do caso de 1949 que inspirou O exorcista, a partir do diário de um dos padres envolvidos."},
 "Ed & Lorraine Warren: demonologistas — arquivos sobrenaturais":{
   chegada:"Compra da própria rede", chegadaSegundo:"o governo de SC", chegadaFonte:"cb-sc-origem",
   capa:"demonologistas",
   capaCred:"Capa de referência · DarkSide, 2016",
   autoria:"Gerald Brittle",
   ano:1980,
   genero:"Não ficção",
   sinopse:"Relatos do casal de investigadores paranormais cujos casos viraram a série de filmes Invocação do Mal."},
 "O diário do diabo: os segredos de Alfred Rosenberg, o maior intelectual do nazismo":{
   chegada:"Compra da própria rede", chegadaSegundo:"o governo de SC", chegadaFonte:"cb-sc-origem",
   capa:"diario-do-diabo",
   capaCred:"Capa de referência · Record, 2017",
   autoria:"Robert K. Wittman e David Kinney",
   ano:2016,
   genero:"Não ficção, história",
   sinopse:"A partir de diários desaparecidos por décadas, reconstrói a trajetória do ideólogo racial do nazismo, condenado em Nuremberg.",
   nota:"Livro crítico ao nazismo, retirado sob a mesma ordem que atingiu obras de terror."},
 "A química entre nós":{
   chegada:"Compra da própria rede", chegadaSegundo:"o governo de SC", chegadaFonte:"cb-sc-origem",
   capa:"quimica-entre-nos",
   capaCred:"Capa de referência · Best Seller, 2012",
   autoria:"Larry Young e Brian Alexander",
   ano:2012,
   genero:"Não ficção",
   sinopse:"Um neurocientista e um jornalista investigam a base biológica do desejo, do amor e do vínculo humano.",
   nota:"Obra de divulgação científica sobre a neurobiologia do vínculo, assinada por um neurocientista e um jornalista, guardada na mesma ordem que livros de terror."},
 "Os 13 porquês":{
   chegada:"Compra da própria rede", chegadaSegundo:"o governo de SC", chegadaFonte:"cb-sc-origem",
   capa:"os-13-porques",
   capaCred:"Capa de referência · Ática, 2009",
   autoria:"Jay Asher",
   ano:2007,
   genero:"Juvenil",
   sinopse:"Uma adolescente deixa treze fitas explicando as razões que a levaram ao suicídio, endereçadas a quem participou de cada uma.",
   nota:"Único título da lista de SC cujo tema central é saúde mental adolescente."},
 "Macunaíma":{
   chegada:"Acervo, origem não informada",
   autoria:"Mário de Andrade",
   capa:"macunaima",
   ano:1928,
   genero:"Rapsódia",
   sinopse:"O herói sem nenhum caráter atravessa um Brasil de mitos, cidades e línguas sobrepostas, no livro que fundou boa parte do modernismo brasileiro.",
   nota:"Estava na lista de Rondônia. O secretário de Educação declarou à imprensa que “Macunaíma é filme e o escambau”."},
 "Memórias póstumas de Brás Cubas":{
   chegada:"Acervo, origem não informada",
   autoria:"Machado de Assis",
   capa:"memorias-postumas",
   ano:1881,
   genero:"Romance",
   sinopse:"Um defunto autor narra a própria vida com ironia, do leito de morte para trás, inaugurando o realismo machadiano.",
   nota:"Leitura obrigatória em vestibulares, listada como “conteúdo inadequado às crianças e adolescentes”."},
 "Os Sertões da Luta":{
   chegada:"Acervo, origem não informada",
   autoria:"Euclides da Cunha",
   ano:1902,
   genero:"Não ficção",
   sinopse:"O relato de Euclides da Cunha sobre a Guerra de Canudos e a destruição do arraial pelo Exército, um dos livros fundadores do pensamento social brasileiro."},
 "O castelo":{
   chegada:"Acervo, origem não informada",
   capa:"o-castelo",
   capaCred:"Capa de referência · Companhia das Letras, 2008",
   autoria:"Franz Kafka",
   ano:1926,
   genero:"Romance",
   sinopse:"Um agrimensor tenta chegar ao castelo que o contratou e esbarra numa burocracia que nunca se explica nem se deixa alcançar."},
 "Contos de terror, de mistério e de morte":{
   chegada:"Acervo, origem não informada",
   capa:"contos-de-terror",
   capaCred:"Capa de referência · Nova Fronteira, 2017",
   autoria:"Edgar Allan Poe",
   genero:"Contos",
   sinopse:"Reunião dos contos de Poe que fundaram a literatura de horror psicológico moderna."},
 "A vida como ela é":{
   chegada:"Acervo, origem não informada",
   autoria:"Nelson Rodrigues",
   genero:"Crônicas",
   sinopse:"Crônicas do cotidiano carioca, publicadas originalmente em jornal, sobre traição, desejo e hipocrisia de classe média."},
 "Beijo no asfalto":{
   chegada:"Acervo, origem não informada",
   capa:"beijo-no-asfalto",
   capaCred:"Capa de referência · Nova Fronteira, 2021",
   autoria:"Nelson Rodrigues",
   ano:1961,
   genero:"Teatro",
   sinopse:"Um homem beija um desconhecido atropelado, e a imprensa transforma o gesto em escândalo que destrói sua vida.",
   nota:"Peça sobre linchamento moral fabricado pela imprensa."},
 "Obras de Rubem Fonseca (19 itens; 18 títulos distintos)":{
   chegada:"Acervo, origem não informada",
   legenda:"19 itens do mesmo autor; 18 títulos distintos",
   autoria:"Rubem Fonseca",
   conjunto:true,
   nota:"A cópia pública do Adendo ID 10053329 reproduz 19 linhas atribuídas a Rubem Fonseca: Diário de um Fescenino; Bufo & Spallanzani; O Melhor de Rubem Fonseca; Secreções, Excreções e Desatinos; Os Prisioneiros; Agosto; Amálgama; O Doente Molière; A Coleira do Cão; O Seminarista (duas ocorrências); Histórias Curtas; História de Amor; O Buraco na Parede; Feliz Ano Novo; Calibre 22; Mandrake: A Bíblia e a Bengala; Lúcia McCartney; Romance Negro e Outras Histórias. São 18 títulos distintos em 19 itens. Fonseca já havia sido censurado na ditadura militar, quando Feliz Ano Novo foi proibido."},
"Relação do Adendo 10053329 (43 itens; 42 títulos distintos)":{
   legenda:"Relação documental, não uma obra",
   autoria:"Relação administrativa da Seduc/RO",
   conjunto:true,
   nota:"Registro de conjunto documental, não de uma obra literária. Reúne os 17 títulos distintos da relação que não têm ficha individual nem pertencem ao conjunto de Rubem Fonseca ou aos sete registros individualizados. A relação completa está transcrita na nota do registro EL-024. O Adendo tem 43 linhas numeradas e 42 títulos distintos por duplicação de O Seminarista."
 },
 "Obra completa de Rubem Alves":{
   chegada:"Acervo, origem não informada",
   legenda:"Obra completa, sem lista",
   autoria:"Rubem Alves",
   conjunto:true,
   nota:"O memorando determinava, em nota de rodapé, que todos os livros do autor fossem recolhidos. Educador e teólogo, é considerado um dos principais pedagogos brasileiros ao lado de Paulo Freire."},
 "Relação do Adendo 10053329 (43 itens; 42 títulos distintos)":{
   chegada:"Acervo, origem não informada",
   legenda:"Registro documental agrupado",
   autoria:"Vários, entre eles Caio Fernando Abreu, Carlos Heitor Cony e Ferreira Gullar",
   conjunto:true,
   nota:"Registro de conjunto documental, não de uma obra literária. O Adendo ID 10053329 contém 43 linhas numeradas e 42 títulos distintos, pois O Seminarista aparece duas vezes. Este conjunto reúne os 17 títulos distintos que não têm ficha individual nem pertencem ao conjunto de Rubem Fonseca ou aos sete registros individualizados: O Melhor de Caio Fernando Abreu — Contos e Crônicas (Caio Fernando Abreu); Poemas Escolhidos (Ferreira Gullar); A Volta por Cima (Carlos Heitor Cony); Mar de Histórias — todos os volumes (Aurélio Buarque de Holanda Ferreira); O Irmão que tu me Deste (Carlos Heitor Cony); A Menina de Cá (Carlos Nascimento Silva); Guia Millôr da História do Brasil (Ivan Rubino Fernandes); O Ventre (Carlos Heitor Cony); Rosa Vegetal de Sangue (Carlos Heitor Cony); O Mistério da Moto de Cristal (Ana Lee e Carlos Heitor Cony); Estrangeira (Sonia Rodrigues); O Melhor de Nelson Rodrigues (Nelson Rodrigues); 13 dos Melhores Contos de Amor (Rosa Amanda Strausz); Mil e Uma Noites (Carlos Heitor Cony); Vestido de Noiva — graphic novel (autoria não indicada na relação); O Ato e o Fato (Carlos Heitor Cony); O Harém das Bananeiras (Carlos Heitor Cony). A instrução sobre todos os livros de Rubem Alves aparece fora da tabela e é registrada separadamente em EL-023. A transcrição normaliza erros evidentes de grafia do documento (Gular/Gullar, Hitor/Heitor, Ruben/Rubem e Alfalto/Asfalto); a primeira linha aparece truncada no PDF como “O Melhor De” e foi completada com base na relação publicada pela Folha."},
 "Anúncio de descarte de 5.165 exemplares classificados como de “temática alheia à negra”":{
   chegada:"Acervo, origem não informada",
   legenda:"5.165 exemplares",
   autoria:"Vários, entre eles Karl Marx, Max Weber, Eric Hobsbawm, Celso Furtado, Caio Prado Jr. e Machado de Assis",
   conjunto:true,
   nota:"O relatório classificou 5.165 exemplares do acervo, perto de metade do total, como de temática alheia à negra. O Conselho Federal de Biblioteconomia apontou que o relatório que embasou o expurgo não constitui política de desenvolvimento de coleções e foi feito sem bibliotecários."},
 "Segregação de cerca de 300 livros no chamado “Acervo da Vergonha”":{
   chegada:"Acervo, origem não informada",
   legenda:"Cerca de 300 livros",
   autoria:"Vários, entre eles Antonio Gramsci, Marilena Chauí, Simone de Beauvoir, Karl Marx e Celso Furtado",
   conjunto:true,
   nota:"Resposta institucional à decisão judicial: impedido de descartar, o órgão isolou as obras em sala própria, o que o catálogo classifica como ocultação ou restrição de acesso."},
 "O menino marrom":{
   chegada:"Escolha de professores",
   autoria:"Ziraldo",
   editora:"Melhoramentos",
   capa:"menino-marrom",
   ano:1986,
   genero:"Infantil",
   sinopse:"A amizade entre um menino marrom e um menino cor-de-rosa, e as perguntas dos dois sobre cor, diferença e preconceito.",
   nota:"Clássico de Ziraldo sobre racismo para crianças, suspenso por “conteúdo agressivo” e devolvido por decisão judicial."},
 "Meninas sonhadoras, mulheres cientistas":{
   chegada:"Acervo, origem não informada",
   autoria:"Flávia Martins de Carvalho",
   editora:"Mostarda",
   capa:"meninas-sonhadoras",
   genero:"Infantojuvenil, não ficção",
   sinopse:"Trajetórias de mulheres brasileiras na pesquisa e na vida pública, escrito por uma juíza do TJSP.",
   nota:"Recolhido depois que um vereador criticou a presença de Marielle Franco e Débora Diniz entre as retratadas. Dois anos depois, a Justiça chamou a retirada de censura."},
 "Eu receberia as piores notícias de seus lindos lábios":{
   chegada:"Escolha de professores",
   autoria:"Marçal Aquino",
   editora:"Companhia das Letras",
   capa:"piores-noticias",
   ano:2005,
   genero:"Romance",
   sinopse:"Num garimpo do Pará, um fotógrafo se envolve com a mulher de um pastor. O desejo e a violência dividem o mesmo território.",
   nota:"Saiu da lista de leituras do vestibular, o que o catálogo registra como exclusão de lista de leitura. A decisão veio dias depois de um deputado chamar o livro de pornográfico em vídeo."},
 "A mamãe vai ter um bebê":{
   chegada:"Doação ou origem externa",
   genero:"Infantil",
   nota:"Livro de educação sexual para crianças pequenas. A lei aprovada em seguida pela Câmara de Londrina permite explicação científica sobre reprodução, que é o assunto do livro."},
 "A bolsa amarela":{
   chegada:"Escolha de professores",
   capa:"bolsa-amarela",
   capaCred:"Capa de referência · Casa Lygia Bojunga, 2013",
   autoria:"Lygia Bojunga",
   ano:1976,
   genero:"Infantojuvenil",
   sinopse:"Raquel esconde numa bolsa amarela três vontades que não cabem em casa: crescer, ter nascido menino e escrever.",
   nota:"Clássico de Lygia Bojunga, primeira autora fora da Europa e dos EUA a receber o Prêmio Hans Christian Andersen, em 1982."},
 "Pipoca e Picolé":{
   chegada:"Compra da própria rede",
   autoria:"Adriana Lisboa",
   editora:"Elo",
   genero:"Infantil",
   sinopse:"A menina Pipoca e o cachorro Picolé numa família com um pai e duas mães.",
   nota:"Comprado pela própria prefeitura um ano antes, por R$ 1,2 milhão, e retirado das escolas pela gestão seguinte."},
 "Veto à lista de doze livros do projeto Remição em Rede":{
   chegada:"Doação ou origem externa",
   legenda:"12 títulos, 240 exemplares",
   autoria:"Vários, entre eles Gabriel García Márquez, Albert Camus, Harper Lee, Isabela Figueiredo e Édouard Louis",
   editora:"Record, Planeta, Todavia e Boitempo",
   conjunto:true,
   nota:"Livros para presos reduzirem a pena pela leitura, direito previsto em lei. Entre os doados, um romance de um Nobel de Literatura."},
};

/* ---------- ATOS ----------
   papeis: o texto de cada papel, como aparece na ficha. Só se nomeia quem tem fonte. */
/* docPrimario: fontes cadastradas que são documento oficial primário do ato ou do desfecho
   (ofício, decisão, ata, diário oficial, resposta formal do órgão). Com registro verificado,
   eleva o nível para "Documentado". Ver NIVEIS e a página Metodologia. */
const ATOS = {
 "SA-2018":{"nome": "Suspensão de Meninos sem pátria no Colégio Santo Agostinho (Rio de Janeiro)", "data": "2018-10-01", "uf": "RJ", "cidade": "Rio de Janeiro", "tipo": "Escolar", "rede": "Privada", "governo": "Colégio Santo Agostinho · escola privada, sem governo responsável", "quem": "Direção do Colégio Santo Agostinho, a pedido de pais de alunos", "pressao": "Pais de alunos do 6º ano reclamaram à escola de suposta doutrinação comunista.", "documento": "Nenhum documento da escola foi publicado. O dia exato da decisão não está nas fontes; a repercussão começou em 2 de outubro de 2018.", "papeis": {"pressao": "Pais de alunos do 6º ano, sem identificação.", "decisor": "Direção do Colégio Santo Agostinho.", "resposta": "Alunos e ex-alunos protestaram em frente ao colégio."}},
 "MEC-2017":{"nome": "Recolhimento de Enquanto o sono não vem pelo Ministério da Educação", "data": "2017-06-01", "uf": "DF", "cidade": "Brasília", "tipo": "Escolar", "rede": "Federal", "governo": "Michel Temer (MDB) · governo federal", "quem": "Ministro da Educação, Mendonça Filho", "documento": "Parecer técnico da Secretaria de Educação Básica citado pela imprensa; o parecer e o ato do ministro não foram localizados em fonte pública. O partido do presidente na data se chamava PMDB.", "papeis": {"pressao": "Professores e pais, sem identificação, segundo o MEC.", "decisor": "Mendonça Filho (DEM), ministro da Educação, decidiu recolher os exemplares depois de pareceres da Secretaria de Educação Básica e da Consultoria Jurídica.", "executor": "Ministério da Educação e redes de ensino que receberam os exemplares.", "resposta": "Não houve reversão registrada."}},
 "ARQ-2017":{"reversao": {"via": "Decisão judicial", "data": "2017-08-23", "fonte": "ra-trf1-2017", "nota": "Liminar do TRF1 em recurso dos Ministérios Públicos contra a sentença que havia arquivado a ação."}, "nome": "Recolhimento de livros didáticos e supressão de páginas (Ariquemes)", "data": "2017-01-23", "uf": "RO", "cidade": "Ariquemes", "tipo": "Escolar", "rede": "Municipal", "governo": "Thiago Flores (MDB) · prefeitura de Ariquemes", "quem": "Prefeito Thiago Flores, a pedido de vereadores", "pressao": "Oito vereadores protocolaram ofício pedindo a suspensão e o recolhimento dos livros.", "documento": "Ofício dos vereadores e ato da prefeitura citados pela imprensa; nenhum dos dois foi localizado em fonte pública. Thiago Flores foi eleito em 2016 pelo PMDB, que passou a se chamar MDB em dezembro de 2017.", "papeis": {"pressao": "Oito vereadores protocolaram ofício pedindo a suspensão e o recolhimento; Amalec da Costa (PSDB) defendeu a medida em entrevista.", "decisor": "Prefeito Thiago Flores.", "executor": "Secretaria Municipal de Educação e comissão de fiscalização anunciada pela prefeitura.", "resposta": "O Sintero, sindicato dos trabalhadores em educação, pediu por ofício que a solicitação não fosse atendida."}},
 "REC-2016":{"nome": "Requerimentos e projeto de lei contra Juntos Nessa 5 (Recife)", "data": "2016-03-01", "uf": "PE", "cidade": "Recife", "tipo": "Escolar", "rede": "Municipal", "governo": "Geraldo Julio (PSB) · prefeitura do Recife", "quem": "Vereadores Luiz Eustáquio (Rede) e Carlos Gueiros (PSB)", "pressao": "Luiz Eustáquio (Rede) apresentou requerimento pedindo a retirada; Carlos Gueiros (PSB) apresentou o Projeto de Lei nº 26/2016.", "documento": "Requerimentos de Luiz Eustáquio e Projeto de Lei nº 26/2016, citados pela Agência Brasil; íntegras não localizadas.", "papeis": {"pressao": "Carlos Gueiros (PSB) apresentou projeto de lei para proibir o livro.", "pedido": "Luiz Eustáquio (Rede) pediu ao prefeito a retirada de material que mencionasse gênero.", "decisor": "Não houve decisão de retirada registrada.", "resposta": "A prefeitura defendeu o uso do livro."}},
 "GRU-2015":{"nome": "Pedido de recolhimento de Menina não entra (Guarulhos)", "data": "2015-05-01", "uf": "SP", "cidade": "Guarulhos", "tipo": "Escolar", "rede": "Municipal", "governo": "Sebastião Almeida (PT) · prefeitura de Guarulhos", "quem": "Vereador Romildo Santos (PSDB), presidente da Comissão de Direitos Humanos", "pressao": "Romildo Santos (PSDB) pediu o recolhimento do livro das bibliotecas escolares.", "documento": "Pedido citado por Souza (Em Questão, 2018) e debate relatado pela Folha via A Capa; documento formal não localizado.", "papeis": {"pedido": "Romildo Santos (PSDB), presidente da Comissão de Direitos Humanos da Câmara.", "decisor": "Não houve decisão de retirada.", "resposta": "O secretário de Educação, Moacir de Souza, manteve a distribuição em 139 escolas."}},
 "RS-2024":{
   reversao:{via:"Recuo da administração", data:"2024-03-01", fonte:"bdf-rs", nota:"A Secretaria estadual desautorizou a ordem da coordenadoria no mesmo dia."},
   nome:"Ofício da 6ª Coordenadoria Regional de Educação (RS)",
   data:"2024-03-01",
   fim:"2024-03-05",
   uf:"RS",
   cidade:"Santa Cruz do Sul e outros 17 municípios",
   tipo:"Escolar",
   rede:"Estadual",
   governo:"Eduardo Leite (PSDB) · governo do RS",
   quem:"Coordenadoria regional de educação",
   documento:"Ofício da 6ª Coordenadoria Regional de Educação; número do expediente ainda não cadastrado.",
   papeis:{
     pressao:"Janaína Venzon, diretora da Escola Estadual Ernesto Alves: fez a crítica pública em vídeo. O cadastro não sustenta que ela tenha expedido a ordem administrativa.",
     decisor:"Luiz Ricardo Pinho de Moura, coordenador da 6ª Coordenadoria Regional de Educação: o ofício da coordenadoria determinou a retirada.",
     assinantes:"Luiz Ricardo Pinho de Moura, coordenador da 6ª CRE.",
     executor:"6ª Coordenadoria Regional de Educação, com alcance informado de 18 municípios do Vale do Rio Pardo.",
     resposta:"A Secretaria de Educação do Rio Grande do Sul desautorizou a ordem no mesmo dia."
   }},
 "PR-2024":{
   reversao:{via:"Recuo da administração", data:"2024-04-12", fonte:"pn-volta", nota:"A Secretaria anunciou a devolução com orientações pedagógicas. A editora havia ido à Justiça, mas a volta foi decisão do governo."},
   nome:"Ofícios da Secretaria da Educação do Paraná e do Núcleo Regional de Curitiba",
   data:"2024-03-04",
   fim:"2024-04-09",
   uf:"PR",
   cidade:"Curitiba e região",
   tipo:"Escolar",
   rede:"Estadual",
   governo:"Ratinho Júnior (PSD) · governo do PR",
   quem:"Secretaria estadual",
   documento:"Ofício da Secretaria de Estado da Educação do Paraná, encaminhado em 4 de março de 2024 aos núcleos regionais; a reportagem reproduz o teor e identifica Anderfábio Oliveira dos Santos como signatário do ofício da Secretaria e Laura Patrícia Lopes como signatária de ofício subsequente do NRE de Curitiba.",
   papeis:{
     decisor:"Secretaria de Estado da Educação do Paraná, que encaminhou ofício aos chefes dos núcleos regionais em 4 de março de 2024; o recolhimento seria realizado entre os dias 5 e 8.",
     assinantes:"Anderfábio Oliveira dos Santos, diretor de Educação, e Laura Patrícia Lopes, chefe do Núcleo Regional de Educação de Curitiba.",
     executor:"Secretaria estadual e Núcleo Regional de Educação de Curitiba.",
     resposta:"A obra voltou às escolas em abril de 2024, acompanhada de orientações pedagógicas."
   }},
 "GO-2024":{
   reversao:{via:"Recuo da administração", data:"2024-04-05", fonte:"dn-volta-go-pr", nota:"A Secretaria informou que o livro voltou ao acervo depois de análise interna."},
   nome:"Recolhimento na rede estadual de Goiás",
   data:"2024-03-07",
   fim:"2024-04-09",
   uf:"GO",
   tipo:"Escolar",
   rede:"Estadual",
   governo:"Ronaldo Caiado (União Brasil) · governo de GO",
   quem:"Secretaria estadual",
   documento:"Medida atribuída à Secretaria de Estado da Educação de Goiás; o documento original ainda não está identificado no cadastro.",
   papeis:{
     decisor:"Secretaria de Estado da Educação de Goiás.",
     assinantes:"A pessoa responsável pela decisão não está identificada nas fontes cadastradas.",
     executor:"Rede estadual de ensino.",
     resposta:"O livro voltou às escolas em abril de 2024."
   }},
 "MS-2024":{
   cumprimento:{desde:"2024-04-23", decisao:"Governo anunciou a devolução de O avesso da pele às escolas estaduais", falta:"Só 75 das 349 escolas tinham recebido o livro antes do recolhimento, e a redistribuição não foi confirmada", fonte:"cgn-volta"},
   reversao:{via:"Recuo da administração", data:"2024-04-23", fonte:"cgn-volta", nota:"O governo anunciou a devolução; a redistribuição às escolas não foi confirmada."},
   nome:"Recolhimento na rede estadual de Mato Grosso do Sul",
   data:"2024-03-07",
   fim:"2024-04-23",
   uf:"MS",
   tipo:"Escolar",
   rede:"Estadual",
   governo:"Eduardo Riedel (PSDB) · governo do MS",
   quem:"Governo estadual",
   pressao:"Deputado estadual Rinaldo Modesto (Podemos)",
   documento:"Ordem de recolhimento da rede estadual de Mato Grosso do Sul; documento formal e signatário ainda precisam ser identificados.",
   papeis:{
     pressao:"Rinaldo Modesto (Podemos), deputado estadual: pediu a retirada na Assembleia Legislativa.",
     decisor:"Eduardo Riedel, governador de Mato Grosso do Sul: a Secretaria confirmou à CartaCapital que o recolhimento atendia a uma determinação do governador, após análise da própria pasta.",
     assinantes:"A autoridade que formalizou a ordem não está identificada no cadastro.",
     executor:"Secretaria de Estado de Educação de Mato Grosso do Sul.",
     resposta:"A Secretaria anunciou a devolução em 23 de abril de 2024, com orientações pedagógicas."
   }},
 "SC-2024":{
   cumprimento:{desde:"2024-04-23", decisao:"Secretaria orientou recolher o livro para análise pedagógica", falta:"O resultado da análise e a devolução às bibliotecas não foram divulgados", fonte:"alesc-ind154-doc"},
   docPrimario:["alesc-ind154-doc"],
   nome:"Orientação de recolhimento e análise pedagógica de O avesso da pele nas bibliotecas estaduais de Santa Catarina",
   data:"2024-03-07",
   uf:"SC",
   tipo:"Escolar",
   rede:"Estadual",
   governo:"Jorginho Mello (PL) · governo de SC",
   quem:"Secretaria de Estado da Educação de Santa Catarina",
   documento:"Informação nº 304/2024/SED/DIEN, de 23/04/2024, no Processo Digital SCC 4288/2024, encaminhada em resposta à IND/0154/2024 da ALESC. O documento registra orientação da SED para que as escolas recolhessem o livro das bibliotecas e realizassem análise pedagógica; Ofício/Gabs nº 1017/2024, de 28/05/2024, assinado pelo Secretário Aristides Cimadon, encaminhou a manifestação técnica.",
   papeis:{
     decisor:"Secretaria de Estado da Educação de Santa Catarina; a orientação institucional está confirmada na Informação nº 304/2024/SED/DIEN.",
     assinantes:"A Informação técnica foi assinada digitalmente por Márcia Loch, Diretora de Ensino, e Jocelete Isaltina da Silveira dos Santos, Gerente do Ensino Médio e Profissional. O Ofício/Gabs nº 1017/2024 foi assinado pelo Secretário de Estado da Educação Aristides Cimadon. As assinaturas comprovam a autoria da resposta institucional, não necessariamente a autoria individual da orientação operacional original.",
     executor:"Escolas estaduais, às quais a SED orientou recolher exemplares das bibliotecas para análise pedagógica. Não há lista pública das unidades que efetivamente executaram a orientação.",
     resposta:"A SED justificou a orientação como análise pedagógica do título e do acervo, considerando os projetos político-pedagógicos e as faixas etárias. O documento não informa o resultado da análise nem a posterior devolução/redistribuição do título."
   }},
 "SC-2023":{
   nome:"Ofício circular de 7 de novembro de 2023 (CRE de Florianópolis)",
   data:"2023-11-07",
   uf:"SC",
   cidade:"Florianópolis",
   tipo:"Escolar",
   rede:"Estadual",
   governo:"Jorginho Mello (PL) · governo de SC",
   quem:"Coordenadoria Regional de Educação de Florianópolis",
   documento:"Ofício circular de 7 de novembro de 2023, reproduzido e descrito pela imprensa; determina retirar nove obras de circulação e armazená-las em local inacessível à comunidade escolar. A identificação da CRE de Florianópolis foi confirmada por cruzamento dos atos de nomeação publicados no Diário Oficial: Waldemar Ronssem Júnior foi designado Supervisor Regional de Educação da CRE de Florianópolis em 10/02/2023 (Ato nº 638/2023), e Anelise dos Santos de Medeiros foi designada Integrador Regional de Educação da mesma CRE em 16/08/2023 (Ato nº 2638/2023). Ambos ocupavam as funções na data do ofício. O número do expediente e a cópia integral oficial do ofício ainda não foram localizados.",
   papeis:{
     decisor:"Estrutura regional da Secretaria de Estado da Educação: Coordenadoria Regional de Educação de Florianópolis.",
     assinantes:"Waldemar Ronssem Júnior, Supervisor Regional de Educação da CRE de Florianópolis, e Anelise dos Santos de Medeiros, Integrador Regional de Educação da mesma CRE. Os atos de designação constam do Diário Oficial de 10/02/2023 e 16/08/2023, respectivamente.",
     executor:"Coordenadoria Regional de Educação de Florianópolis e unidades escolares alcançadas pelo ofício; a lista completa de escolas destinatárias ainda não foi localizada.",
     fiscalizacao:"Leonel Camasão (PSOL), suplente de vereador, levou o caso ao Ministério Público. O cadastro o identifica como autor da denúncia posterior, não como autor do pedido de retirada."
   }},
 "RO-2020":{
   reversao:{via:"Recuo da administração", data:"2020-02-06", fonte:"mpf-ro-arquivamento", nota:"Ordem suspensa no mesmo dia, segundo o MPF. O MP-RO atuou depois e teve a recomendação acatada."},
   docPrimario:["mpf-ro-arquivamento"],
   nome:"Memorando-Circular nº 4/2020/SEDUC-DGE (RO)",
   data:"2020-02-06",
   fim:"2020-02-06",
   uf:"RO",
   tipo:"Escolar",
   rede:"Estadual",
   governo:"Marcos Rocha (PSL) · governo de RO",
   quem:"Secretaria estadual",
   documento:"Memorando-Circular nº 4/2020/SEDUC-DGE, processo SEI 0029.051300/2020-91, com adendo que contém a relação de títulos. O artigo acadêmico de 2024 reproduz imagem do memorando. Como fonte primária de desfecho, o Diário do MPF nº 161/2021, publicado em 30 de agosto de 2021, registra o resultado do inquérito civil nº 1.31.000.000213/2020-61: solicitação verbal suspensa no mesmo dia, devolução dos livros recolhidos, ausência de recolhimento concretizado, sindicância aberta pela Seduc, recomendação do MP-RO acatada e arquivamento homologado. A íntegra do processo SEI e da sindicância estadual ainda não foi localizada.",
   papeis:{
     decisor:"O Memorando-Circular nº 4/2020/SEDUC-DGE traz a determinação em nome do secretário de Educação Suamy Vivecananda. A Seduc depois negou ter ordenado o recolhimento e afirmou que o processo foi encerrado antes de tramitar para escolas ou órgãos externos.",
     assinantes:"O fecho do documento traz o nome de Suamy Vivecananda; o registro eletrônico aponta assinatura digital de Irany de Oliveira Lima Morais, diretora-geral de Educação. São funções documentais distintas: nome indicado no fecho e signatária eletrônica.",
     executor:"O memorando encaminhava a providência às coordenadorias regionais. A Seduc afirmou que não houve tramitação para escolas; há relatos de exemplares encaixotados em algumas unidades, mas o alcance da execução não está comprovado.",
     resposta:"No dia 6 de fevereiro, o secretário Suamy Vivecananda chamou o memorando de \"fake\" em entrevista ao Rondônia Dinâmica, e o código verificador do SEI aparecia como inválido naquele momento. O MPF registrou que a solicitação verbal foi suspensa no mesmo dia, que exemplares recolhidos foram devolvidos às escolas e que o recolhimento não se concretizou. A Seduc abriu sindicância; o MP-RO instaurou procedimento e emitiu recomendação, acatada pela Secretaria. O inquérito civil do MPF foi arquivado e o arquivamento homologado em 2021."
   }},
 "PALM-2021-06":{
   docPrimario:["relatorio-gestao-palm-2021"],
   nome:"Relatório “Retrato do Acervo” e anúncio de descarte (Fundação Palmares)",
   data:"2021-06-11",
   uf:"DF",
   cidade:"Brasília",
   tipo:"Especializada",
   rede:"Federal",
   governo:"Jair Bolsonaro · governo federal",
   quem:"Presidência da Fundação Cultural Palmares",
   pressao:"Sérgio Camargo, então presidente da Fundação Cultural Palmares, apresentou o relatório e defendeu a retirada dos exemplares classificados pela gestão como de temática alheia à negra.",
   documento:"Relatório Público 01 – CNIRC, “Retrato do Acervo: três décadas de dominação marxista na Fundação Cultural Palmares”, divulgado em 11 de junho de 2021 (link original recuperado; acesso técnico ao PDF não confirmado nesta revisão). A lista completa dos 5.165 exemplares e a conferência do total de itens permanecem pendentes; há divergência entre os totais publicados contemporaneamente. A decisão judicial sobre cerca de 300 livros é registrada separadamente no EL-026.",
   papeis:{
     decisor:"Presidência da Fundação Cultural Palmares, durante a gestão de Sérgio Camargo, que divulgou o relatório e anunciou a intenção de descartar 5.165 exemplares.",
     responsavel:"Sérgio Camargo, então presidente da Fundação Cultural Palmares, apresentou publicamente a classificação e a proposta de descarte. O relatório original e a lista completa dos exemplares ainda precisam ser obtidos.",
     executor:"Fundação Cultural Palmares; não há comprovação de que os 5.165 exemplares tenham sido efetivamente descartados.",
     resposta:"Não foi localizada comprovação do destino final dos 5.165 exemplares. A decisão judicial sobre a doação de cerca de 300 livros, em ação distinta, está registrada no EL-026."
   }},
 "PALM-2021-08":{
   nome:"Anúncio do “Acervo da Vergonha” (Fundação Palmares)",
   data:"2021-08-03",
   uf:"DF",
   cidade:"Brasília",
   tipo:"Especializada",
   rede:"Federal",
   governo:"Jair Bolsonaro · governo federal",
   quem:"Presidência da Fundação Cultural Palmares",
   pressao:"Sérgio Camargo, então presidente da Fundação Cultural Palmares, anunciou em suas redes a criação de uma “Ala/Acervo da Vergonha” para livros que classificava como marxistas, bandidólatras ou desviantes.",
   documento:"Anúncio público de Sérgio Camargo em 3 de agosto de 2021 sobre a criação do “Acervo/Ala da Vergonha”, após a Procuradoria-Geral Federal informar ao juízo, em julho, a desistência da doação de cerca de 300 livros. O documento que formalize a segregação física e o regime de acesso não foi localizado.",
   papeis:{
     decisor:"Presidência da Fundação Cultural Palmares, durante a gestão de Sérgio Camargo.",
     responsavel:"Sérgio Camargo anunciou publicamente a intenção de separar os livros em seção chamada “Acervo/Ala da Vergonha”.",
     executor:"A Fundação Cultural Palmares; a efetiva separação física, sua duração e o regime de acesso público ainda precisam ser comprovados.",
     resposta:"A Procuradoria-Geral Federal informou ao juízo que Camargo desistira da doação em julho de 2021. Em agosto, ele anunciou a segregação dos livros. Não foi localizado documento que comprove quando o acesso público foi restabelecido."
   }},
 "MG-2024":{
   reversao:{via:"Decisão judicial", data:"2024-06-27", fonte:"decisao-lafaiete", nota:"Ação popular. Decisão de 27/06/2024 mandou cancelar a suspensão; a sentença de 02/12/2024 anulou o ato."},
   docPrimario:["comunicado-lafaiete","sentenca-lafaiete"],
   nome:"Suspensão de atividades com O menino marrom (Conselheiro Lafaiete)",
   data:"2024-06-19",
   fim:"2024-06-27",
   uf:"MG",
   cidade:"Conselheiro Lafaiete",
   tipo:"Escolar",
   rede:"Municipal",
   governo:"Prefeitura de Conselheiro Lafaiete · gestão Mário Marcus Leão Dutra",
   quem:"Secretaria Municipal de Educação",
   pressao:"Pais, familiares e autoridades locais contestaram a abordagem pedagógica da obra; o comunicado oficial não identifica nominalmente os reclamantes.",
   documento:"Comunicado oficial da Secretaria Municipal de Educação, publicado em 20 de junho de 2024, reconhecendo a orientação para suspender temporariamente os trabalhos pedagógicos; sentença de mérito de 02/12/2024, no processo nº 5006658-14.2024.8.13.0183, anulou o ato administrativo e confirmou a tutela antecipada.",
   papeis:{
     pressao:"Pais, familiares e autoridades locais contestaram a abordagem pedagógica; o comunicado oficial não identifica nominalmente os reclamantes.",
     decisor:"Secretaria Municipal de Educação, que em comunicado de 20 de junho reconheceu ter orientado a suspensão temporária dos trabalhos pedagógicos.",
     executor:"Unidades escolares da rede municipal, quanto às atividades pedagógicas; não há comprovação de recolhimento geral de exemplares.",
     resposta:"O Município informou no processo que retomou as atividades em 28/06/2024. Em sentença de 02/12/2024, o juiz Espagner Wallysen Vaz Leite anulou o ato administrativo e confirmou a tutela antecipada na sentença de mérito."
   }},
 "SJC-2024":{
   cumprimento:{desde:"2026-07-20", decisao:"Sentença mandou restituir o livro às salas de leitura em cinco dias após a intimação", falta:"A Prefeitura não confirmou a devolução e anunciou recurso", fonte:"op-sjc"},
   reversao:{via:"Decisão judicial", data:"2026-07-20", fonte:"op-sjc", nota:"Ação do Ministério Público e da Defensoria. A liminar de 2024 foi suspensa pelo TJSP; a sentença de mérito veio dois anos depois."},
   nome:"Recolhimento de Meninas sonhadoras, mulheres cientistas (São José dos Campos)",
   data:"2024-06-04",
   fim:"2026-07-20",
   uf:"SP",
   cidade:"São José dos Campos",
   tipo:"Escolar",
   rede:"Municipal",
   governo:"Anderson Farias (PSD) · prefeitura de São José dos Campos",
   quem:"Secretaria Municipal de Educação e Cidadania",
   pressao:"Thomaz Henrique (PL), vereador, que acusou a obra de “apologia ao aborto” e “doutrinação ideológica” por incluir Marielle Franco e Débora Diniz.",
   documento:"Ordem de recolhimento transmitida aos diretores por mensagens de WhatsApp, segundo a apuração judicial. A liminar de 2024 que determinava a redistribuição foi suspensa pelo TJSP após recurso municipal. Em sentença de mérito de 20/07/2026, a Vara da Infância e Juventude reconheceu censura material e determinou a restituição dos exemplares às unidades em que integravam o acervo, em cinco dias após a intimação; proibiu restrições político-ideológicas e fixou multa diária de R$ 500, inicialmente limitada a R$ 50 mil. A cobertura não confirmou o cumprimento e a íntegra pública da sentença não foi localizada.",
   papeis:{
     pressao:"Thomaz Henrique (PL), vereador, que acusou a obra de “apologia ao aborto” e “doutrinação ideológica”.",
     decisor:"Secretaria Municipal de Educação e Cidadania; a autoridade individual que formalizou a retirada não foi identificada nas fontes públicas consultadas.",
     executor:"Diretores das escolas municipais receberam a ordem de retirada por mensagens de WhatsApp, segundo a apuração divulgada com base no processo.",
     resposta:"Em 20 de julho de 2026, sentença de mérito determinou a restituição dos exemplares no prazo de cinco dias após a intimação e proibiu novas restrições político-ideológicas. Reportagens de 28 a 30/07 informaram que a Prefeitura ainda não havia confirmado o cumprimento."
   }},
 "UNIRV-2023":{
   docPrimario:["unirv-nota"],
   nome:"Exclusão da lista do vestibular da UniRV",
   data:"2023-04-26",
   uf:"GO",
   cidade:"Rio Verde",
   tipo:"Universitária",
   rede:"Municipal",
   governo:"UniRV · universidade municipal de Rio Verde",
   quem:"Coordenação do Vestibular da Universidade de Rio Verde (UniRV)",
   pressao:"Deputado federal Gustavo Gayer (PL-GO), que publicou vídeo chamando a obra de “pornográfica”.",
   documento:"Nota oficial da UniRV, datada de 26 de abril e publicada em 27 de abril de 2023, atribui à Coordenação do Vestibular a decisão de excluir imediatamente a obra após a polêmica. A nota não identifica o responsável individual nem apresenta ato nominal de formalização.",
   papeis:{
     pressao:"Gustavo Gayer (PL-GO), deputado federal, que publicou vídeo chamando o livro de “pornográfico”.",
     decisor:"Coordenação do Vestibular da UniRV, que declarou ter decidido pela exclusão imediata da obra após a polêmica.",
     responsavel:"A nota oficial atribui a decisão à Coordenação do Vestibular. Não identifica a pessoa responsável nem apresenta ata, despacho ou ato nominal de formalização.",
     executor:"Universidade de Rio Verde (UniRV)."
   }},
 "LON-2024":{
   nome:"Requerimento de recolhimento de A mamãe vai ter um bebê e retirada de exemplar em CMEI (Londrina)",
   data:"2024-11-26",
   fim:"2025-03-21",
   uf:"PR",
   cidade:"Londrina",
   tipo:"Escolar",
   rede:"Municipal",
   governo:"Marcelo Belinati (PP) · prefeitura de Londrina",
   quem:"Vereadora Jéssica Ramos Moreno (PP) · Secretaria Municipal de Educação",
   pressao:"Jéssica Ramos Moreno (PP), vereadora, encontrou um exemplar durante vistoria em CMEI após denúncia de uma família e pediu providências e recolhimento.",
   documento:"Nota da Secretaria Municipal de Educação reproduzida pela imprensa em 26/11/2024: o exemplar foi imediatamente retirado do acervo da unidade e seria feita revisão completa do material. A pasta negou que a obra tivesse sido adquirida ou distribuída pelo Município e considerou provável que tivesse chegado por doação ou sido levada por aluno. O requerimento parlamentar específico e sua resposta formal não foram localizados. O PL 79/2024 havia sido protocolado em 09/04/2024, antes do episódio, e foi sancionado como Lei Municipal nº 13.930 em 21/03/2025.",
   papeis:{
     pressao:"Jéssica Ramos Moreno (PP), vereadora, pediu formalmente à Secretaria Municipal de Educação o recolhimento do livro após encontrá-lo em uma creche.",
     decisor:"Secretaria Municipal de Educação: informou que o exemplar encontrado foi retirado imediatamente do acervo e que faria revisão completa do material da unidade.",
     executor:"CMEI onde o exemplar foi encontrado; a retirada imediata do exemplar é confirmada pela nota da Secretaria reproduzida por RIC e Tarobá. Não há comprovação de recolhimento em outras unidades."
   }},
 "DF-2026":{
   nome:"Controvérsia sobre atividade no Colégio Militar Dom Pedro II (DF)",
   data:"2026-05-15",
   uf:"DF",
   cidade:"Brasília",
   tipo:"Escolar",
   rede:"Distrital",
   governo:"Colégio Militar Dom Pedro II · instituição administrada pelo Corpo de Bombeiros Militar do Distrito Federal",
   quem:"Colégio Militar Dom Pedro II",
   pressao:"Pais de alunos do 4º ano contestaram, em grupos de mensagens, o uso de uma resenha da obra em atividade de interpretação.",
   documento:"Atividade de Língua Portuguesa que utilizou link para resenha de A bolsa amarela; não foi localizado ato formal de retirada da obra, e a apuração da piauí afirma que não houve recolhimento de exemplares nem adoção da obra.",
   papeis:{
     pressao:"Pais de alunos do 4º ano contestaram em grupos de mensagens o uso de uma resenha da obra em atividade de interpretação.",
     decisor:"O colégio afirmou que a atividade atendia aos objetivos pedagógicos. Não há documento que comprove ordem formal de retirada da obra ou suspensão do acesso ao livro.",
     executor:"Colégio Militar Dom Pedro II; o link da resenha não voltou a ser utilizado depois do encerramento do exercício.",
     resposta:"A escola negou prejuízo pedagógico ou direcionamento ideológico. A apuração da piauí informa que não houve adoção da obra nem retirada de exemplares do acervo."
   }},
 "TAU-2025":{
   cumprimento:{desde:"2026-07-14", decisao:"Prefeitura anunciou a retomada do uso de Pipoca e Picolé após análise técnica", falta:"Não há confirmação de quais escolas receberam os exemplares de volta", fonte:"ovale-tau-jul14"},
   reversao:{via:"Recuo da administração", data:"2026-07-14", fonte:"ovale-tau-jul14", nota:"Análise técnica da própria Secretaria liberou o uso com mediação docente."},
   nome:"Recolhimento de Pipoca e Picolé (Taubaté)",
   data:"2025-11-01",
   uf:"SP",
   cidade:"Taubaté",
   tipo:"Escolar",
   rede:"Municipal",
   governo:"Sérgio Victor (Novo) · prefeitura de Taubaté",
   quem:"Secretaria Municipal de Educação",
   pressao:"Zelinda Pastora (PRD), vereadora da base governista, declarou que pediu ao secretário de Educação o recolhimento após reclamação de uma mãe.",
   documento:"Ordem de recolhimento atribuída pela vereadora Zelinda Pastora ao secretário Hélcio Carvalho dos Santos; documento formal não localizado. Em 14 de julho de 2026, a prefeitura informou publicamente a retomada do uso pedagógico após análise técnica; o parecer e o ato administrativo correspondente ainda não foram localizados.",
   papeis:{
     pressao:"Zelinda Pastora (PRD), vereadora da base governista, que disse ter pedido diretamente ao secretário o recolhimento após reclamação de uma mãe.",
     decisor:"Secretaria Municipal de Educação, então sob responsabilidade do secretário Hélcio Carvalho dos Santos; a ordem escrita e seu signatário formal ainda não foram localizados.",
     executor:"Rede municipal de ensino; a vereadora afirmou que a obra reapareceu em algumas unidades em 2026 e que pediu nova providência.",
     resposta:"Em 14 de julho de 2026, a prefeitura informou que, após análise técnica da Coordenação de Área e da Equipe de Práticas Pedagógicas da Educação Infantil, o livro voltaria ao plano de ensino das turmas consideradas adequadas. A efetiva devolução dos exemplares às unidades escolares não foi confirmada."
   }},
 "FUNAP-2020":{
   cumprimento:{desde:"2020-02-13", decisao:"Funap incluiu a lista original de livros no programa Remição em Rede", falta:"Os exemplares doados tinham sido devolvidos às editoras, e o novo envio não foi comprovado", fonte:"folha-funap-14fev"},
   reversao:{via:"Recuo da administração", data:"2020-02-13", fonte:"folha-funap-14fev", nota:"A Funap incluiu a lista original no programa dois dias depois da repercussão."},
   nome:"Veto à lista do projeto Remição em Rede (Funap)",
   data:"2020-02-11",
   fim:"2020-02-13",
   uf:"SP",
   cidade:"São Paulo",
   tipo:"Especializada",
   rede:"Estadual",
   governo:"João Doria (PSDB) · governo de São Paulo",
   quem:"Fundação Prof. Dr. Manoel Pedro Pimentel (Funap)",
   pressao:"A lista de doze livros do projeto Remição em Rede foi vetada pela Funap; a articuladora do projeto, Janine Durand, relatou que três títulos foram considerados inadequados, sem identificação pública.",
   documento:"Ato de veto original e ata da reunião ainda não localizados. A Folha publicou o teor de mensagem de 3 de dezembro de 2019 enviada por Reginaldo Caetano da Silva, superintendente da Diretoria de Atendimento e Promoção Humana, e registrou o relato de Janine Durand de que a lista foi riscada pelo diretor-executivo Henrique Pereira de Souza Neto. Em 13 de fevereiro de 2020, a Funap informou ter determinado a inclusão da lista original e a criação de equipe multidisciplinar. Falta obter a comunicação institucional integral e comprovar a distribuição dos 240 exemplares.",
   papeis:{
     decisor:"A lista foi riscada, segundo Janine Durand, pelo então diretor-executivo da Funap, coronel Henrique Pereira de Souza Neto. A Funap determinou em 13 de fevereiro de 2020 a inclusão da lista originalmente indicada.",
     responsavel:"Reginaldo Caetano da Silva, superintendente da Diretoria de Atendimento e Promoção Humana, enviou a mensagem de 3 de dezembro de 2019 que dizia que um título não atendia às expectativas da gestão. A decisão de riscar a lista é atribuída por Janine Durand ao diretor-executivo Henrique Pereira de Souza Neto.",
     executor:"Funap; a lista original não havia sido encaminhada aos presídios antes da reversão, segundo a reportagem da Folha.",
     resposta:"Em 13 de fevereiro de 2020, a Funap determinou a inclusão da lista inicial e anunciou uma equipe multidisciplinar para tratar da seleção. Não foi comprovado se os 240 exemplares chegaram depois às unidades prisionais."
   }},
 "LIM-2019":{
   docPrimario:["camara-limeira-req","camara-limeira-resp"],
   nome:"Requerimento nº 451/2019 sobre A bolsa amarela (Limeira)",
   data:"2019-08-12",
   fim:"2019-10-15",
   uf:"SP",
   cidade:"Limeira",
   tipo:"Escolar",
   rede:"Municipal",
   governo:"Prefeitura de Limeira · gestão municipal em 2019",
   quem:"Vereador Clayton Silva (PSC)",
   pressao:"Clayton Silva (PSC), vereador, apresentou requerimento com perguntas sobre a distribuição e leitura da obra e afirmou que ela abordava a chamada “ideologia de gênero”.",
   documento:"Requerimento nº 451/2019, de autoria do vereador Clayton Silva (PSC), protocolado em 12 de agosto de 2019, e resposta da Secretaria Municipal de Educação por meio do Ofício GSE nº 363/2019, de 24 de setembro de 2019. Os documentos registram questionamento parlamentar e defesa institucional da obra, não ordem ou pedido formal de retirada.",
   papeis:{
     pressao:"Clayton Silva (PSC), vereador, apresentou requerimento questionando a distribuição e a leitura da obra e afirmou que ela abordava “ideologia de gênero”.",
     decisor:"Não houve decisão de retirada. A Secretaria Municipal de Educação respondeu ao Requerimento nº 451/2019 e defendeu a obra e seu uso no Clube de Leitura.",
     executor:"Escolas da rede municipal, no âmbito do Clube de Leitura; a Secretaria informou que o livro já integrava acervo enviado pelo PNLD.",
     resposta:"Em 24 de setembro de 2019, a Secretaria respondeu que a obra não afrontava princípios morais e descreveu seu valor literário e pedagógico."
   }},
 "LON-2026":{"nome": "Levantamento e recolhimento para análise de O bebê vem com a cegonha?!? (Londrina)", "data": "2026-03-12", "uf": "PR", "cidade": "Londrina", "tipo": "Escolar", "rede": "Municipal", "governo": "Tiago Amaral (PSD) · prefeitura de Londrina", "quem": "Secretaria Municipal de Educação de Londrina", "documento": "Pedido de providências consultado pela Folha de Londrina em 11/03/2026. Errata publicada em 12/03/2026 esclarece que a iniciativa partiu da equipe da Gerência de Ensino Fundamental da SME, não da direção da escola municipal. A CBN Londrina confirma a nota da SME sobre levantamento da rede e recolhimento para análise. O número do processo SEI, a íntegra do pedido, os nomes dos signatários e a decisão final não foram localizados. Relatório do OGPL aponta que, após 18/02/2025, apenas 15 processos do tipo Pedido de Providências foram públicos e 19.588 foram restritos, embora a Portaria SMGP-GAB nº 28/2020 preveja publicidade como regra.", "papeis": {"pedido": "A Folha de Londrina informou inicialmente que o pedido estava assinado por gerente e diretora pedagógica; errata de 12/03/2026 esclareceu que a iniciativa partiu da equipe da Gerência de Ensino Fundamental da SME, não da direção da escola. Nomes individuais não foram divulgados.", "decisor": "Secretaria Municipal de Educação de Londrina, que informou ter iniciado levantamento em toda a rede e recolhimento de exemplares para análise. A autoridade individual que autorizou a providência não foi identificada.", "assinantes": "A reportagem não publicou os nomes dos signatários. A errata atribui a iniciativa à equipe da Gerência de Ensino Fundamental da SME, não à direção da escola; o número SEI e o documento integral ainda não foram localizados.", "executor": "SME e unidades da rede municipal, quanto ao levantamento e à retirada para análise. Não há confirmação do recolhimento integral em cada escola.", "resposta": "A SME apresentou nota sobre adequação etária e qualidade dos materiais. A editora Melhoramentos afirmou que não havia sido previamente notificada. A decisão final sobre retorno ou exclusão não foi localizada."}},
 "CAN-2024":{"nome": "Retirada de livros da biblioteca Mundoteca (Canoinhas)", "data": "2024-04-17", "uf": "SC", "cidade": "Canoinhas", "tipo": "Pública", "rede": "Municipal", "governo": "Juliana Maciel Hoppe (PL) · prefeitura de Canoinhas", "quem": "Prefeitura de Canoinhas, sob a prefeita Juliana Maciel Hoppe", "documento": "A decisão singular GCS/GSS-861/2024 do TCE-SC, no levantamento @LEV 24/80041829, registra que a prefeita Juliana Maciel Hoppe afirmou, em resposta juntada às fls. 14–32, que havia um exemplar de cada título e que os livros foram entregues à gestora da Fundação Cultural para análise de destinação. O TCE concluiu que os livros não foram efetivamente jogados no lixo e estavam em poder da Fundação Cultural. O Tribunal também qualificou a conduta pública da prefeita como irresponsável e apontou uso da imagem e da popularidade do cargo e de bens públicos para fins populistas, eleitoreiros e de autopromoção. O levantamento foi arquivado por baixa materialidade financeira e pela existência de notícia de fato no MPSC; isso não equivale a conclusão do Ministério Público. O TCE determinou levantamento parcial do sigilo apenas quanto ao Relatório DGE-328/2024 e à decisão; a resposta da prefeita e as fotos das fls. 14–32 não integram o documento público do Diário. O Requerimento 149/2024, assinado por oito vereadores, pediu revisão e reorganização da Mundoteca e separação de materiais por faixa etária, não a retirada expressa destes dois títulos. A decisão pública é assinada pelo conselheiro Gerson dos Santos Sicca.", "papeis": {"pedido": "O Requerimento nº 149/2024 foi subscrito por Tati Carvalho, Wilmar Sudoski, Maurício Zimmermann, Willian Godoy, Adilson Steidel, Professor Osmar, André Flenik e Chico Mineiro, conforme o SAPL. Separadamente, reportagem de Canoinhas Online identificou Osmar Oleskovicz (Professor Osmar) como autor do pedido de retirada imediata e Willian Godoy como defensor da incineração; essa atribuição é jornalística, não uma ordem administrativa assinada. O documento não pediu expressamente a retirada dos dois títulos.", "pressao": "Canoinhas Online relata que Tati Carvalho exibiu vídeo e classificou o conteúdo como pornografia; Osmar Oleskovicz pediu a retirada imediata e Willian Godoy defendeu a incineração. Essas falas são atribuídas a uma reportagem local; a gravação oficial da sessão e as atas correspondentes ainda não foram localizadas.", "destinatario": "O requerimento foi dirigido à prefeita Juliana Maciel Hoppe e ao coordenador de Biblioteca Ryan Pablo Klengues.", "decisor": "A prefeita Juliana Maciel publicou vídeo em que declara que os livros seriam retirados da biblioteca e os chama de “porcaria”. A Prefeitura confirmou posteriormente a retirada em nota reproduzida pela imprensa local. Não foi localizada ordem escrita nem identificado signatário formal de ato administrativo.", "executor": "A prefeita aparece no vídeo colocando exemplares numa lixeira. A nota da Prefeitura reproduzida pela imprensa diz que os livros foram retirados da Mundoteca e seriam encaminhados aos responsáveis pelo projeto. Não há comprovação de destruição física nem de entrega efetiva aos responsáveis.", "resposta": "A FGM/Mundoteca afirmou que os livros eram controlados por faixa etária e não haviam sido emprestados a crianças. O MPSC abriu notícia de fato para apurar o descarte; o resultado não foi localizado. A Secom esclareceu que a Mundoteca era projeto privado incentivado e que a unidade já estava sob gestão municipal.", "assinantes": "Não foi localizado ato de retirada assinado. O Requerimento 149/2024 foi subscrito por Tati Carvalho, Wilmar Sudoski, Maurício Zimmermann, Willian Godoy, Adilson Steidel, Professor Osmar, André Flenik e Chico Mineiro. A decisão GCS/GSS-861/2024 foi assinada pelo conselheiro Gerson dos Santos Sicca. A resposta da prefeita está nas fls. 14–32, sob sigilo parcial, e não há recibo público de transferência."}},
 "FOZ-2025":{"cumprimento": {"desde": "2025-07-23", "decisao": "Liminar mandou devolver os livros às escolas municipais", "falta": "Segundo a própria Secretaria, em 2026 a então secretária determinou que o material não fosse enviado às unidades", "fonte": "h2foz-cpi-nota"}, "reversao": {"via": "Decisão judicial", "data": "2025-07-23", "fonte": "aguas-liminar", "nota": "Liminar da 2ª Vara da Fazenda Pública suspendeu o memorando e deu 10 dias para a devolução, sob multa pessoal à secretária. A Secretaria confirma que os livros voltaram às escolas em 2025."}, "nome": "Recolhimento dos livros de inglês da rede municipal (Foz do Iguaçu)", "data": "2025-06-01", "uf": "PR", "cidade": "Foz do Iguaçu", "tipo": "Escolar", "rede": "Municipal", "governo": "General Silva e Luna (PL) · prefeitura de Foz do Iguaçu", "quem": "Secretaria Municipal de Educação", "pressao": "Os vereadores Bosco Foz (PL) e Dr. Ranieri Marchioro (Republicanos) publicaram vídeos criticando o material pouco antes do recolhimento, segundo o H2FOZ.", "documento": "Memorando interno nº 40218/2025 da Secretaria Municipal de Educação, citado na decisão liminar que o suspendeu; a íntegra não foi localizada. O recolhimento aconteceu no início de junho de 2025; a data registrada é o primeiro dia do mês. Segundo o sindicato, a retirada começou antes do memorando.", "papeis": {"pressao": "Vereadores Bosco Foz (PL) e Dr. Ranieri Marchioro (Republicanos), que publicaram vídeos sobre o material.", "decisor": "Secretaria Municipal de Educação, sob a secretária Silvana Garcia André.", "executor": "Unidades da rede municipal, de onde foram recolhidos cerca de 7 mil exemplares.", "resposta": "O Sinprefi, sindicato dos servidores da educação municipal, obteve liminar em julho de 2025. A Câmara abriu CPI sobre o caso."}}
};

const FONTES = {
 "almeida-hh-2022":{"veic": "História da Historiografia · Anderson da Silva Almeida", "data": "2022-01-01", "tit": "Meninos sem Pátria: ditadura, literatura e os trabalhos da memória entre ficção e realidade (1981/2018)", "url": "https://www.scielo.br/j/hh/a/gQjtTdWWmZ6CMndKXtyT8bM/?lang=pt"},
 "acapa-ariquemes-2017":{"veic": "A Capa", "data": "2017-02-24", "tit": "Prefeito e sete vereadores de Rondônia são processados pelo MP por incitar homofobia", "url": "https://acapa.com.br/en/prefeito-e-sete-vereadores-de-rondonia-sao-indiciados-pelo-mp-por-incitar-homofobia/"},
 "ra-juiza-2017":{"veic": "Rondoniagora", "data": "2017-05-12", "tit": "Juíza dá razão a Thiago Flores e manda arquivar ação dos MPs que questionava retirada de livros", "url": "https://www.rondoniagora.com/cidades/juiza-da-razao-a-thiago-flores-e-manda-arquivar-acao-dos-mps-que-questionava-retirada-de-livros-com-fotos-de-uniao-gay"},
 "ra-trf1-2017":{"veic": "Rondoniagora", "data": "2017-08-29", "tit": "Tribunal Federal manda prefeito de Ariquemes distribuir livros com imagens de união gay", "url": "https://www.rondoniagora.com/cidades/tribunal-federal-manda-prefeito-de-ariquemes-distribuir-livros-com-imagens-de-uniao-gay"},
 "cb-mec-2017":{"veic": "Correio Braziliense", "data": "2017-06-08", "tit": "Livro que trata de incesto será recolhido", "url": "https://www.correiobraziliense.com.br/app/noticia/eu-estudante/ensino_educacaobasica/2017/06/08/interna-educacaobasica-2019,601187/mec-recolhe-das-escolas-o-livro-enquanto-o-sono-nao-vem.shtml"},
 "pn-mec-2017":{"veic": "PublishNews", "data": "2017-06-12", "tit": "Educadores criticam recolhimento de livro polêmico pelo MEC", "url": "https://www.publishnews.com.br/materias/2017/06/12/educadores-criticam-recolhimento-de-livro-polemico-pelo-mec/"},
 "tjrj-inconst-2020":{"veic": "Tribunal de Justiça do Rio de Janeiro", "data": "2021-01-08", "tit": "Inconstitucionalidades indicadas 2020", "url": "https://www.tjrj.jus.br/documents/5736540/6826754/inconstitucionalidade-2020.pdf"},
 "conjur-vr-esp-2019":{"veic": "Consultor Jurídico", "data": "2019-04-02", "tit": "TJ-RJ anula lei que instituiu Escola sem Partido em Volta Redonda", "url": "https://www.conjur.com.br/2019-abr-02/tj-rj-anula-lei-instituiu-escola-partido-volta-redonda/"},
 "stf-adpfs-2017":{"veic": "Supremo Tribunal Federal", "data": "2017-06-22", "tit": "STF recebe mais ações contra leis que proíbem ensino sobre gênero e orientação sexual", "url": "https://noticias.stf.jus.br/?p=42441"},
 "pgr-adpf460":{"veic": "Procuradoria-Geral da República · petição inicial (cópia no TJPR)", "data": "2017-06-06", "tit": "Arguição contra a Lei 6.496/2015 de Cascavel", "url": "https://www.tjpr.jus.br/documents/18319/20722632/ADPF/1de28d73-37b0-b63c-50a2-09613329b834"},
 "lexml-adpf460":{"veic": "LexML · acórdão do STF", "data": "2020-06-29", "tit": "ADPF 460/PR", "url": "https://www.lexml.gov.br/urn/urn:lex:br:supremo.tribunal.federal;plenario:acordao;adpf:2020-06-29;460-5204904"},
 "stf-ipatinga-2020":{"veic": "Supremo Tribunal Federal", "data": "2020-05-29", "tit": "Lei de Ipatinga (MG) que proibia ensino sobre gênero e orientação sexual é inconstitucional", "url": "https://portal.stf.jus.br/noticias/verNoticiaDetalhe.asp?idConteudo=444481&ori=1"},
 "dod-novo-gama-2020":{"veic": "Dizer o Direito", "data": "2020-07-01", "tit": "É inconstitucional lei municipal que proíbe material com referência à ideologia de gênero", "url": "https://www.dizerodireito.com.br/2020/07/e-inconstitucional-lei-municipal-que.html"},
 "campanha-novo-gama-2020":{"veic": "Campanha Nacional pelo Direito à Educação", "data": "2020-04-27", "tit": "Por unanimidade, STF declara inconstitucional lei municipal de “ideologia de gênero” em escolas", "url": "https://campanha.org.br/noticias/2020/04/27/vitoria-por-unanimidade-stf-declara-inconstitucional-lei-municipal-de-ideologia-de-genero-em-escolas/"},
 "stf-blumenau-2024":{"veic": "Supremo Tribunal Federal", "data": "2024-07-02", "tit": "STF invalida norma que proibia escolas de Blumenau (SC) de abordar questões de gênero", "url": "https://noticias.stf.jus.br/postsnoticias/stf-invalida-norma-que-proibia-escolas-de-blumenau-sc-de-abordar-questoes-de-genero/"},
 "stf-tubarao-2025":{"veic": "Supremo Tribunal Federal", "data": "2025-10-15", "tit": "STF invalida três leis municipais que vedavam ensino sobre gênero nas escolas", "url": "https://noticias.stf.jus.br/postsnoticias/156744/"},
 "migalhas-tubarao-2025":{"veic": "Migalhas", "data": "2025-10-15", "tit": "STF invalida leis que proibiam ideologia de gênero nas escolas", "url": "https://www.migalhas.com.br/quentes/442382/stf-invalida-leis-que-proibiam-ideologia-genero-nas-escolas"},
 "conexaoto-palmas-2020":{"veic": "Conexão Tocantins", "data": "2020-09-03", "tit": "STF declara inconstitucional artigo da lei municipal que proibia discussão sobre gênero nas escolas de Palmas", "url": "https://conexaoto.com.br/2020/09/03/stf-declara-inconstitucional-artigo-da-lei-municipal-que-proibia-discussao-sobre-genero-nas-escolas-de-palmas"},
 "abcreporter-sbc-2016":{"veic": "ABC Repórter", "data": "2016-01-25", "tit": "Marinho enviará texto que proíbe ideologia de gênero", "url": "https://abcreporter.com.br/2016/01/25/marinho-enviara-texto-que-proibe-ideologia-de-genero/"},
 "ipco-sbc-2016":{"veic": "Instituto Plinio Corrêa de Oliveira (entidade com posição declarada)", "data": "2016-03-04", "tit": "Veto do prefeito Marinho ao artigo “anti-gênero” do PME de São Bernardo do Campo é derrubado pelos vereadores", "url": "https://ipco.org.br/38179veto/"},
 "bdf-generos-2016":{"veic": "Brasil de Fato", "data": "2016-07-06", "tit": "Projetos visam impedir discussão de gênero e diversidade sexual nas escolas brasileiras", "url": "https://www.brasildefato.com.br/2016/07/06/projetos-visam-impedir-discussao-de-genero-e-diversidade-sexual-nas-escolas-brasileir/"},
 "dv-volta-redonda-2015":{"veic": "Diário do Vale", "data": "2015-08-26", "tit": "Paulo Conrado promulga lei que proíbe ideologia de gênero nas escolas de Volta Redonda", "url": "https://diariodovale.com.br/politica/paulo-conrado-promulga-lei-que-proibe-ideologia-de-genero-nas-escolas-de-volta-redonda/"},
 "conjur-volta-redonda-2016":{"veic": "Consultor Jurídico", "data": "2016-02-17", "tit": "Defensoria do RJ questiona lei que veta política de gênero nas escolas", "url": "https://conjur.com.br/2016-fev-17/defensoria-rj-questiona-lei-veta-politica-genero-escolas/"},
 "stf-adpf461-liminar":{"veic": "STF · decisão do ministro Luís Roberto Barroso (cópia no site do ministro)", "data": "2017-06-16", "tit": "ADPF 461 · medida cautelar sobre a Lei 3.468/2015 de Paranaguá", "url": "https://luisrobertobarroso.com.br/wp-content/uploads/2016/06/texto_312038140.pdf"},
 "stf-genero-2020":{"veic": "Supremo Tribunal Federal", "data": "2020-08-26", "tit": "Julgadas inconstitucionais leis sobre Escola Livre e proibição de ensino de sexualidade", "url": "https://portal.stf.jus.br/noticias/verNoticiaDetalhe.asp?idConteudo=450392&ori=1"},
 "mpd-covas":{"veic": "Movimento do Ministério Público Democrático · Fabíola Sucasas Negrão Covas", "data": "2018-02-01", "tit": "A proibição das abordagens de gênero nas escolas", "url": "https://mpd.org.br/artigo-a-proibicao-das-abordagens-de-genero-nas-escolas-1/"},
 "ni-prefeitura-2016":{"veic": "Prefeitura de Nova Iguaçu", "data": "2016-02-24", "tit": "Evangélicos apoiam lei que proíbe uso de cartilha sobre diversidade sexual nas escolas", "url": "https://novaiguacu.rj.gov.br/2016/02/24/evangelicos-apoiam-lei-que-proibe-uso-de-cartilha-sobre-diversidade-sexual-nas-escolas/"},
 "sur-kalil-2019":{"veic": "Sur · Revista Internacional de Direitos Humanos · Isabela Oliveira Kalil", "data": "2019-12-01", "tit": "Incursões da “ideologia de gênero” na educação", "url": "https://sur.conectas.org/incursoes-da-ideologia-de-genero-na-educacao/"},
 "ufpel-mec-2017":{"veic": "Federal FM · UFPel (via Agência Brasil)", "data": "2017-06-08", "tit": "Ministro da Educação, Mendonça Filho, decide recolher das escolas o livro Enquanto o sono não vem", "url": "https://wp.ufpel.edu.br/federalfm/2017/06/08/ministro-da-educacao-mendonca-filho-decide-recolher-das-escolas-o-livro-enquanto-o-sono-nao-vem/"},
 "publica-sono-2018":{"veic": "Agência Pública · Truco", "data": "2018-10-09", "tit": "Mensagem falsa diz que Haddad autorizou livro infantil que trata de incesto", "url": "https://apublica.org/checagem/2018/10/truco-mensagem-falsa-diz-que-haddad-autorizou-livro-infantil-que-trata-de-incesto/"},
 "bn-ariquemes-2017":{"veic": "Bahia Notícias (a partir do G1)", "data": "2017-01-24", "tit": "Prefeitura manda retirar páginas sobre casamento gay e camisinha de livros escolares", "url": "https://www.bahianoticias.com.br/noticia/201985-prefeitura-manda-retirar-paginas-sobre-casamento-gay-e-camisinha-de-livros-escolares"},
 "pa-ariquemes-2017":{"veic": "Portal Amazônia", "data": "2017-01-24", "tit": "Município de Rondônia quer proibir livros didáticos que contenham “ideologia de gênero”", "url": "https://portalamazonia.com/cidades/municipio-de-rondonia-quer-proibir-livros-didaticos-que-contenham-ideologia-de-genero/"},
 "souza-2018":{"veic": "Em Questão (UFRGS) · Willian Eduardo Righini de Souza", "data": "2018-01-01", "tit": "Em nome da moral e dos bons costumes: censura a livros com temática de gênero no Brasil do século XXI", "url": "https://seer.ufrgs.br/index.php/EmQuestao/article/view/71150"},
 "abr-recife-2016":{"veic": "Agência Brasil", "data": "2016-03-27", "tit": "Polêmica sobre questões de gênero pode deixar alunos do Recife sem livros", "url": "https://agenciabrasil.ebc.com.br/educacao/noticia/2016-03/polemica-sobre-questoes-de-genero-pode-deixar-alunos-do-recife-sem-livros"},
 "acapa-guarulhos-2015":{"veic": "A Capa (a partir da Folha de S.Paulo)", "data": "2015-05-29", "tit": "Após tentativa de veto, livros contra homofobia são distribuídos em escolas da Grande SP", "url": "https://acapa.com.br/en/apos-tentativa-de-veto-livros-contra-homofobia-sao-distribuidos-em-escolas-da-grande-sp/"},
 "jb-santo-agostinho-2018":{"veic": "Jornal do Brasil", "data": "2018-10-04", "tit": "Alunos do Santo Agostinho fecham rua em ato contra proibição de livro", "url": "https://www.jb.com.br/rio/2018/10/943833-alunos-do-santo-agostinho-fecham-rua-em-ato-contra-proibicao-de-livro.html"},
 "rno-clayton-2020-res": {"veic": "Rápido no Ar", "data": "", "tit": "PTC, de Clayton Silva, se declara neutro para segundo turno em Limeira", "url": "https://rapidonoar.com.br/ptc-de-clayton-silva-se-declara-neutro-para-segundo-turno-em-limeira/"},
 "tse-riedel-2026": {"veic": "TSE", "data": "2026-10-04", "tit": "Eduardo Riedel (PP) é eleito governador de Mato Grosso do Sul", "url": "https://www.tse.jus.br/comunicacao/noticias/2026/Outubro/eduardo-riedel-pp-e-eleito-governador-de-mato-grosso-do-sul"},
 "zeotavio-londrina-2026": {"veic": "Blog do Zé Otávio", "data": "2026-10-16", "tit": "Conheça os 101 candidatos a deputado estadual que receberam votos em Londrina", "url": "https://blogdozeotavio.com/conheca-os-101-candidatos-a-deputado-estadual-que-receberam-votos-em-londrina/"},
 "hub-mulheres-sp-2026": {"veic": "Hub Político", "data": "2026-10-05", "tit": "Mulheres candidatas a deputado federal por São Paulo em 2026: eleitas e votos", "url": "https://hubpolitico.com.br/eleicoes/2026/candidatos/sp/deputado-federal/mulheres"},
 "otempo-sinop-2024": {"veic": "O Tempo", "data": "2024-10-07", "tit": "Eleições 2024: veja a lista dos vereadores eleitos em Sinop (MT)", "url": "https://www.otempo.com.br/eleicoes/2024/vereador/2024/10/7/eleicoes-2024-veja-a-lista-dos-vereadores-eleitos-em-sinop-mt"},
 "cf-thiago-silva-2022": {"veic": "Congresso em Foco", "data": "2022-10-03", "tit": "Thiago Silva (MDB) foi eleito deputado estadual em MT", "url": "https://www.congressoemfoco.com.br/noticia/131169/thiago-silva-mdb-foi-eleito-deputado-estadual-em-mt"},
 "gp-campagnolo-pl": {"veic": "Gazeta do Povo", "data": "2026-11-03", "tit": "PL prepara Ana Campagnolo para a presidência da Alesc", "url": "https://www.gazetadopovo.com.br/santa-catarina/pl-prepara-ana-campagnolo-presidencia-alesc/"},
 "hub-thomaz": {"veic": "Hub Político", "data": "2026-10-05", "tit": "Thomaz Henrique (PL): histórico eleitoral", "url": "https://hubpolitico.com.br/perfil/thomazhenrique"},
 "hub-jessicao": {"veic": "Hub Político", "data": "2026-10-05", "tit": "Jessicão (Jessica Moreno): histórico eleitoral", "url": "https://hubpolitico.com.br/perfil/jessicao/eleicoes"},
 "itatiaia-gayer-2026": {"veic": "Itatiaia", "data": "2026-10-04", "tit": "Eleições 2026: Gustavo Gayer é eleito senador em Goiás", "url": "https://www.itatiaia.com.br/politica/eleicoes/eleicoes-2026-gustavo-gayer-e-eleito-senador-em-goias/"},
 "otempo-rinaldo-2026": {"veic": "O Tempo", "data": "2026-10-05", "tit": "Professor Rinaldo Modesto é eleito deputado estadual no Mato Grosso do Sul", "url": "https://www.otempo.com.br/eleicoes/2026/deputados-estaduais/2026/10/5/tse-confirma-eleicao-de-professor-rinaldo-modesto-para-deputado-estadual-pelo-mato-grosso-do-sul-nas-eleicoes-2026"},
 "nsc-juliana-2024": {"veic": "NSC Total", "data": "2024-10-06", "tit": "Juliana Maciel (PL) é reeleita prefeita de Canoinhas nas Eleições 2024", "url": "https://www.nsctotal.com.br/?p=7303245"},
 "jmais-canoinhas-2024": {"veic": "JMais", "data": "2024-10-07", "tit": "Veja quem são os 10 vereadores eleitos para a Câmara de Canoinhas", "url": "https://www.jmais.com.br/veja-quem-sao-os-10-vereadores-eleitos-para-a-camara-de-canoinhas/"},
 "hub-ranieri": {"veic": "Hub Político", "data": "2026-10-05", "tit": "Dr. Ranieri (Republicanos): candidato a deputado federal", "url": "https://hubpolitico.com.br/perfil/drranierimarchioro"},
 "rc-foz-candidatos-2026": {"veic": "Rádio Cultura Foz", "data": "2026-08-16", "tit": "Conheça os candidatos de Foz do Iguaçu a deputado federal em 2026", "url": "https://www.radioculturafoz.com.br/2026/08/16/conheca-os-20-candidatos-de-foz-do-iguacu-a-deputado-federal-em-2026/"},
 "h2foz-federal-2026": {"veic": "H2FOZ", "data": "2026-10-04", "tit": "Deputado federal: veja a votação dos candidatos de Foz do Iguaçu", "url": "https://www.h2foz.com.br/politica/deputado-federal-votacao-candidatos-foz-do-iguacu/"},
 "as-zelinda-2026": {"veic": "Agência Sertão", "data": "2026-11-06", "tit": "Pastora Zelinda, candidata a deputada federal em São Paulo nas Eleições 2026", "url": "https://agenciasertao.com/eleicoes/candidato/SP/pastora-zelinda-prd-sp--250002534395/"},
 "rno-clayton-2020": {"veic": "Rápido no Ar", "data": "2020-06-10", "tit": "PTC confirma pré-candidatura de Clayton Silva a prefeito de Limeira", "url": "https://rapidonoar.com.br/ptc-confirma-pre-candidatura-de-clayton-silva-a-prefeito-de-limeira/"},
 "cml-pi582": {"veic": "Câmara Municipal de Londrina", "data": "2024-11-28", "tit": "Legislativo em Pauta nº 1.214: Pedido de Informação nº 582/2024 sobre A mamãe vai ter um bebê", "url": "https://www.cml.pr.gov.br/imprensa/sala/Legislativo-em-Pauta/1/2024/20238"},
 "bolognesi-2025": {"veic": "Opinião Pública (Unicamp)", "data": "2025-01-01", "tit": "Bolognesi, Ribeiro, Codato e Silva. O desaparecimento do centro ideológico no sistema partidário brasileiro: a classificação mais atualizada dos experts", "url": "https://www.scielo.br/j/op/a/hv8GBg9hfCCZLwcWktfYhtC/?lang=pt"},
 "bolognesi-2023": {"veic": "Dados (Iesp-Uerj)", "data": "2023-01-01", "tit": "Bolognesi, Ribeiro e Codato. Uma nova classificação ideológica dos partidos políticos brasileiros", "url": "https://www.scielo.br/j/dados/a/zzyM3gzHD4P45WWdytXjZWg/abstract/?lang=pt"},
 "tre-sc-canoinhas-2020": {"veic": "TRE-SC", "data": "2020-11-15", "tit": "Eleições 2020 · totalização de Canoinhas", "url": "https://apps.tre-sc.jus.br/site/fileadmin/arquivos/eleicoes/eleicoes2020/relatorios_totalizacao_municipio/turno_1/TOT2020_CANOINHAS.pdf"},
 "cn-canoinhas-2024": {"veic": "Correio do Norte", "data": "2024-08-16", "tit": "Lista oficial: conheça quem são os candidatos a vereador em Canoinhas", "url": "https://www.jornalcorreiodonorte.com.br/politica-e-economia/2024/08/2392057-lista-oficial-conheca-quem-sao-os-candidatos-a-vereador-em-canoinhas.html"},
 "itatiaia-londrina-2024": {"veic": "Itatiaia", "data": "2024-08-16", "tit": "Todos os candidatos a prefeito e vereador de Londrina/PR da eleição 2024", "url": "https://www.itatiaia.com.br/politica/eleicoes-2024/todos-os-candidatos-a-prefeito-e-vereador-de-londrina-pr-da-eleicao-2024/"},
 "rd-ro-fake": {"veic": "Rondônia Dinâmica", "data": "2020-02-06", "tit": "Secretário diz que é 'fake' informação sobre recolhimento de livros na rede estadual de educação em Rondônia", "url": "https://www.rondoniadinamica.com/noticias/2020/02/secretario-diz-que-e-fake-informacao-sobre-recolhimento-de-livros-na-rede-estadual-de-educacao-em-rondonia,66874.shtml"},
 "ce-ms-volta": {"veic": "Correio do Estado", "data": "2024-04-24", "tit": "Um mês e meio após recolhimento, \"O avesso da pele\" volta às escolas de MS", "url": "https://correiodoestado.com.br/cidades/um-mes-e-meio-apos-recolhimento-o-avesso-da-pele-volta-as-escolas/429315/"},
 "fr-lafaiete-nota": {"veic": "Fato Real", "data": "2024-06-19", "tit": "Nota de esclarecimento da SEMED", "url": "https://fatoreal.com.br/2024/06/19/nota-de-esclarecimento-da-semed/"},
 "clickfoz-sinprefi": {"veic": "Clickfoz", "data": "2025-07-04", "tit": "Sindicato aciona Justiça para exigir devolução de livros de Inglês recolhidos pela Prefeitura de Foz", "url": "https://clickfozdoiguacu.com.br/sindicato-aciona-justica-para-exigir-devolucao-de-livros-de-ingles-recolhidos-pela-prefeitura-de-foz/"},
 "h2foz-liminar": {"veic": "H2FOZ", "data": "2025-07-24", "tit": "Justiça manda prefeitura devolver livros retirados das escolas de Foz", "url": "https://www.h2foz.com.br/en/blog-da-redacao/justica-manda-prefeitura-devolver-livros-escolas-foz-do-iguacu/"},
 "aguas-liminar": {"veic": "Diário das Águas", "data": "2025-07-24", "tit": "Polêmica sobre livro didático termina em derrota judicial para Silvana Garcia", "url": "https://diariodasaguas.com.br/polemica-sobre-livro-didatico-termina-em-derrota-judicial-para-silvana-garcia/"},
 "100f-foz": {"veic": "100fronteiras", "data": "2025-08-01", "tit": "Justiça determina devolução de livros de inglês às escolas de Foz", "url": "https://100fronteiras.com/educacao/noticia/justica-determina-devolucao-de-livros-de-ingles-as-escolas-de-foz/"},
 "h2foz-jurisprudencia": {"veic": "H2FOZ", "data": "2026-02-25", "tit": "Livros de Inglês recolhidos: Justiça questiona base jurídica da prefeitura na ação", "url": "https://www.h2foz.com.br/educacao/livros-ingles-recolhidos-justica-questiona-prefeitura-foz-do-iguacu/"},
 "h2foz-cpi-proposta": {"veic": "H2FOZ", "data": "2026-10-08", "tit": "CPI: livros de inglês foram recolhidos quando tramitava proposta de meio milhão para compra de nova publicação", "url": "https://www.h2foz.com.br/politica/cpi-livros-de-ingles-recolhidos-foz-do-iguacu/"},
 "h2foz-cpi-nota": {"veic": "H2FOZ", "data": "2026-10-09", "tit": "CPI dos Livros de Inglês: prefeitura afirma que não houve prejuízo pedagógico a alunos", "url": "https://www.h2foz.com.br/politica/cpi-dos-livros-ingles-prefeitura-nao-houve-prejuizo-pedagogico/"},
 "fl-londrina": {"tipo": "S2", "veic": "Folha de Londrina", "data": "2024-11", "tit": "Educação vai recolher livro infantil com ‘conteúdo sensível’", "url": "https://www.folhadelondrina.com.br/politica/educacao-vai-recolher-livro-infantil-com-conteudo-sensivel-3292131e.html"},
 "cbn-londrina-2026": {"tipo": "S1", "veic": "CBN Londrina", "data": "2026-03-12", "tit": "Londrina recolhe livro infantil de escolas após polêmica com ‘conteúdo sensível’", "url": "https://cbnlondrina.com.br/materias/londrina-recolhe-livro-infantil-de-escolas-apos-polemica-com-conteudo-sensivel"},
 "ogpl-sei-londrina-2026": {"tipo": "O1", "veic": "Observatório de Gestão Pública de Londrina", "data": "2026", "tit": "Relatório sobre transparência no SEI: 15 processos Pedido de Providências públicos e 19.588 restritos após 18/02/2025; Portaria 28/2020 prevê publicidade como regra.", "url": "https://observatoriolondrina.org.br/uploads/relatorios/Relat%C3%B3rio%20SEI%20-%20Pedidos%20de%20Provid%C3%AAncias.pdf"},
 "fl-londrina-errata-2026": {"tipo": "S2", "veic": "Folha de Londrina", "data": "2026-03-12", "tit": "Errata da matéria sobre o pedido de recolhimento de O bebê vem com a cegonha?!?: iniciativa da Gerência de Ensino Fundamental da SME", "url": "https://www.folhadelondrina.com.br/politica/educacao-vai-recolher-livro-infantil-com-conteudo-sensivel-3292131e.html"},
 "jornal-londrina-3630-2018": {"tipo": "P1", "veic": "Jornal Oficial do Município de Londrina · nº 3630 (cópia digital assinada pelo Município)", "data": "2018-10-09", "tit": "Relação de livros adquiridos pelo Município inclui O Bebê Vem com a Cegonha, Editora Melhoramentos, quantidade 1, preço unitário e total R$ 35,33", "url": "https://www.luhu.org.br/uploads/editor/jornal_3630_assinado_LEI12765_3N2xMmTDBLqGYuc.pdf"},
 "bonde-londrina-2026": {"tipo": "S2", "veic": "Bonde News · reprodução da apuração da Folha de Londrina", "data": "2026-03-12", "tit": "Educação vai recolher livro infantil sobre reprodução humana por conteúdo sensível", "url": "https://www.bonde.com.br/bondenews/politica/educacao-vai-recolher-livro-infantil-sobre-reproducao-humana-por-conteudo-sensivel/amp"},
 "canoinhas-req149": {"tipo": "P1", "veic": "Câmara Municipal de Canoinhas · Requerimento nº 149/2024", "data": "2024-04-16", "tit": "Requerimento nº 149/2024 (PDF assinado)", "url": "https://sapl.canoinhas.sc.leg.br/media/sapl/public/materialegislativa/2024/15355/req_149.pdf"},
 "canoinhas-sapl-req149": {"tipo": "P1", "veic": "SAPL · Câmara Municipal de Canoinhas", "data": "2024-04-16", "tit": "Registro legislativo do Requerimento nº 149/2024", "url": "https://sapl.canoinhas.sc.leg.br/materia/15355"},
 "canoinhas-online-2024": {"tipo": "S2", "veic": "Canoinhas Online", "data": "2024-04-19", "tit": "Canoinhas em destaque nacional: vídeo de prefeita jogando livros no lixo repercute no país", "url": "https://canoinhasonline.com.br/2024/04/canoinhas-em-destaque-nacional-video-de-prefeita-jogando-livros-no-lixo-repercute-no-pais.html"},
 "canoinhas-instagram-juliana": {"tipo": "P1", "veic": "Instagram · Juliana Maciel", "data": "2024-04-17", "tit": "Vídeo da prefeita sobre os livros da Mundoteca", "url": "https://www.instagram.com/p/C56x9I6PtJh/?img_index=1"},
 "canoinhas-uol-investigacao": {"tipo": "S1", "veic": "UOL", "data": "2024-04-20", "tit": "MP abre investigação contra prefeita que admitiu jogar livros no lixo", "url": "https://noticias.uol.com.br/politica/ultimas-noticias/2024/04/20/mpsc-investigacao-prefeita-santa-catarina-jogar-livros-lixo-pt-pl-bolsonaro.htm"},
 "canoinhas-uol-resposta": {"tipo": "S1", "veic": "UOL", "data": "2024-04-23", "tit": "Livros jogados no lixo não foram emprestados a crianças, diz biblioteca", "url": "https://noticias.uol.com.br/politica/ultimas-noticias/2024/04/23/livros-jogados-no-lixo-prefeita-sc-biblioteca.htm"},
 "canoinhas-uol-comprova": {"tipo": "S1", "veic": "UOL Comprova", "data": "2024-04-25", "tit": "Projeto Mundoteca não é do governo federal como disse prefeita de SC", "url": "https://noticias.uol.com.br/comprova/ultimas-noticias/2024/04/25/projeto-mundoteca-nao-e-do-governo-federal-como-disse-prefeita-sc.htm"},
 "canoinhas-local-nota": {"tipo": "S1", "veic": "Canoinhas Online", "data": "2024-04-19", "tit": "Vídeo de prefeita jogando livros no lixo repercute no país", "url": "https://canoinhasonline.com.br/2024/04/canoinhas-em-destaque-nacional-video-de-prefeita-jogando-livros-no-lixo-repercute-no-pais.html"},
 "canoinhas-secom-mundoteca": {"tipo": "P1", "veic": "Secretaria de Comunicação Social da Presidência da República", "data": "2023-03-01", "tit": "Mundoteca não é um projeto do governo federal", "url": "https://www.gov.br/secom/pt-br/fatos/brasil-contra-fake/noticias/2023/3/mundoteca-nao-e-um-projeto-do-governo-federal"},
 "canoinhas-tse-juliana": {"tipo": "P1", "veic": "Tribunal Regional Eleitoral de Santa Catarina", "data": "2024-10-10", "tit": "Resultado oficial de votação por seção — Canoinhas, Juliana Maciel Hoppe (PL)", "url": "https://apps.tre-sc.jus.br/site/fileadmin/arquivos/eleicoes/eleicoes2024/resultados_turno_1/votacao_secao/pdfs/VotSecao_80730_22.pdf"},
 "canoinhas-bereia": {"tipo": "S2", "veic": "Coletivo Bereia", "data": "2024-04-19", "tit": "Prefeita de Canoinhas (SC) destrói livros e mente ao dizer que foram produzidos pelo governo federal", "url": "https://coletivobereia.com.br/prefeita-de-canoinhas-sc-destroi-livros-e-mente-ao-dizer-que-foram-produzidos-pelo-governo-federal/"},
 "tce-canoinhas-lev-2024": {"tipo": "P1", "veic": "Tribunal de Contas do Estado de Santa Catarina", "data": "2024-07-08", "tit": "Decisão Singular GCS/GSS-861/2024 e Relatório DGE-328/2024 · Processo @LEV 24/80041829", "url": "https://consulta.tce.sc.gov.br/Diario/dotc-e2024-07-08.pdf"},
 "canoinhas-sapl-acessorios": {"tipo": "P1", "veic": "SAPL · Câmara Municipal de Canoinhas", "data": "2024-05-14", "tit": "Documentos acessórios do Requerimento nº 149/2024: Ofício 205/2024 e Ofício 013/2024", "url": "https://sapl.canoinhas.sc.leg.br/materia/15355/documentoacessorio"},
 "canoinhas-oficio-205": {"tipo": "P1", "veic": "Câmara Municipal de Canoinhas", "data": "2024-04-17", "tit": "Ofício nº 205/2024/AL: encaminha o Requerimento nº 149/2024 à prefeita e ao coordenador de biblioteca", "url": "https://sapl.canoinhas.sc.leg.br/media/sapl/public/documentoacessorio/2024/28163/of_205.pdf"},
 "canoinhas-fundacao-resposta-013": {"tipo": "P1", "veic": "Fundação Cultural de Canoinhas Helmy Wendt Mayer", "data": "2024-05-14", "tit": "Ofício nº 013/2024: resposta ao Requerimento nº 149/2024, com descrição da Mundoteca e registro de empréstimo", "url": "https://sapl.canoinhas.sc.leg.br/media/sapl/public/documentoacessorio/2024/28411/r_149.pdf"},
 "canoinhas-mpsc-pauta-2024": {"tipo": "P1", "veic": "Ministério Público de Santa Catarina · Diário Oficial Eletrônico nº 3692", "data": "2024-08-01", "tit": "Pauta da 1ª Turma Revisora do Conselho Superior: Notícia de Fato nº 01.2024.00012159-3, 1ª Promotoria de Canoinhas", "url": "https://documentos.mpsc.mp.br/portal/Conteudo/publicacoes/do_mpsc_2024-08-01.pdf"},
 "canoinhas-mpsc-diario-3698": {"tipo": "P1", "veic": "Ministério Público de Santa Catarina · Diário Oficial Eletrônico nº 3698", "data": "2024-08-09", "tit": "Extrato do julgamento do recurso na Notícia de Fato nº 01.2024.00012159-3: conhecido e desprovido por unanimidade", "url": "https://documentos.mpsc.mp.br/portal/Conteudo/publicacoes/do_mpsc_2024-08-09.pdf"},
 "cb-sc-origem": {"veic":"Correio Braziliense","data":"2023-11-09","tit":"Quais histórias são contadas nos livros proibidos em Santa Catarina? Conheça","url":"https://www.correiobraziliense.com.br/diversao-e-arte/2023/11/6652917-quais-historias-sao-contadas-nos-livros-proibidos-em-santa-catarina-conheca.html"},
 "pnc-cuiaba-lei": {"veic":"Ponto na Curva","data":"2025-10-22","tit":"Sancionada lei que proíbe livros com conteúdo erótico nas escolas de Cuiabá","url":"https://www.pontonacurva.com.br/legislativo/sancionada-lei-que-proibe-livros-com-conteudo-erotico-nas-escolas-de-cuiaba/29494"},
 "metropoles-cuiaba-lei": {"veic":"Metrópoles","data":"2025-10-22","tit":"Cuiabá sanciona lei que proíbe materiais de “conteúdo erótico” nas escolas","url":"https://www.metropoles.com/colunas/grande-angular/cuiaba-sanciona-lei-que-proibe-materiais-de-conteudo-erotico-nas-escolas"},
 "upiara-pl18": {"veic":"Portal Upiara","data":"2026-02-26","tit":"Alesc aprova lei que cria Programa de Incentivo à Leitura nas escolas estaduais","url":"https://upiara.com.br/noticias/alesc-aprova-lei-que-cria-programa-de-incentivo-a-leitura-nas-escolas-estaduais/"},
 "dn-volta-go-pr": {"veic":"Diário do Nordeste","data":"2024-04-05","tit":"Goiás e Paraná voltam a incluir livro O Avesso da Pele em escolas dos estados","url":"https://diariodonordeste.verdesmares.com.br/ultima-hora/pais/goias-e-parana-voltam-a-incluir-livro-o-avesso-da-pele-em-escolas-dos-estados-1.3497771"},
 "sinop-lei-3499": {"veic":"Só Notícias","data":"2025-07-07","tit":"Prefeito de Sinop sanciona lei que proíbe livros com conteúdo erótico em escolas municipais","url":"https://www.sonoticias.com.br/politica/prefeito-de-sinop-sanciona-lei-que-proibe-livros-com-conteudo-erotico-em-escolas-municipais/"},
 "cuiaba-pl-ranalli": {"veic":"Câmara Municipal de Cuiabá","data":"2025-04-03","tit":"Projeto de lei que proíbe livros com conteúdo erótico nas escolas do município (íntegra)","url":"https://legislativo.camaracuiaba.mt.gov.br/Arquivo/Documents/PL/454653-20250403110929032941784PLN(8425).pdf"},
 "pnc-cuiaba-set": {"veic":"Ponto na Curva","data":"2025-09-26","tit":"Projeto que proíbe livros com conteúdo erótico avança na Câmara de Cuiabá","url":"https://www.pontonacurva.com.br/legislativo/projeto-que-proibe-livros-com-conteudo-erotico-avanca-na-camara-de-cuiaba/29039"},
 "pnc-cuiaba-out": {"veic":"Ponto na Curva","data":"2025-10-03","tit":"Vereadores aprovam lei que proíbe livros com conteúdo erótico em Cuiabá","url":"https://www.pontonacurva.com.br/legislativo/vereadores-aprovam-lei-que-proibe-livros-com-conteudo-erotico-em-cuiaba/29160"},
 "aleam-pl154": {"veic":"Assembleia Legislativa do Amazonas","data":"2024-03-11","tit":"Projeto de Lei nº 154/2024 (íntegra)","url":"https://sapl.al.am.leg.br/media/sapl/public/materialegislativa/2024/169572/pl-009935.pdf"},
 "almt-pl1768": {"veic":"Assembleia Legislativa de Mato Grosso","data":"2024-10-30","tit":"Projeto de Lei nº 1768/2024 (íntegra)","url":"https://www.al.mt.gov.br/storage/webdisco/cp/20241030130016157100.pdf"},
 "serra-pl-2025": {"veic":"Câmara Municipal da Serra","data":"2025-01-27","tit":"Projeto de lei que veda conteúdos eróticos em escolas (íntegra)","url":"https://serra.camarasempapel.com.br/Arquivo/Documents/PL/96208-202501271549010076095I1T6C(9217).pdf"},
 "alesc-emenda-pl18": {"veic":"Assembleia Legislativa de Santa Catarina","data":"2025-03-06","tit":"Emenda modificativa ao Projeto de Lei nº 0018/2025 (íntegra)","url":"https://portalelegis.alesc.sc.gov.br/documentos/zJgE1"},
 "camara-pl10583": {"veic":"Agência Câmara de Notícias","data":"2025-08-21","tit":"Comissão aprova medidas contra erotização precoce nas escolas","url":"https://www.camara.leg.br/noticias/1191625-comissao-aprova-medidas-contra-erotizacao-precoce-nas-escolas/"},
 "bdf-bienal": {
  "veic": "Brasil de Fato",
  "data": "2019-09-08",
  "tit": "Presidente do STF reverte decisão judicial que permitia censura na Bienal do Rio",
  "url": "https://www.brasildefato.com.br/2019/09/08/presidente-do-stf-reverte-decisao-judicial-que-permitia-censura-na-bienal-do-rio/"
 },
 "bdf-doria": {
  "veic": "Brasil de Fato",
  "data": "2019-09-03",
  "tit": "Doria manda recolher apostilas com página sobre diversidade sexual",
  "url": "https://www.brasildefato.com.br/2019/09/03/doria-manda-recolher-apostilas-com-pagina-sobre-diversidade-sexual"
 },
 "met-doria": {
  "veic": "Metrópoles",
  "data": "2019-09-10",
  "tit": "Justiça manda governo devolver apostilas recolhidas por ordem de Doria",
  "url": "https://www.metropoles.com/brasil/justica/justica-manda-governo-devolver-apostilas-recolhidas-por-ordem-de-doria"
 },
 "mobile-apex": {
  "veic": "Mobile · observatório de censura",
  "data": "2021-01-26",
  "tit": "Apex censura lista com livros de autoras brasileiras críticas ao governo Bolsonaro",
  "url": "https://movimentomobile.org.br/caso/apex-censura-lista-com-livros-de-autoras-brasileiras-criticas-ao-governo-bolsonaro-2/"
 },
 "ovale-tau": {
  "veic": "OVALE",
  "data": "2026-04-16",
  "tit": "Obra sobre menina com duas mães passa por análise, diz Prefeitura",
  "url": "https://sampi.net.br/ovale/noticias/2974212/vale-do-paraiba/2026/04/obra-sobre-menina-com-duas-maes-passa-por-analise-diz-prefeitura"
 },
 "bdf-funap": {
  "veic": "Brasil de Fato",
  "data": "2020-02-14",
  "tit": "Veto a livros nos estados revela “institucionalização da censura”",
  "url": "https://www.brasildefato.com.br/2020/02/14/veto-a-livros-nos-estados-revela-institucionalizacao-da-censura/"
 },
 "benaglia-heller-2022": {"veic":"Anamorphosis – Revista Internacional de Direito e Literatura","data":"2022","tit":"Prisão intelectual: a censura do Estado em livros que compõem projetos de remição de pena · Benaglia e Heller","url":"https://dialnet.unirioja.es/descarga/articulo/9513222.pdf"},
 "reimao-2023": {
  "veic": "Literatura e Autoritarismo (pesquisa, UFSM)",
  "data": "2023",
  "tit": "Tentativas de censura a livros nos primeiros dois anos do governo Bolsonaro · Reimão, Nery e Maués",
  "url": "https://periodicos.ufsm.br/LA/article/view/66347"
 },
 "mpf-ro-arquivamento": {"veic":"Ministério Público Federal · Diário Eletrônico, DMPF-e nº 161/2021","data":"2021-08-30","tit":"Inquérito Civil nº 1.31.000.000213/2020-61 · homologação do arquivamento","url":"https://biblioteca.mpf.mp.br/repositorio/bitstreams/4b023a0c-7f30-421e-8de2-fb31235ef7e1/download"},
 "adendo-ro-copia": {"veic":"Cópia pública do Adendo 10053329 e Memorando-Circular 4/2020/SEDUC-DGE","data":"2020-02-06","tit":"Relação dos livros a serem recolhidos · Adendo ID 10053329","url":"https://questoesrelevantes.wordpress.com/wp-content/uploads/2020/02/rondonia-livros-proibidos.pdf"},
 "folha-funap-11fev": {"veic":"Folha de S.Paulo","data":"2020-02-11","tit":"Governo Doria censura lista de livros de projeto em presídios de São Paulo","url":"https://www1.folha.uol.com.br/cotidiano/2020/02/governo-doria-censura-lista-de-livros-de-projeto-em-presidios-de-sao-paulo.shtml"},
 "folha-funap-14fev": {"veic":"Folha de S.Paulo","data":"2020-02-14","tit":"Governo Doria cria comissão para analisar escolha de livros para presidiários de SP","url":"https://www1.folha.uol.com.br/cotidiano/2020/02/governo-doria-cria-comissao-para-analisar-escolha-de-livros-para-presidiarios-de-sp.shtml"},
 "ovale-tau-jul14": {"veic":"OVALE/Sampi","data":"2026-07-14","tit":"Taubaté: escolas voltarão a usar livro sobre menina com duas mães","url":"https://sampi.net.br/ovale/noticias/2991910/vale-do-paraiba/2026/07/taubate-escolas-voltarao-a-usar-livro-sobre-menina-com-duas-maes"},
 "jurinews-sjc-2024": {"veic":"Jurinews","data":"2024-10-09","tit":"Liminar que determinava redistribuição de livro que cita Marielle Franco em escolas municipais é suspensa","url":"https://jurinews.com.br/sp/liminar-que-determinava-redistribuicao-de-livro-que-cita-marielle-franco-em-escolas-municipais-e-suspensa/"},
 "folha-sjc-ordem": {"veic":"Folha de S.Paulo","data":"2026-07-30","tit":"Justiça determina volta de livro que retrata Marielle a escolas em São José dos Campos","url":"https://www1.folha.uol.com.br/ciencia/2026/07/justica-determina-volta-de-livro-que-retrata-marielle-a-escolas-em-sao-jose-dos-campos.shtml"},
 "uol-sjc-ordem": {"veic":"UOL","data":"2026-07-29","tit":"Juíza vê censura e manda prefeitura devolver às escolas livro com Marielle","url":"https://noticias.uol.com.br/cotidiano/ultimas-noticias/2026/07/29/juiza-manda-prefeitura-devolver-as-escolas-livro-com-marielle-em-sao-jose.ghtm"},
 "ovale-sjc-sentenca": {"veic":"OVALE","data":"2026-07-28","tit":"SJC: Justiça determina volta de obra que cita Marielle às escolas","url":"https://sampi.net.br/ovale/noticias/2994720/vale-do-paraiba/2026/07/sjc-justica-determina-volta-de-obra-que-cita-marielle-as-escolas"},
 "relatorio-palmares-original": {"veic":"Fundação Cultural Palmares · CNIRC (cópia do endereço oficial preservada pelo Internet Archive)","data":"2021-06-11","tit":"Relatório Público 01 – Retrato do Acervo: três décadas de dominação marxista na Fundação Cultural Palmares","url":"https://web.archive.org/web/20230506020536/https://www.palmares.gov.br/wp-content/uploads/2021/06/cnirc-01-gab-10-06-21.pdf"},
 "relatorio-gestao-palm-2021": {"veic":"Fundação Cultural Palmares · Relatório de Gestão 2021","data":"2022-03-31","tit":"Relatório de Gestão 2021 · Organização do Acervo da Fundação Cultural Palmares","url":"https://www.gov.br/palmares/pt-br/midias/arquivos-menu-acesso-a-informacao/resultados-gerados2021_ok.pdf"},
 "palmares-inventario-2023": {"veic":"Fundação Cultural Palmares · CNIRC","data":"2023-09-04","tit":"Inventário Bibliográfico · versão atualizada em 04/09/2023","url":"https://www.gov.br/palmares/pt-br/centrais-de-conteudo/publicacoes/ListadeLivrosAtualizada04.09.23.pdf"},
 "participa-palm": {"veic":"Fundação Cultural Palmares · Participa + Brasil","data":"2023-11-08","tit":"Política de Formação, Desenvolvimento e Gestão do Acervo Bibliográfico · processo 01420.100952/2021-87","url":"https://www.gov.br/participamaisbrasil/politica-de-formacao-desenvolvimento-e-gestao-do-acervo-bibliografico-da-biblioteca-da-fundacao-cultural-palmares-fcp"},
 "unesp-palmares": {"veic":"Jornal da Unesp","data":"2021-06-15","tit":"Em cruzada obscurantista, Fundação Palmares pensa em se desfazer de 54% dos livros de seu acervo","url":"https://jornal.unesp.br/2021/06/15/em-cruzada-obscurantista-fundacao-palmares-pensa-em-se-desfazer-de-54-dos-livros-de-seu-acerco/"},
 "palmares-inventario": {"veic":"Fundação Cultural Palmares","data":"2024-08-08","tit":"Inventário Bibliográfico da Fundação Cultural Palmares","url":"https://www.gov.br/palmares/pt-br/centrais-de-conteudo/publicacoes/lista-de-livros-atualizada-8-8-2024-1.pdf"},
 "palmares-politica": {"veic":"Fundação Cultural Palmares","data":"2021-12-21","tit":"Política de Formação, Desenvolvimento e Gestão do Acervo","url":"https://www.gov.br/palmares/pt-br/midias/arquivos/download/politicas-de-acervo-versao-final-21-12-2021.pdf"},
 "oglobo-palm-300": {"veic":"O Globo · Lauro Jardim","data":"2021-07-23","tit":"Sérgio Camargo desiste de doar livros da Fundação Palmares","url":"https://blogs.oglobo.globo.com/lauro-jardim/post/acuado-pela-justica-sergio-camargo-volta-atras-e-desiste-de-doar-livros-da-fundacao-palmares.html"},
 "oglobo-palm-ala": {"veic":"O Globo · Lauro Jardim","data":"2021-08-03","tit":"Sérgio Camargo pretende manter livros separados em seção da vergonha","url":"https://blogs.oglobo.globo.com/lauro-jardim/post/nova-investida-favor-dos-livros-que-sergio-camargo-tenta-excluir-do-acervo-da-fundacao-palmares.html"},
 "comunicado-lafaiete": {"veic":"Prefeitura de Conselheiro Lafaiete · Secretaria Municipal de Educação","data":"2024-06-20","tit":"Comunicado oficial sobre O Menino Marrom","url":"https://conselheirolafaiete.mg.gov.br/v2/comunicado-secretaria-municipal-de-educacao/"},
 "decisao-lafaiete": {"veic":"Poder Judiciário de Minas Gerais · cópia da decisão","data":"2024-06-27","tit":"Processo nº 5006658-14.2024.8.13.0183 · decisão liminar em ação popular","url":"https://www.migalhas.com.br/arquivos/2024/6/C9AB64BF939FD5_%C2%B7ProcessoJudicialEletronico-1%C2%BA.pdf"},
 "sentenca-lafaiete": {"veic":"TJMG · sentença reproduzida no Jusbrasil","data":"2024-12-02","tit":"Processo nº 5006658-14.2024.8.13.0183 · sentença que anula o ato de suspensão de O Menino Marrom","url":"https://www.jusbrasil.com.br/jurisprudencia/tj-mg/2904317608/inteiro-teor-2904317613"},
 "migalhas-sjc": {"veic":"Migalhas","data":"2026-07-29","tit":"Juíza vê censura e manda devolver às escolas livro que inclui Marielle Franco","url":"https://www.migalhas.com.br/quentes/461228/juiza-ve-censura-e-manda-devolver-as-escolas-livro-que-inclui-marielle-franco"},
 "folha-unirv": {"veic":"Folha de S.Paulo","data":"2023-05-01","tit":"Livro de Marçal Aquino é retirado de lista de vestibular após polêmica com deputado","url":"https://www1.folha.uol.com.br/ilustrada/2023/05/livro-de-marcal-aquino-e-retirado-de-lista-de-vestibular-apos-polemica-com-deputado.shtml"},
 "ovale-tau-abr10": {"veic":"OVALE","data":"2026-04-10","tit":"Livro sobre menina com duas mães é retirado de escolas em Taubaté","url":"https://sampi.net.br/ovale/noticias/2972973/sessao-extra/2026/04/livro-sobre-menina-com-duas-maes-e-retirado-de-escolas-em-taubate"},
 "piaui-bolsa": {"veic":"revista piauí","data":"2026","tit":"Fábulas na fogueira","url":"https://piaui.uol.com.br/web/fabulas-fogueira-livros-infantojuvenis-bolsa-amarela/"},
 "camara-limeira-req": {"veic":"Câmara Municipal de Limeira","data":"2019-08-12","tit":"Requerimento nº 451/2019 · Clayton Silva","url":"https://consulta.limeira.sp.leg.br/arquivo?Id=215235"},
 "camara-limeira-resp": {"veic":"Prefeitura de Limeira · Secretaria Municipal de Educação","data":"2019-09-24","tit":"Ofício GSE nº 363/2019 · resposta sobre A bolsa amarela","url":"https://consulta.limeira.sp.leg.br/arquivo?Id=226368"},
 "uninter-bolsa": {
  "veic": "Uninter Notícias (artigo de opinião)",
  "data": "2026-05-26",
  "tit": "A bolsa amarela, a censura e o direito à leitura",
  "url": "https://www.uninter.com/noticias/?p=77595"
 },
 "cgn-alems": {
  "veic": "Campo Grande News",
  "data": "2024-03",
  "tit": "Direita e esquerda se unem na Assembleia contra livro sobre sexo e racismo",
  "url": "https://www.campograndenews.com.br/politica/direita-e-esquerda-se-unem-na-assembleia-contra-livro-sobre-sexo-e-racismo"
 },
 "bdf-rs": {
  "veic": "Brasil de Fato",
  "data": "2024-03-05",
  "tit": "Ofício da 6ª CRE manda retirar O avesso da pele de escolas de 18 municípios; Seduc desautoriza",
  "url": "https://brasildefato.com.br/?p=601142"
 },
 "pn-rs": {
  "veic": "PublishNews",
  "data": "2024-03-06",
  "tit": "‘O avesso da pele’ continua a ser alvo de ataques e tentativas de censura",
  "url": "https://www.publishnews.com.br/materias/2024/03/06/o-avesso-da-pele-continua-a-ser-alvo-de-ataques-e-tentativas-de-censura"
 },
 "icl-rs": {
  "veic": "ICL Notícias",
  "data": "2024-03-04",
  "tit": "Obra-prima de Jeferson Tenório é censurada em cidade do Rio Grande do Sul",
  "url": "https://iclnoticias.com.br/?p=11537"
 },
 "icl-pr": {
  "veic": "ICL Notícias",
  "data": "2024-03-06",
  "tit": "Após censura no RS, livro ‘O avesso da pele’ será recolhido de escolas de Curitiba",
  "url": "https://iclnoticias.com.br/?p=11837"
 },
 "pn-volta": {
  "veic": "PublishNews",
  "data": "2024-04-12",
  "tit": "Livro ‘O avesso da pele’ volta a circular nas escolas do Paraná e de Goiás",
  "url": "https://www.publishnews.com.br/materias/2024/04/12/apanhadao-da-semana-livro-o-avesso-da-pele-volta-a-circular-nas-escola-do-parana-e-de-goias"
 },
 "cgn-volta": {
  "veic": "Campo Grande News",
  "data": "2024-04-23",
  "tit": "Governo devolve livro polêmico às escolas estaduais",
  "url": "https://www.campograndenews.com.br/educacao-e-tecnologia/governo-devolve-livro-polemico-as-escolas-estaduais"
 },
 "cf-sc": {
  "veic": "Congresso em Foco",
  "data": "2023-11-09",
  "tit": "Governo de SC determina retirada de livros em escolas; veja lista",
  "url": "https://www.congressoemfoco.com.br/noticia/9020/governo-de-sc-determina-retirada-de-livros-em-escolas-veja-lista"
 },
 "dp-ro": {
  "veic": "Diario de Pernambuco",
  "data": "2020-02-06",
  "tit": "Governo de RO manda recolher Macunaíma e mais 42 livros e depois recua",
  "url": "https://www.diariodepernambuco.com.br/noticia/brasil/2020/02/governo-de-ro-manda-recolher-macunaima-e-mais-42-livros-e-depois-rec.html"
 },
 "sbt-palm": {
  "veic": "SBT News",
  "data": "2021-06-24",
  "tit": "Justiça Federal proíbe Sérgio Camargo de doar obras da Fundação Palmares",
  "url": "https://sbtnews.sbt.com.br/noticia/justica/171771-justica-federal-proibe-sergio-camargo-de-doar-obras-da-fundacao-palmares"
 },
 "sbt-museu": {
  "veic": "SBT News",
  "data": "2021-08",
  "tit": "Palmares quer colocar obras em ‘museu da vergonha’",
  "url": "https://sbtnews.sbt.com.br/noticia/brasil/176037-palmares-quer-colocar-obras-em-museu-da-vergonha-historiador-critica"
 },
 "pn-ziraldo": {
  "veic": "PublishNews",
  "data": "2024-06-21",
  "tit": "Livro de Ziraldo é censurado em Minas Gerais e entidades do livro se manifestam",
  "url": "https://www.publishnews.com.br/materias/2024/06/21/apanhadao-da-semana-livro-de-ziraldo-e-censurado-em-minas-gerais-e-entidades-do-livro-se-manifestam"
 },
 "dp-ziraldo": {
  "veic": "Diario de Pernambuco",
  "data": "2024-06-27",
  "tit": "Justiça derruba censura ao livro ‘O menino marrom’ em Minas Gerais",
  "url": "https://www.diariodepernambuco.com.br/noticia/viver/2024/06/justica-derruba-censura-ao-livro-o-menino-marrom-em-minas-gerais.html"
 },
 "pn-sjc": {
  "veic": "PublishNews",
  "data": "2024-06-21",
  "tit": "Prefeitura de São José dos Campos retira obra da Editora Mostarda das salas de leitura das escolas",
  "url": "https://www.publishnews.com.br/materias/2024/06/21/prefeitura-de-sao-jose-dos-campos-retira-obra-da-editora-mostarda-das-salas-de-leitura-das-escolas"
 },
 "ap-sjc": {
  "veic": "Alma Preta",
  "data": "2024-09-11",
  "tit": "Livro acusado de doutrinação religiosa retorna às escolas de São José dos Campos",
  "url": "https://almapreta.com.br/sessao/cotidiano/livro-acusado-de-doutrinacao-religiosa-retorna-as-escolas-de-sao-jose-dos-campos/"
 },
 "op-sjc": {
  "veic": "O Povo",
  "data": "2026-07-28",
  "tit": "Juíza vê censura e manda devolver livro com Marielle às escolas de São José dos Campos",
  "url": "https://www.opovo.com.br/noticias/politica/2026/07/28/juiza-ve-censura-e-manda-devolver-livro-com-marielle-as-escolas-de-sao-jose-dos-campos.html"
 },
 "unirv-nota": {"veic":"Universidade de Rio Verde (UniRV)","data":"2023-04-27","tit":"Nota de esclarecimento: Obra literária Vestibular Medicina","url":"https://www.unirv.edu.br/ver_noticias.php?codabr=18353"},
 "unirv-lista-2023": {"veic":"Universidade de Rio Verde (UniRV)","data":"2023-04-12","tit":"Dê o primeiro passo para seu futuro profissional: se inscreva no vestibular de Medicina","url":"https://unirv.edu.br/ver_noticias.php?codabr=18320"},
 "fp-unirv": {
  "veic": "Folha de Pernambuco",
  "data": "2023-05-02",
  "tit": "ABL repudia censura a livro de Marçal Aquino em vestibular",
  "url": "https://www.folhape.com.br/cultura/abl-repudia-censura-a-livro-de-marcal-aquino-em-vestibular/268713/"
 },
 "jo-unirv": {
  "veic": "Jornal Opção",
  "data": "2023-04",
  "tit": "Escritor critica UniRV por retirada de livro após ataques de deputado",
  "url": "https://jornalopcao.com.br/polemica/escritor-critica-unirv-por-retirada-de-livro-apos-ataques-de-gayer-covardes-486937/"
 },
 "lei-londrina-13930": {"veic":"Prefeitura de Londrina · Jornal Oficial do Município","data":"2025-03-21","tit":"Lei Municipal nº 13.930/2025 · PL 79/2024","url":"https://portal.londrina.pr.gov.br/images/stories/jornalOficial/Jornal-5446-Assinado.pdf"},
 "pedido-londrina": {"veic":"Nova Lima News · reprodução de informação do Pleno.News","data":"2024-11-27","tit":"Livro erótico é encontrado em creche de Londrina; vereadora pede providências","url":"https://novalima.news/livro-erotico-e-encontrado-em-creche-de-londrina-vereadora-pede-providencias/"},
 "ric-londrina-2024": {"veic":"RIC.com.br","data":"2024-11-26","tit":"Livro que detalha ato sexual é encontrado em CMEI e gera polêmica em Londrina","url":"https://ric.com.br/politica/livro-detalha-ato-sexual-encontrado-cmei-londrina/"},
 "taroba-londrina-2024": {"veic":"Tarobá","data":"2024-11-26","tit":"Livro infantil com suposto conteúdo erótico é encontrado em CMEI no Jardim Leonor","url":"https://taroba.com.br/noticias/cidade/livro-infantil-com-suposto-conteudo-erotico-e-encontrado-em-cmei-no-jardim-leonor/amp"},
 "pl79-londrina": {"veic":"Câmara Municipal de Londrina","data":"2024-04-09","tit":"Projeto de Lei nº 79/2024 · Processo 148224, documento 208880","url":"https://www1.cml.pr.gov.br/projetos/2024/PL000792024.pdf"},
 "bp-londrina": {
  "veic": "Brasil Paralelo",
  "data": "2025-02-21",
  "tit": "Londrina proíbe livros com teor erótico em escolas municipais",
  "url": "https://www.brasilparalelo.com.br/noticias/londrina-proibe-livros-com-teor-erotico-em-escolas-municipais"
 },
 "met-bolsa1": {
  "veic": "Metrópoles",
  "data": "2026-05-15",
  "tit": "Treta sobre livro adotado por escola do CBMDF revolta pais",
  "url": "https://www.metropoles.com/distrito-federal/na-mira/treta-sobre-livro-adotado-por-escola-do-cbmdf-revolta-pais-podre"
 },
 "met-bolsa2": {
  "veic": "Metrópoles",
  "data": "2026-05-25",
  "tit": "Colégio militar do DF reavalia inclusão de livro após treta com pais",
  "url": "https://www.metropoles.com/distrito-federal/colegio-militar-do-df-reavalia-inclusao-de-livro-apos-treta-com-pais"
 },
 "cc-pr": {
  "veic": "CartaCapital",
  "data": "2024-03-12",
  "tit": "Editora vai à Justiça contra decisão do Paraná de recolher 'O Avesso da Pele' nas escolas",
  "url": "https://www.cartacapital.com.br/cultura/editora-vai-a-justica-contra-decisao-do-parana-de-recolher-o-avesso-da-pele-nas-escolas/"
 },
 "cc-oficio": {
  "veic": "CartaCapital",
  "data": "2024-03-06",
  "tit": "Secretaria de Educação do Paraná ordena recolhimento de livro 'O Avesso da Pele'",
  "url": "https://www.cartacapital.com.br/educacao/secretaria-de-educacao-do-parana-ordena-recolhimento-de-livro-o-avesso-da-pele/"
 },
 "cc-go": {
  "veic": "CartaCapital",
  "data": "2024-03-07",
  "tit": "'O Avesso da Pele': Goiás encampa cruzada e determina a retirada do livro das escolas",
  "url": "https://www.cartacapital.com.br/educacao/o-avesso-da-pele-goias-encampa-cruzada-e-determina-a-retirada-do-livro-das-escolas/"
 },
 "cc-volta": {
  "veic": "CartaCapital",
  "data": "2024-04-09",
  "tit": "'O Avesso da Pele' volta às escolas do Paraná e de Goiás após recolhimento",
  "url": "https://www.cartacapital.com.br/educacao/o-avesso-da-pele-volta-as-escolas-do-parana-e-de-goias-apos-recolhimento/"
 },
 "gp-estados": {
  "veic": "Gazeta do Povo",
  "data": "2024-03",
  "tit": "Estados recolhem livro por descrição de cenas de sexo e jargões inadequados",
  "url": "https://www.gazetadopovo.com.br/brasil/estados-recolhem-livro-por-descricao-de-cenas-de-sexo-e-jargoes-inadequados/"
 },
 "alesc-ind154-doc": {"veic":"Assembleia Legislativa de Santa Catarina · Secretaria de Estado da Educação","data":"2024-06-04","tit":"Processo SCC 4288/2024 · Informação nº 304/2024/SED/DIEN e Ofício/Gabs nº 1017/2024","url":"https://portalelegis.alesc.sc.gov.br/documentos/5aogB/download"},
 "am-jabuti": {
  "veic": "Alessandra Magalhães (Substack)",
  "data": "2024-03",
  "tit": "Livro ganhador do Jabuti é censurado",
  "url": "https://alessandramagalhes.substack.com/p/livro-ganhador-do-jabuti-e-censurado"
 },
 "cc-sc": {
  "veic": "CartaCapital",
  "data": "2023-11-09",
  "tit": "Santa Catarina retira de escolas livros sobre regimes autoritários e nazismo; secretaria alega 'redistribuição'",
  "url": "https://www.cartacapital.com.br/educacao/santa-catarina-retira-de-escolas-livros-sobre-regimes-autoritarios-e-nazismo-secretaria-alega-redistribuicao/"
 },
 "gp-sc": {
  "veic": "Gazeta do Povo",
  "data": "2023-11-09",
  "tit": "Governo de SC retira livros de escolas públicas para 'adequar às faixas etárias'",
  "url": "https://www.gazetadopovo.com.br/vida-e-cidadania/governo-sc-retira-livros-escolas-publicas-adequar-faixas-etarias/"
 },
 "p360-sc": {
  "veic": "Poder360",
  "data": "2023-11-09",
  "tit": "Governo de SC manda retirar livros de ficção de escolas públicas",
  "url": "https://www.poder360.com.br/educacao/leia-lista-de-livros-que-o-governo-de-sc-proibe-em-escolas/"
 },
 "cnn-sc": {
  "veic": "CNN Brasil",
  "data": "2023-11",
  "tit": "Sem justificar, governo de SC retira 9 livros das escolas públicas",
  "url": "https://www.cnnbrasil.com.br/politica/sem-justificar-governo-de-sc-retira-9-livros-das-escolas-publicas/"
 },
 "gp-ro": {
  "veic": "Gazeta do Povo",
  "data": "2020-02-07",
  "tit": "Governo de Rondônia determina recolhimento de 43 livros das escolas, mas volta atrás",
  "url": "https://www.gazetadopovo.com.br/vida-e-cidadania/governo-de-rondonia-determina-recolhimento-43-livros-das-escolas-veja-lista/"
 },
 "pn-ro": {
  "veic": "PublishNews",
  "data": "2020-02-10",
  "tit": "Após tentativa de censura, governo de Rondônia recua",
  "url": "https://www.publishnews.com.br/materias/2020/02/10/apos-tentativa-de-censura-governo-de-rondonia-recua"
 },
 "publico-ro": {
  "veic": "Público (Portugal)",
  "data": "2020-02-09",
  "tit": "Machado de Assis, Rubem Fonseca e Franz Kafka censurados em estado brasileiro (que entretanto recua)",
  "url": "https://www.publico.pt/2020/02/09/culturaipsilon/noticia/machado-assis-rubem-fonseca-franz-kafka-censurados-estado-brasileiro-entretanto-recua-1903411"
 },
 "cc-ro": {
  "veic": "CartaCapital",
  "data": "2020-02-07",
  "tit": "Rondônia: relembre a história de cinco livros que o Estado quis vetar",
  "url": "https://www.cartacapital.com.br/educacao/rondonia-relembre-a-historia-de-cinco-livros-que-o-estado-quis-vetar/"
 },
 "em-palmares": {
  "veic": "Estado de Minas",
  "data": "2021-06-17",
  "tit": "Conselho de Biblioteconomia repudia retirada de livros da Fundação Palmares",
  "url": "https://www.em.com.br/app/noticia/nacional/2021/06/17/interna_nacional,1277740/conselho-de-biblioteconomia-repudia-retirada-de-livros-da-fundacao-palmares.shtml"
 },
 "gp-palmares": {
  "veic": "Gazeta do Povo",
  "data": "2022-01-15",
  "tit": "Justiça proíbe Fundação Palmares de doar livros sobre socialismo e comunismo do seu acervo",
  "url": "https://www.gazetadopovo.com.br/vida-e-cidadania/breves/justica-proibe-fundacao-palmares-doar-livros-socialismo-comunismo-acervo/"
 },
 "opovo-palm": {
  "veic": "O Povo",
  "data": "2021-08-04",
  "tit": "Presidente da Fundação Palmares cria 'acervo da vergonha' para livros",
  "url": "https://www.opovo.com.br/vidaearte/2021/08/04/presidente-da-fundacao-palmares-cria-acervo-da-vergonha-para-livros.html"
 },
 "pn-2025": {
  "veic": "PublishNews",
  "data": "2025-08-14",
  "tit": "Livros sobre cultura afro-brasileira e sexualidade são alvo de tentativas de censura no Brasil e no mundo",
  "url": "https://www.publishnews.com.br/materias/2025/08/14/livros-sobre-cultura-afro-brasileira-e-sexualidade-sao-alvo-de-tentativas-de-censura-no-brasil-e-no-mundo"
 },
 "paginas": {
  "veic": "Em Questão (pesquisa, UFRGS)",
  "data": "2024-09-26",
  "tit": "Páginas proibidas: censura de livros no Brasil · Viana, Muriel-Torrado e Prado",
  "url": "https://seer.ufrgs.br/index.php/EmQuestao/article/view/138667"
 },
 "reimao": {
  "veic": "Revista de Estudos Culturais (pesquisa, USP)",
  "data": "2022-12-02",
  "tit": "Dois casos de cerceamento à circulação de livros no Brasil em 2021 · Reimão, Nery e Maués",
  "url": "https://revistas.usp.br/revistaec/article/view/195152"
 },
 "gc": {
  "veic": "Gênio Criador",
  "data": "",
  "tit": "O avesso da liberdade: 10 livros que já foram censurados no Brasil e no mundo",
  "url": "https://www.geniocriador.com.br/blog-genio/273-o-avesso-da-liberdade-10-livros-que-ja-foram-censurados-no-brasil-e-no-mundo"
 },
 "estudo-ro": {
  "veic": "Interfaces (artigo acadêmico)",
  "data": "2024",
  "tit": "A contradição de discurso sobre cerceamento do texto literário nas escolas estaduais de Rondônia",
  "url": "https://revistas.unicentro.br/index.php/revista_interfaces/article/viewFile/7833/5778"
 },
 "folha-sc": {
  "veic": "Folha de S.Paulo",
  "data": "2023-11-08",
  "tit": "Governo de SC manda recolher livros de escolas públicas",
  "url": "https://www1.folha.uol.com.br/amp/cotidiano/2023/11/governo-de-sc-manda-recolher-livros-de-escolas-publicas.shtml"
 },
 "doe-waldemar-2023": {"veic":"Diário Oficial do Estado de Santa Catarina","data":"2023-02-10","tit":"Ato nº 638/2023 · designação de Waldemar Ronssem Júnior como Supervisor Regional de Educação da CRE de Florianópolis","url":"https://portal.doe.sea.sc.gov.br/repositorio/2023/20230210/Jornal/21959.pdf"},
 "doe-anelise-2023": {"veic":"Diário Oficial do Estado de Santa Catarina","data":"2023-08-16","tit":"Ato nº 2638/2023 · designação de Anelise dos Santos de Medeiros como Integrador Regional de Educação da CRE de Florianópolis","url":"https://portal.doe.sea.sc.gov.br/repositorio/2023/20230816/Jornal/22083.pdf"},
 "cc-ms-avesso": {
  "veic": "CartaCapital",
  "data": "2024-03-07",
  "tit": "Mato Grosso do Sul é o 3º estado que determina retirada de O Avesso da Pele das escolas",
  "url": "https://www.cartacapital.com.br/cartaexpressa/mato-grosso-do-sul-e-o-3o-estado-que-determina-retirada-de-o-avesso-da-pele-das-escolas/"
 }
};

/* taxonomias completas; inclui as categorias em zero, de propósito */
/* Três eixos independentes. MODALIDADES é o mecanismo: o que a medida pretendia fazer com o livro. */
const MODALIDADES = ["Retirada","Ocultação ou restrição de acesso","Exclusão de lista de leitura","Veto a atividade",
  "Veto a aquisição ou doação","Descarte ou destruição","Autocensura"];
/* Até onde o episódio chegou, do mais leve ao mais grave. */
const ESTAGIOS = ["Pressão pública","Pedido formal","Decisão ou ordem","Execução comprovada"];
/* Situação atual da medida. O detalhe fica no campo desfecho. */
/* Níveis de verificação, do mais forte ao mais fraco. "Em apuração" fica só na triagem e nunca é publicado. */
const NIVEIS = ["Documentado","Confirmado","Parcial"];
/* Quem reverteu a medida (ATOS[x].reversao.via). A reversão da decisão não prova a devolução física dos exemplares. */
const VIAS_REVERSAO = ["Recuo da administração","Decisão judicial"];
/* Eleições usadas na análise de calendário (1º turno). */
const ELEICOES = {geral:["2018-10-07","2022-10-02","2026-10-04","2030-10-06"], municipal:["2016-10-02","2020-11-15","2024-10-06","2028-10-01"]};
/* Como a obra chegou ao leitor, segundo as fontes do caso. "Escolha de professores" cobre lista de leitura,
   banca de vestibular, clube ou atividade definidos por educadores. Sem fonte, fica "Acervo, origem não informada". */
const CHEGADAS = ["Programa federal (PNLD)","Compra da própria rede","Escolha de professores","Doação ou origem externa","Acervo, origem não informada"];
const SITUACOES = ["Em vigor","Revertido","Sem efeito","Em aberto"];
const EIXOS = ["Cultura afro-brasileira","Sexualidade e gênero","Sobrenatural e mágico",
  "Política e ideologia","Religião","Linguagem e palavrão","Violência","Outro"];
/* data da última revisão do catálogo (AAAA-MM-DD); aparece no rodapé */

/* Lacunas: o que falta apurar em cada ato com pendência, o tipo de obstáculo e o caminho para fechar.
   Obstáculos vêm da lista fechada OBSTACULOS. O gerador recusa ato com pendência e sem lacuna cadastrada. */
const OBSTACULOS = ["Fonte única","Documento interno não publicado","Sigilo judicial","Cumprimento não confirmado","Lista de títulos incompleta","Responsável não identificado","Divergência entre fontes"];
const LACUNAS = {
 "MEC-2017":{"obstaculos": ["Documento interno não publicado", "Cumprimento não confirmado"], "caminho": "Buscar o parecer da Secretaria de Educação Básica e o ato do ministro no Diário Oficial da União e nas notas do MEC de junho de 2017; procurar balanço posterior do recolhimento em respostas do MEC a jornalistas ou ao Congresso."},
 "ARQ-2017":{"obstaculos": ["Lista de títulos incompleta", "Cumprimento não confirmado"], "caminho": "Consultar a ação civil pública 1513-61.2017.4.01.4100 no sistema público da Justiça Federal e o recurso no TRF1, onde a petição dos Ministérios Públicos deve listar os livros; a representação da Procuradoria Federal dos Direitos do Cidadão está no site do MPF, mas o endereço é longo demais para leitura automática."},
 "SA-2018":{"obstaculos": ["Documento interno não publicado", "Cumprimento não confirmado"], "caminho": "Procurar no acervo do Globo a reportagem de 2 de outubro de 2018; conferir as listas de leitura do 6º ano do colégio publicadas a partir de 2019."},
 "REC-2016":{"obstaculos": ["Fonte única", "Documento interno não publicado"], "caminho": "Consultar no sistema público da Câmara do Recife a tramitação do Projeto de Lei nº 26/2016 e os requerimentos de Luiz Eustáquio de 2016; procurar cobertura do Diario de Pernambuco e do Jornal do Commercio."},
 "MS-2024":{obstaculos:["Cumprimento não confirmado"], caminho:"Pedido via Lei de Acesso à Informação à Secretaria de Estado de Educação de Mato Grosso do Sul sobre a devolução dos exemplares às escolas."},
 "SC-2023":{obstaculos:["Documento interno não publicado","Cumprimento não confirmado"], caminho:"Pedido via Lei de Acesso à Informação à Secretaria de Estado da Educação de Santa Catarina da íntegra e do número do ofício circular, da lista de escolas destinatárias e dos registros de execução e eventual devolução das nove obras."},
 "SC-2024":{obstaculos:["Fonte única","Documento interno não publicado"], caminho:"Pedido via Lei de Acesso à Informação à Secretaria de Estado da Educação de Santa Catarina do comunicado de revisão de acervo e da lista de unidades que receberam os exemplares."},
 "RO-2020":{obstaculos:["Documento interno não publicado"], caminho:"A cópia pública do Adendo já foi localizada e reconciliada. A busca em fontes abertas não encontrou a íntegra do processo SEI 0029.051300/2020-91, o resultado da sindicância ou a recomendação integral do MP-RO. Se esses documentos não estiverem publicamente disponíveis, manter a lacuna explicitada, sem presumir o conteúdo ou o desfecho."},
 "PALM-2021-06":{obstaculos:["Documento interno não publicado","Divergência entre fontes"], caminho:"Manter a divergência das versões do inventário explicitada; buscar em fontes públicas a relação individual dos 5.165 itens e documentos sobre sua destinação. Sem lista ou prova de destino, preservar a lacuna sem presumir descarte."},
 "PALM-2021-08":{obstaculos:["Documento interno não publicado","Lista de títulos incompleta"], caminho:"A dissertação de mestrado de Lucas dos Santos de Paulo (UnB, 2024), O acervo da vergonha: atos e intencionalidades na Fundação Cultural Palmares, dedica um capítulo ao caso e traz entrevistas com servidores; ela pode conter o inventário e a data de retorno à consulta. Pedido via Fala.BR à Fundação Cultural Palmares do inventário da seção separada e de registros sobre o acesso a esse acervo."},
 "MG-2024":{obstaculos:["Responsável não identificado"], caminho:"A nota de 19 de junho de 2024 e o comunicado de 20 de junho saem só em nome da Secretaria, sem assinatura individual. Pedido via Lei de Acesso à Informação à Prefeitura de Conselheiro Lafaiete do ato de suspensão; consulta processual ao Tribunal de Justiça de Minas Gerais sobre o trânsito em julgado."},
 "SJC-2024":{obstaculos:["Sigilo judicial","Cumprimento não confirmado"], caminho:"Pedido via Lei de Acesso à Informação à Prefeitura de São José dos Campos sobre a devolução dos exemplares às escolas. A sentença tramita em segredo de Justiça e fica fora do alcance desse caminho."},
 "UNIRV-2023":{obstaculos:["Responsável não identificado"], caminho:"Pedido via Lei de Acesso à Informação à Universidade de Rio Verde da ata ou do despacho que excluiu a obra da lista do vestibular."},
 "LON-2024":{obstaculos:["Documento interno não publicado","Cumprimento não confirmado"], caminho:"O Pedido de Informação nº 582/2024, da Comissão de Defesa dos Direitos do Nascituro, da Criança, do Adolescente e da Juventude (Jessicão, Mara Boca Aberta e Giovani Mattos), aprovado em 28/11/2024, foi localizado no informativo da Câmara; falta a resposta do Executivo, com prazo regimental de 15 dias úteis. Pedido via Lei de Acesso à Informação à Prefeitura de Londrina da resposta ao requerimento; consulta ao sistema da Câmara Municipal pelo texto do requerimento."},
 "DF-2026":{obstaculos:["Documento interno não publicado"], caminho:"Pedido via Lei de Acesso à Informação ao Governo do Distrito Federal, por meio do Corpo de Bombeiros Militar, que administra o colégio, da nota oficial integral."},
 "TAU-2025":{obstaculos:["Documento interno não publicado","Cumprimento não confirmado"], caminho:"Pedido via Lei de Acesso à Informação à Prefeitura de Taubaté do parecer técnico e da lista de escolas que receberam os exemplares; consulta à Câmara Municipal pelo requerimento."},
 "FUNAP-2020":{obstaculos:["Documento interno não publicado","Cumprimento não confirmado","Divergência entre fontes"], caminho:"Pedido via Lei de Acesso à Informação à Funap, do governo de São Paulo, da mensagem de 3 de dezembro de 2019, da ata de 13 de fevereiro de 2020 e do registro de envio dos exemplares às unidades."},
 "LON-2026":{"obstaculos": ["Documento interno não publicado", "Responsável não identificado", "Cumprimento não confirmado"], "caminho": "O relatório do OGPL registra 15 processos Pedido de Providências públicos e 19.588 restritos após 18/02/2025, embora a Portaria SMGP-GAB nº 28/2020 preveja publicidade como regra. O processo específico não foi identificado nas fontes públicas consultadas; não se presume que esteja aberto nem se afirma que tenha sido protocolado pedido de acesso."},
 "CAN-2024":{"obstaculos": ["Documento interno não publicado", "Cumprimento não confirmado"], "caminho": "O TCE-SC publicou a decisão e o Relatório DGE-328/2024, mas levantou o sigilo apenas desses dois documentos; a resposta da prefeita e as fotos das fls. 14–32 ficaram fora da parte pública. A decisão confirma que os livros foram entregues à Fundação Cultural para análise e não foram descartados. A pendência é o inventário/movimentação posterior e o resultado do MPSC."},
 "FOZ-2025":{"obstaculos": ["Documento interno não publicado", "Cumprimento não confirmado"], "caminho": "A íntegra do Memorando nº 40218/2025 e da liminar, e o ato de 2026 que deixou de enviar o material às escolas. O relatório final da CPI da Câmara de Foz do Iguaçu, se publicado, deve trazer esses documentos."}
};

const ATUALIZADO = "2026-11-06";
/* DOI da base no Zenodo (arquivada a cada versão publicada no GitHub). */
const DOI = "10.5281/zenodo.24022607";

/* contato institucional exibido na página Sobre. Vazio, a linha não aparece. */
const CONTATO = { email: "", instagram: "natalyxnunes" };

/* links dos três formulários de relato (Tally ou Google Forms).
   Enquanto um link estiver vazio, o botão dele não aparece. */
const FORMULARIOS = {
  profissional: "",   // quem trabalha em biblioteca ou escola
  leitor: "",         // estudante, família ou leitor
  imprensa: "",       // jornalista, pesquisador ou organização
};
/* posição aproximada de cada UF no mapa esquemático do painel (x,y numa caixa 200x210) */
const MAPA_UF = {RR:[78,20],AP:[118,22],AM:[56,52],PA:[112,52],MA:[146,52],CE:[166,56],RN:[180,60],PB:[180,68],PE:[174,76],AL:[178,84],SE:[172,90],PI:[152,66],AC:[24,84],RO:[62,86],TO:[124,82],BA:[150,100],MT:[86,96],GO:[112,112],DF:[118,104],MG:[136,122],ES:[160,124],RJ:[148,140],SP:[124,140],MS:[92,130],PR:[110,152],SC:[114,166],RS:[100,184]};

/* Fora do escopo do catálogo (não é acervo de biblioteca), mas no mesmo período.
   Entram como contexto na linha do tempo, sem contar nos números. */
const CONTEXTO = [
 {data:"2019-09-05", uf:"RJ", titulo:"Bienal do Livro do Rio", governo:"Marcelo Crivella (Republicanos) · prefeitura do Rio",
  texto:"O prefeito mandou recolher a HQ Vingadores: a cruzada das crianças, que mostra um beijo entre dois heróis, e fiscais foram à Bienal. O presidente do TJ-RJ autorizou apreensões de livros com temática LGBT; no dia seguinte, o presidente do STF, Dias Toffoli, derrubou a decisão.",
  fontes:["bdf-bienal"]},
 {data:"2019-09-03", uf:"SP", titulo:"Apostilas de ciências do 8º ano", governo:"João Doria (PSDB) · governo de SP",
  texto:"O governador mandou recolher a apostila oficial de ciências por uma página sobre sexo biológico, identidade de gênero e orientação sexual, dizendo não aceitar “apologia à ideologia de gênero”. Uma juíza mandou devolver o material em 48 horas e proibiu a destruição.",
  fontes:["bdf-doria","met-doria"]},
 {data:"2021-01-26", uf:"DF", titulo:"Lista de autoras retirada do site da Apex", governo:"Jair Bolsonaro (sem partido) · governo federal",
  texto:"A agência federal de exportações tirou do ar uma lista de seis livros de autoras brasileiras, encomendada pela Câmara Brasileira do Livro. Três das autoras criticavam o governo. A Apex não explicou o motivo.",
  fontes:["mobile-apex"]},
];

/* Registro público de correções. Toda mudança de fato num caso entra aqui. */
const CORRECOES = [
 {"data": "2026-11-07", "id": "EL-039, EL-040, EL-043, Normas, Mundo", "texto": "Escolas privadas passaram a entrar na contagem, com rede própria; o caso do Colégio Santo Agostinho (2018) saiu do contexto e virou o registro EL-043. Ariquemes passou a execução comprovada e revertida: a entrega dos livros foi suspensa e o TRF1 derrubou a medida em agosto de 2017. O recolhimento de Enquanto o sono não vem ganhou duas fontes independentes e a confirmação do programa (acervo do Pnaic). A página Normas ganhou sete leis de 2015 e 2016, seis delas derrubadas pelo STF. A página Mundo ganhou critério de seleção, e o caso de Cuba (2003) foi para a página História por ser anterior ao recorte."},
 {"data": "2026-11-06", "id": "EL-040, EL-042, Normas e escala", "texto": "Confirmados o partido do prefeito de Ariquemes em 2017 (PMDB, hoje MDB) e o prefeito de Guarulhos em 2015 (Sebastião Almeida, PT). Recife ganhou a reportagem do Brasil de Fato, que repete os dados da Agência Brasil, e segue parcial. Entraram as leis de Volta Redonda (2015), Paranaguá (2015) e Nova Iguaçu (2016) na página Normas. PSB e Rede passaram a usar o escore de 2022 da classificação de especialistas (3,70 e 3,80); Rede passou de centro para centro-esquerda."},
 {"data": "2026-11-06", "id": "Recorte", "texto": "O início da contagem passou de 2019 para 2014, marco temático justificado na Metodologia. Entraram quatro registros de 2015 a 2017 (Guarulhos, Recife, Ariquemes e o recolhimento nacional de Enquanto o sono não vem) e um episódio de contexto em escola privada (Rio, 2018). A página Análises ganhou um teste que compara os resultados com o recorte antigo."},
 {"data": "2026-11-06", "id": "Candidaturas", "texto": "Fechadas as lacunas eleitorais: Clayton Silva disputou a prefeitura de Limeira em 2020 (1.475 votos); Eduardo Riedel foi reeleito governador em 2026; Mara Boca Aberta, Giovani Mattos e Pastora Zelinda disputaram 2026 e não se elegeram."},
 {"data": "2026-11-06", "id": "Normas e candidaturas", "texto": "Registrados o partido dos autores de três normas (Novo em Sinop, MDB em Mato Grosso e PL na emenda de Santa Catarina) e a eleição seguinte de quem pressionou ou decidiu nos casos, com votos e fonte."},
 {"data": "2026-11-06", "id": "EL-030", "texto": "Londrina, 2024: localizado o Pedido de Informação nº 582/2024, aprovado em 28/11/2024 e assinado pela Comissão de Defesa dos Direitos do Nascituro (Jessicão, Mara Boca Aberta e Giovani Mattos), que pergunta sobre A mamãe vai ter um bebê, encontrado no CMEI Sandra Regina Maximiano Leme."},
 {"data": "2026-11-06", "id": "EL-004, EL-015 a EL-024, EL-027", "texto": "Garimpo de documentos: Rondônia ganha a entrevista em que o secretário chamou o memorando de \"fake\" no dia em que circulou; MS ganha segunda fonte confirmando que, em 24/04/2024, a devolução ainda estava em processo; Conselheiro Lafaiete ganha a nota de 19/06/2024, que, como o comunicado de 20/06, não traz assinatura individual."},
 {"data": "2026-11-06", "id": "EL-038", "texto": "Incluído o recolhimento de cerca de 7 mil exemplares de English After School, material de inglês da rede municipal de Foz do Iguaçu (PR), em junho de 2025, revertido por liminar em julho e, segundo a própria Secretaria, novamente retido em 2026."},
 {"data": "2026-11-06", "id": "EL-035 a EL-037", "texto": "Incorporados três registros apurados na linha de auditoria (PR #5): o recolhimento para análise de O bebê vem com a cegonha?!? na rede municipal de Londrina, em março de 2026 (EL-035, parcialmente verificado), e a retirada de Aparelho Sexual e Cia. e As melhores do Analista de Bagé da biblioteca Mundoteca, em Canoinhas (SC), em abril de 2024 (EL-036 e EL-037). Os livros de Canoinhas não foram descartados, segundo o TCE-SC; a destinação posterior não foi comprovada."},
 {data:"2026-11-06", id:"Painel", texto:"Corrigidas quatro afirmações da página inicial: dois atos (Rondônia, 2020, e Santa Catarina, 2023), e não três, respondem por mais da metade dos registros; descarte ou destruição tem um registro, e não zero; a lista de Rondônia já está reconciliada; e Os Sertões da Luta voltou à prateleira de destaques, de onde havia saído quando o título foi corrigido."},
 {data:"2026-11-06", id:"EL-030", texto:"Londrina: confirmada, por nota da Secretaria reproduzida pela RIC e pela Tarobá, a retirada do exemplar encontrado em um CMEI; não há prova de recolhimento em outras unidades. Removida da lista de fontes uma reportagem da Folha de Londrina que tratava de outro livro e de outro episódio, de março de 2026. Registrado que o PL 79/2024 foi protocolado em abril de 2024, antes do caso."},
 {data:"2026-11-06", id:"EL-028", texto:"São José dos Campos: registrada a sentença de mérito de 20/07/2026, que determinou a restituição da obra às salas de leitura; o cumprimento da ordem não foi confirmado."},
 {data:"2026-11-06", id:"EL-027", texto:"Conselheiro Lafaiete: registrada a sentença de mérito de 02/12/2024, que anulou o ato da Secretaria e confirmou a tutela antecipada. A cópia pública consultada não traz certidão de trânsito em julgado; a ficha deixou de chamar a decisão de definitiva."},
 {data:"2026-11-06", id:"EL-025", texto:"Fundação Palmares: o total de 9.565 itens foi confirmado pelo Relatório de Gestão 2021 da própria fundação (8.035 títulos e 1.530 folders e catálogos); o número 9.546 é divergência de reportagem. O link do relatório Retrato do Acervo, cujo domínio original saiu do ar, passou a apontar para a cópia do mesmo endereço preservada pelo Internet Archive."},
 {data:"2026-11-06", id:"EL-017, EL-022 e EL-024", texto:"Rondônia: reconciliada a lista do Adendo 10053329 a partir de cópia pública do documento. São 43 linhas e 42 títulos distintos, porque O Seminarista aparece duas vezes. O título de EL-017 foi corrigido para Os Sertões da Luta, como consta na relação."},
 {data:"2026-11-06", id:"EL-006 a EL-014", texto:"Santa Catarina, 2023: a coordenadoria que expediu o ofício foi identificada como a Coordenadoria Regional de Educação de Florianópolis, por atos de designação dos dois signatários publicados no Diário Oficial do Estado."},
 {data:"2026-11-06", id:"EL-005", texto:"Santa Catarina, 2024: localizado documento oficial (Informação nº 304/2024/SED/DIEN, enviada à Alesc) em que a Secretaria afirma ter orientado as escolas a recolher a obra para análise. Substitui a nota de 30/10 sobre fonte única; o que falta agora é comprovar a execução e o destino dos exemplares."},
 {data:"2026-10-30", id:"EL-028", texto:"São José dos Campos: acrescentada a fase de 2024, com liminar que determinava a redistribuição da obra suspensa pelo TJSP em outubro de 2024, e o anúncio de recurso do vereador contra a sentença de julho de 2026."},
 {data:"2026-10-30", id:"EL-033", texto:"Funap: acrescentado artigo de 2022 segundo o qual os livros ainda aguardavam liberação quando o texto foi escrito, e registrada a divergência entre 240 e 228 exemplares."},
 {data:"2026-10-30", id:"EL-005", texto:"Santa Catarina: registrado que a única fonte é nota do governo estadual à Gazeta do Povo; nova busca não encontrou segunda fonte. O caso segue parcialmente verificado."},
 {data:"2026-10-30", id:"EL-005", texto:"A ficha atribuía a decisão à Secretaria de Educação de Mato Grosso do Sul. O caso é de Santa Catarina: a decisão é da Secretaria de Estado da Educação de Santa Catarina."},
 {data:"2026-10-30", id:"EL-025 e EL-026", texto:"Os dois registros da Fundação Palmares passam a constar como atos distintos: o anúncio de descarte de junho de 2021 e o anúncio do “Acervo da Vergonha” de agosto de 2021."},
 {data:"2026-10-30", id:"Base de dados", texto:"A base passa a ter quatro entidades ligadas: obras, atos, agentes e registros. Dados do ato (órgão, governo, documento, papéis) e da obra (autoria, editora, capa) deixam de ser repetidos em cada título, e cada ato ganha página própria."},
 {data:"2026-10-29", id:"Classificação", texto:"As 18 modalidades foram substituídas por três eixos com listas fechadas: mecanismo, estágio e situação. Os 34 registros foram reclassificados. Rondônia 2020 (EL-015 a EL-024) deixa de constar como “contestação sem efeito” e passa a retirada, no estágio de decisão ou ordem, revertida: houve memorando oficial, e o MPF registrou que exemplares chegaram a ser recolhidos e foram devolvidos."},
 {data:"2026-10-29", id:"O avesso da pele", texto:"O livro venceu o Prêmio Jabuti 2021 na categoria Romance Literário. A ficha dizia “Livro do Ano”, prêmio que naquela edição foi para Sagatrissuinorana."},
 {data:"2026-10-29", id:"EL-030, EL-031 e EL-034", texto:"Os registros passam a apontar para as obras (A mamãe vai ter um bebê e A bolsa amarela), e A bolsa amarela reúne as duas ocorrências numa só ficha."},
 {data:"2026-10-29", id:"Mundo", texto:"Retirado o gráfico que distribuía os atos brasileiros pelo partido do chefe do Executivo. Ele atribuía a partidos atos que os próprios governos desautorizaram e misturava casos sem partido identificado."},
 {data:"2026-10-27", id:"EL-004", texto:"O avesso da pele no MS: o desfecho passou de Retirado para Revertido. A Secretaria de Educação anunciou a devolução às bibliotecas em 23 de abril de 2024."},
 {data:"2026-10-27", id:"EL-027", texto:"O menino marrom em MG: o desfecho passou de Retirado para Revertido. Em 27 de junho de 2024, a 1ª Vara Cível de Conselheiro Lafaiete concedeu liminar determinando o cancelamento imediato da suspensão temporária das atividades pedagógicas. A ordem partiu da prefeitura, depois de manifestações de pais, familiares e autoridades locais."},
 {data:"2026-10-27", id:"EL-028", texto:"Meninas sonhadoras, mulheres cientistas: o local passou de biblioteca pública para salas de leitura das escolas municipais; a data, de 2024 para junho de 2024; a alegação, de “não declarada” para a acusação do vereador. Acrescentada a sentença de julho de 2026."},
 {data:"2026-10-27", id:"EL-001", texto:"Santa Cruz do Sul: quem mandou recolher foi a 6ª Coordenadoria Regional de Educação, para 18 municípios, e a Secretaria estadual desautorizou no mesmo dia. O texto anterior dizia “Corregedoria” e atribuía a ordem à direção da escola."},
 {data:"2026-10-27", id:"EL-002", texto:"Paraná: o ofício citou expressões e cenas de sexo “inadequadas para menores de dezoito anos”; o texto anterior dizia que não havia motivo de conteúdo. Retirado o número de 2.000 exemplares, que não aparece nas fontes."},
 {data:"2026-10-27", id:"EL-005", texto:"Rebaixado para parcialmente verificado: fonte única."},
 {data:"2026-10-27", id:"EL-015", texto:"Rondônia (EL-015 a EL-024): o memorando foi assinado pela diretora geral de educação, Irany Morais, em nome do secretário."},
 {data:"2026-10-27", id:"EL-025", texto:"Palmares: o que está documentado é uma liminar da 2ª Vara Federal de São Gonçalo, de junho de 2021. Retirada a expressão “decisão definitiva”."},
 {data:"2026-10-27", id:"EL-029", texto:"UniRV: data do ato precisada para 26 de abril de 2023, rede corrigida para municipal e fonte de blog substituída por reportagens."},
  {data:"2026-10-28", id:"EL-015 a EL-024", texto:"Rondônia: incorporado o resultado oficial do inquérito civil do MPF, publicado em 30/08/2021. A solicitação verbal foi suspensa no mesmo dia, exemplares recolhidos foram devolvidos, a Seduc abriu sindicância, o MP-RO emitiu recomendação acatada e o arquivamento do inquérito foi homologado."},
  {data:"2026-10-28", id:"EL-032", texto:"Taubaté: incorporada a informação de 14/07/2026 de que, após análise técnica, a prefeitura anunciou a retomada do uso de Pipoca e Picolé nas turmas consideradas adequadas. A devolução efetiva dos exemplares às escolas ainda não está comprovada."},
  {data:"2026-10-28", id:"EL-028", texto:"São José dos Campos: decisão de 20/07/2026 descrita com maior precisão; prazo de cinco dias após intimação para restituição, Vara da Infância e Juventude e ausência de confirmação pública do cumprimento."},
  {data:"2026-10-28", id:"EL-033", texto:"Funap/Remição em Rede: incorporadas as duas reportagens contemporâneas da Folha. A lista de 12 títulos foi publicada integralmente; a decisão de riscar a lista é atribuída por Janine Durand ao diretor-executivo Henrique Pereira de Souza Neto; Reginaldo Caetano da Silva enviou a mensagem de 03/12/2019 sobre um título. A Funap determinou a inclusão da lista em 13/02/2020. A distribuição posterior dos 240 exemplares permanece sem comprovação."},
  {data:"2026-10-28", id:"EL-029", texto:"UniRV: incorporada a nota oficial da universidade, que atribui a exclusão do livro à Coordenação do Vestibular; corrigido o título da obra para Eu receberia as piores notícias de seus lindos lábios."},
 {data:"2026-10-27", id:"EL-006", texto:"Santa Catarina 2023 (EL-006 a EL-014): coordenadoria regional não identificada nas fontes; quem acionou o MP foi um suplente de vereador; grafia Ronssem."},
 {data:"2026-10-27", id:"Painel", texto:"Retirada a atribuição de uma “hipótese” sobre temas censurados à pesquisadora Sandra Reimão, que não a formulou, e a referência a relatos da FEBAB de 2020, que não existem nesse formato. Corrigida a contagem de estados (eram oito e o DF)."},
 {data:"2026-10-28", id:"Responsabilização", texto:"As fichas passaram a distinguir pressão/pedido, decisão, assinatura, execução, fiscalização e resposta/reversão. Os nomes são apresentados conforme as fontes já cadastradas; quando a pessoa responsável não está identificada, a lacuna permanece explícita."},
 {data:"2026-10-28", id:"EL-015 a EL-024", texto:"Rondônia 2020: corrigida a atribuição da assinatura. O fecho do Memorando-Circular nº 4/2020/SEDUC-DGE traz o nome do secretário Suamy Vivecananda; o registro eletrônico identifica Irany de Oliveira Lima Morais como signatária digital. A ficha passa a registrar a negativa da Seduc, a apuração preliminar do MPF e a execução não comprovada em toda a rede. Verificação rebaixada para parcial."},
 {data:"2026-10-28", id:"EL-006 a EL-014", texto:"Santa Catarina 2023: acrescentada a reportagem da Folha que confirma a orientação de armazenar as nove obras em local inacessível, identifica os dois signatários e registra que o ofício não apresentou justificativa; a explicação posterior do governo foi redistribuição por faixa etária."},
 {data:"2026-10-28", id:"EL-004", texto:"Mato Grosso do Sul 2024: acrescentada a confirmação da Secretaria à CartaCapital de que o recolhimento atendia a determinação do governador Eduardo Riedel, após análise da pasta."},
 {data:"2026-10-28", id:"EL-025 e EL-026", texto:"Fundação Palmares: corrigida a unidade de contagem do anúncio de 2021 — 5.165 exemplares, não 5.165 títulos — e separado o anúncio de descarte da tentativa posterior de doar cerca de 300 livros e da segregação anunciada como “Acervo da Vergonha”."},
 {data:"2026-10-28", id:"EL-027", texto:"Conselheiro Lafaiete: a documentação oficial confirma suspensão temporária de trabalhos pedagógicos, não retirada total comprovada dos exemplares. Acrescentados comunicado da Secretaria e cópia da decisão judicial que anulou o ato."},
 {data:"2026-10-28", id:"EL-028", texto:"São José dos Campos: acrescentada a apuração judicial divulgada em julho de 2026, com ordem transmitida por WhatsApp, ausência de justificativa técnico-pedagógica contemporânea e determinação de devolução. A sentença integral está sob segredo de Justiça."},
 {data:"2026-10-28", id:"EL-031", texto:"Distrito Federal: reclassificado. A apuração da piauí informa que não houve adoção de A bolsa amarela nem retirada de exemplares; o episódio envolveu link para resenha em atividade de interpretação."},
 {data:"2026-10-28", id:"EL-033", texto:"Funap: corrigida a data para fevereiro de 2020, identificado o diretor-executivo Henrique Pereira de Souza Neto na reunião posterior e registrado o recuo após repercussão pública."},
 {data:"2026-10-28", id:"EL-034", texto:"Limeira: corrigida a classificação após leitura do requerimento e da resposta oficiais. Clayton Silva pediu informações e questionou a temática; não pediu formalmente a retirada. A Secretaria defendeu o livro e seu uso pedagógico."},
 {data:"2026-10-28", id:"EL-030", texto:"Londrina: separado o pedido parlamentar de recolhimento, ainda sem execução comprovada, da Lei Municipal nº 13.930/2025, originada do PL 79/2024. Acrescentada a publicação no Jornal Oficial do Município."},
 {data:"2026-10-28", id:"EL-002", texto:"Paraná: corrigida a descrição dos expedientes. Anderfábio Oliveira dos Santos assinou o ofício da Secretaria; Laura Patrícia Lopes assinou ofício de teor semelhante do Núcleo Regional de Educação de Curitiba. Não eram coassinantes do mesmo documento."},
];



/* ---------- NORMAS ----------
   Trilha de normas: leis, projetos e emendas que restringem livros ou material de leitura em escolas e bibliotecas.
   Levantamento inicial, não exaustivo. "situacao" vale na data de "situacaoEm", segundo a fonte mais recente.
   "citaLivro": título citado na justificativa. "precedente": norma citada como modelo. "ato": caso do catálogo ligado. */
/* frente: a onda legislativa da norma. alvo: "Material" quando o texto mira livros ou material didático;
   "Currículo" quando mira o ensino, o plano de educação ou as diretrizes, sem citar material. */
const FRENTES_NORMA = ["Conteúdo erótico","Ideologia de gênero"], ALVOS_NORMA = ["Material","Currículo"];
const SITUACOES_NORMA = ["Em vigor","Aprovada, sanção a confirmar","Em tramitação","Situação não confirmada","Derrubada na Justiça","Arquivada"];
const NORMAS = [
 {id:"N-01", frente:"Conteúdo erótico", alvo:"Material", esfera:"Municipal", uf:"PR", cidade:"Londrina", tipo:"Lei", numero:"Lei nº 13.930/2025 (PL 79/2024)", data:"2025-03-21", autoria:"Jéssica Ramos Moreno", partido:"PP",
  resumo:"Proíbe livros com conteúdo erótico nas escolas municipais.", situacao:"Em vigor", situacaoEm:"2025-03-21", ato:"LON-2024",
  nota:"Protocolada em abril de 2024 e sancionada em março de 2025. Em novembro de 2024, durante a tramitação, a mesma vereadora encontrou A mamãe vai ter um bebê em um CMEI e pediu o recolhimento (EL-030). A lei é citada como precedente no projeto de Cuiabá.", fontes:["pl79-londrina","lei-londrina-13930"]},
 {id:"N-02", frente:"Conteúdo erótico", alvo:"Material", esfera:"Municipal", uf:"MT", cidade:"Sinop", tipo:"Lei", numero:"Lei nº 3.499/2025", data:"2025-07-07", autoria:"Hedvaldo Costa", partido:"Novo", partidoNota:"Eleito vereador em 2024 como Prof Hedvaldo, número de urna 30123; o prefixo 30 é o do Novo.",
  resumo:"Proíbe o uso e a distribuição de livros e materiais com conteúdo erótico nas escolas municipais; mantém o conteúdo científico sobre reprodução humana adequado à idade. Não prevê fiscalização nem penalidade.", situacao:"Em vigor", situacaoEm:"2025-07-07",
  nota:"Sancionada pelo prefeito Roberto Dorner na semana anterior a 7 de julho de 2025. A data exata da sanção não está na fonte; a data registrada é a da notícia.", fontes:["sinop-lei-3499","otempo-sinop-2024"]},
 {id:"N-03", frente:"Conteúdo erótico", alvo:"Material", esfera:"Municipal", uf:"MT", cidade:"Cuiabá", tipo:"Lei", numero:"Lei nº 7.371/2025", data:"2025-04-03", autoria:"Rafael Ranalli", partido:"PL",
  resumo:"Proíbe o uso e a distribuição, em qualquer formato, de livros com conteúdo erótico nas escolas municipais, com definição ampla que inclui cenas implícitas e palavrões.", situacao:"Em vigor", situacaoEm:"2025-10-21", precedente:"N-01",
  nota:"Aprovado em segunda votação com 22 votos. A justificativa cita a Lei nº 13.930/2025, de Londrina, como precedente. O prefeito Abilio Brunini (PL) sancionou o texto em 21 de outubro de 2025, e a norma foi publicada como Lei nº 7.371. A data registrada no campo principal é a do protocolo do projeto.", fontes:["cuiaba-pl-ranalli","pnc-cuiaba-set","pnc-cuiaba-out","pnc-cuiaba-lei","metropoles-cuiaba-lei"]},
 {id:"N-04", frente:"Conteúdo erótico", alvo:"Material", esfera:"Estadual", uf:"AM", cidade:"", tipo:"Projeto de lei", numero:"PL nº 154/2024", data:"2024-03-11", autoria:"Débora Menezes", partido:"PL",
  resumo:"Veda conteúdo erótico, pornográfico e obsceno em escolas públicas e privadas, inclusive em material didático e paradidático, com multa de 1 a 10 salários mínimos.", situacao:"Situação não confirmada", situacaoEm:"2024-03-11", citaLivro:"O avesso da pele",
  nota:"Apresentado na semana em que O avesso da pele foi recolhido no Paraná e em Goiás. A justificativa cita o livro como motivação. O texto é quase idêntico ao do PL 1768/2024 (MT) e ao do projeto da Serra (ES). Busca em fontes abertas feita em 6 de novembro de 2026 não localizou votação, arquivamento nem lei resultante.", fontes:["aleam-pl154"]},
 {id:"N-05", frente:"Conteúdo erótico", alvo:"Material", esfera:"Estadual", uf:"MT", cidade:"", tipo:"Projeto de lei", numero:"PL nº 1768/2024", data:"2024-10-30", autoria:"Thiago Silva", partido:"MDB", partidoNota:"Eleito deputado estadual pelo MDB em 2022.",
  resumo:"Proíbe conteúdo erótico, pornográfico e obsceno em escolas públicas e privadas, incluindo material didático, paradidático e cartilhas; fiscalização pela Secretaria de Educação com a Segurança Pública.", situacao:"Situação não confirmada", situacaoEm:"2024-10-30", citaLivro:"O avesso da pele",
  nota:"A justificativa cita O avesso da pele como exemplo. Texto quase idêntico ao do PL 154/2024 (AM). Busca em fontes abertas feita em 6 de novembro de 2026 não localizou votação, arquivamento nem lei resultante.", fontes:["almt-pl1768","cf-thiago-silva-2022"]},
 {id:"N-06", frente:"Conteúdo erótico", alvo:"Material", esfera:"Municipal", uf:"ES", cidade:"Serra", tipo:"Projeto de lei", numero:"Projeto de lei de 2025 (número em branco no protocolo)", data:"2025-01-27", autoria:"Pastor Dinho Souza", partido:"PL",
  resumo:"Veda conteúdo erótico, pornográfico e obsceno em escolas municipais e privadas, inclusive em material didático e paradidático; trata a violação por servidor como falta grave e prevê multa de 1 a 10 salários mínimos para instituições privadas.", situacao:"Situação não confirmada", situacaoEm:"2025-01-27",
  nota:"Mesma estrutura e mesmas expressões dos projetos do Amazonas e de Mato Grosso, com a punição a servidores acrescentada. Busca em fontes abertas feita em 6 de novembro de 2026 não localizou votação, arquivamento nem lei resultante.", fontes:["serra-pl-2025"]},
 {id:"N-07", frente:"Conteúdo erótico", alvo:"Material", esfera:"Estadual", uf:"SC", cidade:"", tipo:"Emenda", numero:"Emenda modificativa ao PL nº 0018/2025", data:"2025-03-06", autoria:"Ana Campagnolo", partido:"PL",
  resumo:"Proíbe, sem exceção, o incentivo à leitura de obras obscenas, pornográficas ou que façam apologia a drogas e violência, e exige que as obras recomendadas pelo programa sejam submetidas à aprovação prévia de pais ou responsáveis.", situacao:"Situação não confirmada", situacaoEm:"2025-03-06",
  nota:"Emenda a projeto de programa de leitura. A aprovação prévia das famílias desloca a escolha do livro do educador para a família. O nome do programa não aparece no documento da emenda. O PL 18/2025, de Paulinha (Podemos), que cria o Programa de Incentivo à Leitura nas escolas estaduais, foi aprovado em plenário em 25 de fevereiro de 2026 e seguiu para sanção. As notícias da aprovação não dizem se a emenda entrou no texto final; isso só se confirma na redação final ou na lei publicada.", fontes:["alesc-emenda-pl18","upiara-pl18","gp-campagnolo-pl"]},
 {id:"N-08", frente:"Conteúdo erótico", alvo:"Material", esfera:"Federal", uf:"BR", cidade:"", tipo:"Projeto de lei", numero:"PL nº 10583/2018", data:"2025-08-21", autoria:"Mariana Carvalho, autora; Nikolas Ferreira, relator do substitutivo", partido:"PL",
  resumo:"Veda materiais escolares, livros, imagens e recursos audiovisuais com conteúdo erótico, pornográfico ou obsceno inadequado à idade e altera a LDB para exigir consentimento dos responsáveis em conteúdos sobre sexualidade e identidade de gênero.", situacao:"Em tramitação", situacaoEm:"2025-08-21",
  partidoNota:"PL é o partido do relator do substitutivo, Nikolas Ferreira. A autora, Mariana Carvalho, apresentou o projeto em 2018 pelo PSDB.", nota:"Substitutivo aprovado na Comissão de Educação da Câmara em agosto de 2025, depois da Comissão de Previdência, Assistência Social, Infância, Adolescência e Família. Segue para a Comissão de Constituição e Justiça e para o Plenário. A data registrada é a da aprovação na comissão.", fontes:["camara-pl10583"]},
 {"id": "N-12", "frente": "Ideologia de gênero", "alvo": "Currículo", "esfera": "Municipal", "uf": "PR", "cidade": "Cascavel", "tipo": "Lei", "numero": "Lei nº 6.496/2015, art. 2º, parágrafo único", "data": "2015-06-24", "autoria": "Câmara Municipal de Cascavel", "resumo": "Lei do Plano Municipal de Educação que veda a adoção de políticas de ensino com referência à “ideologia de gênero”.", "situacao": "Derrubada na Justiça", "situacaoEm": "2020-06-29", "nota": "Contestada pela Procuradoria-Geral da República na ADPF 460, relator Luiz Fux; o plenário declarou o dispositivo inconstitucional em 29 de junho de 2020.", "fontes": ["pgr-adpf460", "lexml-adpf460", "stf-adpfs-2017"]},
 {"id": "N-13", "frente": "Ideologia de gênero", "alvo": "Currículo", "esfera": "Municipal", "uf": "MG", "cidade": "Ipatinga", "tipo": "Lei", "numero": "Lei nº 3.491/2015, arts. 2º e 3º", "data": "2015-08-28", "autoria": "Câmara Municipal de Ipatinga", "resumo": "Proíbe o ensino ou a abordagem de “ideologia de gênero e orientação sexual” e a inserção de temas de diversidade de gênero nas práticas pedagógicas da rede municipal.", "situacao": "Derrubada na Justiça", "situacaoEm": "2020-05-28", "nota": "Contestada pela PGR na ADPF 467, relator Gilmar Mendes; declarada inconstitucional por unanimidade em sessão virtual encerrada em 28 de maio de 2020.", "fontes": ["stf-ipatinga-2020", "stf-adpfs-2017"]},
 {"id": "N-14", "frente": "Ideologia de gênero", "alvo": "Material", "esfera": "Municipal", "uf": "GO", "cidade": "Novo Gama", "tipo": "Lei", "numero": "Lei nº 1.516/2015", "data": "2015", "autoria": "Câmara Municipal de Novo Gama", "resumo": "Proíbe material didático com referência à “ideologia de gênero” nas escolas municipais, exige análise prévia dos materiais e manda substituir doações com esse conteúdo.", "situacao": "Derrubada na Justiça", "situacaoEm": "2020-04-27", "nota": "Data exata da lei não localizada. Contestada na ADPF 457, relator Alexandre de Moraes; o plenário a declarou inconstitucional por unanimidade em abril de 2020. É a lei mais próxima do objeto do catálogo, porque mira o material, e não só o currículo.", "fontes": ["dod-novo-gama-2020", "campanha-novo-gama-2020"]},
 {"id": "N-15", "frente": "Ideologia de gênero", "alvo": "Currículo", "esfera": "Municipal", "uf": "SC", "cidade": "Blumenau", "tipo": "Lei", "numero": "Lei Complementar nº 994/2015, art. 10, § 5º", "data": "2015", "autoria": "Câmara Municipal de Blumenau", "resumo": "No Plano Municipal de Educação, veda incluir ou manter as expressões “identidade de gênero”, “ideologia de gênero” e “orientação de gênero” em documentos complementares e diretrizes curriculares.", "situacao": "Derrubada na Justiça", "situacaoEm": "2024-06-28", "nota": "Data exata da lei não localizada. Contestada pela PGR na ADPF 462, relator Edson Fachin, que suspendeu o trecho em dezembro de 2019; o plenário o declarou inconstitucional por unanimidade em sessão virtual encerrada em 28 de junho de 2024.", "fontes": ["stf-blumenau-2024", "stf-adpfs-2017"]},
 {"id": "N-16", "frente": "Ideologia de gênero", "alvo": "Material", "esfera": "Municipal", "uf": "SC", "cidade": "Tubarão", "tipo": "Lei", "numero": "Lei nº 4.268/2015", "data": "2015", "autoria": "Câmara Municipal de Tubarão", "resumo": "Proíbe incluir os termos “gênero”, “orientação sexual” ou sinônimos na política municipal de ensino, no currículo, nos espaços lúdicos e nos materiais didáticos.", "situacao": "Derrubada na Justiça", "situacaoEm": "2025-10-15", "nota": "Data exata da lei não localizada. Contestada pela PGR na ADPF 466, relatora Rosa Weber; julgada em plenário presencial em 15 de outubro de 2025, por unanimidade, junto com as leis de Petrolina e Garanhuns (ADPF 522).", "fontes": ["stf-tubarao-2025", "migalhas-tubarao-2025", "stf-adpfs-2017"]},
 {"id": "N-17", "frente": "Ideologia de gênero", "alvo": "Currículo", "esfera": "Municipal", "uf": "TO", "cidade": "Palmas", "tipo": "Lei", "numero": "Lei nº 2.243/2016, art. 1º", "data": "2016", "autoria": "Carlos Amastha, prefeito, por medida provisória convertida em lei", "partido": "PSB", "resumo": "Veda o ensino sobre gênero e orientação sexual nas escolas da rede municipal.", "situacao": "Derrubada na Justiça", "situacaoEm": "2020-08-21", "nota": "Data exata da lei não localizada. O tema foi proibido pelo prefeito por medida provisória, depois aprovada pela Câmara. Contestada pela PGR na ADPF 465, relator Luís Roberto Barroso, que suspendeu o trecho em 2018; o plenário o declarou inconstitucional por unanimidade em agosto de 2020, junto com Paranaguá e Londrina. A data da situação é a do fim da sessão virtual indicada pelo STF para o conjunto.", "fontes": ["conexaoto-palmas-2020", "stf-genero-2020", "stf-adpfs-2017"]},
 {"id": "N-18", "frente": "Ideologia de gênero", "alvo": "Currículo", "esfera": "Municipal", "uf": "SP", "cidade": "São Bernardo do Campo", "tipo": "Lei", "numero": "Lei nº 6.447/2015 (Plano Municipal de Educação), art. 11", "data": "2016-03-02", "autoria": "Emenda de vereadores liderada por Julinho Fuzari (PPS) e Rafael Demarchi (PSD)", "resumo": "Veda, em todo o sistema municipal de ensino, a implementação de orientação relacionada à “ideologia de gênero”.", "situacao": "Situação não confirmada", "situacaoEm": "2016-03-04", "nota": "O prefeito Luiz Marinho (PT) vetou a emenda; disse que o fez para enviar um projeto mais amplo, que proibisse o tema também em escolas estaduais e particulares. A Câmara derrubou o veto em 2 de março de 2016, data usada aqui. Não foi localizada contestação judicial. Uma das fontes é de entidade com posição declarada contra a “ideologia de gênero” e serve só para a data da derrubada.", "fontes": ["abcreporter-sbc-2016", "ipco-sbc-2016"]},
 {"id": "N-09", "frente": "Ideologia de gênero", "alvo": "Currículo", "esfera": "Municipal", "uf": "RJ", "cidade": "Volta Redonda", "tipo": "Lei", "numero": "Lei nº 5.165/2015", "data": "2015-08-26", "autoria": "Paulo Conrado", "partido": "PSD", "resumo": "Proíbe incluir a chamada “ideologia de gênero” no Plano Municipal de Educação e nas escolas públicas do município.", "situacao": "Situação não confirmada", "situacaoEm": "2016-02-17", "nota": "O prefeito Antônio Francisco Neto (PMDB) vetou o projeto; a Câmara derrubou o veto por unanimidade em 13 de agosto de 2015, e o próprio autor, presidente da Casa, promulgou a lei. Em fevereiro de 2016 a Defensoria Pública do Rio pediu ao Tribunal de Justiça a declaração de inconstitucionalidade (processo 0007584-60.2016.8.19.0000). O resultado não foi localizado. Outra lei da cidade, a 5.457/2018, que criou o Escola sem Partido, foi anulada pelo Órgão Especial em abril de 2019; ela não se confunde com esta.", "fontes": ["dv-volta-redonda-2015", "conjur-volta-redonda-2016", "conjur-vr-esp-2019"]},
 {"id": "N-10", "frente": "Ideologia de gênero", "alvo": "Currículo", "esfera": "Municipal", "uf": "PR", "cidade": "Paranaguá", "tipo": "Lei", "numero": "Lei nº 3.468/2015 (Plano Municipal de Educação), art. 3º, X", "data": "2015-06-23", "autoria": "Câmara Municipal de Paranaguá; autoria do trecho não identificada", "resumo": "No Plano Municipal de Educação, veda políticas de ensino que apliquem a “ideologia de gênero” ou usem os termos “gênero” e “orientação sexual”.", "situacao": "Derrubada na Justiça", "situacaoEm": "2020-08-26", "nota": "A Procuradoria-Geral da República levou a lei ao STF (ADPF 461). Em 16 de junho de 2017 o ministro Luís Roberto Barroso suspendeu o trecho; em agosto de 2020 o plenário o declarou inconstitucional por unanimidade, junto com normas de Palmas e Londrina.", "fontes": ["stf-adpf461-liminar", "stf-genero-2020", "mpd-covas"]},
 {"id": "N-11", "frente": "Ideologia de gênero", "alvo": "Material", "esfera": "Municipal", "uf": "RJ", "cidade": "Nova Iguaçu", "tipo": "Lei", "numero": "Lei nº 4.576/2016", "data": "2016-02-15", "autoria": "Câmara Municipal de Nova Iguaçu", "resumo": "Proíbe o uso de materiais didáticos sobre diversidade sexual nas escolas da rede municipal.", "situacao": "Situação não confirmada", "situacaoEm": "2021-01-08", "nota": "Lei de 15 de fevereiro de 2016, sancionada na gestão de Nelson Bornier. A ADPF 479, no STF, não foi conhecida pelo ministro Alexandre de Moraes, que indicou a via estadual. A lei passou a ser contestada no Tribunal de Justiça do Rio (ação direta 0060740-89.2018.8.19.0000, relatora Nilza Bitar), que aparece na lista de inconstitucionalidades indicadas de 2020 do tribunal, atualizada em janeiro de 2021, sem o resultado do julgamento.", "fontes": ["ni-prefeitura-2016", "sur-kalil-2019", "tjrj-inconst-2020"]},
];


/* ---------- ESPECTRO ----------
   Posição de cada sigla na escala esquerda-direita (0 a 10) segundo surveys com cientistas políticos.
   Base principal: rodada de 2022 (Bolognesi, Ribeiro, Codato e Silva, Opinião Pública, 2025), média ponderada.
   Siglas sem linha em 2022 usam a rodada de 2018 (Bolognesi, Ribeiro e Codato, Dados, 2023).
   Cortes dos autores: extrema esquerda até 1,5; esquerda até 3; centro-esquerda até 4,49; centro até 5,5;
   centro-direita até 7; direita até 8,5; extrema direita acima. "Extrema" indica posição na escala, não caráter antissistema. */
const ESPECTRO = {
 "PL":{escore:9.07, rodada:2022}, "Novo":{escore:8.93, rodada:2022}, "União Brasil":{escore:8.75, rodada:2022},
 "PSC":{escore:8.67, rodada:2022}, "Republicanos":{escore:8.58, rodada:2022}, "Podemos":{escore:7.67, rodada:2022},
 "PMB":{escore:7.51, rodada:2022}, "PSD":{escore:7.15, rodada:2022}, "PSDB":{escore:6.97, rodada:2022},
 "MDB":{escore:6.70, rodada:2022}, "PT":{escore:2.76, rodada:2022}, "PSOL":{escore:1.27, rodada:2022},
 "PP":{escore:8.20, rodada:2018}, "PSL":{escore:8.11, rodada:2018},
 "PRD":{escore:null, rodada:null, nota:"Criado em 2023 pela fusão de PTB e Patriota; ainda sem posição nos surveys. Na rodada de 2022, o PTB tinha 7,96 (direita) e o Patriota 8,86 (extrema direita)."},
 "PSB":{escore:3.70, rodada:2022}, "Rede":{escore:3.80, rodada:2022}, "DEM":{escore:8.57, rodada:2018}, "PROS":{escore:7.47, rodada:2018}
};
const CAMPOS_ESPECTRO = [["Extrema esquerda",1.5],["Esquerda",3],["Centro-esquerda",4.49],["Centro",5.5],["Centro-direita",7],["Direita",8.5],["Extrema direita",10]];
function campoDe(sigla){ const e=ESPECTRO[sigla]; if(!e||e.escore==null) return "Sem classificação"; return CAMPOS_ESPECTRO.find(([n,lim])=>e.escore<=lim)[0]; }
function partidoDoGoverno(g){ const m=/\(([^)]+)\)/.exec(g||""); return m?m[1]:""; }


/* ---------- CANDIDATURAS ----------
   Eleição seguinte ao caso para quem pressionou ou decidiu. Resultado: Eleito, Não eleito,
   Não disputou, Pré-candidatura ou Resultado não confirmado. Ausência de registro = não verificado. */
const CANDIDATURAS = [
 {"agente": "eduardo-riedel", "ano": 2026, "cargo": "governador de Mato Grosso do Sul", "partido": "PP", "resultado": "Eleito", "nota": "Reeleito no primeiro turno, já filiado ao PP; tinha 805.508 votos (67,4%) com 87,7% das urnas apuradas.", "fonte": "tse-riedel-2026"},
 {"agente": "mara-boca-aberta", "ano": 2026, "cargo": "deputada estadual (PR)", "partido": "PL", "resultado": "Não eleito", "nota": "3.740 votos em Londrina; o total estadual não foi localizado. Trocou o PMB pelo PL.", "fonte": "zeotavio-londrina-2026"},
 {"agente": "giovani-mattos", "ano": 2026, "cargo": "deputado estadual (PR)", "partido": "Avante", "resultado": "Não eleito", "nota": "6.898 votos em Londrina; o total estadual não foi localizado. Trocou o PSD pelo Avante.", "fonte": "zeotavio-londrina-2026"},
 {"agente": "clayton-silva", "ano": 2020, "cargo": "prefeito de Limeira", "partido": "PTC", "resultado": "Não eleito", "votos": 1475, "nota": "Candidato a prefeito no ano seguinte ao requerimento; o PTC ficou neutro no segundo turno.", "fonte": "rno-clayton-2020-res"},
 {"agente": "gustavo-gayer", "ano": 2026, "cargo": "senador por Goiás", "partido": "PL", "resultado": "Eleito", "votos": 1639247, "fonte": "itatiaia-gayer-2026"},
 {"agente": "rinaldo-modesto", "ano": 2026, "cargo": "deputado estadual (MS)", "partido": "Podemos", "resultado": "Eleito", "nota": "Reeleito.", "fonte": "otempo-rinaldo-2026"},
 {"agente": "thomaz-henrique", "ano": 2024, "cargo": "vereador de São José dos Campos", "partido": "PL", "resultado": "Eleito", "votos": 8221, "nota": "Reeleito quatro meses depois da retirada do livro.", "fonte": "hub-thomaz"},
 {"agente": "thomaz-henrique", "ano": 2026, "cargo": "deputado estadual (SP)", "partido": "PL", "resultado": "Eleito", "votos": 178164, "nota": "11º mais votado entre 1.346 candidatos.", "fonte": "hub-thomaz"},
 {"agente": "tati-carvalho", "ano": 2024, "cargo": "vereadora de Canoinhas", "partido": "MDB", "resultado": "Eleito", "fonte": "jmais-canoinhas-2024"},
 {"agente": "andre-flenik", "ano": 2024, "cargo": "vereador de Canoinhas", "partido": "PL", "resultado": "Eleito", "fonte": "jmais-canoinhas-2024"},
 {"agente": "willian-godoy", "ano": 2024, "cargo": "vereador de Canoinhas", "partido": "PSD", "resultado": "Não eleito", "fonte": "cn-canoinhas-2024"},
 {"agente": "professor-osmar", "ano": 2024, "cargo": "vereador de Canoinhas", "partido": "PSD", "resultado": "Não eleito", "fonte": "cn-canoinhas-2024"},
 {"agente": "adilson-steidel", "ano": 2024, "cargo": "vereador de Canoinhas", "partido": "PL", "resultado": "Não eleito", "fonte": "cn-canoinhas-2024"},
 {"agente": "chico-mineiro", "ano": 2024, "cargo": "vereador de Canoinhas", "partido": "PL", "resultado": "Não eleito", "fonte": "cn-canoinhas-2024"},
 {"agente": "mauricio-zimmermann", "ano": 2024, "cargo": "", "partido": "", "resultado": "Não disputou", "fonte": "cn-canoinhas-2024"},
 {"agente": "wilmar-sudoski", "ano": 2024, "cargo": "", "partido": "", "resultado": "Não disputou", "fonte": "cn-canoinhas-2024"},
 {"agente": "juliana-maciel-hoppe", "ano": 2024, "cargo": "prefeita de Canoinhas", "partido": "PL", "resultado": "Eleito", "votos": 16415, "nota": "Reeleita com 52,7% dos votos válidos, seis meses depois do vídeo.", "fonte": "nsc-juliana-2024"},
 {"agente": "jessica-ramos-moreno", "ano": 2026, "cargo": "deputada estadual (PR)", "partido": "PL", "resultado": "Eleito", "votos": 131673, "nota": "Segunda mais votada do Paraná e mulher mais votada do estado; trocou o PP pelo PL.", "fonte": "hub-jessicao"},
 {"agente": "zelinda-pastora", "ano": 2026, "cargo": "deputada federal (SP)", "partido": "PRD", "resultado": "Não eleito", "votos": 5273, "nota": "Ficou como suplente; 3.045 dos votos vieram de Taubaté.", "fonte": "hub-mulheres-sp-2026"},
 {"agente": "ranieri-marchioro", "ano": 2026, "cargo": "deputado federal (PR)", "partido": "Republicanos", "resultado": "Não eleito", "votos": 5298, "nota": "Ficou como suplente.", "fonte": "hub-ranieri"},
 {"agente": "bosco-foz", "ano": 2026, "cargo": "deputado federal (PR)", "partido": "PL", "resultado": "Não eleito", "nota": "Candidato registrado; o único eleito entre os candidatos de Foz do Iguaçu foi outro nome.", "fonte": "h2foz-federal-2026"}
];

/* ---------- CONTEXTO PARTIDÁRIO ----------
   Filiação partidária de quem aparece nos atos, com recorte temporal e fontes.
   Serve para conferir os rótulos de partido usados nas fichas; não atribui autoria a partidos. */
const CONTEXTO_PARTIDARIO = [
  {"pessoa": "Thiago Flores", "partido": "PMDB na eleição de 2016 e no início do mandato (sigla renomeada MDB em dezembro de 2017); Republicanos desde 2024", "cobertura": "Eleição municipal de 2016 em Ariquemes, com resultado do G1 citado pela Wikipédia; partido atual na Câmara dos Deputados.", "status": "Confirmado para 2017", "fontes": ["https://pt.wikipedia.org/wiki/Elei%C3%A7%C3%A3o_municipal_de_Ariquemes_em_2016", "https://en.wikipedia.org/wiki/Thiago_Flores"]},
  {"pessoa": "Sebastião Almeida", "partido": "PT, prefeito de Guarulhos de 2009 a 2016", "cobertura": "Reeleito em outubro de 2012 para o mandato 2013–2016, que inclui maio de 2015.", "status": "Confirmado para 2015", "fontes": ["https://exame.com/brasil/guarulhos-reelege-atual-prefeito-com-mais-de-60-dos-votos/"]},
  {
    "pessoa": "Eduardo Leite",
    "partido": "PSDB em 2024; PSD desde 09/05/2025",
    "cobertura": "PSDB no episódio de 2024; mudança posterior documentada pelo próprio PSD.",
    "status": "Confirmado para 2024",
    "fontes": [
      "https://psd.org.br/noticias/governador-eduardo-leite-assina-sua-filiacao-ao-psd/",
      "https://noticias.uol.com.br/politica/ultimas-noticias/2025/05/09/eduardo-leite-se-filia-ao-psd-de-kassab.ghtm"
    ]
  },
  {
    "pessoa": "Eduardo Riedel",
    "partido": "PSDB em 2024; PP em agosto de 2025",
    "cobertura": "Fontes divergem sobre a data da ficha ao PP: 15/08 e 19/08/2025. Não publicar dia exato.",
    "status": "Confirmado em 2024; data da mudança divergente",
    "fontes": [
      "https://www.psdb.org.br/ms/conheca-nossos-representantes/governador/",
      "https://correiodoestado.com.br/politica/eduardo-riedel-ja-se-filiou-ao-pp-e-deve-ter-cargo-na-executiva/453017/",
      "https://noticias.uol.com.br/ultimas-noticias/agencia-estado/2025/08/19/ultimo-governador-do-psdb-eduardo-riedel-do-ms-assina-filiacao-ao-pp.amp.htm"
    ]
  },
  {
    "pessoa": "Ratinho Júnior",
    "partido": "PSD desde 10/03/2016",
    "cobertura": "Ficha de filiação divulgada pelo próprio PSD; TSE o identifica como PSD na eleição de 2022.",
    "status": "Confirmado até 2022; não extrapolar",
    "fontes": [
      "https://psd.org.br/noticias/17401/",
      "https://www.tse.jus.br/comunicacao/noticias/2022/Outubro/ratinho-junior-psd-se-reelege-governador-do-parana"
    ]
  },
  {
    "pessoa": "Ronaldo Caiado",
    "partido": "DEM no mandato 2019–2022; União Brasil em 2023–2026; PSD desde jan/2026",
    "cobertura": "Biografia oficial da Câmara discrimina os mandatos; TSE registra a fusão DEM/PSL.",
    "status": "União Brasil em 2024",
    "fontes": [
      "https://www.camara.leg.br/deputados/74813/biografia",
      "https://www.tse.jus.br/partidos/partidos-registrados-no-tse/registrados-no-tse",
      "https://www1.folha.uol.com.br/poder/2026/01/caiado-deixa-uniao-brasil-e-se-filia-ao-psd-de-kassab.shtml"
    ]
  },
  {
    "pessoa": "Jorginho Mello",
    "partido": "PL desde 2019",
    "cobertura": "Câmara registra mandato de senador pelo PL desde 2019; ALESC registra trajetória. Dia exato da filiação não localizado.",
    "status": "PL sustentado; dia exato não confirmado",
    "fontes": [
      "https://www.camara.leg.br/deputados/160509/biografia",
      "https://memoriapolitica.alesc.sc.gov.br/biografia/514-Jorginho_Mello",
      "https://noticias.uol.com.br/eleicoes/2022/10/30/santa-catarina-jorginho-mello-e-eleito-governador-em-2-turno.htm"
    ]
  },
  {
    "pessoa": "Marcos Rocha",
    "partido": "PSL na eleição de 2018 e início do mandato em 2019",
    "cobertura": "PGE-RO confirma eleição pelo PSL e posse; não equivale a certidão individual para cada dia de 2020.",
    "status": "Contexto forte; filiação diária não comprovada",
    "fontes": [
      "https://pge.ro.gov.br/2021/01/04/estado-de-rondonia-completa-39-anos-concretizando-sonhos-acalentados-desde-1960/"
    ]
  },
  {
    "pessoa": "Anderson Farias",
    "partido": "PSD desde 18/01/2022",
    "cobertura": "Diretório estadual do PSD informa assinatura da ficha nessa data.",
    "status": "Filiação datada por fonte partidária",
    "fontes": [
      "https://psd-sp.org.br/noticias/prefeito-de-sao-jose-dos-campos-se-filia-ao-psd/"
    ]
  },
  {
    "pessoa": "Marcelo Belinati",
    "partido": "PP nas eleições de 2017 e 2021; mandato 2021–2024",
    "cobertura": "Perfil oficial de Londrina registra eleição/mandato; não inferir autoria.",
    "status": "Contexto institucional",
    "fontes": [
      "https://repositorio.londrina.pr.gov.br/index.php/menu-planejamento/gpi/perfil-de-londrina-2025/68692-1-1-1-4/file"
    ]
  },
  {
    "pessoa": "Sérgio Victor",
    "partido": "Novo na eleição de 2024",
    "cobertura": "Registro eleitoral confirma candidatura; posse como prefeito em janeiro de 2025.",
    "status": "Candidatura confirmada",
    "fontes": [
      "https://www1.folha.uol.com.br/poder/eleicoes/candidatos/2024/sp/prefeito/sergio-victor-250001928721.shtml"
    ]
  },
  {
    "pessoa": "Sérgio Motta",
    "partido": "Partido registrado pela ALESC na 20ª Legislatura (2023–2027)",
    "cobertura": "Memória Política da ALESC cobre a legislatura que inclui 2024.",
    "status": "Registro legislativo contemporâneo",
    "fontes": [
      "https://memoriapolitica.alesc.sc.gov.br/biografia/1008-Sergio_Motta"
    ]
  },
  {
    "pessoa": "Jéssica Ramos Moreno",
    "partido": "PP na candidatura municipal de 2024",
    "cobertura": "Registro eleitoral comprova legenda na candidatura, não certidão de filiação em outra data.",
    "status": "Candidatura confirmada; data do requerimento não fechada",
    "fontes": [
      "https://www1.folha.uol.com.br/poder/eleicoes/candidatos/2024/pr/vereador/jessicao-160002026792.shtml"
    ]
  },
  {
    "pessoa": "Amauri Ribeiro",
    "partido": "União Brasil na 20ª Legislatura até 02/04/2026; PL desde 03/04/2026",
    "cobertura": "Perfil biográfico oficial da Alego registra histórico por legislatura. Notícia de gabinete posterior não prova pressão anterior.",
    "status": "União Brasil em 2024; autoria não demonstrada",
    "fontes": [
      "https://portal.al.go.leg.br/deputados/perfil-biografico/137",
      "https://portal.al.go.leg.br/noticias-dos-gabinetes/143079/amauri-ribeiro-lidera-movimento-para-retirada-de-livro-com-conteudo-pornografico-que-estava-sendo-usado-em-escolas-de-goias"
    ]
  },
  {
    "pessoa": "Rinaldo Modesto",
    "partido": "Podemos no registro eleitoral/Partido-TSE da 12ª Legislatura (2023–2027)",
    "cobertura": "A página oficial da ALEMS identifica a composição da 12ª Legislatura e declara o TRE-MS como fonte da coluna Partido-TSE; não fornece histórico individual de filiação por data.",
    "status": "Legenda eleitoral confirmada; filiação individual na data exata do pedido não certificada",
    "fontes": [
      "https://al.ms.gov.br/Paginas/783/12-legislatura",
      "https://www1.folha.uol.com.br/poder/eleicoes/candidatos/2022/ms/deputado-estadual/professor-rinaldo-modesto-120001615778.shtml"
    ]
  },
  {
    "pessoa": "Thomaz Henrique",
    "partido": "PL desde 04/03/2024",
    "cobertura": "Reportagem contemporânea atribui a data ao próprio vereador; antecede o episódio de 04/06/2024.",
    "status": "Declaração pública contemporânea",
    "fontes": [
      "https://portalaquivale.com.br/thomaz-henrique-filia-se-ao-pl",
      "https://www.meon.com.br/noticias/vale-do-paraiba-regiao/sjc-apos-deixar-o-novo-vereador-thomaz-henrique-entra-no-pl"
    ]
  },
  {
    "pessoa": "Gustavo Gayer",
    "partido": "PL na Câmara na legislatura 2023–2027",
    "cobertura": "Perfil institucional da Câmara cobre o período parlamentar.",
    "status": "Registro institucional contemporâneo",
    "fontes": [
      "https://www.camara.leg.br/deputados/220568?ano=2023"
    ]
  },
  {
    "pessoa": "Zelinda Pastora",
    "partido": "PRD documentado em 06/03/2025",
    "cobertura": "Documento da Câmara assinado nessa data; pedido informal ao secretário ocorreu em 2025 sem dia identificado.",
    "status": "Partido no dia do pedido não determinado",
    "fontes": [
      "https://www.camarataubate.sp.gov.br/DownloadServlet?id=boylt7l7ectu0yrvyxisrv8e6rkna9rj",
      "https://sampi.net.br/ovale/noticias/2972973/sessao-extra/2026/04/livro-sobre-menina-com-duas-maes-e-retirado-de-escolas-em-taubate"
    ]
  },
  {
    "pessoa": "Leonel Camasão",
    "partido": "PSOL na candidatura de 2024",
    "cobertura": "Resultado oficial do TRE-SC comprova legenda na eleição; não estender a outros períodos.",
    "status": "Candidatura confirmada",
    "fontes": [
      "https://apps.tre-sc.jus.br/site/fileadmin/arquivos/eleicoes/eleicoes2024/resultados_turno_1/votacao_secao/pdfs/VotSecao_81051_50500.pdf"
    ]
  },
  {
    "pessoa": "Lia Nogueira",
    "partido": "PSDB desde 2022; PSDB na 12ª Legislatura (2023–2027)",
    "cobertura": "Perfil oficial da ALEMS confirma filiação e partido na legislatura.",
    "status": "Confirmado para 2024",
    "fontes": [
      "https://al.ms.gov.br/Deputados/Visualizar/1045",
      "https://al.ms.gov.br/Paginas/783/12-legislatura"
    ]
  },
  {
    "pessoa": "Clayton Silva",
    "partido": "PSC em novembro de 2019; PTC desde abril de 2020",
    "cobertura": "Câmara de Limeira confirma PSC em 29/11/2019; fonte local noticia mudança em abril de 2020. Requerimento de 2019 pedia informações, não retirada.",
    "status": "Temporalmente sustentado; papel corrigido",
    "fontes": [
      "https://www.limeira.sp.leg.br/noticias/view/2019-11-29_camara-cassa-mandato-do-vereador-clayton-silva-por-falta-de-decoro",
      "https://elimeira.com.br/noticias/limeira/seis-vereadores-de-limeira-mudaram-de-partido/"
    ]
  }
];

/* ---------- AGENTES ----------
   Pessoas e instituições com papel documentado nas fontes já cadastradas.
   Pessoas aparecem só pelo papel que exerceram num ato, nunca por dados pessoais. */
const AGENTES = {
 "colegio-santo-agostinho":{"nome":"Colégio Santo Agostinho (Rio de Janeiro)","tipo":"Instituição"},
 "pais-santo-agostinho":{"nome":"Pais de alunos do 6º ano do Colégio Santo Agostinho","tipo":"Instituição"},
 "mendonca-filho":{"nome": "Mendonça Filho", "tipo": "Pessoa"},
 "mec":{"nome": "Ministério da Educação", "tipo": "Instituição"},
 "thiago-flores":{"nome": "Thiago Flores", "tipo": "Pessoa"},
 "vereadores-ariquemes":{"nome": "Vereadores de Ariquemes signatários do ofício (oito, não identificados)", "tipo": "Instituição"},
 "amalec-da-costa":{"nome": "Amalec da Costa", "tipo": "Pessoa"},
 "sintero":{"nome": "Sintero · sindicato dos trabalhadores em educação de Rondônia", "tipo": "Instituição"},
 "luiz-eustaquio":{"nome": "Luiz Eustáquio", "tipo": "Pessoa"},
 "carlos-gueiros":{"nome": "Carlos Gueiros", "tipo": "Pessoa"},
 "prefeitura-recife":{"nome": "Prefeitura do Recife", "tipo": "Instituição"},
 "romildo-santos":{"nome": "Romildo Santos", "tipo": "Pessoa"},
 "moacir-de-souza":{"nome": "Moacir de Souza", "tipo": "Pessoa"},
 "mara-boca-aberta":{"nome":"Mara Boca Aberta","tipo":"Pessoa"},
 "giovani-mattos":{"nome":"Giovani Mattos","tipo":"Pessoa"},
 "silvana-garcia-andre":{"nome": "Silvana Garcia André", "tipo": "Pessoa"},
 "bosco-foz":{"nome": "Bosco Foz", "tipo": "Pessoa"},
 "ranieri-marchioro":{"nome": "Dr. Ranieri Marchioro", "tipo": "Pessoa"},
 "smed-foz":{"nome": "Secretaria Municipal de Educação de Foz do Iguaçu", "tipo": "Instituição"},
 "sinprefi":{"nome": "Sinprefi · sindicato dos servidores da educação municipal de Foz do Iguaçu", "tipo": "Instituição"},
 "camara-foz":{"nome": "Câmara Municipal de Foz do Iguaçu", "tipo": "Instituição"},
 "gerencia-diretoria-pedagogica-unidade-londrina":{"nome": "Gerência de Ensino Fundamental da Secretaria Municipal de Educação de Londrina", "tipo": "Instituição"},
 "tati-carvalho":{"nome": "Tatiane Carvalho (Tati Carvalho)", "tipo": "Pessoa"},
 "wilmar-sudoski":{"nome": "Wilmar Sudoski", "tipo": "Pessoa"},
 "mauricio-zimmermann":{"nome": "Mauricio Zimmermann", "tipo": "Pessoa"},
 "willian-godoy":{"nome": "Willian Godoy", "tipo": "Pessoa"},
 "adilson-steidel":{"nome": "Adilson Steidel", "tipo": "Pessoa"},
 "professor-osmar":{"nome": "Osmar Oleskovicz (Professor Osmar)", "tipo": "Pessoa"},
 "andre-flenik":{"nome": "André Flenik", "tipo": "Pessoa"},
 "chico-mineiro":{"nome": "Chico Mineiro", "tipo": "Pessoa"},
 "juliana-maciel-hoppe":{"nome": "Juliana Maciel Hoppe", "tipo": "Pessoa"},
 "ryan-pablo-klengues":{"nome": "Ryan Pablo Klengues", "tipo": "Pessoa"},
 "fgm-producoes":{"nome": "FGM Produções · projeto Mundoteca", "tipo": "Instituição"},
 "mpsc":{"nome": "Ministério Público de Santa Catarina (MPSC)", "tipo": "Instituição"},
 "prefeitura-canoinhas":{"nome": "Prefeitura Municipal de Canoinhas", "tipo": "Instituição"},
 "tce-sc":{"nome": "Tribunal de Contas do Estado de Santa Catarina (TCE-SC)", "tipo": "Instituição"},
 "gerson-dos-santos-sicca":{"nome": "Gerson dos Santos Sicca", "tipo": "Pessoa"},
 "janaina-venzon":{nome:"Janaína Venzon", tipo:"Pessoa"},
 "luiz-ricardo-pinho-de-moura":{nome:"Luiz Ricardo Pinho de Moura", tipo:"Pessoa"},
 "cre-6-rs":{nome:"6ª Coordenadoria Regional de Educação (RS)", tipo:"Instituição"},
 "seduc-rs":{nome:"Secretaria da Educação do Rio Grande do Sul", tipo:"Instituição"},
 "seed-pr":{nome:"Secretaria de Estado da Educação do Paraná", tipo:"Instituição"},
 "anderfabio-oliveira-dos-santos":{nome:"Anderfábio Oliveira dos Santos", tipo:"Pessoa"},
 "laura-patricia-lopes":{nome:"Laura Patrícia Lopes", tipo:"Pessoa"},
 "nre-curitiba":{nome:"Núcleo Regional de Educação de Curitiba", tipo:"Instituição"},
 "seduc-go":{nome:"Secretaria de Estado da Educação de Goiás", tipo:"Instituição"},
 "rinaldo-modesto":{nome:"Rinaldo Modesto", tipo:"Pessoa"},
 "eduardo-riedel":{nome:"Eduardo Riedel", tipo:"Pessoa"},
 "sed-ms":{nome:"Secretaria de Estado de Educação de Mato Grosso do Sul", tipo:"Instituição"},
 "sed-sc":{nome:"Secretaria de Estado da Educação de Santa Catarina", tipo:"Instituição"},
 "waldemar-ronssem-junior":{nome:"Waldemar Ronssem Júnior", tipo:"Pessoa"},
 "anelise-dos-santos-de-medeiros":{nome:"Anelise dos Santos de Medeiros", tipo:"Pessoa"},
 "leonel-camasao":{nome:"Leonel Camasão", tipo:"Pessoa"},
 "seduc-ro":{nome:"Secretaria de Estado da Educação de Rondônia", tipo:"Instituição"},
 "suamy-vivecananda":{nome:"Suamy Vivecananda", tipo:"Pessoa"},
 "irany-morais":{nome:"Irany de Oliveira Lima Morais", tipo:"Pessoa"},
 "mpf":{nome:"Ministério Público Federal", tipo:"Instituição"},
 "fundacao-palmares":{nome:"Fundação Cultural Palmares", tipo:"Instituição"},
 "sergio-camargo":{nome:"Sérgio Camargo", tipo:"Pessoa"},
 "seme-conselheiro-lafaiete":{nome:"Secretaria Municipal de Educação de Conselheiro Lafaiete", tipo:"Instituição"},
 "espagner-wallysen-vaz-leite":{nome:"Espagner Wallysen Vaz Leite", tipo:"Pessoa"},
 "thomaz-henrique":{nome:"Thomaz Henrique", tipo:"Pessoa"},
 "seme-sjc":{nome:"Secretaria Municipal de Educação e Cidadania de São José dos Campos", tipo:"Instituição"},
 "gustavo-gayer":{nome:"Gustavo Gayer", tipo:"Pessoa"},
 "unirv":{nome:"Coordenação do Vestibular da UniRV", tipo:"Instituição"},
 "jessica-ramos-moreno":{nome:"Jéssica Ramos Moreno", tipo:"Pessoa"},
 "sme-londrina":{nome:"Secretaria Municipal de Educação de Londrina", tipo:"Instituição"},
 "colegio-militar-dom-pedro-ii":{nome:"Colégio Militar Dom Pedro II (DF)", tipo:"Instituição"},
 "zelinda-pastora":{nome:"Zelinda Pastora", tipo:"Pessoa"},
 "helcio-carvalho-dos-santos":{nome:"Hélcio Carvalho dos Santos", tipo:"Pessoa"},
 "seme-taubate":{nome:"Secretaria Municipal de Educação de Taubaté", tipo:"Instituição"},
 "funap":{nome:"Fundação Prof. Dr. Manoel Pedro Pimentel (Funap)", tipo:"Instituição"},
 "henrique-pereira-de-souza-neto":{nome:"Henrique Pereira de Souza Neto", tipo:"Pessoa"},
 "reginaldo-caetano-da-silva":{nome:"Reginaldo Caetano da Silva", tipo:"Pessoa"},
 "clayton-silva":{nome:"Clayton Silva", tipo:"Pessoa"},
 "sme-limeira":{nome:"Secretaria Municipal de Educação de Limeira", tipo:"Instituição"},
};

/* Papel de cada agente em cada ato. cargo = cargo na data do ato.
   atribuido: true quando a fonte atribui o papel sem documento assinado que o comprove. */
const TIPOS_PAPEL = ["Pressão","Pedido","Destinatário do pedido","Decisão","Assinatura","Execução","Denúncia ou fiscalização","Resposta ou reversão"];
const PAPEIS = [
 {"ato":"SA-2018","agente":"pais-santo-agostinho","papel":"Pressão"},
 {"ato":"SA-2018","agente":"colegio-santo-agostinho","papel":"Decisão","nota":"Direção da escola; nenhum nome publicado."},
 {"ato": "MEC-2017", "agente": "mendonca-filho", "papel": "Decisão", "cargo": "ministro da Educação (DEM)", "partido": "DEM"},
 {"ato": "MEC-2017", "agente": "mec", "papel": "Execução"},
 {"ato": "ARQ-2017", "agente": "vereadores-ariquemes", "papel": "Pedido", "nota": "Ofício pedindo suspensão e recolhimento; nomes dos signatários não publicados."},
 {"ato": "ARQ-2017", "agente": "amalec-da-costa", "papel": "Pressão", "cargo": "vereador (PSDB)", "partido": "PSDB", "nota": "Defendeu a medida em entrevista; a assinatura do ofício não está confirmada."},
 {"ato": "ARQ-2017", "agente": "thiago-flores", "papel": "Decisão", "cargo": "prefeito de Ariquemes (MDB)", "partido": "MDB", "nota": "Eleito em 2016 pelo PMDB, nome anterior do MDB."},
 {"ato": "ARQ-2017", "agente": "sintero", "papel": "Denúncia ou fiscalização", "nota": "Ofício pedindo que a solicitação não fosse atendida."},
 {"ato": "REC-2016", "agente": "luiz-eustaquio", "papel": "Pedido", "cargo": "vereador (Rede)", "partido": "Rede"},
 {"ato": "REC-2016", "agente": "carlos-gueiros", "papel": "Pressão", "cargo": "vereador (PSB)", "partido": "PSB", "nota": "Autor do Projeto de Lei nº 26/2016."},
 {"ato": "REC-2016", "agente": "prefeitura-recife", "papel": "Resposta ou reversão", "nota": "Defendeu o uso do livro."},
 {"ato": "GRU-2015", "agente": "romildo-santos", "papel": "Pedido", "cargo": "vereador (PSDB), presidente da Comissão de Direitos Humanos", "partido": "PSDB"},
 {"ato": "GRU-2015", "agente": "moacir-de-souza", "papel": "Resposta ou reversão", "cargo": "secretário municipal de Educação", "nota": "Manteve a distribuição."},
 {ato:"RS-2024", agente:"janaina-venzon", papel:"Pressão", cargo:"diretora da Escola Estadual Ernesto Alves", nota:"Crítica pública em vídeo; o cadastro não sustenta que tenha expedido a ordem."},
 {ato:"RS-2024", agente:"luiz-ricardo-pinho-de-moura", papel:"Decisão", cargo:"coordenador da 6ª Coordenadoria Regional de Educação"},
 {ato:"RS-2024", agente:"luiz-ricardo-pinho-de-moura", papel:"Assinatura", cargo:"coordenador da 6ª Coordenadoria Regional de Educação"},
 {ato:"RS-2024", agente:"cre-6-rs", papel:"Execução"},
 {ato:"RS-2024", agente:"seduc-rs", papel:"Resposta ou reversão", nota:"Desautorizou a ordem no mesmo dia."},
 {ato:"PR-2024", agente:"seed-pr", papel:"Decisão"},
 {ato:"PR-2024", agente:"anderfabio-oliveira-dos-santos", papel:"Assinatura", cargo:"diretor de Educação da Secretaria", nota:"Assinou o ofício da Secretaria."},
 {ato:"PR-2024", agente:"laura-patricia-lopes", papel:"Assinatura", cargo:"chefe do Núcleo Regional de Educação de Curitiba", nota:"Assinou ofício de teor semelhante do Núcleo Regional; não era coassinante do ofício da Secretaria."},
 {ato:"PR-2024", agente:"nre-curitiba", papel:"Execução"},
 {ato:"GO-2024", agente:"seduc-go", papel:"Decisão", nota:"A pessoa responsável não está identificada nas fontes."},
 {ato:"MS-2024", agente:"rinaldo-modesto", papel:"Pedido", cargo:"deputado estadual (Podemos)", nota:"Pediu a retirada na Assembleia Legislativa.", partido:"Podemos"},
 {ato:"MS-2024", agente:"eduardo-riedel", papel:"Decisão", cargo:"governador de Mato Grosso do Sul", atribuido:true, nota:"A Secretaria informou à CartaCapital que o recolhimento atendia a determinação do governador; o ato formal não está identificado.", partido:"PSDB"},
 {ato:"MS-2024", agente:"sed-ms", papel:"Execução"},
 {ato:"MS-2024", agente:"sed-ms", papel:"Resposta ou reversão", nota:"Anunciou a devolução em 23 de abril de 2024."},
 {ato:"SC-2024", agente:"sed-sc", papel:"Decisão", nota:"A pessoa responsável não está identificada nas fontes."},
 {ato:"SC-2023", agente:"sed-sc", papel:"Decisão", nota:"A CRE de Florianópolis foi identificada por cruzamento dos atos de designação dos dois signatários publicados no Diário Oficial; a íntegra do ofício circular e os registros de execução ainda não foram localizados."},
 {ato:"SC-2023", agente:"waldemar-ronssem-junior", papel:"Assinatura", cargo:"supervisor regional de Educação"},
 {ato:"SC-2023", agente:"anelise-dos-santos-de-medeiros", papel:"Assinatura", cargo:"integradora regional"},
 {ato:"SC-2023", agente:"leonel-camasao", papel:"Denúncia ou fiscalização", cargo:"suplente de vereador (PSOL)", nota:"Levou o caso ao Ministério Público.", partido:"PSOL"},
 {ato:"RO-2020", agente:"seduc-ro", papel:"Decisão", nota:"Depois negou ter ordenado o recolhimento."},
 {ato:"RO-2020", agente:"suamy-vivecananda", papel:"Decisão", cargo:"secretário de Estado da Educação", nota:"Nome no fecho do memorando."},
 {ato:"RO-2020", agente:"irany-morais", papel:"Assinatura", cargo:"diretora-geral de Educação", nota:"Signatária eletrônica do memorando."},
 {ato:"RO-2020", agente:"mpf", papel:"Denúncia ou fiscalização", nota:"Abriu inquérito civil; arquivado em 2021 após registrar a suspensão e a devolução dos exemplares."},
 {ato:"PALM-2021-06", agente:"sergio-camargo", papel:"Decisão", cargo:"presidente da Fundação Cultural Palmares", nota:"Apresentou o relatório e anunciou a intenção de descartar os exemplares."},
 {ato:"PALM-2021-06", agente:"fundacao-palmares", papel:"Execução", nota:"Não há comprovação de que os exemplares tenham sido descartados."},
 {ato:"PALM-2021-08", agente:"sergio-camargo", papel:"Decisão", cargo:"presidente da Fundação Cultural Palmares", nota:"Anunciou a separação dos livros no “Acervo da Vergonha”."},
 {ato:"PALM-2021-08", agente:"fundacao-palmares", papel:"Execução", nota:"A separação física e sua duração não estão comprovadas."},
 {ato:"MG-2024", agente:"seme-conselheiro-lafaiete", papel:"Decisão", nota:"Reconheceu em comunicado ter orientado a suspensão temporária dos trabalhos pedagógicos."},
 {ato:"MG-2024", agente:"espagner-wallysen-vaz-leite", papel:"Resposta ou reversão", cargo:"juiz da 1ª Vara Cível de Conselheiro Lafaiete", nota:"Concedeu liminar que cancelou a suspensão."},
 {ato:"SJC-2024", agente:"thomaz-henrique", papel:"Pressão", cargo:"vereador (PL)", partido:"PL"},
 {ato:"SJC-2024", agente:"seme-sjc", papel:"Decisão", nota:"A autoridade individual que formalizou a retirada não foi identificada."},
 {ato:"UNIRV-2023", agente:"gustavo-gayer", papel:"Pressão", cargo:"deputado federal (PL-GO)", nota:"Publicou vídeo chamando o livro de pornográfico.", partido:"PL"},
 {ato:"UNIRV-2023", agente:"unirv", papel:"Decisão", nota:"A nota oficial não identifica a pessoa responsável."},
 {ato:"LON-2024", agente:"jessica-ramos-moreno", papel:"Pedido", cargo:"vereadora (PP)", partido:"PP", partidoFonte:"itatiaia-londrina-2024"},
 {ato:"LON-2024", agente:"sme-londrina", papel:"Destinatário do pedido", nota:"Resposta oficial não localizada."},
 {ato:"DF-2026", agente:"colegio-militar-dom-pedro-ii", papel:"Resposta ou reversão", nota:"Afirmou que a atividade atendia aos objetivos pedagógicos."},
 {ato:"TAU-2025", agente:"zelinda-pastora", papel:"Pedido", cargo:"vereadora (PRD)", nota:"Disse ter pedido o recolhimento diretamente ao secretário.", partido:"PRD", partidoNota:"PRD documentado em março de 2025; o partido no dia do pedido não foi determinado."},
 {ato:"TAU-2025", agente:"helcio-carvalho-dos-santos", papel:"Destinatário do pedido", cargo:"secretário municipal de Educação", nota:"Ordem escrita e signatário formal não localizados."},
 {ato:"TAU-2025", agente:"seme-taubate", papel:"Decisão"},
 {ato:"TAU-2025", agente:"seme-taubate", papel:"Resposta ou reversão", nota:"Anunciou em julho de 2026 a retomada do uso do livro."},
 {ato:"FUNAP-2020", agente:"henrique-pereira-de-souza-neto", papel:"Decisão", cargo:"diretor-executivo da Funap", atribuido:true, nota:"Decisão de riscar a lista atribuída a ele pela articuladora do projeto."},
 {ato:"FUNAP-2020", agente:"reginaldo-caetano-da-silva", papel:"Pressão", cargo:"superintendente da Diretoria de Atendimento e Promoção Humana", nota:"Enviou a mensagem que dizia que um título não atendia às expectativas da gestão."},
 {ato:"FUNAP-2020", agente:"funap", papel:"Resposta ou reversão", nota:"Determinou a inclusão da lista original em 13 de fevereiro de 2020."},
 {ato:"LIM-2019", agente:"clayton-silva", papel:"Pressão", cargo:"vereador (PSC)", nota:"Requerimento de informações; não pediu formalmente a retirada.", partido:"PSC"},
 {ato:"LIM-2019", agente:"sme-limeira", papel:"Resposta ou reversão", nota:"Defendeu a obra e manteve o projeto de leitura."},
 {"ato": "LON-2026", "agente": "gerencia-diretoria-pedagogica-unidade-londrina", "papel": "Pedido", "nota": "A errata da Folha de Londrina atribui a iniciativa à equipe da Gerência de Ensino Fundamental da SME, não à direção da escola; nomes individuais e unidade não foram divulgados."},
 {"ato": "LON-2026", "agente": "gerencia-diretoria-pedagogica-unidade-londrina", "papel": "Assinatura", "nota": "A reportagem inicial menciona duas assinaturas; a errata atribui o pedido à equipe da Gerência de Ensino Fundamental, não à direção da escola. Os nomes individuais não foram divulgados."},
 {"ato": "LON-2026", "agente": "sme-londrina", "papel": "Decisão", "nota": "Informou que iniciou levantamento em toda a rede e recolhimento de exemplares para análise pedagógica; a autoridade individual que autorizou a providência não foi identificada."},
 {"ato": "LON-2026", "agente": "sme-londrina", "papel": "Execução", "nota": "Iniciou levantamento e retirada de circulação para análise; o alcance efetivo em cada unidade não está comprovado."},
 {"ato": "LON-2026", "agente": "sme-londrina", "papel": "Resposta ou reversão", "nota": "Divulgou nota sobre adequação etária e qualidade dos materiais; não foi localizada decisão final sobre a permanência da obra no acervo."},
 {"ato": "CAN-2024", "agente": "tati-carvalho", "papel": "Pedido", "cargo": "vereadora", "nota": "Coautora do Requerimento nº 149/2024, que pediu revisão e separação etária do acervo; não pediu expressamente a retirada dos títulos.", partido:"MDB", partidoFonte:"cn-canoinhas-2024"},
 {"ato": "CAN-2024", "agente": "tati-carvalho", "papel": "Assinatura", "cargo": "vereadora", "escopo": "requerimento", "nota": "Assinou o Requerimento nº 149/2024; a assinatura é do pedido de revisão, não de uma ordem de retirada.", partido:"MDB", partidoFonte:"cn-canoinhas-2024"},
 {"ato": "CAN-2024", "agente": "wilmar-sudoski", "papel": "Pedido", "cargo": "vereador", "nota": "Coautor do Requerimento nº 149/2024, que pediu revisão e separação etária do acervo.", partido:"PSD", partidoNota:"Partido pelo qual se elegeu em 2020; não disputou 2024, e a filiação em abril de 2024 não foi confirmada.", partidoFonte:"tre-sc-canoinhas-2020"},
 {"ato": "CAN-2024", "agente": "wilmar-sudoski", "papel": "Assinatura", "cargo": "vereador", "escopo": "requerimento", "nota": "Assinou o Requerimento nº 149/2024; não é signatário de ordem de retirada.", partido:"PSD", partidoNota:"Partido pelo qual se elegeu em 2020; não disputou 2024, e a filiação em abril de 2024 não foi confirmada.", partidoFonte:"tre-sc-canoinhas-2020"},
 {"ato": "CAN-2024", "agente": "mauricio-zimmermann", "papel": "Pedido", "cargo": "vereador e presidente da Câmara", "nota": "Coautor do Requerimento nº 149/2024.", partido:"PL", partidoNota:"Partido pelo qual se elegeu em 2020; não disputou 2024, e a filiação em abril de 2024 não foi confirmada.", partidoFonte:"tre-sc-canoinhas-2020"},
 {"ato": "CAN-2024", "agente": "mauricio-zimmermann", "papel": "Assinatura", "cargo": "vereador e presidente da Câmara", "escopo": "requerimento", "nota": "Assinou o Requerimento nº 149/2024 e a aprovação como presidente da Câmara; não assinou ordem de retirada.", partido:"PL", partidoNota:"Partido pelo qual se elegeu em 2020; não disputou 2024, e a filiação em abril de 2024 não foi confirmada.", partidoFonte:"tre-sc-canoinhas-2020"},
 {"ato": "CAN-2024", "agente": "willian-godoy", "papel": "Pedido", "cargo": "vereador", "nota": "Coautor do Requerimento nº 149/2024.", partido:"PSD", partidoFonte:"cn-canoinhas-2024"},
 {"ato": "CAN-2024", "agente": "willian-godoy", "papel": "Assinatura", "cargo": "vereador", "escopo": "requerimento", "nota": "Assinou o Requerimento nº 149/2024; não é signatário de ordem de retirada.", partido:"PSD", partidoFonte:"cn-canoinhas-2024"},
 {"ato": "CAN-2024", "agente": "adilson-steidel", "papel": "Pedido", "cargo": "vereador", "nota": "Coautor do Requerimento nº 149/2024.", partido:"PL", partidoFonte:"cn-canoinhas-2024"},
 {"ato": "CAN-2024", "agente": "adilson-steidel", "papel": "Assinatura", "cargo": "vereador", "escopo": "requerimento", "nota": "Assinou o Requerimento nº 149/2024; não é signatário de ordem de retirada.", partido:"PL", partidoFonte:"cn-canoinhas-2024"},
 {"ato": "CAN-2024", "agente": "professor-osmar", "papel": "Pedido", "cargo": "vereador", "nota": "Coautor do Requerimento nº 149/2024.", partido:"PSD", partidoFonte:"cn-canoinhas-2024"},
 {"ato": "CAN-2024", "agente": "professor-osmar", "papel": "Assinatura", "cargo": "vereador", "escopo": "requerimento", "nota": "Assinou o Requerimento nº 149/2024; não é signatário de ordem de retirada.", partido:"PSD", partidoFonte:"cn-canoinhas-2024"},
 {"ato": "CAN-2024", "agente": "andre-flenik", "papel": "Pedido", "cargo": "vereador", "nota": "Coautor do Requerimento nº 149/2024.", partido:"PL", partidoFonte:"cn-canoinhas-2024"},
 {"ato": "CAN-2024", "agente": "andre-flenik", "papel": "Assinatura", "cargo": "vereador", "escopo": "requerimento", "nota": "Assinou o Requerimento nº 149/2024; não é signatário de ordem de retirada.", partido:"PL", partidoFonte:"cn-canoinhas-2024"},
 {"ato": "CAN-2024", "agente": "chico-mineiro", "papel": "Pedido", "cargo": "vereador", "nota": "Coautor do Requerimento nº 149/2024.", partido:"PL", partidoFonte:"cn-canoinhas-2024"},
 {"ato": "CAN-2024", "agente": "chico-mineiro", "papel": "Assinatura", "cargo": "vereador", "escopo": "requerimento", "nota": "Assinou o Requerimento nº 149/2024; não é signatário de ordem de retirada.", partido:"PL", partidoFonte:"cn-canoinhas-2024"},
 {"ato": "CAN-2024", "agente": "juliana-maciel-hoppe", "papel": "Decisão", "cargo": "prefeita de Canoinhas (PL)", "atribuido": true, "nota": "O vídeo público e a nota municipal indicam a retirada dos livros; não foi localizado ato administrativo escrito ou signatário formal.", partido:"PL"},
 {"ato": "CAN-2024", "agente": "juliana-maciel-hoppe", "papel": "Execução", "cargo": "prefeita de Canoinhas (PL)", "atribuido": true, "nota": "Aparece no vídeo colocando exemplares em uma lixeira; a Prefeitura confirmou a retirada da Mundoteca, mas não há prova de destruição física.", partido:"PL"},
 {"ato": "CAN-2024", "agente": "ryan-pablo-klengues", "papel": "Destinatário do pedido", "cargo": "coordenador de Biblioteca", "nota": "Destinatário nominal do Requerimento nº 149/2024; não há evidência de que tenha decidido a retirada."},
 {"ato": "CAN-2024", "agente": "fgm-producoes", "papel": "Resposta ou reversão", "nota": "A FGM/Mundoteca afirmou que havia controle etário e que os livros não foram emprestados a crianças."},
 {"ato": "CAN-2024", "agente": "mpsc", "papel": "Denúncia ou fiscalização", "nota": "A 1ª Promotoria de Justiça de Canoinhas abriu notícia de fato para apurar o descarte; resultado não localizado."},
 {"ato": "CAN-2024", "agente": "tati-carvalho", "papel": "Pressão", "cargo": "vereadora", "nota": "Canoinhas Online relata que exibiu vídeo dos livros na Câmara e classificou o conteúdo como pornografia; gravação oficial da sessão não localizada.", partido:"MDB", partidoFonte:"cn-canoinhas-2024"},
 {"ato": "CAN-2024", "agente": "professor-osmar", "papel": "Pressão", "cargo": "vereador", "nota": "Canoinhas Online relata que pediu a retirada imediata dos livros; gravação oficial da sessão não localizada.", partido:"PSD", partidoFonte:"cn-canoinhas-2024"},
 {"ato": "CAN-2024", "agente": "willian-godoy", "papel": "Pressão", "cargo": "vereador", "nota": "Canoinhas Online relata que defendeu a incineração das obras; gravação oficial da sessão não localizada.", partido:"PSD", partidoFonte:"cn-canoinhas-2024"},
 {"ato": "CAN-2024", "agente": "prefeitura-canoinhas", "papel": "Execução", "nota": "Nota municipal reproduzida pela imprensa afirma que os livros foram retirados da Mundoteca e seriam encaminhados aos responsáveis pelo projeto; entrega efetiva não confirmada."},
 {"ato": "CAN-2024", "agente": "tce-sc", "papel": "Denúncia ou fiscalização", "nota": "O TCE-SC realizou levantamento @LEV 24/80041829, concluiu que os livros não foram efetivamente jogados no lixo e que estavam em poder da Fundação Cultural para análise de destinação; arquivou o procedimento, mas criticou a divulgação pública de uma destruição que não ocorreu."},
 {"ato": "CAN-2024", "agente": "gerson-dos-santos-sicca", "papel": "Assinatura", "cargo": "conselheiro-relator do TCE-SC", "escopo": "Decisão GCS/GSS-861/2024", "nota": "Assinou a decisão de controle externo; não assinou ordem de retirada."},
 {"ato": "FOZ-2025", "agente": "bosco-foz", "papel": "Pressão", "cargo": "vereador (PL)", "nota": "Publicou vídeo sobre o material antes do recolhimento; o cadastro não sustenta que tenha pedido formalmente a retirada.", partido:"PL"},
 {"ato": "FOZ-2025", "agente": "ranieri-marchioro", "papel": "Pressão", "cargo": "vereador (Republicanos)", "nota": "Publicou vídeo sobre o material antes do recolhimento; o cadastro não sustenta que tenha pedido formalmente a retirada.", partido:"Republicanos"},
 {"ato": "FOZ-2025", "agente": "silvana-garcia-andre", "papel": "Decisão", "cargo": "secretária municipal de Educação", "nota": "Apontada pelo sindicato e pela imprensa como responsável pela ordem; a liminar previu multa pessoal a ela em caso de descumprimento."},
 {"ato": "FOZ-2025", "agente": "smed-foz", "papel": "Execução"},
 {"ato": "FOZ-2025", "agente": "sinprefi", "papel": "Denúncia ou fiscalização", "nota": "Autor da ação que obteve a liminar."},
 {"ato": "FOZ-2025", "agente": "camara-foz", "papel": "Denúncia ou fiscalização", "nota": "Abriu CPI sobre o recolhimento."},
 {"ato": "LON-2024", "agente": "mara-boca-aberta", "papel": "Pressão", "cargo": "vereadora (PMB)", "nota": "Coassinou, com Jessicão e Giovani Mattos, o Pedido de Informação nº 582/2024 sobre o livro; o pedido trata de informações e não pede a retirada.", partido:"PMB", partidoFonte:"itatiaia-londrina-2024"},
 {"ato": "LON-2024", "agente": "giovani-mattos", "papel": "Pressão", "cargo": "vereador (PSD)", "nota": "Coassinou o Pedido de Informação nº 582/2024 sobre o livro; o pedido trata de informações e não pede a retirada.", partido:"PSD", partidoFonte:"itatiaia-londrina-2024"}
];

/* ---------- montagem ----------
   As páginas leem os campos do ato e da obra diretamente em cada registro.
   Esta etapa copia esses campos para o registro. Não edite aqui; edite ATOS e LIVROS. */
const CAMPOS_DO_ATO = ["data","fim","uf","cidade","tipo","rede","governo","quem","pressao"];
const CAMPOS_DA_OBRA = ["autoria","editora","pnld","capa","capaCred","conjunto","chegada"];
CASOS.forEach(c=>{
  const A = ATOS[c.ato] || {}, L = LIVROS[c.obra] || {};
  CAMPOS_DO_ATO.forEach(k=>{ if(c[k]===undefined && A[k]!==undefined) c[k]=A[k]; });
  CAMPOS_DA_OBRA.forEach(k=>{ if(c[k]===undefined && L[k]!==undefined) c[k]=L[k]; });
  if(c.titulo===undefined) c.titulo = c.obra;
  if(c.cidade===undefined) c.cidade = "";
});
const RESPONSABILIDADES = Object.fromEntries(CASOS.map(c=>[c.id, (ATOS[c.ato]||{}).papeis || {}]));
const DOCUMENTOS_ATOS = Object.fromEntries(CASOS.map(c=>[c.id, (ATOS[c.ato]||{}).documento || ""]));
