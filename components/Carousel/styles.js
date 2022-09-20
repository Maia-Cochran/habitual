import { Dimensions, StyleSheet, Platform } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {    // container for carousel
        marginTop: 40,
        marginBottom: 0,
        height: '65%',    
        paddingLeft: 0, 
        // borderWidth: 2,
        // borderColor: 'red',
        },
    title: {
        // fontFamily: 'IndieFlower_400Regular',
        padding: 30,
        fontSize: 28,
        textAlign: 'center',
        color: "white",
    },
    motto: {
        // fontFamily: 'IndieFlower_400Regular',
        padding: 30,
        paddingBottom: 60,
        fontSize: 24,
        textAlign: 'center',
        color: "white",
    },
    item: {
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: screenWidth - 20, //height will be 20 units less than screen width.
        height: '95%',
        borderRadius: 20,
        backgroundColor: '#39376E',
        //    borderWidth: 2,
        // borderColor: 'red',
        shadowColor: "#000000",
        shadowOffset: {
            width: 10,
            height: 10,
        },
        shadowOpacity: .7,
        shadowRadius: 8,
        elevation: 20,
      },
    imageContainer: {
        flex: 1,
        width: "100%",
        marginBottom: Platform.select({ ios: 0, android: 1 }), //handle rendering bug.
        marginBottom: 0,
        // borderWidth: 1,
        // borderColor: 'red'
      },
    image: {
        flex: 1,    
        ...StyleSheet.absoluteFillObject,
        resizeMode: 'center',
      },
    button: {
      borderWidth: 2,
      borderColor: 'red',
    },
    dotContainer: {
        backgroundColor: 'rgb(230,0,0)',
      },
    dotStyle: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: 'black',
      },
    inactiveDotStyle: {
        backgroundColor: 'rgb(255,230,230)',
      },
});
export default styles;