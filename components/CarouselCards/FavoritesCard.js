import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import GoodVibeCard from '../CarouselCards/GoodVibeCard';
import Carousel from 'react-native-snap-carousel';

const FavoritesCard = () => {
    return(
        <View style={styles.card}>
            <Text style={styles.textStyle}>View My Favorite Quotes</Text>
            <Text style={styles.textStyle}>Press Here to review of good vibes</Text>
        </View>
    )
}

export default FavoritesCard;

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 25,
        textAlign: 'center',
        color: 'white',
        padding: 10
    }
})