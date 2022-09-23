import { View, Text, StyleSheet } from "react-native"
import React from "react"
import Colors from "../../constants/colors"

export default function Card({ children }) {
    return <View style={styles.container}>{children}</View>
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.primary800,
        marginTop: 36,
        paddingVertical: 16,
        paddingHorizontal: 8,
        marginHorizontal: 24,
        borderRadius: 16,
        elevation: 4,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 6,
        shadowOpacity: 0.3,
    },
})
