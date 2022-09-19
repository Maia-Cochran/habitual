import React, { useEffect } from "react";
import { View, Button, Text, StyleSheet } from "react-native";


const Splash = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("Home")
        }, 2000);
    }, []);
    return (
        <View style={styles.center}>
            <Text>Splash Screen</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
    },
});
export default Splash;