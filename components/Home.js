import { View, StyleSheet, TouchableHighlight, Image } from 'react-native'
import Header from './Header'
import GreetingButton from './GreetingButton'
import HabitualCarousel from './Carousel/Carousel'
import ModalTemplate from './ModalTemplate'
import BottomNavBar from './BottomNavBar'
import { useState, useEffect } from 'react';


import GoodVibeModal from './Navigation/GoodVibeModal'

import GoodVibeCard from './CarouselCards/GoodVibeCard'


const Home = () =>{
   const [quote, setQuote] = useState('')  


const fetchApiCall = () => {
    return fetch("http://localhost:3001/mantra")
        .then(response => response.json())
        .then(data => {
            setQuote(data)
          console.log('data: ', data);
        })
        .catch(err => {
          console.log(err);
        });
    }

    useEffect(() => {
        fetchApiCall();
      }, [])


    return (
        <View style={styles.homeContainer}>
            <Header />
            <GreetingButton quote={quote.mantra} fetch={fetchApiCall} title=""/>
            <View style={styles.carouselContainer}>
               <HabitualCarousel />
            </View>
        </View>
    )

}

export default Home;

const styles = StyleSheet.create({
    homeContainer: {
        alignItems: 'center',
    },
    carouselContainer:{
        height: '70%',
        width: '100%',
    }
   
})