import React from 'react';
import {StyleSheet, View} from 'react-native';
import TextRegular from '../../Text/TextRegular';
import {defindTimeNow, defineDateMonthYear} from '../../../helpers/home';

type Day = {
  day: string;
  date: string;
  time: number;
};
interface IDay {
  item: Day;
}
const ADay: React.FC<IDay> = ({item}) => {
  const checkTimeNowOrNot = (): boolean => {
    const timeNow = defindTimeNow();
    const timeItem = defineDateMonthYear(item.time);
    if (
      timeNow.dateNow === timeItem.dateNow &&
      timeNow.monthNow === timeItem.monthNow &&
      timeItem.yearNow === timeNow.yearNow
    ) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <View
      style={
        checkTimeNowOrNot()
          ? {...styles.container, ...styles.now}
          : styles.container
      }>
      <TextRegular styleText={ checkTimeNowOrNot()? {...styles.day,...styles.dayNow}:styles.day}>{item.day}</TextRegular>
      <TextRegular styleText = {checkTimeNowOrNot()?styles.dateNow: {}}>{item.date}</TextRegular>
    </View>
  );
};

export default ADay;

const styles = StyleSheet.create({
  day: {
    marginBottom: 8,
    color: '#aaa',
  },
  container: {
    alignItems: 'center',
    height: 52,
    width: 34,
    justifyContent: 'center',
    marginLeft: 10,
    marginStart: 10,
  },
  now: {
    backgroundColor: '#3E3F45',
    borderRadius: 60,
  },
  dayNow: {
    color: 'white',
  },
  dateNow: {
    color: 'white',
  }
});
