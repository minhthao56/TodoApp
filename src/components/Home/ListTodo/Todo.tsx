import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import Feather from 'react-native-vector-icons/Feather';
import {readMore} from '../../../helpers/home';
import {IconSet, TextBold, TextRegular} from '../../common';

interface ITodo {
  title: string;
  content: string;
  time: string;
  icon: string;
  type: string;
  isComplete: boolean;
}

const Todo: React.FC<ITodo> = ({
  title,
  content,
  time,
  icon,
  type,
  isComplete,
}) => {
  const [isExpand, setIsExpand] = useState<boolean>(false);

  const hanldeExpand = () => {
    setIsExpand(!isExpand);
  };

  // right
  const renderRightActions = () => {
    return (
      <>
        <View
          style={{
            ...styles.containerAction,
            backgroundColor: '#06a77d',
            marginLeft: 4,
          }}>
          <Feather
            size={18}
            name="check"
            color="white"
            style={{marginRight: 4}}
          />
          <TextRegular styleText={styles.textDelete}>Finsh</TextRegular>
        </View>
        <View style={{...styles.containerAction, backgroundColor: '#4168F3'}}>
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
      <View style={{...styles.containerAction, backgroundColor: '#d62828'}}>
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
      <TouchableOpacity
        style={
          isExpand
            ? {
                ...styles.container,
                alignItems: 'flex-start',
                backgroundColor: '#4168F3',
                height: 200,
              }
            : styles.container
        }
        onPress={hanldeExpand}>
        <View
          style={
            isExpand
              ? {...styles.containerIcon, backgroundColor: '#5C80FA'}
              : styles.containerIcon
          }>
          <IconSet
            name={icon}
            size={18}
            color={isExpand ? 'white' : '#4168F3'}
            type={type}
          />
        </View>
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
          <View style={styles.main}>
            <TextBold
              styleText={
                isComplete
                  ? isExpand
                    ? {
                        ...styles.title,
                        textDecorationLine: 'line-through',
                        color: 'white',
                      }
                    : {
                        ...styles.title,
                        textDecorationLine: 'line-through',
                        color: 'black',
                      }
                  : isExpand
                  ? {...styles.title, color: 'white'}
                  : {...styles.title, color: 'black'}
              }>
              {title}
            </TextBold>
            <TextRegular
              styleText={
                isComplete
                  ? isExpand
                    ? {
                        ...styles.content,
                        textDecorationLine: 'line-through',
                        color: 'white',
                      }
                    : {
                        ...styles.content,
                        textDecorationLine: 'line-through',
                        color: '#898989',
                      }
                  : isExpand
                  ? {...styles.content, color: 'white'}
                  : {...styles.content, color: '#898989'}
              }>
              {readMore(content, 52)}
            </TextRegular>
          </View>
          <View>
            <TextBold
              styleText={
                isExpand ? {...styles.time, color: 'white'} : styles.time
              }>
              {time}
            </TextBold>
          </View>
        </View>
      </TouchableOpacity>
    </Swipeable>
  );
};

export default Todo;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 16,
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
    borderLeftWidth: 2,
    borderLeftColor: '#4168F3',
  },
  title: {
    fontSize: 20,
    marginBottom: 4,
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
    borderRadius: 8,
    width: 72,
    marginVertical: 4,
  },
  textDelete: {
    color: 'white',
    fontSize: 14,
  },
  containerIcon: {
    marginRight: 16,
    backgroundColor: '#EEF1FF',
    height: 38,
    width: 38,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
});
