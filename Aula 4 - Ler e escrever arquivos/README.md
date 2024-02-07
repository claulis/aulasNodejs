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

 😊
