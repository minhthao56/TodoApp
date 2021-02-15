import React from 'react';
import {StyleSheet, View} from 'react-native';

import {
  CheckListTask,
  ChooseIcons,
  Content,
  DateTimePickerTask,
} from '../../components';
import {Button} from '../../components/common';
import db from '../../database';

export const DetailTask = () => {
  const handleTask = () => {
    db.transaction((tx) => {
      tx.executeSql('SELECT * FROM Task', [], (_tx, results) => {
        console.log(results.rows.raw());
      });
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.containerContent}>
        <Content />
      </View>
      <View style={styles.datetimePicker}>
        <DateTimePickerTask />
      </View>
      <View style={styles.chooseColor}>
        <ChooseIcons />
      </View>
      <View style={styles.checkList}>
        <CheckListTask />
      </View>
      <View style={styles.containerBtn}>
        <Button onPress={handleTask}>Add Task</Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    backgroundColor: 'white',
    flex: 1,
  },
  checkList: {
    flex: 3,
    marginBottom: 8,
  },
  containerBtn: {
    flex: 1,
    alignItems: 'flex-end',
  },
  containerContent: {
    marginBottom: 4,
  },
  datetimePicker: {
    marginBottom: 16,
  },
  chooseColor: {
    marginBottom: 16,
  },
});
