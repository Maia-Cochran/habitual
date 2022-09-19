import React from 'react';
import { ParallaxImage } from 'react-native-snap-carousel';
import { Text, Pressable, SafeAreaView } from 'react-native';
import styles from './styles';
import GoodVibeModal from '../Navigation/GoodVibeModal';
import CheckListModal from '../Navigation/CheckListModal'


const CarouselItem = ({item, index, navigation}, parallaxProps) => {



    
    return (
        <Pressable onPress={() => navigation.navigate("GoodVibeModal")}
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
          {/* ({item.id} === id) ? `<GoodVibeModal${id}/>` */}
        </SafeAreaView>
        

{/* 
        render={({ match }) => { 
            if(match.params.animal === 'sharks') {
              return <Creatures name={match.params.animal} data={sharks} />
            } else if (match.params.animal === 'puppies') {
              return <Creatures name={match.params.animal} data={puppies} />
            } else if (match.params.animal === 'dolphins') {
              return <Creatures name={match.params.animal} data={dolphins} />
            } else if (match.params.animal === 'unicorns')
              return <Creatures name={match.params.animal} data={unicorns} />  */}

      </Pressable>
    );
//   }
}

export default CarouselItem
