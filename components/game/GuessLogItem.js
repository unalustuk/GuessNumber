import { View, Text, StyleSheet } from "react-native"
import React from "react"
import Colors from "../../constants/colors"

export default function GuessLogItem({ roundNumber, guess }) {
    return (
        <View style={styles.guessContainer}>
            <Text style={styles.guessText}>#{roundNumber}</Text>
            <Text style={styles.guessText}>
                Opponent's Guess: <Text style={styles.highlight}>{guess}</Text>
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    guessContainer: {
        backgroundColor: Colors.primary600,
        margin: 4,
        flexDirection: "row",
        borderRadius: 40,
        justifyContent: "center",
        alignItems: "center",
        elevation: 4,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.25,
        shadowRadius: 3,
    },
    guessText: {
        color: Colors.accent500,
        fontSize: 22,
        padding: 12,
        fontFamily: "open-sans",
        textAlign: "center",
    },
    highlight: {
        fontFamily: "open-sans-bold",
        fontSize: 26,
    },
})
