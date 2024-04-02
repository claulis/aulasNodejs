# Express.js

Express.js é um framework de aplicativo web para Node.js, que simplifica o processo de criação de aplicativos web robustos e escaláveis. Ele fornece uma série de utilitários HTTP e middleware que ajudam na criação de APIs e aplicativos web.

## 1. Caraterísticas do Express.js
O Express.js é um framework minimalista e flexível para Node.js, projetado para criar aplicativos web e APIs de forma rápida e eficiente. Aqui estão algumas das principais características do Express.js:

1. **Simplicidade e Minimalismo**: O Express.js é conhecido por sua abordagem minimalista, oferecendo uma estrutura simples e direta para construir aplicativos web e APIs.

2. **Middleware**: O Express.js utiliza um sistema de middleware que permite adicionar funcionalidades às solicitações HTTP, como autenticação, logging, compressão, manipulação de cookies e muito mais. Isso facilita a criação de pipelines de solicitação personalizados.

3. **Rotas**: O Express.js fornece um sistema de roteamento que permite mapear solicitações HTTP para funções de tratamento de rotas específicas. Isso facilita a organização do código e a criação de APIs RESTful.

4. **Integração com diferentes template engines**: Express.js é compatível com várias engines de templates, como EJS, Handlebars, Pug (anteriormente conhecido como Jade) e outras, facilitando a renderização de views dinâmicas no lado do servidor.

5. **Suporte para middlewares de terceiros**: A vasta comunidade de desenvolvedores contribuiu com uma grande variedade de middlewares de terceiros que estendem as funcionalidades do Express.js, desde autenticação até cache, permitindo uma maior flexibilidade na construção de aplicativos.

6. **Facilidade de integração com outros pacotes e frameworks**: O Express.js pode ser facilmente integrado com outros pacotes e frameworks do ecossistema Node.js, como MongoDB (usando Mongoose), WebSocket, Passport para autenticação, Socket.IO para comunicação em tempo real e muitos outros.

7. **Suporte a APIs RESTful**: O Express.js é amplamente utilizado para criar APIs RESTful devido à sua simplicidade e eficiência na definição de rotas, manipulação de solicitações e respostas HTTP e suporte a diferentes formatos de dados, como JSON e XML.

8. **Performance**: Por ser construído em cima do Node.js, que utiliza um modelo de E/S não bloqueante e orientado a eventos, o Express.js é altamente escalável e eficiente em termos de desempenho, permitindo lidar com um grande volume de solicitações de forma assíncrona.

Essas são apenas algumas das características que tornam o Express.js uma escolha popular para o desenvolvimento de aplicativos web e APIs em Node.js. Sua simplicidade, flexibilidade e robustez o tornam uma ferramenta poderosa para uma ampla variedade de projetos.

## 2. Instalação
Antes de começar a usar o Express.js, é necessário ter o Node.js instalado no seu sistema. Você pode baixá-lo e instalá-lo a partir do [site oficial do Node.js](https://nodejs.org/).

Após a instalação do Node.js, você pode instalar o Express.js em seu projeto usando o npm (gerenciador de pacotes do Node.js). Abra o terminal e execute o seguinte comando no diretório do seu projeto:

```bash
npm install express
```

## 3. Primeiro Exemplo
Vamos criar um exemplo simples de um servidor Express que responde a uma solicitação HTTP com uma mensagem de "Olá, Mundo!".

1. Crie um novo arquivo chamado `app.js` e adicione o seguinte código:

```javascript
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Olá, Mundo!');
});

app.listen(port, () => {
  console.log(`Servidor Express rodando em http://localhost:${port}`);
});
```

2. Execute o servidor executando o seguinte comando no terminal, no diretório onde está o arquivo `app.js`:

```bash
node app.js
```

3. Abra um navegador da web e navegue até `http://localhost:3000`. Você deverá ver a mensagem "Olá, Mundo!".

#### Explicação do Código
- `const express = require('express');`: Importa o módulo Express.
- `const app = express();`: Cria uma instância do aplicativo Express.
- `const port = 3000;`: Define a porta em que o servidor Express será executado.
- `app.get('/', (req, res) => { ... });`: Define uma rota GET para a raiz do servidor e especifica uma função de retorno de chamada que envia a mensagem "Olá, Mundo!" como resposta.
- `app.listen(port, () => { ... });`: Inicia o servidor Express e o faz ouvir na porta especificada. Quando o servidor estiver pronto para aceitar conexões, a mensagem será impressa no console.

