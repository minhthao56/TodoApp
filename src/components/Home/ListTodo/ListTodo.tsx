import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import Todo from './Todo';

const dataEx = [
  {
    title: 'Meeting with Join',
    content: 'Meeting with Join reading and seening',
    color: '#ff4e6a',
    time: '09:00',
  },
  {
    title: 'Join',
    content:
      'Meeting with Join reading and seening Meeting with Join reading and seening Meeting with Join reading and seening',
    color: '#6673ff',
    time: '12:00',
  },
  {
    title: 'Testing...',
    content:
      'Meeting with Join reading and seening Meeting with Join reading and seening Meeting with Join reading and seening',
    color: '#fea248',
    time: '23:00',
  },
  {
    title: 'Code',
    content:
      'reading and seening reading and seening Meeting with Join reading and seening Meeting with Join reading and seening Meeting with Join reading and seening',
    color: '#9045ba',
    time: '23:22',
  },
  {
    title: 'Developer...',
    content:
      'reading and seening reading and seening Meeting with Join reading and seening Meeting with Join reading and seening Meeting with Join reading and seening',
    color: '#11b743',
    time: '14:22',
  },
  {
    title: 'Coding...',
    content:
      'reading and seening reading and seening Meeting with Join reading and seening Meeting with Join reading and seening Meeting with Join reading and seening',
    color: '#fad24f',
    time: '15:22',
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
      ItemSeparatorComponent={() => <View style={{height: 5}}></View>}
      contentContainerStyle={{paddingBottom: 335}}
    />
  );
};

const styles = StyleSheet.create({});
