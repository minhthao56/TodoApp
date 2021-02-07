import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TextRegular} from '../common';

export const TitleHome: React.FC<ITitleHome> = ({title}) => {
  return (
    <View style={styles.container}>
      <TextRegular styleText={styles.text}>{title}</TextRegular>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 8,
  },
  text: {
    fontSize: 22,
  },
});
