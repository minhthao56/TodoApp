import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Content, DateTimePickerTask} from '../../components';

export const CreateTask = () => {
  return (
    <View style={styles.container}>
      <Content />
      <DateTimePickerTask />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
  },
});
