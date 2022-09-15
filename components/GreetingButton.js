import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';


const GreetingButton = () => {
    
    //make a data file with the mantras and affirmations from self-care center
    // import the data file here
    // create function to randomly pick a phrase from the data file and populate the greeting button
    // try to create the data file into an API

    const fetchApiCall = () => {
      return fetch("http://localhost:3001/mantra")
          .then(response => response.json())
          .then(response => {
            console.log(response);
          })
          .catch(err => {
            console.log(err);
          });
      }

    return (
       <TouchableHighlight onPress={fetchApiCall}>     
            <View style={styles.greetingContainer}>
                <Text style={styles.title}> Happiness is the highest form of health. </Text>
            </View>
        </TouchableHighlight>
    )
}

export default GreetingButton;

const styles = StyleSheet.create({
    greetingContainer: {
        backgroundColor: '#869684',
        // marginBottom: 500,
        height: 60,
        width: 300, 
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#3A376F',
        borderRadius: 18,
        shadowColor: "#869684",
        shadowOffset: {
            width: 2,
            height: 4,
        },
        shadowOpacity: .8,
        shadowRadius: 5,
        elevation: 10,
    },

    title: {
        // fontFamily: ??? needs to be imported
        fontSize: 20,
        color: '#F5F5F5',
        textAlign: 'center',
    }
})