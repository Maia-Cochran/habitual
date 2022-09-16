import React, { useState, useEffect } from "react";
import { Text, View, Modal, StyleSheet, Pressable, TouchableHighlight} from "react-native";



const GoodVibeModal = ({compliment, fetch}) => {
    const [modalVisible, setModalVisible] = useState(false);
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
                onPress={() => setModalVisible(!modalVisible)
                }>
                    
                <Text style={styles.textStyle}>✖️</Text>
                </Pressable>
                <Text style={styles.textStyle}>{compliment}
                <Text style={styles.textStyle}>Tell Me Something Good</Text>
                    <Text style={styles.textStyle}>🪷</Text>
                    <Text style={styles.textStyle}>Press Here for your dose of good vibes</Text>
                </Text>
            </View>
            </View>
        </Modal>
        <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={() => setModalVisible(true)}
        >
            {/* <View style={styles.card}> */}
                    
               {/* </View> */}
        </Pressable>
        </View>
    </TouchableHighlight>
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