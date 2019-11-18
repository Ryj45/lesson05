/**
 * Lesson 05 Activities
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const BOATS_DATA = [
  {
    name: 'Sea Ray 500 Sundancer',
    description:
      'Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away.',
    poster: require('./src/img/sea_ray.jpg'),
  },
  {
    name: 'Four Winns Horizon 180',
    description:
      'A sporty look and refined details truly et the Horizon 180 above all others.',
    poster: require('./src/img/four_winns.jpg'),
  },
];

const Getaboatapp = () => {
  let boatsArr = [];
  for (let i = 0; i < BOATS_DATA.length; i++) {
    let boat = BOATS_DATA[i];
    boatsArr.push(<Text key={boat.name}>{boat.name}</Text>);
    boatsArr.push(<Text key={boat.description}>{boat.description}</Text>);
    boatsArr.push(<Image source={boat.poster} />);
    console.log(boatsArr);
  }
  return (
    <ScrollView>
      <View>{boatsArr}</View>
    </ScrollView>
  );
};

export default Getaboatapp;
