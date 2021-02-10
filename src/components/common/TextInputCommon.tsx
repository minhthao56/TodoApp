import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

export const TextInputCommon: React.FC<ITextInputCommon> = ({
  multiline,
  numberOfLines,
  style,
  placeholder,
}) => {
  return (
    <TextInput
      style={{...styles.textInput, ...style}}
      placeholder={placeholder}
      placeholderTextColor="#565656"
      multiline={multiline}
      numberOfLines={numberOfLines}
      autoCorrect={false}
      selectionColor="#686868"
    />
  );
};

const styles = StyleSheet.create({
  textInput: {
    fontFamily: 'Mulish-Regular',
  },
});
