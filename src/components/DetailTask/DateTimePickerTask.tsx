import React, {useState} from 'react';
import {Button, StyleSheet, TouchableOpacity, View} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';

import {TextLight, TextRegular} from '../common';

export const DateTimePickerTask = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [momentTask, setMomentTask] = useState(new Date());

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: Date) => {
    console.log(date);

    hideDatePicker();
  };

  return (
    <>
      <TextLight styleText={styles.title}>Date & time</TextLight>
      <TouchableOpacity onPress={showDatePicker}>
        <TextRegular styleText={styles.time}>
          {moment(momentTask).format('DD MMM, HH:mm a')}
        </TextRegular>
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="datetime"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    color: '#454545',
  },
  time: {
    fontSize: 22,
  },
});
