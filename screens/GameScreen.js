import { View, Text, StyleSheet } from "react-native"
import React from "react"
import Title from "../components/Title"

export default function GameScreen() {
    return (
        <View style={styles.gameContainer}>
            <Title>Opponent's Guess</Title>
            <Text>GUESS</Text>
            <View>
                <Text> Higher or lower?</Text>
                <Text>+</Text>
                <Text>-</Text>
            </View>
            <View>
                <Text>LOG ROUNDs</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    gameContainer: {
        flex: 1,
        padding: 24,
    },
})
