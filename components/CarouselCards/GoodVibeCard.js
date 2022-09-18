import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
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
            <Image source={require("../../assets/zen.png")} style={styles.icons}/>
            <Text style={styles.textStyle}>Press Here for Your Dose of Good Vibes</Text>
            
                <View>
<GoodVibeModal compliment={compliments.compliment} fetch={getCompliments} style={{zIndex:2}}/>
                </View>
           
        </View>
    )
  }
};

// const styles = StyleSheet.create({
//   textContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingTop: 150,
//   },
//     textStyle: {
//         fontSize: 25,
//         textAlign: 'center',
//         color: 'white',
//         padding: 10,
//         fontFamily: 'IndieFlower_400Regular',
//     },
//     icons:{
//       height: 38,
  
//     }
// })

// export default GoodVibeCard
