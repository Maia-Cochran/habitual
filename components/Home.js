import { View, StyleSheet } from 'react-native'
import Header from './Header'
import GreetingButton from './GreetingButton'
import Carousel from './Carousel/Carousel'
import ModalTester from './Modal'
import BottomNavBar from './BottomNavBar'

const Home = () => {
    return (
        <View style={styles.homeContainer}>
            <Header />
            <GreetingButton />
            <Carousel />
            <ModalTester />
            <BottomNavBar />
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    homeContainer: {
        marginTop: 80,
        alignItems: 'center',
        // height: 100,
        // width: 100
    }
})