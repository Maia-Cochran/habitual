import React from 'react';
import { Dimensions, View, Text, StyleSheet, Image } from 'react-native';
import { HomeStackNavigator, GoodVibeNavigator  } from './Navigation/StackNavigator';

// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';



const Tab = createMaterialBottomTabNavigator();

const { width: screenWidth } = Dimensions.get('window');



const BottomNavBar = () => {

    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen
            name="Home"
            component={HomeStackNavigator}
            options={{
                tabBarIcon: () => (<Image source={require("../assets/active-home-icon-8.png")} style={{width: 40, height: 40}} />)
            }}
             />
       <Tab.Screen 
            name="GoodVibeModal" 
            component={GoodVibeNavigator}
            options={{
                tabBarIcon: () => (<Image source={require("../assets/active-fav-icon-8.png")} style={{width: 50, height: 42}} />)
            }}
        />
    </Tab.Navigator>
        // <View style={styles.bottomNavBar}>
        //   {/* <Image source={require("../assets/calendar.png")} style={styles.icons}/> */}
        //    <Image source={require("../assets/active-home-icon-8.png")} style={styles.icons}/>
        //    {/* <Image source={require("../assets/NavBarIcons/checklistIcon.png")} style={styles.icons}/> */}
        //    <Image source={require("../assets/active-fav-icon-8.png")} style={styles.icons}/>
        //    <Image source={require("../assets/active-lotus-icon-8.png")} style={styles.icons}/>
        // </View>
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