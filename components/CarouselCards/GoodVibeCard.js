import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import GoodVibeModal from '../Navigation/GoodVibeModal';

const GoodVibeCard = () => {
    return (
                <View style={styles.card}>
                    <Text style={styles.textStyle}>Tell Me Something Good</Text>
                    <Text style={styles.textStyle}>🪷</Text>
                    <Text style={styles.textStyle}>Press Here for your dose of good vibes</Text>
                    <GoodVibeModal style={{zIndex:1}}/>
                </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 25,
        textAlign: 'center',
        color: 'white',
        padding: 10
    },
})

export default GoodVibeCard