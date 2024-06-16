const fs = require('fs');
fs.access('arquivo.txt', fs.constants.F_OK, (err) => {
    if (err) {
// Arquivo não existe, então cria do novo e escreve nele
fs.writeFile('arquivo.txt', 'Olá mundo, meu nome é Claudio.', (err) => {
            if (err) {
            console.error('Erro ao criar o arquivo:', err);
            } else {
            console.log('O arquivo foi criado e o conteúdo foi escrito.');
            }
        });
    } else{console.log('O arquivo já existe.');
    }
});

fs.appendFile('arquivo.txt', '\n Meu nome é Claudio. Nova linha.', (err) => {
    if (err) {
        console.error('Erro ao escrever no arquivo:', err);
    } else {
        console.log('Conteúdo adicionado ao arquivo.');
    }
});