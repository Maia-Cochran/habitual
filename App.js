import {Text, View } from 'react-native';
import React, { useState} from 'react';
import Home from './components/Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import FavoritesCard from './components/CarouselCards/FavoritesCard'

const App = () => {
  
  const [favs, setFavs] = useState([])
  const Stack = createNativeStackNavigator()
  const [quote, setQuote] = useState('')  
  const [modalVisible, setModalVisible] = useState('');
  const fetchApiCall = () => {
    console.log(`1--------------------`)
       fetch("https://mantras-apiv2.herokuapp.com/mantra")
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
        <Home 
          favs={favs}
          quote={quote}
          navigation={navigation}
          addFavorite={addFavorite}
          fetchApiCall={fetchApiCall}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}    
        />
    </View>
    )
  }
  
  const renderFavorite = () => {
    console.log(123444555555, favs)

    return favs.map((mantra, index) =>{
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
            options={{title: "My List of Favorites"}}
          />
        </Stack.Navigator>
  </NavigationContainer>
  );
 }

export default App;

