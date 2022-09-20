import React, { useState} from "react";
import { Text, View, Modal, StyleSheet, Pressable, Image} from "react-native";
import AppLoading from 'expo-app-loading';
import { useFonts, IndieFlower_400Regular } from '@expo-google-fonts/indie-flower';
import { LinearGradient } from 'expo-linear-gradient';


const GoodVibeModal = ({quote, addFavorite, toggleModal, modalVisible, getUrl }) => {
    const [favorite, setFavorite] = useState(false)

    let [fontsLoaded] = useFonts({
      IndieFlower_400Regular,
    });


    const onRequestClose=(() => {
        Alert.alert("Modal has been closed.");
        toggleModal(!modalVisible);
      })

 
    if(!fontsLoaded){
      return <AppLoading />;
  } else {
   

  return (
        <Modal
            visible={modalVisible}
            animationType="fade"
            transparent={true}
            onRequestClose={onRequestClose}
            getUrl={getUrl}
         >   
            <View style={styles.centeredView}>
            
            <View style={styles.modalView}>
            <LinearGradient
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
                    onPress={() => {toggleModal(!modalVisible)}}
                    >
                <Text style={styles.textStyle}>✖️</Text>
                </Pressable>  
                <Text style={styles.modalText}>{quote.mantra}</Text> 
                <Pressable
                    title="favButton"
                    style={[styles.favButton]}
                    onPress={(e) => {
                        addFavorite(e)
                    }}
                    >
                    <Text style={styles.textStyle}>Press here to save</Text>
                    <Image source={require("../../assets/active-fav-icon-8.png")} style={styles.icons}/>
                    <Text style={styles.textStyle}> your favorite quote</Text>
                </Pressable>
                </LinearGradient>
             </View> 
          </View>
        </Modal>
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
        borderRadius: 20,
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
    },buttonClose: {
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
        fontSize: 20,
        fontFamily: 'IndieFlower_400Regular',

    },
    modalText: {
        color: "white",
        marginTop: '30%',
        textAlign: "center",
        fontSize: 30,
        fontFamily: 'IndieFlower_400Regular',
    },
    favButton: {
        padding: 40,
        alignItems: 'center',
    },
    icons: {
        height: 60,
        width: 70,
    },
     favBtn:{
        height: 5,
        width: 5
    }
});


export default GoodVibeModal;