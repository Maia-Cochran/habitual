import { View, Text, StyleSheet } from 'react-native';


const BottomNavBar = () => {


    return (
        <View style={styles.bottomNavBar}>
            <Text style={styles.title}> 🏠      📅      🪷      📄 </Text>
        </View>
    )
}

export default BottomNavBar;

const styles = StyleSheet.create({
    bottomNavBar: {
        backgroundColor: '#39376E',
        height: 105,
        width: '100%',
        alignContent: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#39376E',
        shadowColor: "#000",
        shadowOffset: {
            width: 4,
            height: -1
        },
        shadowOpacity: 0.8,
        shadowRadius: 10,
    },

    title: {
        // fontFamily: ??? needs to be imported
        fontSize: 45,
        color: '#F5F5F5',
        textAlign: 'center',
    }
})