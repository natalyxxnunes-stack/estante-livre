# Trilha de investigação — Estante Livre

**Estado:** implementada na branch de auditoria profissional  
**Data:** 2 de novembro de 2026

## Objetivo

Permitir que qualquer pessoa acompanhe um episódio de restrição de livros sem depender de conhecer a estrutura interna do catálogo. A navegação deve revelar o caminho entre a obra, o registro específico, o ato administrativo, os agentes e as referências documentais.

## Percurso de leitura

1. **Livro:** ficha bibliográfica e conjunto de ocorrências conhecidas para a obra.
2. **Registro:** episódio individual, com local, data, mecanismo, estágio, situação, justificativa declarada e desfecho.
3. **Ato:** documento ou episódio administrativo que originou um ou mais registros, com texto disponível, papéis institucionais e pessoas identificadas.
4. **Agentes:** perfis individuais de pessoas e instituições, vinculados aos papéis documentados no ato.
5. **Fontes e documentos:** referências associadas ao registro e ao ato, identificadas por veículo, data e classificação documental.

## Regras de atribuição

- Pressão pública, pedido formal, decisão, assinatura, execução, denúncia/fiscalização e resposta/reversão são papéis diferentes.
- Governo em exercício, partido e cargo são contexto; não provam autoria individual.
- Uma atribuição feita por reportagem sem documento assinado deve permanecer identificada como atribuição da fonte.
- Quando a pessoa responsável não é identificada, a página deve dizer isso. Não completar a lacuna por inferência.
- A execução não deve ser presumida a partir da existência de uma ordem.
- Uma reversão anunciada não comprova, por si só, que todos os exemplares retornaram a todas as bibliotecas.

## Como ler as fontes

As referências são apresentadas com classificação, veículo, data e título. A taxonomia usada no catálogo é:

- **P1:** documento primário administrativo.
- **P2:** documento judicial ou de órgão de controle.
- **P3:** registro institucional.
- **S1:** reportagem com apuração própria.
- **S2:** reportagem de cobertura.
- **A1:** pesquisa acadêmica.
- **O1:** manifestação de organização.
- **R1:** reprodução ou republicação.
- **B1:** blog institucional/editorial.

As fontes listadas em uma ficha estão vinculadas ao registro, mas isso não significa que cada referência sustente todas as afirmações. A consulta deve considerar o conteúdo original, a autoria, o trecho pertinente, a data, a origem e a independência editorial.

## O que a interface já faz

- Na ficha individual do livro, cada ocorrência oferece acesso ao registro, ao ato, aos perfis de agentes e às fontes vinculadas.
- Na ficha individual do registro, uma trilha visual liga a obra, o ato e os agentes/instituições; as fontes são apresentadas com sua classificação.
- Na página do ato, os registros e as obras atingidas são conectados aos perfis de agentes e às fontes reunidas.
- Os perfis de agentes levam de volta aos atos e registros em que cada papel aparece.
- O CI verifica a presença dessas conexões nas páginas estáticas geradas e bloqueia a geração se a trilha estiver ausente.

## Limite conhecido e próxima evolução

A interface conecta fontes a registros, mas a base ainda não associa cada fonte a uma afirmação ou trecho específico, campo por campo. Essa distinção é importante: a presença de uma fonte na ficha não deve ser lida como comprovação automática de todas as informações da página.

A próxima evolução editorial é criar uma matriz **afirmação → fonte → trecho/página → tipo de evidência → limite**, começando pelos registros parcialmente verificados e pelos atos com maior impacto. A matriz deve ser preenchida com leitura humana dos documentos; não deve ser inventada nem gerada automaticamente a partir de títulos ou URLs.

## Validação

A geração estática e os testes automatizados de integridade da trilha foram executados pelo GitHub Actions. A inspeção visual manual em dispositivos reais e a revisão de acessibilidade com teclado e leitor de tela continuam sendo etapas separadas.
