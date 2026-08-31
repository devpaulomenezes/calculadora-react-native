import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { theme } from '../styles/theme';

interface DisplayProps {
    value: string;
}

export function Display({ value }: DisplayProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.text} numberOfLines={1}>
                {value}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.display,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        paddingHorizontal: 24,
        paddingBottom: 24,
    },
    text: {
        fontSize: theme.fontSize.display,
        color: theme.colors.displayText,
        fontWeight: '300',
    },
});