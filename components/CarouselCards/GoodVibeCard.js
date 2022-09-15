import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import ModalTemplate from '../ModalTemplate';

const GoodVibeCard = () => {
    return (
            <Pressable>
                <View style={styles.card}>
                    <Text style={styles.textStyle}>Tell Me Something Good</Text>
                    <Text style={styles.textStyle}>🪷</Text>
                    <Text style={styles.textStyle}>This is the carousel card that user can click to see the modal</Text>
                    <ModalTemplate style={{zIndex:1}}/>
                </View>
            </Pressable>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        // flex: 1,
        // alignItems: "center",
        // justifyContent: "center",
        // alignContent: "center",
        fontSize: 25,
        textAlign: 'center',
        color: 'white',
        // padding: 20
    },
    // card: {
    //     backgroundColor:'#3A376F',
    //     color: 'white',
    //     alignItems: 'center',
    //     borderRadius: 16,
    //     height: 400,
    //     width: '88%',
    //     padding: 40,
    //     // marginLeft: 25,
    //     // marginRight: 25, 
    // }
})

export default GoodVibeCard