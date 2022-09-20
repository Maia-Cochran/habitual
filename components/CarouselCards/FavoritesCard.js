import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, IndieFlower_400Regular } from '@expo-google-fonts/indie-flower';


const FavoritesCard = ({renderFavorite, addFavorite, quote, navigation}) => {
    let [fontsLoaded] = useFonts({
        IndieFlower_400Regular,
      });

      if(!fontsLoaded){
        return <AppLoading />;
    } else{
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
            <Text style={styles.textStyles}>{renderFavorite}</Text>
            {!renderFavorite() ? <Text style={styles.textStyles}>Add Fav</Text> : renderFavorite()}
            </ImageBackground>
        </View>
    )
  }
};

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
        fontSize: 50,
        color: '#869684',
        textAlign: 'center',
        alignItems: 'center', 
        fontFamily: 'IndieFlower_400Regular',
    },
})

export default FavoritesCard