import React, { useState, useEffect } from "react";
import { Text, View, Modal, StyleSheet, Pressable } from "react-native";



const GoodVibeModal = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [compliments, setCompliments] = useState([]);
    const [error, setError] = useState('');
    // const getCompliments = async () => {
    //     const url = "https://complimentr.com/api" 
    //     setError('')
    
    //     try {
    //       const response = await fetch(url)
    //       const compliments = await response.json()
    //       setCompliments(compliments)
    //     } catch(error) {
    //       setError(error.message)
    //     }
    //   }
    
    //   useEffect(() => {
    //     getCompliments()
    //   }, [])

    const fetchApiCall = () => {
        console.log(compliments)
        return fetch("https://complimentr.com/api")
            .then(response => response.json())
            .then(data => {
                setCompliments(data)
              console.log(data);
            })
            .catch(err => {
              console.log(err);
            });
        }

  return (
    <View style={styles.centeredView}>
      <Modal
        fetch={fetchApiCall}
        compliments={compliments.compliment}
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
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>✖️</Text>
            </Pressable>
              <Text style={styles.textStyle}>Random compliment from API goes here</Text>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
      </Pressable>
    </View>
  );
};


const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        
    },
    modalView: {
        height: '93%',
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
        fontSize: 16
    },
    modalText: {
        color: '#FFFFFF',
        margin: 15,
        textAlign: "center"
    }
});

export default GoodVibeModal;