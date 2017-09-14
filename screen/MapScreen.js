import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { MapView, Constants, Location, Permissions } from 'expo';
import { connect } from 'react-redux';
import * as actions from '../actions';

class MapScreen extends Component {

  state = {
    mapLoaded: false,
    region: {
      longitude: this.props.location.coords.longitude,
      latitude: this.props.location.coords.latitude,
      longitudeDelta: 0.04,
      latitudeDelta: 0.09
    }
  }
  componentDidMount() {
    this.setState({ mapLoaded: true });
  }

// onRegionChangeComplete = (region) => {
//   this.setState({ region });
// }


  render() {
    if (!this.state.mapLoaded && !location) {
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

  function mapStateToProps({ location }) {
    return{ location: location.results };
}

export default connect(mapStateToProps, actions)(MapScreen);

