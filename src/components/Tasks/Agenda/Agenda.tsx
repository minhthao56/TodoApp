import React, {useState} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {defindTimeNow, realDayWeek} from '../../../helpers/home';
import ADay from './ADay';

export const Agenda: React.FC = () => {
  const days = realDayWeek(7, 7);

  const [daysWeek, setDaysWeek] = useState(days);

  const timeNow = defindTimeNow();
  const findIndexDayNow = days.findIndex((item) => {
    return (
      item.date === timeNow.dateNow &&
      item.month === timeNow.monthNow &&
      item.year === timeNow.yearNow
    );
  });
  return (
    <FlatList
      data={daysWeek}
      renderItem={({item}) => <ADay item={item} />}
      keyExtractor={(item, index) => index.toString()}
      horizontal={true}
      // pagingEnabled = {true}
      initialScrollIndex={findIndexDayNow}
      getItemLayout={(data, index) => ({length: 45, offset: 45 * index, index})}
      showsHorizontalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
