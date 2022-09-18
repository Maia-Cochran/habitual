import React, { useState}  from 'react';
import { ParallaxImage } from 'react-native-snap-carousel';
import { Text, Pressable, SafeAreaView, Button } from 'react-native';
import styles from './styles';
import GoodVibeModal from '../Navigation/GoodVibeModal';
import CheckListModal from '../Navigation/CheckListModal'
import APICalls from '../../apiCalls';


const CarouselItem = ({item, index, quote, fetch}, parallaxProps) => {
  console.log('id: ', item.id)
    return (
        <Pressable onPress={() => {
            if(item.id === 1) {
              console.log(item.id)
                return (<GoodVibeModal />)
            } else if (item.id === 2) {
                return (<CheckListModal />)
            }
        }}
            >

        <SafeAreaView style={styles.item}>
          <Text style={styles.title}>{item.title}</Text>
          <ParallaxImage
            source={item.image} 
            containerStyle={styles.imageContainer}
            style={styles.image}
            {...parallaxProps} 
          />
          <Text style={styles.motto}>{item.motto}</Text>
            {item.button && 
            <Button 
              style={styles.button} 
              title='Press here to refresh'
              onPress={async () => {
                await fetch() 
                setModalVisible(true)}}
              ></Button>}

        </SafeAreaView>
      </Pressable>
    );
  }
// }

export default CarouselItem;


