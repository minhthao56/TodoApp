/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {
  bgGreenColor,
  bgIcon,
  bgRedColor,
  blueColor,
  boxShadown,
  greenColor,
  redColor,
} from '../../assets/styles';

import {CheckBox, TextBold, TextRegular} from '../common';

export const DetailCard = () => {
  const [isChecked, setIsCheck] = useState(false);

  const handleCheckBox = () => {
    setIsCheck(!isChecked);
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.top}>
          <View style={styles.header}>
            <View style={{...styles.icon, marginRight: 4}}>
              <Feather name="search" size={20} color={blueColor} />
            </View>
            <TextBold styleText={styles.title}>Detail Card</TextBold>
          </View>
          <View style={styles.iconX}>
            <Feather name="x" color="#ffffff" size={16} />
          </View>
        </View>
        <TextRegular styleText={styles.description}>
          {'\t'}Djiwqijod wqijdwq wqdjpidwq wqdqwd qwdwqd wqdwqdjpow jdpowjq
          qwdwqdok qwk
        </TextRegular>
        {[1, 2, 3, 4, 5, 6, 7].map((item, i) => {
          return (
            <TouchableOpacity
              style={styles.checkBox}
              onPress={handleCheckBox}
              key={i}>
              <CheckBox isChecked={isChecked} />
              <TextRegular styleText={styles.textCheckBox}>
                Testsadasd
              </TextRegular>
            </TouchableOpacity>
          );
        })}
        <View style={styles.action}>
          <View style={styles.icon}>
            <Feather name="edit" size={20} color={blueColor} />
          </View>
          <View
            style={{
              ...styles.icon,
              backgroundColor: bgGreenColor,
              marginBottom: 10,
            }}>
            <Feather name="check-circle" size={20} color={greenColor} />
          </View>
          <View style={{...styles.icon, backgroundColor: bgRedColor}}>
            <Feather name="x" size={20} color={redColor} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 22,
    color: blueColor,
  },
  checkBox: {
    flexDirection: 'row',
    width: '100%',
    marginBottom: 14,
  },
  content: {
    flex: 1,
    ...boxShadown,
    backgroundColor: 'white',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingTop: 12,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  icon: {
    backgroundColor: bgIcon,
    height: 36,
    width: 36,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  action: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginTop: 4,
  },
  description: {
    marginBottom: 8,
    borderBottomWidth: 1,
    borderColor: '#f8f8f8',
    paddingBottom: 8,
    color: '#777',
    fontSize: 15,
    lineHeight: 22,
  },
  iconX: {
    backgroundColor: '#dfdfdf',
    height: 24,
    width: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
  textCheckBox: {
    color: '#777',
  },
});
