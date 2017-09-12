import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { MapView } from 'expo';
import { connect } from 'react-redux';

class MapScreen extends Component {
//   static navigationOptions = ({navigation}) => ({
//       title: 'Map',
//       tabBarIcon: ({tintColor}) => {
//         return <Icon name="my-location" size={30} color={tintColor} />
//       }
//   });

  state = {
    mapLoaded: false,
    region: {
      longitude: -122,
      latitude: 37,
      longitudeDelta: 0.04,
      latitudeDelta: 0.09
    }
  }
  componentDidMount() {
    this.setState({ mapLoaded: true });
  }

onRegionChangeComplete = (region) => {
  this.setState({ region });
}

// onButtonPress = () => {
//   this.props.fetchJobs(this.state.region, () => {
//       this.props.navigation.navigate('deck');
//   });
// }

  render() {
    if (!this.state.mapLoaded) {
      return (
        <View style={{ flex:1, justifyContent: 'center' }}>
          <ActivityIndicator size="large" />
        </View>
      )
    }
    return (
      <View style={{ flex: 1 }}>
        <MapView
          region = {this.state.region}
          style={{ flex: 1 }}
          /* onRegionChangeComplete={this.onRegionChangeComplete} */
        />
      </View>
    );
  }
}

const styles = {
  }


export default MapScreen;
