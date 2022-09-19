import { StyleSheet, Text, View, Button, Modal, Dimensions, useWindowDimensions } from 'react-native';
import React, { useState } from 'react';
import Home from './components/Home';

import AppLoading from 'expo-app-loading';
import { useFonts, IndieFlower_400Regular } from '@expo-google-fonts/indie-flower';


import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import FavoritesCard from './components/CarouselCards/FavoritesCard'

const App = () => {
  // const [apiKey, setApiKey] = useState('')
  // const windowDimensions = Dimensions.get('window')
  const Stack = createNativeStackNavigator()

  const Home = ({ navigation }) => {
    return (
      <View>
        <Home
          navigation={navigation}
          dimensions={windowDimensions} />

      </View>
    )
  }

  let [fontsLoaded] = useFonts({
    IndieFlower_400Regular,
  });
  if(!fontsLoaded){
    return <AppLoading />;
} else{
  return (
  <NavigationContainer>
    <View style={styles.appContainer}>    
      {/* <ImageBackground   source={require("./assets/background-with-leaves.png")} resizeMode="cover"> */}
        <Stack.Navigator>
          <Stack.Screen 
            name="Home"
            component={Home}
            options={{title: 'Wecome'}}
          />
          <Stack.Screen 
            name="Favorites"
            component={FavoritesCard}
          />
        </Stack.Navigator>


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
    </View>
   

  </NavigationContainer>
  );
 }
}
export default App;

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: 'none',
    alignItems: 'center',
    fontFamily: 'IndieFlower_400Regular',
    // justifyContent: 'center',
  },
  image: {
    flex: 1,
    height: '100%',
    width: "100%",

  },
 
});

{/* <StatusBar style="auto" />  */}