import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.title}>Habitual</Text>
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    headerContainer: {
        marginBottom: 30,
        marginTop: 300,
        marginTop: 60,
        marginBottom: 40,
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
        // ^^^ need to play with the shadow
        //thinking purple for the greeting and green for the header
    },

    title: {
        // fontFamily: ??? needs to be imported
        fontSize: 40,
        color: '#F5F5F5'
    }
})