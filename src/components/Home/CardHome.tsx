import React from 'react';
import {View, StyleSheet} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

import {blueColor, boxShadown} from '../../assets/styles';
import {IconSet, TextBold, TextLight} from '../common';

export const CardHome = () => {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.header}>
          <View style={styles.containerIcon}>
            <IconSet type="fea" name="search" size={18} color={blueColor} />
          </View>
          <View style={styles.iconX}>
            <Feather name="x" color="white" />
          </View>
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    color: 'white',
    fontSize: 20,
    marginBottom: 4,
  },
  text: {
    lineHeight: 20,
    color: 'white',
    marginBottom: 6,
  },
  textTime: {
    marginLeft: 4,
    color: 'white',
  },
  containerTime: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  iconX: {
    height: 20,
    width: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: 100,
  },
});
