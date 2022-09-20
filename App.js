import { StyleSheet, Text, View, Button, Modal, Dimensions, useWindowDimensions } from 'react-native';
import React, { useState, useEffect } from 'react';
import Home from './components/Home';
// import AppLoading from 'expo-app-loading';
// import { useFonts, IndieFlower_400Regular } from '@expo-google-fonts/indie-flower';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import FavoritesCard from './components/CarouselCards/FavoritesCard'

const App = () => {
  // const [mantras, setMantras] = useState([])
  const [favs, setFavs] = useState([])
  const Stack = createNativeStackNavigator()
  const [quote, setQuote] = useState('')  
  const [modalVisible, setModalVisible] = useState('');
  const fetchApiCall = () => {
    console.log(`1--------------------`)
       fetch("http://localhost:3001/mantra")
          .then(response => response.json())
          .then(data => {
            setQuote(data)  
            setModalVisible(true)
          console.log(`quote, APP`, quote )
          console.log('data: ', data);   
          })
          .catch(err => {
          console.log(err);
          });
      }





  const addFavorite = (e) => {
    setFavs([...favs, quote])
    console.log(`hello how are you`)
    
  }


  const HomeScreen = ({ navigation, saveFavorite }) => {
    return (
      <View >
        {/* <Text>Home Screen</Text> */}
        <Home 
          favs={favs}
          quote={quote}
          // mantras={mantras}
          navigation={navigation}
          addFavorite={addFavorite}
          fetchApiCall={fetchApiCall}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          
        />
        {/* <Button
          title="Go to Favorites"
          onPress={() => navigation.navigate('FavoritesCard', {name: 'All my Favorites'})}
        /> */}
    </View>
    )
  }
  
  const renderFavorite = () => {
    console.log(123444555555, favs)

    return favs.map((mantra, index) =>{
      // let string = mantra
       return <Text key={index}>{mantra.mantra}</Text>
    })
  }

  const FavoritesScreen = ({navigation}) => {
    return (
      <View>
        <FavoritesCard 
          handleChange={addFavorite}
          favs={favs}
          quote={quote}
          navigation={navigation}
          renderFavorite={renderFavorite}
        />
      </View>
    )
  }


//   const renderFavorite = () => {
//     return favs.map((mantras, index) =>{
    
//        return <Text key={index}>mantras.mantra</Text>
//     })
//  }



//   let [fontsLoaded] = useFonts({
//     IndieFlower_400Regular,
//   });
//   if(!fontsLoaded){
//     return <AppLoading />;
// } else {

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