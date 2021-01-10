import React from 'react';
import {
  GestureResponderEvent,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {blueColor} from '../../assets/styles';
import {TextRegular} from './TextRegular';

interface IButton {
  children: string;
  onPress: Function;
  styleButton?: Object;
}

export const Button: React.FC<IButton> = ({children, onPress, styleButton}) => {
  return (
    <TouchableOpacity
      onPress={(event: GestureResponderEvent) => onPress(event)}
      delayPressIn={200}
      delayPressOut={200}
      style={{...styles.container, ...styleButton}}>
      <TextRegular styleText={styles.text}>{children}</TextRegular>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: blueColor,
    width: 92,
    height: 34,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 16,
  },
});
