# Interação com o Terminal no Node.js

###  Lendo Entradas do Usuário

Para ler entradas do usuário de forma interativa, podemos utilizar o módulo `readline` do Node.js. Ele nos permite fazer perguntas ao usuário e capturar as respostas.

```javascript
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Qual é o seu nome? ', (nome) => {
    console.log(`Olá, ${nome}! Bem-vindo à nossa aula de Node.js.`);
    rl.close();
});
```

- `readline.createInterface` cria uma interface para leitura de entrada (`input`) e saída (`output`).
- `rl.question` exibe a mensagem "Qual é o seu nome?" e aguarda o usuário inserir uma resposta.
- Quando o usuário pressiona Enter, a função de callback é chamada com o nome digitado, que é então utilizado para exibir uma saudação personalizada.

### Capturando Argumentos da Linha de Comando

Os argumentos passados na linha de comando podem ser acessados usando `process.argv`. Isso é útil para configurar o comportamento do programa de acordo com inputs fornecidos ao executá-lo.

```javascript
// Exemplo de uso: node script.js João
const nome = process.argv[2]; // process.argv[0] é 'node', process.argv[1] é o caminho do script, process.argv[2] é o primeiro argumento passado

if (nome) {
    console.log(`Olá, ${nome}! Bem-vindo ao seu primeiro script Node.js.`);
} else {
    console.log('Por favor, passe um nome como argumento.');
}
```

- `process.argv` é um array que contém os argumentos passados na linha de comando.
- `process.argv[0]` é o caminho do interpretador Node.js (`node`).
- `process.argv[1]` é o caminho do script que está sendo executado.
- `process.argv[2]` é o primeiro argumento passado após o nome do script.
- O exemplo verifica se um nome foi passado como argumento e exibe uma mensagem personalizada de boas-vindas.

Claro! O `console.log` é uma função essencial no ambiente Node.js (assim como no navegador) que permite exibir mensagens e informações no terminal. Ele é fundamental para depuração, feedback ao usuário e registro de informações durante a execução de um programa. Vamos explorar em detalhes como funciona e como podemos utilizá-lo de maneira eficaz:

### Console

A função `console.log` aceita um ou mais argumentos que podem ser de qualquer tipo (string, número, objeto, array, etc.). Ela converte cada argumento para uma string e exibe essas strings no terminal, separadas por um espaço. Veja um exemplo simples:

```javascript
console.log('Olá, mundo!');
console.log(42);
console.log({ nome: 'João', idade: 30 });
```

Neste exemplo:
- `console.log('Olá, mundo!');` exibe a string "Olá, mundo!" no terminal.
- `console.log(42);` exibe o número `42`.
- `console.log({ nome: 'João', idade: 30 });` exibe um objeto JavaScript como uma string formatada no formato JSON.

#### Formatação de Strings

Além de simplesmente imprimir valores, `console.log` pode ser usado para formatar strings com valores dinâmicos. Isso é feito usando placeholders e argumentos adicionais:

```javascript
const nome = 'Maria';
const idade = 25;

console.log(`Nome: ${nome}, Idade: ${idade}`);
```

Neste exemplo, usamos template literals (strings delimitadas por crases `` ` ``) para inserir valores de variáveis dentro da string. Isso torna a formatação de strings mais legível e facilita a interpolação de variáveis.

#### Exibindo Arrays e Objetos

`console.log` pode exibir arrays e objetos de forma legível, facilitando a visualização da estrutura de dados durante o desenvolvimento:

```javascript
const lista = [1, 2, 3, 4, 5];
console.log(lista);

const pessoa = {
    nome: 'Ana',
    idade: 28,
    cidade: 'São Paulo'
};
console.log(pessoa);
```

Ao exibir arrays e objetos, o `console.log` formata a saída para mostrar os elementos do array ou as propriedades do objeto de uma maneira que seja fácil de entender.

#### Console Methods

Além de `console.log`, existem outros métodos úteis no objeto `console` que podem ser utilizados para diferentes finalidades:

- `console.error`: Exibe mensagens de erro no console.
- `console.warn`: Exibe mensagens de aviso no console.
- `console.info`: Exibe mensagens informativas no console.
- `console.table`: Exibe dados tabulares (como arrays ou objetos) no console como uma tabela.

#### Utilização para Depuração (Debugging)

Durante o desenvolvimento de software, `console.log` é uma ferramenta valiosa para depurar e entender o fluxo de um programa. Você pode adicionar `console.log` em diferentes pontos do seu código para verificar valores de variáveis, entender o estado do programa em diferentes etapas e identificar possíveis problemas.



`console.log` é uma funcionalidade básica e poderosa em JavaScript e Node.js que permite exibir mensagens e informações úteis no terminal. Seu uso é essencial para comunicação com o usuário, depuração de código e registro de eventos durante a execução de um programa. Dominar o uso eficaz do `console.log` é fundamental para qualquer desenvolvedor JavaScript.

