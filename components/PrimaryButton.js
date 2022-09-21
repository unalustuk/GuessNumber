import { View, Text, StyleSheet } from "react-native"
import React from "react"

export default function PrimaryButton({ children }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 140,
        height: 70,
        backgroundColor: "blue",
        justifyContent: "center",
        alignItems: "center",
        margin: 8,
    },
    text: {
        color: "white",
    },
})
