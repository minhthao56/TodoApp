import React from 'react';
import {StyleSheet, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

import {blueColor, boxShadown} from '../../assets/styles';
import {TextBold, TextLight, TextRegular} from '../common';

export const CardNumberTask = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          ...styles.containerContent,
          borderRightWidth: 1,
          borderRightColor: '#dedede',
        }}>
        <Feather name="check" color={blueColor} size={24} style={styles.icon} />
        <View>
          <TextBold styleText={styles.textNumber}>25</TextBold>
          <TextLight styleText={styles.textSub}>Complete</TextLight>
        </View>
      </View>
      <View style={styles.containerContent}>
        <Feather name="x" color={blueColor} size={24} style={styles.icon} />
        <View>
          <TextBold styleText={styles.textNumber}>12</TextBold>
          <TextLight styleText={styles.textSub}>Not yet</TextLight>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    ...boxShadown,
    borderRadius: 8,
    flexDirection: 'row',
    paddingHorizontal: 8,
    paddingVertical: 26,
  },

  containerContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  textNumber: {
    fontSize: 20,
  },
  icon: {
    marginRight: 16,
  },
  textSub: {
    color: '#aaa',
    fontSize: 12,
  },
});
