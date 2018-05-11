// Import libraries for making a Component
import React from 'react';
import { Text, View } from 'react-native';

// Make a component
const Header = () => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>Albums!</Text>
    </View>
  );
};

const styles = {
  textStyle: {
    fontSize: 20,
  },
  viewStyle: {
    backgroundColor: '#F8F8F8'
  }
};

// Make the component available to other parts of the app
export default Header;