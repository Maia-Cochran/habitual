import React from "react";
import { Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Home";
import GoodVibeModal from "./GoodVibeModal";
import Splash from "../Splash";
import BottomNavBar from "../BottomNavBar";
// import Contact from "../screens/Contact";

const Stack = createStackNavigator();


const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "000000",
  },
  headerTintColor: "purple",
  headerBackTitle: "Back",
};

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Home" component={Home} options={{headerLeft: (props) => null }}  />
      
    </Stack.Navigator>
  );
}
const GoodVibeNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="GoodVibeModal" component={GoodVibeModal} />
    </Stack.Navigator>
  );
}
export default MainStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="BottomNavBar" component={BottomNavBar} />
          <Stack.Screen name="Splash" component={Splash} />
        </Stack.Navigator>
    );
}
export { HomeStackNavigator, GoodVibeNavigator  };