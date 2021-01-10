import {useIsFocused} from '@react-navigation/native';
import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
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
        <TextBold styleText={styles.titleChart}>Chart tasks</TextBold>
        <View>
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
    fontSize: 20,
    bottom: 12,
  },
});
