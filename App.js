import { StyleSheet, Text, View, Button, Modal, Dimensions, useWindowDimensions } from 'react-native';
import React, { useState } from 'react';
import Home from './components/Home';
import AppLoading from 'expo-app-loading';
import { useFonts, IndieFlower_400Regular } from '@expo-google-fonts/indie-flower';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import FavoritesCard from './components/CarouselCards/FavoritesCard'

const App = ( ) => {
  const [mantras, setMantras] = useState([])
  const [favs, setFavs] = useState([])
  const Stack = createNativeStackNavigator()
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


      //  when I click on that quote that is the fav, fav a quote the app will look to its
      // state called quote in App and will push it to the saved arr 
      //that's when the map(render )should work should be ok . and should always be
      //displayed in the fav arr 
      // when there is a qupet there ?? loading : function that returns the array of the mapped favorites
      // I  

      useEffect(() => {
          fetchApiCall();
      }, [])
  
  const addFavorite = (e) => {
    e.preventDefault();
     favs.push(quote) 
    // setMantras([...mantras, newMantra])
    // console.log(`mantras`, mantras)
    // setFavs([...favs, newFav])
    // console.log(`favs`, favs)
  }


  const HomeScreen = ({ navigation, saveFavorite }) => {
    return (
      <View >
        {/* <Text>Home Screen</Text> */}
        <Home 
          favs={favs}
          mantras={mantras}
          navigation={navigation}
          addFavorite={addFavorite}
          fetchApiCall={fetchApiCall}
        />
        {/* <Button
          title="Go to Favorites"
          onPress={() => navigation.navigate('FavoritesCard', {name: 'All my Favorites'})}
        /> */}
    </View>
    )
  }
  
  const renderFavorite = () => {
    return favs.map((mantra, index) =>{
       return <Text key={index}>mantra.mantra</Text>
    })
  }

  const FavoritesScreen = ({navigation}) => {
    return (
      <View>
        <FavoritesCard 
          handleChange={addFavorite}
          favs={favs}
          mantras={mantras}
          navigation={navigation}
        />
      </View>
    )
  }


//   const renderFavorite = () => {
//     return favs.map((mantras, index) =>{
    
//        return <Text key={index}>mantras.mantra</Text>
//     })
//  }



  let [fontsLoaded] = useFonts({
    IndieFlower_400Regular,
  });
  if(!fontsLoaded){
    return <AppLoading />;
} else {

  return (
  <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="Home"
            component={HomeScreen}
            options={{title: 'Welcome'}}
           
          />
          <Stack.Screen 
            name="FavoritesCard"
            component={FavoritesScreen}
          />
        </Stack.Navigator>
  </NavigationContainer>
  );
 }
}
export default App;

// const styles = StyleSheet.create({
//   appContainer: {
//     flex: 1,
//     backgroundColor: 'none',
//     alignItems: 'center',
//     fontFamily: 'IndieFlower_400Regular',
//     // justifyContent: 'center',
//   },
//   image: {
//     flex: 1,
//     height: '100%',
//     width: "100%",
//   },
// });

{/* <StatusBar style="auto" />  */}


 {/* <View style={styles.appContainer}>     */}
      {/* <ImageBackground   source={require("./assets/background-with-leaves.png")} resizeMode="cover"> */}
        {/* <View style={styles.appContainer}> 
          <Home />
          <View>
            <CustomSlider data={cardData} />
          </View>
          <View style={styles.bottomNavContainer}>
            <BottomNavBar />      
          </View>
        </View> */}
      {/* </ImageBackground> */}
    {/* </View> */}