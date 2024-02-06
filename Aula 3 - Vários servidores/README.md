# Como criar vários servidores em node
Vamos supor que você deve criar 3 páginas web, cada uma independente, e quer agilizar e flexibilizar o trabalho da equipe de infraestrutura e administração, evitando que eles tenham que lidar com a gestão das páginas.

Vamos criar um exemplo de 3 páginas html básicas, entregues ao lado cliente pelo node de maneira "programática"

Estrutura da pasta

 - index.js Server node.js
 - pagina_3000.html pagina web na porta 3000
 - pagina_3001.html pagina web na porta 3000
 - pagina_3002.html pagina web na porta 3000

Queremos criar um código para colocar online as 3 páginas e eventualmente gerenciar o erro caso ocorra algum problema

Este é o código do server para multiplos sites no index.js
```javascript
const http = require('http');
const fs = require('fs');

// Função para criar um servidor
const server = http.createServer((req, res) => {
    // Lendo o arquivo HTML
    fs.readFile('index.html', (err, data) => {
        if (err) {
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end('Erro ao ler arquivo HTML');
        } else {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
        }
    });
});

// Define a porta do servidor
const PORT = 3000;

// Inicia o servidor
server.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}/`);
});

```

e esse é o código de uma págiuna html

```html
<html>
    <head>
       <title>Pagina porta:3000</title>
    </head>
    <body>
    <h1>Website na porta 3000</h1>
    </body>
</html>
```
# Análise linha por linha

Vamos analisar o último código linha por linha para entender como ele funciona:

```javascript
const http = require('http');
const fs = require('fs');
```

- `const http = require('http');`: Aqui, estamos importando o módulo HTTP do Node.js, que nos permite criar servidores HTTP.
- `const fs = require('fs');`: Estamos importando o módulo FileSystem do Node.js, que nos permite interagir com o sistema de arquivos do servidor.

```javascript
const ports = [3000, 3001, 3002];
```

- `const ports = [3000, 3001, 3002];`: Este é um array que contém as portas em que os servidores serão criados.

```javascript
function createServer(port) {
    const server = http.createServer((req, res) => {
        // Lendo o arquivo HTML correspondente à porta
        const htmlFile = `pagina_${port}.html`;
        
        fs.readFile(htmlFile, (err, data) => {
            if (err) {
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.end(`Erro ao ler arquivo HTML ${htmlFile}`);
            } else {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(data);
            }
        });
    });

    server.listen(port, () => {
        console.log(`Servidor rodando em http://localhost:${port}/`);
    });
}
```

- `function createServer(port) { ... }`: Aqui, definimos uma função chamada `createServer` que recebe uma porta como parâmetro. Esta função é responsável por criar e configurar um servidor HTTP na porta fornecida.
- `const server = http.createServer((req, res) => { ... }`: Aqui, criamos um servidor HTTP usando o método `createServer` do módulo HTTP. Este servidor irá lidar com as solicitações HTTP.
- `const htmlFile = `pagina_${port}.html`;`: Estamos construindo o nome do arquivo HTML com base na porta. Por exemplo, se a porta for 3000, o nome do arquivo será `pagina_3000.html`.
- `fs.readFile(htmlFile, (err, data) => { ... }`: Estamos lendo o conteúdo do arquivo HTML correspondente à porta. Se ocorrer algum erro ao ler o arquivo, respondemos com um status de erro 500 e uma mensagem de erro. Caso contrário, respondemos com um status 200 (OK) e o conteúdo do arquivo HTML.
- `server.listen(port, () => { ... }`: Aqui, iniciamos o servidor na porta especificada. Quando o servidor estiver pronto para aceitar conexões, exibimos uma mensagem indicando a URL do servidor.

```javascript
// Criar servidores para cada porta na lista
ports.forEach(port => {
    createServer(port);
});
```

- Aqui, iteramos sobre a lista de portas (`ports`) e para cada porta, chamamos a função `createServer` para criar um servidor na porta correspondente.

## Para executar o exemplo no VS Code

1. Terminal -> Novo Terminal
2. Verifique que está na pasta certa
3. Digite `node index.js`
4. Abra uma das tres páginas html

# Atividade

Mude o nome do arquivo pagina_3001.html para pagina_3004.html e execute novamente o index.js. O que acontece? Por qual motivo?