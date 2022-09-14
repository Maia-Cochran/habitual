import React, { useState, StyleSheet } from "react";
import { Button, Text, View, Modal } from "react-native";

const ModalTemplate = () => {

  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>
    </View>
  );
};

  export default ModalTemplate;
  
  const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    }
  });

  
// import React from 'react';
// import { StyleSheet, Animated, Easing, ViewStyle, Keyboard } from 'react-native';


// interface Props {
//   backdropOpacity ? : number;
//   containerStyle ? : ViewStyle;
//   backdropStyle ? : ViewStyle;
// }

// interface State {
//   visible: boolean;
//   bOpacity: Animated.Value; // backdrop opacity
//   contentScale: Animated.AnimatedInterpolation; // child scale
//   child: React.ReactNode;
//   onClose: () => void;
//   unregisterOnClose: boolean;
//   kbListeners: {show: any; hide: any};
//   kbIsUp: boolean;
// }

// export default class Modal extends React.Component<Props, State> {
//   static instance: Modal = null;


//   constructor(props: Props) {
//     super(props);

//     const bOpacity = new Animated.Value(0);

//     this.state = {
//       visible: false,
//       bOpacity: bOpacity,
//       contentScale: bOpacity.interpolate({
//         inputRange: [0, this.props.backdropOpacity],
//         outputRange: [0, 1],
//       }),
//       child: <></>,
//       onClose: () => {},
//       unregisterOnClose: true,
//       kbListeners: {show: null, hide: null},
//       kbIsUp: false,
//     }

//     Modal.instance = this;
//   }


//   #setKbIsUp = (isUp: boolean) => {
//     this.setState(prevState => ({...prevState, kbIsUp: isUp}));
//   }


//   componentDidMount () {
//     this.setState(prevState => ({
//       ...prevState,
//       kbListeners: {
//         show: Keyboard.addListener('keyboardDidShow', () => this.#setKbIsUp(true)),
//         hide: Keyboard.addListener('keyboardDidHide', () => this.#setKbIsUp(false)),
//       }
//     }));
//   }

    
//   componentWillUnmount () {
//     this.state.kbListeners.show.remove();
//     this.state.kbListeners.hide.remove();
//   }
  

//   show = () => {
//     this.#toggleVisible(true);
//   }


//   hide = () => {
//     this.#toggleVisible(false);
//   }


//   #toggleVisible = (doShow=true) => {
//     if (doShow) this.#setVisible(true);

//     const toValue = doShow ? this.props.backdropOpacity : 0;
//     const duration = 200;
//     const easing = doShow ? Easing.out(Easing.exp) : Easing.in(Easing.quad);
    
//     Animated.timing(this.state.bOpacity, {
//       toValue: toValue,
//       duration: duration,
//       useNativeDriver: true,
//       easing: easing,
//     })
//     .start(() => {
//       if (doShow) return 

//       this.#setVisible(false);
//       this.state.onClose();
//       this.state.unregisterOnClose && this.unregisterChild();
//     });
//   }


//   #setVisible = (visible: boolean) => {
//     this.setState(prevState => ({...prevState, visible: visible}));
//   }


//   #backdropDismiss = () => {
//     if (!this.state.kbIsUp) this.hide(); // Only dismiss backdrop on touch if keyboard is down
//     else Keyboard.dismiss();
//   }


//   registerChild = (
//     child: React.ReactNode, 
//     onClose: () => void = ()=>{}, 
//     unregisterOnClose: boolean = true,
//   ) => {
//     this.setState(prevState => ({
//       ...prevState, 
//       child: child,
//       onClose: onClose,
//       unregisterOnClose: unregisterOnClose,
//     }));
//   }


//   unregisterChild = () => {
//     this.setState(prevState => ({
//       ...prevState, 
//       child: <></>,
//       onClose: ()=>{},
//       unregisterOnClose: true,
//     }));
//   }

  
//   render () {
//     if (!this.state.visible) return <></>;

//     return (
//       <>
//         {/* MODAL BACKDROP */}
//         <Animated.View
//           style={[
//             styles.backdrop, this.props.backdropStyle,
//             { opacity: this.state.bOpacity }
//           ]}
//           onTouchEnd={() => this.#backdropDismiss()}
//         />

//         {/* MODAL CONTAINER */}
//         <Animated.View
//           pointerEvents='box-none'
//           style={[
//             styles.container, this.props.containerStyle,
//             { transform: [{ scale: this.state.contentScale }] },
//           ]}
//         >
//           { this.state.child }
//         </Animated.View>
//       </>
//     );
//   }
// }


