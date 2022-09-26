import { View, Text, Image, StyleSheet } from "react-native"
import React from "react"
import Title from "../components/ui/Title"
import Colors from "../constants/colors"
import PrimaryButton from "../components/ui/PrimaryButton"

export default function GameOverScreen({
    roundsNumber,
    userNumber,
    onStartNewGame,
}) {
    return (
        <View style={styles.root}>
            <Title>GAME OVER!</Title>
            <View style={styles.imageContainer}>
                <Image
                    source={require("../assets/images/success.png")}
                    style={styles.image}
                />
            </View>
            <Text style={styles.summaryText}>
                Your phone needed{" "}
                <Text style={styles.highligtText}>{roundsNumber}</Text> rounds
                to guess the number
                <Text style={styles.highligtText}> {userNumber}</Text>.
            </Text>
            <PrimaryButton onPress={onStartNewGame}>Play Again</PrimaryButton>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        padding: 24,
        justifyContent: "center",
        alignItems: "center",
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: Colors.primary800,
        overflow: "hidden",
        margin: 36,
    },
    image: {
        width: "100%",
        height: "100%",
    },
    summaryText: {
        fontFamily: "open-sans",
        fontSize: 20,
        textAlign: "center",
        marginBottom: 24,
    },
    highligtText: {
        fontFamily: "open-sans-bold",
        color: Colors.primary500,
    },
})
