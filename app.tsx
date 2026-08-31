import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { Display } from './src/components/Display';
import { Button } from './src/components/Button';
import { calculate, formatResult, Operation } from './src/utils/calculator';
import { theme } from './src/styles/theme';

export default function App() {
    const [displayValue, setDisplayValue] = useState('0');
    const [operand, setOperand] = useState<number | null>(null);
    const [operation, setOperation] = useState<Operation | null>(null);
    const [waitingForOperand, setWaitingForOperand] = useState(false);

    // --- Manipulação de dígitos ---
    const inputDigit = (digit: string) => {
        if (waitingForOperand) {
            setDisplayValue(digit);
            setWaitingForOperand(false);
        } else {
            // Permite apenas um ponto decimal por número
            if (digit === '.' && displayValue.includes('.')) return;
            setDisplayValue(displayValue === '0' && digit !== '.' ? digit : displayValue + digit);
        }
    };

    // --- Operações ---
    const handleOperation = (op: Operation) => {
        const current = parseFloat(displayValue);

        if (operand === null) {
            setOperand(current);
        } else if (operation) {
            const result = calculate(operand, current, operation);
            if (typeof result === 'string') {
                setDisplayValue(result);
                setOperand(null);
                setOperation(null);
                setWaitingForOperand(true);
                return;
            }
            const formatted = formatResult(result);
            setDisplayValue(formatted);
            setOperand(result);
        }

        setOperation(op);
        setWaitingForOperand(true);
    };

    // --- Igual ---
    const handleEquals = () => {
        if (operand === null || operation === null) return;

        const current = parseFloat(displayValue);
        const result = calculate(operand, current, operation);

        if (typeof result === 'string') {
            setDisplayValue(result);
        } else {
            setDisplayValue(formatResult(result));
        }

        setOperand(null);
        setOperation(null);
        setWaitingForOperand(true);
    };

    // --- Limpar ---
    const handleClear = () => {
        setDisplayValue('0');
        setOperand(null);
        setOperation(null);
        setWaitingForOperand(false);
    };

    // --- Alternar sinal ---
    const handleToggleSign = () => {
        if (displayValue === '0') return;
        setDisplayValue(displayValue.startsWith('-') ? displayValue.slice(1) : '-' + displayValue);
    };

    // --- Porcentagem ---
    const handlePercentage = () => {
        const current = parseFloat(displayValue);
        setDisplayValue(formatResult(current / 100));
    };

    return (
        <SafeAreaView style={styles.container}>
            <Display value={displayValue} />

            <View style={styles.keyboard}>
                {/* Linha 1: funções */}
                <View style={styles.row}>
                    <Button label="AC" variant="function" onPress={handleClear} />
                    <Button label="±" variant="function" onPress={handleToggleSign} />
                    <Button label="%" variant="function" onPress={handlePercentage} />
                    <Button label="÷" variant="operator" onPress={() => handleOperation('÷')} />
                </View>

                {/* Linha 2 */}
                <View style={styles.row}>
                    <Button label="7" onPress={() => inputDigit('7')} />
                    <Button label="8" onPress={() => inputDigit('8')} />
                    <Button label="9" onPress={() => inputDigit('9')} />
                    <Button label="×" variant="operator" onPress={() => handleOperation('×')} />
                </View>

                {/* Linha 3 */}
                <View style={styles.row}>
                    <Button label="4" onPress={() => inputDigit('4')} />
                    <Button label="5" onPress={() => inputDigit('5')} />
                    <Button label="6" onPress={() => inputDigit('6')} />
                    <Button label="-" variant="operator" onPress={() => handleOperation('-')} />
                </View>

                {/* Linha 4 */}
                <View style={styles.row}>
                    <Button label="1" onPress={() => inputDigit('1')} />
                    <Button label="2" onPress={() => inputDigit('2')} />
                    <Button label="3" onPress={() => inputDigit('3')} />
                    <Button label="+" variant="operator" onPress={() => handleOperation('+')} />
                </View>

                {/* Linha 5: o "0" ocupa espaço duplo + expoente */}
                <View style={styles.row}>
                    <Button label="0" onPress={() => inputDigit('0')} flex={2} />
                    <Button label="." onPress={() => inputDigit('.')} />
                    <Button label="^" variant="operator" onPress={() => handleOperation('^')} />
                </View>

                {/* Linha 6: igual */}
                <View style={styles.row}>
                    <Button label="=" variant="operator" onPress={handleEquals} />
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
    },
    keyboard: {
        flex: 2,
        paddingBottom: 24,
    },
    row: {
        flexDirection: 'row',
        flex: 1,
    },
});