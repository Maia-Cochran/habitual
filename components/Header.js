import { View, Text, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, IndieFlower_400Regular } from '@expo-google-fonts/indie-flower';


const Header = () => {
    let [fontsLoaded] = useFonts({
        IndieFlower_400Regular,
      });

      if(!fontsLoaded){
        return <AppLoading />;
    } else{
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.title} title="">Habitual</Text>
        </View>
    )
  }
}
export default Header;

const styles = StyleSheet.create({
    headerContainer: {
        marginBottom: 15,
        marginTop: 15,
        backgroundColor: '#3A376F',
        height: 80,
        width: 300, 
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#3A376F',
        borderRadius: 23,
        shadowColor: "#000",
      shadowOffset: {
        width: 6,
        height: 6
      },
      shadowOpacity: 0.8,
      shadowRadius: 10,
      elevation: 5

    },

    title: {
        fontSize: 40,
        color: '#F5F5F5',
        fontFamily: 'IndieFlower_400Regular'
    }
})