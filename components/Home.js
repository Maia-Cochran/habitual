import { View, StyleSheet } from 'react-native'
import Header from './Header'
import GreetingButton from './GreetingButton'
import Carousel from './Carousel/Carousel'

const Home = () => {
    return (
        <View style={styles.homeContainer}>
            <Header />
            <GreetingButton />
            <Carousel />
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    homeContainer: {
        alignItems: 'center',
        // height: 100,
        // width: 100
    }
})