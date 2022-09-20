import React from 'react'
import { View, StyleSheet, ImageBackground, Button } from 'react-native'
import Header from './Header'
import GreetingButton from './GreetingButton'
import CustomSlider from './Carousel/CustomSlider';
import BottomNavBar from './BottomNavBar';
import cardData from '../utilities/data';
import AppLoading from 'expo-app-loading';
import { useFonts, IndieFlower_400Regular } from '@expo-google-fonts/indie-flower';

const Home = ({navigation, addFavorite, fetchApiCall, quote, getUrl, modalVisible, setModalVisible}) =>{
    
    let [fontsLoaded] = useFonts({
        IndieFlower_400Regular,
      });

      if(!fontsLoaded){
        return <AppLoading />;
    } else{


    return (
        <View style={styles.homeContainer}>
            
            <ImageBackground  style={styles.imageContainer} source={require("../assets/background-with-leaves.png")} resizeMode="cover">
                <Header />
           
                <GreetingButton 
                    addFavorite={addFavorite} 
                    quote={quote} 
                    toggleModal={setModalVisible} 
                    modalVisible={modalVisible} 
                    getUrl={getUrl} 
                    fetchApiCall={fetchApiCall}
                    />

                <View>
                    <CustomSlider data={cardData} />
                </View>
                <View style={styles.bottomNavContainer}>
                        
                <View style={styles.buttonContainer}>
                <Button
                    title="Go to Favorites"
                    onPress={() => navigation.navigate('FavoritesCard', {name: 'All my Favorites'})}/>
                    <BottomNavBar/>    
                </View>

                </View>
            </ImageBackground>
        </View>
    )
  }
}

export default Home;
const styles = StyleSheet.create({
    homeContainer: {
        alignContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        height: '100%',
        width: '100%',
        alignItems: 'center',
    
    },
    bottomNavContainer: {
        marginTop: -140,
        width: "100%",
      },
    buttonContainer: {
        backgroundColor: '#39376E',
        margin: 0,
     
    },
    textStyle: {
        fontFamily: 'IndieFlower_400Regular',
        textColor: 'white',
    }
})