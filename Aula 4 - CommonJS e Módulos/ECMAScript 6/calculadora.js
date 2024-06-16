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