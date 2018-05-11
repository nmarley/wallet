// Import a library to help create a Component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Create a Component
const App = () => {
  return (
    <View>
      <Header headerText={'Albums'} />
      <AlbumList />
    </View>
  );
};

// Render it to the device
AppRegistry.registerComponent('wallet', () => App);


//
// import { AppRegistry } from 'react-native';
// import App from './App';
//
// AppRegistry.registerComponent('wallet', () => App);
