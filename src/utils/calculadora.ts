export type Operation = '+' | '-' | '×' | '÷' | '^';

/**
 * Avalia uma expressão matemática básica com dois operandos.
 * Retorna o resultado ou uma mensagem de erro.
 */
export function calculate(
    operand1: number,
    operand2: number,
    operation: Operation
): number | string {
    switch (operation) {
        case '+':
            return operand1 + operand2;
        case '-':
            return operand1 - operand2;
        case '×':
            return operand1 * operand2;
        case '÷':
            if (operand2 === 0) return 'Erro: divisão por zero';
            return operand1 / operand2;
        case '^':
            return Math.pow(operand1, operand2);
        default:
            return 'Operação inválida';
    }
}

/**
 * Formata um número para exibição, removendo zeros à direita
 * desnecessários e limitando casas decimais.
 */
export function formatResult(value: number): string {
    if (Number.isInteger(value)) return value.toString();
    // Limita a 10 casas decimais e remove zeros à direita
    return parseFloat(value.toFixed(10)).toString();
}