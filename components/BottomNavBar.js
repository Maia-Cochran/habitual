import { View, Text, StyleSheet, Image } from 'react-native';


const BottomNavBar = () => {


    return (
        <View style={styles.bottomNavBar}>
          <Image source={require("../assets/calendar.png")} style={styles.icons}/>
           <Image source={require("../assets/checkList.png")} style={styles.icons}/>
           <Image source={require("../assets/home.png")} style={styles.icons}/>
           <Image source={require("../assets/zen.png")} style={styles.icons}/>
        </View>
    )
}

export default BottomNavBar;

const styles = StyleSheet.create({
    bottomNavBar: {
        flexDirection: 'row',
        backgroundColor: '#39376E',
        height: 105,
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

    // title: {
    //     fontSize: 45,
    //     color: '#F5F5F5',
    //     textAlign: 'center',
    // },
    icons: {
        color: '#F5F5F5',
        margin: 25,
        // justifyContent: 'spaceEvenly',
    }
})


//   {/* <Text style={styles.title}> 🏠      📅      🪷      📄 </Text> */}