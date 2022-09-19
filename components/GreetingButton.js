import { View, Text, StyleSheet } from 'react-native';
import React, { useState, useEffect } from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts, IndieFlower_400Regular } from '@expo-google-fonts/indie-flower';
import GoodVibeModal from './Navigation/GoodVibeModal';

const GreetingButton = ({ addFavorite, fetchApiCall, quote }) => {
   

    let [fontsLoaded] = useFonts({
        IndieFlower_400Regular,
      });


      const renderFavorite = () => {
        return favs.map((mantra, index) =>{
           return <Text key={index}>mantra.mantra</Text>
        })
     }


      if(!fontsLoaded){
        return <AppLoading />;
    } else{
    return (
        <View style={styles.greetingContainer}>     
            <Text style={styles.textStyle}>Tell Me Something Good</Text>
        <GoodVibeModal quote={quote} fetch={fetchApiCall} title="" addFavorite={addFavorite}/>
        </View>
    )
  }
};

export default GreetingButton;

const styles = StyleSheet.create({
    greetingContainer: {
        justifyContent: 'center',
        backgroundColor: '#869684',
        height: 90,
        width: 350, 
        padding: 8,
        paddingBottom: 0,
        borderWidth: 1,
        borderColor: '#3A376F',
        borderRadius: 20,
        // borderColor: 'red',
        // borderWidth: 2,
        shadowColor: "#000",
        shadowOffset: {
            width: 6,
            height: 6
        },
        shadowOpacity: 0.8,
        shadowRadius: 10,
        elevation: 5,
    },
    textStyle: {
        // zIndex: 2,
        fontSize: 27,
        fontWeight:'bolder',
        justifyContent: 'center',
        textAlign: 'center',
        color: '#F5F5F5',
        // padding: 5,
        fontFamily: 'IndieFlower_400Regular',
    },
    // modalContainer: {
    //     height: 85,
    //     width: 350, 
    //     // zIndex:2,
    //     borderRadius: 18,
    //     borderColor: 'red',
    //     borderWidth: 2,
    // },

    highlight: {
        height: 85,
        width: 350, 
        borderRadius: 18,
        justifyContent: 'center', 
        alignItems: 'center'
    }
})





 // const getCompliments = async () => {
    //     const url = "https://complimentr.com/api" 
    //     setError('')
    
    //     try {
    //       const response = await fetch(url)
    //       const compliments = await response.json()
    //       setCompliments(compliments)
    //     } catch(error) {
    //       setError(error.message)
    //     }
    //   }
  
    //   useEffect(() => {
    //     getCompliments()
    //   }, [])


//         <View style={styles.textContainer}>  
//             <Text style={styles.textStyle}>Tell Me Something Good</Text>
//             <Image source={require("../../assets/zen.png")} style={styles.icons}/>
//             <Text style={styles.textStyle}>Press Here for Your Dose of Good Vibes</Text>
            
//                 <View>
// <GoodVibeModal compliment={compliments.compliment} fetch={getCompliments} style={{zIndex:2}}/>
//                 </View>
           
//         </View>



//     const [compliments, setCompliments] = useState([]);
//     const [error, setError] = useState('');
//     let [fontsLoaded] = useFonts({
//         IndieFlower_400Regular,
//       });

//       const getCompliments = async () => {
//         const url = "https://complimentr.com/api" 
//         setError('')
    
//         try {
//           const response = await fetch(url)
//           const compliments = await response.json()
//           setCompliments(compliments)
//         } catch(error) {
//           setError(error.message)
//         }
//       }
  
//       useEffect(() => {
//         getCompliments()
//       }, [])

// if(!fontsLoaded){
//     return <AppLoading />;
// } else{
    
//     return (
//        <View style={styles.greetingContainer}>     
//                 {/* <Text title="Positive reinforcement leads to good habits." style={styles.title}>{quote}</Text> */}
//                 <Text style={styles.textStyle}>Press here to see your daily routine checklist</Text>
//                 <GoodVibeModal compliment={compliments.compliment} fetch={getCompliments} style={{zIndex:2}}/>
//         </View>
//     )
//   }
// }






































// import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
// import AppLoading from 'expo-app-loading';
// import { useFonts, IndieFlower_400Regular } from '@expo-google-fonts/indie-flower';

// const GreetingButton = ({ quote, fetch}) => {
//     let [fontsLoaded] = useFonts({
//         IndieFlower_400Regular,
//       });

// if(!fontsLoaded){
//     return <AppLoading />;
// } else{
//     return (
//        <TouchableHighlight onPress={fetch} activeOpacity={0.5}
//        underlayColor="#B2CAAA" style={styles.highlight}>     
//             <View style={styles.greetingContainer} >     
//                 <Text title="Positive reinforcement leads to good habits." style={styles.title}>{quote}</Text>
//             </View>
//         </TouchableHighlight>
//     )
//   }
// }


// export default GreetingButton;

// const styles = StyleSheet.create({
//     greetingContainer: {
//         backgroundColor: '#869684',
//         // marginBottom: 500,
//         height: 85,
//         width: 350, 
//         padding: 10,
//         alignItems: 'center',
//         justifyContent: 'center',
//         borderWidth: 1,
//         borderColor: '#3A376F',
//         borderRadius: 18,
//         shadowColor: "#000",
//         shadowOffset: {
//             width: 6,
//             height: 6
//         },
//         shadowOpacity: 0.8,
//         shadowRadius: 10,
//         elevation: 5
//     },

//     title: {
//         // fontFamily: ??? needs to be imported
//         fontSize: 20,
//         paddingVertical: 2,
//         flexShrink: 1,
//         flexWrap: 'wrap',
//         color: '#F5F5F5',
//         textAlign: 'center',
//         fontFamily: 'IndieFlower_400Regular'
//     },

//     highlight: {
//         height: 85,
//         width: 350, 
//         borderRadius: 18,
//         justifyContent: 'center', 
//         alignItems: 'center'
//     }
// })
