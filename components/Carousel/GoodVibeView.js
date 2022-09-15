// import React from 'react';
// import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
// // import { useState } from 'react';

// const GoodVibeView = () => {
//     let [data, setData] = React.useState('')
//     let [source, setSource] = React.useState('')
//     const fetchApiCall = () => {
//      return fetch("http://localhost:3001/mantra")
//         .then(response => response.json())
//         .then(response => {
//           setQuote(response);
//           setSource(response)
//         })
//         .catch(err => {
//           console.log(err);
//         });
//     }
//     return (
//       <View style={styles.container}>
//         <Text style={styles.title}>Native API Calls</Text>
//         <Text>Example with fetch and Axios</Text>
//         <TouchableHighlight onPress={fetchApiCall}>
//           <View style={styles.container}>
//             <Text style={styles.title}>{fetchApiCall}</Text>
//           </View>
//         </TouchableHighlight>
//         <View>
//           <Text>{quote}</Text>
//           <Text>{source}</Text>
//         </View>
//         <StatusBar style="auto" />
//       </View>
//     );
//   }
//   const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: '#AAA',
//       alignItems: 'center',
//       justifyContent: 'center',
//       color: '#fff'
//     },
//     title: {
//       fontSize: 35,
//       color: '#fff'
//     }
//   });

// export default GoodVibeView;
