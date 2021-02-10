import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import {TextRegular} from '../common';

export const InputAuth: React.FC<IInputAuth> = ({
  placeholder,
  lable,
  style,
}) => {
  return (
    <View style={{...styles.container, ...style}}>
      <TextRegular styleText={styles.lable}>{lable}</TextRegular>
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        placeholderTextColor="#565656"
        autoCorrect={false}
        selectionColor="#686868"
      />
      <TextRegular>Eroro</TextRegular>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  lable: {
    position: 'absolute',
    top: -10,
    left: 10,
    backgroundColor: 'white',
    zIndex: 1,
    paddingHorizontal: 6,
  },
  input: {
    color: '#343434',
    borderWidth: 1,
    height: 46,
    fontSize: 16,
    fontFamily: 'Mulish-Regular',
    borderRadius: 8,
    borderColor: '#e6e6e6',
  },
});
