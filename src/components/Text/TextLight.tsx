import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface Props {
  styleText?: Object;
  children: string;
}
const TextLight: React.FC<Props> = ({styleText, children}) => {
  return (
    <View>
      <Text style={{...styleText, ...styles.text}}>{children}</Text>
    </View>
  );
};

export default TextLight;

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Mulish-Light',
  },
});
