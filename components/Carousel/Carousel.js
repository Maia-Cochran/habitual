import React from 'react';
import { View } from 'react-native';
import data from './data';
import CustomSlider from './CustomSlider';


export default function Carousel() {

    return (
      <View>
        <CustomSlider data={data} />
      </View>
    );
  }