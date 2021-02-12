import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {doLogout} from '../../redux/slices/auth';
import {useAppDispatch} from '../../redux/store';

import {Avatar, TextBold, TextLight} from '../common';

export const CardAccount = () => {
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(doLogout());
  };
  return (
    <View style={styles.container}>
      <View>
        <TextBold styleText={styles.name}>Minh Thao</TextBold>
        <TextLight styleText={styles.email}>minhthao5648@gmail.com</TextLight>
        <TouchableOpacity style={styles.containerLogout} onPress={handleLogout}>
          <Feather
            name="power"
            color="white"
            size={20}
            style={{marginRight: 8}}
          />

          <TextLight styleText={styles.textlogout}>Logout</TextLight>
        </TouchableOpacity>
      </View>
      <View style={styles.containerAvatar}>
        <Avatar image="https://picsum.photos/200/300" height={84} width={84} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  name: {
    color: 'white',
    fontSize: 28,
  },
  email: {
    color: 'white',
    fontSize: 13,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
  },
  textlogout: {
    fontSize: 18,
    color: 'white',
  },
  containerLogout: {
    flexDirection: 'row',
    marginTop: 16,
  },
  containerAvatar: {
    borderWidth: 3,
    borderRadius: 100,
    borderColor: 'white',
  },
});
