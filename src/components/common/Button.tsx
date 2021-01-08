import React from 'react';
import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {TextBlack} from './TextBlack';
import {TextRegular} from './TextRegular';

interface IButton {
  children: string;
  onPress: Function;
  styleButton?: Object;
  styleText?: Object;
}

export const Button: React.FC<IButton> = ({
  children,
  onPress,
  styleButton,
  styleText,
}) => {
  return (
    <TouchableOpacity
      onPress={(event: GestureResponderEvent) => onPress(event)}
      delayPressIn={300}
      delayPressOut={300}
      style={styles.container}>
      <TextRegular styleText={styles.text}>{children}</TextRegular>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3E3F45',
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
