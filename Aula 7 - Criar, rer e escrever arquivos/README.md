# Ler e escrever arquivos

Vamos ler e copiar um texto entre dois arquivos

O exemplo é composto pelos seguintes arquivos:
- destino.txt (arquivo vazio que vai receber o texto)
- origem.txt (arquivo que possui um texto a ser copiado)
- text.js (código para copiar e colar texto da origem ao destino)

O código é:

```javascript
const fs = require('fs');
const origem = 'origem.txt';
const destino = 'destino.txt';
// Ler o arquivo de origem
fs.readFile(origem, 'utf8', (err, data) => {
    if (err) {
    console.error('Erro ao ler o arquivo de origem:', err);
        return;
    }    
    console.log('Conteúdo do arquivo de origem:');
    console.log(data);
    // Escrever no arquivo de destino
    fs.writeFile(destino, data, 'utf8', (err) => {
        if (err) {
        console.error('Erro ao escrever no arquivo de destino:', err);
            return;
        }        
        console.log('Conteúdo de origem copiado para o destino.');
    });
});

```

## Explicando o código

1. `const fs = require('fs');`: Aqui, estamos **importando o módulo de sistema de arquivos (File System)** do Node.js. O módulo `fs` fornece várias APIs para interagir com arquivos e diretórios de forma transparente. Ele permite que você realize operações como criar, escrever, ler, renomear, copiar e excluir arquivos, bem como manipular diretórios.

2. `const origem = 'origem.txt';`: Nesta linha, estamos definindo uma variável chamada `origem` e atribuindo a ela o valor `'origem.txt'`. Isso significa que o arquivo de origem que queremos ler está chamado "origem.txt". Você pode substituir esse nome pelo caminho do arquivo que deseja ler.

3. `const destino = 'destino.txt';`: Similarmente, estamos definindo outra variável chamada `destino` e atribuindo a ela o valor `'destino.txt'`. Essa variável representa o arquivo de destino onde queremos escrever os dados lidos do arquivo de origem. Novamente, você pode alterar o nome ou caminho do arquivo de destino conforme necessário.

4. `// Ler o arquivo de origem`: Este é um comentário que explica o próximo bloco de código. Ele indica que estamos prestes a ler o conteúdo do arquivo de origem.

5. `fs.readFile(origem, 'utf8', (err, data) => {`: Aqui, estamos chamando a função `readFile` do módulo `fs`. Ela recebe três argumentos:
    - `origem`: O nome do arquivo que queremos ler (definido anteriormente como `'origem.txt'`).
    - `'utf8'`: A codificação do arquivo (UTF-8 neste caso).
    - Uma **função de retorno de chamada (callback)** que será executada após a conclusão da leitura. Essa função recebe dois parâmetros: `err` (caso ocorra algum erro durante a leitura) e `data` (os dados lidos do arquivo).

6. `if (err) { console.error('Erro ao ler o arquivo de origem:', err); return; }`: Aqui, estamos verificando se ocorreu algum erro durante a leitura do arquivo. Se houver um erro, exibimos uma mensagem de erro no console e encerramos a execução do programa usando `return`.

7. `console.log('Conteúdo do arquivo de origem:'); console.log(data);`: Se a leitura for bem-sucedida, exibimos o conteúdo do arquivo de origem no console. A variável `data` contém os dados lidos do arquivo.

8. `// Escrever no arquivo de destino`: Este é outro comentário que explica o próximo bloco de código. Indica que estamos prestes a escrever os dados lidos no arquivo de destino.

9. `fs.writeFile(destino, data, 'utf8', (err) => {`: Aqui, estamos chamando a função `writeFile` do módulo `fs`. Ela recebe quatro argumentos:
    - `destino`: O nome do arquivo de destino (definido anteriormente como `'destino.txt'`).
    - `data`: Os dados que queremos escrever no arquivo (os dados lidos do arquivo de origem).
    - `'utf8'`: A codificação do arquivo (UTF-8 neste caso).
    - Uma função de retorno de chamada que será executada após a conclusão da escrita. Essa função também recebe um parâmetro `err` caso ocorra algum erro durante a escrita.

10. `if (err) { console.error('Erro ao escrever no arquivo de destino:', err); return; }`: Novamente, verificamos se ocorreu algum erro durante a escrita. Se houver um erro, exibimos uma mensagem de erro no console e encerramos a execução do programa.

11. `console.log('Conteúdo de origem copiado para o destino.');`: Se a escrita for bem-sucedida, exibimos uma mensagem indicando que o conteúdo do arquivo de origem foi copiado para o arquivo de destino.

# Criar arquivos

Agora vamos criar um arquivo. O código do exemplo fa´ra a seguinte coisa:
1. Verifica se o arquivo.txt já existe
2. Se não existe será criado
3. Se existe será informado que já existe
4. Com o arquivo criado será adicionado um pequeno texto ao que já existe

O código é:
```javascript
const fs = require('fs');

// Verifica se o arquivo já existe
fs.access('arquivo.txt', fs.constants.F_OK, (err) => {
    if (err) {
        // Arquivo não existe, então cria e escreve nele
        fs.writeFile('arquivo.txt', 'Olá mundo, meu nome é Claudio.', (err) => {
            if (err) {
                console.error('Erro ao criar o arquivo:', err);
            } else {
                console.log('O arquivo foi criado e o conteúdo foi escrito.');
            }
        });
    } else{
        console.log('O arquivo já existe.');
    }
});

fs.appendFile('arquivo.txt', '\nMeu nome é Claudio.', (err) => {
    if (err) {
        console.error('Erro ao escrever no arquivo:', err);
    } else {
        console.log('Conteúdo adicionado ao arquivo.');
    }
});
``` 
## Explicado o código


```javascript
const fs = require('fs');
```
- Esta linha importa o módulo 'fs' (file system) do Node.js, que fornece uma API para interagir com o sistema de arquivos do sistema operacional.

```javascript
// Verifica se o arquivo já existe
fs.access('arquivo.txt', fs.constants.F_OK, (err) => {
    if (err) {
```
- `fs.access()` é um método usado para verificar a existência de um arquivo ou diretório.
- `'arquivo.txt'` é o nome do arquivo que será verificado.
- `fs.constants.F_OK` é uma constante que indica que o arquivo deve existir. Se o arquivo não existir, `fs.access()` irá retornar um erro.
- `(err) => {`: Esta é uma função de retorno de chamada que será executada após a verificação da existência do arquivo. Se houver um erro, a variável `err` conterá informações sobre o erro.

```javascript
        // Arquivo não existe, então cria e escreve nele
        fs.writeFile('arquivo.txt', 'Olá mundo, meu nome é Claudio.', (err) => {
            if (err) {
                console.error('Erro ao criar o arquivo:', err);
            } else {
                console.log('O arquivo foi criado e o conteúdo foi escrito.');
            }
        });
    } else{
        console.log('O arquivo já existe.');
    }
});
```
- Se houver um erro durante a verificação da existência do arquivo, isso indica que o arquivo não existe. Nesse caso, o código dentro do bloco `if (err) { ... }` será executado.
- `fs.writeFile()` é usado para escrever conteúdo em um arquivo. Neste caso, estamos escrevendo "Olá mundo, meu nome é Claudio." no arquivo 'arquivo.txt'.
- Se ocorrer um erro durante a escrita do arquivo, uma mensagem de erro será exibida no console. Caso contrário, uma mensagem indicando que o arquivo foi criado e o conteúdo foi escrito será exibida.
- Se o arquivo já existir, o código dentro do bloco `else { ... }` será executado, exibindo uma mensagem indicando que o arquivo já existe.

```javascript
fs.appendFile('arquivo.txt', '\nMeu nome é Claudio.', (err) => {
    if (err) {
        console.error('Erro ao escrever no arquivo:', err);
    } else {
        console.log('Conteúdo adicionado ao arquivo.');
    }
});
```
- `fs.appendFile()` é usado para adicionar conteúdo a um arquivo existente. Neste caso, estamos adicionando "\nMeu nome é Claudio." ao arquivo 'arquivo.txt'.
- Se ocorrer um erro durante a operação de adição de conteúdo ao arquivo, uma mensagem de erro será exibida no console. Caso contrário, uma mensagem indicando que o conteúdo foi adicionado ao arquivo será exibida.

# `fs.writeFile()` e `fs.appendFile()`

`fs.writeFile()` e `fs.appendFile()` são duas funções do módulo `fs` do Node.js que são usadas para escrever em arquivos, mas com comportamentos ligeiramente diferentes:

1. **fs.writeFile()**:
   - `fs.writeFile()` é usado para escrever em um arquivo, substituindo completamente seu conteúdo, se o arquivo já existir. Se o arquivo não existir, ele será criado.
   - Se o arquivo já existir, `fs.writeFile()` substituirá todo o seu conteúdo pelo novo conteúdo fornecido.
   - Sintaxe: `fs.writeFile(file, data[, options], callback)`

2. **fs.appendFile()**:
   - `fs.appendFile()` é usado para adicionar conteúdo a um arquivo existente sem excluir o conteúdo anterior. Se o arquivo não existir, ele será criado.
   - O conteúdo fornecido é adicionado ao final do arquivo.
   - Sintaxe: `fs.appendFile(path, data[, options], callback)`


 😊
