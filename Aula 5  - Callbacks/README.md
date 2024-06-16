# Callbacks

Nos computadores de consumo atuais, cada programa é executado por um intervalo de tempo específico e depois interrompe sua execução para permitir que outro programa continue sua execução. Isso acontece em um ciclo tão rápido que é impossível perceber. Pensamos que nossos computadores executam muitos programas simultaneamente, mas isso é uma ilusão (exceto em máquinas multiprocessadoras).

Os programas internamente utilizam interrupções, um sinal emitido para o processador para chamar a atenção do sistema.

Tenha em mente que é normal para os programas serem assíncronos e interromperem sua execução até que precisem de atenção, permitindo que o computador execute outras tarefas nesse meio tempo. Quando um programa está aguardando uma resposta da rede, ele não pode interromper o processador até que a solicitação seja concluída.

Normalmente, as linguagens de programação são síncronas e algumas fornecem uma maneira de gerenciar a assincronicidade na própria linguagem ou por meio de bibliotecas. C, Java, C#, PHP, Go, Ruby, Swift e Python são todas síncronas por padrão. Algumas delas lidam com operações assíncronas usando threads, gerando um novo processo.

## O Javascript

**O JavaScript é síncrono por padrão e é de thread única.** Isso significa que o código não pode criar novas threads e ser executado em paralelo.

Exemplo de execução síncrona
```javascript
const a = 1;
const b = 2;
const c = a * b;
console.log(c);
doSomething();
```

Mas o JavaScript nasceu dentro do navegador, seu principal trabalho, no início, era responder às ações do usuário, como `onClick`, `onMouseOver`, `onChange`, `onSubmit` e assim por diante. Como poderia fazer isso com um modelo de programação síncrona?

A resposta estava em seu ambiente. O navegador fornece uma maneira de fazer isso, fornecendo um conjunto de APIs que podem lidar com esse tipo de funcionalidade.

Mais recentemente, Node.js introduziu um ambiente de E/S **sem bloqueio** para estender esse conceito para acesso a arquivos, chamadas de rede e assim por diante.

### Blocking e Non-Blocking

Bloqueio e não bloqueio referem-se ao modo como o código JavaScript lida com operações que podem demorar para serem concluídas, como solicitações de rede, leitura de arquivos ou consultas a bancos de dados.

> **Bloqueio (Blocking):**
>   - No contexto de JavaScript, uma operação de bloqueio faz com que a execução do código aguarde até que a operação seja concluída antes de continuar. Durante esse tempo de espera, o código fica inativo e não pode fazer mais nada.
>   - Em operações de bloqueio, o programa fica "preso" até que a operação seja concluída, o que pode causar atrasos e afetar a responsividade do aplicativo, especialmente em aplicativos da web.

>**Não Bloqueio (Non-blocking):**
>   - Em contraste, uma operação não bloqueante permite que o código continue executando mesmo que uma operação demorada esteja em andamento. O código não espera pela conclusão da operação e pode realizar outras tarefas enquanto aguarda.
>   - As operações não bloqueantes são geralmente preferidas em ambientes assíncronos, como Node.js, onde a escalabilidade e a eficiência são importantes. Isso permite que o programa execute várias tarefas simultaneamente sem ser "preso" por operações de E/S (entrada/saída) demoradas.

O bloqueio ocorre quando o código espera ativamente por uma operação ser concluída antes de continuar, enquanto o não bloqueio permite que o código continue executando outras tarefas enquanto aguarda a conclusão da operação. Em ambientes assíncronos, como Node.js, o uso de operações não bloqueantes é preferível para garantir a eficiência e a escalabilidade do aplicativo.

**Exemplo de Bloqueio:**

```javascript
const fs = require('fs');

// Operação de leitura de arquivo bloqueante
const data = fs.readFileSync('arquivo.txt', 'utf8');

console.log('Conteúdo do arquivo:', data);
console.log('Esta mensagem será exibida após a leitura do arquivo.');
```

Neste exemplo, `fs.readFileSync` é uma operação de leitura de arquivo síncrona que **bloqueia a execução do código até que o arquivo seja lido completamente.** Enquanto o programa aguarda a conclusão da operação de leitura, **nada mais pode ser feito.** Somente após a leitura completa do arquivo, o programa prossegue para exibir a mensagem "Esta mensagem será exibida após a leitura do arquivo."

**Exemplo de Não Bloqueio:**

```javascript
const fs = require('fs');

// Operação de leitura de arquivo não bloqueante
fs.readFile('arquivo.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Erro ao ler o arquivo:', err);
        return;
    }
    console.log('Conteúdo do arquivo:', data);
});

console.log('Esta mensagem será exibida antes da leitura do arquivo.');
```

Neste exemplo, `fs.readFile` é uma operação de leitura de arquivo não bloqueante. O código continua executando após a chamada `fs.readFile`, e a mensagem "Esta mensagem será exibida antes da leitura do arquivo." será exibida imediatamente. Quando a operação de leitura de arquivo for concluída, o callback será chamado e o conteúdo do arquivo será exibido. Isso demonstra como o código continua executando outras tarefas enquanto aguarda a conclusão de operações não bloqueantes.

## Os Callbacks

Os callbacks em Node.js são usados para executar código depois que uma operação assíncrona é concluída. Eles garantem que a execução do código seja feita de forma não bloqueante, permitindo que o programa continue executando outras tarefas enquanto aguarda a conclusão da operação assíncrona.
Em Node.js, muitas funções são assíncronas e aceitam um callback como argumento. Quando a operação assíncrona é concluída, o callback é chamado com os resultados ou erros, se houver. Isso permite que o código seja executado de forma assíncrona e que os resultados sejam tratados quando estiverem disponíveis.
> **Callbacks** são funções que são passadas como argumentos para outras funções. Em Node.js, eles são amplamente usados para lidar com operações assíncronas, como leitura de arquivos, solicitações de rede e consultas a bancos de dados.


### 1. Definindo uma Função que Aceita um Callback:

Vamos definir uma função que aceita um callback como argumento. Aqui está a sintaxe básica:

```javascript
function minhaFuncao(callback) {
    // Corpo da função...
    callback(); // Chamada do callback
}
```

Nesta sintaxe:
- `minhaFuncao` é o nome da função.
- `callback` é o nome do parâmetro que esperamos ser uma função.
- `callback();` é onde chamamos a função callback dentro da função `minhaFuncao`.

### 2. Passando um Callback para a Função:

Agora, vamos chamar `minhaFuncao` e passar um callback como argumento:

```javascript
minhaFuncao(function() {
    console.log('Callback executado!');
});
```

Neste exemplo, passamos uma função anônima como callback. Essa função será executada quando chamarmos `callback()` dentro de `minhaFuncao`.

### 3. Passando Parâmetros para o Callback:

Você também pode passar parâmetros para o callback, conforme necessário. Aqui está como fazer isso:

```javascript
function funcaoComCallback(parametro, callback) {
    callback(parametro);
}

funcaoComCallback('Olá', function(msg) {
    console.log('Mensagem recebida:', msg);
});
```

### 4. Tratamento de Erros com Callbacks:

Além disso, é comum passar um primeiro parâmetro para o callback para lidar com erros. Aqui está um exemplo de como fazer isso:

```javascript
function operacaoAssincrona(callback) {
    // Simulação de uma operação assíncrona que pode gerar um erro
    setTimeout(() => {
        const erro = null; // Ou algum erro
        const resultado = 'Dados obtidos da operação';
        callback(erro, resultado);
    }, 1000);
}

operacaoAssincrona((erro, resultado) => {
    if (erro) {
        console.error('Erro:', erro);
        return;
    }
    console.log('Resultado:', resultado);
});
```

**Exemplos de Sintaxe de Callbacks:**

1. **Exemplo Simples:**
```javascript
// Definindo uma função que recebe um callback como argumento
function realizarOperacao(callback) {
    console.log('Iniciando a operação...');
    // Simulando uma operação assíncrona que leva 2 segundos
    setTimeout(() => {
        // Após a operação assíncrona, chamamos o callback
        callback();
    }, 2000);
}

// Chamando a função e passando um callback
realizarOperacao(() => {
    console.log('Operação concluída.');
});
```

Neste exemplo, a função `realizarOperacao` aceita um callback como argumento. Após uma operação assíncrona simulada (no caso, um `setTimeout` de 2 segundos), o callback é chamado.

2. **Tratamento de Erros:**
```javascript
// Definindo uma função que realiza uma operação assíncrona com tratamento de erros
function operacaoComErro(callback) {
    // Simulando uma operação assíncrona que gera um erro após 1 segundo
    setTimeout(() => {
        const erro = new Error('Ocorreu um erro na operação.');
        callback(erro, null);
    }, 1000);
}

// Chamando a função e passando um callback
operacaoComErro((erro, resultado) => {
    if (erro) {
        console.error('Erro:', erro.message);
        return;
    }
    console.log('Resultado:', resultado);
});
```

Neste exemplo, a função `operacaoComErro` executa uma operação assíncrona e, se ocorrer um erro durante a operação, ele é passado para o callback como o primeiro argumento.

