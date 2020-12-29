import React from 'react';
import {StyleSheet, View} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import Feather from 'react-native-vector-icons/Feather';

import TextBold from '../../Text/TextBold';
import TextLight from '../../Text/TextLight';
import TextRegular from '../../Text/TextRegular';

interface ITodo {
  borderLeftColor?: string;
  title: string;
  content: string;
  time: string;
}

const Todo: React.FC<ITodo> = ({borderLeftColor, title, content, time}) => {
  const renderRightActions = () => {
    return (
      <View style={{...styles.containerAction, backgroundColor: '#2098F3'}}>
        <Feather size={18} name="edit" color="white" style={{marginRight: 4}} />
        <TextRegular styleText={styles.textDelete}>Edit</TextRegular>
      </View>
    );
  };

  const renderLeftActions = () => {
    return (
      <View style={styles.containerAction}>
        <Feather
          size={18}
          name="trash-2"
          color="white"
          style={{marginRight: 4}}
        />
        <TextRegular styleText={styles.textDelete}>Detele</TextRegular>
      </View>
    );
  };
  return (
    <Swipeable
      renderRightActions={renderRightActions}
      renderLeftActions={renderLeftActions}>
      <View style={{...styles.container, borderLeftColor: borderLeftColor}}>
        <View style={styles.main}>
          <TextBold styleText={styles.title}>{title}</TextBold>
          <TextRegular styleText={styles.content}>{content}</TextRegular>
        </View>
        <View>
          <TextLight styleText={styles.time}>{time}</TextLight>
        </View>
      </View>
    </Swipeable>
  );
};

export default Todo;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    marginBottom: 4,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F5F5F5',
    padding: 16,
    borderRadius: 16,
    borderLeftWidth: 5,
  },
  time: {
    color: '#898989',
  },
  main: {
    flex: 1,
  },
  content: {
    color: '#898989',
  },
  containerAction: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5403B',
    borderRadius: 16,
    width: 72,
  },
  textDelete: {
    color: 'white',
    fontSize: 14,
  },
});
