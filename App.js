// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './components/Home';
import Carousel from './components/Carousel/Carousel';
import BottomNavBar from './components/BottomNavBar';

const App = () => {
  return (
    <View style={styles.appContainer}>
      <Home />
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
});

{/* <StatusBar style="auto" />  */}