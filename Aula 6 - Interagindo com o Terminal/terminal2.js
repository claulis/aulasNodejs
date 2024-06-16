// Exemplo de uso: node terminal2.js João
const nome = process.argv[2]; // process.argv[0] é 'node', process.argv[1] é o caminho do script, process.argv[2] é o primeiro argumento passado

if (nome) {
    console.log(`Olá, ${nome}! Bem-vindo ao seu primeiro script Node.js.`);
} else {
    console.log('Por favor, passe um nome como argumento.');
}