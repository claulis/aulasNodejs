# Módulos

## CommonJS

CommonJS  é uma *especificação* para módulos em JavaScript que visa padronizar a forma como os módulos são importados e exportados em ambientes JavaScript, especialmente no lado do servidor, como o Node.js. Foi uma tentativa de resolver o problema de modularidade em JavaScript antes que os padrões de módulos do ECMAScript (ES6) fossem finalizados e amplamente adotados.

A especificação CommonJS define um conjunto de regras para definir, importar e exportar módulos JavaScript. Aqui estão alguns dos conceitos chave da especificação CommonJS:

1. **`require()`**: A função `require()` é usada para **importar** módulos em um arquivo JavaScript. Ela aceita o caminho do módulo que está sendo importado e retorna o objeto exportado pelo módulo.

2. **`module.exports`**: A propriedade `module.exports` é usada para **exportar** objetos, funções ou valores de um módulo JavaScript. Qualquer valor atribuído a `module.exports` será disponibilizado para outros módulos que o requerem.

3. **`exports`**: A variável `exports` é uma referência para `module.exports`. É utilizada para exportar objetos, funções ou valores, mas não pode ser reatribuída diretamente como `module.exports`. Por exemplo, `exports.minhaFuncao = minhaFuncao` adiciona `minhaFuncao` aos objetos exportados.

4. **Módulos síncronos**: O sistema de módulos CommonJS é síncrono por natureza, o que significa que os módulos são carregados e avaliados de forma síncrona.

No contexto do Node.js, a especificação CommonJS permitiu que os desenvolvedores estruturassem seus aplicativos de forma modular e compartilhassem código de maneira eficaz. Ela foi fundamental para o crescimento do ecossistema Node.js, permitindo que os desenvolvedores criassem e reutilizassem módulos de forma fácil e eficiente.

## ECMAScript 6
No entanto, com o advento do ECMAScript 6 (também conhecido como ES6 ou ES2015), a linguagem JavaScript introduziu seus próprios recursos de módulos, que se tornaram parte do próprio JavaScript padrão. Esses recursos de módulos oferecem uma sintaxe mais limpa e poderosa, incluindo importações e exportações nomeadas, bem como importações e exportações padrão.

Apesar disso, o CommonJS ainda é amplamente utilizado em ambientes como o Node.js, especialmente em código legado e em projetos existentes que ainda não migraram para os módulos ECMAScript.

## Resumo das diferenças entre CommonJS e ECMAScript
O ECMAScript 6, também conhecido como ES6 ou ES2015, introduziu suporte nativo para módulos no JavaScript. Antes do ES6, o JavaScript dependia de sistemas de módulos específicos do ambiente, como CommonJS no Node.js e AMD (Asynchronous Module Definition) no navegador. Com a introdução dos módulos ES6, o JavaScript agora possui um sistema de módulos padrão integrado à linguagem.

Aqui está uma tabela comparativa das diferenças entre CommonJS e ECMAScript (ES6) em relação a módulos:

| Recurso                    | CommonJS                                               | ECMAScript (ES6)                                        |
|----------------------------|--------------------------------------------------------|---------------------------------------------------------|
| **Sintaxe de Exportação**  | Utiliza `module.exports` e `exports` para exportação. | Utiliza `export` para exportação nomeada e `export default` para exportação padrão. |
| **Sintaxe de Importação**  | Utiliza `require()` para importação de módulos.       | Utiliza `import` para importação de módulos.            |
| **Exportação Assíncrona**  | Não suporta exportação assíncrona.                    | Não suporta exportação assíncrona.                      |
| **Carregamento Assíncrono**| Não suporta carregamento assíncrono de módulos.       | Suporta carregamento assíncrono de módulos usando a função `import()`. |
| **Exportações Nomeadas**   | Não suporta exportações nomeadas.                     | Suporta exportações nomeadas usando a palavra-chave `export`. |
| **Exportação Padrão**      | Não suporta exportação padrão.                        | Suporta exportação padrão usando `export default`.       |
| **Escopo de Módulo**       | Não possui escopo de módulo.                          | Possui escopo de módulo.                                |
| **Módulos Dinâmicos**      | Não suporta carregamento dinâmico de módulos.         | Suporta carregamento dinâmico de módulos usando `import()`. |
| **Suporte Nativo**          | Amplamente usado no Node.js.                          | Suportado em navegadores modernos e Node.js.             |

Essas são algumas das principais diferenças entre CommonJS e ECMAScript (ES6) em relação a módulos. Ambos os sistemas têm suas vantagens e são amplamente utilizados em seus respectivos contextos. O CommonJS foi muito importante para o desenvolvimento no Node.js, enquanto o ECMAScript (ES6) introduziu um sistema de módulos nativo no JavaScript, tornando-o mais padronizado e interoperável com outros ambientes de execução JavaScript.

## Módulos em CommonJS

Node.js utiliza o sistema de módulos para organizar o código em unidades reutilizáveis e encapsuladas. Nesta aula, exploraremos o conceito de módulos em Node.js, como criar, exportar e importar módulos, e forneceremos exemplos de código para ilustrar esses conceitos.

Um **módulo é um arquivo JavaScript (ou um conjunto de arquivos JavaScript) que encapsula um conjunto de funcionalidades relacionadas.** Os módulos permitem organizar o código de forma modular e reutilizável, facilitando o desenvolvimento, manutenção e compartilhamento de código em aplicações Node.js.

### 1. Criando um Módulo:

Para criar um módulo em Node.js, você pode criar um arquivo JavaScript e definir as funcionalidades que deseja exportar. Por exemplo, vamos criar um módulo simples que contém uma função para somar dois números.

Crie um arquivo chamado `soma.js`:

```javascript
// soma.js
function somar(a, b) {
    return a + b;
}

module.exports = somar;
```

Neste exemplo, a função `somar` está definida no módulo `soma.js`, e é exportada usando `module.exports`.

### 2. Exportando Módulos em Node.js:

Node.js fornece a variável `module.exports` para exportar funcionalidades de um módulo. Você pode atribuir qualquer valor a `module.exports` para exportá-lo.

No exemplo anterior, exportamos a função `somar` atribuindo-a a `module.exports`.

### 3. Importando Módulos em Node.js:

Para importar um módulo em Node.js, você pode usar a função `require()`. Esta função aceita o caminho relativo ou absoluto do arquivo do módulo que deseja importar.

Aqui está um exemplo de como importar o módulo `soma.js` que criamos anteriormente em outro arquivo JavaScript:

```javascript
// app.js
const somar = require('./soma');

console.log(somar(5, 3)); // Saída: 8
```

Neste exemplo, importamos a função `somar` do módulo `soma.js` usando `require('./soma')`. Agora, podemos usar a função `somar` no arquivo `app.js`.

### 4. Módulos Nativos em Node.js:

Node.js inclui um conjunto de módulos nativos que estão disponíveis globalmente. Você pode importar esses módulos usando a função `require()` sem especificar o caminho do arquivo.

Por exemplo, para importar o módulo `fs` (sistema de arquivos) em Node.js, você pode fazer o seguinte:

```javascript
const fs = require('fs');
```

Isso importa o módulo `fs` que fornece funcionalidades para manipulação de arquivos.

### 5. Utilizando Módulos Nativos em Node.js:

Agora, vamos ver um exemplo de como podemos usar o módulo `fs` para ler o conteúdo de um arquivo:

```javascript
// lerArquivo.js
const fs = require('fs');

fs.readFile('arquivo.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Erro ao ler o arquivo:', err);
        return;
    }
    console.log('Conteúdo do arquivo:', data);
});
```

Neste exemplo, usamos o método `readFile()` do módulo `fs` para ler o conteúdo do arquivo `arquivo.txt` e exibir seu conteúdo no console.


## Módulos em ECMAScript 6
## 1. Sintaxe de Importação e Exportação:

### Exportação de Módulos:

No ES6, você pode exportar variáveis, funções, classes e até mesmo objetos literais diretamente de um módulo usando a palavra-chave `export`.

Exemplo de exportação nomeada:

```javascript
// módulo.js
export const nome = 'Alice';
export function saudacao() {
    return 'Olá, ' + nome + '!';
}
```

### Importação de Módulos:

Para importar módulos ES6, você usa a palavra-chave `import`.

Exemplo de importação:

```javascript
// outro-arquivo.js
import { nome, saudacao } from './modulo.js';

console.log(saudacao()); // Saída: Olá, Alice!
```

### 2. Exportação e Importação Padrão:

Além das exportações nomeadas, você também pode exportar um valor padrão de um módulo usando a palavra-chave `export default`.

Exemplo de exportação padrão:

```javascript
// módulo.js
const nome = 'Bob';
export default nome;
```

Para importar a exportação padrão, você pode usar qualquer nome que desejar.

Exemplo de importação da exportação padrão:

```javascript
// outro-arquivo.js
import nomePadrao from './modulo.js';

console.log(nomePadrao); // Saída: Bob
```

### 3. Suporte a Carregamento Assíncrono:

Os módulos ES6 oferecem suporte a carregamento assíncrono, o que significa que você pode importar módulos de forma assíncrona usando a função `import()`. Isso é útil em casos onde você deseja carregar um módulo condicionalmente ou dinamicamente.

Exemplo de importação assíncrona:

```javascript
// algum-codigo.js
import('./modulo-dinamico.js').then((modulo) => {
    console.log(modulo.default);
});
```

### 4. Escopo de Módulo:

Cada módulo ES6 tem seu próprio escopo, o que significa que as variáveis e funções definidas em um módulo não são globais e não vazam para o escopo global ou para outros módulos, a menos que explicitamente exportadas.

### 5. Módulos Estáticos:

Os módulos ES6 são estáticos, o que significa que as importações e exportações são resolvidas em tempo de compilação. Isso permite otimizações e análises estáticas por parte dos transpiladores e dos ambientes de execução.

## Exemplo calculadora CommonJS
Vamos criar outro exemplo de módulo em Node.js que envolve a criação de um módulo para cálculos matemáticos simples. Este módulo terá funções para calcular a soma, subtração, multiplicação e divisão de dois números.

Aqui está o código:

### Módulo `calculadora.js`:

```javascript
// calculadora.js
const calculadora = {
    soma: function(a, b) {
        return a + b;
    },
    subtracao: function(a, b) {
        return a - b;
    },
    multiplicacao: function(a, b) {
        return a * b;
    },
    divisao: function(a, b) {
        if (b === 0) {
            throw new Error('Divisão por zero não é permitida.');
        }
        return a / b;
    }
};

module.exports = calculadora;
```

### Utilizando o Módulo `calculadora.js` em outro arquivo:

Vamos criar um arquivo `app.js` para utilizar o módulo `calculadora.js`.

```javascript
// app.js
const calculadora = require('./calculadora');

console.log('Soma:', calculadora.soma(5, 3));
console.log('Subtração:', calculadora.subtracao(5, 3));
console.log('Multiplicação:', calculadora.multiplicacao(5, 3));
console.log('Divisão:', calculadora.divisao(6, 2));
```

Neste exemplo, importamos o módulo `calculadora.js` usando `require('./calculadora')`. Em seguida, usamos as funções definidas dentro do módulo para realizar operações matemáticas simples, como soma, subtração, multiplicação e divisão.

Quando você executar o arquivo `app.js`, verá o resultado das operações matemáticas no console.

## Exemplo Calculadora em ECMAScript
Vamos reescrever o exemplo da calculadora utilizando os módulos ECMAScript (ES6):

### Módulo `calculadora.js`:

```javascript
// calculadora.js
export const soma = (a, b) => a + b;
export const subtracao = (a, b) => a - b;
export const multiplicacao = (a, b) => a * b;

export const divisao = (a, b) => {
    if (b === 0) {
        throw new Error('Divisão por zero não é permitida.');
    }
    return a / b;
};
```

### Utilizando o Módulo `calculadora.js` em outro arquivo:

```javascript
// app.js
import { soma, subtracao, multiplicacao, divisao } from './calculadora.js';

console.log('Soma:', soma(5, 3));
console.log('Subtração:', subtracao(5, 3));
console.log('Multiplicação:', multiplicacao(5, 3));
console.log('Divisão:', divisao(6, 2));
```

Neste exemplo, usamos a nova sintaxe de exportação do ECMAScript (ES6) para exportar funções de uma calculadora. Utilizamos a palavra-chave `export` para exportar cada função individualmente. Na importação, usamos a palavra-chave `import` para importar as funções específicas que precisamos da calculadora.

O ES6 introduziu uma sintaxe mais concisa e expressiva para trabalhar com módulos, tornando o código mais claro e fácil de entender.