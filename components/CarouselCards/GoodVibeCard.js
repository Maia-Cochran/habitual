import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useState, useEffect } from 'react';
import GoodVibeModal from '../Navigation/GoodVibeModal';

const GoodVibeCard = () => {
    const [compliments, setCompliments] = useState([]);
    const [error, setError] = useState('');
    const getCompliments = async () => {
        const url = "https://complimentr.com/api" 
        setError('')
    
        try {
          const response = await fetch(url)
          const compliments = await response.json()
          setCompliments(compliments)
        } catch(error) {
          setError(error.message)
        }
      }
    
      useEffect(() => {
        getCompliments()
      }, [])

    return (
        <View style={styles.textContainer}>
            <Text style={styles.textStyle}>Tell Me Something Good</Text>
            <Text style={styles.textStyle}>🪷</Text>
            <Text style={styles.textStyle}>Press Here for Your Dose of Good Vibes</Text>
            <View style={styles.goodVibeModalContainer}>
                <View>
                    <GoodVibeModal compliment={compliments.compliment} fetch={getCompliments} style={{zIndex:2}}/>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 25,
        textAlign: 'center',
        color: 'white',
        padding: 10
    },
})

export default GoodVibeCard
