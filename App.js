import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './screen/WelcomeScreen';
import MapScreen from './screen/MapScreen';
import Locate from './screen/Locate';
import { TabNavigator, StackNavigator } from 'react-navigation';

const MainNavigator = StackNavigator({
  welcome: { screen: WelcomeScreen },
  map: { screen: MapScreen },
});

export default class App extends React.Component {
  render() {
    return (
      <MainNavigator />
    );
  }
}
