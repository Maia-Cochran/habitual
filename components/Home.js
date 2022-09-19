import React, {useEffect, useState} from 'react'
import { View, StyleSheet, Text, TouchableHighlight, Image, ImageBackground, Button } from 'react-native'
import Header from './Header'
import GreetingButton from './GreetingButton'
import CustomSlider from './Carousel/CustomSlider';
import BottomNavBar from './BottomNavBar';
import cardData from '../utilities/data';
// import { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Home = ({navigation, handleChange, }) =>{
    return (
        <View style={styles.homeContainer}>
                <ImageBackground  source={require("../assets/background-with-leaves.png")} resizeMode="cover">
            <Header />
            <GreetingButton />
            <View>
                <CustomSlider data={cardData} />
            </View>
            <View style={styles.bottomNavContainer}>
                    
            <BottomNavBar>    
        <Button
          title="Go to Favorites"
          onPress={() => navigation.navigate('FavoritesCard', {name: 'All my Favorites'})}
         />
                </BottomNavBar>
            </View>
            </ImageBackground>
        </View>
    )
}

export default Home;
    const styles = StyleSheet.create({
        homeContainer: {
            alignItems: 'center',
        },
        bottomNavContainer: {
            // alignItems: 'flex-end',
            marginTop: -160,
            marginLeft: 20,
            // justifyContent: 'flex-end',
            // height: 180,
            width: "100%",
            // margin: 20,
          }
    })