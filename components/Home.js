import { View, StyleSheet } from 'react-native'
import Header from './Header'
import GreetingButton from './GreetingButton'
import Carousel from './Carousel/Carousel'
import ModalTemplate from './ModalTemplate'
import BottomNavBar from './BottomNavBar'

const Home = () => {
    return (
        <View style={styles.homeContainer}>
            <Header />
            <GreetingButton />
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