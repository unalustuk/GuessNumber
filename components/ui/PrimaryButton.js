import { View, Text, StyleSheet, Pressable } from "react-native"
import React from "react"

import Colors from "../../constants/colors"

export default function PrimaryButton({ children, onPress }) {
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable
                style={({ pressed }) =>
                    pressed
                        ? [styles.buttonInnerContainer, styles.pressed]
                        : styles.buttonInnerContainer
                }
                onPress={onPress}
                android_ripple={{ color: "#640233" }}
            >
                <Text style={styles.text}>{children}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 8,
        overflow: "hidden",
    },
    buttonInnerContainer: {
        backgroundColor: Colors.primary600,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
    },
    text: {
        color: "white",
        textAlign: "center",
    },
    pressed: {
        opacity: 0.75,
    },
})
