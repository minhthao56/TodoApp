import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {
  VictoryBar,
  VictoryChart,
  VictoryTheme,
  VictoryLabel,
  VictoryAxis,
} from 'victory-native';
import {blueColor, boxShadown} from '../../assets/styles';
import {TextRegular} from '../common';

const data = [
  {quarter: 'Mon', earnings: 13},
  {quarter: 'Tue', earnings: 16},
  {quarter: 'Wed', earnings: 10},
  {quarter: 'Thu', earnings: 12},
  {quarter: 'Fri', earnings: 12},
  {quarter: 'Sat', earnings: 11},
  {quarter: 'Sun', earnings: 6},
];

export const ChartTask = () => {
  const windowWidth = Dimensions.get('window').width;
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 16,
          top: 18,
        }}>
        <TextRegular>Chart tasks completion</TextRegular>
        <TextRegular>12/12 - 22/12</TextRegular>
      </View>
      <VictoryChart width={windowWidth} theme={VictoryTheme.grayscale}>
        <VictoryBar
          data={data}
          x="quarter"
          y="earnings"
          style={{
            data: {
              fill: blueColor,
              width: 8,
            },
          }}
          cornerRadius={{bottom: 4, top: 4}}
          animate={{
            duration: 1500,
            onLoad: {duration: 700},
          }}
        />
        <VictoryAxis
          style={{
            axis: {stroke: '#f8f8f8'},
            tickLabels: {fontSize: 11, fontFamily: 'Mulish-Light'},
          }}
        />
        <VictoryAxis
          dependentAxis
          style={{
            axis: {stroke: blueColor},
            tickLabels: {fontSize: 11, fontFamily: 'Mulish-Light'},
          }}
        />
      </VictoryChart>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    ...boxShadown,
    borderRadius: 8,
  },
});
