import React from 'react';
import { ParallaxImage } from 'react-native-snap-carousel';
import { View, Text, Pressable, SafeAreaView } from 'react-native';
// import styles from './styles';
import GoodVibeView from './GoodVibeView';
// import GoodVibeModal from '../Navigation/GoodVibeModal';
import { Dimensions, StyleSheet, Platform } from 'react-native';

function CarouselItem({ item, index }, parallaxProps) {
  return (
    <Pressable style={[styles.container, {borderColor: 'red'}, {borderWidth: 2}]} onPress={() => alert('Image description:' + item.description)}> 
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <GoodVibeView style={styles.container}/>
        </View>
      </SafeAreaView>
    </Pressable>
  );
}



const { width: screenWidth } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: { //container for carousel
    // marginTop: 100,
    paddingTop: 30,
    paddingBottom: 0,
    marginBottom: 0,
    borderWidth: 2,
    borderColor: 'red'
  },
  title: {
    fontSize: 20,
  },
  item: {
    width: '100%',
    height: screenWidth - 20, //height will be 20 units less than screen width.
    shadowColor: "#000000",
    shadowOffset: {
        width: 6,
        height: 6,
    },
    shadowOpacity: .7,
    shadowRadius: 8,
    elevation: 20,
  },
  imageContainer: {
    flex: 1,
    borderRadius: 5,
    backgroundColor: '#39376E',
    marginBottom: Platform.select({ ios: 0, android: 1 }), //handle rendering bug.
    marginBottom: 0,
    borderWidth: 1,
    borderColor: 'red'
  },
  // image: {
  //   ...StyleSheet.absoluteFillObject,
  //   resizeMode: 'contain',
  // },
  dotContainer: {
    backgroundColor: 'rgb(230,0,0)',
  },
  dotStyle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'black',
  },
  inactiveDotStyle: {
    backgroundColor: 'rgb(255,230,230)',
  },
});

export default CarouselItem;