import React from 'react';
import { ParallaxImage } from 'react-native-snap-carousel';
import { Text, Pressable, SafeAreaView, Image, View } from 'react-native';
import styles from './styles';
// import AppLoading from 'expo-app-loading';
import { useState, useEffect } from 'react';
// import { useFonts, IndieFlower_400Regular } from '@expo-google-fonts/indie-flower';

const CarouselItem = ({item, index}, parallaxProps) => {
  const [compliments, setCompliments] = useState([]);
  const [error, setError] = useState('');
  // let [fontsLoaded] = useFonts({
  //     IndieFlower_400Regular,
  //   });

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
    
    // let [fontsLoaded] = useFonts({
    //     IndieFlower_400Regular,
    //   });
    
    //   if(!fontsLoaded){
    //     return <AppLoading />;
    // } else {

    return (
      <Pressable onPress={() => alert('Image description:' + item.description)}>
        
        <SafeAreaView style={styles.item}>
          <Text style={styles.title}>{item.title}</Text>
          <ParallaxImage
            source={item.image} 
            containerStyle={styles.imageContainer}
            style={styles.image}
            {...parallaxProps} 
          />
          <Text style={styles.motto}>{item.motto}</Text>
        </SafeAreaView>
        <View>
          <GoodVibeModal compliment={compliments.compliment} fetch={getCompliments} style={{zIndex:2}}/>
        </View>
      </Pressable>
    );
//   }
}

export default CarouselItem
