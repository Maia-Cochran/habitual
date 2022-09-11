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
        marginBottom: 500,
        backgroundColor: '#3A376F',
        height: 80,
        width: 300, 
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
            borderColor: '#3A376F',
            borderRadius: 23,
    },

    title: {
        // fontFamily: ??? needs to be imported
        fontSize: 40,
        color: '#F5F5F5'
    }
})