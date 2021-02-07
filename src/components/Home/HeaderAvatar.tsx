import React from 'react';
import {StyleSheet, View} from 'react-native';
import {blueColor} from '../../assets/styles';
import {Avatar, TextLight, TextRegular} from '../common';

export const HeaderAvatar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TextRegular styleText={styles.title}>Hi, Minh Thao</TextRegular>
        <TextLight>Today your list tasks</TextLight>
      </View>
      <View style={styles.avatar}>
        <Avatar image="https://picsum.photos/200" height={62} width={62} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  header: {
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
  },
  avatar: {
    borderWidth: 1,
    borderRadius: 100,
    borderColor: blueColor,
  },
});
