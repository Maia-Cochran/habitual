import { View, Text, StyleSheet, Image, Button, Pressable } from 'react-native';

const BottomNavBar = () => {

    return (
        <View style={styles.bottomNavBar}>
            <Pressable onPress={() => {console.log("Pressed!!")}}>
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
        // height: 105,
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
        // padding: 10,
        color: '#F5F5F5',
        // margin: 25,
        height: 48,
        width: 56,
    }
})