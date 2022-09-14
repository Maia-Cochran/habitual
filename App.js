// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './components/Home';
import Carousel from './components/Carousel/Carousel';
import BottomNavBar from './components/BottomNavBar';

const App = () => {
  return (
    <View style={styles.appContainer}>
      <Home />
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
    backgroundColor: '#F8EDDF',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  bottomNavContainer: {
    alignItems: 'flexEnd',
    justifyContent: 'flexEnd',
    height: 60,
    width: "100%"
  }
});

{/* <StatusBar style="auto" />  */}