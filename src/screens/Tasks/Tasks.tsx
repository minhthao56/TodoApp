import React from 'react';
import {StyleSheet, View, SafeAreaView, StatusBar} from 'react-native';
import moment from 'moment';
import {StackScreenProps} from '@react-navigation/stack';

import {TextBold} from '../../components/common';
import {Agenda, ButtonAdd, HeaderAvatar, ListTodo} from '../../components';
import {blueColor, boxShadown} from '../../assets/styles';
import {TasksStackParamList} from '../../@types/navigator';

type Props = StackScreenProps<TasksStackParamList, 'Tasks'>;
export function Tasks({navigation}: Props) {
  const monthNow = moment().format('MMM');
  const handleDetailAddTask = () => {
    navigation.navigate('DetailTask');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View style={styles.containerHeader}>
        <View style={styles.header}>
          <HeaderAvatar />
        </View>
        <View style={styles.containerAgenda}>
          <View style={styles.containerMonth}>
            <TextBold styleText={styles.textMonth}>{monthNow}</TextBold>
          </View>
          <Agenda />
        </View>
      </View>
      <View style={{paddingHorizontal: 4}}>
        <View style={styles.containerBtnAdd}>
          <ButtonAdd onPress={handleDetailAddTask} />
        </View>
        <View>
          <ListTodo />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  textBold: {
    fontSize: 30,
    color: '#343434',
    marginBottom: 8,
    marginTop: 8,
  },
  textLight: {
    fontSize: 18,
    color: '#898989',
    marginBottom: 16,
  },
  container: {
    backgroundColor: '#fcfcfc',
    flex: 1,
  },
  header: {
    paddingVertical: 4,
  },
  containerAgenda: {
    flexDirection: 'row',
    marginBottom: 16,
    paddingVertical: 8,
  },
  textMonth: {
    fontSize: 18,
  },
  containerMonth: {
    borderRightWidth: 1,
    borderRightColor: '#eaeaea',
    justifyContent: 'center',
    paddingLeft: 16,
    paddingRight: 16,
    marginRight: 8,
  },
  containerBtnAdd: {
    marginBottom: 8,
  },
  containerHeader: {
    backgroundColor: 'white',
    ...boxShadown,
    paddingHorizontal: 8,
    marginBottom: 8,
  },
  imageAvatar: {
    height: 46,
    width: 46,
    borderRadius: 100,
  },
  avatar: {
    borderWidth: 1,
    borderRadius: 100,
    borderColor: blueColor,
  },
});
