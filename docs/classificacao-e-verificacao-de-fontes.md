# Classificação e verificação de fontes

**Documento operacional do Estante Livre**  
**Versão:** 1.0 · **Data:** 1º de novembro de 2026

## Objetivo

Padronizar a avaliação das fontes usadas em cada registro, sem confundir quantidade de links com independência, qualidade documental ou comprovação de uma afirmação.

A classificação é feita por fonte e por afirmação. Uma reportagem pode ser adequada para comprovar que uma declaração foi publicada, mas insuficiente para comprovar que uma ordem foi assinada ou executada.

## Tipos de fonte

| Código | Tipo | Exemplos | Uso principal |
|---|---|---|---|
| P1 | Documento primário administrativo | Ofício, memorando, circular, requerimento, ata, despacho | Comprovar conteúdo, autoria formal, data e alcance de um ato |
| P2 | Documento judicial ou de controle | Sentença, decisão, acórdão, recomendação, procedimento ou despacho do MP | Comprovar decisão, fundamentação, providência e situação processual |
| P3 | Registro público institucional | Diário oficial, nota oficial, inventário, resposta a LAI, comunicado | Comprovar posição institucional, resposta, execução ou reversão |
| S1 | Reportagem com apuração própria | Reportagem que consultou documentos, ouviu envolvidos ou obteve resposta oficial | Reconstruir fatos e identificar fontes documentais |
| S2 | Reportagem de cobertura | Notícia que relata episódio com base em declarações ou outras publicações | Contextualização e confirmação auxiliar |
| A1 | Pesquisa acadêmica | Artigo revisado por pares, dissertação, tese, livro acadêmico | Contextualização, método, interpretação histórica e análise |
| O1 | Manifestação de organização | Nota de entidade, associação, sindicato, conselho ou organização da sociedade civil | Registrar contestação, denúncia ou posicionamento, não provar por si só o fato contestado |
| R1 | Reprodução ou republicação | Texto reproduzido, agência, republicação sem apuração própria identificada | Rastrear a origem; não contar como confirmação independente da fonte original |

## Independência

Duas URLs não são automaticamente duas fontes independentes. Antes de marcar um registro como verificado, a editora deve conferir:

1. se as publicações têm apuração própria ou apenas reproduzem a mesma agência, nota ou reportagem;
2. se as duas fontes sustentam o mesmo fato central, e não aspectos diferentes;
3. se uma delas é documento original ou registro institucional;
4. se há conflito de interesse, anonimato ou limitação relevante;
5. se a data, a autoria e o endereço eletrônico estão corretos.

Domínios diferentes são um indício útil, não prova de independência. Duas matérias no mesmo domínio podem ter apurações independentes; duas URLs em domínios distintos podem reproduzir o mesmo conteúdo.

## Matriz de afirmações

Para cada episódio, registrar a evidência específica para:

- pressão ou reclamação;
- pedido formal;
- decisão administrativa;
- assinatura;
- execução;
- justificativa declarada;
- resposta, contestação ou reversão;
- desfecho e situação atual.

Não usar uma fonte que só comprova pressão pública para afirmar que houve ordem administrativa. Não usar uma notícia sobre uma ordem para afirmar que ela foi executada sem evidência de execução.

## Regra de status

- **Verificado:** o núcleo factual está sustentado por evidências suficientes e fontes independentes, avaliadas caso a caso. O gerador pode verificar a presença de referências, mas a independência e a pertinência exigem julgamento editorial.
- **Parcialmente verificado:** há evidência pública do episódio, mas permanece lacuna relevante — por exemplo, documento original ausente, fonte única, signatário não identificado, execução não comprovada ou divergência não resolvida.

O status não mede a gravidade do episódio. Mede a segurança documental do registro.

## Campos recomendados para o cadastro de cada fonte

A estrutura atual de `FONTES` deve ser ampliada gradualmente com:

- `tipo`: um dos códigos P1, P2, P3, S1, S2, A1, O1 ou R1;
- `origem`: produção própria, agência, reprodução ou documento original;
- `autor`: pessoa ou instituição responsável, quando identificada;
- `acesso`: URL pública, arquivo preservado ou acesso restrito;
- `observacao`: limitações, paywall, link instável, documento parcial ou contexto.

Não preencher esses campos por inferência automática. A classificação precisa ser revisada.

## Preservação e rastreabilidade

- Guardar cópia ou referência estável do documento quando a licença e a lei permitirem.
- Registrar data de consulta e URL original.
- Não alterar o conteúdo de documentos.
- Se o link deixar de funcionar, registrar a falha e procurar cópia oficial ou arquivo confiável.
- Manter a correção pública quando uma fonte for substituída ou uma informação mudar.
- Não publicar dados pessoais desnecessários de fontes humanas.

## Lista de verificação antes de publicar

- [ ] A fonte existe e abre?
- [ ] O título, veículo, autor e data estão corretos?
- [ ] A fonte sustenta exatamente a afirmação associada?
- [ ] Há documento primário ou resposta oficial disponível?
- [ ] As fontes são independentes entre si?
- [ ] Pressão, pedido, decisão, assinatura e execução estão separados?
- [ ] A justificativa está atribuída a quem a apresentou?
- [ ] A resposta e o desfecho foram procurados?
- [ ] As limitações e pendências estão explícitas?
- [ ] A ficha e o histórico de correções foram atualizados?

## Estado da base na auditoria de 1º de novembro de 2026

A exportação consultada tinha 34 registros, 184 referências associadas e 69 URLs distintas; o cadastro de fontes continha 81 chaves. Nesta branch, 80 das 81 entradas de fonte foram classificadas por natureza documental; uma fonte de blog permanece sem classificação até revisão individual. O EL-005, antes marcado como parcialmente verificado por fonte única, foi atualizado com dois documentos primários da ALESC/Secretaria e passou a verificado quanto ao núcleo factual. Restam 14 registros parcialmente verificados; a execução e situação atual do EL-005 continuam em aberto.

Esses números são uma fotografia da base exportada em 30 de outubro de 2026, não uma afirmação de que todos os links foram testados novamente em 1º de novembro.
