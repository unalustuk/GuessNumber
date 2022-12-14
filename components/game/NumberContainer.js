import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    useWindowDimensions,
} from "react-native"
import React from "react"
import Colors from "../../constants/colors"

export default function NumberContainer({ children }) {
    const { width, height } = useWindowDimensions()

    const responsiveStyles = height < 380 && {
        margin: 12,
        padding: 12,
        marginBottom: 0,
    }
    return (
        <View style={[styles.container, responsiveStyles]}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    )
}
const deviceWidth = Dimensions.get("window").width

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colors.accent500,
        padding: deviceWidth < 380 ? 12 : 24,
        margin: deviceWidth < 380 ? 24 : 36,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
    },
    numberText: {
        fontFamily: "open-sans-bold",
        color: Colors.accent500,
        fontSize: deviceWidth < 380 ? 28 : 36,
        // fontWeight: "bold",
    },
})
