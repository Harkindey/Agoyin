import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './src/WelcomeScreen';
import MapScreen from './src/MapScreen';
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
