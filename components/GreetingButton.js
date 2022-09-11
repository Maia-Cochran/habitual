import { View, Text, StyleSheet } from 'react-native';

const GreetingButton = () => {
    return (
        <View style={styles.greetingContainer}>
            <Text style={styles.title}> Happiness is the highest form of health. </Text>
        </View>
    )
}

export default GreetingButton;

const styles = StyleSheet.create({
    greetingContainer: {
        backgroundColor: '#869684',
        height: 60,
        width: 300, 
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
            borderColor: '#3A376F',
            borderRadius: 18,
    },

    title: {
        // fontFamily: ??? needs to be imported
        fontSize: 20,
        color: '#F5F5F5',
        textAlign: 'center',
    }
})