import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CalendarCard = () => {
    return (
        <View>
            <Text style={styles.textStyle}>Calendar View to see streaks</Text>
            <Text style={styles.textStyle}>This is the carousel card that user can click to see the modal</Text>
        </View>

    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    }
})

export default CalendarCard