import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  CheckListTask,
  ChooseColor,
  Content,
  DateTimePickerTask,
} from '../../components';
import {Button} from '../../components/common';

export const DetailTask = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerContent}>
        <Content />
      </View>
      <View style={styles.datetimePicker}>
        <DateTimePickerTask />
      </View>
      <View style={styles.chooseColor}>
        <ChooseColor />
      </View>
      <View style={styles.checkList}>
        <CheckListTask />
      </View>
      <View style={styles.containerBtn}>
        <Button onPress={() => console.log('aaa')}>Add Task</Button>
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
