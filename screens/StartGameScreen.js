import { View, TextInput, StyleSheet } from "react-native"
import React from "react"
import PrimaryButton from "../components/PrimaryButton"

export default function StartGameScreen() {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholderTextColor={"#ddb52f"}
                maxLength={2}
                keyboardType={"number-pad"}
            />
            <PrimaryButton>Reset</PrimaryButton>
            <PrimaryButton>Confirm</PrimaryButton>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#72063c",
        marginTop: 50,
        marginHorizontal: 24,
        borderRadius: 16,
        elevation: 4,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 6,
        shadowOpacity: 0.3,
        justifyContent: "center",
        alignItems: "center",
    },
    input: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomWidth: 2,
        borderBottomColor: "#ddb52f",
        color: "#ddb52f",
        marginVertical: 8,
        fontWeight: "bold",
        textAlign: "center",
    },
})
