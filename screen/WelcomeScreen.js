import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Button, Icon } from 'react-native-elements'
import { connect } from 'react-redux';

import * as actions from '../actions';

class WelcomeScreen extends React.Component {

  onButtonPress = () => {
    this.props._getLocationAsync(() => {
        this.props.navigation.navigate('map');
    });
  }
  
  render() {
    const { navigate } = this.props.navigation;
    const resizeMode = 'center';
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>AGOYIN</Text>
        <Image
        style={{
          flex: 1,
          resizeMode,
        }}
        source={require('../EwaAgoyin.jpg')}/>
        <View style={styles.buttonConatiner}>
          <Button
            small
            title="Search"
            backgroundColor="red"
            icon={{ name: 'search' }}
            onPress={this.onButtonPress}
          />
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DCD7DC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 30,
    color: 'red',
    marginBottom: 15,
    paddingTop: 50
    },
    buttonConatiner: {
        position: 'absolute',
        bottom: 20,
        left: 0,
        right: 0,
        marginTop: 5
      }
});

export default WelcomeScreen;
