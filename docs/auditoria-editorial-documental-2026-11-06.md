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

## 9. Reconciliação documental de Rondônia — atualização

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

**O que permanece aberto:** individualizar todos os 42 títulos distintos em registros e fichas próprios, eliminar o agrupamento documental residual e regenerar páginas, CSV, JSON e sitemap. A cópia pública do Adendo foi encontrada; a obtenção do processo SEI integral, da sindicância estadual e da recomendação integral do MP-RO não foi comprovada.

## 10. Palmares — atualização documental

O Relatório de Gestão 2021 da própria Fundação Cultural Palmares, seção 3.1.2, páginas impressas 70–71, informa um total agregado de 9.565 registros no acervo, composto por 8.035 títulos diferentes e 1.530 folders e catálogos; portanto, 9.565 não é a quantidade de títulos distintos: https://www.gov.br/palmares/pt-br/midias/arquivos-menu-acesso-a-informacao/resultados-gerados2021_ok.pdf

Assim, para o número-base de 2021, a fonte institucional confirma 9.565. O número 9.546 publicado pelo Jornal da Unesp é uma divergência de reportagem, sem explicação localizada.

A Fundação publicou versões posteriores do Inventário Bibliográfico com 9.665 títulos (04/09/2023) e 9.696 títulos (08/08/2024). Ambas informam que a compilação foi realizada entre julho e outubro de 2021. Não foi localizada nota metodológica que explique a diferença entre essas versões e o Relatório de Gestão. Os números não devem ser tratados como intercambiáveis.

O número 5.165 (54%) aparece no relatório “Retrato do Acervo” como classificação feita pela gestão da época. Não foi localizada lista pública individualizada que permita identificar todos esses itens, nem prova de que tenham sido efetivamente descartados ou doados.

A ação judicial sobre cerca de 300 livros permanece como registro próprio (EL-026), sem afirmar que esse conjunto seja mutuamente exclusivo dos 5.165. A página oficial da FCP sobre a Política de Gestão do Acervo registra a Ação Popular nº 5006660-67.2021.4.02.5117 e reproduz decisão que impedia a movimentação do acervo, exceto consulta local. Em janeiro de 2022, reportagem sobre decisão da 2ª Vara Federal de São Gonçalo informa que o ato de doação de parte do acervo foi anulado e que a Fundação não recorreria.

Fontes: https://www.gov.br/participamaisbrasil/politica-de-formacao-desenvolvimento-e-gestao-do-acervo-bibliografico-da-biblioteca-da-fundacao-cultural-palmares-fcp ; https://www.gov.br/palmares/pt-br/centrais-de-conteudo/publicacoes/ListadeLivrosAtualizada04.09.23.pdf ; https://www.gov.br/palmares/pt-br/centrais-de-conteudo/publicacoes/lista-de-livros-atualizada-8-8-2024-1.pdf ; https://www.gov.br/palmares/pt-br/midias/arquivos-menu-acesso-a-informacao/resultados-gerados2021_ok.pdf ; https://www.gazetadopovo.com.br/vida-e-cidadania/breves/justica-proibe-fundacao-palmares-doar-livros-socialismo-comunismo-acervo/

## 9. Critério de publicação

A base apresenta metodologia, fontes, marcação de verificação parcial e página pública de lacunas. Isso permite publicar material incompleto quando a incompletude está claramente sinalizada. Entretanto, a individualização dos 42 títulos distintos de Rondônia e a regeneração das páginas/dados abertos ainda são necessárias para que a contagem de registros corresponda à regra metodológica declarada. Até essa correção e a execução do gerador/checagem de produção, não é correto certificar a versão como finalizada e integralmente validada.

---
Este documento registra achados e limites de verificação. Não substitui a atualização dos registros, das páginas geradas, do CSV/JSON e do sitemap.
