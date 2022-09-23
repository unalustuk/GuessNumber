import { useState } from "react"
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native"
import StartGameScreen from "./screens/StartGameScreen"
import GameScreen from "./screens/GameScreen"
import GameOverScreen from "./screens/GameOverScreen"
import { LinearGradient } from "expo-linear-gradient"
import Colors from "./constants/colors"

export default function App() {
    const [userNumber, setUserNumber] = useState()
    const [gameIsOver, setGameIsOver] = useState(true)

    function pickedNumberHandler(pickedNumber) {
        setUserNumber(pickedNumber)
        setGameIsOver(false)
    }

    function gameOverHandler() {
        setGameIsOver(true)
    }

    let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />

    if (userNumber) {
        screen = (
            <GameScreen
                chosenNumber={userNumber}
                onGameOver={gameOverHandler}
            />
        )
    }

    if (gameIsOver && userNumber) {
        screen = <GameOverScreen />
    }

    return (
        <LinearGradient
            colors={[Colors.primary700, Colors.accent500]}
            style={styles.rootScreen}
        >
            <ImageBackground
                style={styles.rootScreen}
                resizeMode="cover"
                source={require("./assets/images/dice-image.png")}
                imageStyle={styles.bgImage}
            >
                <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
            </ImageBackground>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    rootScreen: {
        flex: 1,
    },
    bgImage: {
        opacity: 0.15,
    },
})
