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
