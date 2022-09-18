import React, { useState, useEffect } from "react";
import { Text, View, Modal, StyleSheet, Pressable, TouchableHighlight } from "react-native";
import AppLoading from 'expo-app-loading';
import { useFonts, IndieFlower_400Regular } from '@expo-google-fonts/indie-flower';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';

const GoodVibeModal = ({compliment, fetch}, props) => {

    const [modalVisible, setModalVisible] = useState(false);
    let [fontsLoaded] = useFonts({
      IndieFlower_400Regular,
    });

    if(!fontsLoaded){
      return <AppLoading />;
  } else{
  return (
    <TouchableHighlight onPress={fetch}>
    
        <View style={styles.centeredView}>
                
        <Modal
            id={props.id}
        // visible={props.visible}
            // fetch={fetchAllData}
            // compliments={compliments.compliment}
            animationType="fade"
            transparent={true}
            onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
            }}>
                
          
            <View style={styles.centeredView}>
            
            <View style={styles.modalView}>
            <LinearGradient
            // Background Linear Gradient
            colors={[
              'rgba(102, 124, 148, 1)',
              'rgba(117, 135, 157, 1)',
              'rgba(158, 154, 182, 1)',
              'rgba(185, 170, 195, 1)',
              'rgba(197, 148, 142, 1)',
              'rgba(178, 131, 122, 1)', 
              ]}
            style={styles.gradient}>

                <Pressable
                    style={[styles.buttonClose]}
                    onPress={() => {setModalVisible(!modalVisible)}}
                    >
                <Text style={styles.textStyle}>✖️</Text>
                </Pressable>
                <Text style={styles.modalText}>{compliment}
                </Text>
                </LinearGradient>
            </View>
           
            </View>
          
        </Modal>
     
        <Pressable
            style={styles.buttonOpen}
            onPress = {async () => {
                await fetch() 
                setModalVisible(true)}}
        >
             <BlurView intensity={80} tint="light" style={styles.blurContainer}>
                <View style={styles.centeredView}></View>
                </BlurView>
        </Pressable>
        </View>
    </TouchableHighlight>
  );
 };
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        
    },
    modalView: {
        height: '68%',
        width: '85%',
        backgroundColor: "#2C3F54",
         // backgroundColor: "#2C3F54",
        borderRadius: 20,
        // padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 6,
            height: 6
        },
        shadowOpacity: 0.8,
        shadowRadius: 10,
        elevation: 5
    },
    gradient:{
        height: '100%',
        width: '100%%',
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 6,
            height: 6
        },
        shadowOpacity: 0.8,
        shadowRadius: 10,
        elevation: 5,
        padding: 10,
    },
    buttonOpen: {
        backgroundColor: "#869684",
        height: 90,
        width: 350,
        borderRadius: 20,
        marginTop: -66,
        // padding: 10,
        opacity: 0.0,
        // borderColor: 'blue',
        // borderWidth: 2,
    },
    buttonClose: {
        justifyContent: "center",
        backgroundColor: "#869684",
        alignItems: "center",
        shadowColor: "#000",
        width: 40,
        height: 40,
        borderRadius: 20,
        shadowOffset: {
            width: 6,
            height: 6
        },
        shadowOpacity: 0.7,
        shadowRadius: 4,
        elevation: 5
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 12,
        fontFamily: 'IndieFlower_400Regular',

    },
    modalText: {
        // flex: 1,
        // justifyContent: "center",
        // alignContent: "center",
        color: "white",
        marginTop: '30%',
        textAlign: "center",
        fontSize: 30,
        // padding: 10,
        fontFamily: 'IndieFlower_400Regular',
    }
});

export default GoodVibeModal;