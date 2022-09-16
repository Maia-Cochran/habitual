import React, { useState, useEffect } from "react";
import { Text, View, Modal, StyleSheet, Pressable, TouchableHighlight, DevSettings} from "react-native";
import AppLoading from 'expo-app-loading';
import { useFonts, IndieFlower_400Regular } from '@expo-google-fonts/indie-flower';
import { BlurView } from 'expo-blur';


const GoodVibeModal = ({compliment, fetch}) => {
    const [modalVisible, setModalVisible] = useState(false);
    let [fontsLoaded] = useFonts({
      IndieFlower_400Regular,
    });

   const handleBlur = () => {
     setModalVisible(true);
   }



    if(!fontsLoaded){
      return <AppLoading />;
  } else{
  return (
    <TouchableHighlight onPress={fetch}>
        <View style={styles.centeredView}>
        <Modal
            // fetch={fetchAllData}
            // compliments={compliments.compliment}
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <Pressable
                    style={[styles.buttonClose]}
                    onPress={() => {setModalVisible(!modalVisible), DevSettings.reload()}}
                    >
                <Text style={styles.textStyle}>✖️</Text>
                </Pressable>

                <Text style={styles.modalText}>{compliment}
                </Text>
            </View>
            </View>
        </Modal>
        <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={() => setModalVisible(true)}
        >
        </Pressable>
        <BlurView intensity={80} tint="light" style={styles.blurContainer}>
            {handleBlur}
        </BlurView>
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
        height: '65%',
        width: '95%',
        backgroundColor: "#2C3F54",
        borderRadius: 20,
        padding: 35,
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
    button: {
        marginTop: -150,
        height: 400,
        width: 300,
        borderRadius: 20,
        padding: 10,
        opacity: 0.0,
        zIndex: 1,
    },
    buttonOpen: {
        backgroundColor: "#869684",
        zIndex: 1
    },
    buttonClose: {
        justifyContent: "center",
        backgroundColor: "#869684",
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
        fontSize: 16,
        fontFamily: 'IndieFlower_400Regular',

    },
    modalText: {
        // flex: 1,
        // justifyContent: "center",
        // alignContent: "center",
        color: "white",
        marginTop: '30%',
        textAlign: "center",
        fontSize: 48,
        padding: 10,
        fontFamily: 'IndieFlower_400Regular',
    },
    blurContainer: {
        flex: 1,
        // padding: 20,
        // justifyContent: 'center',
      },
});

export default GoodVibeModal;