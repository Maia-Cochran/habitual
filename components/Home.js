import { View, StyleSheet, TouchableHighlight } from 'react-native'
import Header from './Header'
import GreetingButton from './GreetingButton'
import Carousel from './Carousel/Carousel'
import ModalTemplate from './ModalTemplate'
import BottomNavBar from './BottomNavBar'
import { Component } from 'react';

class Home extends Component  {
    constructor() {
        super();
        this.state = {
            text: ''
    }
}

fetchApiCall = () => {
    return fetch("http://localhost:3001/mantra")
        .then(response => response.json())
        .then(data => {
          console.log(data);
        })
        .catch(err => {
          console.log(err);
        });
    }

render(props){
    return (
        <View style={styles.homeContainer}>
            <Header />
            <TouchableHighlight onPress={mantras}>  
              <GreetingButton text={this.state.text}/>
            </TouchableHighlight>
            <ModalTemplate />
            {/* ^^^ unsure of this location, does it exist in  */}
            {/* Home component or within carousel? need to determine */}
            {/* flow of data/components */}
            <View style={styles.carouselContainer}>
               <Carousel />
            </View>
        </View>
    )
  }
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