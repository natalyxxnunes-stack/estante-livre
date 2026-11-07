# Estante Livre

Observatório jornalístico e documental sobre censura, retirada e outras restrições de acesso a livros em bibliotecas e escolas brasileiras. Projeto de Nataly Nunes Pinto.

O site é estático, feito em HTML, CSS e JavaScript. Não depende de banco de dados, PHP ou processo Node permanente no servidor. A arquitetura foi mantida para permitir hospedagem compartilhada, inclusive no plano M da HostGator.

## Estado da base

Última geração validada nesta branch: **38 registros, 33 obras, 20 atos, 63 agentes, 16 páginas padronizadas e sitemap com 109 URLs**.

Esses números descrevem a base e os arquivos gerados nesta revisão; não significam que todos os registros estejam documentalmente encerrados. A situação de verificação é individual e as pendências continuam públicas.

## Gerar e validar o site

Depois de editar os dados, rode:

```bash
node scripts/gerar.js
```

O gerador valida os campos e relações da base e, se não encontrar erros:
- padroniza cabeçalho, menu e rodapé;
- gera páginas individuais de casos, obras e atos;
- atualiza as páginas de catálogo;
- exporta CSV e JSON;
- gera sitemap, robots.txt, llms.txt e página 404.

O workflow `.github/workflows/regenerate-site.yml` também executa a geração nas branches de revisão e registra os arquivos estáticos atualizados. A regeneração não publica o site na HostGator.

## Onde se edita

A base principal fica em `assets/dados.js` e é organizada em entidades ligadas por chave:

- `CASOS`: registros de episódios. Cada registro aponta para uma obra (`obra`) e para um ato (`ato`) e guarda mecanismo, estágio, situação, alegação, desfecho, fontes, pendência e nota.
- `LIVROS`: fichas bibliográficas das obras, com autoria, editora, ano, gênero, PNLD, sinopse e notas.
- `ATOS`: documentos ou episódios administrativos, com data, local, rede, governo, órgão, documento e papéis. Quando uma reversão é seguida por uma restrição posterior documentada, `restricaoPosterior` registra a fonte e a data em que a informação foi publicada, sem presumir a data do ato posterior.
- `AGENTES` e `PAPEIS`: pessoas e instituições com papéis documentados, como pressão, pedido, decisão, assinatura, execução, denúncia, resposta e reversão.
- `FONTES`: reportagens, documentos, registros institucionais e pesquisas citados pelos casos.
- `CONTEXTO`: episódios fora do escopo do catálogo que aparecem como contexto, sem entrar na contagem de registros.
- `CORRECOES`: histórico público de correções.
- `LACUNAS`: obstáculos e caminhos para fechar pendências documentais.
- `NORMAS`: leis e projetos legislativos acompanhados.
- `CONTEXTO_PARTIDARIO`, `CANDIDATURAS` e `ESPECTRO`: contexto político e eleitoral com recorte temporal.
- `ATUALIZADO`: data da última revisão.
- `CONTATO`: e-mail e Instagram exibidos na página Sobre.
- `FORMULARIOS`: links dos canais de relato. Enquanto os links estiverem vazios, a página informa que não há formulário seguro ativo.

A página Mundo também lê `assets/mundo.js`.

## Campos e critérios editoriais

Campos centrais de um registro: `id`, `data`, `ato`, `titulo`, `uf`, `tipo`, `rede`, `quem`, `alegacao`, `eixo`, `modalidade`, `estagio`, `situacao`, `desfecho`, `verificado`, `fontes`, `pendencia` e `nota`.

Três campos usam listas fechadas, definidas em `assets/dados.js` e explicadas no Glossário:

- `modalidade` (mecanismo): Retirada · Ocultação ou restrição de acesso · Exclusão de lista de leitura · Veto a atividade · Veto a aquisição ou doação · Descarte ou destruição · Autocensura.
- `estagio`: Pressão pública · Pedido formal · Decisão ou ordem · Execução comprovada.
- `situacao`: Em vigor · Revertido · Sem efeito · Em aberto.

O selo editorial de verificação é atribuído manualmente. O código confere se há pelo menos duas referências cadastradas e se elas existem na base, mas **não comprova independência entre fontes nem que cada referência sustente todas as afirmações da ficha**. A classificação de fontes e a matriz afirmação–evidência estão documentadas em `docs/classificacao-e-verificacao-de-fontes.md` e `docs/matriz-afirmacao-evidencia-p0.md`.

## Capas e direitos de imagem

As 19 capas locais sem autorização individual comprovada foram retiradas desta versão. As fichas bibliográficas continuam disponíveis com representação tipográfica. Não reintroduzir capas até registrar edição, titular dos direitos, autorização/licença ou fundamento jurídico documentado. Ver `docs/credito-das-capas.md`.

## Páginas

- Início e painel: `index.html`, `painel.html`
- Catálogo: `casos.html`, `livros.html`, `atos.html`
- Investigação e contexto: `analises.html`, `politica.html`, `mundo.html`, `historia.html`, `normas.html`
- Transparência e consulta: `cobertura.html`, `pendencias.html`, `metodologia.html`, `glossario.html`, `sobre.html`
- Serviços: `imprensa.html`, `guia.html`, `relate.html`
- Páginas individuais: `casos/`, `livros/` e `atos/`

## Guia para escolas

`guia.html` é a página do guia prático e a fonte do PDF. Depois de editar o guia, gere o PDF de novo:

```bash
python3 scripts/gerar-guia-pdf.py
```

O script precisa de `pip install playwright pypdf` e de um Chromium (`playwright install chromium`). O estilo de tela e impressão fica em `assets/guia.css`.

## Domínio e publicação

A constante `SITE` no início de `scripts/gerar.js` ainda aponta para um endereço provisório da Vercel. Atualize-a, os metadados canônicos e os arquivos de SEO somente depois de definido o domínio final.

A publicação de produção na HostGator é manual, enviando o conteúdo gerado para `public_html`. O workflow de FTP existe no repositório, mas não faz parte do fluxo de publicação definido para este projeto.

## Licenças

O código e os dados têm seus próprios termos de uso. Capas e outros materiais de terceiros não estão abrangidos automaticamente pela licença do repositório. A licença dos contornos de mapa está indicada junto ao recurso correspondente.
