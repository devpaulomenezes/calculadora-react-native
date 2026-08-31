import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { theme } from '../styles/theme';

interface ButtonProps {
    label: string;
    onPress: () => void;
    variant?: 'number' | 'operator' | 'function';
    flex?: number; // Permite que alguns botões ocupem mais espaço (ex: o "0")
}

export function Button({
    label,
    onPress,
    variant = 'number',
    flex = 1,
}: ButtonProps) {
    const backgroundColor = {
        number: theme.colors.buttonNumber,
        operator: theme.colors.buttonOperator,
        function: theme.colors.buttonFunction,
    }[variant];

    return (
        <TouchableOpacity
            style={[styles.button, { backgroundColor, flex }]}
            onPress={onPress}
            activeOpacity={0.7}
        >
            <Text
                style={[
                    styles.text,
                    { color: variant === 'operator' ? theme.colors.buttonTextOperator : theme.colors.buttonText },
                ]}
            >
                {label}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        height: 80,
        borderRadius: theme.spacing.buttonRadius,
        justifyContent: 'center',
        alignItems: 'center',
        margin: theme.spacing.gap / 2,
    },
    text: {
        fontSize: theme.fontSize.button,
        fontWeight: '500',
    },
});