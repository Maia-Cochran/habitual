import React from 'react';
import { ParallaxImage } from 'react-native-snap-carousel';
import { Text, Pressable, SafeAreaView } from 'react-native';
import styles from './styles';
import AppLoading from 'expo-app-loading';
import { useFonts, IndieFlower_400Regular } from '@expo-google-fonts/indie-flower';

const CarouselItem = ({item, index}, parallaxProps) => {
    
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
      </Pressable>
    );
//   }
}

export default CarouselItem
