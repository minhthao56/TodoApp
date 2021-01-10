import React from 'react';
import {
  GestureResponderEvent,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
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
      delayPressIn={200}
      delayPressOut={200}
      style={styles.container}>
      <TextRegular styleText={styles.text}>{children}</TextRegular>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4168F3',
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
