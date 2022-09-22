import { Text, StyleSheet } from "react-native"
import React from "react"

export default function Title({ children }) {
    return <Text style={styles.title}>{children}</Text>
}

const styles = StyleSheet.create({
    gameContainer: {
        flex: 1,
        padding: 24,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#ddb52f",
        textAlign: "center",
        borderWidth: 2,
        borderColor: "#ddb52f",
        padding: 12,
    },
})
