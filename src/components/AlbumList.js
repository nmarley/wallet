// Import libraries
import React, { Component } from 'react';
import { View, Text } from 'react-native';

// Create Component
class AlbumList extends Component {
  componentWillMount() {
      console.log('componentWillMount in AlbumList');
  }

  render() {
    return (
      <View>
        <Text>Album List!!!!!</Text>
      </View>
    );
  }
}

// export Component for re-use
export default AlbumList;