# Primeiro exemplo
Antes de começar com o código é importante entender alguns conceitos de rede para que depois seja mais claro o funcionamento do Node.js

## HTTP

O HTTP (Hypertext Transfer Protocol) é um protocolo de comunicação utilizado para transferir dados pela World Wide Web. Ele define a forma como as mensagens são formatadas e transmitidas entre clientes (como navegadores web) e servidores web.

### Funcionamento do HTTP:

1. **Cliente e Servidor:**
   O HTTP opera em um modelo cliente-servidor, onde o cliente é geralmente um navegador web ou uma aplicação que solicita recursos, e o servidor é um computador que armazena e fornece esses recursos.

2. **Requisição e Resposta:**
   Uma comunicação HTTP ocorre através de requisições e respostas. O cliente envia uma requisição HTTP para o servidor, solicitando um recurso específico, como uma página da web ou um arquivo. O servidor recebe a requisição, processa-a e envia uma resposta de volta ao cliente, que pode conter o recurso solicitado ou informações sobre o resultado da requisição.

3. **Métodos HTTP:**
   O HTTP define diferentes métodos que podem ser usados em uma requisição para indicar a ação desejada. Alguns dos métodos mais comuns são:
   - GET: Solicita um recurso específico do servidor.
   - POST: Envia dados para serem processados por um recurso identificado pelo URI.
   - PUT: Substitui todas as representações atuais do recurso de destino com a carga de dados fornecida.
   - DELETE: Remove o recurso especificado.

4. **Códigos de Status HTTP:**
   As respostas HTTP incluem códigos de status que indicam o resultado da requisição. Alguns códigos de status comuns são:
   - 200 OK: Indica que a requisição foi bem-sucedida.
   - 404 Not Found: Indica que o recurso solicitado não foi encontrado no servidor.
   - 500 Internal Server Error: Indica que ocorreu um erro no servidor ao processar a requisição.

5. **Headers HTTP:**
   As mensagens HTTP também podem incluir cabeçalhos (headers) que fornecem informações adicionais sobre a requisição ou resposta. Por exemplo, cabeçalhos de requisição podem conter informações sobre o tipo de navegador do cliente, enquanto cabeçalhos de resposta podem incluir informações sobre o tipo de conteúdo retornado ou a data de modificação do recurso.

6. **Stateless:**
   O HTTP é um protocolo stateless, o que significa que cada requisição é tratada de forma independente, sem referência a requisições anteriores. Isso significa que o servidor não mantém nenhum estado da sessão entre requisições, e cada requisição é tratada isoladamente.

O HTTP é o principal protocolo de comunicação utilizado na web e é fundamental para o funcionamento da World Wide Web. Ele permite a transferência de dados entre clientes e servidores de forma eficiente e padronizada, possibilitando a entrega de conteúdo e serviços pela internet.

![Funcionamento HTTP](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Overview/fetching_a_page.png)
Fonte:https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Overview

## O Primeiro Exemplo

O código fornecido no arquivo hello.js da pasta:
```javascript
const http = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
}); 
```

Vamos revisitar o código do servidor HTTP em Node.js com mais detalhes:

```javascript
const http = require('node:http');
```

- Esta linha importa o módulo `http` do Node.js, que fornece funcionalidades para criar servidores HTTP. O `require` é uma função do Node.js que permite importar módulos.

```javascript
const hostname = '127.0.0.1';
const port = 3000;
```

- Aqui, definimos o hostname como `'127.0.0.1'`, que é o endereço IP padrão para o localhost. O `localhost` é o próprio computador em que o servidor está sendo executado. Definimos também a porta como `3000`, que é o número da porta em que o servidor estará ouvindo por conexões.

```javascript
const server = http.createServer((req, res) => {
  // Função de callback executada sempre que uma requisição é recebida pelo servidor
});
```

- O método `createServer` cria um servidor HTTP. Recebe uma função de callback que é executada sempre que uma requisição é feita ao servidor. Essa função recebe dois parâmetros: `req` (a requisição HTTP) e `res` (a resposta HTTP).

```javascript
res.statusCode = 200;
res.setHeader('Content-Type', 'text/plain');
res.end('Hello, World!\n');
```

- Dentro da função de callback do servidor, configuramos a resposta para a requisição. 
  - `res.statusCode = 200;`: Configura o status da resposta como `200`, indicando que a requisição foi bem-sucedida.
  - `res.setHeader('Content-Type', 'text/plain');`: Define o cabeçalho `Content-Type` como `text/plain`, indicando que o conteúdo da resposta é texto simples.
  - `res.end('Hello, World!\n');`: Finaliza a resposta e envia o conteúdo `'Hello, World!\n'` para o cliente. O `\n` representa uma quebra de linha.

```javascript
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```

- O método `listen` faz o servidor começar a escutar por conexões. Ele recebe a porta e o hostname em que o servidor irá escutar, e uma função de callback que é executada quando o servidor está pronto para receber conexões. Dentro da função de callback, exibimos uma mensagem no console indicando que o servidor está em execução e em qual URL ele está sendo executado.

### Como rodar o script

Para rodar um script em Node.js, você precisa utilizar o comando `node` seguido do nome do arquivo do script que deseja executar.
Nese caso o arquivo chamado `hello.js` e deseja executá-lo. Você pode fazer isso da seguinte maneira no terminal:

```
node hello.js
```

Isso fará com que o Node.js execute o script contido no arquivo `hello.js`.

*Certifique-se de estar no diretório correto onde o arquivo do script está localizado ou forneça o caminho completo para o arquivo, se estiver em um diretório diferente.*

Esse é o comando básico para executar scripts em Node.js no terminal ou prompt de comando.