import { View, Text, StyleSheet, Alert } from "react-native"
import React, { useState, useEffect } from "react"
import { FontAwesome } from "@expo/vector-icons"
import NumberContainer from "../components/game/NumberContainer"
import Title from "../components/ui/Title"
import PrimaryButton from "../components/ui/PrimaryButton"
import Card from "../components/ui/Card"
import InstructionText from "../components/ui/InstructionText"

function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min

    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude)
    } else {
        return rndNum
    }
}

let minBoundry = 1
let maxBoundry = 100

export default function GameScreen({ chosenNumber, onGameOver }) {
    const initialGuess = generateRandomBetween(1, 100, chosenNumber)
    const [currentGuess, setCurrentGuess] = useState(initialGuess)
    useEffect(() => {
        if (currentGuess === chosenNumber) {
            onGameOver()
        }
    }, [currentGuess, chosenNumber, onGameOver])
    function nextGuessHandler(direction) {
        if (
            (direction === "lower" && currentGuess < chosenNumber) ||
            (direction === "higher" && currentGuess > chosenNumber)
        ) {
            return Alert.alert("Don't lie", "You know that this is wrong...", [
                { text: "Sorry!", style: "cancel" },
            ])
        }
        if (direction === "lower") {
            maxBoundry = currentGuess
        } else {
            minBoundry = currentGuess + 1
        }
        const newRndNumber = generateRandomBetween(
            minBoundry,
            maxBoundry,
            currentGuess
        )
        setCurrentGuess(newRndNumber)
    }
    return (
        <View style={styles.gameContainer}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
                <InstructionText style={styles.text}>
                    Higher or lower?
                </InstructionText>
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton
                            onPress={nextGuessHandler.bind(this, "lower")}
                        >
                            <FontAwesome name="minus" size={24} color="white" />
                        </PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton
                            onPress={nextGuessHandler.bind(this, "higher")}
                        >
                            <FontAwesome name="plus" size={24} color="white " />
                        </PrimaryButton>
                    </View>
                </View>
            </Card>
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
    buttonsContainer: {
        flexDirection: "row",
    },
    buttonContainer: { flex: 1 },
    text: {
        marginBottom: 24,
    },
})
