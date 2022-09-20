import React from 'react';
import { View, Text, StyleSheet, Image, Pressable, ImageBackground } from 'react-native';
import { useState, useEffect } from 'react';
import GoodVibeModal from '../Navigation/GoodVibeModal';
import AppLoading from 'expo-app-loading';
import { useFonts, IndieFlower_400Regular } from '@expo-google-fonts/indie-flower';


const FavoritesCard = ({renderFavorite, addFavorite, quote, navigation}) => {
    //rendeFavorite conditioned to be the data that always exists
    // in a ternary !function()?? display: do nothing
    

     

    return (
        <View 
            style={styles.favoritesContainer} 
            renderFavorite={renderFavorite} 
            addFavorite={addFavorite} 
            navigation={navigation}>
            <ImageBackground  
                style={styles.imageContainer} 
                source={require("../../assets/background-with-leaves.png")} 
                resizeMode="cover">
            {!renderFavorite() ? <Text>Add Fav</Text> : renderFavorite()}
            <Text style={styles.textStyles}>{renderFavorite}</Text>
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