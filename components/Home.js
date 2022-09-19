import { View, StyleSheet, TouchableHighlight, Image } from 'react-native'
import Header from './Header'
import GreetingButton from './GreetingButton'
import { useState, useEffect } from 'react';

const Home = ({ navigation }) =>{
   const [quote, setQuote] = useState('')  
    const fetchApiCall = () => {
        return fetch("http://localhost:3001/mantra")
            .then(response => response.json())
            .then(data => {
                setQuote(data)
            console.log('data: ', data);
            })
            .catch(err => {
            console.log(err);
            });
        }
        

        useEffect(() => {
            fetchApiCall();
        }, [])

        return (
          <View style={styles.appContainer}>
            <View style={styles.appContainer}>    
            <ImageBackground   source={require("../assets/background-with-leaves.png")} resizeMode="cover">
              <View style={styles.appContainer}> 
              <Header />
                <GreetingButton quote={quote.mantra} fetch={fetchApiCall} title="" onPress={() => navigation.navigate("GoodVibeModal")}/>
                <Home />
            //     <View>
            //       <CustomSlider data={data} />
            //     </View>
            //     <View style={styles.bottomNavContainer}>
            //       <BottomNavBar />      
            //     </View>
                  <BottomNavBar />      
                </View>
            </ImageBackground>
            </View>
          </View>
         
        )

    }

export default Home;

const styles = StyleSheet.create({
  appContainer: {
        flex: 1,
        backgroundColor: 'none',
        alignItems: 'center',
        fontFamily: 'IndieFlower_400Regular',
        justifyContent: 'center',
      },
    appContainer: {
        flex: 1,
        backgroundColor: 'none',
        alignItems: 'center',
        fontFamily: 'IndieFlower_400Regular',
        // justifyContent: 'center',
      },
      image: {
        flex: 1,
        height: '100%',
        width: "100%",
    
      },
      bottomNavContainer: {
        // alignItems: 'flex-end',
        marginTop: -80,
        // justifyContent: 'flex-end',
        // height: 180,
        width: "100%",
        // margin: 20,
      }
})



// const Home = ({ navigation }) =>{
//     const [quote, setQuote] = useState('')  
//      const fetchApiCall = () => {
//          return fetch("http://localhost:3001/mantra")
//              .then(response => response.json())
//              .then(data => {
//                  setQuote(data)
//              console.log('data: ', data);
//              })
//              .catch(err => {
//              console.log(err);
//              });
//          }
 
//          useEffect(() => {
//              fetchApiCall();
//          }, [])
 
//          return (
//              <View style={styles.homeContainer}>
//                  <Header />
//                  <GreetingButton quote={quote.mantra} fetch={fetchApiCall} title=""/>
//              </View>
//          )
 
//      }
 
//  export default Home;
 
//  const styles = StyleSheet.create({
//      homeContainer: {
//          alignItems: 'center',
//      },
//  })
 
 

