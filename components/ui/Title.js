import { Text, StyleSheet } from "react-native"
import React from "react"
import Colors from "../../constants/colors"

export default function Title({ children }) {
    return <Text style={styles.title}>{children}</Text>
}

const styles = StyleSheet.create({
    gameContainer: {
        flex: 1,
        padding: 24,
    },
    title: {
        color: "white",
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        borderWidth: 2,
        borderColor: "white",
        padding: 12,
    },
})