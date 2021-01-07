import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TextInputCommon} from '../common';

export const Content = () => {
  return (
    <View>
      <TextInputCommon style={styles.textInput} placeholder="Title" />
      <TextInputCommon
        style={styles.textarea}
        placeholder="Description"
        multiline={true}
        numberOfLines={4}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    fontSize: 32,
  },
  textarea: {
    fontSize: 16,
    textAlignVertical: 'top',
  },
});
