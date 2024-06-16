// Exemplo de função que realiza um cálculo e usa um callback para retornar o resultado
function calcularOperacao(num1, num2, operacao, callback) {
    let resultado;
    if (operacao === 'soma') {
        resultado = num1 + num2;
    } else if (operacao === 'subtracao') {
        resultado = num1 - num2;
    } else if (operacao === 'multiplicacao') {
        resultado = num1 * num2;
    } else if (operacao === 'divisao') {
        if (num2 !== 0) {
            resultado = num1 / num2;
        } else {
            callback('Erro: divisão por zero não é permitida!');
            return;
        }
    } else {
        callback('Erro: operação inválida!');
        return;
    }
    callback(null, resultado); // Passa null como primeiro argumento para indicar que não há erro
}

// Função callback que exibe o resultado
function exibirResultado(err, resultado) {
    if (err) {
        console.error(err);
    } else {
        console.log(`O resultado da operação é: ${resultado}`);
    }
}

// Chamada da função principal com um callback
calcularOperacao(10, 5, 'soma', exibirResultado); // Resultado esperado: 15