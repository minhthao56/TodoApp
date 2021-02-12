import React from 'react';
import {StyleSheet, View} from 'react-native';
import {blueColor} from '../../assets/styles';
import {TextBold, TextRegular} from '../common';

export const TitleAuth: React.FC<ITitleAuth> = ({subTitle, title}) => {
  return (
    <View style={styles.title}>
      <TextBold styleText={styles.textWelcome}>{title},</TextBold>
      <TextRegular styleText={styles.textSub}>{subTitle}!</TextRegular>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    width: '100%',
    marginBottom: 12,
  },
  textWelcome: {
    fontSize: 38,
    color: blueColor,
  },
  textSub: {
    fontSize: 22,
    color: '#686868',
  },
});
