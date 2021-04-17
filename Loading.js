import React from "react";
import { StyleSheet, Text, View } from 'react-native';

export function Loading() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Getting{"\n"}the weather...</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 30,
        backgroundColor: "#a29bfe"
    },
    text: {
        color: "#2d3436",
        fontSize: 25,
        fontWeight: "900",
    }
})