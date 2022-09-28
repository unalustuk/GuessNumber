import { useState } from "react"

import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Alert,
    Dimensions,
    useWindowDimensions,
    KeyboardAvoidingView,
    ScrollView,
} from "react-native"
import React from "react"
import PrimaryButton from "../components/ui/PrimaryButton"
import Title from "../components/ui/Title"

import Colors from "../constants/colors"
import Card from "../components/ui/Card"
import InstructionText from "../components/ui/InstructionText"

export default function StartGameScreen({ onPickNumber }) {
    const [enteredNumber, setEnteredNumber] = useState("")

    const { width, height } = useWindowDimensions()

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
            onPickNumber(chosenNum)
        }
    }

    // marginTop: deviceHeight < 380 ? 30 : 100,
    const marginTopDistance = height < 380 ? 30 : 100

    return (
        <ScrollView style={styles.screen}>
            <KeyboardAvoidingView style={styles.screen} behavior="position">
                <View
                    style={[
                        styles.rootContainer,
                        { marginTop: marginTopDistance },
                    ]}
                >
                    <Title>Guess My Number</Title>
                    <Card>
                        <InstructionText>Enter a Number</InstructionText>
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
                    </Card>
                </View>
            </KeyboardAvoidingView>
        </ScrollView>
    )
}

// const deviceHeight = Dimensions.get("window").height

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    rootContainer: {
        flex: 1,
        // marginTop: deviceHeight < 380 ? 30 : 100,
        alignItems: "center",
    },
    input: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomWidth: 2,
        marginHorizontal: 8,
        borderBottomColor: Colors.accent500,
        color: Colors.accent500,
        marginVertical: 8,
        fontWeight: "bold",
        textAlign: "center",
    },
    buttonsContainer: {
        flexDirection: "row",
        marginBottom: 24,
        marginHorizontal: 8,
        marginTop: 16,
    },
    buttonContainer: { flex: 1 },
})
