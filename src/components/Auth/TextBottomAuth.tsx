import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  GestureResponderEvent,
} from 'react-native';
import {blueColor} from '../../assets/styles';
import {TextBold, TextRegular} from '../common';

interface ITextBottomAuth {
  title?: string;
  titleGoto?: string;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
}
export const TextBottomAuth: React.FC<ITextBottomAuth> = ({
  title,
  titleGoto,
  onPress,
}) => {
  return (
    <View style={styles.goTo}>
      <TextRegular>{title}, </TextRegular>
      <TouchableOpacity onPress={onPress}>
        <TextBold styleText={styles.textGoto}>{titleGoto}</TextBold>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  textGoto: {
    color: blueColor,
  },
  goTo: {
    flexDirection: 'row',
  },
});
