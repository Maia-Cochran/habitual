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
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};
const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Home" component={Home} options={{headerLeft: (props) => null }}  />
      <Stack.Screen name="GoodVibeModal" component={GoodVibeModal} />
    </Stack.Navigator>
  );
}
// const ContactStackNavigator = () => {
//   return (
//     <Stack.Navigator screenOptions={screenOptionStyle}>
//       <Stack.Screen name="Contact" component={Contact} options={{ headerLeft: (props) => null }} />
//     </Stack.Navigator>
//   );
// }
export default MainStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="BottomNavBar" component={BottomNavBar} />
        </Stack.Navigator>
    );
}
export { HomeStackNavigator };