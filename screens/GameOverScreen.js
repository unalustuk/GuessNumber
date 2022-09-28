import {
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions,
    useWindowDimensions,
} from "react-native"
import React from "react"
import Title from "../components/ui/Title"
import Colors from "../constants/colors"
import PrimaryButton from "../components/ui/PrimaryButton"

export default function GameOverScreen({
    roundsNumber,
    userNumber,
    onStartNewGame,
}) {
    const { width, height } = useWindowDimensions()

    return (
        <View style={styles.root}>
            <Title>GAME OVER!</Title>
            {height > 380 && (
                <View style={styles.imageContainer}>
                    <Image
                        source={require("../assets/images/success.png")}
                        style={styles.image}
                    />
                </View>
            )}

            <Text style={styles.summaryText}>
                Your phone needed{" "}
                <Text style={styles.highligtText}>{roundsNumber}</Text> rounds
                to guess the number
                <Text style={styles.highligtText}> {userNumber}</Text>.
            </Text>
            <View style={styles.buttonContainer}>
                <PrimaryButton onPress={onStartNewGame}>
                    Play Again
                </PrimaryButton>
            </View>
        </View>
    )
}
const deviceWidth = Dimensions.get("window").width
const imageWidth = deviceWidth * 0.8

const styles = StyleSheet.create({
    root: {
        flex: 1,
        padding: 24,
        justifyContent: "center",
        alignItems: "center",
    },
    imageContainer: {
        width: deviceWidth < 380 ? 150 : 300,
        height: deviceWidth < 380 ? 150 : 300,
        borderRadius: deviceWidth < 380 ? 75 : 150,
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
        marginTop: 24,

        marginBottom: 24,
    },
    buttonContainer: { minWidth: "60%" },

    highligtText: {
        fontFamily: "open-sans-bold",
        color: Colors.primary500,
    },
})
