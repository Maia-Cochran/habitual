import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import CheckListModal from '../Navigation/CheckListModal';

const CheckListView = (props) => {
    return (
        <View style={styles.card}>
            <Text style={styles.textStyle}>Check List!</Text>
            <Text style={styles.textStyle}>📄</Text>
            <Text style={styles.textStyle}>This is the carousel card that user can click to see the modal</Text>
            <CheckListModal style={{zIndex:1}}/>
            <Button title='Cancel' onPress={props.onCancel} color="#f31282"/>
        </View>

    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    }
})

export default CheckListView