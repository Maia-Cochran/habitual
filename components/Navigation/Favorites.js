import React, { useState } from "react";
import GreetingButton from "../GreetingButton";
import {
    StyleSheet,  
    View, 
    FlatList,
    Button
  } from 'react-native';


const Favorites = () => { 
const [favorites, setFavorites] = useState([])



    return (
        <View>

        </View>
    )
}


export default Favorites;

const styles = StyleSheet.create({
    viewContainer: {
      flex: 1,
      padding: 50,
      paddingHorizontal: 16,
      // backgroundColor: '#1e085a'
    },
    favoriteContainer: {
      flex: 5,
      padding: 16,
    }
  });