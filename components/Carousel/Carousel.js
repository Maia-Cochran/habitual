import React from 'react';
import { View } from 'react-native';
import data from './data';
import CustomSlider from './CustomSlider';
import GoodVibeModal from '../Navigation/GoodVibeModal';


export default function Carousel() {

    return (
      <View>
        <CustomSlider goodVibe={<GoodVibeModal />} />
      </View>
    );
  }