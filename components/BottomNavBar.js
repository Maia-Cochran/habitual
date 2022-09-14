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
        flex: 1,
        backgroundColor: '#39376E',
        // marginBottom: 380,
        height: 50,
        width: '100%',
        // alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#39376E',
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
        fontSize: 40,
        color: '#F5F5F5',
        textAlign: 'center',
    }
})