import React  from 'react';
import { ParallaxImage } from 'react-native-snap-carousel';
import { Text, SafeAreaView} from 'react-native';
import styles from './styles';



const CarouselItem = ({item}, parallaxProps) => {
  console.log('id: ', item.id)
    return (

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
    );
  }


export default CarouselItem;


