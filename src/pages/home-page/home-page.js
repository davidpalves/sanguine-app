import React from "react";
import {Text, StyleSheet, View} from "react-native";

const HomePage = () => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Sanguine</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#602B33',
        height: '100%',
    },
    title: {
        fontSize: 65,
    },
    content: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});

export default HomePage;