import {useIsFocused} from '@react-navigation/native';
import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

import {blueColor} from '../../assets/styles';
import {CardAccount, CardNumberTask, ChartTask} from '../../components';
import {TextBold} from '../../components/common';

export const Profile = () => {
  const isFocused = useIsFocused();
  return (
    <>
      {isFocused ? (
        <StatusBar backgroundColor={blueColor} barStyle="light-content" />
      ) : null}
      <View style={styles.container}>
        <View style={styles.containerAccount}>
          <CardAccount />
        </View>
        <View style={styles.containerNumber}>
          <CardNumberTask />
        </View>
        <View style={styles.titleChart}>
          <View style={styles.containerIcon}>
            <Feather name="bar-chart-2" size={20} color={'#0410a0'} />
          </View>
          <TextBold styleText={styles.textChart}>Chart</TextBold>
        </View>

        <View style={styles.containerChart}>
          <ChartTask />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  containerAccount: {
    backgroundColor: blueColor,
    paddingHorizontal: 16,
    height: 200,
  },
  containerNumber: {
    paddingHorizontal: 24,
    bottom: 42,
  },
  titleChart: {
    paddingLeft: 8,
    flexDirection: 'row',
    alignItems: 'center',
    bottom: 16,
  },
  textChart: {
    fontSize: 18,
  },
  containerChart: {
    paddingHorizontal: 8,
  },
  containerIcon: {
    backgroundColor: '#EEF1FF',
    height: 34,
    width: 34,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 4,
  },
});
