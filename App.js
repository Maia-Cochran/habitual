// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Modal } from 'react-native';
import Home from './components/Home';
// import Modal from 'react-native-modal';
// import ModalTemplate from '../components/ModalTemplate';
import Carousel from './components/Carousel/Carousel';
import BottomNavBar from './components/BottomNavBar';

const App = () => {

  return (
    <View style={styles.appContainer}>
      <Home />
      {/* <ModalTester /> */}
      {/* <Button title='ChecklistModalView'></Button> */}
      {/* <Carousel /> */}
      {/* <BottomNavBar /> */}
      <View style={styles.bottomNavContainer}>
         <BottomNavBar />   
      </View>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: 'none',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  image: {
    flex: 1,
  },
  bottomNavContainer: {
    // alignItems: 'flex-end',
    marginTop: -90,
    // justifyContent: 'flex-end',
    // height: 180,
    width: "100%"
  }
});

{/* <StatusBar style="auto" />  */}