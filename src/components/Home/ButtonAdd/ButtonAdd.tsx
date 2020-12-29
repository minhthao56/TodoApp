import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import TextBlack from '../../Text/TextBlack';

interface IButtonAdd {
  onPress: Function;
}

const ButtonAdd = (props: IButtonAdd) => {
  const {onPress} = props;
  return (
    <View style={styles.container}>
      <TextBlack styleText={styles.title}>To Do</TextBlack>
      <TouchableOpacity onPress={() => onPress()}>
        <View style={styles.containerIcon}>
          <Feather name="plus" color="white" size={18} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonAdd;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    color: '#3E3F45',
  },
  containerIcon: {
    backgroundColor: '#3E3F45',
    width: 28,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
