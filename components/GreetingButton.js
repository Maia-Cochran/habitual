import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, IndieFlower_400Regular } from '@expo-google-fonts/indie-flower';

const GreetingButton = ({ quote, fetch}) => {
    let [fontsLoaded] = useFonts({
        IndieFlower_400Regular,
      });

if(!fontsLoaded){
    return <AppLoading />;
} else{
    return (
       <TouchableHighlight onPress={fetch} activeOpacity={0.5}
       underlayColor="#B2CAAA" style={styles.highlight}>     
            <View style={styles.greetingContainer} >     
                <Text title="Positive reinforcement leads to good habits." style={styles.title}>{quote}</Text>
            </View>
        </TouchableHighlight>
    )
  }
}


export default GreetingButton;

const styles = StyleSheet.create({
    greetingContainer: {
        backgroundColor: '#869684',
        // marginBottom: 500,
        height: 85,
        width: 350, 
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#3A376F',
        borderRadius: 18,
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
        // fontFamily: ??? needs to be imported
        fontSize: 20,
        paddingVertical: 2,
        flexShrink: 1,
        flexWrap: 'wrap',
        color: '#F5F5F5',
        textAlign: 'center',
        fontFamily: 'IndieFlower_400Regular'
    },

    highlight: {
        // margin:50, 
        // width: 200, 
        // height: 50, 
        borderRadius: 18,
        justifyContent: 'center', 
        alignItems: 'center'
    }
})
