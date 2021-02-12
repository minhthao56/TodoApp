import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const TextBold: React.FC<IText> = ({styleText, children}) => {
  return (
    <View>
      <Text style={{...styleText, ...styles.text}}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Mulish-Bold',
  },
});
