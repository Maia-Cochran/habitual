import { Dimensions, View, Text, StyleSheet, Image } from 'react-native';
const { width: screenWidth } = Dimensions.get('window');
const BottomNavBar = () => {

    return (
        <View style={styles.bottomNavBar}>
          {/* <Image source={require("../assets/calendar.png")} style={styles.icons}/> */}
           <Image source={require("../assets/active-home-icon-8.png")} style={styles.icons}/>
           {/* <Image source={require("../assets/NavBarIcons/checklistIcon.png")} style={styles.icons}/> */}
           <Image source={require("../assets/active-fav-icon-8.png")} style={styles.icons}/>
           <Image source={require("../assets/active-lotus-icon-8.png")} style={styles.icons}/>
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
    icons: {
        color: '#F5F5F5',
        margin: 25,
        height: screenWidth/10,
        width: screenWidth/8,
        marginBottom: 20,
    }
})