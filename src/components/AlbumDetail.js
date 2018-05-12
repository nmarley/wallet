// Import
import React from 'react';
import { View, Text } from 'react-native';
import Card from './Card'
import CardSection from './CardSection'

// Create
const AlbumDetail = (props) => {
  return (
    <Card>
      <CardSection>
        <Text>{props.album.title}</Text>
      </CardSection>
    </Card>
  );
};

// export
export default AlbumDetail;
