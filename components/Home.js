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
//    console.log(555, hasQuote)

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
    

    // const [compliments, setCompliments] = useState([]);
    // const fetchCompliment = () => {
    //     console.log(compliments)
    //     return fetch("https://complimentr.com/api")
    //         .then(response => response.json())
    //         .then(data => {
    //             setCompliments(data)
    //           console.log(data);
    //         })
    //         .catch(err => {
    //           console.log(err);
    //         });
    //     }




    return (
        <View style={styles.homeContainer}>
            <Header />
            {/* <TouchableHighlight onPress={mantras}>   */}
            <GreetingButton quote={quote.mantra} fetch={fetchApiCall} title=""/>
            {/* </TouchableHighlight> */}
            {/* <GoodVibeCard /> */}
            {/* ^^^ unsure of this location, does it exist in  */}
            {/* Home component or within carousel? need to determine */}
            {/* flow of data/components */}
            <View style={styles.carouselContainer}>
               <HabitualCarousel />
            </View>
        </View>
    )

}

export default Home;

const styles = StyleSheet.create({
    homeContainer: {
        // marginTop: 80,
        alignItems: 'center',
        // height: 100,
        // width: 100
    },
    carouselContainer:{
        height: '70%',
        width: '100%',
    }
   
})