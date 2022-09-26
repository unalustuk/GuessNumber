import { useState, useCallback, useEffect } from "react"
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { useFonts } from "expo-font"
import * as SplashScreen from "expo-splash-screen"

import StartGameScreen from "./screens/StartGameScreen"
import GameScreen from "./screens/GameScreen"
import GameOverScreen from "./screens/GameOverScreen"
import Colors from "./constants/colors"

export default function App() {
    const [userNumber, setUserNumber] = useState()
    const [gameIsOver, setGameIsOver] = useState(true)
    const [guessRounds, setGuessRounds] = useState(0)

    const [fontsLoaded] = useFonts({
        "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
        "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    })

    useEffect(() => {
        async function prepare() {
            await SplashScreen.preventAutoHideAsync()
        }
        prepare()
    }, [])

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync()
        }
    }, [fontsLoaded])
    if (!fontsLoaded) {
        return null
    }

    function pickedNumberHandler(pickedNumber) {
        setUserNumber(pickedNumber)
        setGameIsOver(false)
    }

    function gameOverHandler(numberOfRounds) {
        setGameIsOver(true)
        setGuessRounds(numberOfRounds)
    }

    function startNewGameHandler() {
        setUserNumber(null)
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
        screen = (
            <GameOverScreen
                roundsNumber={guessRounds}
                userNumber={userNumber}
                onStartNewGame={startNewGameHandler}
            />
        )
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
                <SafeAreaView
                    style={styles.rootScreen}
                    onLayout={onLayoutRootView}
                >
                    {screen}
                </SafeAreaView>
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
