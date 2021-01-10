import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {blueColor} from '../../../assets/styles';

import {TextBold} from '../../common';

interface IButtonAdd {
  onPress: Function;
}

export const ButtonAdd = (props: IButtonAdd) => {
  const {onPress} = props;
  return (
    <View style={styles.container}>
      <TextBold styleText={styles.title}>To Do</TextBold>
      <TouchableOpacity onPress={() => onPress()}>
        <View style={styles.containerIcon}>
          <Feather name="plus" color="white" size={18} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    color: '#3E3F45',
  },
  containerIcon: {
    backgroundColor: blueColor,
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
