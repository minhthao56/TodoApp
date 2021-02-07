import React from 'react';
import {StyleSheet, View, SafeAreaView, StatusBar} from 'react-native';
import moment from 'moment';
import {StackScreenProps} from '@react-navigation/stack';

import {TextBold, TextLight} from '../../components/common';
import {Agenda, ButtonAdd, HeaderAvatar, ListTodo} from '../../components';
import {blueColor, boxShadown} from '../../assets/styles';

type RootStackParamList = {
  DetailTask: undefined;
};
type Props = StackScreenProps<RootStackParamList, 'DetailTask'>;

export function Tasks({navigation}: Props) {
  const monthNow = moment().format('MMM');
  const handleDetailAddTask = () => {
    navigation.navigate('DetailTask');
  };

  // const scrollY = new Animated.Value(0);
  // const headerHeight = scrollY.interpolate({
  //   inputRange: [0, 170],
  //   outputRange: [170, 80],
  //   extrapolate: 'clamp',
  // });
  // const scrollYCalendar = new Animated.Value(0);
  // const headerCalendar = scrollYCalendar.interpolate({
  //   inputRange: [0, 70],
  //   outputRange: [70, 0],
  //   extrapolate: 'clamp',
  // });
  // const hanldeScrollListTodo = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
  // scrollY.setValue(e.nativeEvent.contentOffset.y);
  // scrollYCalendar.setValue(e.nativeEvent.contentOffset.y);
  // console.log('hanldeScrollListTodo');
  // };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View style={styles.containerHeader}>
        <HeaderAvatar />
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
    // flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'space-between',
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
