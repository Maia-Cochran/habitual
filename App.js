// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './components/Home';

const App = () => {
  return (
    <View style={styles.appContainer}>
      <Home />
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#F8EDDF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

{/* <StatusBar style="auto" />  */}