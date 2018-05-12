// Import
import React from 'react';
import { View, Text } from 'react-native';

// Create
const AlbumDetail = (props) => {
  return (
    <View>
      <Text>{props.album.title}</Text>
    </View>
  );
};

// export
export default AlbumDetail;
