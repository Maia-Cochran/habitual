import { StyleSheet, Text, View, Button, Modal, Dimensions, useWindowDimensions } from 'react-native';
import React, { useState } from 'react';
import Home from './components/Home';
import AppLoading from 'expo-app-loading';
import { useFonts, IndieFlower_400Regular } from '@expo-google-fonts/indie-flower';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import FavoritesCard from './components/CarouselCards/FavoritesCard'

const App = () => {
  const [mantras, setMantras] = useState([])
  const [favs, setFavs] = useState([])
  const Stack = createNativeStackNavigator()
  
  
  const handleChange = (newMantra, newFav) => {
    setMantras([...mantras, newMantra])
    setFavs([...favs, newFav])
  }

  const HomeScreen = ({ navigation }) => {
    return (
      <View >
        {/* <Text>Home Screen</Text> */}
        <Home 
          handleChange={handleChange}
          favs={favs}
          mantras={mantras}
          navigation={navigation}
        />
        {/* <Button
          title="Go to Favorites"
          onPress={() => navigation.navigate('FavoritesCard', {name: 'All my Favorites'})}
        /> */}
    </View>
    )
  }
  const FavoritesScreen = ({navigation}) => {
    return (
      <View>
        <FavoritesCard 
          handleChange={handleChange}
          favs={favs}
          mantras={mantras}
          navigation={navigation}
        />
      </View>
    )
  }

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