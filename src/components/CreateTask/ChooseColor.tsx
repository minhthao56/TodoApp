import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TextLight} from '../common';

const colorData = [
  '#2098F3',
  '#9E27AF',
  '#F5403B',
  '#FF9305',
  '#F7ED3F',
  '#4CAE50',
  '#EE2375',
];

export const ChooseColor = () => {
  return (
    <>
      <TextLight styleText={styles.title}>Choose Color</TextLight>
      <View style={styles.containerColor}>
        {colorData.map((item, i) => {
          return (
            <View
              style={{
                height: 48,
                width: 38,
                backgroundColor: item,
                borderRadius: 8,
              }}
              key={i}
            />
          );
        })}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    color: '#454545',
    marginBottom: 4,
  },
  containerColor: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
