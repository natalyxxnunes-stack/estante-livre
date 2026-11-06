/* Estante Livre · dados do catálogo.
   A base tem quatro entidades, ligadas por chave:
   - LIVROS (obras): o que a obra é. Chave: o nome da obra.
   - ATOS: o documento ou episódio que gerou os registros, com órgão, governo e papéis. Chave: o código do ato.
   - AGENTES e PAPEIS: pessoas e instituições com papel documentado em cada ato.
   - CASOS (registros): um título atingido por um ato, com mecanismo, estágio, situação, alegação e fontes.
   Para acrescentar um caso, copie um bloco de CASOS, aponte para a obra e o ato (criando-os se forem novos)
   e rode  node scripts/gerar.js , que valida tudo. Todas as páginas leem deste arquivo. */

/* ---------- REGISTROS ---------- */
const CASOS = [
 {id:"EL-001", ato:"RS-2024", obra:"O avesso da pele", alegacao:"“Vocabulário de baixo nível” · crítica da diretora Janaína Venzon, da Escola Estadual Ernesto Alves, em vídeo nas redes", eixo:"Linguagem e palavrão", modalidade:"Retirada", estagio:"Execução comprovada", situacao:"Revertido", desfecho:"Revertido", verificado:"Sim", fontes:["bdf-rs","pn-rs","icl-rs"], nota:"Depois do vídeo da diretora, um ofício do coordenador da 6ª Coordenadoria Regional de Educação, Luiz Ricardo Pinho de Moura, mandou retirar o livro das bibliotecas escolares de 18 municípios do Vale do Rio Pardo. A Secretaria estadual desautorizou a ordem no mesmo dia e a retirada durou poucas horas. Segundo a editora, a própria diretora havia assinado a ata de escolha da obra no PNLD. Foi o primeiro episódio de março de 2024; nas semanas seguintes vieram ordens no PR, em GO, no MS e em SC."},
 {id:"EL-002", ato:"PR-2024", obra:"O avesso da pele", alegacao:"Expressões, jargões e descrições de cenas de sexo que seriam “inadequados para exposição a menores de dezoito anos”", eixo:"Sexualidade e gênero", modalidade:"Retirada", estagio:"Execução comprovada", situacao:"Revertido", desfecho:"Revertido", verificado:"Sim", fontes:["cc-oficio","icl-pr","cc-pr","pn-volta"], nota:"A Secretaria encaminhou ofício assinado por Anderfábio Oliveira dos Santos, diretor de Educação; o Núcleo Regional de Educação de Curitiba também expediu ofício de teor semelhante, assinado por sua chefe, Laura Patrícia Lopes. A coleta foi programada para 5 a 8 de março. A Companhia das Letras foi à Justiça, e o livro voltou às escolas em abril de 2024, acompanhado de orientações pedagógicas."},
 {id:"EL-003", ato:"GO-2024", obra:"O avesso da pele", alegacao:"“Possibilitar uma análise do livro quanto ao atendimento da proposta pedagógica da rede”", eixo:"Linguagem e palavrão", modalidade:"Retirada", estagio:"Execução comprovada", situacao:"Revertido", desfecho:"Revertido", verificado:"Sim", fontes:["cc-go","pn-volta"], nota:"O livro voltou às escolas de Goiás em abril de 2024, um mês depois, junto com o Paraná."},
 {id:"EL-004", ato:"MS-2024", obra:"O avesso da pele", alegacao:"“Expressões impróprias” para menores de 18 anos · termo usado pelo deputado estadual Rinaldo Modesto ao cobrar a retirada", eixo:"Linguagem e palavrão", modalidade:"Retirada", estagio:"Execução comprovada", situacao:"Revertido", desfecho:"Revertido", verificado:"Sim", fontes:["gp-estados","cgn-volta","cgn-alems","cc-ms-avesso"], pendencia:"A SED anunciou em 23/04/2024 que os exemplares estavam em processo de devolução às bibliotecas da rede. A reportagem não informa se a devolução alcançou todas as 75 escolas que haviam recebido a obra nem se outras unidades também receberam exemplares; falta comprovação da distribuição final por unidade.", nota:"Na Assembleia, a crítica uniu deputados de partidos opostos: Rinaldo Modesto (Podemos) pediu a retirada, Lia Nogueira (PSDB) chamou o livro de “nojento” e Pedro Kemp (PT) disse ter “muitas reservas” sobre o uso no ensino médio. O governador Eduardo Riedel mandou recolher os exemplares das 75 escolas da rede que tinham recebido o livro. Em 23 de abril de 2024, a Secretaria de Educação informou que a obra, após análise técnica, estava em processo de devolução às bibliotecas das unidades escolares, com orientações pedagógicas de uso. A reportagem esclareceu que a SED não informou se a devolução abrangeria apenas as 75 unidades que já tinham recebido o livro ou também as demais 274 escolas; tampouco detalhou as orientações aos professores. Portanto, a reversão da decisão está comprovada, mas não a distribuição final em todas as unidades originalmente alcançadas."},
 {id:"EL-005", ato:"SC-2024", obra:"O avesso da pele", alegacao:"Revisão pedagógica do acervo após indicação parlamentar que sugeria a retirada do livro das escolas estaduais.", eixo:"Sexualidade e gênero", modalidade:"Ocultação ou restrição de acesso", estagio:"Decisão ou ordem", situacao:"Em aberto", desfecho:"SED confirmou oficialmente orientação para recolher exemplares das bibliotecas escolares e submetê-los a análise pedagógica; redistribuição posterior não comprovada.", verificado:"Sim", fontes:["gp-estados","alesc-ind154-doc"], pendencia:"Confirmar quais escolas recolheram exemplares, por quanto tempo, o resultado da análise pedagógica e se/para quais unidades os livros foram devolvidos ou redistribuídos. Obter eventual ato interno que operacionalizou a orientação.", nota:"A Informação nº 304/2024/SED/DIEN, de 23/04/2024, integrante da resposta oficial encaminhada à ALESC, registra que exemplares foram localizados em algumas bibliotecas estaduais e que a Secretaria orientou as escolas a recolherem as obras das bibliotecas e realizarem análise pedagógica do título e de todo o acervo. O documento vincula a análise à adequação aos projetos político-pedagógicos e às faixas etárias. A resposta foi encaminhada pelo Secretário de Estado da Educação Aristides Cimadon, em Ofício/Gabs nº 1017/2024, de 28/05/2024, assinado digitalmente em 29/05. Isso confirma a orientação institucional, mas não demonstra que todos os exemplares foram recolhidos, nem o resultado da análise ou a redistribuição posterior. A Gazeta do Povo havia relatado redistribuição de parte de livros a CEDUPs e EJA, mas não se deve atribuir automaticamente essa redistribuição específica ao título sem comprovação por unidade."},
 {id:"EL-006", ato:"SC-2023", obra:"It: A coisa", alegacao:"Sem justificativa no ofício · determinava armazenar “em local não acessível à comunidade escolar”. A secretaria alegou depois “redistribuição por faixa etária”", eixo:"Sobrenatural e mágico", modalidade:"Ocultação ou restrição de acesso", estagio:"Decisão ou ordem", situacao:"Em aberto", desfecho:"Em aberto", verificado:"Sim", fontes:["cc-sc","gp-sc","p360-sc","cnn-sc","cf-sc","folha-sc","doe-waldemar-2023","doe-anelise-2023"], pendencia:"A coordenadoria foi identificada como CRE de Florianópolis por atos de designação publicados no Diário Oficial. Permanecem pendentes a cópia integral e o número do ofício circular, a lista de escolas destinatárias e os registros de execução/recolhimento e eventual devolução das nove obras.", nota:"Ofício assinado pelo supervisor regional de educação Waldemar Ronssem Júnior e pela integradora regional Anelise dos Santos de Medeiros: “Determinamos que as obras listadas abaixo sejam retiradas de circulação”. O suplente de vereador Leonel Camasão (PSOL) levou o caso ao Ministério Público estadual."},
 {id:"EL-007", ato:"SC-2023", obra:"Laranja Mecânica", alegacao:"Sem justificativa no ofício · determinava armazenar “em local não acessível à comunidade escolar”. A secretaria alegou depois “redistribuição por faixa etária”", eixo:"Violência", modalidade:"Ocultação ou restrição de acesso", estagio:"Decisão ou ordem", situacao:"Em aberto", desfecho:"Em aberto", verificado:"Sim", fontes:["cc-sc","gp-sc","p360-sc","cnn-sc","cf-sc","folha-sc","doe-waldemar-2023","doe-anelise-2023"], pendencia:"A coordenadoria foi identificada como CRE de Florianópolis por atos de designação publicados no Diário Oficial. Permanecem pendentes a cópia integral e o número do ofício circular, a lista de escolas destinatárias e os registros de execução/recolhimento e eventual devolução das nove obras.", nota:"Ofício assinado pelo supervisor regional de educação Waldemar Ronssem Júnior e pela integradora regional Anelise dos Santos de Medeiros: “Determinamos que as obras listadas abaixo sejam retiradas de circulação”. O suplente de vereador Leonel Camasão (PSOL) levou o caso ao Ministério Público estadual."},
 {id:"EL-008", ato:"SC-2023", obra:"Donnie Darko", alegacao:"Sem justificativa no ofício · determinava armazenar “em local não acessível à comunidade escolar”. A secretaria alegou depois “redistribuição por faixa etária”", eixo:"Sobrenatural e mágico", modalidade:"Ocultação ou restrição de acesso", estagio:"Decisão ou ordem", situacao:"Em aberto", desfecho:"Em aberto", verificado:"Sim", fontes:["cc-sc","gp-sc","p360-sc","cnn-sc","cf-sc","folha-sc","doe-waldemar-2023","doe-anelise-2023"], pendencia:"A coordenadoria foi identificada como CRE de Florianópolis por atos de designação publicados no Diário Oficial. Permanecem pendentes a cópia integral e o número do ofício circular, a lista de escolas destinatárias e os registros de execução/recolhimento e eventual devolução das nove obras.", nota:"Ofício assinado pelo supervisor regional de educação Waldemar Ronssem Júnior e pela integradora regional Anelise dos Santos de Medeiros: “Determinamos que as obras listadas abaixo sejam retiradas de circulação”. O suplente de vereador Leonel Camasão (PSOL) levou o caso ao Ministério Público estadual."},
 {id:"EL-009", ato:"SC-2023", obra:"Coração Satânico", alegacao:"Sem justificativa no ofício · determinava armazenar “em local não acessível à comunidade escolar”. A secretaria alegou depois “redistribuição por faixa etária”", eixo:"Sobrenatural e mágico", modalidade:"Ocultação ou restrição de acesso", estagio:"Decisão ou ordem", situacao:"Em aberto", desfecho:"Em aberto", verificado:"Sim", fontes:["cc-sc","gp-sc","p360-sc","cnn-sc","cf-sc","folha-sc","doe-waldemar-2023","doe-anelise-2023"], pendencia:"A coordenadoria foi identificada como CRE de Florianópolis por atos de designação publicados no Diário Oficial. Permanecem pendentes a cópia integral e o número do ofício circular, a lista de escolas destinatárias e os registros de execução/recolhimento e eventual devolução das nove obras.", nota:"Ofício assinado pelo supervisor regional de educação Waldemar Ronssem Júnior e pela integradora regional Anelise dos Santos de Medeiros: “Determinamos que as obras listadas abaixo sejam retiradas de circulação”. O suplente de vereador Leonel Camasão (PSOL) levou o caso ao Ministério Público estadual."},
 {id:"EL-010", ato:"SC-2023", obra:"Exorcismo", alegacao:"Sem justificativa no ofício · determinava armazenar “em local não acessível à comunidade escolar”. A secretaria alegou depois “redistribuição por faixa etária”", eixo:"Sobrenatural e mágico", modalidade:"Ocultação ou restrição de acesso", estagio:"Decisão ou ordem", situacao:"Em aberto", desfecho:"Em aberto", verificado:"Sim", fontes:["cc-sc","gp-sc","p360-sc","cnn-sc","cf-sc","folha-sc","doe-waldemar-2023","doe-anelise-2023"], pendencia:"A coordenadoria foi identificada como CRE de Florianópolis por atos de designação publicados no Diário Oficial. Permanecem pendentes a cópia integral e o número do ofício circular, a lista de escolas destinatárias e os registros de execução/recolhimento e eventual devolução das nove obras.", nota:"Ofício assinado pelo supervisor regional de educação Waldemar Ronssem Júnior e pela integradora regional Anelise dos Santos de Medeiros: “Determinamos que as obras listadas abaixo sejam retiradas de circulação”. O suplente de vereador Leonel Camasão (PSOL) levou o caso ao Ministério Público estadual."},
 {id:"EL-011", ato:"SC-2023", obra:"Ed & Lorraine Warren: demonologistas — arquivos sobrenaturais", alegacao:"Sem justificativa no ofício · determinava armazenar “em local não acessível à comunidade escolar”. A secretaria alegou depois “redistribuição por faixa etária”", eixo:"Sobrenatural e mágico", modalidade:"Ocultação ou restrição de acesso", estagio:"Decisão ou ordem", situacao:"Em aberto", desfecho:"Em aberto", verificado:"Sim", fontes:["cc-sc","gp-sc","p360-sc","cnn-sc","cf-sc","folha-sc","doe-waldemar-2023","doe-anelise-2023"], pendencia:"A coordenadoria foi identificada como CRE de Florianópolis por atos de designação publicados no Diário Oficial. Permanecem pendentes a cópia integral e o número do ofício circular, a lista de escolas destinatárias e os registros de execução/recolhimento e eventual devolução das nove obras.", nota:"Ofício assinado pelo supervisor regional de educação Waldemar Ronssem Júnior e pela integradora regional Anelise dos Santos de Medeiros: “Determinamos que as obras listadas abaixo sejam retiradas de circulação”. O suplente de vereador Leonel Camasão (PSOL) levou o caso ao Ministério Público estadual."},
 {id:"EL-012", ato:"SC-2023", obra:"O diário do diabo: os segredos de Alfred Rosenberg, o maior intelectual do nazismo", alegacao:"Sem justificativa no ofício · determinava armazenar “em local não acessível à comunidade escolar”. A secretaria alegou depois “redistribuição por faixa etária”", eixo:"Política e ideologia", modalidade:"Ocultação ou restrição de acesso", estagio:"Decisão ou ordem", situacao:"Em aberto", desfecho:"Em aberto", verificado:"Sim", fontes:["cc-sc","gp-sc","p360-sc","cnn-sc","cf-sc","folha-sc","doe-waldemar-2023","doe-anelise-2023"], pendencia:"A coordenadoria foi identificada como CRE de Florianópolis por atos de designação publicados no Diário Oficial. Permanecem pendentes a cópia integral e o número do ofício circular, a lista de escolas destinatárias e os registros de execução/recolhimento e eventual devolução das nove obras.", nota:"Ofício assinado pelo supervisor regional de educação Waldemar Ronssem Júnior e pela integradora regional Anelise dos Santos de Medeiros: “Determinamos que as obras listadas abaixo sejam retiradas de circulação”. O suplente de vereador Leonel Camasão (PSOL) levou o caso ao Ministério Público estadual."},
 {id:"EL-013", ato:"SC-2023", obra:"A química entre nós", alegacao:"Sem justificativa no ofício · determinava armazenar “em local não acessível à comunidade escolar”. A secretaria alegou depois “redistribuição por faixa etária”", eixo:"Sexualidade e gênero", modalidade:"Ocultação ou restrição de acesso", estagio:"Decisão ou ordem", situacao:"Em aberto", desfecho:"Em aberto", verificado:"Sim", fontes:["cc-sc","gp-sc","p360-sc","cnn-sc","cf-sc","folha-sc","doe-waldemar-2023","doe-anelise-2023"], pendencia:"A coordenadoria foi identificada como CRE de Florianópolis por atos de designação publicados no Diário Oficial. Permanecem pendentes a cópia integral e o número do ofício circular, a lista de escolas destinatárias e os registros de execução/recolhimento e eventual devolução das nove obras.", nota:"Ofício assinado pelo supervisor regional de educação Waldemar Ronssem Júnior e pela integradora regional Anelise dos Santos de Medeiros: “Determinamos que as obras listadas abaixo sejam retiradas de circulação”. O suplente de vereador Leonel Camasão (PSOL) levou o caso ao Ministério Público estadual."},
 {id:"EL-014", ato:"SC-2023", obra:"Os 13 porquês", alegacao:"Sem justificativa no ofício · determinava armazenar “em local não acessível à comunidade escolar”. A secretaria alegou depois “redistribuição por faixa etária”", eixo:"Outro", modalidade:"Ocultação ou restrição de acesso", estagio:"Decisão ou ordem", situacao:"Em aberto", desfecho:"Em aberto", verificado:"Sim", fontes:["cc-sc","gp-sc","p360-sc","cnn-sc","cf-sc","folha-sc","doe-waldemar-2023","doe-anelise-2023"], pendencia:"A coordenadoria foi identificada como CRE de Florianópolis por atos de designação publicados no Diário Oficial. Permanecem pendentes a cópia integral e o número do ofício circular, a lista de escolas destinatárias e os registros de execução/recolhimento e eventual devolução das nove obras.", nota:"Ofício assinado pelo supervisor regional de educação Waldemar Ronssem Júnior e pela integradora regional Anelise dos Santos de Medeiros: “Determinamos que as obras listadas abaixo sejam retiradas de circulação”. O suplente de vereador Leonel Camasão (PSOL) levou o caso ao Ministério Público estadual."},
 {id:"EL-015", ato:"RO-2020", obra:"Macunaíma", alegacao:"“Conteúdos inadequados às crianças e adolescentes”", eixo:"Política e ideologia", modalidade:"Retirada", estagio:"Decisão ou ordem", situacao:"Revertido", desfecho:"Ordem suspensa no mesmo dia; exemplares que chegaram a ser recolhidos foram devolvidos, segundo o MPF", verificado:"Parcialmente", fontes:["gp-ro","pn-ro","publico-ro","cc-ro","dp-ro","estudo-ro","mpf-ro-arquivamento","adendo-ro-copia"], pendencia:"Localizar a íntegra do processo SEI 0029.051300/2020-91, o resultado da sindicância administrativa da Seduc e a íntegra da recomendação do MP-RO. O MPF homologou o arquivamento do inquérito civil em 2021; isso não substitui a apuração administrativa estadual.", nota:"O Memorando-Circular nº 4/2020/SEDUC-DGE traz o nome do secretário Suamy Vivecananda no fecho; o registro eletrônico identifica Irany de Oliveira Lima Morais, diretora-geral de Educação, como signatária digital. A Seduc negou ter ordenado o recolhimento e afirmou que o processo foi encerrado antes de tramitar para escolas ou órgãos externos. Em decisão publicada no Diário do MPF em 30 de agosto de 2021, o órgão registrou que houve solicitação verbal de recolhimento, suspensa no mesmo dia, e que os livros que chegaram a ser recolhidos foram devolvidos às escolas. O MPF concluiu que o recolhimento não se concretizou, registrou a abertura de sindicância pela Seduc e a atuação do MP-RO, cuja recomendação foi acatada; o inquérito civil foi arquivado, com homologação do arquivamento pela Câmara competente. A cópia pública do Adendo ID 10053329 reproduz 19 linhas atribuídas a Rubem Fonseca: Diário de um Fescenino; Bufo & Spallanzani; O Melhor de Rubem Fonseca; Secreções, Excreções e Desatinos; Os Prisioneiros; Agosto; Amálgama; O Doente Molière; A Coleira do Cão; O Seminarista (duas ocorrências); Histórias Curtas; História de Amor; O Buraco na Parede; Feliz Ano Novo; Calibre 22; Mandrake: A Bíblia e a Bengala; Lúcia McCartney; Romance Negro e Outras Histórias. Portanto, são 18 títulos distintos em 19 itens. A cópia está hospedada por terceiro, não foi obtida diretamente do SEI; o memorando identifica o Adendo pelo ID 10053329. Um artigo acadêmico publicado em 2024 reproduz imagem do memorando. OAB-RO e Academia Brasileira de Letras enviaram notas de repúdio."},
 {id:"EL-016", ato:"RO-2020", obra:"Memórias póstumas de Brás Cubas", alegacao:"“Conteúdos inadequados às crianças e adolescentes”", eixo:"Política e ideologia", modalidade:"Retirada", estagio:"Decisão ou ordem", situacao:"Revertido", desfecho:"Ordem suspensa no mesmo dia; exemplares que chegaram a ser recolhidos foram devolvidos, segundo o MPF", verificado:"Parcialmente", fontes:["gp-ro","pn-ro","publico-ro","cc-ro","dp-ro","estudo-ro","mpf-ro-arquivamento","adendo-ro-copia"], pendencia:"Localizar a íntegra do processo SEI 0029.051300/2020-91, o resultado da sindicância administrativa da Seduc e a íntegra da recomendação do MP-RO. O MPF homologou o arquivamento do inquérito civil em 2021; isso não substitui a apuração administrativa estadual.", nota:"Registro provisório de agrupamento para representar a relação documental do Adendo ID 10053329, não uma obra literária. A cópia pública consultada contém 43 linhas numeradas e 42 títulos distintos, pois O Seminarista aparece duas vezes. A relação de títulos e o comando adicional sobre todos os livros de Rubem Alves são elementos separados. A cópia foi localizada em hospedagem de terceiro e não equivale à obtenção do processo integral no SEI."},
 {id:"EL-017", ato:"RO-2020", obra:"Os Sertões da Luta", alegacao:"“Conteúdos inadequados às crianças e adolescentes”", eixo:"Política e ideologia", modalidade:"Retirada", estagio:"Decisão ou ordem", situacao:"Revertido", desfecho:"Ordem suspensa no mesmo dia; exemplares que chegaram a ser recolhidos foram devolvidos, segundo o MPF", verificado:"Parcialmente", fontes:["gp-ro","pn-ro","publico-ro","cc-ro","dp-ro","estudo-ro","mpf-ro-arquivamento","adendo-ro-copia"], pendencia:"Localizar a íntegra do processo SEI 0029.051300/2020-91, o resultado da sindicância administrativa da Seduc e a íntegra da recomendação do MP-RO. O MPF homologou o arquivamento do inquérito civil em 2021; isso não substitui a apuração administrativa estadual.", nota:"O Memorando-Circular nº 4/2020/SEDUC-DGE traz o nome do secretário Suamy Vivecananda no fecho; o registro eletrônico identifica Irany de Oliveira Lima Morais, diretora-geral de Educação, como signatária digital. A Seduc negou ter ordenado o recolhimento e afirmou que o processo foi encerrado antes de tramitar para escolas ou órgãos externos. Em decisão publicada no Diário do MPF em 30 de agosto de 2021, o órgão registrou que houve solicitação verbal de recolhimento, suspensa no mesmo dia, e que os livros que chegaram a ser recolhidos foram devolvidos às escolas. O MPF concluiu que o recolhimento não se concretizou, registrou a abertura de sindicância pela Seduc e a atuação do MP-RO, cuja recomendação foi acatada; o inquérito civil foi arquivado, com homologação do arquivamento pela Câmara competente. Um artigo acadêmico publicado em 2024 reproduz imagem do memorando e da relação de títulos. OAB-RO e Academia Brasileira de Letras enviaram notas de repúdio."},
 {id:"EL-018", ato:"RO-2020", obra:"O castelo", alegacao:"“Conteúdos inadequados às crianças e adolescentes”", eixo:"Política e ideologia", modalidade:"Retirada", estagio:"Decisão ou ordem", situacao:"Revertido", desfecho:"Ordem suspensa no mesmo dia; exemplares que chegaram a ser recolhidos foram devolvidos, segundo o MPF", verificado:"Parcialmente", fontes:["gp-ro","pn-ro","publico-ro","cc-ro","dp-ro","estudo-ro","mpf-ro-arquivamento","adendo-ro-copia"], pendencia:"Localizar a íntegra do processo SEI 0029.051300/2020-91, o resultado da sindicância administrativa da Seduc e a íntegra da recomendação do MP-RO. O MPF homologou o arquivamento do inquérito civil em 2021; isso não substitui a apuração administrativa estadual.", nota:"O Memorando-Circular nº 4/2020/SEDUC-DGE traz o nome do secretário Suamy Vivecananda no fecho; o registro eletrônico identifica Irany de Oliveira Lima Morais, diretora-geral de Educação, como signatária digital. A Seduc negou ter ordenado o recolhimento e afirmou que o processo foi encerrado antes de tramitar para escolas ou órgãos externos. Em decisão publicada no Diário do MPF em 30 de agosto de 2021, o órgão registrou que houve solicitação verbal de recolhimento, suspensa no mesmo dia, e que os livros que chegaram a ser recolhidos foram devolvidos às escolas. O MPF concluiu que o recolhimento não se concretizou, registrou a abertura de sindicância pela Seduc e a atuação do MP-RO, cuja recomendação foi acatada; o inquérito civil foi arquivado, com homologação do arquivamento pela Câmara competente. Um artigo acadêmico publicado em 2024 reproduz imagem do memorando e da relação de títulos. OAB-RO e Academia Brasileira de Letras enviaram notas de repúdio."},
 {id:"EL-019", ato:"RO-2020", obra:"Contos de terror, de mistério e de morte", alegacao:"“Conteúdos inadequados às crianças e adolescentes”", eixo:"Violência", modalidade:"Retirada", estagio:"Decisão ou ordem", situacao:"Revertido", desfecho:"Ordem suspensa no mesmo dia; exemplares que chegaram a ser recolhidos foram devolvidos, segundo o MPF", verificado:"Parcialmente", fontes:["gp-ro","pn-ro","publico-ro","cc-ro","dp-ro","estudo-ro","mpf-ro-arquivamento","adendo-ro-copia"], pendencia:"Localizar a íntegra do processo SEI 0029.051300/2020-91, o resultado da sindicância administrativa da Seduc e a íntegra da recomendação do MP-RO. O MPF homologou o arquivamento do inquérito civil em 2021; isso não substitui a apuração administrativa estadual.", nota:"O Memorando-Circular nº 4/2020/SEDUC-DGE traz o nome do secretário Suamy Vivecananda no fecho; o registro eletrônico identifica Irany de Oliveira Lima Morais, diretora-geral de Educação, como signatária digital. A Seduc negou ter ordenado o recolhimento e afirmou que o processo foi encerrado antes de tramitar para escolas ou órgãos externos. Em decisão publicada no Diário do MPF em 30 de agosto de 2021, o órgão registrou que houve solicitação verbal de recolhimento, suspensa no mesmo dia, e que os livros que chegaram a ser recolhidos foram devolvidos às escolas. O MPF concluiu que o recolhimento não se concretizou, registrou a abertura de sindicância pela Seduc e a atuação do MP-RO, cuja recomendação foi acatada; o inquérito civil foi arquivado, com homologação do arquivamento pela Câmara competente. Um artigo acadêmico publicado em 2024 reproduz imagem do memorando e da relação de títulos. OAB-RO e Academia Brasileira de Letras enviaram notas de repúdio."},
 {id:"EL-020", ato:"RO-2020", obra:"A vida como ela é", alegacao:"“Conteúdos inadequados às crianças e adolescentes”", eixo:"Sexualidade e gênero", modalidade:"Retirada", estagio:"Decisão ou ordem", situacao:"Revertido", desfecho:"Ordem suspensa no mesmo dia; exemplares que chegaram a ser recolhidos foram devolvidos, segundo o MPF", verificado:"Parcialmente", fontes:["gp-ro","pn-ro","publico-ro","cc-ro","dp-ro","estudo-ro","mpf-ro-arquivamento","adendo-ro-copia"], pendencia:"Localizar a íntegra do processo SEI 0029.051300/2020-91, o resultado da sindicância administrativa da Seduc e a íntegra da recomendação do MP-RO. O MPF homologou o arquivamento do inquérito civil em 2021; isso não substitui a apuração administrativa estadual.", nota:"O Memorando-Circular nº 4/2020/SEDUC-DGE traz o nome do secretário Suamy Vivecananda no fecho; o registro eletrônico identifica Irany de Oliveira Lima Morais, diretora-geral de Educação, como signatária digital. A Seduc negou ter ordenado o recolhimento e afirmou que o processo foi encerrado antes de tramitar para escolas ou órgãos externos. Em decisão publicada no Diário do MPF em 30 de agosto de 2021, o órgão registrou que houve solicitação verbal de recolhimento, suspensa no mesmo dia, e que os livros que chegaram a ser recolhidos foram devolvidos às escolas. O MPF concluiu que o recolhimento não se concretizou, registrou a abertura de sindicância pela Seduc e a atuação do MP-RO, cuja recomendação foi acatada; o inquérito civil foi arquivado, com homologação do arquivamento pela Câmara competente. Um artigo acadêmico publicado em 2024 reproduz imagem do memorando e da relação de títulos. OAB-RO e Academia Brasileira de Letras enviaram notas de repúdio."},
 {id:"EL-021", ato:"RO-2020", obra:"Beijo no asfalto", alegacao:"“Conteúdos inadequados às crianças e adolescentes”", eixo:"Sexualidade e gênero", modalidade:"Retirada", estagio:"Decisão ou ordem", situacao:"Revertido", desfecho:"Ordem suspensa no mesmo dia; exemplares que chegaram a ser recolhidos foram devolvidos, segundo o MPF", verificado:"Parcialmente", fontes:["gp-ro","pn-ro","publico-ro","cc-ro","dp-ro","estudo-ro","mpf-ro-arquivamento","adendo-ro-copia"], pendencia:"Localizar a íntegra do processo SEI 0029.051300/2020-91, o resultado da sindicância administrativa da Seduc e a íntegra da recomendação do MP-RO. O MPF homologou o arquivamento do inquérito civil em 2021; isso não substitui a apuração administrativa estadual.", nota:"O Memorando-Circular nº 4/2020/SEDUC-DGE traz o nome do secretário Suamy Vivecananda no fecho; o registro eletrônico identifica Irany de Oliveira Lima Morais, diretora-geral de Educação, como signatária digital. A Seduc negou ter ordenado o recolhimento e afirmou que o processo foi encerrado antes de tramitar para escolas ou órgãos externos. Em decisão publicada no Diário do MPF em 30 de agosto de 2021, o órgão registrou que houve solicitação verbal de recolhimento, suspensa no mesmo dia, e que os livros que chegaram a ser recolhidos foram devolvidos às escolas. O MPF concluiu que o recolhimento não se concretizou, registrou a abertura de sindicância pela Seduc e a atuação do MP-RO, cuja recomendação foi acatada; o inquérito civil foi arquivado, com homologação do arquivamento pela Câmara competente. Um artigo acadêmico publicado em 2024 reproduz imagem do memorando e da relação de títulos. OAB-RO e Academia Brasileira de Letras enviaram notas de repúdio."},
 {id:"EL-022", conjunto:true, ato:"RO-2020", obra:"Obras de Rubem Fonseca (19 itens; 18 títulos distintos)", alegacao:"“Conteúdos inadequados às crianças e adolescentes”", eixo:"Violência", modalidade:"Retirada", estagio:"Decisão ou ordem", situacao:"Revertido", desfecho:"Ordem suspensa no mesmo dia; exemplares que chegaram a ser recolhidos foram devolvidos, segundo o MPF", verificado:"Parcialmente", fontes:["gp-ro","pn-ro","publico-ro","cc-ro","dp-ro","estudo-ro","mpf-ro-arquivamento","adendo-ro-copia"], pendencia:"A lista do Adendo está reconciliada: 19 itens de Rubem Fonseca correspondem a 18 títulos distintos porque O Seminarista aparece duas vezes. A relação está preservada como conjunto documental; não há lacuna de identificação dos títulos neste agrupamento.", nota:"O Memorando-Circular nº 4/2020/SEDUC-DGE traz o nome do secretário Suamy Vivecananda no fecho; o registro eletrônico identifica Irany de Oliveira Lima Morais, diretora-geral de Educação, como signatária digital. A Seduc negou ter ordenado o recolhimento e afirmou que o processo foi encerrado antes de tramitar para escolas ou órgãos externos. Em decisão publicada no Diário do MPF em 30 de agosto de 2021, o órgão registrou que houve solicitação verbal de recolhimento, suspensa no mesmo dia, e que os livros que chegaram a ser recolhidos foram devolvidos às escolas. O MPF concluiu que o recolhimento não se concretizou, registrou a abertura de sindicância pela Seduc e a atuação do MP-RO, cuja recomendação foi acatada; o inquérito civil foi arquivado, com homologação do arquivamento pela Câmara competente. Um artigo acadêmico publicado em 2024 reproduz imagem do memorando e da relação de títulos. OAB-RO e Academia Brasileira de Letras enviaram notas de repúdio. A cópia pública do Adendo ID 10053329 reproduz 19 linhas atribuídas a Rubem Fonseca, correspondentes a 18 títulos distintos: Diário de um Fescenino; Bufo & Spallanzani; O Melhor de Rubem Fonseca; Secreções, Excreções e Desatinos; Os Prisioneiros; Agosto; Amálgama; O Doente Molière; A Coleira do Cão; O Seminarista; Histórias Curtas; História de Amor; O Buraco na Parede; Feliz Ano Novo; Calibre 22; Mandrake: A Bíblia e a Bengala; Lúcia McCartney; Romance Negro e Outras Histórias. O Seminarista aparece duas vezes na relação. A cópia está hospedada por terceiro; não foi obtida diretamente do SEI."},
 {id:"EL-023", conjunto:true, ato:"RO-2020", obra:"Obra completa de Rubem Alves", alegacao:"“Conteúdos inadequados às crianças e adolescentes”", eixo:"Política e ideologia", modalidade:"Retirada", estagio:"Decisão ou ordem", situacao:"Revertido", desfecho:"Ordem suspensa no mesmo dia; exemplares que chegaram a ser recolhidos foram devolvidos, segundo o MPF", verificado:"Parcialmente", fontes:["gp-ro","pn-ro","publico-ro","cc-ro","dp-ro","estudo-ro","mpf-ro-arquivamento","adendo-ro-copia"], pendencia:"Sem relação de títulos", nota:"O Memorando-Circular nº 4/2020/SEDUC-DGE traz o nome do secretário Suamy Vivecananda no fecho; o registro eletrônico identifica Irany de Oliveira Lima Morais, diretora-geral de Educação, como signatária digital. A Seduc negou ter ordenado o recolhimento e afirmou que o processo foi encerrado antes de tramitar para escolas ou órgãos externos. Em decisão publicada no Diário do MPF em 30 de agosto de 2021, o órgão registrou que houve solicitação verbal de recolhimento, suspensa no mesmo dia, e que os livros que chegaram a ser recolhidos foram devolvidos às escolas. O MPF concluiu que o recolhimento não se concretizou, registrou a abertura de sindicância pela Seduc e a atuação do MP-RO, cuja recomendação foi acatada; o inquérito civil foi arquivado, com homologação do arquivamento pela Câmara competente. Um artigo acadêmico publicado em 2024 reproduz imagem do memorando e da relação de títulos. OAB-RO e Academia Brasileira de Letras enviaram notas de repúdio."},
 {id:"EL-024", conjunto:true, ato:"RO-2020", obra:"Relação do Adendo 10053329 (43 itens; 42 títulos distintos)", alegacao:"“Conteúdos inadequados às crianças e adolescentes”", eixo:"Outro", modalidade:"Retirada", estagio:"Decisão ou ordem", situacao:"Revertido", desfecho:"Ordem suspensa no mesmo dia; exemplares que chegaram a ser recolhidos foram devolvidos, segundo o MPF", verificado:"Parcialmente", fontes:["gp-ro","pn-ro","publico-ro","cc-ro","dp-ro","estudo-ro","mpf-ro-arquivamento","adendo-ro-copia"], pendencia:"A lista de títulos do Adendo está reconciliada e registrada em conjunto documental. Permanecem pendentes a obtenção do processo SEI integral e a documentação da sindicância estadual e da recomendação do MP-RO.", nota:"O Memorando-Circular nº 4/2020/SEDUC-DGE traz o nome do secretário Suamy Vivecananda no fecho; o registro eletrônico identifica Irany de Oliveira Lima Morais, diretora-geral de Educação, como signatária digital. A Seduc negou ter ordenado o recolhimento e afirmou que o processo foi encerrado antes de tramitar para escolas ou órgãos externos. Em decisão publicada no Diário do MPF em 30 de agosto de 2021, o órgão registrou que houve solicitação verbal de recolhimento, suspensa no mesmo dia, e que os livros que chegaram a ser recolhidos foram devolvidos às escolas. O MPF concluiu que o recolhimento não se concretizou, registrou a abertura de sindicância pela Seduc e a atuação do MP-RO, cuja recomendação foi acatada; o inquérito civil foi arquivado, com homologação do arquivamento pela Câmara competente. Um artigo acadêmico publicado em 2024 reproduz imagem do memorando e da relação de títulos. OAB-RO e Academia Brasileira de Letras enviaram notas de repúdio. A cópia pública do Adendo ID 10053329 contém 43 linhas numeradas e 42 títulos distintos, pois O Seminarista aparece duas vezes. Este agrupamento reúne os 17 títulos distintos da relação que não têm ficha individual nem pertencem ao conjunto de Rubem Fonseca ou aos sete registros individualizados: O Melhor de Caio Fernando Abreu — Contos e Crônicas (Caio Fernando Abreu); Poemas Escolhidos (Ferreira Gullar); A Volta por Cima (Carlos Heitor Cony); Mar de Histórias — todos os volumes (Aurélio Buarque de Holanda Ferreira); O Irmão que tu me Deste (Carlos Heitor Cony); A Menina de Cá (Carlos Nascimento Silva); Guia Millôr da História do Brasil (Ivan Rubino Fernandes); O Ventre (Carlos Heitor Cony); Rosa Vegetal de Sangue (Carlos Heitor Cony); O Mistério da Moto de Cristal (Ana Lee e Carlos Heitor Cony); Estrangeira (Sonia Rodrigues); O Melhor de Nelson Rodrigues (Nelson Rodrigues); 13 dos Melhores Contos de Amor (Rosa Amanda Strausz); Mil e Uma Noites (Carlos Heitor Cony); Vestido de Noiva — graphic novel (autoria não indicada na relação); O Ato e o Fato (Carlos Heitor Cony); O Harém das Bananeiras (Carlos Heitor Cony). A instrução sobre todos os livros de Rubem Alves aparece fora da tabela e é registrada separadamente em EL-023. A transcrição normaliza erros evidentes de grafia do documento (Gular/Gullar, Hitor/Heitor, Ruben/Rubem e Alfalto/Asfalto); a primeira linha aparece truncada no PDF como “O Melhor De” e foi completada com base na relação publicada pela Folha."},
 {id:"EL-025", ato:"PALM-2021-06", obra:"Anúncio de descarte de 5.165 exemplares classificados como de “temática alheia à negra”", alegacao:"Relatório “Retrato do Acervo: três décadas de dominação marxista na Fundação Cultural Palmares” · classificação de 5.165 exemplares como de “temática alheia à negra”", eixo:"Política e ideologia", modalidade:"Descarte ou destruição", estagio:"Decisão ou ordem", situacao:"Em aberto", desfecho:"Destino final dos 5.165 exemplares não comprovado", verificado:"Parcialmente", fontes:["em-palmares","sbt-palm","gp-palmares","opovo-palm","palmares-inventario","palmares-inventario-2023","palmares-politica","relatorio-palmares-original","relatorio-gestao-palm-2021","unesp-palmares","participa-palm"], pendencia:"A divergência 9.565/9.546 foi esclarecida em favor do número 9.565 pelo Relatório de Gestão 2021 da própria FCP, que decompõe o total em 8.035 títulos diferentes e 1.530 folders/catálogos. Permanecem sem reconciliação as versões posteriores do inventário (9.665 em 2023 e 9.696 em 2024) e, sobretudo, a lista integral dos 5.165 itens classificados como de temática alheia à negra e a comprovação de seu destino final. A ação relativa aos cerca de 300 livros do EL-026 é tratada separadamente, sem afirmar que os conjuntos sejam mutuamente exclusivos.", nota:"O Relatório de Gestão 2021 da própria Fundação Cultural Palmares, seção 3.1.2, informa um total de 9.565 registros do acervo, composto por 8.035 títulos diferentes e 1.530 folders e catálogos. Para evitar confusão, 9.565 é o total agregado informado no relatório, não a quantidade de títulos distintos. Isso esclarece a divergência com a reportagem do Jornal da Unesp, que publicou 9.546: a fonte institucional de prestação de contas confirma 9.565, embora não explique a origem do número divergente usado pela reportagem. O relatório de 2021 classificou 5.165 (54%) como de temática alheia à negra; esse número é uma classificação da gestão, não prova de descarte. As versões públicas do Inventário Bibliográfico publicadas pela FCP em 2023 e 2024 informam, respectivamente, 9.665 e 9.696 títulos, embora ambas indiquem que a compilação foi realizada entre julho e outubro de 2021. Não foi localizada nota de revisão que reconcilie essas versões com os 9.565 do Relatório de Gestão. Também não foi localizada lista individualizada que permita identificar os 5.165 itens classificados nem comprovação de sua destinação final. A ação relativa aos cerca de 300 livros é registrada no EL-026; não há base para afirmar que os conjuntos sejam mutuamente exclusivos."},
 {id:"EL-026", ato:"PALM-2021-08", obra:"Segregação de cerca de 300 livros no chamado “Acervo da Vergonha”", alegacao:"Camargo chamou as obras de “bibliografia imprestável para a Palmares”, “marxistas” e “bandidólatras”.", eixo:"Política e ideologia", modalidade:"Ocultação ou restrição de acesso", estagio:"Decisão ou ordem", situacao:"Em aberto", desfecho:"Segregação anunciada; acesso público posterior não verificado", verificado:"Parcialmente", fontes:["opovo-palm","sbt-museu","oglobo-palm-300","oglobo-palm-ala","participa-palm","gp-palmares"], pendencia:"Obter inventário dos cerca de 300 livros, comprovar se foram fisicamente separados, por quanto tempo e quando voltaram à consulta pública.", nota:"A Justiça Federal já havia impedido a doação de cerca de 300 livros. Em 23 de julho de 2021, a Procuradoria-Geral Federal informou ao juízo que Sérgio Camargo desistira da doação, ao menos naquele momento. Em 3 de agosto, Camargo anunciou a criação de uma seção/sala para separar os livros que chamava de “vergonhosos e desviantes”. O anúncio público está documentado; a duração e o regime efetivo de acesso à sala ainda precisam de comprovação."},
 {id:"EL-027", ato:"MG-2024", obra:"O menino marrom", alegacao:"Pais consideraram a obra “agressiva”, citando passagens sobre pacto de sangue e conflitos entre personagens.", eixo:"Cultura afro-brasileira", modalidade:"Veto a atividade", estagio:"Decisão ou ordem", situacao:"Revertido", desfecho:"Ato administrativo anulado por sentença de mérito em 02/12/2024, que confirmou a tutela antecipada; trânsito em julgado não comprovado", verificado:"Sim", fontes:["pn-ziraldo","dp-ziraldo","comunicado-lafaiete","decisao-lafaiete","sentenca-lafaiete"], pendencia:"Confirmar o trânsito em julgado e identificar, se possível, o agente público que formalizou o ato administrativo original. A sentença de 02/12/2024 anulou o ato, mas a cópia pública consultada não traz certidão de trânsito em julgado.", nota:"Em comunicado de 20/06/2024, a Secretaria Municipal de Educação informou a suspensão temporária dos trabalhos pedagógicos com o livro após manifestações de pais, familiares e autoridades locais; a medida não foi um recolhimento geral dos exemplares. A sentença de 02/12/2024 registra que o Município informou ter retomado as atividades normais com a obra após reunião pedagógica de 21/06 e envio de e-mail às escolas em 28/06/2024. A decisão judicial de 27/06/2024 havia determinado o cancelamento imediato da suspensão, sob multa diária de R$ 5 mil. No mérito, o juiz Espagner Wallysen Vaz Leite, da 1ª Vara Cível de Conselheiro Lafaiete, julgou procedente a ação popular, anulou o ato administrativo da Secretaria e confirmou a tutela antecipada na sentença de mérito. A sentença afirma que a suspensão não foi anulada administrativamente; por isso, afastou a alegação municipal de perda do objeto. A íntegra da sentença foi localizada em reprodução pública, mas ainda não foi obtida certidão de trânsito em julgado. A decisão identifica a Secretaria como autora do ato, mas não individualiza seu signatário."},
 {id:"EL-028", ato:"SJC-2024", obra:"Meninas sonhadoras, mulheres cientistas", alegacao:"O vereador afirmou que a obra faria “apologia ao aborto” e promoveria “doutrinação ideológica”. A prefeitura sustentou posteriormente que a restrição decorria de avaliação curricular.", eixo:"Sexualidade e gênero", modalidade:"Retirada", estagio:"Execução comprovada", situacao:"Revertido", desfecho:"Sentença de mérito de 20/07/2026 reconheceu censura material e determinou a restituição do livro às salas de leitura e bibliotecas das escolas em que integrava o acervo; cumprimento não confirmado.", verificado:"Parcialmente", fontes:["pn-sjc","ap-sjc","op-sjc","migalhas-sjc","folha-sjc-ordem","uol-sjc-ordem","ovale-sjc-sentenca","jurinews-sjc-2024"], pendencia:"Obter cópia integral da sentença e certidão de intimação; comprovar a restituição e disponibilidade efetiva dos exemplares nas unidades; verificar eventual recurso contra a sentença e seu efeito. As reportagens de 28 a 30/07/2026 registraram que a Prefeitura não havia confirmado o cumprimento.", nota:"O livro foi recolhido das salas de leitura da rede municipal em junho de 2024, após a pressão pública do vereador. Segundo a apuração divulgada com base no processo, a ordem de retirada foi transmitida aos diretores por mensagens de WhatsApp, sem justificativa técnico-pedagógica contemporânea. Em 2024, na ação movida pelo Ministério Público e pela Defensoria Pública, uma liminar determinou a redistribuição da obra; a Prefeitura recorreu e o TJSP suspendeu os efeitos da liminar em outubro de 2024. O processo prosseguiu com produção de prova oral, audiência de instrução e alegações finais. Em sentença de mérito assinada em 20/07/2026, a juíza Renata Heloísa da Silva Salles, da Vara da Infância e Juventude, concluiu que a retirada configurou censura material, julgou parcialmente procedente a ação e determinou que o Município restituísse e redisponibilizasse a obra nas salas de leitura e bibliotecas das unidades em que integrava o acervo, assegurando consulta, empréstimo e uso pedagógico no Ensino Fundamental II. A sentença proibiu recolhimento, ocultação ou restrição por razões político-ideológicas sem procedimento administrativo formal e motivação técnico-pedagógica idônea, e fixou multa diária de R$ 500, inicialmente limitada a R$ 50 mil. A juíza negou o pedido de indenização por dano moral coletivo. As reportagens publicadas em 28, 29 e 30/07/2026 informaram que a Prefeitura ainda não havia confirmado a execução da ordem; não foi localizada comprovação posterior de redistribuição nem certidão de trânsito em julgado. O vereador declarou que recorreria, mas não foi localizada confirmação pública do protocolo de recurso."},
 {id:"EL-029", ato:"UNIRV-2023", obra:"Eu receberia as piores notícias de seus lindos lábios", alegacao:"O parlamentar classificou a obra como “pornográfica”; a universidade afirmou que a polêmica pesou na exclusão.", eixo:"Sexualidade e gênero", modalidade:"Exclusão de lista de leitura", estagio:"Execução comprovada", situacao:"Em vigor", desfecho:"Retirado da lista; decisão institucional confirmada", verificado:"Parcialmente", fontes:["unirv-lista-2023","fp-unirv","jo-unirv","folha-unirv","unirv-nota"], pendencia:"Identificar nominalmente quem compunha a Coordenação do Vestibular e quem formalizou a decisão; a nota pública identifica o órgão decisor, mas não traz ata ou despacho nominal.", nota:"Em 12/04/2023, a própria UniRV publicou a lista de obras para o vestibular de Medicina e incluiu expressamente o romance de Marçal Aquino. Em nota oficial datada de 26/04 e publicada em 27/04, a universidade afirmou que a Coordenação do Vestibular decidiu pela exclusão imediata da obra após tomar conhecimento do conteúdo e da polêmica; a indicação original havia sido feita por uma banca de professores. A instituição não identifica nominalmente quem, dentro da Coordenação, tomou a decisão nem apresenta ata ou despacho individual."},
 {id:"EL-030", ato:"LON-2024", obra:"A mamãe vai ter um bebê", titulo:"Requerimento de recolhimento de A mamãe vai ter um bebê e retirada de exemplar de CMEI (Londrina)", alegacao:"A vereadora classificou como inadequada para crianças uma ilustração de casal sob um edredom em contexto de reprodução humana.", eixo:"Sexualidade e gênero", modalidade:"Retirada", estagio:"Execução comprovada", situacao:"Em aberto", desfecho:"Secretaria retirou imediatamente o exemplar encontrado em um CMEI e revisou o acervo daquela unidade; não há prova de recolhimento de outros exemplares na rede. PL 79/2024 sancionado como Lei nº 13.930/2025.", verificado:"Sim", fontes:["ric-londrina-2024","taroba-londrina-2024","pedido-londrina","pl79-londrina","lei-londrina-13930"], pendencia:"Obter cópia integral do requerimento parlamentar e da nota oficial da Secretaria; confirmar se a revisão do acervo identificou outros exemplares e se houve retirada em outras unidades. Não há comprovação de devolução do exemplar retirado.", nota:"Em 26/11/2024, durante vistoria em um CMEI após denúncia de uma família, a vereadora Jéssica Ramos Moreno (PP) encontrou o livro e pediu providências. A Secretaria Municipal de Educação afirmou à imprensa que a obra não havia sido adquirida nem distribuída pelo Município; acreditava que o exemplar chegara por doação direta ou fora levado por aluno e esquecido na unidade. A pasta declarou que o livro foi imediatamente retirado do acervo e que faria revisão completa do material disponível naquele CMEI. Portanto, a retirada de um exemplar em uma unidade está confirmada por nota oficial reproduzida contemporaneamente, mas não se comprova o recolhimento geral pedido pela vereadora nem a existência de outros exemplares na rede. A cobertura de 27/11 ainda informou que a Secretaria não havia respondido oficialmente ao requerimento parlamentar específico; isso não contradiz a nota sobre a retirada do exemplar encontrado. O PL 79/2024, de autoria da vereadora, já havia sido protocolado em 09/04/2024 (processo 148224, documento 208880), meses antes do episódio; foi aprovado e sancionado em 21/03/2025 como Lei Municipal nº 13.930. A lei posterior não prova recolhimento de exemplares."},
 {id:"EL-031", ato:"DF-2026", obra:"A bolsa amarela", titulo:"Controvérsia sobre atividade com resenha de A bolsa amarela", alegacao:"Pais consideraram inadequada para crianças de cerca de 9 anos uma passagem em que a protagonista deseja ter nascido menino.", eixo:"Sexualidade e gênero", modalidade:"Veto a atividade", estagio:"Pressão pública", situacao:"Sem efeito", desfecho:"Sem retirada de exemplares ou veto à obra comprovado", verificado:"Parcialmente", fontes:["met-bolsa1","met-bolsa2","piaui-bolsa"], pendencia:"A íntegra da nota oficial e o material complementar original não foram localizados em fonte pública. A cobertura contemporânea reproduz os principais esclarecimentos do colégio: o link foi retirado preventivamente para avaliação e não foi reinserido porque a atividade semanal já havia terminado.", nota:"A apuração da revista piauí e a reportagem do Metrópoles de 25/05/2026 esclarecem que A bolsa amarela não foi adotada como leitura obrigatória nem houve retirada de exemplares do acervo. O episódio envolveu um link externo para uma resenha, usado como material complementar em exercício de Língua Portuguesa. O colégio informou que retirou o link preventivamente para avaliação pedagógica; a análise não identificou prejuízo pedagógico nem direcionamento ideológico. O link não foi reinserido porque a atividade semanal já havia terminado. A piauí também ouviu o responsável pela comunicação do colégio, que afirmou que a resenha não apresentava problema pedagógico e que a obra poderia ser adotada. A íntegra da nota oficial e o material complementar original não foram localizados em fonte pública. Este registro documenta pressão pública e retirada temporária de um link de apoio, não banimento ou retirada do livro."},
 {id:"EL-032", ato:"TAU-2025", obra:"Pipoca e Picolé", alegacao:"A vereadora contestou a representação de uma família com duas mães e um pai e declarou: “Nós não vamos aceitar material como esse na nossa sala de aula”.", eixo:"Sexualidade e gênero", modalidade:"Retirada", estagio:"Execução comprovada", situacao:"Revertido", desfecho:"Análise técnica favorável à utilização, condicionada a planejamento pedagógico, respeito à faixa etária e mediação docente; uso efetivo nas escolas ainda não comprovado", verificado:"Parcialmente", fontes:["ovale-tau","ovale-tau-abr10","ovale-tau-jul14"], pendencia:"Obter cópia integral do parecer técnico favorável e registros administrativos que demonstrem a devolução/redistribuição dos exemplares às unidades, identificando escolas e turmas contempladas. A notícia de 14/07/2026 confirma a decisão de inclusão no plano de ensino das turmas adequadas, mas não comprova a execução material.", nota:"A vereadora Zelinda Pastora (PRD) afirmou que pediu ao secretário Hélcio Carvalho dos Santos o recolhimento, após reclamação de uma mãe. A Prefeitura confirmou à Câmara que retirou a obra. Na resposta divulgada em 10/04/2026, informou que os exemplares disponíveis haviam sido encaminhados à Secretaria Municipal de Educação para análise técnica; a maior parte dos livros do programa já havia sido distribuída aos alunos. Em 14/07/2026, a Prefeitura informou que a avaliação da Coordenação de Área e da Equipe de Práticas Pedagógicas da Educação Infantil foi favorável à utilização do livro na rede, desde que o trabalho ocorra com planejamento pedagógico adequado, respeito à faixa etária e mediação docente qualificada. O título permaneceria no plano de ensino das turmas consideradas adequadas, com acompanhamento da Coordenação de Área. A notícia confirma a decisão técnica e a orientação pedagógica de retomada, mas não informa quais unidades receberam exemplares, quando ocorreu a redistribuição nem se o livro voltou efetivamente a ser utilizado em sala. O município havia adquirido 3.280 kits para alunos e 116 para professores, mas a fonte não permite converter esses números em quantidade de exemplares do título."},
 {id:"EL-033", ato:"FUNAP-2020", obra:"Veto à lista de doze livros do projeto Remição em Rede", alegacao:"Em mensagem à articuladora, a Funap afirmou que um título não atendia às expectativas da gestão; em reunião, foram mencionadas três obras como problemáticas, sem identificação pública.", eixo:"Outro", modalidade:"Veto a aquisição ou doação", estagio:"Decisão ou ordem", situacao:"Revertido", desfecho:"Funap determinou a inclusão da lista original no programa em 13/02/2020 e criou equipe multidisciplinar; os exemplares doados haviam sido devolvidos aos doadores em dezembro de 2019, sem comprovação de novo envio", verificado:"Parcialmente", fontes:["bdf-funap","reimao-2023","folha-funap-11fev","folha-funap-14fev","benaglia-heller-2022"], pendencia:"Obter a mensagem original de Reginaldo Caetano da Silva, a ata da reunião de 13/02/2020 e a nota integral da Funap; identificar as três obras questionadas; localizar comprovante de eventual nova doação/envio após a devolução de dezembro de 2019; esclarecer a divergência entre 240 exemplares doados (Folha) e 228 cuja circulação teria sido impedida (Benaglia e Heller). Não presumir que a diferença de 12 corresponda a exemplares entregues ou retidos.", nota:"Em agosto de 2019, as editoras participantes do Remição em Rede doaram 240 exemplares de doze títulos para a biblioteca circulante, segundo a Folha (11 e 14/02/2020). A lista completa dos títulos foi publicada e está registrada nas fontes do caso. Segundo Janine Durand, articuladora do projeto, a lista foi riscada pelo então diretor-executivo da Funap, coronel Henrique Pereira de Souza Neto; em dezembro de 2019, após a medida, as organizadoras solicitaram a devolução dos livros doados, e a Funap respondeu comunicando a restituição. A Folha identifica Reginaldo Caetano da Silva, superintendente da Diretoria de Atendimento e Promoção Humana, como autor de mensagem de 03/12/2019 que dizia que um título não atendia às expectativas da gestão; em reunião, segundo Durand, foram mencionadas três obras, mas sem identificação. Em 13/02/2020, após repercussão pública, a Funap determinou que o programa incluísse a lista inicialmente indicada e anunciou equipe multidisciplinar da Funap, SAP e Mulheres do Brasil para tratar da seleção e da metodologia dos clubes. Isso comprova a reversão da decisão sobre a lista, não a entrega dos exemplares físicos: a notícia da Folha informa que os livros doados haviam sido devolvidos em dezembro de 2019, e não foi localizado comprovante de nova doação ou envio posterior. Há divergência quantitativa que deve permanecer explícita: a Folha registra 240 exemplares doados; Benaglia e Heller (artigo de 2022) mencionam 228 livros cuja circulação teria sido impedida. As fontes consultadas não explicam a diferença de 12; não se deve inferir que esses 12 tenham sido entregues ou liberados. A Folha e as demais fontes não identificam as três obras apontadas como problemáticas."},
 {id:"EL-034", ato:"LIM-2019", obra:"A bolsa amarela", titulo:"Questionamento parlamentar sobre A bolsa amarela — sem retirada comprovada", alegacao:"No requerimento, o vereador perguntou se o livro afrontava princípios morais de pais e alunos e chamou sua temática de “ideologia de gênero”.", eixo:"Sexualidade e gênero", modalidade:"Veto a atividade", estagio:"Pressão pública", situacao:"Sem efeito", desfecho:"Sem retirada: Secretaria defendeu a obra e manteve o projeto de leitura", verificado:"Sim", fontes:["reimao-2023","uninter-bolsa","camara-limeira-req","camara-limeira-resp"], nota:"O Requerimento nº 451/2019, de autoria de Clayton Silva (PSC), pediu informações sobre distribuição, atividades e critérios de escolha de A bolsa amarela. Na justificativa, o vereador afirmou que o livro abordava “ideologia de gênero” e questionou se afrontava princípios morais. A Secretaria Municipal de Educação respondeu em 24 de setembro que a obra integrava o Clube de Leitura, descreveu seu valor literário e declarou que ela não afrontava princípios morais. O documento não registra pedido de retirada nem retirada da obra. Este caso documenta pressão discursiva e questionamento parlamentar, não censura ou banimento."},
];

/* ---------- OBRAS ----------
   conjunto: true quando o registro é um lote sem lista título a título. */
const LIVROS = {
 "O avesso da pele":{
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
   capa:"it-a-coisa",
   capaCred:"Capa de referência · Suma, 2014",
   autoria:"Stephen King",
   ano:1986,
   genero:"Terror",
   sinopse:"Sete crianças de uma cidade do Maine enfrentam uma entidade que se alimenta do medo, e voltam adultas para terminar o que começaram."},
 "Laranja Mecânica":{
   autoria:"Anthony Burgess",
   capa:"laranja-mecanica",
   ano:1962,
   genero:"Romance",
   sinopse:"Numa Inglaterra distópica, um adolescente violento é submetido a um tratamento de condicionamento que o impede de escolher o mal — e, com isso, de escolher.",
   nota:"Livro sobre os limites do Estado ao suprimir a escolha individual, retirado por decisão de Estado."},
 "Donnie Darko":{
   capa:"donnie-darko",
   capaCred:"Capa de referência · DarkSide, 2016",
   autoria:"Richard Kelly",
   genero:"Roteiro",
   sinopse:"O roteiro do filme de 2001 sobre um adolescente que, depois de escapar de um acidente, passa a ter visões de um coelho que anuncia o fim do mundo."},
 "Coração Satânico":{
   capa:"coracao-satanico",
   capaCred:"Capa de referência · DarkSide, 2017",
   autoria:"William Hjortsberg",
   ano:1978,
   genero:"Romance policial",
   sinopse:"Um detetive de Nova York é contratado para achar um cantor desaparecido e descobre que o cliente tem planos para a alma de alguém."},
 "Exorcismo":{
   capa:"exorcismo",
   capaCred:"Capa de referência · DarkSide, 2016",
   autoria:"Thomas B. Allen",
   ano:1993,
   genero:"Não ficção",
   sinopse:"Reconstrução jornalística do caso de 1949 que inspirou O exorcista, a partir do diário de um dos padres envolvidos."},
 "Ed & Lorraine Warren: demonologistas — arquivos sobrenaturais":{
   capa:"demonologistas",
   capaCred:"Capa de referência · DarkSide, 2016",
   autoria:"Gerald Brittle",
   ano:1980,
   genero:"Não ficção",
   sinopse:"Relatos do casal de investigadores paranormais cujos casos viraram a série de filmes Invocação do Mal."},
 "O diário do diabo: os segredos de Alfred Rosenberg, o maior intelectual do nazismo":{
   capa:"diario-do-diabo",
   capaCred:"Capa de referência · Record, 2017",
   autoria:"Robert K. Wittman e David Kinney",
   ano:2016,
   genero:"Não ficção, história",
   sinopse:"A partir de diários desaparecidos por décadas, reconstrói a trajetória do ideólogo racial do nazismo, condenado em Nuremberg.",
   nota:"Livro crítico ao nazismo, retirado sob a mesma ordem que atingiu obras de terror."},
 "A química entre nós":{
   capa:"quimica-entre-nos",
   capaCred:"Capa de referência · Best Seller, 2012",
   autoria:"Larry Young e Brian Alexander",
   ano:2012,
   genero:"Não ficção",
   sinopse:"Um neurocientista e um jornalista investigam a base biológica do desejo, do amor e do vínculo humano.",
   nota:"Obra de divulgação científica sobre a neurobiologia do vínculo, assinada por um neurocientista e um jornalista, guardada na mesma ordem que livros de terror."},
 "Os 13 porquês":{
   capa:"os-13-porques",
   capaCred:"Capa de referência · Ática, 2009",
   autoria:"Jay Asher",
   ano:2007,
   genero:"Juvenil",
   sinopse:"Uma adolescente deixa treze fitas explicando as razões que a levaram ao suicídio, endereçadas a quem participou de cada uma.",
   nota:"Único título da lista de SC cujo tema central é saúde mental adolescente."},
 "Macunaíma":{
   autoria:"Mário de Andrade",
   capa:"macunaima",
   ano:1928,
   genero:"Rapsódia",
   sinopse:"O herói sem nenhum caráter atravessa um Brasil de mitos, cidades e línguas sobrepostas, no livro que fundou boa parte do modernismo brasileiro.",
   nota:"Estava na lista de Rondônia. O secretário de Educação declarou à imprensa que “Macunaíma é filme e o escambau”."},
 "Memórias póstumas de Brás Cubas":{
   autoria:"Machado de Assis",
   capa:"memorias-postumas",
   ano:1881,
   genero:"Romance",
   sinopse:"Um defunto autor narra a própria vida com ironia, do leito de morte para trás, inaugurando o realismo machadiano.",
   nota:"Leitura obrigatória em vestibulares, listada como “conteúdo inadequado às crianças e adolescentes”."},
 "Os Sertões da Luta":{
   autoria:"Euclides da Cunha",
   ano:1902,
   genero:"Não ficção",
   sinopse:"O relato de Euclides da Cunha sobre a Guerra de Canudos e a destruição do arraial pelo Exército, um dos livros fundadores do pensamento social brasileiro."},
 "O castelo":{
   capa:"o-castelo",
   capaCred:"Capa de referência · Companhia das Letras, 2008",
   autoria:"Franz Kafka",
   ano:1926,
   genero:"Romance",
   sinopse:"Um agrimensor tenta chegar ao castelo que o contratou e esbarra numa burocracia que nunca se explica nem se deixa alcançar."},
 "Contos de terror, de mistério e de morte":{
   capa:"contos-de-terror",
   capaCred:"Capa de referência · Nova Fronteira, 2017",
   autoria:"Edgar Allan Poe",
   genero:"Contos",
   sinopse:"Reunião dos contos de Poe que fundaram a literatura de horror psicológico moderna."},
 "A vida como ela é":{
   autoria:"Nelson Rodrigues",
   genero:"Crônicas",
   sinopse:"Crônicas do cotidiano carioca, publicadas originalmente em jornal, sobre traição, desejo e hipocrisia de classe média."},
 "Beijo no asfalto":{
   capa:"beijo-no-asfalto",
   capaCred:"Capa de referência · Nova Fronteira, 2021",
   autoria:"Nelson Rodrigues",
   ano:1961,
   genero:"Teatro",
   sinopse:"Um homem beija um desconhecido atropelado, e a imprensa transforma o gesto em escândalo que destrói sua vida.",
   nota:"Peça sobre linchamento moral fabricado pela imprensa."},
 "Obras de Rubem Fonseca (19 itens; 18 títulos distintos)":{
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
   legenda:"Obra completa, sem lista",
   autoria:"Rubem Alves",
   conjunto:true,
   nota:"O memorando determinava, em nota de rodapé, que todos os livros do autor fossem recolhidos. Educador e teólogo, é considerado um dos principais pedagogos brasileiros ao lado de Paulo Freire."},
 "Relação do Adendo 10053329 (43 itens; 42 títulos distintos)":{
   legenda:"Registro documental agrupado",
   autoria:"Vários, entre eles Caio Fernando Abreu, Carlos Heitor Cony e Ferreira Gullar",
   conjunto:true,
   nota:"Registro de conjunto documental, não de uma obra literária. O Adendo ID 10053329 contém 43 linhas numeradas e 42 títulos distintos, pois O Seminarista aparece duas vezes. Este conjunto reúne os 17 títulos distintos que não têm ficha individual nem pertencem ao conjunto de Rubem Fonseca ou aos sete registros individualizados: O Melhor de Caio Fernando Abreu — Contos e Crônicas (Caio Fernando Abreu); Poemas Escolhidos (Ferreira Gullar); A Volta por Cima (Carlos Heitor Cony); Mar de Histórias — todos os volumes (Aurélio Buarque de Holanda Ferreira); O Irmão que tu me Deste (Carlos Heitor Cony); A Menina de Cá (Carlos Nascimento Silva); Guia Millôr da História do Brasil (Ivan Rubino Fernandes); O Ventre (Carlos Heitor Cony); Rosa Vegetal de Sangue (Carlos Heitor Cony); O Mistério da Moto de Cristal (Ana Lee e Carlos Heitor Cony); Estrangeira (Sonia Rodrigues); O Melhor de Nelson Rodrigues (Nelson Rodrigues); 13 dos Melhores Contos de Amor (Rosa Amanda Strausz); Mil e Uma Noites (Carlos Heitor Cony); Vestido de Noiva — graphic novel (autoria não indicada na relação); O Ato e o Fato (Carlos Heitor Cony); O Harém das Bananeiras (Carlos Heitor Cony). A instrução sobre todos os livros de Rubem Alves aparece fora da tabela e é registrada separadamente em EL-023. A transcrição normaliza erros evidentes de grafia do documento (Gular/Gullar, Hitor/Heitor, Ruben/Rubem e Alfalto/Asfalto); a primeira linha aparece truncada no PDF como “O Melhor De” e foi completada com base na relação publicada pela Folha."},
 "Anúncio de descarte de 5.165 exemplares classificados como de “temática alheia à negra”":{
   legenda:"5.165 exemplares",
   autoria:"Vários, entre eles Karl Marx, Max Weber, Eric Hobsbawm, Celso Furtado, Caio Prado Jr. e Machado de Assis",
   conjunto:true,
   nota:"O relatório classificou 5.165 exemplares do acervo, perto de metade do total, como de temática alheia à negra. O Conselho Federal de Biblioteconomia apontou que o relatório que embasou o expurgo não constitui política de desenvolvimento de coleções e foi feito sem bibliotecários."},
 "Segregação de cerca de 300 livros no chamado “Acervo da Vergonha”":{
   legenda:"Cerca de 300 livros",
   autoria:"Vários, entre eles Antonio Gramsci, Marilena Chauí, Simone de Beauvoir, Karl Marx e Celso Furtado",
   conjunto:true,
   nota:"Resposta institucional à decisão judicial: impedido de descartar, o órgão isolou as obras em sala própria, o que o catálogo classifica como ocultação ou restrição de acesso."},
 "O menino marrom":{
   autoria:"Ziraldo",
   editora:"Melhoramentos",
   capa:"menino-marrom",
   ano:1986,
   genero:"Infantil",
   sinopse:"A amizade entre um menino marrom e um menino cor-de-rosa, e as perguntas dos dois sobre cor, diferença e preconceito.",
   nota:"Clássico de Ziraldo sobre racismo para crianças, suspenso por “conteúdo agressivo” e devolvido por decisão judicial."},
 "Meninas sonhadoras, mulheres cientistas":{
   autoria:"Flávia Martins de Carvalho",
   editora:"Mostarda",
   capa:"meninas-sonhadoras",
   genero:"Infantojuvenil, não ficção",
   sinopse:"Trajetórias de mulheres brasileiras na pesquisa e na vida pública, escrito por uma juíza do TJSP.",
   nota:"Recolhido depois que um vereador criticou a presença de Marielle Franco e Débora Diniz entre as retratadas. Dois anos depois, a Justiça chamou a retirada de censura."},
 "Eu receberia as piores notícias de seus lindos lábios":{
   autoria:"Marçal Aquino",
   editora:"Companhia das Letras",
   capa:"piores-noticias",
   ano:2005,
   genero:"Romance",
   sinopse:"Num garimpo do Pará, um fotógrafo se envolve com a mulher de um pastor. O desejo e a violência dividem o mesmo território.",
   nota:"Saiu da lista de leituras do vestibular, o que o catálogo registra como exclusão de lista de leitura. A decisão veio dias depois de um deputado chamar o livro de pornográfico em vídeo."},
 "A mamãe vai ter um bebê":{
   genero:"Infantil",
   nota:"Livro de educação sexual para crianças pequenas. A lei aprovada em seguida pela Câmara de Londrina permite explicação científica sobre reprodução, que é o assunto do livro."},
 "A bolsa amarela":{
   capa:"bolsa-amarela",
   capaCred:"Capa de referência · Casa Lygia Bojunga, 2013",
   autoria:"Lygia Bojunga",
   ano:1976,
   genero:"Infantojuvenil",
   sinopse:"Raquel esconde numa bolsa amarela três vontades que não cabem em casa: crescer, ter nascido menino e escrever.",
   nota:"Clássico de Lygia Bojunga, primeira autora fora da Europa e dos EUA a receber o Prêmio Hans Christian Andersen, em 1982."},
 "Pipoca e Picolé":{
   autoria:"Adriana Lisboa",
   editora:"Elo",
   genero:"Infantil",
   sinopse:"A menina Pipoca e o cachorro Picolé numa família com um pai e duas mães.",
   nota:"Comprado pela própria prefeitura um ano antes, por R$ 1,2 milhão, e retirado das escolas pela gestão seguinte."},
 "Veto à lista de doze livros do projeto Remição em Rede":{
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
 "RS-2024":{
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
     resposta:"O MPF registrou que a solicitação verbal foi suspensa no mesmo dia, que exemplares recolhidos foram devolvidos às escolas e que o recolhimento não se concretizou. A Seduc abriu sindicância; o MP-RO instaurou procedimento e emitiu recomendação, acatada pela Secretaria. O inquérito civil do MPF foi arquivado e o arquivamento homologado em 2021."
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
};

const FONTES = {
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
const SITUACOES = ["Em vigor","Revertido","Sem efeito","Em aberto"];
const EIXOS = ["Cultura afro-brasileira","Sexualidade e gênero","Sobrenatural e mágico",
  "Política e ideologia","Religião","Linguagem e palavrão","Violência","Outro"];
/* data da última revisão do catálogo (AAAA-MM-DD); aparece no rodapé */

/* Lacunas: o que falta apurar em cada ato com pendência, o tipo de obstáculo e o caminho para fechar.
   Obstáculos vêm da lista fechada OBSTACULOS. O gerador recusa ato com pendência e sem lacuna cadastrada. */
const OBSTACULOS = ["Fonte única","Documento interno não publicado","Sigilo judicial","Cumprimento não confirmado","Lista de títulos incompleta","Responsável não identificado","Divergência entre fontes"];
const LACUNAS = {
 "MS-2024":{obstaculos:["Cumprimento não confirmado"], caminho:"Pedido via Lei de Acesso à Informação à Secretaria de Estado de Educação de Mato Grosso do Sul sobre a devolução dos exemplares às escolas."},
 "SC-2023":{obstaculos:["Documento interno não publicado","Cumprimento não confirmado"], caminho:"Pedido via Lei de Acesso à Informação à Secretaria de Estado da Educação de Santa Catarina da íntegra e do número do ofício circular, da lista de escolas destinatárias e dos registros de execução e eventual devolução das nove obras."},
 "SC-2024":{obstaculos:["Fonte única","Documento interno não publicado"], caminho:"Pedido via Lei de Acesso à Informação à Secretaria de Estado da Educação de Santa Catarina do comunicado de revisão de acervo e da lista de unidades que receberam os exemplares."},
 "RO-2020":{obstaculos:["Documento interno não publicado"], caminho:"A cópia pública do Adendo já foi localizada e reconciliada. A busca em fontes abertas não encontrou a íntegra do processo SEI 0029.051300/2020-91, o resultado da sindicância ou a recomendação integral do MP-RO. Se esses documentos não estiverem publicamente disponíveis, manter a lacuna explicitada, sem presumir o conteúdo ou o desfecho."},
 "PALM-2021-06":{obstaculos:["Documento interno não publicado","Divergência entre fontes"], caminho:"Manter a divergência das versões do inventário explicitada; buscar em fontes públicas a relação individual dos 5.165 itens e documentos sobre sua destinação. Sem lista ou prova de destino, preservar a lacuna sem presumir descarte."},
 "PALM-2021-08":{obstaculos:["Documento interno não publicado","Lista de títulos incompleta"], caminho:"Pedido via Fala.BR à Fundação Cultural Palmares do inventário da seção separada e de registros sobre o acesso a esse acervo."},
 "MG-2024":{obstaculos:["Responsável não identificado"], caminho:"Pedido via Lei de Acesso à Informação à Prefeitura de Conselheiro Lafaiete do ato de suspensão; consulta processual ao Tribunal de Justiça de Minas Gerais sobre o trânsito em julgado."},
 "SJC-2024":{obstaculos:["Sigilo judicial","Cumprimento não confirmado"], caminho:"Pedido via Lei de Acesso à Informação à Prefeitura de São José dos Campos sobre a devolução dos exemplares às escolas. A sentença tramita em segredo de Justiça e fica fora do alcance desse caminho."},
 "UNIRV-2023":{obstaculos:["Responsável não identificado"], caminho:"Pedido via Lei de Acesso à Informação à Universidade de Rio Verde da ata ou do despacho que excluiu a obra da lista do vestibular."},
 "LON-2024":{obstaculos:["Documento interno não publicado","Cumprimento não confirmado"], caminho:"Pedido via Lei de Acesso à Informação à Prefeitura de Londrina da resposta ao requerimento; consulta ao sistema da Câmara Municipal pelo texto do requerimento."},
 "DF-2026":{obstaculos:["Documento interno não publicado"], caminho:"Pedido via Lei de Acesso à Informação ao Governo do Distrito Federal, por meio do Corpo de Bombeiros Militar, que administra o colégio, da nota oficial integral."},
 "TAU-2025":{obstaculos:["Documento interno não publicado","Cumprimento não confirmado"], caminho:"Pedido via Lei de Acesso à Informação à Prefeitura de Taubaté do parecer técnico e da lista de escolas que receberam os exemplares; consulta à Câmara Municipal pelo requerimento."},
 "FUNAP-2020":{obstaculos:["Documento interno não publicado","Cumprimento não confirmado","Divergência entre fontes"], caminho:"Pedido via Lei de Acesso à Informação à Funap, do governo de São Paulo, da mensagem de 3 de dezembro de 2019, da ata de 13 de fevereiro de 2020 e do registro de envio dos exemplares às unidades."},
};

const ATUALIZADO = "2026-11-06";

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


/* ---------- AGENTES ----------
   Pessoas e instituições com papel documentado nas fontes já cadastradas.
   Pessoas aparecem só pelo papel que exerceram num ato, nunca por dados pessoais. */
const AGENTES = {
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
 {ato:"MS-2024", agente:"rinaldo-modesto", papel:"Pedido", cargo:"deputado estadual (Podemos)", nota:"Pediu a retirada na Assembleia Legislativa."},
 {ato:"MS-2024", agente:"eduardo-riedel", papel:"Decisão", cargo:"governador de Mato Grosso do Sul", atribuido:true, nota:"A Secretaria informou à CartaCapital que o recolhimento atendia a determinação do governador; o ato formal não está identificado."},
 {ato:"MS-2024", agente:"sed-ms", papel:"Execução"},
 {ato:"MS-2024", agente:"sed-ms", papel:"Resposta ou reversão", nota:"Anunciou a devolução em 23 de abril de 2024."},
 {ato:"SC-2024", agente:"sed-sc", papel:"Decisão", nota:"A pessoa responsável não está identificada nas fontes."},
 {ato:"SC-2023", agente:"sed-sc", papel:"Decisão", nota:"A CRE de Florianópolis foi identificada por cruzamento dos atos de designação dos dois signatários publicados no Diário Oficial; a íntegra do ofício circular e os registros de execução ainda não foram localizados."},
 {ato:"SC-2023", agente:"waldemar-ronssem-junior", papel:"Assinatura", cargo:"supervisor regional de Educação"},
 {ato:"SC-2023", agente:"anelise-dos-santos-de-medeiros", papel:"Assinatura", cargo:"integradora regional"},
 {ato:"SC-2023", agente:"leonel-camasao", papel:"Denúncia ou fiscalização", cargo:"suplente de vereador (PSOL)", nota:"Levou o caso ao Ministério Público."},
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
 {ato:"SJC-2024", agente:"thomaz-henrique", papel:"Pressão", cargo:"vereador (PL)"},
 {ato:"SJC-2024", agente:"seme-sjc", papel:"Decisão", nota:"A autoridade individual que formalizou a retirada não foi identificada."},
 {ato:"UNIRV-2023", agente:"gustavo-gayer", papel:"Pressão", cargo:"deputado federal (PL-GO)", nota:"Publicou vídeo chamando o livro de pornográfico."},
 {ato:"UNIRV-2023", agente:"unirv", papel:"Decisão", nota:"A nota oficial não identifica a pessoa responsável."},
 {ato:"LON-2024", agente:"jessica-ramos-moreno", papel:"Pedido", cargo:"vereadora (PP)"},
 {ato:"LON-2024", agente:"sme-londrina", papel:"Destinatário do pedido", nota:"Resposta oficial não localizada."},
 {ato:"DF-2026", agente:"colegio-militar-dom-pedro-ii", papel:"Resposta ou reversão", nota:"Afirmou que a atividade atendia aos objetivos pedagógicos."},
 {ato:"TAU-2025", agente:"zelinda-pastora", papel:"Pedido", cargo:"vereadora (PRD)", nota:"Disse ter pedido o recolhimento diretamente ao secretário."},
 {ato:"TAU-2025", agente:"helcio-carvalho-dos-santos", papel:"Destinatário do pedido", cargo:"secretário municipal de Educação", nota:"Ordem escrita e signatário formal não localizados."},
 {ato:"TAU-2025", agente:"seme-taubate", papel:"Decisão"},
 {ato:"TAU-2025", agente:"seme-taubate", papel:"Resposta ou reversão", nota:"Anunciou em julho de 2026 a retomada do uso do livro."},
 {ato:"FUNAP-2020", agente:"henrique-pereira-de-souza-neto", papel:"Decisão", cargo:"diretor-executivo da Funap", atribuido:true, nota:"Decisão de riscar a lista atribuída a ele pela articuladora do projeto."},
 {ato:"FUNAP-2020", agente:"reginaldo-caetano-da-silva", papel:"Pressão", cargo:"superintendente da Diretoria de Atendimento e Promoção Humana", nota:"Enviou a mensagem que dizia que um título não atendia às expectativas da gestão."},
 {ato:"FUNAP-2020", agente:"funap", papel:"Resposta ou reversão", nota:"Determinou a inclusão da lista original em 13 de fevereiro de 2020."},
 {ato:"LIM-2019", agente:"clayton-silva", papel:"Pressão", cargo:"vereador (PSC)", nota:"Requerimento de informações; não pediu formalmente a retirada."},
 {ato:"LIM-2019", agente:"sme-limeira", papel:"Resposta ou reversão", nota:"Defendeu a obra e manteve o projeto de leitura."},
];

/* ---------- montagem ----------
   As páginas leem os campos do ato e da obra diretamente em cada registro.
   Esta etapa copia esses campos para o registro. Não edite aqui; edite ATOS e LIVROS. */
const CAMPOS_DO_ATO = ["data","fim","uf","cidade","tipo","rede","governo","quem","pressao"];
const CAMPOS_DA_OBRA = ["autoria","editora","pnld","capa","capaCred","conjunto"];
CASOS.forEach(c=>{
  const A = ATOS[c.ato] || {}, L = LIVROS[c.obra] || {};
  CAMPOS_DO_ATO.forEach(k=>{ if(c[k]===undefined && A[k]!==undefined) c[k]=A[k]; });
  CAMPOS_DA_OBRA.forEach(k=>{ if(c[k]===undefined && L[k]!==undefined) c[k]=L[k]; });
  if(c.titulo===undefined) c.titulo = c.obra;
  if(c.cidade===undefined) c.cidade = "";
});
const RESPONSABILIDADES = Object.fromEntries(CASOS.map(c=>[c.id, (ATOS[c.ato]||{}).papeis || {}]));
const DOCUMENTOS_ATOS = Object.fromEntries(CASOS.map(c=>[c.id, (ATOS[c.ato]||{}).documento || ""]));
