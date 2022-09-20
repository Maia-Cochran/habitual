import { View, StyleSheet, Image, Pressable } from 'react-native';
import { useState } from 'react';


const BottomNavBar = ({quote}) => {
    const [modalVisible, setModalVisible] = useState(false);


    return (
        <View style={styles.bottomNavBar}>
            <Pressable onPress={() => {
                console.log("Pressed!!")}}>
                <Image source={require("../assets/active-fav-icon-8.png")} style={styles.icons}/>
            </Pressable>
        </View>
    )
}

export default BottomNavBar;

const styles = StyleSheet.create({
    bottomNavBar: {
        flexDirection: 'row',
        backgroundColor: '#39376E',
        padding: 25,
        width: '100%',
        alignContent: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#39376E',
        shadowColor: "#000",
        shadowOffset: {
            width: 4,
            height: -1
        },
        shadowOpacity: 0.8,
        shadowRadius: 10,
    },
    icons: {
        color: '#F5F5F5',
        height: 48,
        width: 56,
    }
})