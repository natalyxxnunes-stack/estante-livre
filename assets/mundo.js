/* Estante Livre · página Mundo.
   Casos de outros países para comparação. Cada linha diz quem governava e como
   a fonte descreve o regime, sem rótulo do observatório. Para acrescentar um país,
   copie um bloco. */

const MUNDO = [
 {pais:"Estados Unidos", periodo:"2021 a 2025", governo:"Escolas públicas sob leis e políticas estaduais; os três estados que mais retiram livros, Flórida, Texas e Tennessee, são governados pelo Partido Republicano",
  regime:"Democracia eleitoral; rebaixada de democracia liberal no relatório V-Dem 2026", lado:"direita", espectro:"Partido Republicano, direita",
  numero:"22.810", unidade:"retiradas em escolas públicas desde 2021",
  texto:"No ano letivo 2024-25 foram 6.870 retiradas em 23 estados e 87 distritos, atingindo 3.752 títulos. Flórida (2.304), Texas (1.781) e Tennessee (1.622) lideram, puxados por leis estaduais que listam temas proibidos. Connecticut e Delaware, sem retiradas desde 2021, aprovaram leis contra o banimento.",
  leitura:{pisa:504}, fontes:[["PEN America via Book Riot, out. 2025","https://bookriot.com/pen-america-book-ban-report-2025/"]]},
 {pais:"Hungria", periodo:"2021 a 2026", governo:"Viktor Orbán (Fidesz), derrotado nas eleições de abril de 2026 pelo Tisza, de Péter Magyar",
  regime:"Autocracia eleitoral segundo o V-Dem", lado:"direita", espectro:"Fidesz, direita nacional-conservadora",
  numero:"12 milhões", unidade:"de forints de multa a uma livraria por Heartstopper",
  texto:"A lei de “proteção da infância” de 2021 proíbe material que “promova ou exiba a homossexualidade” para menores e obriga livros com esse conteúdo a serem vendidos lacrados. Em 2023, a rede Lira foi multada em cerca de 32 mil euros por expor Heartstopper na seção juvenil.",
  leitura:{pisa:473}, fontes:[["Euronews, jul. 2023","https://www.euronews.com/2023/07/14/hungary-fines-bookstore-and-pressures-others-to-seal-lgbtq-books"],["RFE/RL, abr. 2026","https://www.rferl.org/amp/hungarian-opposition-leader-magyar-landslide-victory-orban/33730633.html"]]},
 {pais:"Turquia", periodo:"2016 a 2017", governo:"Recep Tayyip Erdoğan (AKP)",
  regime:"Autocracia eleitoral segundo o V-Dem", lado:"direita", espectro:"AKP, direita conservadora e religiosa",
  numero:"139.141", unidade:"exemplares retirados de 1.142 bibliotecas públicas",
  texto:"Depois da tentativa de golpe de 2016, o Ministério da Cultura retirou das bibliotecas livros de Fethullah Gülen, de seus seguidores e de editoras fechadas por decreto. O Ministério da Educação destruiu ao menos 1,8 milhão de livros didáticos, alguns por citarem a palavra “Pensilvânia”, onde Gülen vivia.",
  leitura:{pisa:456}, fontes:[["AsiaNews, out. 2017","https://www.asianews.it/news-en/139K-books-removed-from-1,142-public-libraries-since-failed-coup:-ministry-42041.html"]]},
 {pais:"Rússia", periodo:"2022 a 2025", governo:"Vladimir Putin (Rússia Unida)",
  regime:"Autocracia eleitoral segundo o V-Dem", lado:"direita", espectro:"Rússia Unida, conservadorismo nacionalista",
  numero:"12 anos", unidade:"de prisão possíveis por distribuir livro tido como “extremista”",
  texto:"Em 2023 a Suprema Corte declarou “extremista” o “movimento LGBT internacional”. Livrarias são revistadas desde 2022; em maio de 2025, mais de mil exemplares foram apreendidos nas editoras Popcorn Books e Individuum, e três funcionários foram para prisão domiciliar. Heartstopper está entre os títulos apreendidos.",
  leitura:{}, fontes:[["FIDH, mai. 2025","https://www.fidh.org/en/region/europe-central-asia/russia/russia-the-lgbtqi-community-persecuted-even-because-of-books"]]},
 {pais:"China e Hong Kong", periodo:"2019 a 2023", governo:"Partido Comunista Chinês; em Hong Kong, governo sob a lei de segurança nacional imposta por Pequim",
  regime:"Autocracia fechada segundo o V-Dem", lado:"esquerda", espectro:"Partido Comunista, esquerda",
  numero:"468", unidade:"itens políticos retirados das bibliotecas públicas de Hong Kong",
  texto:"Em Hong Kong, livros sobre o massacre da Praça da Paz Celestial, de 1989, sumiram dos catálogos; 146 títulos só na retirada de 2023. No continente, uma biblioteca de Gansu queimou em público 65 livros “ilegais”, inclusive religiosos, em 2019, durante campanha nacional para limpar acervos escolares de obras “contra a ideologia do partido”.",
  leitura:{pisa:500, nota:"nota de Hong Kong"}, fontes:[["RFA, mai. 2023","https://www.rfa.org/english/news/china/hong-kong-libraries-05162023134256.html"],["Quartz, dez. 2019","https://qz.com/1764003/a-library-in-gansu-china-burned-religious-books"]]},
 {pais:"Cuba", periodo:"2003", governo:"Fidel Castro (Partido Comunista de Cuba)",
  regime:"Autocracia fechada segundo o V-Dem", lado:"esquerda", espectro:"Partido Comunista, esquerda",
  numero:"75", unidade:"dissidentes condenados, entre eles bibliotecários independentes",
  texto:"Na repressão de março de 2003, conhecida como Primavera Negra, quase 90 pessoas foram presas e 75 condenadas a penas de 6 a 28 anos. Entre elas estavam responsáveis por bibliotecas independentes, que emprestavam livros fora do sistema estatal.",
  leitura:{}, fontes:[["Human Rights Watch, mar. 2004","https://www.hrw.org/es/news/2004/03/17/en-el-primer-aniversario-de-la-ola-represiva-contra-disidentes-pacificos-en-cuba"]]},
 {pais:"Nicarágua", periodo:"2021", governo:"Daniel Ortega (Frente Sandinista)",
  regime:"Autocracia eleitoral segundo o V-Dem", lado:"esquerda", espectro:"Frente Sandinista, esquerda",
  numero:"1", unidade:"romance retido na alfândega: o de Sergio Ramírez, ex-vice-presidente sandinista",
  texto:"Tongolele no sabía bailar, de Sergio Ramírez, sobre a crise de 2018, ficou retido na alfândega, que exigiu da editora um resumo do livro. O autor, já acusado de “incitar o ódio”, vive no exílio.",
  leitura:{}, fontes:[["Voz de América, set. 2021","https://www.vozdeamerica.com/a/nicaragua-retiene-novela-reciente-sergio-ramirez-/6224395.html"]]},
];

/* PISA 2022, leitura (OCDE). Brasil para comparação. */
const VDEM = ["V-Dem Democracy Report 2026","https://www.v-dem.net/documents/75/V-Dem_Institute_Democracy_Report_2026_lowres.pdf"];

const PISA = {fonte:["Hechinger Report, a partir da OCDE","https://hechingerreport.org/wp-content/uploads/2023/12/Reading-rankings-PISA-2022.pdf"],
  brasil:410, chile:448, uruguai:430, argentina:401, singapura:543, irlanda:516, japao:516};
