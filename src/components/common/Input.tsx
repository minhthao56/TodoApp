import React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  NativeSyntheticEvent,
  TextInputFocusEventData,
} from 'react-native';
import {TextRegular} from '.';
import {blueColor} from '../../assets/styles';

interface IInput {
  placeholder?: string;
  lable?: string;
  style?: Object;
  keyboardType?:
    | 'email-address'
    | 'numeric'
    | 'phone-pad'
    | 'ascii-capable'
    | 'numbers-and-punctuation'
    | 'url'
    | 'number-pad'
    | 'name-phone-pad'
    | 'decimal-pad'
    | 'twitter'
    | 'web-search'
    | 'visible-password';
  onFocus?:
    | ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void)
    | undefined;
  onBlur?:
    | ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void)
    | undefined;
  styleInput?: Object;
  onChangeText?: ((text: string) => void) | undefined;
  secureTextEntry?: boolean;
  messageError?: string;
}

export const Input: React.FC<IInput> = ({
  placeholder,
  lable,
  style,
  keyboardType,
  onFocus,
  onBlur,
  styleInput,
  onChangeText,
  secureTextEntry,
  messageError,
}) => {
  return (
    <View style={{...styles.container, ...style}}>
      <TextRegular styleText={styles.lable}>{lable}</TextRegular>
      <TextInput
        placeholder={placeholder}
        style={{...styles.input, ...styleInput}}
        placeholderTextColor="#565656"
        autoCorrect={false}
        selectionColor="#686868"
        keyboardType={keyboardType}
        onFocus={onFocus}
        onBlur={onBlur}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
      <TextRegular styleText={styles.textError}>{messageError}</TextRegular>
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
    color: blueColor,
    borderRadius: 3,
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
  textError: {
    color: '#d62828',
    marginLeft: 4,
    fontSize: 12,
  },
});
