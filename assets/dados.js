/* Estante Livre · dados do catálogo.
   Para acrescentar um caso, copie um bloco de CASOS e edite.
   Todas as páginas leem deste arquivo. */

const CASOS = [
 {id:"EL-001", data:"2024-03-01", ato:"RS-2024", governo:"Eduardo Leite (PSDB) · governo do RS", fim:"2024-03-05", titulo:"O avesso da pele", autoria:"Jeferson Tenório", editora:"Companhia das Letras", pnld:true, capa:"avesso-da-pele", cidade:"Santa Cruz do Sul e outros 17 municípios", uf:"RS", tipo:"Escolar", rede:"Estadual", quem:"Coordenadoria regional de educação", alegacao:"“Vocabulário de baixo nível” · crítica da diretora Janaína Venzon, da Escola Estadual Ernesto Alves, em vídeo nas redes", eixo:"Linguagem e palavrão", modalidade:"Retirada total", desfecho:"Revertido", verificado:"Sim", fontes:["bdf-rs","pn-rs","icl-rs"], nota:"Depois do vídeo da diretora, um ofício do coordenador da 6ª Coordenadoria Regional de Educação, Luiz Ricardo Pinho de Moura, mandou retirar o livro das bibliotecas escolares de 18 municípios do Vale do Rio Pardo. A Secretaria estadual desautorizou a ordem no mesmo dia e a retirada durou poucas horas. Segundo a editora, a própria diretora havia assinado a ata de escolha da obra no PNLD. Foi o primeiro episódio de março de 2024; nas semanas seguintes vieram ordens no PR, em GO, no MS e em SC."},
 {id:"EL-002", data:"2024-03-04", ato:"PR-2024", governo:"Ratinho Júnior (PSD) · governo do PR", fim:"2024-04-09", titulo:"O avesso da pele", autoria:"Jeferson Tenório", editora:"Companhia das Letras", pnld:true, capa:"avesso-da-pele", cidade:"Curitiba e região", uf:"PR", tipo:"Escolar", rede:"Estadual", quem:"Secretaria estadual", alegacao:"Expressões, jargões e descrições de cenas de sexo que seriam “inadequados para exposição a menores de dezoito anos”", eixo:"Sexualidade e gênero", modalidade:"Retirada total", desfecho:"Revertido", verificado:"Sim", fontes:["icl-pr","cc-pr","pn-volta"], nota:"Ofício assinado por Anderfábio Oliveira dos Santos, diretor de educação da Secretaria, e por Laura Patrícia Lopes, chefe do Núcleo Regional de Educação de Curitiba, mandou recolher todos os exemplares até 8 de março. A Companhia das Letras foi à Justiça alegando que a competência sobre o PNLD é do MEC. O livro voltou às escolas em abril de 2024, acompanhado de orientações pedagógicas."},
 {id:"EL-003", data:"2024-03-07", ato:"GO-2024", governo:"Ronaldo Caiado (União Brasil) · governo de GO", fim:"2024-04-09", titulo:"O avesso da pele", autoria:"Jeferson Tenório", editora:"Companhia das Letras", pnld:true, capa:"avesso-da-pele", cidade:"", uf:"GO", tipo:"Escolar", rede:"Estadual", quem:"Secretaria estadual", alegacao:"“Possibilitar uma análise do livro quanto ao atendimento da proposta pedagógica da rede”", eixo:"Linguagem e palavrão", modalidade:"Retirada total", desfecho:"Revertido", verificado:"Sim", fontes:["cc-go","pn-volta"], nota:"O livro voltou às escolas de Goiás em abril de 2024, um mês depois, junto com o Paraná."},
 {id:"EL-004", data:"2024-03-07", ato:"MS-2024", governo:"Eduardo Riedel (PSDB) · governo do MS", pressao:"Deputado estadual Rinaldo Modesto (Podemos)", fim:"2024-04-23", titulo:"O avesso da pele", autoria:"Jeferson Tenório", editora:"Companhia das Letras", pnld:true, capa:"avesso-da-pele", cidade:"", uf:"MS", tipo:"Escolar", rede:"Estadual", quem:"Governo estadual", alegacao:"“Expressões impróprias” para menores de 18 anos · termo usado pelo deputado estadual Rinaldo Modesto ao cobrar a retirada", eixo:"Linguagem e palavrão", modalidade:"Retirada total", desfecho:"Revertido", verificado:"Sim", fontes:["gp-estados","cgn-volta","cgn-alems","cc-ms-avesso"], pendencia:"Confirmar se o livro chegou de volta às 75 escolas", nota:"Na Assembleia, a crítica uniu deputados de partidos opostos: Rinaldo Modesto (Podemos) pediu a retirada, Lia Nogueira (PSDB) chamou o livro de “nojento” e Pedro Kemp (PT) disse ter “muitas reservas” sobre o uso no ensino médio. O governador Eduardo Riedel mandou recolher os exemplares das 75 escolas da rede que tinham recebido o livro. Em 23 de abril de 2024 a Secretaria de Educação anunciou a devolução às bibliotecas, “com as orientações pedagógicas quanto à indicação de uso”, sem detalhar quais."},
 {id:"EL-005", data:"2024-03-07", ato:"SC-2024", governo:"Jorginho Mello (PL) · governo de SC", titulo:"O avesso da pele", autoria:"Jeferson Tenório", editora:"Companhia das Letras", pnld:true, capa:"avesso-da-pele", cidade:"", uf:"SC", tipo:"Escolar", rede:"Estadual", quem:"Secretaria estadual", alegacao:"Evitar que obras para adolescentes e adultos cheguem a estudantes do ensino fundamental · exemplares redistribuídos para EJA e centros de educação profissional", eixo:"Sexualidade e gênero", modalidade:"Restrição de acesso", desfecho:"Mantido com restrição", verificado:"Parcialmente", fontes:["gp-estados"], pendencia:"Buscar segunda fonte", nota:"O governo anunciou análise de conteúdo e chamou a medida de revisão de acervo. Exemplo de restrição apresentada como gestão pedagógica."},
 {id:"EL-006", data:"2023-11-07", ato:"SC-2023", governo:"Jorginho Mello (PL) · governo de SC", titulo:"It: A coisa", autoria:"Stephen King", editora:"", cidade:"Coordenadoria regional", pendencia:"Identificar a coordenadoria regional", uf:"SC", tipo:"Escolar", rede:"Estadual", quem:"Secretaria estadual", alegacao:"Sem justificativa no ofício · determinava armazenar “em local não acessível à comunidade escolar”. A secretaria alegou depois “redistribuição por faixa etária”", eixo:"Sobrenatural e mágico", modalidade:"Ocultação", desfecho:"Em aberto", verificado:"Sim", fontes:["cc-sc","gp-sc","p360-sc","cnn-sc","cf-sc","folha-sc"], nota:"Ofício assinado pelo supervisor regional de educação Waldemar Ronssem Júnior e pela integradora regional Anelise dos Santos de Medeiros: “Determinamos que as obras listadas abaixo sejam retiradas de circulação”. O suplente de vereador Leonel Camasão (PSOL) levou o caso ao Ministério Público estadual."},
 {id:"EL-007", data:"2023-11-07", ato:"SC-2023", governo:"Jorginho Mello (PL) · governo de SC", titulo:"Laranja Mecânica", autoria:"Anthony Burgess", editora:"", capa:"laranja-mecanica", cidade:"Coordenadoria regional", pendencia:"Identificar a coordenadoria regional", uf:"SC", tipo:"Escolar", rede:"Estadual", quem:"Secretaria estadual", alegacao:"Sem justificativa no ofício · determinava armazenar “em local não acessível à comunidade escolar”. A secretaria alegou depois “redistribuição por faixa etária”", eixo:"Violência", modalidade:"Ocultação", desfecho:"Em aberto", verificado:"Sim", fontes:["cc-sc","gp-sc","p360-sc","cnn-sc","cf-sc","folha-sc"], nota:"Ofício assinado pelo supervisor regional de educação Waldemar Ronssem Júnior e pela integradora regional Anelise dos Santos de Medeiros: “Determinamos que as obras listadas abaixo sejam retiradas de circulação”. O suplente de vereador Leonel Camasão (PSOL) levou o caso ao Ministério Público estadual."},
 {id:"EL-008", data:"2023-11-07", ato:"SC-2023", governo:"Jorginho Mello (PL) · governo de SC", titulo:"Donnie Darko", autoria:"Richard Kelly", editora:"", cidade:"Coordenadoria regional", pendencia:"Identificar a coordenadoria regional", uf:"SC", tipo:"Escolar", rede:"Estadual", quem:"Secretaria estadual", alegacao:"Sem justificativa no ofício · determinava armazenar “em local não acessível à comunidade escolar”. A secretaria alegou depois “redistribuição por faixa etária”", eixo:"Sobrenatural e mágico", modalidade:"Ocultação", desfecho:"Em aberto", verificado:"Sim", fontes:["cc-sc","gp-sc","p360-sc","cnn-sc","cf-sc","folha-sc"], nota:"Ofício assinado pelo supervisor regional de educação Waldemar Ronssem Júnior e pela integradora regional Anelise dos Santos de Medeiros: “Determinamos que as obras listadas abaixo sejam retiradas de circulação”. O suplente de vereador Leonel Camasão (PSOL) levou o caso ao Ministério Público estadual."},
 {id:"EL-009", data:"2023-11-07", ato:"SC-2023", governo:"Jorginho Mello (PL) · governo de SC", titulo:"Coração Satânico", autoria:"William Hjortsberg", editora:"", cidade:"Coordenadoria regional", pendencia:"Identificar a coordenadoria regional", uf:"SC", tipo:"Escolar", rede:"Estadual", quem:"Secretaria estadual", alegacao:"Sem justificativa no ofício · determinava armazenar “em local não acessível à comunidade escolar”. A secretaria alegou depois “redistribuição por faixa etária”", eixo:"Sobrenatural e mágico", modalidade:"Ocultação", desfecho:"Em aberto", verificado:"Sim", fontes:["cc-sc","gp-sc","p360-sc","cnn-sc","cf-sc","folha-sc"], nota:"Ofício assinado pelo supervisor regional de educação Waldemar Ronssem Júnior e pela integradora regional Anelise dos Santos de Medeiros: “Determinamos que as obras listadas abaixo sejam retiradas de circulação”. O suplente de vereador Leonel Camasão (PSOL) levou o caso ao Ministério Público estadual."},
 {id:"EL-010", data:"2023-11-07", ato:"SC-2023", governo:"Jorginho Mello (PL) · governo de SC", titulo:"Exorcismo", autoria:"Thomas B. Allen", editora:"", cidade:"Coordenadoria regional", pendencia:"Identificar a coordenadoria regional", uf:"SC", tipo:"Escolar", rede:"Estadual", quem:"Secretaria estadual", alegacao:"Sem justificativa no ofício · determinava armazenar “em local não acessível à comunidade escolar”. A secretaria alegou depois “redistribuição por faixa etária”", eixo:"Sobrenatural e mágico", modalidade:"Ocultação", desfecho:"Em aberto", verificado:"Sim", fontes:["cc-sc","gp-sc","p360-sc","cnn-sc","cf-sc","folha-sc"], nota:"Ofício assinado pelo supervisor regional de educação Waldemar Ronssem Júnior e pela integradora regional Anelise dos Santos de Medeiros: “Determinamos que as obras listadas abaixo sejam retiradas de circulação”. O suplente de vereador Leonel Camasão (PSOL) levou o caso ao Ministério Público estadual."},
 {id:"EL-011", data:"2023-11-07", ato:"SC-2023", governo:"Jorginho Mello (PL) · governo de SC", titulo:"Ed & Lorraine Warren: demonologistas — arquivos sobrenaturais", autoria:"Gerald Brittle", editora:"", cidade:"Coordenadoria regional", pendencia:"Identificar a coordenadoria regional", uf:"SC", tipo:"Escolar", rede:"Estadual", quem:"Secretaria estadual", alegacao:"Sem justificativa no ofício · determinava armazenar “em local não acessível à comunidade escolar”. A secretaria alegou depois “redistribuição por faixa etária”", eixo:"Sobrenatural e mágico", modalidade:"Ocultação", desfecho:"Em aberto", verificado:"Sim", fontes:["cc-sc","gp-sc","p360-sc","cnn-sc","cf-sc","folha-sc"], nota:"Ofício assinado pelo supervisor regional de educação Waldemar Ronssem Júnior e pela integradora regional Anelise dos Santos de Medeiros: “Determinamos que as obras listadas abaixo sejam retiradas de circulação”. O suplente de vereador Leonel Camasão (PSOL) levou o caso ao Ministério Público estadual."},
 {id:"EL-012", data:"2023-11-07", ato:"SC-2023", governo:"Jorginho Mello (PL) · governo de SC", titulo:"O diário do diabo: os segredos de Alfred Rosenberg, o maior intelectual do nazismo", autoria:"Robert K. Wittman e David Kinney", editora:"", cidade:"Coordenadoria regional", pendencia:"Identificar a coordenadoria regional", uf:"SC", tipo:"Escolar", rede:"Estadual", quem:"Secretaria estadual", alegacao:"Sem justificativa no ofício · determinava armazenar “em local não acessível à comunidade escolar”. A secretaria alegou depois “redistribuição por faixa etária”", eixo:"Política e ideologia", modalidade:"Ocultação", desfecho:"Em aberto", verificado:"Sim", fontes:["cc-sc","gp-sc","p360-sc","cnn-sc","cf-sc","folha-sc"], nota:"Ofício assinado pelo supervisor regional de educação Waldemar Ronssem Júnior e pela integradora regional Anelise dos Santos de Medeiros: “Determinamos que as obras listadas abaixo sejam retiradas de circulação”. O suplente de vereador Leonel Camasão (PSOL) levou o caso ao Ministério Público estadual."},
 {id:"EL-013", data:"2023-11-07", ato:"SC-2023", governo:"Jorginho Mello (PL) · governo de SC", titulo:"A química entre nós", autoria:"Larry Young e Brian Alexander", editora:"", cidade:"Coordenadoria regional", pendencia:"Identificar a coordenadoria regional", uf:"SC", tipo:"Escolar", rede:"Estadual", quem:"Secretaria estadual", alegacao:"Sem justificativa no ofício · determinava armazenar “em local não acessível à comunidade escolar”. A secretaria alegou depois “redistribuição por faixa etária”", eixo:"Sexualidade e gênero", modalidade:"Ocultação", desfecho:"Em aberto", verificado:"Sim", fontes:["cc-sc","gp-sc","p360-sc","cnn-sc","cf-sc","folha-sc"], nota:"Ofício assinado pelo supervisor regional de educação Waldemar Ronssem Júnior e pela integradora regional Anelise dos Santos de Medeiros: “Determinamos que as obras listadas abaixo sejam retiradas de circulação”. O suplente de vereador Leonel Camasão (PSOL) levou o caso ao Ministério Público estadual."},
 {id:"EL-014", data:"2023-11-07", ato:"SC-2023", governo:"Jorginho Mello (PL) · governo de SC", titulo:"Os 13 porquês", autoria:"Jay Asher", editora:"", cidade:"Coordenadoria regional", pendencia:"Identificar a coordenadoria regional", uf:"SC", tipo:"Escolar", rede:"Estadual", quem:"Secretaria estadual", alegacao:"Sem justificativa no ofício · determinava armazenar “em local não acessível à comunidade escolar”. A secretaria alegou depois “redistribuição por faixa etária”", eixo:"Outro", modalidade:"Ocultação", desfecho:"Em aberto", verificado:"Sim", fontes:["cc-sc","gp-sc","p360-sc","cnn-sc","cf-sc","folha-sc"], nota:"Ofício assinado pelo supervisor regional de educação Waldemar Ronssem Júnior e pela integradora regional Anelise dos Santos de Medeiros: “Determinamos que as obras listadas abaixo sejam retiradas de circulação”. O suplente de vereador Leonel Camasão (PSOL) levou o caso ao Ministério Público estadual."},
 {id:"EL-015", data:"2020-02-06", ato:"RO-2020", governo:"Marcos Rocha (PSL) · governo de RO", fim:"2020-02-06", titulo:"Macunaíma", autoria:"Mário de Andrade", editora:"", capa:"macunaima", cidade:"", uf:"RO", tipo:"Escolar", rede:"Estadual", quem:"Secretaria estadual", alegacao:"“Conteúdos inadequados às crianças e adolescentes”", eixo:"Política e ideologia", modalidade:"Contestação sem efeito", desfecho:"Revertido", verificado:"Parcialmente", fontes:["gp-ro","pn-ro","publico-ro","cc-ro","dp-ro","estudo-ro"], nota:"O Memorando-Circular nº 4/2020/SEDUC-DGE traz o nome do secretário Suamy Vivecananda no fecho; o registro eletrônico identifica Irany de Oliveira Lima Morais, diretora-geral de Educação, como signatária digital. A Seduc negou ter ordenado o recolhimento e afirmou que o processo foi encerrado antes de tramitar para escolas ou órgãos externos. O MPF abriu procedimento preparatório para apurar o contexto, a circulação do memorando e as providências adotadas. Há relatos de exemplares encaixotados em algumas escolas, mas a extensão da execução não está comprovada. Um artigo acadêmico publicado em 2024 reproduz imagem do memorando e da relação de títulos. OAB-RO e Academia Brasileira de Letras enviaram notas de repúdio."},
 {id:"EL-016", data:"2020-02-06", ato:"RO-2020", governo:"Marcos Rocha (PSL) · governo de RO", fim:"2020-02-06", titulo:"Memórias póstumas de Brás Cubas", autoria:"Machado de Assis", editora:"", capa:"memorias-postumas", cidade:"", uf:"RO", tipo:"Escolar", rede:"Estadual", quem:"Secretaria estadual", alegacao:"“Conteúdos inadequados às crianças e adolescentes”", eixo:"Política e ideologia", modalidade:"Contestação sem efeito", desfecho:"Revertido", verificado:"Parcialmente", fontes:["gp-ro","pn-ro","publico-ro","cc-ro","dp-ro","estudo-ro"], nota:"O Memorando-Circular nº 4/2020/SEDUC-DGE traz o nome do secretário Suamy Vivecananda no fecho; o registro eletrônico identifica Irany de Oliveira Lima Morais, diretora-geral de Educação, como signatária digital. A Seduc negou ter ordenado o recolhimento e afirmou que o processo foi encerrado antes de tramitar para escolas ou órgãos externos. O MPF abriu procedimento preparatório para apurar o contexto, a circulação do memorando e as providências adotadas. Há relatos de exemplares encaixotados em algumas escolas, mas a extensão da execução não está comprovada. Um artigo acadêmico publicado em 2024 reproduz imagem do memorando e da relação de títulos. OAB-RO e Academia Brasileira de Letras enviaram notas de repúdio."},
 {id:"EL-017", data:"2020-02-06", ato:"RO-2020", governo:"Marcos Rocha (PSL) · governo de RO", fim:"2020-02-06", titulo:"Os sertões", autoria:"Euclides da Cunha", editora:"", cidade:"", uf:"RO", tipo:"Escolar", rede:"Estadual", quem:"Secretaria estadual", alegacao:"“Conteúdos inadequados às crianças e adolescentes”", eixo:"Política e ideologia", modalidade:"Contestação sem efeito", desfecho:"Revertido", verificado:"Parcialmente", fontes:["gp-ro","pn-ro","publico-ro","cc-ro","dp-ro","estudo-ro"], nota:"O Memorando-Circular nº 4/2020/SEDUC-DGE traz o nome do secretário Suamy Vivecananda no fecho; o registro eletrônico identifica Irany de Oliveira Lima Morais, diretora-geral de Educação, como signatária digital. A Seduc negou ter ordenado o recolhimento e afirmou que o processo foi encerrado antes de tramitar para escolas ou órgãos externos. O MPF abriu procedimento preparatório para apurar o contexto, a circulação do memorando e as providências adotadas. Há relatos de exemplares encaixotados em algumas escolas, mas a extensão da execução não está comprovada. Um artigo acadêmico publicado em 2024 reproduz imagem do memorando e da relação de títulos. OAB-RO e Academia Brasileira de Letras enviaram notas de repúdio."},
 {id:"EL-018", data:"2020-02-06", ato:"RO-2020", governo:"Marcos Rocha (PSL) · governo de RO", fim:"2020-02-06", titulo:"O castelo", autoria:"Franz Kafka", editora:"", cidade:"", uf:"RO", tipo:"Escolar", rede:"Estadual", quem:"Secretaria estadual", alegacao:"“Conteúdos inadequados às crianças e adolescentes”", eixo:"Política e ideologia", modalidade:"Contestação sem efeito", desfecho:"Revertido", verificado:"Parcialmente", fontes:["gp-ro","pn-ro","publico-ro","cc-ro","dp-ro","estudo-ro"], nota:"O Memorando-Circular nº 4/2020/SEDUC-DGE traz o nome do secretário Suamy Vivecananda no fecho; o registro eletrônico identifica Irany de Oliveira Lima Morais, diretora-geral de Educação, como signatária digital. A Seduc negou ter ordenado o recolhimento e afirmou que o processo foi encerrado antes de tramitar para escolas ou órgãos externos. O MPF abriu procedimento preparatório para apurar o contexto, a circulação do memorando e as providências adotadas. Há relatos de exemplares encaixotados em algumas escolas, mas a extensão da execução não está comprovada. Um artigo acadêmico publicado em 2024 reproduz imagem do memorando e da relação de títulos. OAB-RO e Academia Brasileira de Letras enviaram notas de repúdio."},
 {id:"EL-019", data:"2020-02-06", ato:"RO-2020", governo:"Marcos Rocha (PSL) · governo de RO", fim:"2020-02-06", titulo:"Contos de terror, de mistério e de morte", autoria:"Edgar Allan Poe", editora:"", cidade:"", uf:"RO", tipo:"Escolar", rede:"Estadual", quem:"Secretaria estadual", alegacao:"“Conteúdos inadequados às crianças e adolescentes”", eixo:"Violência", modalidade:"Contestação sem efeito", desfecho:"Revertido", verificado:"Parcialmente", fontes:["gp-ro","pn-ro","publico-ro","cc-ro","dp-ro","estudo-ro"], nota:"O Memorando-Circular nº 4/2020/SEDUC-DGE traz o nome do secretário Suamy Vivecananda no fecho; o registro eletrônico identifica Irany de Oliveira Lima Morais, diretora-geral de Educação, como signatária digital. A Seduc negou ter ordenado o recolhimento e afirmou que o processo foi encerrado antes de tramitar para escolas ou órgãos externos. O MPF abriu procedimento preparatório para apurar o contexto, a circulação do memorando e as providências adotadas. Há relatos de exemplares encaixotados em algumas escolas, mas a extensão da execução não está comprovada. Um artigo acadêmico publicado em 2024 reproduz imagem do memorando e da relação de títulos. OAB-RO e Academia Brasileira de Letras enviaram notas de repúdio."},
 {id:"EL-020", data:"2020-02-06", ato:"RO-2020", governo:"Marcos Rocha (PSL) · governo de RO", fim:"2020-02-06", titulo:"A vida como ela é", autoria:"Nelson Rodrigues", editora:"", cidade:"", uf:"RO", tipo:"Escolar", rede:"Estadual", quem:"Secretaria estadual", alegacao:"“Conteúdos inadequados às crianças e adolescentes”", eixo:"Sexualidade e gênero", modalidade:"Contestação sem efeito", desfecho:"Revertido", verificado:"Parcialmente", fontes:["gp-ro","pn-ro","publico-ro","cc-ro","dp-ro","estudo-ro"], nota:"O Memorando-Circular nº 4/2020/SEDUC-DGE traz o nome do secretário Suamy Vivecananda no fecho; o registro eletrônico identifica Irany de Oliveira Lima Morais, diretora-geral de Educação, como signatária digital. A Seduc negou ter ordenado o recolhimento e afirmou que o processo foi encerrado antes de tramitar para escolas ou órgãos externos. O MPF abriu procedimento preparatório para apurar o contexto, a circulação do memorando e as providências adotadas. Há relatos de exemplares encaixotados em algumas escolas, mas a extensão da execução não está comprovada. Um artigo acadêmico publicado em 2024 reproduz imagem do memorando e da relação de títulos. OAB-RO e Academia Brasileira de Letras enviaram notas de repúdio."},
 {id:"EL-021", data:"2020-02-06", ato:"RO-2020", governo:"Marcos Rocha (PSL) · governo de RO", fim:"2020-02-06", titulo:"Beijo no asfalto", autoria:"Nelson Rodrigues", editora:"", cidade:"", uf:"RO", tipo:"Escolar", rede:"Estadual", quem:"Secretaria estadual", alegacao:"“Conteúdos inadequados às crianças e adolescentes”", eixo:"Sexualidade e gênero", modalidade:"Contestação sem efeito", desfecho:"Revertido", verificado:"Parcialmente", fontes:["gp-ro","pn-ro","publico-ro","cc-ro","dp-ro","estudo-ro"], nota:"O Memorando-Circular nº 4/2020/SEDUC-DGE traz o nome do secretário Suamy Vivecananda no fecho; o registro eletrônico identifica Irany de Oliveira Lima Morais, diretora-geral de Educação, como signatária digital. A Seduc negou ter ordenado o recolhimento e afirmou que o processo foi encerrado antes de tramitar para escolas ou órgãos externos. O MPF abriu procedimento preparatório para apurar o contexto, a circulação do memorando e as providências adotadas. Há relatos de exemplares encaixotados em algumas escolas, mas a extensão da execução não está comprovada. Um artigo acadêmico publicado em 2024 reproduz imagem do memorando e da relação de títulos. OAB-RO e Academia Brasileira de Letras enviaram notas de repúdio."},
 {id:"EL-022", data:"2020-02-06", ato:"RO-2020", governo:"Marcos Rocha (PSL) · governo de RO", fim:"2020-02-06", titulo:"Obra de Rubem Fonseca (19 títulos)", autoria:"Rubem Fonseca", editora:"", capaVazia:"19 títulos do mesmo autor", cidade:"", uf:"RO", tipo:"Escolar", rede:"Estadual", quem:"Secretaria estadual", alegacao:"“Conteúdos inadequados às crianças e adolescentes”", eixo:"Violência", modalidade:"Contestação sem efeito", desfecho:"Revertido", verificado:"Parcialmente", fontes:["gp-ro","pn-ro","publico-ro","cc-ro","dp-ro","estudo-ro"], pendencia:"Desmembrar nos 19 títulos", nota:"O Memorando-Circular nº 4/2020/SEDUC-DGE traz o nome do secretário Suamy Vivecananda no fecho; o registro eletrônico identifica Irany de Oliveira Lima Morais, diretora-geral de Educação, como signatária digital. A Seduc negou ter ordenado o recolhimento e afirmou que o processo foi encerrado antes de tramitar para escolas ou órgãos externos. O MPF abriu procedimento preparatório para apurar o contexto, a circulação do memorando e as providências adotadas. Há relatos de exemplares encaixotados em algumas escolas, mas a extensão da execução não está comprovada. Um artigo acadêmico publicado em 2024 reproduz imagem do memorando e da relação de títulos. OAB-RO e Academia Brasileira de Letras enviaram notas de repúdio."},
 {id:"EL-023", data:"2020-02-06", ato:"RO-2020", governo:"Marcos Rocha (PSL) · governo de RO", fim:"2020-02-06", titulo:"Obra completa de Rubem Alves", autoria:"Rubem Alves", editora:"", capaVazia:"Obra completa, sem lista", cidade:"", uf:"RO", tipo:"Escolar", rede:"Estadual", quem:"Secretaria estadual", alegacao:"“Conteúdos inadequados às crianças e adolescentes”", eixo:"Política e ideologia", modalidade:"Contestação sem efeito", desfecho:"Revertido", verificado:"Parcialmente", fontes:["gp-ro","pn-ro","publico-ro","cc-ro","dp-ro","estudo-ro"], pendencia:"Sem relação de títulos", nota:"O Memorando-Circular nº 4/2020/SEDUC-DGE traz o nome do secretário Suamy Vivecananda no fecho; o registro eletrônico identifica Irany de Oliveira Lima Morais, diretora-geral de Educação, como signatária digital. A Seduc negou ter ordenado o recolhimento e afirmou que o processo foi encerrado antes de tramitar para escolas ou órgãos externos. O MPF abriu procedimento preparatório para apurar o contexto, a circulação do memorando e as providências adotadas. Há relatos de exemplares encaixotados em algumas escolas, mas a extensão da execução não está comprovada. Um artigo acadêmico publicado em 2024 reproduz imagem do memorando e da relação de títulos. OAB-RO e Academia Brasileira de Letras enviaram notas de repúdio."},
 {id:"EL-024", data:"2020-02-06", ato:"RO-2020", governo:"Marcos Rocha (PSL) · governo de RO", fim:"2020-02-06", titulo:"Demais títulos da lista de Rondônia", autoria:"Vários, entre eles Caio Fernando Abreu, Carlos Heitor Cony e Ferreira Gullar", editora:"", capaVazia:"Títulos não identificados nas fontes", cidade:"", uf:"RO", tipo:"Escolar", rede:"Estadual", quem:"Secretaria estadual", alegacao:"“Conteúdos inadequados às crianças e adolescentes”", eixo:"Outro", modalidade:"Contestação sem efeito", desfecho:"Revertido", verificado:"Parcialmente", fontes:["gp-ro","pn-ro","publico-ro","cc-ro","dp-ro","estudo-ro"], pendencia:"Obter o Adendo ID 10053329", nota:"O Memorando-Circular nº 4/2020/SEDUC-DGE traz o nome do secretário Suamy Vivecananda no fecho; o registro eletrônico identifica Irany de Oliveira Lima Morais, diretora-geral de Educação, como signatária digital. A Seduc negou ter ordenado o recolhimento e afirmou que o processo foi encerrado antes de tramitar para escolas ou órgãos externos. O MPF abriu procedimento preparatório para apurar o contexto, a circulação do memorando e as providências adotadas. Há relatos de exemplares encaixotados em algumas escolas, mas a extensão da execução não está comprovada. Um artigo acadêmico publicado em 2024 reproduz imagem do memorando e da relação de títulos. OAB-RO e Academia Brasileira de Letras enviaram notas de repúdio."},
 {id:"EL-025", data:"2021-06-11", ato:"PALM-2021", governo:"Jair Bolsonaro (sem partido) · governo federal", pressao:"Sérgio Camargo, presidente da Fundação Palmares por indicação do governo", fim:"2021-06-23", titulo:"Expurgo de 5.165 títulos de “temática alheia à negra”", autoria:"Vários, entre eles Karl Marx, Max Weber, Eric Hobsbawm, Celso Furtado, Caio Prado Jr. e Machado de Assis", editora:"", capaVazia:"Sem lista título a título", cidade:"Brasília", uf:"DF", tipo:"Especializada", rede:"Federal", quem:"Presidência da Fundação Cultural Palmares", alegacao:"Relatório “Retrato do Acervo: três décadas de dominação marxista na Fundação Cultural Palmares” · obras acusadas de “doutrinação marxista”", eixo:"Política e ideologia", modalidade:"Retirada total", desfecho:"Revertido", verificado:"Sim", fontes:["em-palmares","sbt-palm","gp-palmares","opovo-palm"], pendencia:"Obter a relação de títulos e o desfecho final da ação", nota:"O acervo tinha 9.565 exemplares; 5.165, 54% do total, foram marcados para descarte. O Conselho Federal de Biblioteconomia apontou ausência de bibliotecários e de política de desenvolvimento de coleções. Em 23 de junho de 2021, em ação popular, o juiz Erik Wolkart, da 2ª Vara Federal de São Gonçalo (RJ), proibiu a doação em liminar, com multa pessoal de R$ 500 ao presidente da fundação por item doado."},
 {id:"EL-026", data:"2021-08-03", ato:"PALM-2021", governo:"Jair Bolsonaro (sem partido) · governo federal", pressao:"Sérgio Camargo, presidente da Fundação Palmares por indicação do governo", titulo:"“Acervo da Vergonha” · 300 obras isoladas", autoria:"Vários, entre eles Antonio Gramsci, Marilena Chauí, Simone de Beauvoir, Karl Marx e Celso Furtado", editora:"", capaVazia:"Sem lista título a título", cidade:"Brasília", uf:"DF", tipo:"Especializada", rede:"Federal", quem:"Presidência da Fundação Cultural Palmares", alegacao:"“Bibliografia imprestável para a Palmares” · obras descritas como “marxistas e bandidólatras”", eixo:"Política e ideologia", modalidade:"Ocultação", desfecho:"Em aberto", verificado:"Sim", fontes:["opovo-palm","sbt-museu"], pendencia:"Verificar destino do acervo após 2023", nota:"Após ser impedido judicialmente de descartar as obras, o presidente da fundação anunciou a criação de uma sala para isolá-las."},
 {id:"EL-027", data:"2024-06-01", ato:"MG-2024", governo:"Mário Marcus Leão Dutra · prefeitura de Conselheiro Lafaiete (partido a confirmar)", pressao:"Grupo de pais de alunos", fim:"2024-06-27", titulo:"O menino marrom", autoria:"Ziraldo", editora:"Melhoramentos", capa:"menino-marrom", cidade:"Conselheiro Lafaiete", uf:"MG", tipo:"Escolar", rede:"Municipal", quem:"Secretaria municipal", alegacao:"Obra “agressiva” · queixa de um grupo de pais sobre um trecho de “pacto de sangue” entre os personagens", eixo:"Cultura afro-brasileira", modalidade:"Retirada total", desfecho:"Revertido", verificado:"Sim", fontes:["pn-ziraldo","dp-ziraldo"], nota:"Uma circular da prefeitura suspendeu o uso do livro nas escolas municipais depois da pressão de um grupo de pais. Uma professora entrou com ação popular, e o juiz Espagner Wallyssen, da 1ª Vara Cível da comarca, considerou a medida censura e a derrubou, com multa diária de R$ 5 mil. Para o juiz, a pressão de pais não justifica restrição; o único filtro admitido é a classificação indicativa."},
 {id:"EL-028", data:"2024-06-04", ato:"SJC-2024", governo:"Anderson Farias (PSD) · prefeitura de São José dos Campos", pressao:"Vereador Thomaz Henrique (PL)", fim:"2026-07-28", titulo:"Meninas sonhadoras, mulheres cientistas", autoria:"Flávia Martins de Carvalho", editora:"Mostarda", capa:"meninas-sonhadoras", cidade:"São José dos Campos", uf:"SP", tipo:"Escolar", rede:"Municipal", quem:"Secretaria municipal", alegacao:"“Apologia ao aborto” e “doutrinação” · acusação do vereador Thomaz Henrique (PL)", eixo:"Sexualidade e gênero", modalidade:"Retirada total", desfecho:"Revertido", verificado:"Sim", fontes:["pn-sjc","ap-sjc","op-sjc"], nota:"A prefeitura recolheu o livro das salas de leitura de todas as escolas municipais em junho de 2024, depois das críticas do vereador à inclusão de Marielle Franco e Débora Diniz entre as mulheres retratadas. O Ministério Público e a Defensoria foram à Justiça. Em julho de 2026, a juíza Renata Heloísa da Silva Salles, da Vara da Infância e Juventude, reconheceu censura e mandou devolver a obra em cinco dias; negou a indenização por dano moral coletivo. O vereador anunciou recurso."},
 {id:"EL-029", data:"2023-04-26", ato:"UNIRV-2023", governo:"UniRV · universidade municipal de Rio Verde", pressao:"Deputado federal Gustavo Gayer (PL)", titulo:"Eu receberia as piores notícias dos seus lindos lábios", autoria:"Marçal Aquino", editora:"Companhia das Letras", capa:"piores-noticias", cidade:"Rio Verde", uf:"GO", tipo:"Universitária", rede:"Municipal", quem:"Instituição (UniRV)", alegacao:"Livro “pornográfico” · crítica do deputado federal Gustavo Gayer (PL-GO) em vídeo, que levou a universidade a decidir “pela exclusão imediata”", eixo:"Sexualidade e gênero", modalidade:"Veto a aquisição", desfecho:"Retirado", verificado:"Sim", fontes:["fp-unirv","jo-unirv"], nota:"Retirado da lista de leituras do vestibular. Em nota de 26 de abril de 2023, a universidade admitiu que a polêmica levantada pelo parlamentar pesou na decisão. A Academia Brasileira de Letras repudiou."},
 {id:"EL-030", data:"2024-11-01", ato:"LON-2024", governo:"Marcelo Belinati (PP) · prefeitura de Londrina", pressao:"Vereadora Jéssica Ramos Moreno (PP)", titulo:"A mamãe vai ter um bebê", autoria:"", editora:"", capaVazia:"Capa não disponível", cidade:"Londrina", uf:"PR", tipo:"Escolar", rede:"Municipal", quem:"Secretaria municipal", alegacao:"Desenho de um casal em posição sexual · queixa da vereadora Jéssica Ramos Moreno (PP), que encontrou o livro numa creche", eixo:"Sexualidade e gênero", modalidade:"Retirada total", desfecho:"Retirado", verificado:"Parcialmente", fontes:["fl-londrina","bp-londrina"], pendencia:"Confirmar autoria, data exata e alcance do recolhimento", nota:"Livro infantil que explica de onde vêm os bebês. O episódio deu impulso ao Projeto de Lei 79/2024, aprovado por unanimidade na Câmara de Londrina, que proíbe livros de “conteúdo erótico” nas escolas municipais e só admite explicação científica sobre reprodução “respeitada a idade apropriada”."},
 {id:"EL-031", data:"2026-05-15", ato:"DF-2026", governo:"Celina Leão (PP) · governo do DF; escola administrada pelo Corpo de Bombeiros", pressao:"Pais de alunos do 4º ano", titulo:"A bolsa amarela", autoria:"Lygia Bojunga", editora:"", cidade:"Brasília", uf:"DF", tipo:"Escolar", rede:"Estadual", quem:"Direção da escola", alegacao:"Abordagem de identidade de gênero “inadequada” para crianças de 9 anos · queixa de pais em grupos de mensagem, centrada no desejo da protagonista de ter nascido menino", eixo:"Sexualidade e gênero", modalidade:"Veto a atividade", desfecho:"Retirado", verificado:"Sim", fontes:["met-bolsa1","met-bolsa2"], nota:"No Colégio Militar Dom Pedro II, administrado pelo Corpo de Bombeiros do DF, um trecho do livro era usado em exercício de interpretação do 4º ano. Depois da reação dos pais, a escola retirou o material “preventivamente”. Disse ter concluído que não havia prejuízo pedagógico nem direcionamento ideológico, mas não o recolocou, porque a atividade já tinha terminado."},
 {id:"EL-032", data:"2025-11-01", ato:"TAU-2025", governo:"Sérgio Victor (Novo) · prefeitura de Taubaté", pressao:"Vereadora Zelinda Pastora (PRD)", titulo:"Pipoca e Picolé", autoria:"Adriana Lisboa", editora:"Elo", capaVazia:"Capa não disponível", cidade:"Taubaté", uf:"SP", tipo:"Escolar", rede:"Municipal", quem:"Secretaria municipal", alegacao:"“Nós não vamos aceitar material como esse na nossa sala de aula” · vereadora Zelinda Pastora, sobre a família de uma menina com duas mães e um pai", eixo:"Sexualidade e gênero", modalidade:"Retirada total", desfecho:"Em aberto", verificado:"Parcialmente", fontes:["ovale-tau"], pendencia:"Buscar segunda fonte e o resultado da análise", nota:"A prefeitura comprou o livro em 2024, na gestão anterior: 3.280 kits para alunos e 116 para professores, por R$ 1,2 milhão. No fim de 2025, o secretário de Educação mandou retirá-lo das escolas; em 2026 o livro voltou a aparecer em algumas unidades e houve nova ordem. A prefeitura diz que a análise é só pedagógica. Vereadores do PT e do PSB pediram explicações."},
 {id:"EL-033", data:"2020-01-15", ato:"FUNAP-2020", governo:"João Doria (PSDB) · governo de SP", titulo:"Livros doados ao projeto Remição em Rede", autoria:"Vários, entre eles Gabriel García Márquez, Isabela Figueiredo e Édouard Louis", editora:"Record, Planeta, Todavia e Boitempo", capaVazia:"12 títulos, 240 exemplares", cidade:"São Paulo", uf:"SP", tipo:"Especializada", rede:"Estadual", quem:"Fundação estadual (Funap)", alegacao:"Não declarada · segundo o projeto, três títulos foram considerados inadequados, sem identificação", eixo:"Outro", modalidade:"Veto a aquisição", desfecho:"Em aberto", verificado:"Sim", fontes:["bdf-funap","reimao-2023"], pendencia:"Identificar os três títulos vetados", nota:"O projeto levava livros a presos para remição de pena pela leitura. A Funap, fundação do governo paulista, suspendeu a parceria e não apresentou motivos; as editoras pediram os livros de volta. A fundação negou censura e propôs uma comissão avaliadora. Entre os doados estavam Crônica de uma morte anunciada, Caderno de memórias coloniais e O fim de Eddy."},
 {id:"EL-034", data:"2019-08-01", ato:"LIM-2019", governo:"Prefeitura de Limeira", pressao:"Vereador (nome e partido a confirmar)", titulo:"A bolsa amarela", autoria:"Lygia Bojunga", editora:"", cidade:"Limeira", uf:"SP", tipo:"Escolar", rede:"Municipal", quem:"Vereador", alegacao:"“Ideologia de gênero”", eixo:"Sexualidade e gênero", modalidade:"Contestação sem efeito", desfecho:"Revertido", verificado:"Parcialmente", fontes:["reimao-2023","uninter-bolsa"], pendencia:"Buscar reportagem da época e o nome do vereador", nota:"Um vereador pediu à Secretaria Municipal de Educação que tirasse o livro da lista de leituras indicadas. O pedido não foi atendido, depois de parecer da Associação de Escritores e Ilustradores de Literatura Infantil e Juvenil. Sete anos depois, o mesmo livro voltaria a ser alvo num colégio militar do DF."},
];

const LIVROS = {
 "O avesso da pele":{
   ano:2020, genero:"Romance", premio:"Prêmio Jabuti 2021, Livro do Ano",
   sinopse:"Um professor negro é morto pela polícia em Porto Alegre. O filho reconstrói a vida do pai a partir dos objetos, dos silêncios e do que a cidade fez com o corpo dele.",
   nota:"Aprovado no PNLD antes das retiradas. O parecer do MEC, obtido pela Fiquem Sabendo via Lei de Acesso à Informação, avaliou que a linguagem tinha coerência interna com a narrativa. Voltou às escolas do PR e de GO em abril de 2024; no MS, a devolução foi anunciada no fim de abril."},
 "Laranja Mecânica":{
   ano:1962, genero:"Romance",
   sinopse:"Numa Inglaterra distópica, um adolescente violento é submetido a um tratamento de condicionamento que o impede de escolher o mal — e, com isso, de escolher.",
   nota:"Livro sobre os limites do Estado ao suprimir a escolha individual, retirado por decisão de Estado."},
 "It: A coisa":{
   ano:1986, genero:"Terror",
   sinopse:"Sete crianças de uma cidade do Maine enfrentam uma entidade que se alimenta do medo, e voltam adultas para terminar o que começaram."},
 "Os 13 porquês":{
   ano:2007, genero:"Juvenil",
   sinopse:"Uma adolescente deixa treze fitas explicando as razões que a levaram ao suicídio, endereçadas a quem participou de cada uma.",
   nota:"Único título da lista de SC cujo tema central é saúde mental adolescente."},
 "A química entre nós":{
   ano:2012, genero:"Não ficção",
   sinopse:"Um neurocientista e um jornalista investigam a base biológica do desejo, do amor e do vínculo humano.",
   nota:"Obra de divulgação científica sobre a neurobiologia do vínculo, assinada por um neurocientista e um jornalista, guardada na mesma ordem que livros de terror."},
 "O diário do diabo: os segredos de Alfred Rosenberg, o maior intelectual do nazismo":{
   ano:2016, genero:"Não ficção, história",
   sinopse:"A partir de diários desaparecidos por décadas, reconstrói a trajetória do ideólogo racial do nazismo, condenado em Nuremberg.",
   nota:"Livro crítico ao nazismo, retirado sob a mesma ordem que atingiu obras de terror."},
 "Macunaíma":{
   ano:1928, genero:"Rapsódia",
   sinopse:"O herói sem nenhum caráter atravessa um Brasil de mitos, cidades e línguas sobrepostas, no livro que fundou boa parte do modernismo brasileiro.",
   nota:"Estava na lista de Rondônia. O secretário de Educação declarou à imprensa que “Macunaíma é filme e o escambau”."},
 "Memórias póstumas de Brás Cubas":{
   ano:1881, genero:"Romance",
   sinopse:"Um defunto autor narra a própria vida com ironia, do leito de morte para trás, inaugurando o realismo machadiano.",
   nota:"Leitura obrigatória em vestibulares, listada como “conteúdo inadequado às crianças e adolescentes”."},
 "Os sertões":{
   ano:1902, genero:"Não ficção",
   sinopse:"O relato de Euclides da Cunha sobre a Guerra de Canudos e a destruição do arraial pelo Exército, um dos livros fundadores do pensamento social brasileiro."},
 "O castelo":{
   ano:1926, genero:"Romance",
   sinopse:"Um agrimensor tenta chegar ao castelo que o contratou e esbarra numa burocracia que nunca se explica nem se deixa alcançar."},
 "Contos de terror, de mistério e de morte":{
   genero:"Contos",
   sinopse:"Reunião dos contos de Poe que fundaram a literatura de horror psicológico moderna."},
 "A vida como ela é":{
   genero:"Crônicas",
   sinopse:"Crônicas do cotidiano carioca, publicadas originalmente em jornal, sobre traição, desejo e hipocrisia de classe média."},
 "Beijo no asfalto":{
   ano:1961, genero:"Teatro",
   sinopse:"Um homem beija um desconhecido atropelado, e a imprensa transforma o gesto em escândalo que destrói sua vida.",
   nota:"Peça sobre linchamento moral fabricado pela imprensa."},
 "O menino marrom":{
   ano:1986, genero:"Infantil",
   sinopse:"A amizade entre um menino marrom e um menino cor-de-rosa, e as perguntas dos dois sobre cor, diferença e preconceito.",
   nota:"Clássico de Ziraldo sobre racismo para crianças, suspenso por “conteúdo agressivo” e devolvido por decisão judicial."},
 "Meninas sonhadoras, mulheres cientistas":{
   genero:"Infantojuvenil, não ficção",
   sinopse:"Trajetórias de mulheres brasileiras na pesquisa e na vida pública, escrito por uma juíza do TJSP.",
   nota:"Recolhido depois que um vereador criticou a presença de Marielle Franco e Débora Diniz entre as retratadas. Dois anos depois, a Justiça chamou a retirada de censura."},
 "Eu receberia as piores notícias dos seus lindos lábios":{
   ano:2005, genero:"Romance",
   sinopse:"Num garimpo do Pará, um fotógrafo se envolve com a mulher de um pastor. O desejo e a violência dividem o mesmo território.",
   nota:"Saiu da lista de leituras do vestibular, o que o catálogo registra como veto a aquisição. A decisão veio dias depois de um deputado chamar o livro de pornográfico em vídeo."},
 "Obra de Rubem Fonseca (19 títulos)":{
   nota:"Maior alvo isolado da lista de Rondônia: 19 dos 43 títulos. Fonseca já havia sido censurado na ditadura militar, quando Feliz Ano Novo foi proibido."},
 "Obra completa de Rubem Alves":{
   nota:"O memorando determinava, em nota de rodapé, que todos os livros do autor fossem recolhidos. Educador e teólogo, é considerado um dos principais pedagogos brasileiros ao lado de Paulo Freire."},
 "Donnie Darko":{
   genero:"Roteiro",
   sinopse:"O roteiro do filme de 2001 sobre um adolescente que, depois de escapar de um acidente, passa a ter visões de um coelho que anuncia o fim do mundo."},
 "Coração Satânico":{
   ano:1978, genero:"Romance policial",
   sinopse:"Um detetive de Nova York é contratado para achar um cantor desaparecido e descobre que o cliente tem planos para a alma de alguém."},
 "Exorcismo":{
   ano:1993, genero:"Não ficção",
   sinopse:"Reconstrução jornalística do caso de 1949 que inspirou O exorcista, a partir do diário de um dos padres envolvidos."},
 "Ed & Lorraine Warren: demonologistas — arquivos sobrenaturais":{
   ano:1980, genero:"Não ficção",
   sinopse:"Relatos do casal de investigadores paranormais cujos casos viraram a série de filmes Invocação do Mal."},
 "A bolsa amarela":{
   ano:1976, genero:"Infantojuvenil",
   sinopse:"Raquel esconde numa bolsa amarela três vontades que não cabem em casa: crescer, ter nascido menino e escrever.",
   nota:"Clássico de Lygia Bojunga, primeira autora fora da Europa e dos EUA a receber o Prêmio Hans Christian Andersen, em 1982."},
 "Pipoca e Picolé":{
   genero:"Infantil",
   sinopse:"A menina Pipoca e o cachorro Picolé numa família com um pai e duas mães.",
   nota:"Comprado pela própria prefeitura um ano antes, por R$ 1,2 milhão, e retirado das escolas pela gestão seguinte."},
 "Livros doados ao projeto Remição em Rede":{
   nota:"Livros para presos reduzirem a pena pela leitura, direito previsto em lei. Entre os doados, um romance de um Nobel de Literatura."},
 "A mamãe vai ter um bebê":{
   genero:"Infantil",
   nota:"Livro de educação sexual para crianças pequenas. A lei aprovada em seguida pela Câmara de Londrina permite explicação científica sobre reprodução, que é o assunto do livro."},
 "Expurgo de 5.165 títulos de “temática alheia à negra”":{
   nota:"O acervo da fundação tinha 9.565 exemplares; o expurgo atingia 54%. O Conselho Federal de Biblioteconomia apontou que o relatório que embasou o expurgo não constitui política de desenvolvimento de coleções e foi feito sem bibliotecários."},
 "“Acervo da Vergonha” · 300 obras isoladas":{
   nota:"Resposta institucional à decisão judicial: impedido de descartar, o órgão isolou as obras em sala própria, o que o catálogo classifica como ocultação."},
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
 "reimao-2023": {
  "veic": "Literatura e Autoritarismo (pesquisa, UFSM)",
  "data": "2023",
  "tit": "Tentativas de censura a livros nos primeiros dois anos do governo Bolsonaro · Reimão, Nery e Maués",
  "url": "https://periodicos.ufsm.br/LA/article/view/66347"
 },
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
  "data": "2024-06-30",
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
 }
};

/* taxonomias completas; inclui as categorias em zero, de propósito */
const MODALIDADES = ["Retirada total","Restrição de acesso","Ocultação","Veto a atividade",
  "Veto a aquisição","Autocensura","Destruição","Contestação sem efeito"];
const EIXOS = ["Cultura afro-brasileira","Sexualidade e gênero","Sobrenatural e mágico",
  "Política e ideologia","Religião","Linguagem e palavrão","Violência","Outro"];
/* data da última revisão do catálogo (AAAA-MM-DD); aparece no rodapé */
const ATUALIZADO = "2026-10-28";

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
 {data:"2026-10-27", id:"EL-004", texto:"O avesso da pele no MS: o desfecho passou de Retirado para Revertido. A Secretaria de Educação anunciou a devolução às bibliotecas em 23 de abril de 2024."},
 {data:"2026-10-27", id:"EL-027", texto:"O menino marrom em MG: o desfecho passou de Retirado para Revertido. A 1ª Vara Cível de Conselheiro Lafaiete derrubou a suspensão em junho de 2024. A ordem partiu da prefeitura, depois de pressão de pais."},
 {data:"2026-10-27", id:"EL-028", texto:"Meninas sonhadoras, mulheres cientistas: o local passou de biblioteca pública para salas de leitura das escolas municipais; a data, de 2024 para junho de 2024; a alegação, de “não declarada” para a acusação do vereador. Acrescentada a sentença de julho de 2026."},
 {data:"2026-10-27", id:"EL-001", texto:"Santa Cruz do Sul: quem mandou recolher foi a 6ª Coordenadoria Regional de Educação, para 18 municípios, e a Secretaria estadual desautorizou no mesmo dia. O texto anterior dizia “Corregedoria” e atribuía a ordem à direção da escola."},
 {data:"2026-10-27", id:"EL-002", texto:"Paraná: o ofício citou expressões e cenas de sexo “inadequadas para menores de dezoito anos”; o texto anterior dizia que não havia motivo de conteúdo. Retirado o número de 2.000 exemplares, que não aparece nas fontes."},
 {data:"2026-10-27", id:"EL-005", texto:"Rebaixado para parcialmente verificado: fonte única."},
 {data:"2026-10-27", id:"EL-015", texto:"Rondônia (EL-015 a EL-024): o memorando foi assinado pela diretora geral de educação, Irany Morais, em nome do secretário."},
 {data:"2026-10-27", id:"EL-025", texto:"Palmares: o que está documentado é uma liminar da 2ª Vara Federal de São Gonçalo, de junho de 2021. Retirada a expressão “decisão definitiva”."},
 {data:"2026-10-27", id:"EL-029", texto:"UniRV: data precisada (26 de abril de 2023), rede corrigida para municipal, fonte de blog substituída por duas reportagens."},
 {data:"2026-10-27", id:"EL-006", texto:"Santa Catarina 2023 (EL-006 a EL-014): coordenadoria regional não identificada nas fontes; quem acionou o MP foi um suplente de vereador; grafia Ronssem."},
 {data:"2026-10-27", id:"Painel", texto:"Retirada a atribuição de uma “hipótese” sobre temas censurados à pesquisadora Sandra Reimão, que não a formulou, e a referência a relatos da FEBAB de 2020, que não existem nesse formato. Corrigida a contagem de estados (eram oito e o DF)."},
 {data:"2026-10-28", id:"Responsabilização", texto:"As fichas passaram a distinguir pressão/pedido, decisão, assinatura, execução, fiscalização e resposta/reversão. Os nomes são apresentados conforme as fontes já cadastradas; quando a pessoa responsável não está identificada, a lacuna permanece explícita."},
];


/* Responsabilização: separar pressão, decisão administrativa, assinatura e execução.
   Só são nomeadas pessoas quando o cadastro documental as identifica. */
const RESPONSABILIDADES = (() => {
  const r = {};
  const set = (ids, dados) => ids.forEach(id => r[id] = dados);
  const semNome = "A pessoa responsável pela decisão não está identificada nas fontes cadastradas.";
  set(["EL-001"], {
    pressao:"Janaína Venzon, diretora da Escola Estadual Ernesto Alves: fez a crítica pública em vídeo. O cadastro não sustenta que ela tenha expedido a ordem administrativa.",
    decisor:"Luiz Ricardo Pinho de Moura, coordenador da 6ª Coordenadoria Regional de Educação: o ofício da coordenadoria determinou a retirada.",
    assinantes:"Luiz Ricardo Pinho de Moura, coordenador da 6ª CRE.",
    executor:"6ª Coordenadoria Regional de Educação, com alcance informado de 18 municípios do Vale do Rio Pardo.",
    resposta:"A Secretaria de Educação do Rio Grande do Sul desautorizou a ordem no mesmo dia."
  });
  set(["EL-002"], {
    decisor:"Secretaria de Estado da Educação do Paraná, que encaminhou ofício aos chefes dos núcleos regionais em 4 de março de 2024; o recolhimento seria realizado entre os dias 5 e 8.",
    assinantes:"Anderfábio Oliveira dos Santos, diretor de Educação, e Laura Patrícia Lopes, chefe do Núcleo Regional de Educação de Curitiba.",
    executor:"Secretaria estadual e Núcleo Regional de Educação de Curitiba.",
    resposta:"A obra voltou às escolas em abril de 2024, acompanhada de orientações pedagógicas."
  });
  set(["EL-003"], {
    decisor:"Secretaria de Estado da Educação de Goiás.",
    assinantes:semNome,
    executor:"Rede estadual de ensino.",
    resposta:"O livro voltou às escolas em abril de 2024."
  });
  set(["EL-004"], {
    pressao:"Rinaldo Modesto (Podemos), deputado estadual: pediu a retirada na Assembleia Legislativa.",
    decisor:"Eduardo Riedel, governador de Mato Grosso do Sul: a Secretaria confirmou à CartaCapital que o recolhimento atendia a uma determinação do governador, após análise da própria pasta.",
    assinantes:"A autoridade que formalizou a ordem não está identificada no cadastro.",
    executor:"Secretaria de Estado de Educação de Mato Grosso do Sul.",
    resposta:"A Secretaria anunciou a devolução em 23 de abril de 2024, com orientações pedagógicas."
  });
  set(["EL-005"], {
    decisor:"Secretaria de Estado de Educação de Mato Grosso do Sul.",
    assinantes:semNome,
    executor:"Rede estadual; exemplares foram redistribuídos para EJA e centros de educação profissional.",
    resposta:"A justificativa pública foi apresentada como revisão de acervo e adequação por faixa etária."
  });
  set(["EL-006","EL-007","EL-008","EL-009","EL-010","EL-011","EL-012","EL-013","EL-014"], {
    decisor:"Supervisão/estrutura regional da Secretaria de Estado da Educação de Santa Catarina.",
    assinantes:"Waldemar Ronssem Júnior, supervisor regional de Educação, e Anelise dos Santos de Medeiros, integradora regional, assinaram o ofício que determinou a retirada de circulação.",
    executor:"Estrutura regional da rede estadual de ensino. A coordenadoria específica ainda não foi identificada nas fontes cadastradas.",
    fiscalizacao:"Leonel Camasão (PSOL), suplente de vereador, levou o caso ao Ministério Público. O cadastro o identifica como autor da denúncia posterior, não como autor do pedido de retirada."
  });
  set(["EL-015","EL-016","EL-017","EL-018","EL-019","EL-020","EL-021","EL-022","EL-023","EL-024"], {
    decisor:"O Memorando-Circular nº 4/2020/SEDUC-DGE traz a determinação em nome do secretário de Educação Suamy Vivecananda. A Seduc depois negou ter ordenado o recolhimento e afirmou que o processo foi encerrado antes de tramitar para escolas ou órgãos externos.",
    assinantes:"O fecho do documento traz o nome de Suamy Vivecananda; o registro eletrônico aponta assinatura digital de Irany de Oliveira Lima Morais, diretora-geral de Educação. São funções documentais distintas: nome indicado no fecho e signatária eletrônica.",
    executor:"O memorando encaminhava a providência às coordenadorias regionais. A Seduc afirmou que não houve tramitação para escolas; há relatos de exemplares encaixotados em algumas unidades, mas o alcance da execução não está comprovado.",
    resposta:"A Seduc negou ter ordenado a retirada e declarou que encerrou o processo. O MPF instaurou procedimento preparatório e pediu a íntegra do memorando e do processo SEI 0029.051300/2020-91; o resultado posterior não está documentado na base."
  });
  set(["EL-025","EL-026"], {
    decisor:"Presidência da Fundação Cultural Palmares, durante a gestão de Sérgio Camargo.",
    responsavel:"Sérgio Camargo, então presidente da Fundação Cultural Palmares. O registro associa a iniciativa à presidência e à gestão; a atribuição de cada ato individual deve ser lida junto dos documentos e fontes do caso.",
    executor:"Fundação Cultural Palmares.",
    resposta:"No caso EL-025, a Justiça Federal concedeu liminar para impedir a doação dos livros. No EL-026, foi anunciada a criação do chamado “Acervo da Vergonha”."
  });
  set(["EL-027"], {
    pressao:"Grupo de pais de alunos.",
    decisor:"Prefeitura municipal, por circular que suspendeu o uso da obra. O nome da autoridade que assinou a circular não está identificado.",
    executor:"Rede municipal de ensino.",
    resposta:"A 1ª Vara Cível de Conselheiro Lafaiete derrubou a suspensão."
  });
  set(["EL-028"], {
    pressao:"Thomaz Henrique (PL), vereador: criticou a presença de Marielle Franco e Débora Diniz entre as mulheres retratadas e acusou o livro de fazer “apologia ao aborto” e “doutrinação”.",
    decisor:"Prefeitura e Secretaria Municipal de Educação, que recolheram a obra das salas de leitura. A autoridade individual que formalizou a decisão não está identificada.",
    executor:"Rede municipal de ensino.",
    resposta:"Em julho de 2026, a Justiça determinou a devolução do livro."
  });
  set(["EL-029"], {
    pressao:"Gustavo Gayer (PL-GO), deputado federal: publicou vídeo chamando o livro de “pornográfico”.",
    decisor:"Administração da Universidade de Rio Verde (UniRV), que decidiu pela exclusão imediata da lista de leituras do vestibular.",
    responsavel:"A universidade admitiu que a polêmica levantada pelo parlamentar pesou na decisão. O nome da autoridade individual que tomou a decisão não está identificado.",
    executor:"Universidade de Rio Verde (UniRV)."
  });
  set(["EL-030"], {
    pressao:"Jéssica Ramos Moreno (PP), vereadora: questionou o livro após encontrá-lo em uma creche.",
    decisor:"Secretaria/gestão municipal, responsável pelo recolhimento. A autoridade individual que formalizou a decisão ainda precisa ser identificada.",
    executor:"Rede municipal de ensino.",
    pendencia:"Confirmar autoria, data exata e alcance do recolhimento."
  });
  set(["EL-031"], {
    pressao:"Pais de alunos do 4º ano, por mensagens e reclamações à escola.",
    decisor:"Direção do Colégio Militar Dom Pedro II, administrado pelo Corpo de Bombeiros do Distrito Federal, que retirou preventivamente o material.",
    executor:"Colégio Militar Dom Pedro II.",
    resposta:"A escola disse não ter identificado prejuízo pedagógico nem direcionamento ideológico, mas não recolocou o material porque a atividade já havia terminado."
  });
  set(["EL-032"], {
    pressao:"Zelinda Pastora (PRD), vereadora: contestou o livro por retratar uma família com duas mães e um pai.",
    decisor:"Secretaria Municipal de Educação, cujo secretário teria ordenado a retirada. O nome do secretário não está identificado no cadastro.",
    executor:"Rede municipal de ensino.",
    resposta:"A prefeitura declarou que faria análise pedagógica; o cadastro registra que o livro voltou a aparecer em algumas unidades e houve nova ordem."
  });
  set(["EL-033"], {
    decisor:"Fundação Estadual de Amparo ao Trabalhador Preso (Funap), vinculada ao governo paulista, que suspendeu a parceria do projeto Remição em Rede.",
    responsavel:semNome,
    executor:"Funap e gestão do projeto de leitura no sistema prisional.",
    resposta:"A Funap negou censura e propôs a criação de uma comissão avaliadora. O motivo específico para considerar três títulos inadequados não foi apresentado."
  });
  set(["EL-034"], {
    pressao:"Vereador não identificado pelo nome e partido nas fontes cadastradas.",
    decisor:"O pedido foi dirigido à Secretaria Municipal de Educação, mas não foi atendido.",
    executor:"Não houve retirada confirmada neste episódio.",
    pendencia:"Identificar o vereador, o município, a data e localizar a reportagem/documento original."
  });
  return r;
})();


/* Identificação do documento ou ato que sustenta a decisão. Quando o cadastro
   ainda não tem o original ou o número do expediente, isso é explicitado. */
const DOCUMENTOS_ATOS = (() => {
  const d = {};
  const set = (ids, texto) => ids.forEach(id => d[id] = texto);
  set(["EL-001"],"Ofício da 6ª Coordenadoria Regional de Educação; número do expediente ainda não cadastrado.");
  set(["EL-002"],"Ofício da Secretaria de Estado da Educação do Paraná, com prazo de recolhimento até 8 de março de 2024.");
  set(["EL-003"],"Medida atribuída à Secretaria de Estado da Educação de Goiás; o documento original ainda não está identificado no cadastro.");
  set(["EL-004"],"Ordem de recolhimento da rede estadual de Mato Grosso do Sul; documento formal e signatário ainda precisam ser identificados.");
  set(["EL-005"],"Comunicado de revisão de acervo/redistribuição; documento original ainda não está identificado no cadastro.");
  set(["EL-006","EL-007","EL-008","EL-009","EL-010","EL-011","EL-012","EL-013","EL-014"],"Ofício circular de 7 de novembro de 2023, reproduzido e descrito pela imprensa; determina retirar nove obras de circulação e armazená-las em local inacessível à comunidade escolar. Assinaturas atribuídas a Waldemar Ronssem Júnior e Anelise dos Santos de Medeiros. O número do expediente e a cópia integral oficial ainda não estão cadastrados.");
  ATUALIZADO = "2026-10-28";
  set(["EL-025"],"Relatório “Retrato do Acervo: três décadas de dominação marxista na Fundação Cultural Palmares”; a relação completa dos títulos e o desfecho judicial final seguem pendentes.");
  set(["EL-026"],"Anúncio da criação do chamado “Acervo da Vergonha”; documento formal de execução e destino posterior do acervo ainda não identificados.");
  set(["EL-027"],"Circular da prefeitura que suspendeu o uso de O menino marrom; cópia e signatário ainda não identificados no cadastro.");
  set(["EL-028"],"Ato de recolhimento das salas de leitura das escolas municipais; a autoridade signatária e a cópia do ato ainda não estão identificadas.");
  set(["EL-029"],"Nota da UniRV de 26 de abril de 2023, na qual a universidade reconhece que a polêmica pública pesou na exclusão do livro da lista do vestibular.");
  set(["EL-030"],"Ato específico de recolhimento ainda não identificado. O PL 79/2024 é contexto legislativo posterior, não deve ser confundido com a ordem de retirada.");
  set(["EL-031"],"Comunicado/decisão da direção do Colégio Militar Dom Pedro II; documento formal não cadastrado.");
  set(["EL-032"],"Ordem atribuída ao secretário municipal de Educação; documento e signatário ainda não identificados.");
  set(["EL-033"],"Comunicação da Funap sobre suspensão da parceria Remição em Rede; documento e signatário ainda não identificados.");
  set(["EL-034"],"Pedido de vereador à Secretaria Municipal de Educação; reportagem e documento original ainda não localizados.");
  return d;
})();