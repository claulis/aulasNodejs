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