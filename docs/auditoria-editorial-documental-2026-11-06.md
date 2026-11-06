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

Isso esclarece a composição interna do total 9.565. Não resolve, por si só, a divergência entre 9.565 e 9.546 mencionada por reportagens distintas sobre o relatório "Retrato do Acervo". A pendência EL-025 deve ser refinada para separar:
1. composição do total de 9.565 (esclarecida pelo Relatório de Gestão);
2. diferença entre os números publicados 9.565 e 9.546 (ainda não reconciliada);
3. obtenção/checagem da lista dos 5.165 exemplares;
4. comprovação do destino final do conjunto.

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
- A tentativa de clonar o repositório para executar `node scripts/gerar.js` falhou por indisponibilidade de resolução de `github.com` no ambiente. Portanto, o gerador não foi executado nesta auditoria.
- A página pública de produção não pôde ser aberta pelo navegador de inspeção disponível nesta sessão. Não declarar o site live aprovado nem os links/funcionalidades testados ponta a ponta.

**Conclusão técnica:** a presença de boas práticas estáticas não equivale a certificação WCAG 2.2 AA. A acessibilidade manual e a validação real da produção permanecem não testadas.

## 9. Critério de publicação

A base apresenta metodologia, fontes, marcação de verificação parcial e página pública de lacunas. Isso permite publicar material incompleto quando a incompletude está claramente sinalizada. Entretanto, a reconciliação e o desmembramento da lista de Rondônia são necessários para que a contagem de registros corresponda à regra metodológica declarada. Até essa correção e a execução do gerador/checagem de produção, não é correto certificar a versão como finalizada e integralmente validada.

---
Este documento registra achados e limites de verificação. Não substitui a atualização dos registros, das páginas geradas, do CSV/JSON e do sitemap.
