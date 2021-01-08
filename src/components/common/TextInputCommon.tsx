import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

interface ITextInputCommon {
  multiline?: boolean;
  numberOfLines?: number;
  style?: Object;
  placeholder?: string;
}

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
