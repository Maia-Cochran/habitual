import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CheckListView = () => {
    return (
        <View style={styles.card}>
            <Text style={styles.textStyle}>Check List!</Text>
            <Text style={styles.textStyle}>📄</Text>
            <Text style={styles.textStyle}>This is the carousel card that user can click to see the modal</Text>
            <CheckListModal style={{zIndex:1}}/>
        </View>

    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    }
})

export default CheckListView