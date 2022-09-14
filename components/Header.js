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
        marginBottom: 40,
        backgroundColor: '#3A376F',
        height: 80,
        width: 300, 
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#3A376F',
        borderRadius: 23,
        shadowColor: "#869684",
        shadowOffset: {
            width: 2,
            height: 4,
        },
        shadowOpacity: .8,
        shadowRadius: 5,
        elevation: 10,
        // ^^^ need to play with the shadow
        //thinking purple for the greeting and green for the header
    },

    title: {
        // fontFamily: ??? needs to be imported
        fontSize: 40,
        color: '#F5F5F5'
    }
})