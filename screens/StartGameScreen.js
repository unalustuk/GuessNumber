import { useState } from "react"

import { View, TextInput, StyleSheet, Alert } from "react-native"
import React from "react"
import PrimaryButton from "../components/PrimaryButton"

export default function StartGameScreen({ onPickNumber }) {
    const [enteredNumber, setEnteredNumber] = useState("")

    function numberInputHandler(data) {
        setEnteredNumber((prevState) => {
            return data
        })
    }
    function resetInputHandler() {
        setEnteredNumber("")
    }

    function confirmInputHandler() {
        const chosenNum = parseInt(enteredNumber)

        if (isNaN(chosenNum) || chosenNum <= 0 || chosenNum > 99) {
            Alert.alert(
                "Invalid number!",
                "Number has to be a number between 1 and 99.",
                [
                    {
                        text: "Okay",
                        style: "destructive",
                        onPress: resetInputHandler,
                    },
                ]
            )
        } else {
            onPickNumber(enteredNumber)
        }
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholderTextColor={"#ddb52f"}
                maxLength={2}
                keyboardType={"number-pad"}
                onChangeText={numberInputHandler}
                value={enteredNumber}
            />
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={resetInputHandler}>
                        Reset
                    </PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={confirmInputHandler}>
                        Confirm
                    </PrimaryButton>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#3b021f",
        height: 160,
        marginTop: 50,
        marginHorizontal: 24,
        borderRadius: 16,
        elevation: 4,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 6,
        shadowOpacity: 0.3,
    },
    input: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomWidth: 2,
        marginHorizontal: 8,
        borderBottomColor: "#ddb52f",
        color: "#ddb52f",
        marginVertical: 8,
        fontWeight: "bold",
        textAlign: "center",
    },
    buttonsContainer: {
        flexDirection: "row",
    },
    buttonContainer: { flex: 1 },
})
