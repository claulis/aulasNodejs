# EJS
EJS (Embedded JavaScript) é um mecanismo de visualização (ou template engine) para Node.js e Express.js que permite incorporar JavaScript diretamente em arquivos HTML. Ele permite que você crie templates dinâmicos, nos quais você pode inserir dados ou lógica JavaScript diretamente nos arquivos de visualização.

Com EJS, você pode criar arquivos de modelo com extensão `.ejs`, nos quais pode incluir código JavaScript embutido entre tags `<% %>` ou `<%= %>`. Aqui está uma breve explicação sobre as tags principais do EJS:

1. `<% %>`: Essas tags são usadas para incluir blocos de código JavaScript, como loops, condições, etc. O código dentro dessas tags não exibe o resultado na saída renderizada.

2. `<%= %>`: Essas tags são usadas para incluir expressões JavaScript cujo resultado será exibido na saída renderizada. Por exemplo, ao usar `<%= variavel %>`, o valor da variável será renderizado na página.

3. `<%- %>`: Semelhante ao `<%= %>`, mas ele renderiza o conteúdo HTML escapando quaisquer caracteres especiais, o que pode ser útil para evitar ataques XSS (Cross-Site Scripting).

O EJS simplifica a criação de páginas da web dinâmicas, permitindo que você use a familiaridade do HTML e JavaScript para gerar conteúdo de página de forma dinâmica. Combinado com o Express.js, é uma escolha comum para criar aplicativos da web no ecossistema Node.js.

Aqui está um exemplo básico de como você pode criar um projeto usando Express.js para atender aos requisitos mencionados:

## Exemplo
1. Crie um diretório para o projeto e instale as dependências:

```bash
npm init
npm install express ejs body-parser
```

2. Dentro do diretório do projeto, crie os seguintes arquivos:

- `app.js`: O arquivo principal do aplicativo Express.js.
- `views/index.ejs`: O arquivo de visualização para a página inicial com um formulário para entrada de texto.
- `views/show.ejs`: O arquivo de visualização para a página que exibirá o texto enviado.

3. Cole o seguinte código nos arquivos correspondentes:

`app.js`:

```javascript
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Configurar o middleware para analisar solicitações com corpo JSON
app.use(bodyParser.urlencoded({ extended: true }));

// Configurar a visualização do mecanismo EJS
app.set('view engine', 'ejs');

// Rota para a página inicial
app.get('/', (req, res) => {
  res.render('index');
});

// Rota para lidar com o envio de texto
app.post('/send', (req, res) => {
  const text = req.body.text;
  res.redirect(`/show?text=${text}`);
});

// Rota para exibir o texto enviado
app.get('/show', (req, res) => {
  const text = req.query.text;
  res.render('show', { text });
});

// Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
```

`views/index.ejs`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Enviar Texto</title>
</head>
<body>
    <h1>Enviar Texto</h1>
    <form action="/send" method="post">
        <textarea name="text" rows="4" cols="50"></textarea><br>
        <button type="submit">Enviar</button>
    </form>
</body>
</html>
```

`views/show.ejs`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Texto Enviado</title>
</head>
<body>
    <h1>Texto Enviado</h1>
    <p>Você escreveu: <%= text %></p>
</body>
</html>
```

4. Execute o aplicativo:

```bash
node app.js
```

Agora, você pode abrir seu navegador e acessar `http://localhost:3000` para ver o formulário de envio de texto. Após enviar o texto, ele será exibido em uma página separada.