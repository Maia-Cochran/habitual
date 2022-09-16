import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useState, useEffect } from 'react';
import GoodVibeModal from '../Navigation/GoodVibeModal';
import AppLoading from 'expo-app-loading';
import { useFonts, IndieFlower_400Regular } from '@expo-google-fonts/indie-flower';



const GoodVibeCard = () => {
    const [compliments, setCompliments] = useState([]);
    const [error, setError] = useState('');
    let [fontsLoaded] = useFonts({
        IndieFlower_400Regular,
      });
    


    const getCompliments = async () => {
        const url = "https://complimentr.com/api" 
        setError('')
    
        try {
          const response = await fetch(url)
          const compliments = await response.json()
          setCompliments(compliments)
        } catch(error) {
          setError(error.message)
        }
      }
    
      useEffect(() => {
        getCompliments()
      }, [])


      if(!fontsLoaded){
        return <AppLoading />;
    } else{
    return (
        <View style={styles.textContainer}>
            <Text style={styles.textStyle}>Tell Me Something Good</Text>
            <Text style={styles.textStyle}>🪷</Text>
            <Text style={styles.textStyle}>Press Here for Your Dose of Good Vibes</Text>
            <View style={styles.goodVibeModalContainer}>
                <View>
                    <GoodVibeModal compliment={compliments.compliment} fetch={getCompliments} style={{zIndex:2}}/>
                </View>
            </View>
        </View>
    )
  }
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 25,
        textAlign: 'center',
        color: 'white',
        padding: 10,
        fontFamily: 'IndieFlower_400Regular',
    },
})

export default GoodVibeCard
