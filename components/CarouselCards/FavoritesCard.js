import React from 'react';
import { View, Text, StyleSheet, Image, Pressable, ImageBackground } from 'react-native';
import { useState, useEffect } from 'react';
import GoodVibeModal from '../Navigation/GoodVibeModal';
import AppLoading from 'expo-app-loading';
import { useFonts, IndieFlower_400Regular } from '@expo-google-fonts/indie-flower';


const FavoritesCard = () => {

    return (
        <View style={styles.favoritesContainer}>
            <ImageBackground  style={styles.imageContainer} source={require("../../assets/background-with-leaves.png")} resizeMode="cover">
            <Text style={styles.textStyles}>This is where all my dreams come true</Text>
            <Text>{favorites}</Text>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    favoritesContainer: {
        height: '100%',
        alignItems: 'center',
    },
    imageContainer: {
        height: '100%',
        width: '100%',
        alignItems: 'center',
    
    },
    textStyles: {
        padding: 40,
        textAlign: 'center',
        alignItems: 'center'
    }
})

export default FavoritesCard