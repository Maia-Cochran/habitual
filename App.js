// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import Home from './components/Home';
// import Modal from 'react-native-modal';
import Modal from './components/Modal';
import Carousel from './components/Carousel/Carousel';
import BottomNavBar from './components/BottomNavBar';

const App = () => {

  return (
    <View style={styles.appContainer}>
      <Home />
      <Modal />
      <Button title='ChecklistModalView'></Button>
      {/* <Carousel /> */}
      {/* <BottomNavBar /> */}
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#F8EDDF',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  image: {
    flex: 1,
  },
});

{/* <StatusBar style="auto" />  */}