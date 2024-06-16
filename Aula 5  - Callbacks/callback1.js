// Exemplo de função que recebe um callback
function saudacao(nome, callback) {
    const mensagem = `Olá, ${nome}!`;
    callback(mensagem);
}

// Função callback que imprime a mensagem
function imprimirMensagem(mensagem) {
    console.log(mensagem);
}

// Chamada da função principal com um callback
saudacao('João', imprimirMensagem);