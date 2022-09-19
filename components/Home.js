import { View, StyleSheet, TouchableHighlight, Image, ImageBackground } from 'react-native'
import Header from './Header'
import GreetingButton from './GreetingButton'
import CustomSlider from './Carousel/CustomSlider';
import BottomNavBar from './BottomNavBar';
import cardData from '../utilities/data';
// import { useState, useEffect } from 'react';

const Home = () =>{
    return (
        <View style={styles.homeContainer}>
                <ImageBackground  source={require("../assets/background-with-leaves.png")} resizeMode="cover">
            <Header />
            <GreetingButton />
            <View>
                <CustomSlider data={cardData} />
            </View>
            <View style={styles.bottomNavContainer}>
                <BottomNavBar />      
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
            marginTop: -80,
            // justifyContent: 'flex-end',
            // height: 180,
            width: "100%",
            // margin: 20,
          }
    })