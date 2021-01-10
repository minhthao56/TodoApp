import React from 'react';
import {Image, StyleSheet} from 'react-native';

interface IAvatar {
  image: string;
  height?: number;
  width?: number;
}

export const Avatar: React.FC<IAvatar> = ({image, height, width}) => {
  return (
    <Image
      source={{uri: image}}
      style={{...styles.imageAvatar, width: width || 52, height: height || 52}}
    />
  );
};

const styles = StyleSheet.create({
  imageAvatar: {
    borderRadius: 100,
  },
});
