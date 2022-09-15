// import React, { useState } from "react";
// import { Button, Text, View, Modal, StyleSheet, Pressable } from "react-native";
// import CheckListModal from "./Navigation/CheckListModal";
// import GoodVibeModal from "./Navigation/GoodVibeModal";
// import CalendarModal from "./Navigation/CalendarModal"
// // import GoodVibeCard from "./CarouselCards/GoodVibeCard";



// const ModalTemplate = () => {
//   const [modalVisible, setModalVisible] = useState(false);
//   return (
//     <View style={styles.centeredView}>
//       <Modal
//         animationType="fade"
//         transparent={true}
//         visible={modalVisible}
//         onRequestClose={() => {
//           Alert.alert("Modal has been closed.");
//           setModalVisible(!modalVisible);
//         }}>

//         <View style={styles.centeredView}>
//           <View style={styles.modalView}>
//             <Pressable
//               style={[styles.buttonClose]}
//               onPress={() => setModalVisible(!modalVisible)}>
//               <Text style={styles.textStyle}>✖️</Text>
//             </Pressable>
//               <Text style={styles.modalText}>{<GoodVibeModal />}</Text>
//               <Text style={styles.modalText}>{<CheckListModal />}</Text>
//               <Text style={styles.modalText}>{<CalendarModal />}</Text>
//           </View>
//         </View>
//       </Modal>

//       <Pressable
//         style={[styles.button, styles.buttonOpen]}
//         onPress={() => setModalVisible(true)}
//       >
//         <Text style={styles.textStyle}>Press Here for your dose of good vibes</Text>
//       </Pressable>
//     </View>
//   );
// };

//   export default ModalTemplate;
  
//   const styles = StyleSheet.create({
//     centeredView: {
//       flex: 1,
//       justifyContent: "center",
//       alignItems: "center",
//       // marginTop: 22
//     },
//     modalView: {
//       // margin: 10,
//       height: '93%',
//       width: '95%',
//       backgroundColor: "#2C3F54",
//       borderRadius: 20,
//       padding: 35,
//       alignItems: "center",
//       shadowColor: "#000",
//       shadowOffset: {
//         width: 6,
//         height: 6
//       },
//       shadowOpacity: 0.8,
//       shadowRadius: 10,
//       elevation: 5
//     },
//     button: {
//       marginTop: -150,
//       height: 400,
//       width: 300,
//       borderRadius: 20,
//       padding: 10,
//       // elevation: 2,
//       opacity: 0.0,
//       zIndex: 1,
//     },
//     // ^^ this styling will change with connection of modal to carousel
//     buttonOpen: {
//       backgroundColor: "#869684",
//       zIndex: 1
//     },
//     buttonClose: {
//       // alignItems: 'center',
//       // alignContent: "center",
//       justifyContent: "center",
//       backgroundColor: "#869684",
//       shadowColor: "#000",
//       width: 40,
//       height: 40,
//       borderRadius: 20,
//       shadowOffset: {
//         width: 6,
//         height: 6
//       },
//       shadowOpacity: 0.7,
//       shadowRadius: 4,
//       elevation: 5
//     },
//     textStyle: {
//       color: "white",
//       fontWeight: "bold",
//       textAlign: "center",
//       fontSize: 16
//     },
//     modalText: {
//       color: '#FFFFFF',
//       margin: 15,
//       textAlign: "center"
//     }
//   });


//   // styles.button, 