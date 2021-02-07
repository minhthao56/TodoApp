import React from 'react';
import {View, StyleSheet} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

import {blueColor, boxShadown} from '../../assets/styles';
import {IconSet, TextBold, TextLight} from '../common';

export const CardHome = () => {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.containerIcon}>
          <IconSet type="fea" name="search" size={18} color={blueColor} />
        </View>
        <TextBold styleText={styles.title}>CardHome</TextBold>
        <TextLight styleText={styles.text}>
          CardHawfc ome dwqdwq Card Hawfc ome dwqdwq CardHawfc
        </TextLight>
      </View>
      <View style={styles.containerTime}>
        <Feather name="clock" color="#dddddd" />
        <TextLight styleText={styles.textTime}>11:11</TextLight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: 150,
    borderRadius: 16,
    backgroundColor: blueColor,
    paddingHorizontal: 16,
    paddingVertical: 16,
    justifyContent: 'space-between',
    ...boxShadown,
  },
  containerIcon: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    height: 36,
    width: 36,
    borderRadius: 6,
    marginBottom: 4,
  },
  title: {
    // color: blueColor,
    color: 'white',
    fontSize: 20,
    marginBottom: 4,
  },
  text: {
    // color: '#343434',
    lineHeight: 20,
    color: 'white',
    marginBottom: 6,
  },
  textTime: {
    // color: '#aaaaaa',
    marginLeft: 4,
    color: 'white',
  },
  containerTime: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});
