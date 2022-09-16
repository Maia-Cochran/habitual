import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';


const GreetingButton = ({ quote, fetch}) => {

    //make a data file with the mantras and affirmations from self-care center
    // import the data file here
    // create function to randomly pick a phrase from the data file and populate the greeting button
    // try to create the data file into an API


    return (
       <TouchableHighlight onPress={fetch}>     
            <View style={styles.greetingContainer} >     
                <Text title="Positive reinforcement leads to good habits." style={styles.title}>{quote}</Text>
            </View>
        </TouchableHighlight>
    )
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
        color: '#F5F5F5',
        textAlign: 'center',
    }
})
