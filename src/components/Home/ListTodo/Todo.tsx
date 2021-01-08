import React from 'react';
import {StyleSheet, View} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import Feather from 'react-native-vector-icons/Feather';
import {TextBold, TextLight, TextRegular} from '../../common';

interface ITodo {
  borderLeftColor?: string;
  title: string;
  content: string;
  time: string;
}

const Todo: React.FC<ITodo> = ({borderLeftColor, title, content, time}) => {
  // right
  const renderRightActions = () => {
    return (
      <>
        <View style={{...styles.containerAction, backgroundColor: '#6673ff'}}>
          <Feather
            size={18}
            name="edit"
            color="white"
            style={{marginRight: 4}}
          />
          <TextRegular styleText={styles.textDelete}>Edit</TextRegular>
        </View>
        <View style={{...styles.containerAction, backgroundColor: '#11b743'}}>
          <Feather
            size={18}
            name="edit"
            color="white"
            style={{marginRight: 4}}
          />
          <TextRegular styleText={styles.textDelete}>Edit</TextRegular>
        </View>
      </>
    );
  };

  //left
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
      <View
        style={{
          ...styles.container,
          borderLeftColor: borderLeftColor,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.2,
          shadowRadius: 1.41,
          elevation: 2,
          marginVertical: 4,
          marginHorizontal: 4,
        }}>
        <View style={styles.main}>
          <TextBold styleText={styles.title}>{title}</TextBold>
          <TextRegular styleText={styles.content}>{content}</TextRegular>
        </View>
        <View>
          <TextBold styleText={styles.time}>{time}</TextBold>
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
    padding: 16,
    borderRadius: 8,
    borderLeftWidth: 5,
    backgroundColor: 'white',
  },
  time: {
    color: 'black',
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
    backgroundColor: '#ff4e6a',
    borderRadius: 8,
    width: 72,
    // height: '94%',
    // marginTop: 4,
    marginVertical: 4,
  },
  textDelete: {
    color: 'white',
    fontSize: 14,
  },
});
