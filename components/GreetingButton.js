import { View, Text, StyleSheet, Pressable } from 'react-native';
import React from 'react';
import GoodVibeModal from './Navigation/GoodVibeModal';
import AppLoading from 'expo-app-loading';
import { useFonts, IndieFlower_400Regular } from '@expo-google-fonts/indie-flower';



const GreetingButton = ({ addFavorite, fetchApiCall, quote, modalVisible,  toggleModal, getUrl }) => {
    let [fontsLoaded] = useFonts({
        IndieFlower_400Regular,
      });

      if(!fontsLoaded){
        return <AppLoading />;
    } else{
    return (
        <>
        <Pressable
            style={styles.buttonOpen}
            onPress = { () => {
                fetchApiCall()            
            }}
        >
        <View style={styles.greetingContainer}>     
            <Text style={styles.textStyle}>Tell me something good</Text>
        </View>
        </Pressable>
        <View>
           <GoodVibeModal 
                quote={quote} 
                fetch={fetchApiCall} 
                title="" 
                addFavorite={addFavorite} 
                toggleModal={toggleModal} 
                modalVisible={modalVisible}
                getUrl={getUrl} 
            />
            </View>
            </>
    )
  }
}

export default GreetingButton;

const styles = StyleSheet.create({
    greetingContainer: {
        justifyContent: 'center',
        backgroundColor: '#869684',
        height: 90,
        width: 350, 
        padding: 8,
        paddingBottom: 0,
        borderWidth: 1,
        borderColor: '#3A376F',
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 6,
            height: 6
        },
        shadowOpacity: 0.8,
        shadowRadius: 10,
        elevation: 5,
    },
    textStyle: {
        fontFamily: 'IndieFlower_400Regular',
        fontSize: 27,
        fontWeight:'bolder',
        justifyContent: 'center',
        textAlign: 'center',
        color: '#F5F5F5',
    },

})
