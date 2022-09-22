import { useState } from "react"
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native"
import StartGameScreen from "./screens/StartGameScreen"
import GameScreen from "./screens/GameScreen"
import { LinearGradient } from "expo-linear-gradient"

export default function App() {
    const [userNumber, setUserNumber] = useState()

    function pickedNumberHandler(pickedNumber) {
        setUserNumber(pickedNumber)
    }

    let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />

    if (userNumber) {
        screen = <GameScreen />
    }

    return (
        <LinearGradient
            colors={["#4e0329", "#ddb52f"]}
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
