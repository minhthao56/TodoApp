import React from 'react';
import {StyleSheet, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {blueColor} from '../../assets/styles';

import {TextInputCommon} from '../common';

export const SearchBar = () => {
  return (
    <View style={styles.constainer}>
      <Feather name="search" color="#898989" size={20} />
      <TextInputCommon placeholder="Search Your Tasks" style={styles.input} />
      <Feather name="mic" color={blueColor} size={20} />
    </View>
  );
};

const styles = StyleSheet.create({
  constainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  input: {
    width: '100%',
    flex: 1,
  },
});
