// Import a library to help create a Component
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

// Create a Component
const App = () => {
  return (
    <Header />
  );
};

// Render it to the device
AppRegistry.registerComponent('wallet', () => App);


//
// import { AppRegistry } from 'react-native';
// import App from './App';
//
// AppRegistry.registerComponent('wallet', () => App);
