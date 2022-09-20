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
import GoodVibeModal from './Navigation/GoodVibeModal';


const Home = ({navigation, addFavorite, fetchApiCall, quote }) =>{
    const [modalVisible, setModalVisible] = useState('');

    // const basicFunction =() => {
    //     console.log(`quote`, quote.mantra)
    // }
    // console.log(12345,basicFunction())
    // console.log(`quote`, quote.mantra)
    useEffect( () => {
        console.log(`modalVisible`, modalVisible)
     }, [modalVisible])

// const toggleModal= () => {
//     console.log(`togleModalTriggered`)
//    setModalVisible(!modalVisible)
// }


    return (
        <View style={styles.homeContainer}>
            
            <ImageBackground  source={require("../assets/background-with-leaves.png")} resizeMode="cover">
                <Header />
           
                <GreetingButton addFavorite={addFavorite} fetchApiCall={fetchApiCall} quote={quote} toggleModal={setModalVisible} modalVisible={modalVisible}/>
                 {/* {modalVisible && <GoodVibeModal quote={quote} fetch={fetchApiCall} title="" addFavorite={addFavorite} toggleModal={toggleModal} modalVisible={modalVisible} />} */}
                <View>
                    <CustomSlider data={cardData} />
                </View>
                <View style={styles.bottomNavContainer}>
                        
                <BottomNavBar/>    
                <View>
                <Button
                    title="Go to Favorites"
                    onPress={() => navigation.navigate('FavoritesCard', {name: 'All my Favorites'})}/>
                </View>

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