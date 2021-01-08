import React from 'react';
import {StyleSheet, View, SafeAreaView, Image} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import moment from 'moment';
import {StackScreenProps} from '@react-navigation/stack';

import {TextBlack, TextBold, TextLight} from '../../components/common';
import {Agenda, ButtonAdd, ListTodo} from '../../components';

type RootStackParamList = {
  DetailTask: undefined;
};
type Props = StackScreenProps<RootStackParamList, 'DetailTask'>;

export function Home({route, navigation}: Props) {
  const monthNow = moment().format('MMM');
  const handleDetailAddTask = () => {
    navigation.navigate('DetailTask');
  };
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: 'white',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.2,
          shadowRadius: 1.41,
          elevation: 2,
          paddingHorizontal: 8,
          marginBottom: 16,
        }}>
        <View style={styles.header}>
          <TextBlack styleText={styles.textBold}>Hey Williams</TextBlack>
          <Image
            source={{uri: 'https://picsum.photos/200'}}
            style={{height: 42, width: 42, borderRadius: 100}}
          />
        </View>
        <TextLight styleText={styles.textLight}>remaining task: 6</TextLight>
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
    fontSize: 34,
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
    marginBottom: 16,
  },
});
