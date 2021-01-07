import React from 'react';
import {StyleSheet, View, SafeAreaView} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import moment from 'moment';
import {StackScreenProps} from '@react-navigation/stack';

// import Agenda from '../../components/Home/Agenda/Agenda';
// import ButtonAdd from '../../components/Home/ButtonAdd/ButtonAdd';
// import ListTodo from '../../components/Home/ListTodo/ListTodo';
import {TextBlack, TextBold, TextLight} from '../../components/common';
import {Agenda, ButtonAdd, ListTodo} from '../../components';

type RootStackParamList = {
  CreateTask: undefined;
};
type Props = StackScreenProps<RootStackParamList, 'CreateTask'>;

export function Home({route, navigation}: Props) {
  const monthNow = moment().format('MMM');
  const handleDetailAddTask = () => {
    navigation.navigate('CreateTask');
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View>
          <TextBlack styleText={styles.textBold}>Hey Williams</TextBlack>
          <TextLight styleText={styles.textLight}>remaining task: 6</TextLight>
        </View>
        <Feather name="bell" size={24} />
      </View>
      <View style={styles.containerAgenda}>
        <View style={styles.containerMonth}>
          <TextBold styleText={styles.textMonth}>{monthNow}</TextBold>
        </View>
        <Agenda />
      </View>
      <View style={styles.containerBtnAdd}>
        <ButtonAdd onPress={handleDetailAddTask} />
      </View>
      <View>
        <ListTodo />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  textBold: {
    fontSize: 34,
    color: '#343434',
    marginBottom: 8,
    marginTop: 8,
  },
  textLight: {
    fontSize: 18,
    color: '#898989',
  },
  container: {
    paddingLeft: 8,
    paddingRight: 8,
    backgroundColor: 'white',
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  containerAgenda: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    paddingTop: 12,
    marginTop: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingBottom: 12,
    marginBottom: 16,
  },
  textMonth: {
    fontSize: 16,
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
    marginBottom: 16,
  },
});
