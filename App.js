// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Modal, ImageBackground } from 'react-native';
import Home from './components/Home';
// import Modal from 'react-native-modal';
// import ModalTemplate from '../components/ModalTemplate';
import Carousel from './components/Carousel/Carousel';
import BottomNavBar from './components/BottomNavBar';
import AppLoading from 'expo-app-loading';
import { useFonts, IndieFlower_400Regular } from '@expo-google-fonts/indie-flower';


const App = () => {
  let [fontsLoaded] = useFonts({
    IndieFlower_400Regular,
  });



  if(!fontsLoaded){
    return <AppLoading />;
} else{
  return (
  
    <View style={styles.appContainer}>    
    <ImageBackground   source={require("./assets/background-with-leaves.png")} resizeMode="cover">
    <View style={styles.appContainer}> 
    {/* <Image style={{zIndex: 2}} source={require("./assets/background-with-leaves.png")}/> */}
      <Home />
     
      {/* <ModalTester /> */}
      {/* <Button title='ChecklistModalView'></Button> */}
      {/* <Carousel /> */}
      {/* <BottomNavBar /> */}
      
 
    
      <View style={styles.bottomNavContainer}>
         <BottomNavBar />      
      </View>
      </View>
      </ImageBackground>
    </View>
   
   
  );
 }
}
export default App;

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: 'none',
    alignItems: 'center',
    fontFamily: 'IndieFlower_400Regular',
    // justifyContent: 'center',
  },
  image: {
    flex: 1,
    height: '100%',
    width: "100%",

  },
  bottomNavContainer: {
    // alignItems: 'flex-end',
    marginTop: -90,
    // justifyContent: 'flex-end',
    // height: 180,
    width: "100%",
    margin: 20,
  }
});

{/* <StatusBar style="auto" />  */}