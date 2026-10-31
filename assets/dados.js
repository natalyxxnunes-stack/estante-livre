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
 {id:"EL-004", ato:"MS-2024", obra:"O avesso da pele", alegacao:"“Expressões impróprias” para menores de 18 anos · termo usado pelo deputado estadual Rinaldo Modesto ao cobrar a retirada", eixo:"Linguagem e palavrão", modalidade:"Retirada", estagio:"Execução comprovada", situacao:"Revertido", desfecho:"Revertido", verificado:"Sim", fontes:["gp-estados","cgn-volta","cgn-alems","cc-ms-avesso","rinaldo-alms-2024","rinaldo-eleicao-2022"], pendencia:"Confirmar se o livro chegou de volta às 75 escolas", nota:"Na Assembleia, a crítica uniu deputados de partidos opostos: Rinaldo Modesto (Podemos) pediu a retirada; Lia Nogueira (PSDB) chamou o livro de “nojento” e Pedro Kemp (PT) disse ter “muitas reservas” sobre o uso no ensino médio. O governador Eduardo Riedel mandou recolher os exemplares das 75 escolas da rede que tinham recebido o livro. Em 23 de abril de 2024 a Secretaria de Educação anunciou a devolução às bibliotecas, “com as orientações pedagógicas quanto à indicação de uso”, sem detalhar quais."},
 {id:"EL-005", ato:"SC-2024", obra:"O avesso da pele", alegacao:"A Secretaria afirmou que recolheu a obra das bibliotecas para análise pedagógica do livro e de todo o acervo escolar, considerando faixa etária e projeto político-pedagógico", eixo:"Sexualidade e gênero", modalidade:"Retirada", estagio:"Decisão ou ordem", situacao:"Em aberto", desfecho:"Ordem de recolhimento confirmada pela própria Seduc; devolução e acesso posterior não documentados", verificado:"Sim", fontes:["alesc-ind-sc-0154","alesc-oficio-gp-233","alesc-info-sc-304","alesc-oficio-sc-1017","gp-estados","alesc-sergio-motta"], pendencia:"Obter a íntegra da ordem operacional enviada às escolas, os registros de execução e a informação oficial sobre devolução/disponibilidade dos exemplares. A Indicação IND/0154/2024 de Sérgio Motta antecede a informação técnica da Seduc, mas a documentação não prova que tenha causado a orientação administrativa.", nota:"A Informação nº 304/2024/SED/DIEN, de 23 de abril, afirma que a própria Secretaria orientou o recolhimento de O avesso da pele das bibliotecas escolares para análise pedagógica do livro e do acervo. O documento não confirma redistribuição efetiva para EJA ou CEDUPs, nem comprova a execução em cada escola. Separadamente, a Alesc registra que o deputado Sérgio Motta (Republicanos) apresentou, em 6 de março, indicação sugerindo a retirada da obra. A relação causal entre a indicação e a orientação da Seduc não está demonstrada."},
 {id:"EL-006", ato:"SC-2023", obra:"It: A coisa", alegacao:"Sem justificativa no ofício · determinava armazenar “em local não acessível à comunidade escolar”. A secretaria alegou depois “redistribuição por faixa etária”", eixo:"Sobrenatural e mágico", modalidade:"Ocultação ou restrição de acesso", estagio:"Decisão ou ordem", situacao:"Em aberto", desfecho:"Em aberto", verificado:"Sim", fontes:["cc-sc","gp-sc","p360-sc","cnn-sc","cf-sc","folha-sc"], pendencia:"Identificar a coordenadoria regional", nota:"Ofício assinado pelo supervisor regional de educação Waldemar Ronssem Júnior e pela integradora regional Anelise dos Santos de Medeiros: “Determinamos que as obras listadas abaixo sejam retiradas de circulação”. O suplente de vereador Leonel Camasão (PSOL) levou o caso ao Ministério Público estadual."},
 {id:"EL-007", ato:"SC-2023", obra:"Laranja Mecânica", alegacao:"Sem justificativa no ofício · determinava armazenar “em local não acessível à comunidade escolar”. A secretaria alegou depois “redistribuição por faixa etária”", eixo:"Violência", modalidade:"Ocultação ou restrição de acesso", estagio:"Decisão ou ordem", situacao:"Em aberto", desfecho:"Em aberto", verificado:"Sim", fontes:["cc-sc","gp-sc","p360-sc","cnn-sc","cf-sc","folha-sc"], pendencia:"Identificar a coordenadoria regional", nota:"Ofício assinado pelo supervisor regional de educação Waldemar Ronssem Júnior e pela integradora regional Anelise dos Santos de Medeiros: “Determinamos que as obras listadas abaixo sejam retiradas de circulação”. O suplente de vereador Leonel Camasão (PSOL) levou o caso ao Ministério Público estadual."},
 {id:"EL-008", ato:"SC-2023", obra:"Donnie Darko", alegacao:"Sem justificativa no ofício · determinava armazenar “em local não acessível à comunidade escolar”. A secretaria alegou depois “redistribuição por faixa etária”", eixo:"Sobrenatural e mágico", modalidade:"Ocultação ou restrição de acesso", estagio:"Decisão ou ordem", situacao:"Em aberto", desfecho:"Em aberto", verificado:"Sim", fontes:["cc-sc","gp-sc","p360-sc","cnn-sc","cf-sc","folha-sc"], pendencia:"Identificar a coordenadoria regional", nota:"Ofício assinado pelo supervisor regional de educação Waldemar Ronssem Júnior e pela integradora regional Anelise dos Santos de Medeiros: “Determinamos que as obras listadas abaixo sejam retiradas de circulação”. O suplente de vereador Leonel Camasão (PSOL) levou o caso ao Ministério Público estadual."},
 {id:"EL-009", ato:"SC-2023", obra:"Coração Satânico", alegacao:"Sem justificativa no ofício · determinava armazenar “em local não acessível à comunidade escolar”. A secretaria alegou depois “redistribuição por faixa etária”", eixo:"Sobrenatural e mágico", modalidade:"Ocultação ou restrição de acesso", estagio:"Decisão ou ordem", situacao:"Em aberto", desfecho:"Em aberto", verificado:"Sim", fontes:["cc-sc","gp-sc","p360-sc","cnn-sc","cf-sc","folha-sc"], pendencia:"Identificar a coordenadoria regional", nota:"Ofício assinado pelo supervisor regional de educação Waldemar Ronssem Júnior e pela integradora regional Anelise dos Santos de Medeiros: “Determinamos que as obras listadas abaixo sejam retiradas de circulação”. O suplente de vereador Leonel Camasão (PSOL) levou o caso ao Ministério Público estadual."},
 {id:"EL-010", ato:"SC-2023", obra:"Exorcismo", alegacao:"Sem justificativa no ofício · determinava armazenar “em local não acessível à comunidade escolar”. A secretaria alegou depois “redistribuição por faixa etária”", eixo:"Sobrenatural e mágico", modalidade:"Ocultação ou restrição de acesso", estagio:"Decisão ou ordem", situacao:"Em aberto", desfecho:"Em aberto", verificado:"Sim", fontes:["cc-sc","gp-sc","p360-sc","cnn-sc","cf-sc","folha-sc"], pendencia:"Identificar a coordenadoria regional", nota:"Ofício assinado pelo supervisor regional de educação Waldemar Ronssem Júnior e pela integradora regional Anelise dos Santos de Medeiros: “Determinamos que as obras listadas abaixo sejam retiradas de circulação”. O suplente de vereador Leonel Camasão (PSOL) levou o caso ao Ministério Público estadual."},
 {id:"EL-011", ato:"SC-2023", obra:"Ed & Lorraine Warren: demonologistas — arquivos sobrenaturais", alegacao:"Sem justificativa no ofício · determinava armazenar “em local não acessível à comunidade escolar”. A secretaria alegou depois “redistribuição por faixa etária”", eixo:"Sobrenatural e mágico", modalidade:"Ocultação ou restrição de acesso", estagio:"Decisão ou ordem", situacao:"Em aberto", desfecho:"Em aberto", verificado:"Sim", fontes:["cc-sc","gp-sc","p360-sc","cnn-sc","cf-sc","folha-sc"], pendencia:"Identificar a coordenadoria regional", nota:"Ofício assinado pelo supervisor regional de educação Waldemar Ronssem Júnior e pela integradora regional Anelise dos Santos de Medeiros: “Determinamos que as obras listadas abaixo sejam retiradas de circulação”. O suplente de vereador Leonel Camasão (PSOL) levou o caso ao Ministério Público estadual."},
 {id:"EL-012", ato:"SC-2023", obra:"O diário do diabo: os segredos de Alfred Rosenberg, o maior intelectual do nazismo", alegacao:"Sem justificativa no ofício · determinava armazenar “em local não acessível à comunidade escolar”. A secretaria alegou depois “redistribuição por faixa etária”", eixo:"Política e ideologia", modalidade:"Ocultação ou restrição de acesso", estagio:"Decisão ou ordem", situacao:"Em aberto", desfecho:"Em aberto", verificado:"Sim", fontes:["cc-sc","gp-sc","p360-sc","cnn-sc","cf-sc","folha-sc"], pendencia:"Identificar a coordenadoria regional", nota:"Ofício assinado pelo supervisor regional de educação Waldemar Ronssem Júnior e pela integradora regional Anelise dos Santos de Medeiros: “Determinamos que as obras listadas abaixo sejam retiradas de circulação”. O suplente de vereador Leonel Camasão (PSOL) levou o caso ao Ministério Público estadual."},
 {id:"EL-013", ato:"SC-2023", obra:"A química entre nós", alegacao:"Sem justificativa no ofício · determinava armazenar “em local não acessível à comunidade escolar”. A secretaria alegou depois “redistribuição por faixa etária”", eixo:"Sexualidade e gênero", modalidade:"Ocultação ou restrição de acesso", estagio:"Decisão ou ordem", situacao:"Em aberto", desfecho:"Em aberto", verificado:"Sim", fontes:["cc-sc","gp-sc","p360-sc","cnn-sc","cf-sc","folha-sc"], pendencia:"Identificar a coordenadoria regional", nota:"Ofício assinado pelo supervisor regional de educação Waldemar Ronssem Júnior e pela integradora regional Anelise dos Santos de Medeiros: “Determinamos que as obras listadas abaixo sejam retiradas de circulação”. O suplente de vereador Leonel Camasão (PSOL) levou o caso ao Ministério Público estadual."},
 {id:"EL-014", ato:"SC-2023", obra:"Os 13 porquês", alegacao:"Sem justificativa no ofício · determinava armazenar “em local não acessível à comunidade escolar”. A secretaria alegou depois “redistribuição por faixa etária”", eixo:"Outro", modalidade:"Ocultação ou restrição de acesso", estagio:"Decisão ou ordem", situacao:"Em aberto", desfecho:"Em aberto", verificado:"Sim", fontes:["cc-sc","gp-sc","p360-sc","cnn-sc","cf-sc","folha-sc"], pendencia:"Identificar a coordenadoria regional", nota:"Ofício assinado pelo supervisor regional de educação Waldemar Ronssem Júnior e pela integradora regional Anelise dos Santos de Medeiros: “Determinamos que as obras listadas abaixo sejam retiradas de circulação”. O suplente de vereador Leonel Camasão (PSOL) levou o caso ao Ministério Público estadual."},
 {id:"EL-015", ato:"RO-2020", obra:"Macunaíma", alegacao:"“Conteúdos inadequados às crianças e adolescentes”", eixo:"Política e ideologia", modalidade:"Retirada", estagio:"Decisão ou ordem", situacao:"Revertido", desfecho:"Ordem suspensa no mesmo dia; exemplares que chegaram a ser recolhidos foram devolvidos, segundo o MPF", verificado:"Parcialmente", fontes:["gp-ro","pn-ro","publico-ro","cc-ro","dp-ro","estudo-ro","mpf-ro-arquivamento"], pendencia:"Localizar a íntegra do processo SEI 0029.051300/2020-91, o resultado da sindicância administrativa da Seduc e a íntegra da recomendação do MP-RO. O MPF homologou o arquivamento do inquérito civil em 2021; isso não substitui a apuração administrativa estadual.", nota:"O Memorando-Circular nº 4/2020/SEDUC-DGE traz o nome do secretário Suamy Vivecananda no fecho; o registro eletrônico identifica Irany de Oliveira Lima Morais, diretora-geral de Educação, como signatária digital. A Seduc negou ter ordenado o recolhimento e afirmou que o processo foi encerrado antes de tramitar para escolas ou órgãos externos. Em decisão publicada no Diário do MPF em 30 de agosto de 2021, o órgão registrou que houve solicitação verbal de recolhimento, suspensa no mesmo dia, e que os livros que chegaram a ser recolhidos foram devolvidos às escolas. O MPF concluiu que o recolhimento não se concretizou, registrou a abertura de sindicância pela Seduc e a atuação do MP-RO, cuja recomendação foi acatada; o inquérito civil foi arquivado, com homologação do arquivamento pela Câmara competente. Um artigo acadêmico publicado em 2024 reproduz imagem do memorando e da relação de títulos. OAB-RO e Academia Brasileira de Letras enviaram notas de repúdio."},
 {id:"EL-016", ato:"RO-2020", obra:"Memórias póstumas de Brás Cubas", alegacao:"“Conteúdos inadequados às crianças e adolescentes”", eixo:"Política e ideologia", modalidade:"Retirada", estagio:"Decisão ou ordem", situacao:"Revertido", desfecho:"Ordem suspensa no mesmo dia; exemplares que chegaram a ser recolhidos foram devolvidos, segundo o MPF", verificado:"Parcialmente", fontes:["gp-ro","pn-ro","publico-ro","cc-ro","dp-ro","estudo-ro","mpf-ro-arquivamento"], pendencia:"Localizar a íntegra do processo SEI 0029.051300/2020-91, o resultado da sindicância administrativa da Seduc e a íntegra da recomendação do MP-RO. O MPF homologou o arquivamento do inquérito civil em 2021; isso não substitui a apuração administrativa estadual.", nota:"O Memorando-Circular nº 4/2020/SEDUC-DGE traz o nome do secretário Suamy Vivecananda no fecho; o registro eletrônico identifica Irany de Oliveira Lima Morais, diretora-geral de Educação, como signatária digital. A Seduc negou ter ordenado o recolhimento e afirmou que o processo foi encerrado antes de tramitar para escolas ou órgãos externos. Em decisão publicada no Diário do MPF em 30 de agosto de 2021, o órgão registrou que houve solicitação verbal de recolhimento, suspensa no mesmo dia, e que os livros que chegaram a ser recolhidos foram devolvidos às escolas. O MPF concluiu que o recolhimento não se concretizou, registrou a abertura de sindicância pela Seduc e a atuação do MP-RO, cuja recomendação foi acatada; o inquérito civil foi arquivado, com homologação do arquivamento pela Câmara competente. Um artigo acadêmico publicado em 2024 reproduz imagem do memorando e da relação de títulos. OAB-RO e Academia Brasileira de Letras enviaram notas de repúdio."},
 {id:"EL-017", ato:"RO-2020", obra:"Os sertões", alegacao:"“Conteúdos inadequados às crianças e adolescentes”", eixo:"Política e ideologia", modalidade:"Retirada", estagio:"Decisão ou ordem", situacao:"Revertido", desfecho:"Ordem suspensa no mesmo dia; exemplares que chegaram a ser recolhidos foram devolvidos, segundo o MPF", verificado:"Parcialmente", fontes:["gp-ro","pn-ro","publico-ro","cc-ro","dp-ro","estudo-ro","mpf-ro-arquivamento"], pendencia:"Localizar a íntegra do processo SEI 0029.051300/2020-91, o resultado da sindicância administrativa da Seduc e a íntegra da recomendação do MP-RO. O MPF homologou o arquivamento do inquérito civil em 2021; isso não substitui a apuração administrativa estadual.", nota:"O Memorando-Circular nº 4/2020/SEDUC-DGE traz o nome do secretário Suamy Vivecananda no fecho; o registro eletrônico identifica Irany de Oliveira Lima Morais, diretora-geral de Educação, como signatária digital. A Seduc negou ter ordenado o recolhimento e afirmou que o processo foi encerrado antes de tramitar para escolas ou órgãos externos. Em decisão publicada no Diário do MPF em 30 de agosto de 2021, o órgão registrou que houve solicitação verbal de recolhimento, suspensa no mesmo dia, e que os livros que chegaram a ser recolhidos foram devolvidos às escolas. O MPF concluiu que o recolhimento não se concretizou, registrou a abertura de sindicância pela Seduc e a atuação do MP-RO, cuja recomendação foi acatada; o inquérito civil foi arquivado, com homologação do arquivamento pela Câmara competente. Um artigo acadêmico publicado em 2024 reproduz imagem do memorando e da relação de títulos. OAB-RO e Academia Brasileira de Letras enviaram notas de repúdio."},
 {id:"EL-018", ato:"RO-2020", obra:"O castelo", alegacao:"“Conteúdos inadequados às crianças e adolescentes”", eixo:"Política e ideologia", modalidade:"Retirada", estagio:"Decisão ou ordem", situacao:"Revertido", desfecho:"Ordem suspensa no mesmo dia; exemplares que chegaram a ser recolhidos foram devolvidos, segundo o MPF", verificado:"Parcialmente", fontes:["gp-ro","pn-ro","publico-ro","cc-ro","dp-ro","estudo-ro","mpf-ro-arquivamento"], pendencia:"Localizar a íntegra do processo SEI 0029.051300/2020-91, o resultado da sindicância administrativa da Seduc e a íntegra da recomendação do MP-RO. O MPF homologou o arquivamento do inquérito civil em 2021; isso não substitui a apuração administrativa estadual.", nota:"O Memorando-Circular nº 4/2020/SEDUC-DGE traz o nome do secretário Suamy Vivecananda no fecho; o registro eletrônico identifica Irany de Oliveira Lima Morais, diretora-geral de Educação, como signatária digital. A Seduc negou ter ordenado o recolhimento e afirmou que o processo foi encerrado antes de tramitar para escolas ou órgãos externos. Em decisão publicada no Diário do MPF em 30 de agosto de 2021, o órgão registrou que houve solicitação verbal de recolhimento, suspensa no mesmo dia, e que os livros que chegaram a ser recolhidos foram devolvidos às escolas. O MPF concluiu que o recolhimento não se concretizou, registrou a abertura de sindicância pela Seduc e a atuação do MP-RO, cuja recomendação foi acatada; o inquérito civil foi arquivado, com homologação do arquivamento pela Câmara competente. Um artigo acadêmico publicado em 2024 reproduz imagem do memorando e da relação de títulos. OAB-RO e Academia Brasileira de Letras enviaram notas de repúdio."},
 {id:"EL-019", ato:"RO-2020", obra:"Contos de terror, de mistério e de morte", alegacao:"“Conteúdos inadequados às crianças e adolescentes”", eixo:"Violência", modalidade:"Retirada", estagio:"Decisão ou ordem", situacao:"Revertido", desfecho:"Ordem suspensa no mesmo dia; exemplares que chegaram a ser recolhidos foram devolvidos, segundo o MPF", verificado:"Parcialmente", fontes:["gp-ro","pn-ro","publico-ro","cc-ro","dp-ro","estudo-ro","mpf-ro-arquivamento"], pendencia:"Localizar a íntegra do processo SEI 0029.051300/2020-91, o resultado da sindicância administrativa da Seduc e a íntegra da recomendação do MP-RO. O MPF homologou o arquivamento do inquérito civil em 2021; isso não substitui a apuração administrativa estadual.", nota:"O Memorando-Circular nº 4/2020/SEDUC-DGE traz o nome do secretário Suamy Vivecananda no fecho; o registro eletrônico identifica Irany de Oliveira Lima Morais, diretora-geral de Educação, como signatária digital. A Seduc negou ter ordenado o recolhimento e afirmou que o processo foi encerrado antes de tramitar para escolas ou órgãos externos. Em decisão publicada no Diário do MPF em 30 de agosto de 2021, o órgão registrou que houve solicitação verbal de recolhimento, suspensa no mesmo dia, e que os livros que chegaram a ser recolhidos foram devolvidos às escolas. O MPF concluiu que o recolhimento não se concretizou, registrou a abertura de sindicância pela Seduc e a atuação do MP-RO, cuja recomendação foi acatada; o inquérito civil foi arquivado, com homologação do arquivamento pela Câmara competente. Um artigo acadêmico publicado em 2024 reproduz imagem do memorando e da relação de títulos. OAB-RO e Academia Brasileira de Letras enviaram notas de repúdio."},
 {id:"EL-020", ato:"RO-2020", obra:"A vida como ela é", alegacao:"“Conteúdos inadequados às crianças e adolescentes”", eixo:"Sexualidade e gênero", modalidade:"Retirada", estagio:"Decisão ou ordem", situacao:"Revertido", desfecho:"Ordem suspensa no mesmo dia; exemplares que chegaram a ser recolhidos foram devolvidos, segundo o MPF", verificado:"Parcialmente", fontes:["gp-ro","pn-ro","publico-ro","cc-ro","dp-ro","estudo-ro","mpf-ro-arquivamento"], pendencia:"Localizar a íntegra do processo SEI 0029.051300/2020-91, o resultado da sindicância administrativa da Seduc e a íntegra da recomendação do MP-RO. O MPF homologou o arquivamento do inquérito civil em 2021; isso não substitui a apuração administrativa estadual.", nota:"O Memorando-Circular nº 4/2020/SEDUC-DGE traz o nome do secretário Suamy Vivecananda no fecho; o registro eletrônico identifica Irany de Oliveira Lima Morais, diretora-geral de Educação, como signatária digital. A Seduc negou ter ordenado o recolhimento e afirmou que o processo foi encerrado antes de tramitar para escolas ou órgãos externos. Em decisão publicada no Diário do MPF em 30 de agosto de 2021, o órgão registrou que houve solicitação verbal de recolhimento, suspensa no mesmo dia, e que os livros que chegaram a ser recolhidos foram devolvidos às escolas. O MPF concluiu que o recolhimento não se concretizou, registrou a abertura de sindicância pela Seduc e a atuação do MP-RO, cuja recomendação foi acatada; o inquérito civil foi arquivado, com homologação do arquivamento pela Câmara competente. Um artigo acadêmico publicado em 2024 reproduz imagem do memorando e da relação de títulos. OAB-RO e Academia Brasileira de Letras enviaram notas de repúdio."},
 {id:"EL-021", ato:"RO-2020", obra:"Beijo no asfalto", alegacao:"“Conteúdos inadequados às crianças e adolescentes”", eixo:"Sexualidade e gênero", modalidade:"Retirada", estagio:"Decisão ou ordem", situacao:"Revertido", desfecho:"Ordem suspensa no mesmo dia; exemplares que chegaram a ser recolhidos foram devolvidos, segundo o MPF", verificado:"Parcialmente", fontes:["gp-ro","pn-ro","publico-ro","cc-ro","dp-ro","estudo-ro","mpf-ro-arquivamento"], pendencia:"Localizar a íntegra do processo SEI 0029.051300/2020-91, o resultado da sindicância administrativa da Seduc e a íntegra da recomendação do MP-RO. O MPF homologou o arquivamento do inquérito civil em 2021; isso não substitui a apuração administrativa estadual.", nota:"O Memorando-Circular nº 4/2020/SEDUC-DGE traz o nome do secretário Suamy Vivecananda no fecho; o registro eletrônico identifica Irany de Oliveira Lima Morais, diretora-geral de Educação, como signatária digital. A Seduc negou ter ordenado o recolhimento e afirmou que o processo foi encerrado antes de tramitar para escolas ou órgãos externos. Em decisão publicada no Diário do MPF em 30 de agosto de 2021, o órgão registrou que houve solicitação verbal de recolhimento, suspensa no mesmo dia, e que os livros que chegaram a ser recolhidos foram devolvidos às escolas. O MPF concluiu que o recolhimento não se concretizou, registrou a abertura de sindicância pela Seduc e a atuação do MP-RO, cuja recomendação foi acatada; o inquérito civil foi arquivado, com homologação do arquivamento pela Câmara competente. Um artigo acadêmico publicado em 2024 reproduz imagem do memorando e da relação de títulos. OAB-RO e Academia Brasileira de Letras enviaram notas de repúdio."},
 {id:"EL-022", ato:"RO-2020", obra:"Obra de Rubem Fonseca (19 títulos)", alegacao:"“Conteúdos inadequados às crianças e adolescentes”", eixo:"Violência", modalidade:"Retirada", estagio:"Decisão ou ordem", situacao:"Revertido", desfecho:"Ordem suspensa no mesmo dia; exemplares que chegaram a ser recolhidos foram devolvidos, segundo o MPF", verificado:"Parcialmente", fontes:["gp-ro","pn-ro","publico-ro","cc-ro","dp-ro","estudo-ro","mpf-ro-arquivamento"], pendencia:"Desmembrar nos 19 títulos", nota:"O Memorando-Circular nº 4/2020/SEDUC-DGE traz o nome do secretário Suamy Vivecananda no fecho; o registro eletrônico identifica Irany de Oliveira Lima Morais, diretora-geral de Educação, como signatária digital. A Seduc negou ter ordenado o recolhimento e afirmou que o processo foi encerrado antes de tramitar para escolas ou órgãos externos. Em decisão publicada no Diário do MPF em 30 de agosto de 2021, o órgão registrou que houve solicitação verbal de recolhimento, suspensa no mesmo dia, e que os livros que chegaram a ser recolhidos foram devolvidos às escolas. O MPF concluiu que o recolhimento não se concretizou, registrou a abertura de sindicância pela Seduc e a atuação do MP-RO, cuja recomendação foi acatada; o inquérito civil foi arquivado, com homologação do arquivamento pela Câmara competente. Um artigo acadêmico publicado em 2024 reproduz imagem do memorando e da relação de títulos. OAB-RO e Academia Brasileira de Letras enviaram notas de repúdio."},
 {id:"EL-023", ato:"RO-2020", obra:"Obra completa de Rubem Alves", alegacao:"“Conteúdos inadequados às crianças e adolescentes”", eixo:"Política e ideologia", modalidade:"Retirada", estagio:"Decisão ou ordem", situacao:"Revertido", desfecho:"Ordem suspensa no mesmo dia; exemplares que chegaram a ser recolhidos foram devolvidos, segundo o MPF", verificado:"Parcialmente", fontes:["gp-ro","pn-ro","publico-ro","cc-ro","dp-ro","estudo-ro","mpf-ro-arquivamento"], pendencia:"Sem relação de títulos", nota:"O Memorando-Circular nº 4/2020/SEDUC-DGE traz o nome do secretário Suamy Vivecananda no fecho; o registro eletrônico identifica Irany de Oliveira Lima Morais, diretora-geral de Educação, como signatária digital. A Seduc negou ter ordenado o recolhimento e afirmou que o processo foi encerrado antes de tramitar para escolas ou órgãos externos. Em decisão publicada no Diário do MPF em 30 de agosto de 2021, o órgão registrou que houve solicitação verbal de recolhimento, suspensa no mesmo dia, e que os livros que chegaram a ser recolhidos foram devolvidos às escolas. O MPF concluiu que o recolhimento não se concretizou, registrou a abertura de sindicância pela Seduc e a atuação do MP-RO, cuja recomendação foi acatada; o inquérito civil foi arquivado, com homologação do arquivamento pela Câmara competente. Um artigo acadêmico publicado em 2024 reproduz imagem do memorando e da relação de títulos. OAB-RO e Academia Brasileira de Letras enviaram notas de repúdio."},
 {id:"EL-024", ato:"RO-2020", obra:"Demais títulos da lista de Rondônia", alegacao:"“Conteúdos inadequados às crianças e adolescentes”", eixo:"Outro", modalidade:"Retirada", estagio:"Decisão ou ordem", situacao:"Revertido", desfecho:"Ordem suspensa no mesmo dia; exemplares que chegaram a ser recolhidos foram devolvidos, segundo o MPF", verificado:"Parcialmente", fontes:["gp-ro","pn-ro","publico-ro","cc-ro","dp-ro","estudo-ro","mpf-ro-arquivamento"], pendencia:"Obter o Adendo ID 10053329", nota:"O Memorando-Circular nº 4/2020/SEDUC-DGE traz o nome do secretário Suamy Vivecananda no fecho; o registro eletrônico identifica Irany de Oliveira Lima Morais, diretora-geral de Educação, como signatária digital. A Seduc negou ter ordenado o recolhimento e afirmou que o processo foi encerrado antes de tramitar para escolas ou órgãos externos. Em decisão publicada no Diário do MPF em 30 de agosto de 2021, o órgão registrou que houve solicitação verbal de recolhimento, suspensa no mesmo dia, e que os livros que chegaram a ser recolhidos foram devolvidos às escolas. O MPF concluiu que o recolhimento não se concretizou, registrou a abertura de sindicância pela Seduc e a atuação do MP-RO, cuja recomendação foi acatada; o inquérito civil foi arquivado, com homologação do arquivamento pela Câmara competente. Um artigo acadêmico publicado em 2024 reproduz imagem do memorando e da relação de títulos. OAB-RO e Academia Brasileira de Letras enviaram notas de repúdio."},
 {id:"EL-025", ato:"PALM-2021-06", obra:"Anúncio de descarte de 5.165 exemplares classificados como de “temática alheia à negra”", alegacao:"Relatório “Retrato do Acervo: três décadas de dominação marxista na Fundação Cultural Palmares” · classificação de 5.165 exemplares como de “temática alheia à negra”", eixo:"Política e ideologia", modalidade:"Descarte ou destruição", estagio:"Decisão ou ordem", situacao:"Em aberto", desfecho:"Destino final dos 5.165 exemplares não comprovado", verificado:"Parcialmente", fontes:["em-palmares","sbt-palm","gp-palmares","opovo-palm","palmares-inventario","palmares-politica","relatorio-palmares-original","unesp-palmares"], pendencia:"Conferir no relatório original e em seu anexo a divergência de total do acervo: 9.565 exemplares na reportagem contemporânea do Estado de Minas e 9.546 obras na reportagem da Unesp. Recuperar a relação completa dos 5.165 exemplares e documentos sobre seu destino final. Não confundir exemplares com títulos nem com o conjunto distinto de cerca de 300 livros do EL-026.", nota:"A reportagem contemporânea do Estado de Minas atribuiu ao relatório a informação de que o acervo tinha 9.565 exemplares e classificou 5.165 (54%) como de temática alheia à negra. O Jornal da Unesp, também em junho de 2021, informou total de 9.546 obras e 478 títulos considerados adequados. Como os totais publicados divergem, o número-base precisa ser conferido diretamente no relatório e em seus anexos. Em qualquer caso, 5.165 é apresentado como quantidade de exemplares, não de títulos distintos. Não foi localizada comprovação de que esse conjunto tenha sido descartado ou doado. A decisão judicial sobre doação de cerca de 300 livros é tratada separadamente no EL-026. O inventário publicado pela Fundação em agosto de 2024 registra 9.696 títulos, levantamento posterior e unidade de contagem distinta."},
 {id:"EL-026", ato:"PALM-2021-08", obra:"Segregação de cerca de 300 livros no chamado “Acervo da Vergonha”", alegacao:"Camargo chamou as obras de “bibliografia imprestável para a Palmares”, “marxistas” e “bandidólatras”.", eixo:"Política e ideologia", modalidade:"Ocultação ou restrição de acesso", estagio:"Decisão ou ordem", situacao:"Em aberto", desfecho:"Segregação anunciada; acesso público posterior não verificado", verificado:"Parcialmente", fontes:["opovo-palm","sbt-museu","oglobo-palm-300","oglobo-palm-ala"], pendencia:"Obter inventário dos cerca de 300 livros, comprovar se foram fisicamente separados, por quanto tempo e quando voltaram à consulta pública.", nota:"A Justiça Federal já havia impedido a doação de cerca de 300 livros. Em 23 de julho de 2021, a Procuradoria-Geral Federal informou ao juízo que Sérgio Camargo desistira da doação, ao menos naquele momento. Em 3 de agosto, Camargo anunciou a criação de uma seção/sala para separar os livros que chamava de “vergonhosos e desviantes”. O anúncio público está documentado; a duração e o regime efetivo de acesso à sala ainda precisam de comprovação."},
 {id:"EL-027", ato:"MG-2024", obra:"O menino marrom", alegacao:"Pais consideraram a obra “agressiva”, citando passagens sobre pacto de sangue e conflitos entre personagens.", eixo:"Cultura afro-brasileira", modalidade:"Veto a atividade", estagio:"Decisão ou ordem", situacao:"Revertido", desfecho:"Suspensão cancelada por decisão liminar", verificado:"Sim", fontes:["pn-ziraldo","dp-ziraldo","comunicado-lafaiete","decisao-lafaiete"], pendencia:"Identificar o signatário formal do ato administrativo e confirmar o trânsito em julgado da ação popular.", nota:"Em comunicado oficial de 20 de junho, a Secretaria Municipal de Educação afirmou que orientou a suspensão temporária dos trabalhos pedagógicos com o livro após manifestações de pais, familiares e autoridades locais — não declarou recolhimento de todos os exemplares. Em decisão liminar assinada em 27 de junho de 2024, o juiz Espagner Wallysen Vaz Leite, da 1ª Vara Cível, determinou o cancelamento imediato da suspensão temporária, sob multa diária de R$ 5 mil. A cópia consultada não permite identificar o autor da ação, cujo nome aparece ocultado."},
 {id:"EL-028", ato:"SJC-2024", obra:"Meninas sonhadoras, mulheres cientistas", alegacao:"O vereador afirmou que a obra faria “apologia ao aborto” e promoveria “doutrinação ideológica”. A prefeitura apresentou justificativa técnico-pedagógica posteriormente.", eixo:"Sexualidade e gênero", modalidade:"Retirada", estagio:"Execução comprovada", situacao:"Revertido", desfecho:"Justiça determinou devolução e proibiu nova restrição político-ideológica", verificado:"Parcialmente", fontes:["pn-sjc","ap-sjc","op-sjc","migalhas-sjc","folha-sjc-ordem","uol-sjc-ordem","jurinews-sjc-2024","thomaz-eleicao-2024"], pendencia:"Obter a sentença integral e comprovar o cumprimento da ordem de devolução; o processo tramita sob segredo de Justiça. Verificar se houve recurso ao TJSP contra a sentença e se a ordem segue em vigor.", nota:"O livro foi recolhido das salas de leitura da rede municipal em junho de 2024, após a pressão pública do vereador. Segundo a apuração divulgada com base no processo, a ordem de retirada foi transmitida aos diretores por mensagens de WhatsApp, sem justificativa técnico-pedagógica contemporânea. Ainda em 2024, na ação movida pelo Ministério Público e pela Defensoria Pública, uma liminar determinou a redistribuição da obra; no início de outubro de 2024, o relator Sulaiman Miguel Neto, do Tribunal de Justiça de São Paulo, suspendeu a liminar a pedido da prefeitura. Em 20 de julho de 2026, a juíza Renata Heloísa da Silva Salles, da Vara da Infância e Juventude, determinou que o município restituísse os exemplares às salas de leitura e bibliotecas das escolas onde integravam o acervo, no prazo de cinco dias a partir da intimação. A decisão também proibiu novas restrições político-ideológicas e fixou multa diária de R$ 500, limitada inicialmente a R$ 50 mil. A cobertura informa que a prefeitura ainda não havia respondido sobre o cumprimento da ordem; portanto, a devolução efetiva permanece sem confirmação pública. Após a sentença, o vereador Thomaz Henrique declarou que recorreria ao Tribunal de Justiça."},
 {id:"EL-029", ato:"UNIRV-2023", obra:"Eu receberia as piores notícias de seus lindos lábios", alegacao:"O parlamentar classificou a obra como “pornográfica”; a universidade afirmou que a polêmica pesou na exclusão.", eixo:"Sexualidade e gênero", modalidade:"Exclusão de lista de leitura", estagio:"Execução comprovada", situacao:"Em vigor", desfecho:"Retirado da lista; decisão institucional confirmada", verificado:"Parcialmente", fontes:["fp-unirv","jo-unirv","folha-unirv","unirv-nota","gayer-camara-2023"], pendencia:"Identificar nominalmente quem compunha a Coordenação do Vestibular e quem formalizou a decisão; a nota pública identifica o órgão decisor, mas não traz ata ou despacho nominal.", nota:"A nota oficial da UniRV, datada de 26 de abril de 2023 e publicada no site em 27 de abril, afirma que a Coordenação do Vestibular decidiu pela exclusão imediata da obra depois de tomar conhecimento do conteúdo e da polêmica. A universidade também registra que a indicação original havia sido feita por uma banca de professores. A nota não identifica nominalmente quem, dentro da Coordenação, tomou a decisão."},
 {id:"EL-030", ato:"LON-2024", obra:"A mamãe vai ter um bebê", titulo:"Pedido de recolhimento de A mamãe vai ter um bebê e aprovação da Lei nº 13.930/2025", alegacao:"A vereadora classificou como inadequada para crianças uma ilustração de casal sob um edredom em contexto de reprodução humana.", eixo:"Sexualidade e gênero", modalidade:"Retirada", estagio:"Pedido formal", situacao:"Em aberto", desfecho:"Pedido apresentado; resposta e execução não comprovadas. PL 79/2024 sancionado como Lei nº 13.930/2025.", verificado:"Parcialmente", fontes:["fl-londrina","bp-londrina","lei-londrina-13930","pedido-londrina","jessicao-eleicao-2024"], pendencia:"Obter cópia integral do requerimento protocolado pela vereadora e resposta da Secretaria; confirmar se houve recolhimento efetivo e eventual devolução do exemplar.", nota:"Em 26 de novembro de 2024, a vereadora Jéssica Ramos Moreno (PP) divulgou que encontrou o livro em uma creche e pediu à Secretaria Municipal de Educação que o recolhesse. A reportagem contemporânea informou que a Secretaria ainda não havia respondido oficialmente ao requerimento; portanto, a retirada não está comprovada. Separadamente, o PL 79/2024, de autoria da vereadora, foi sancionado em 21 de março de 2025 como Lei Municipal nº 13.930, que proíbe uso e distribuição de livros com conteúdo erótico nas escolas municipais, com exceção para informação científico-biológica sobre reprodução adequada à idade. A lei não comprova, por si, a retirada deste exemplar."},
 {id:"EL-031", ato:"DF-2026", obra:"A bolsa amarela", titulo:"Controvérsia sobre atividade com resenha de A bolsa amarela", alegacao:"Pais consideraram inadequada para crianças de cerca de 9 anos uma passagem em que a protagonista deseja ter nascido menino.", eixo:"Sexualidade e gênero", modalidade:"Veto a atividade", estagio:"Pressão pública", situacao:"Sem efeito", desfecho:"Sem retirada de exemplares ou veto à obra comprovado", verificado:"Parcialmente", fontes:["met-bolsa1","met-bolsa2","piaui-bolsa"], pendencia:"Obter a nota oficial integral do colégio e esclarecer documentalmente se houve suspensão formal da atividade ou apenas encerramento do exercício já aplicado.", nota:"A apuração da revista piauí esclareceu que o colégio não havia adotado A bolsa amarela como leitura obrigatória nem retirado exemplares do acervo. O episódio envolveu um link para uma resenha utilizado em exercício de Língua Portuguesa. A escola declarou que a atividade atendia aos objetivos de leitura e interpretação; após a repercussão e o término do exercício, o link não voltou a ser utilizado. Este registro documenta pressão sobre uma atividade, não banimento ou retirada do livro."},
 {id:"EL-032", ato:"TAU-2025", obra:"Pipoca e Picolé", alegacao:"A vereadora contestou a representação de uma família com duas mães e um pai e declarou: “Nós não vamos aceitar material como esse na nossa sala de aula”.", eixo:"Sexualidade e gênero", modalidade:"Retirada", estagio:"Execução comprovada", situacao:"Revertido", desfecho:"Prefeitura anunciou retorno ao uso pedagógico após análise técnica, em turmas consideradas adequadas; cumprimento nas escolas não verificado", verificado:"Parcialmente", fontes:["ovale-tau","ovale-tau-abr10","ovale-tau-jul14","zelinda-eleicao-2024"], pendencia:"Obter o requerimento parlamentar, a resposta integral da prefeitura e o parecer técnico; confirmar a efetiva redistribuição dos exemplares às escolas e quais turmas foram consideradas adequadas.", nota:"A vereadora Zelinda Pastora (PRD) afirmou que pediu ao secretário Hélcio Carvalho dos Santos o recolhimento, após reclamação de uma mãe. A prefeitura confirmou à Câmara que retirou a obra. Em abril de 2026, informou que os exemplares estavam na Secretaria para análise técnica. Em 14 de julho de 2026, a prefeitura informou à imprensa que, após análise da Coordenação de Área e da Equipe de Práticas Pedagógicas da Educação Infantil, o livro voltaria a ser utilizado no plano de ensino das turmas consideradas adequadas. A notícia confirma a decisão administrativa de retomada, mas não comprova quando e em quais unidades os exemplares foram efetivamente devolvidos."},
 {id:"EL-033", ato:"FUNAP-2020", obra:"Veto à lista de doze livros do projeto Remição em Rede", alegacao:"Em mensagem à articuladora, a Funap afirmou que um título não atendia às expectativas da gestão; em reunião, foram mencionadas três obras como problemáticas, sem identificação pública.", eixo:"Outro", modalidade:"Veto a aquisição ou doação", estagio:"Decisão ou ordem", situacao:"Revertido", desfecho:"Funap determinou a inclusão da lista original em 13 de fevereiro de 2020, após repercussão pública", verificado:"Parcialmente", fontes:["bdf-funap","reimao-2023","folha-funap-11fev","folha-funap-14fev","benaglia-heller-2022"], pendencia:"Obter a mensagem original de Reginaldo Caetano da Silva, a ata da reunião de 13/02/2020 e a nota integral da Funap; identificar as três obras questionadas; confirmar se os exemplares chegaram aos presídios depois de fevereiro de 2020 e esclarecer a divergência entre 240 e 228 exemplares.", nota:"Em agosto de 2019, as editoras doaram 240 exemplares de doze títulos para a expansão do projeto. Segundo Janine Durand, articuladora do Remição em Rede, a lista completa foi riscada pelo então diretor-executivo da Funap, coronel Henrique Pereira de Souza Neto, e os livros não foram enviados aos presídios. A Folha identificou Reginaldo Caetano da Silva, superintendente da Diretoria de Atendimento e Promoção Humana, como autor de mensagem de 3 de dezembro que dizia que um título não atendia às expectativas da gestão; em reunião, segundo Durand, foram mencionadas três obras, mas sem identificação. Em 13 de fevereiro de 2020, a Funap determinou a inclusão da lista inicialmente indicada e anunciou uma equipe multidisciplinar para tratar da escolha das obras. A reportagem de 14 de fevereiro do Brasil de Fato registra o recuo após a repercussão pública. A distribuição efetiva dos 240 exemplares após a reversão ainda não foi comprovada. Artigo de Benaglia e Heller publicado em 2022 reproduz a lista dos doze títulos e informa que, até a redação do texto, os livros aguardavam liberação para o acervo itinerante; nas considerações finais, o mesmo artigo fala em 228 livros. O artigo não identifica as três obras questionadas."},
 {id:"EL-034", ato:"LIM-2019", obra:"A bolsa amarela", titulo:"Questionamento parlamentar sobre A bolsa amarela — sem retirada comprovada", alegacao:"No requerimento, o vereador perguntou se o livro afrontava princípios morais de pais e alunos e chamou sua temática de “ideologia de gênero”.", eixo:"Sexualidade e gênero", modalidade:"Veto a atividade", estagio:"Pressão pública", situacao:"Sem efeito", desfecho:"Sem retirada: Secretaria defendeu a obra e manteve o projeto de leitura", verificado:"Sim", fontes:["reimao-2023","uninter-bolsa","camara-limeira-req","camara-limeira-resp","clayton-eleicao-psc","clayton-troca-partido"], nota:"O Requerimento nº 451/2019, de autoria de Clayton Silva (PSC), pediu informações sobre distribuição, atividades e critérios de escolha de A bolsa amarela. Na justificativa, o vereador afirmou que o livro abordava “ideologia de gênero” e questionou se afrontava princípios morais. A Secretaria Municipal de Educação respondeu em 24 de setembro que a obra integrava o Clube de Leitura, descreveu seu valor literário e declarou que ela não afrontava princípios morais. O documento não registra pedido de retirada nem retirada da obra. Este caso documenta pressão discursiva e questionamento parlamentar, não censura ou banimento."},
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
   capaUrl:"https://down-br.img.susercontent.com/file/19ccdf30f6dd38c91f322a1ffbd1c82d",
   capaFonte:"https://shopee.com.br/-Livro-ItACoisa-StephenKing-EditoraSuma-i.314157771.13111340497",
   capaEdicao:"Suma, edição brasileira",
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
   capaUrl:"https://i5.walmartimages.com/seo/The-Donnie-Darko-Book-Paperback-9780571221240_17a3bdec-64d7-46a4-8e44-4c3c3baafd59_1.09197a3eaed6e4d9a4f9772b4db9c440.jpeg?odnBg=FFFFFF&odnHeight=768&odnWidth=768",
   capaFonte:"https://www.walmart.com/ip/2386875",
   capaEdicao:"The Donnie Darko Book, edição em inglês",
   autoria:"Richard Kelly",
   genero:"Roteiro",
   sinopse:"O roteiro do filme de 2001 sobre um adolescente que, depois de escapar de um acidente, passa a ter visões de um coelho que anuncia o fim do mundo."},
 "Coração Satânico":{
   capaUrl:"https://martinsfontespaulista.vteximg.com.br/arquivos/ids/371505-1000-1000/811510_ampliada.jpg?v=637262233034400000",
   capaFonte:"https://www.martinsfontespaulista.com.br/coracao-satanico-811510/p",
   capaEdicao:"DarkSide Books, edição brasileira",
   autoria:"William Hjortsberg",
   ano:1978,
   genero:"Romance policial",
   sinopse:"Um detetive de Nova York é contratado para achar um cantor desaparecido e descobre que o cliente tem planos para a alma de alguém."},
 "Exorcismo":{
   capaUrl:"https://darkside.vteximg.com.br/arquivos/ids/168430-1000-1000/64-exorcismo-thomas-b-allen.jpg?v=636851504887630000",
   capaFonte:"https://www.darksidebooks.com.br/exorcismo-thomas-b-allen/p",
   capaEdicao:"DarkSide Books, edição brasileira",
   autoria:"Thomas B. Allen",
   ano:1993,
   genero:"Não ficção",
   sinopse:"Reconstrução jornalística do caso de 1949 que inspirou O exorcista, a partir do diário de um dos padres envolvidos."},
 "Ed & Lorraine Warren: demonologistas — arquivos sobrenaturais":{
   capaUrl:"https://down-br.img.susercontent.com/file/br-11134207-7r98o-magfyallleofa6",
   capaFonte:"https://shopee.com.br/Livro-Ed-Lorraine-Warren-i.630533556.20998187194",
   capaEdicao:"DarkSide Books, edição brasileira",
   autoria:"Gerald Brittle",
   ano:1980,
   genero:"Não ficção",
   sinopse:"Relatos do casal de investigadores paranormais cujos casos viraram a série de filmes Invocação do Mal."},
 "O diário do diabo: os segredos de Alfred Rosenberg, o maior intelectual do nazismo":{
   capaUrl:"https://martinsfontespaulista.vteximg.com.br/arquivos/ids/1657135-1000-1000/805495.jpg?v=638616831228700000",
   capaFonte:"https://www.martinsfontespaulista.com.br/o-diario-do-diabo-805495/p",
   capaEdicao:"Record, edição brasileira",
   autoria:"Robert K. Wittman e David Kinney",
   ano:2016,
   genero:"Não ficção, história",
   sinopse:"A partir de diários desaparecidos por décadas, reconstrói a trajetória do ideólogo racial do nazismo, condenado em Nuremberg.",
   nota:"Livro crítico ao nazismo, retirado sob a mesma ordem que atingiu obras de terror."},
 "A química entre nós":{
   capaUrl:"https://www.record.com.br/cdn/shop/files/a3cfcf7c9f618c19a08cac8fffcab22b_1000x.jpg?v=1783743873",
   capaFonte:"https://www.record.com.br/products/a-quimica-entre-nos",
   capaEdicao:"BestSeller, edição brasileira",
   autoria:"Larry Young e Brian Alexander",
   ano:2012,
   genero:"Não ficção",
   sinopse:"Um neurocientista e um jornalista investigam a base biológica do desejo, do amor e do vínculo humano.",
   nota:"Obra de divulgação científica sobre a neurobiologia do vínculo, assinada por um neurocientista e um jornalista, guardada na mesma ordem que livros de terror."},
 "Os 13 porquês":{
   capaUrl:"https://myrecadosdaredacao.wordpress.com/wp-content/uploads/2021/06/20210624_235735.jpg",
   capaFonte:"https://myrecadosdaredacao.wordpress.com/2021/06/26/resumo-resenha-os-13-porques-13-reasons-why-do-autor-jay-asher/",
   capaEdicao:"Ática, edição brasileira",
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
 "Os sertões":{
   capaUrl:"https://martinsfontespaulista.vteximg.com.br/arquivos/ids/1613519-1000-1000/1086627.jpg?v=638482702986130000",
   capaFonte:"https://www.martinsfontespaulista.com.br/os-sertoes-1086627/p",
   capaEdicao:"Martin Claret, edição brasileira",
   autoria:"Euclides da Cunha",
   ano:1902,
   genero:"Não ficção",
   sinopse:"O relato de Euclides da Cunha sobre a Guerra de Canudos e a destruição do arraial pelo Exército, um dos livros fundadores do pensamento social brasileiro."},
 "O castelo":{
   capaUrl:"https://down-br.img.susercontent.com/file/br-11134207-7qukw-leprlf7igviq88",
   capaFonte:"https://shopee.com.br/Franz-Kafka-O-castelo-i.652268159.20717848791",
   capaEdicao:"Companhia de Bolso, edição brasileira",
   autoria:"Franz Kafka",
   ano:1926,
   genero:"Romance",
   sinopse:"Um agrimensor tenta chegar ao castelo que o contratou e esbarra numa burocracia que nunca se explica nem se deixa alcançar."},
 "Contos de terror, de mistério e de morte":{
   capaUrl:"https://acdn-us.mitiendanube.com/stores/003/791/470/products/sem-titulo-b38404ea8bd86d90fd17030750925022-1024-1024.webp",
   capaFonte:"https://www.mundodoscolecionaveis.com.br/produtos/livro-colecao-classicos-de-ouro-contos-de-terror-de-misterio-e-de-morte-edgar-allan-poe/",
   capaEdicao:"Clássicos de Ouro, edição brasileira",
   autoria:"Edgar Allan Poe",
   genero:"Contos",
   sinopse:"Reunião dos contos de Poe que fundaram a literatura de horror psicológico moderna."},
 "A vida como ela é":{
   capaUrl:"https://cdn.awsli.com.br/2088/2088593/produto/173012922/dc7cb49641.jpg",
   capaFonte:"https://www.novafronteira.com.br/produto/a-vida-como-ela-e-2022-08-24-15-20-51.html",
   capaEdicao:"Nova Fronteira, edição brasileira",
   autoria:"Nelson Rodrigues",
   genero:"Crônicas",
   sinopse:"Crônicas do cotidiano carioca, publicadas originalmente em jornal, sobre traição, desejo e hipocrisia de classe média."},
 "Beijo no asfalto":{
   capaUrl:"https://livrariadavila.vtexassets.com/arquivos/ids/9147114-150-auto?aspect=true&height=auto&v=639135138002500000&width=150",
   capaFonte:"https://www.livrariadavila.com.br/777590-o-beijo-no-asfalto-tragedia-carioca-em/p",
   capaEdicao:"Nova Fronteira, edição brasileira",
   autoria:"Nelson Rodrigues",
   ano:1961,
   genero:"Teatro",
   sinopse:"Um homem beija um desconhecido atropelado, e a imprensa transforma o gesto em escândalo que destrói sua vida.",
   nota:"Peça sobre linchamento moral fabricado pela imprensa."},
 "Obra de Rubem Fonseca (19 títulos)":{
   legenda:"19 títulos do mesmo autor",
   autoria:"Rubem Fonseca",
   conjunto:true,
   nota:"Maior alvo isolado da lista de Rondônia: 19 dos 43 títulos. Fonseca já havia sido censurado na ditadura militar, quando Feliz Ano Novo foi proibido."},
 "Obra completa de Rubem Alves":{
   legenda:"Obra completa, sem lista",
   autoria:"Rubem Alves",
   conjunto:true,
   nota:"O memorando determinava, em nota de rodapé, que todos os livros do autor fossem recolhidos. Educador e teólogo, é considerado um dos principais pedagogos brasileiros ao lado de Paulo Freire."},
 "Demais títulos da lista de Rondônia":{
   legenda:"Títulos ainda não identificados",
   autoria:"Vários, entre eles Caio Fernando Abreu, Carlos Heitor Cony e Ferreira Gullar",
   conjunto:true,
   nota:"Os títulos da lista de 43 obras que ainda não têm registro próprio no catálogo. O adendo do memorando precisa ser obtido para desmembrá-los."},
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
   capaUrl:"https://todolivro.vtexassets.com/arquivos/ids/159598-1600-1600/9788537633854.jpg?v=638522481874400000",
   capaFonte:"https://www.todolivro.com.br/biblioteca-de-literatura--a-mamae-vai-ter-um-bebe--nivel-3---paradidaticos-todolivro-/p?skuId=1230",
   capaEdicao:"Todo Livro, edição brasileira",
   genero:"Infantil",
   nota:"Livro de educação sexual para crianças pequenas. A lei aprovada em seguida pela Câmara de Londrina permite explicação científica sobre reprodução, que é o assunto do livro."},
 "A bolsa amarela":{
   capaUrl:"https://cdn.awsli.com.br/800x800/2653/2653452/produto/388998981/img_4345-s3pq59fj8b-fjsjmj0lkk.jpg",
   capaFonte:"https://cdn.awsli.com.br/800x800/2653/2653452/produto/388998981/img_4345-s3pq59fj8b-fjsjmj0lkk.jpg",
   capaEdicao:"Edição brasileira fotografada pelo Sebo Caravelas",
   autoria:"Lygia Bojunga",
   ano:1976,
   genero:"Infantojuvenil",
   sinopse:"Raquel esconde numa bolsa amarela três vontades que não cabem em casa: crescer, ter nascido menino e escrever.",
   nota:"Clássico de Lygia Bojunga, primeira autora fora da Europa e dos EUA a receber o Prêmio Hans Christian Andersen, em 1982."},
 "Pipoca e Picolé":{
   capaUrl:"https://m.magazineluiza.com.br/a-static/420x420/livro-pipoca-e-picole/rcn/8793174/bef41d7fcdbc0dd267de2a67e412a5ba.png",
   capaFonte:"https://www.magazineluiza.com.br/livro-pipoca-e-picole/p/gbckkd1b32/li/lltj/",
   capaEdicao:"Elo, edição brasileira",
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
   pressao:"Deputado estadual Rinaldo Modesto (Podemos), conforme lista oficial de autoridades da Assembleia Legislativa de MS de 4 de março de 2024",
   documento:"Ordem de recolhimento da rede estadual de Mato Grosso do Sul; documento formal e signatário ainda precisam ser identificados.",
   papeis:{
     pressao:"Rinaldo Modesto (Podemos), deputado estadual, pediu a retirada na Assembleia Legislativa.",
     decisor:"Eduardo Riedel, governador de Mato Grosso do Sul: a Secretaria confirmou à CartaCapital que o recolhimento atendia a uma determinação do governador, após análise da própria pasta.",
     assinantes:"A autoridade que formalizou a ordem não está identificada no cadastro.",
     executor:"Secretaria de Estado de Educação de Mato Grosso do Sul.",
     resposta:"A Secretaria anunciou a devolução em 23 de abril de 2024, com orientações pedagógicas."
   }},
 "SC-2024":{
   nome:"Orientação da Seduc para recolher O avesso da pele das bibliotecas escolares e analisar o acervo",
   data:"2024-03-07", fim:"2024-04-23", uf:"SC", tipo:"Escolar", rede:"Estadual",
   governo:"Jorginho Mello (PL) · governo de SC",
   quem:"Secretaria de Estado da Educação de Santa Catarina",
   pressao:"Em 6 de março de 2024, o deputado estadual Sérgio Motta (Republicanos) apresentou a Indicação IND/0154/2024, dirigida ao governador e ao secretário de Educação, sugerindo a retirada da obra das escolas estaduais. A documentação disponível não demonstra que a indicação tenha causado a orientação administrativa.",
   documento:"A Indicação IND/0154/2024, de Sérgio Motta, foi protocolada na Alesc em 6 de março de 2024 e encaminhada ao governador pelo Ofício GP/DL/0233/2024, de 11 de março. Em resposta oficial, a Informação nº 304/2024/SED/DIEN, de 23 de abril, afirma expressamente que a Secretaria de Estado da Educação orientou as escolas a recolherem O avesso da pele das bibliotecas escolares para análise pedagógica, junto com o restante do acervo. O Ofício/Gabs nº 1017/2024, de 28 de maio, encaminhou essa informação; em 3 de junho, o Ofício nº 1064/SCC-DIAL-GEAPI, assinado pelo secretário da Casa Civil designado, Marcelo Mendes, encaminhou a resposta à Alesc “de ordem do senhor Governador”. Essa fórmula documenta o encaminhamento da resposta, não prova que o governador tenha ordenado o recolhimento. A íntegra da ordem operacional enviada às escolas e a comprovação de execução em cada unidade ainda não foram localizadas.",
   papeis:{
     pressao:"A Indicação IND/0154/2024, apresentada por Sérgio Motta em 6 de março, sugeriu ao governador e ao secretário a retirada do livro. A relação causal entre a indicação e a orientação da Seduc não está demonstrada.",
     decisor:"A própria Secretaria de Estado da Educação confirmou, na Informação nº 304/2024/SED/DIEN, que orientou as escolas a recolherem a obra das bibliotecas para análise pedagógica do livro e do acervo.",
     assinantes:"A Informação técnica nº 304/2024 foi assinada digitalmente por Márcia Loch, diretora da Diretoria de Ensino, e Jocelete Isaltina da Silveira dos Santos, gerente do Ensino Médio e Profissional. O Ofício/Gabs nº 1017/2024, que encaminhou a informação, foi assinado digitalmente pelo secretário Aristides Cimadon. O Ofício nº 1064/SCC-DIAL-GEAPI, de 3 de junho, foi assinado por Marcelo Mendes, secretário da Casa Civil designado. Essas assinaturas se referem a documentos técnicos e de resposta, não à ordem operacional original enviada às escolas.",
     executor:"A orientação foi dirigida às escolas estaduais. A documentação confirma a ordem de recolhimento para análise, mas não comprova a execução em cada unidade nem o destino final dos exemplares.",
     resposta:"A resposta técnica da Seduc justificou a análise com base em faixa etária, objetivos pedagógicos e projetos político-pedagógicos das escolas. A documentação consultada não comprova a data de devolução ou a disponibilidade posterior da obra aos estudantes."
   }},
 "SC-2023":{
   nome:"Ofício circular de 7 de novembro de 2023 (SC)",
   data:"2023-11-07",
   uf:"SC",
   cidade:"Coordenadoria regional",
   tipo:"Escolar",
   rede:"Estadual",
   governo:"Jorginho Mello (PL) · governo de SC",
   quem:"Secretaria estadual",
   documento:"Ofício circular de 7 de novembro de 2023, reproduzido e descrito pela imprensa; determina retirar nove obras de circulação e armazená-las em local inacessível à comunidade escolar. Assinaturas atribuídas a Waldemar Ronssem Júnior e Anelise dos Santos de Medeiros. O número do expediente e a cópia integral oficial ainda não estão cadastrados.",
   papeis:{
     decisor:"Supervisão/estrutura regional da Secretaria de Estado da Educação de Santa Catarina.",
     assinantes:"Waldemar Ronssem Júnior, supervisor regional de Educação, e Anelise dos Santos de Medeiros, integradora regional, assinaram o ofício que determinou a retirada de circulação.",
     executor:"Estrutura regional da rede estadual de ensino. A coordenadoria específica ainda não foi identificada nas fontes cadastradas.",
     fiscalizacao:"Leonel Camasão (PSOL), suplente de vereador, levou o caso ao Ministério Público. O cadastro o identifica como autor da denúncia posterior, não como autor do pedido de retirada."
   }},
 "RO-2020":{
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
   documento:"Comunicado oficial da Secretaria Municipal de Educação, publicado em 20 de junho de 2024, reconhecendo a orientação para suspender temporariamente os trabalhos pedagógicos; decisão liminar da 1ª Vara Cível no processo nº 5006658-14.2024.8.13.0183 determinou o cancelamento imediato da suspensão temporária.",
   papeis:{
     pressao:"Pais, familiares e autoridades locais contestaram a abordagem pedagógica; o comunicado oficial não identifica nominalmente os reclamantes.",
     decisor:"Secretaria Municipal de Educação, que em comunicado de 20 de junho reconheceu ter orientado a suspensão temporária dos trabalhos pedagógicos.",
     executor:"Unidades escolares da rede municipal, quanto às atividades pedagógicas; não há comprovação de recolhimento geral de exemplares.",
     resposta:"Em 27 de junho de 2024, o juiz Espagner Wallysen Vaz Leite deferiu medida liminar e determinou o cancelamento imediato da suspensão temporária dos trabalhos pedagógicos."
   }},
 "SJC-2024":{
   nome:"Recolhimento de Meninas sonhadoras (São José dos Campos)",
   data:"2024-06-04",
   fim:"2026-07-20",
   uf:"SP",
   cidade:"São José dos Campos",
   tipo:"Escolar",
   rede:"Municipal",
   governo:"Anderson Farias (PSD) · prefeitura de São José dos Campos",
   quem:"Secretaria Municipal de Educação e Cidadania",
   pressao:"Thomaz Henrique (PL), vereador, que acusou a obra de “apologia ao aborto” e “doutrinação ideológica” por incluir Marielle Franco e Débora Diniz.",
   documento:"Ordem de recolhimento transmitida aos diretores das escolas por mensagens de WhatsApp, segundo a apuração judicial divulgada em julho de 2026. Liminar de 2024 que determinava a redistribuição foi suspensa pelo TJSP em outubro de 2024. Decisão da Vara da Infância e Juventude de 20 de julho de 2026 determinou a restituição dos exemplares em cinco dias após a intimação e proibiu restrições político-ideológicas. A cobertura não confirmou o cumprimento da ordem; cópia pública integral da decisão não foi localizada.",
   papeis:{
     pressao:"Thomaz Henrique (PL), vereador, que acusou a obra de “apologia ao aborto” e “doutrinação ideológica”.",
     decisor:"Secretaria Municipal de Educação e Cidadania; a autoridade individual que formalizou a retirada não foi identificada nas fontes públicas consultadas.",
     executor:"Diretores das escolas municipais receberam a ordem de retirada por mensagens de WhatsApp, segundo a apuração divulgada com base no processo.",
     resposta:"Em 20 de julho de 2026, a Vara da Infância e Juventude determinou a restituição dos exemplares no prazo de cinco dias após a intimação e proibiu novas restrições político-ideológicas. A prefeitura não havia confirmado publicamente o cumprimento quando as reportagens foram publicadas."
   }},
 "UNIRV-2023":{
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
   nome:"Requerimento de recolhimento de A mamãe vai ter um bebê (Londrina)",
   data:"2024-11-26",
   fim:"2025-03-21",
   uf:"PR",
   cidade:"Londrina",
   tipo:"Escolar",
   rede:"Municipal",
   governo:"Marcelo Belinati (PP) · prefeitura de Londrina",
   quem:"Vereadora Jéssica Ramos Moreno (PP) · Secretaria Municipal de Educação como destinatária do pedido",
   pressao:"Jéssica Ramos Moreno (PP), vereadora, encontrou a obra durante vistoria em creche após denúncia de uma família e apresentou requerimento pedindo seu recolhimento.",
   documento:"Requerimento parlamentar de Jéssica Ramos Moreno (PP), apresentado após vistoria em creche em 26 de novembro de 2024, solicitando à Secretaria Municipal de Educação o recolhimento da obra; cópia e resposta administrativa ainda não localizadas. Separadamente, o PL 79/2024 foi sancionado como Lei Municipal nº 13.930, de 21 de março de 2025.",
   papeis:{
     pressao:"Jéssica Ramos Moreno (PP), vereadora, pediu formalmente à Secretaria Municipal de Educação o recolhimento do livro após encontrá-lo em uma creche.",
     decisor:"A Secretaria Municipal de Educação recebeu o pedido; não foi localizada resposta oficial nem decisão administrativa que confirme a retirada.",
     executor:"Não identificado. A presença de um exemplar na creche foi relatada pela vereadora; a execução do recolhimento não está comprovada."
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
  "url": "https://www.brasildefato.com.br/2019/09/08/presidente-do-stf-reverte-decisao-judicial-que-permitia-censura-na-bienal-do-rio/",
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
 "folha-funap-11fev": {"veic":"Folha de S.Paulo","data":"2020-02-11","tit":"Governo Doria censura lista de livros de projeto em presídios de São Paulo","url":"https://www1.folha.uol.com.br/cotidiano/2020/02/governo-doria-censura-lista-de-livros-de-projeto-em-presidios-de-sao-paulo.shtml"},
 "folha-funap-14fev": {"veic":"Folha de S.Paulo","data":"2020-02-14","tit":"Governo Doria cria comissão para analisar escolha de livros para presidiários de SP","url":"https://www1.folha.uol.com.br/cotidiano/2020/02/governo-doria-cria-comissao-para-analisar-escolha-de-livros-para-presidiarios-de-sp.shtml"},
 "ovale-tau-jul14": {"veic":"OVALE/Sampi","data":"2026-07-14","tit":"Taubaté: escolas voltarão a usar livro sobre menina com duas mães","url":"https://sampi.net.br/ovale/noticias/2991910/vale-do-paraiba/2026/07/taubate-escolas-voltarao-a-usar-livro-sobre-menina-com-duas-maes"},
 "jurinews-sjc-2024": {"veic":"Jurinews","data":"2024-10-09","tit":"Liminar que determinava redistribuição de livro que cita Marielle Franco em escolas municipais é suspensa","url":"https://jurinews.com.br/sp/liminar-que-determinava-redistribuicao-de-livro-que-cita-marielle-franco-em-escolas-municipais-e-suspensa/"},
 "folha-sjc-ordem": {"veic":"Folha de S.Paulo","data":"2026-07-30","tit":"Justiça determina volta de livro que retrata Marielle a escolas em São José dos Campos","url":"https://www1.folha.uol.com.br/ciencia/2026/07/justica-determina-volta-de-livro-que-retrata-marielle-a-escolas-em-sao-jose-dos-campos.shtml"},
 "uol-sjc-ordem": {"veic":"UOL","data":"2026-07-29","tit":"Juíza vê censura e manda prefeitura devolver às escolas livro com Marielle","url":"https://noticias.uol.com.br/cotidiano/ultimas-noticias/2026/07/29/juiza-manda-prefeitura-devolver-as-escolas-livro-com-marielle-em-sao-jose.ghtm"},
 "relatorio-palmares-original": {"veic":"Fundação Cultural Palmares · CNIRC","data":"2021-06-11","tit":"Relatório Público 01 – Retrato do Acervo: três décadas de dominação marxista na Fundação Cultural Palmares","url":"https://www.palmares.gov.br/wp-content/uploads/2021/06/cnirc-01-gab-10-06-21.pdf"},
 "unesp-palmares": {"veic":"Jornal da Unesp","data":"2021-06-15","tit":"Em cruzada obscurantista, Fundação Palmares pensa em se desfazer de 54% dos livros de seu acervo","url":"https://jornal.unesp.br/2021/06/15/em-cruzada-obscurantista-fundacao-palmares-pensa-em-se-desfazer-de-54-dos-livros-de-seu-acerco/"},
 "palmares-inventario": {"veic":"Fundação Cultural Palmares","data":"2024-08-08","tit":"Inventário Bibliográfico da Fundação Cultural Palmares","url":"https://www.gov.br/palmares/pt-br/centrais-de-conteudo/publicacoes/lista-de-livros-atualizada-8-8-2024-1.pdf"},
 "palmares-politica": {"veic":"Fundação Cultural Palmares","data":"2021-12-21","tit":"Política de Formação, Desenvolvimento e Gestão do Acervo","url":"https://www.gov.br/palmares/pt-br/midias/arquivos/download/politicas-de-acervo-versao-final-21-12-2021.pdf"},
 "oglobo-palm-300": {"veic":"O Globo · Lauro Jardim","data":"2021-07-23","tit":"Sérgio Camargo desiste de doar livros da Fundação Palmares","url":"https://blogs.oglobo.globo.com/lauro-jardim/post/acuado-pela-justica-sergio-camargo-volta-atras-e-desiste-de-doar-livros-da-fundacao-palmares.html"},
 "oglobo-palm-ala": {"veic":"O Globo · Lauro Jardim","data":"2021-08-03","tit":"Sérgio Camargo pretende manter livros separados em seção da vergonha","url":"https://blogs.oglobo.globo.com/lauro-jardim/post/nova-investida-favor-dos-livros-que-sergio-camargo-tenta-excluir-do-acervo-da-fundacao-palmares.html"},
 "comunicado-lafaiete": {"veic":"Prefeitura de Conselheiro Lafaiete · Secretaria Municipal de Educação","data":"2024-06-20","tit":"Comunicado oficial sobre O Menino Marrom","url":"https://conselheirolafaiete.mg.gov.br/v2/comunicado-secretaria-municipal-de-educacao/"},
 "decisao-lafaiete": {"veic":"Poder Judiciário de Minas Gerais · cópia da decisão","data":"2024-06-27","tit":"Processo nº 5006658-14.2024.8.13.0183 · decisão liminar em ação popular","url":"https://www.migalhas.com.br/arquivos/2024/6/C9AB64BF939FD5_%C2%B7ProcessoJudicialEletronico-1%C2%BA.pdf"},
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
  "url": "https://congressoemfoco.com.br/area/pais/governo-de-sc-determina-retirada-de-livros-em-escolas-veja-lista"
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
 "fl-londrina": {
  "veic": "Folha de Londrina",
  "data": "2024-11",
  "tit": "Educação vai recolher livro infantil com ‘conteúdo sensível’",
  "url": "https://www.folhadelondrina.com.br/politica/educacao-vai-recolher-livro-infantil-com-conteudo-sensivel-3292131e.html"
 },
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
 "cc-ms-avesso": {
  "veic": "CartaCapital",
  "data": "2024-03-07",
  "tit": "Mato Grosso do Sul é o 3º estado que determina retirada de O Avesso da Pele das escolas",
  "url": "https://www.cartacapital.com.br/cartaexpressa/mato-grosso-do-sul-e-o-3o-estado-que-determina-retirada-de-o-avesso-da-pele-das-escolas/"
 },
 "alesc-ind-sc-0154":{veic:"Assembleia Legislativa de Santa Catarina · e-Legis",data:"2024-03-06",tit:"Indicação IND/0154/2024 · documento assinado por Sérgio Motta que sugere a retirada de O avesso da pele das escolas estaduais",url:"https://portalelegis.alesc.sc.gov.br/documentos/z8a3m"},
 "alesc-oficio-gp-233":{veic:"Assembleia Legislativa de Santa Catarina · Ofício GP/DL/0233/2024",data:"2024-03-11",tit:"Ofício da Presidência da Alesc encaminha a Indicação 0154/2024 ao governador Jorginho Mello",url:"https://portalelegis.alesc.sc.gov.br/documentos/zedDY"},
 "alesc-info-sc-304":{veic:"Secretaria de Estado da Educação de Santa Catarina · Informação nº 304/2024/SED/DIEN",data:"2024-04-23",tit:"Informação técnica confirma orientação da Seduc para recolher O avesso da pele das bibliotecas escolares para análise pedagógica",url:"https://portalelegis.alesc.sc.gov.br/documentos/5aogB/download"},
 "alesc-oficio-sc-1017":{veic:"Secretaria de Estado da Educação de Santa Catarina · Ofício/Gabs nº 1017/2024",data:"2024-05-28",tit:"Ofício do secretário Aristides Cimadon encaminha resposta oficial sobre a retirada de O avesso da pele",url:"https://portalelegis.alesc.sc.gov.br/documentos/5aogB/download"},
 "alesc-sergio-motta":{veic:"Assembleia Legislativa de Santa Catarina · Memória Política",data:"2023-02-01",tit:"Biografia e mandato de Sérgio Motta Ribeiro · partido Republicanos na 20ª Legislatura",url:"https://memoriapolitica.alesc.sc.gov.br/biografia/1008-Sergio_Motta"},
 "rinaldo-eleicao-2022":{veic:"Folha de S.Paulo · dados de candidatura",data:"2022",tit:"Professor Rinaldo Modesto · candidato eleito a deputado estadual pelo Podemos (PODE) em 2022",url:"https://www1.folha.uol.com.br/poder/eleicoes/candidatos/2022/ms/deputado-estadual/professor-rinaldo-modesto-120001615778.shtml"},
 "jessicao-eleicao-2024":{veic:"Folha de S.Paulo · dados de candidatura",data:"2024",tit:"Jéssica Ramos Moreno (Jessicão) · candidata a vereadora de Londrina pelo PP em 2024",url:"https://www1.folha.uol.com.br/poder/eleicoes/candidatos/2024/pr/vereador/jessicao-160002026792.shtml"},
 "sergio-victor-eleicao-2024":{veic:"Folha de S.Paulo · dados de candidatura",data:"2024",tit:"Sérgio Victor · candidato eleito a prefeito de Taubaté pelo Novo em 2024",url:"https://www1.folha.uol.com.br/poder/eleicoes/candidatos/2024/sp/prefeito/sergio-victor-250001928721.shtml"},
 "anderson-eleicao-2024":{veic:"Folha de S.Paulo · dados de candidatura",data:"2024",tit:"Anderson Farias · candidato a prefeito de São José dos Campos pelo PSD em 2024",url:"https://www1.folha.uol.com.br/poder/eleicoes/candidatos/2024/sp/prefeito/anderson-250001946210.shtml"},
 "ratinho-tse-2022":{veic:"Tribunal Superior Eleitoral",data:"2022-10-02",tit:"Ratinho Júnior (PSD) se reelege governador do Paraná",url:"https://www.tse.jus.br/comunicacao/noticias/2022/Outubro/ratinho-junior-psd-se-reelege-governador-do-parana"},
 "caiado-eleicao-2022":{veic:"Folha de S.Paulo · dados de candidatura",data:"2022",tit:"Ronaldo Caiado · candidato a governador de Goiás pelo União Brasil em 2022",url:"https://www1.folha.uol.com.br/poder/eleicoes/candidatos/2022/go/governador/ronaldo-caiado-90001646326.shtml"},
 "jorginho-mello-alesc":{veic:"Assembleia Legislativa de Santa Catarina · Memória Política",data:"2023",tit:"Biografia e mandato de Jorginho Mello · governador pelo PL desde 2023",url:"https://memoriapolitica.alesc.sc.gov.br/biografia/514-Jorginho_Mello"},
 "eduardo-leite-filiacao":{veic:"UOL",data:"2025-05-09",tit:"Eduardo Leite deixa o PSDB e se filia ao PSD em maio de 2025",url:"https://noticias.uol.com.br/politica/ultimas-noticias/2025/05/09/eduardo-leite-se-filia-ao-psd-de-kassab.ghtm"},
 "riedel-filiacao":{veic:"UOL · Agência Estado",data:"2025-08-19",tit:"Eduardo Riedel deixa o PSDB e se filia ao PP em agosto de 2025",url:"https://noticias.uol.com.br/ultimas-noticias/agencia-estado/2025/08/19/ultimo-governador-do-psdb-eduardo-riedel-do-ms-assina-filiacao-ao-pp.amp.htm"},
 "marcos-rocha-eleicao-2018":{veic:"Dados de candidatura · DivulgaCandContas/TSE",data:"2018",tit:"Marcos Rocha concorreu ao governo de Rondônia pelo PSL em 2018",url:"https://agenciasertao.com/eleicoes/candidato/RO/coronel-marcos-rocha-psl-ro--220000625838/?ano=2018"},
 "marcelo-belinati-historico":{veic:"Prefeitura de Londrina · Perfil de Londrina 2025",data:"2025",tit:"Histórico oficial dos prefeitos de Londrina registra Marcelo Belinati eleito pelo PP em 2017 e 2021",url:"https://repositorio.londrina.pr.gov.br/index.php/menu-planejamento/gpi/perfil-de-londrina-2025/68692-1-1-1-4/file"},
 "gov-ms-riedel-psdb":{veic:"PSDB-MS",data:"2022",tit:"Perfil de Eduardo Riedel como governador eleito pelo PSDB",url:"https://www.psdb.org.br/ms/conheca-nossos-representantes/governador/"},
 "thomaz-eleicao-2024":{veic:"Folha de S.Paulo · dados de candidatura",data:"2024",tit:"Thomaz Henrique Barbosa da Silva · candidato a vereador de São José dos Campos pelo PL em 2024",url:"https://www1.folha.uol.com.br/poder/eleicoes/candidatos/2024/sp/vereador/thomaz-henrique-250002124819.shtml"},
 "gayer-eleicao-2022":{veic:"Folha de S.Paulo · dados de candidatura",data:"2022",tit:"Gustavo Gayer · candidato eleito a deputado federal por Goiás pelo PL em 2022",url:"https://www1.folha.uol.com.br/poder/eleicoes/candidatos/2022/go/deputado-federal/gustavo-gayer-90001652508.shtml"},
 "zelinda-eleicao-2024":{veic:"Folha de S.Paulo · dados de candidatura",data:"2024",tit:"Zelinda Pastora · candidata eleita a vereadora de Taubaté pelo PRD em 2024",url:"https://www1.folha.uol.com.br/poder/eleicoes/candidatos/2024/sp/vereador/zelinda-pastora-250002194882.shtml"},
 "leonel-eleicao-2024":{veic:"Tribunal Regional Eleitoral de Santa Catarina",data:"2024-10-06",tit:"Resultado oficial de votação de Leonel Camasão · PSOL em Florianópolis",url:"https://apps.tre-sc.jus.br/site/fileadmin/arquivos/eleicoes/eleicoes2024/resultados_turno_1/votacao_secao/pdfs/VotSecao_81051_50500.pdf"},
 "lia-nogueira-psdb":{veic:"Assembleia Legislativa de Mato Grosso do Sul",data:"2022",tit:"Perfil parlamentar de Lia Nogueira · PSDB",url:"https://hmlalems.easynet.com.br/Deputados/Visualizar/1045"},
 "clayton-eleicao-psc":{veic:"Câmara Municipal de Limeira",data:"2017-01-02",tit:"Posse de Clayton Silva como vereador eleito pelo PSC em Limeira",url:"https://www.limeira.sp.leg.br/noticias/view/2017-01-02_vereadores-prefeito-e-vice-prefeito-tomam-posse"},
 "clayton-troca-partido":{veic:"eLimeira · Jornalismo local",data:"2020-04-06",tit:"Clayton Silva deixa o PSC e se filia ao PTC em abril de 2020",url:"https://elimeira.com.br/noticias/limeira/seis-vereadores-de-limeira-mudaram-de-partido/"},


 "rinaldo-alms-2024":{veic:"Assembleia Legislativa de Mato Grosso do Sul",data:"2024-03-04",tit:"Lista oficial de autoridades da Alems registra o deputado Rinaldo Modesto como integrante do Podemos (PODE) em 4 de março de 2024",url:"https://al.ms.gov.br/upload/Pdf/2024_03_04_12_22_56_lista-de-autoridades-04-03-24.pdf"},
 "gayer-camara-2023":{veic:"Câmara dos Deputados",data:"2023",tit:"Perfil institucional de Gustavo Gayer registra mandato 2023–2027 e partido PL-GO",url:"https://www.camara.leg.br/deputados/220568?ano=2023"},

};

/* taxonomias completas; inclui as categorias em zero, de propósito */
/* Três eixos independentes. MODALIDADES é o mecanismo: o que a medida pretendia fazer com o livro. */
const MODALIDADES = ["Retirada","Ocultação ou restrição de acesso","Exclusão de lista de leitura","Veto a atividade",
  "Veto a aquisição ou doação","Descarte ou destruição","Autocensura"];
/* Até onde o episódio chegou, do mais leve ao mais grave. */
const ESTAGIOS = ["Pressão pública","Pedido formal","Decisão ou ordem","Execução comprovada"];
/* Situação atual da medida. O detalhe fica no campo desfecho. */
const SITUACOES = ["Em vigor","Revertido","Sem efeito","Em aberto"];
const EIXOS = ["Cultura afro-brasileira","Sexualidade e gênero","Sobrenatural e mágico",
  "Política e ideologia","Religião","Linguagem e palavrão","Violência","Outro"];
/* data da última revisão do catálogo (AAAA-MM-DD); aparece no rodapé */

/* Lacunas: o que falta apurar em cada ato com pendência, o tipo de obstáculo e o caminho para fechar.
   Obstáculos vêm da lista fechada OBSTACULOS. O gerador recusa ato com pendência e sem lacuna cadastrada. */
const OBSTACULOS = ["Fonte única","Documento interno não publicado","Sigilo judicial","Cumprimento não confirmado","Lista de títulos incompleta","Responsável não identificado","Divergência entre fontes"];
const LACUNAS = {
 "MS-2024":{obstaculos:["Cumprimento não confirmado"], caminho:"Pedido via Lei de Acesso à Informação à Secretaria de Estado de Educação de Mato Grosso do Sul sobre a devolução dos exemplares às escolas."},
 "SC-2023":{obstaculos:["Responsável não identificado"], caminho:"Pedido via Lei de Acesso à Informação à Secretaria de Estado da Educação de Santa Catarina do ofício e da unidade regional que o expediu."},
 "SC-2024":{obstaculos:["Fonte única","Documento interno não publicado"], caminho:"Pedido via Lei de Acesso à Informação à Secretaria de Estado da Educação de Santa Catarina do comunicado de revisão de acervo e da lista de unidades que receberam os exemplares."},
 "RO-2020":{obstaculos:["Documento interno não publicado","Lista de títulos incompleta"], caminho:"Pedido via Lei de Acesso à Informação à Seduc de Rondônia da íntegra do processo SEI 0029.051300/2020-91, do adendo com a lista de títulos e do resultado da sindicância; consulta ao Ministério Público de Rondônia sobre a recomendação."},
 "PALM-2021-06":{obstaculos:["Documento interno não publicado","Divergência entre fontes"], caminho:"Pedido via Fala.BR à Fundação Cultural Palmares do relatório com anexo e de documentos sobre o destino dos exemplares."},
 "PALM-2021-08":{obstaculos:["Documento interno não publicado","Lista de títulos incompleta"], caminho:"Pedido via Fala.BR à Fundação Cultural Palmares do inventário da seção separada e de registros sobre o acesso a esse acervo."},
 "MG-2024":{obstaculos:["Responsável não identificado"], caminho:"Pedido via Lei de Acesso à Informação à Prefeitura de Conselheiro Lafaiete do ato de suspensão; consulta processual ao Tribunal de Justiça de Minas Gerais sobre o trânsito em julgado."},
 "SJC-2024":{obstaculos:["Sigilo judicial","Cumprimento não confirmado"], caminho:"Pedido via Lei de Acesso à Informação à Prefeitura de São José dos Campos sobre a devolução dos exemplares às escolas. A sentença tramita em segredo de Justiça e fica fora do alcance desse caminho."},
 "UNIRV-2023":{obstaculos:["Responsável não identificado"], caminho:"Pedido via Lei de Acesso à Informação à Universidade de Rio Verde da ata ou do despacho que excluiu a obra da lista do vestibular."},
 "LON-2024":{obstaculos:["Documento interno não publicado","Cumprimento não confirmado"], caminho:"Pedido via Lei de Acesso à Informação à Prefeitura de Londrina da resposta ao requerimento; consulta ao sistema da Câmara Municipal pelo texto do requerimento."},
 "DF-2026":{obstaculos:["Documento interno não publicado"], caminho:"Pedido via Lei de Acesso à Informação ao Governo do Distrito Federal, por meio do Corpo de Bombeiros Militar, que administra o colégio, da nota oficial integral."},
 "TAU-2025":{obstaculos:["Documento interno não publicado","Cumprimento não confirmado"], caminho:"Pedido via Lei de Acesso à Informação à Prefeitura de Taubaté do parecer técnico e da lista de escolas que receberam os exemplares; consulta à Câmara Municipal pelo requerimento."},
 "FUNAP-2020":{obstaculos:["Documento interno não publicado","Cumprimento não confirmado","Divergência entre fontes"], caminho:"Pedido via Lei de Acesso à Informação à Funap, do governo de São Paulo, da mensagem de 3 de dezembro de 2019, da ata de 13 de fevereiro de 2020 e do registro de envio dos exemplares às unidades."},
};

const ATUALIZADO = "2026-10-30";

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
 "sergio-motta":{nome:"Sérgio Motta Ribeiro", tipo:"Pessoa"},
 "marcia-loch":{nome:"Márcia Loch", tipo:"Pessoa"},
 "jocelete-silveira":{nome:"Jocelete Isaltina da Silveira dos Santos", tipo:"Pessoa"},
 "aristides-cimadon":{nome:"Aristides Cimadon", tipo:"Pessoa"},
 "marcelo-mendes":{nome:"Marcelo Mendes", tipo:"Pessoa"},
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
 {ato:"MS-2024", agente:"rinaldo-modesto", papel:"Pedido", cargo:"deputado estadual (Podemos)", nota:"Pediu a retirada na Assembleia Legislativa. A lista oficial de autoridades da Assembleia Legislativa de MS, de 4 de março de 2024, registra o parlamentar no Podemos."},
 {ato:"MS-2024", agente:"eduardo-riedel", papel:"Decisão", cargo:"governador de Mato Grosso do Sul", atribuido:true, nota:"A Secretaria informou à CartaCapital que o recolhimento atendia a determinação do governador; o ato formal não está identificado."},
 {ato:"MS-2024", agente:"sed-ms", papel:"Execução"},
 {ato:"MS-2024", agente:"sed-ms", papel:"Resposta ou reversão", nota:"Anunciou a devolução em 23 de abril de 2024."},
 {ato:"SC-2024", agente:"sergio-motta", papel:"Pedido", cargo:"deputado estadual (Republicanos)", nota:"Autor da Indicação IND/0154/2024, protocolada em 6 de março de 2024, que sugeriu ao governador e ao secretário de Educação a retirada da obra. Não há prova documental de que o pedido tenha causado a orientação posterior da Seduc."},
 {ato:"SC-2024", agente:"sed-sc", papel:"Decisão", nota:"A Informação nº 304/2024/SED/DIEN confirma que a Secretaria orientou as escolas a recolherem o livro das bibliotecas para análise pedagógica."},
 {ato:"SC-2024", agente:"marcia-loch", papel:"Assinatura", cargo:"diretora da Diretoria de Ensino", nota:"Assinou digitalmente a Informação nº 304/2024/SED/DIEN, que documenta a orientação da Seduc; não é a ordem operacional original enviada às escolas."},
 {ato:"SC-2024", agente:"jocelete-silveira", papel:"Assinatura", cargo:"gerente do Ensino Médio e Profissional", nota:"Assinou digitalmente a Informação nº 304/2024/SED/DIEN, que documenta a orientação da Seduc; não é a ordem operacional original enviada às escolas."},
 {ato:"SC-2024", agente:"aristides-cimadon", papel:"Resposta ou reversão", cargo:"secretário de Estado da Educação", nota:"Assinou digitalmente o Ofício/Gabs nº 1017/2024, de 28 de maio, que encaminhou à Casa Civil a informação técnica sobre a orientação de recolhimento."},
 {ato:"SC-2024", agente:"marcelo-mendes", papel:"Assinatura", cargo:"secretário de Estado da Casa Civil, designado", nota:"Assinou o Ofício nº 1064/SCC-DIAL-GEAPI, de 3 de junho, encaminhando à Alesc a resposta da Seduc. O texto diz “de ordem do senhor Governador” para o encaminhamento da resposta; isso não comprova que Jorginho Mello tenha ordenado o recolhimento."},
 {ato:"SC-2023", agente:"sed-sc", papel:"Decisão", nota:"Estrutura regional da Secretaria; a coordenadoria específica não está identificada."},
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


/* Filiações partidárias com referência temporal e fonte verificável. */
const FILIACOES = {
 "eduardo-leite":{partido:"PSDB",periodo:"Governador do RS em 2024; filiou-se ao PSD em 09/05/2025",fontes:["eduardo-leite-filiacao"]},
 "eduardo-riedel":{partido:"PSDB",periodo:"Governador do MS em março/abril de 2024; filiou-se ao PP em 19/08/2025",fontes:["gov-ms-riedel-psdb","riedel-filiacao"]},
 "ratinho-junior":{partido:"PSD",periodo:"Governador do PR em março/abril de 2024",fontes:["ratinho-tse-2022"]},
 "ronaldo-caiado":{partido:"União Brasil",periodo:"Governador de GO em março/abril de 2024",fontes:["caiado-eleicao-2022"]},
 "jorginho-mello":{partido:"PL",periodo:"Governador de SC desde 2023",fontes:["jorginho-mello-alesc"]},
 "marcos-rocha":{partido:"PSL",periodo:"Governador eleito em 2018; partido no início do mandato em 2020",fontes:["marcos-rocha-eleicao-2018"]},
 "anderson-farias":{partido:"PSD",periodo:"Prefeito de São José dos Campos em 2024; filiado ao PSD desde 2022",fontes:["anderson-eleicao-2024"]},
 "marcelo-belinati":{partido:"PP",periodo:"Prefeito de Londrina no mandato 2021–2024",fontes:["marcelo-belinati-historico"]},
 "sergio-victor":{partido:"Novo",periodo:"Eleito em outubro de 2024; prefeito a partir de janeiro de 2025",fontes:["sergio-victor-eleicao-2024"]},
 "sergio-motta":{partido:"Republicanos",periodo:"Deputado estadual na 20ª Legislatura (2023–2027)",fontes:["alesc-sergio-motta"]},
 "jessica-ramos-moreno":{partido:"PP",periodo:"Candidata a vereadora em Londrina nas eleições de 2024",fontes:["jessicao-eleicao-2024"]},
 "rinaldo-modesto":{partido:"Podemos (PODE)",periodo:"Deputado estadual listado pela Assembleia Legislativa de MS como Podemos em 04/03/2024, três dias antes da manifestação",fontes:["rinaldo-alms-2024","rinaldo-eleicao-2022"]},
 "thomaz-henrique":{partido:"PL",periodo:"Candidato a vereador em São José dos Campos nas eleições de 2024",fontes:["thomaz-eleicao-2024"]},
 "gustavo-gayer":{partido:"PL",periodo:"Deputado federal por Goiás, mandato 2023–2027; PL confirmado pela Câmara dos Deputados em 2023",fontes:["gayer-camara-2023","gayer-eleicao-2022"]},
 "zelinda-pastora":{partido:"PRD",periodo:"Eleita vereadora pelo PRD em 2024; filiação na data do pedido de recolhimento em 2025 ainda precisa de confirmação",fontes:["zelinda-eleicao-2024"]},
 "leonel-camasao":{partido:"PSOL",periodo:"Candidato a vereador em Florianópolis nas eleições de 2024; fonte eleitoral confirma a legenda",fontes:["leonel-eleicao-2024"]},
 "lia-nogueira":{partido:"PSDB",periodo:"Deputada estadual em 2024; filiou-se ao PSDB em 2022",fontes:["lia-nogueira-psdb"]},
 "clayton-silva":{partido:"PSC",periodo:"Vereador de Limeira em 2019; deixou o PSC e filiou-se ao PTC em abril de 2020",fontes:["clayton-eleicao-psc","clayton-troca-partido"]},
};

/* ---------- montagem ----------
   As páginas leem os campos do ato e da obra diretamente em cada registro.
   Esta etapa copia esses campos para o registro. Não edite aqui; edite ATOS e LIVROS. */
const CAMPOS_DO_ATO = ["data","fim","uf","cidade","tipo","rede","governo","quem","pressao"];
const CAMPOS_DA_OBRA = ["autoria","editora","pnld","capa","conjunto"];
CASOS.forEach(c=>{
  const A = ATOS[c.ato] || {}, L = LIVROS[c.obra] || {};
  CAMPOS_DO_ATO.forEach(k=>{ if(c[k]===undefined && A[k]!==undefined) c[k]=A[k]; });
  CAMPOS_DA_OBRA.forEach(k=>{ if(c[k]===undefined && L[k]!==undefined) c[k]=L[k]; });
  if(c.titulo===undefined) c.titulo = c.obra;
  if(c.cidade===undefined) c.cidade = "";
});
const RESPONSABILIDADES = Object.fromEntries(CASOS.map(c=>[c.id, (ATOS[c.ato]||{}).papeis || {}]));
const DOCUMENTOS_ATOS = Object.fromEntries(CASOS.map(c=>[c.id, (ATOS[c.ato]||{}).documento || ""]));
