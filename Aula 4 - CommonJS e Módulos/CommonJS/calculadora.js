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