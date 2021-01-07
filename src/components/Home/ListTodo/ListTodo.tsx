import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import Todo from './Todo';

const dataEx = [
  {
    title: 'Meeting with Join',
    content: 'Meeting with Join reading and seening',
    color: '#2399FB',
    time: '09:00',
  },
  {
    title: 'Join',
    content:
      'Meeting with Join reading and seening Meeting with Join reading and seening Meeting with Join reading and seening',
    color: '#9E27AF',
    time: '12:00',
  },
  {
    title: 'Testing...',
    content:
      'Meeting with Join reading and seening Meeting with Join reading and seening Meeting with Join reading and seening',
    color: '#F7ED3F',
    time: '23:00',
  },
  {
    title: 'Code',
    content:
      'reading and seening reading and seening Meeting with Join reading and seening Meeting with Join reading and seening Meeting with Join reading and seening',
    color: '#F5403B',
    time: '23:22',
  },
  {
    title: 'Developer...',
    content:
      'reading and seening reading and seening Meeting with Join reading and seening Meeting with Join reading and seening Meeting with Join reading and seening',
    color: '#FF9305',
    time: '14:22',
  },
  {
    title: 'Coding...',
    content:
      'reading and seening reading and seening Meeting with Join reading and seening Meeting with Join reading and seening Meeting with Join reading and seening',
    color: '#4CAE50',
    time: '15:22',
  },
  {
    title: 'Bay...',
    content: 'Join reading and seening Meeting with Join reading and seening',
    color: '#EE2375',
    time: '21:22',
  },
];

export const ListTodo = () => {
  return (
    <FlatList
      data={dataEx}
      renderItem={({item}) => (
        <Todo
          borderLeftColor={item.color}
          title={item.title}
          content={item.content}
          time={item.time}
        />
      )}
      keyExtractor={(item, i) => i.toString()}
      ItemSeparatorComponent={() => <View style={{height: 16}}></View>}
      contentContainerStyle={{paddingBottom: 295}}
    />
  );
};

const styles = StyleSheet.create({});
