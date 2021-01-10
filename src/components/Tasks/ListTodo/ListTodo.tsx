import React from 'react';
import {StyleSheet, SectionList, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

import {TextBold} from '../../common';

import Todo from './Todo';

const DATA = [
  {
    isComplete: false,
    data: [
      {
        title: 'Meeting',
        content: 'Join reading and seening Meeting ',
        time: '15:22',
        type: 'fa',
        icon: 'handshake-o',
        isComplete: false,
      },
      {
        title: 'Travle',
        content:
          'reading and seening reading and seening Meeting with Join reading and seening Meeting with Join reading and seening Meeting with Join reading and seening reading and seening reading and seening Meeting with Join reading and seening Meeting with Join reading and seening Meeting with Join reading and seening',
        time: '14:22',
        type: 'ii',
        icon: 'airplane-outline',
        isComplete: false,
      },
      {
        title: 'Pizza',
        content:
          'reading and seening reading and seening Meeting with Join reading and seening Meeting with Join reading and seening Meeting with Join reading and seening',
        time: '14:22',
        type: 'fea',
        icon: 'music',
        isComplete: false,
      },
      {
        title: 'Pizza',
        content:
          'reading and seening reading and seening Meeting with Join reading and seening Meeting with Join reading and seening Meeting with Join reading and seening',
        time: '14:22',
        type: 'fea',
        icon: 'music',
        isComplete: false,
      },
      {
        title: 'Pizza',
        content:
          'reading and seening reading and seening Meeting with Join reading and seening Meeting with Join reading and seening Meeting with Join reading and seening',
        time: '14:22',
        type: 'fea',
        icon: 'music',
        isComplete: false,
      },
      {
        title: 'Pizza',
        content:
          'reading and seening reading and seening Meeting with Join reading and seening Meeting with Join reading and seening Meeting with Join reading and seening',
        time: '14:22',
        type: 'fea',
        icon: 'music',
        isComplete: false,
      },
    ],
  },
  {
    isComplete: true,
    data: [
      {
        title: 'Pizza',
        content: 'reading and seening ',
        time: '14:22',
        type: 'fea',
        icon: 'music',
        isComplete: true,
      },
      {
        title: 'Pizza',
        content:
          'reading and seening reading and seening Meeting with Join reading and seening Meeting with Join reading and seening Meeting with Join reading and seening',
        time: '14:22',
        icon: 'laptop',
        type: 'ant',
        isComplete: true,
      },
      {
        title: 'Pizza',
        content:
          'reading and seening reading and seening Meeting with Join reading and seening Meeting with Join reading and seening Meeting with Join reading and seening',
        time: '14:22',
        icon: 'laptop',
        type: 'ant',
        isComplete: true,
      },
      {
        title: 'Pizza',
        content:
          'reading and seening reading and seening Meeting with Join reading and seening Meeting with Join reading and seening Meeting with Join reading and seening',
        time: '14:22',
        icon: 'laptop',
        type: 'ant',
        isComplete: true,
      },
      {
        title: 'Pizza',
        content:
          'reading and seening reading and seening Meeting with Join reading and seening Meeting with Join reading and seening Meeting with Join reading and seening',
        time: '14:22',
        icon: 'laptop',
        type: 'ant',
        isComplete: true,
      },
    ],
  },
];

export const ListTodo = () => {
  return (
    <SectionList
      sections={DATA}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item}) => (
        <Todo
          title={item.title}
          time={item.time}
          content={item.content}
          icon={item.icon}
          type={item.type}
          isComplete={item.isComplete}
        />
      )}
      renderSectionHeader={({section: {isComplete}}) => (
        <>
          {isComplete ? (
            <View style={styles.contianerHeader}>
              <View
                style={{
                  ...styles.icon,
                  backgroundColor: 'rgba(6, 167, 125, 0.1)',
                }}>
                <Feather name="check-circle" size={18} color="#06a77d" />
              </View>
              <TextBold styleText={styles.textHeader}>Complete</TextBold>
            </View>
          ) : (
            <View style={styles.contianerHeader}>
              <View style={styles.icon}>
                <Feather name="x" size={18} color="#d62828" />
              </View>
              <TextBold styleText={{...styles.textHeader, color: '#d62828'}}>
                Not yet
              </TextBold>
            </View>
          )}
        </>
      )}
      contentContainerStyle={{paddingBottom: 320}}
      ItemSeparatorComponent={() => <View style={{height: 5}}></View>}
    />
  );
};

const styles = StyleSheet.create({
  contianerHeader: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  textHeader: {
    fontSize: 18,
    color: '#06a77d',
  },
  icon: {
    marginRight: 4,
    backgroundColor: 'rgba(214, 40, 40, 0.1)',
    height: 28,
    width: 28,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
});
