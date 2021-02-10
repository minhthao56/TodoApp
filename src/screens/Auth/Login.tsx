import React from 'react';
import {View, StatusBar, StyleSheet} from 'react-native';
import {InputAuth} from '../../components';
import {TextBold, TextRegular} from '../../components/common';

export const Login = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View style={styles.title}>
        <TextBold>Welcome,</TextBold>
        <TextRegular>Sign in to continue!</TextRegular>
      </View>
      <View style={styles.form}>
        <InputAuth lable="Email" style={styles.email} />
        <InputAuth lable="Password" />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  form: {},
  title: {
    marginBottom: 32,
  },
  email: {
    marginBottom: 12,
  },
});
