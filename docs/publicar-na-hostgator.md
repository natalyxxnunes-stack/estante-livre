# Como publicar o Estante Livre na HostGator

O site é estático: só HTML, CSS, JavaScript, imagens, fontes e arquivos de dados. Não precisa de banco de dados, PHP, Node.js nem nenhum serviço pago. Basta copiar os arquivos para a pasta pública do domínio.

## 1. Antes de subir: trocar o endereço do site

Abra `scripts/gerar.js` e troque a linha

```
const SITE = "https://estante-livre-br.vercel.app";
```

pelo domínio novo, com `https://` e sem barra no fim. Esse endereço vai para os links de compartilhamento, o sitemap, os dados abertos e as sugestões de citação.

## 2. Montar o pacote

No computador, dentro da pasta do projeto:

```
bash scripts/empacotar.sh
```

Isso gera a pasta `dist/` e o arquivo `estante-livre-site.zip`. O pacote tem só o que vai para o ar; scripts, documentação e configuração da Vercel ficam de fora.

## 3. Subir os arquivos

**Pelo painel da HostGator (Gerenciador de Arquivos):**

1. No painel da hospedagem, abra o **Gerenciador de Arquivos**.
2. Entre em `public_html`. Se o domínio for adicional, entre na pasta que a HostGator criou para ele (o painel mostra qual é em "Domínios").
3. Apague a página padrão da HostGator, se existir (`index.html` ou `default.html`).
4. Use **Carregar** para enviar `estante-livre-site.zip`.
5. Clique com o botão direito no zip e escolha **Extrair**. Os arquivos precisam ficar direto na pasta, com `index.html` no primeiro nível.
6. Ative a exibição de arquivos ocultos e confira se o `.htaccess` está lá.
7. Apague o zip.

**Por FTP (FileZilla ou similar):** envie o conteúdo da pasta `dist/`, não a pasta em si, para `public_html`.

## 4. Certificado e HTTPS

1. No painel, ative o SSL gratuito do domínio. A emissão pode levar algumas horas depois que o domínio aponta para a hospedagem.
2. Quando `https://seudominio` abrir com cadeado, edite o `.htaccess` e apague o `#` das quatro linhas do bloco "Força HTTPS". A partir daí, todo acesso vai para `https://` e sem `www`.

## 5. Conferir depois de publicar

- A página inicial abre, com fontes e cores certas.
- Abra direto um endereço interno, como `/casos/el-028.html` e `/livros/o-avesso-da-pele.html`.
- Abra um endereço inexistente, como `/nao-existe`: deve aparecer a página "Esta página não está na estante".
- Baixe `/dados/estante-livre-casos.csv` e `/guia-estante-livre.pdf`.
- No celular, abra o menu e navegue por três páginas.
- Abra `/sitemap.xml` e confira se os endereços usam o domínio novo.

## 6. Se algo der errado

- **Erro 500 em todas as páginas:** o servidor recusou alguma linha do `.htaccess`. Renomeie para `.htaccess-off` para confirmar; se o site voltar, apague os blocos um a um até achar o responsável.
- **Página sem estilo:** a pasta `assets` não subiu ou ficou dentro de outra pasta. O `index.html` e a pasta `assets` precisam estar lado a lado.
- **404 sem a página própria:** o `.htaccess` não está na raiz do domínio ou o servidor ignora `ErrorDocument`.
- **Mudança não aparece:** o navegador guardou a versão antiga; recarregue com Ctrl+Shift+R.

## 7. Atualizar depois (opcional, automático)

O repositório tem um fluxo do GitHub (`.github/workflows/publicar-hostgator.yml`) que monta o pacote e envia por FTP a cada mudança na `main`. Para ligar, cadastre em **Settings > Secrets and variables > Actions** do repositório:

- `FTP_SERVIDOR`: o endereço FTP que a HostGator informa (ex.: `ftp.seudominio.com.br`)
- `FTP_USUARIO` e `FTP_SENHA`: um usuário FTP criado no painel, de preferência só com acesso à pasta do site
- `FTP_PASTA`: `/public_html/` ou a pasta do domínio, com barra no fim

Sem esses segredos, o fluxo não faz nada. Não existe limite diário de publicações na HostGator.
