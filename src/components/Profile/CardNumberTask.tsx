import React from 'react';
import {StyleSheet, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

import {blueColor, boxShadown, containerIcon} from '../../assets/styles';
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
        <View style={styles.containerIcon}>
          <Feather name="check" color={blueColor} size={20} />
        </View>
        <View>
          <TextBold styleText={styles.textNumber}>25</TextBold>
          <TextLight styleText={styles.textSub}>Complete</TextLight>
        </View>
      </View>
      <View style={styles.containerContent}>
        <View style={styles.containerIcon}>
          <Feather name="x" color={blueColor} size={20} />
        </View>
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

  textSub: {
    color: '#aaa',
    fontSize: 12,
  },
  containerIcon: {
    backgroundColor: '#EEF1FF',
    height: 38,
    width: 38,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
});
