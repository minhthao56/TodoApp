import {StackScreenProps} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import * as yup from 'yup';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';

import {AuthStackParamList} from '../../@types/navigator';
import {Input, TextBottomAuth, TitleAuth} from '../../components';
import {Button} from '../../components/common';
import {email, name, password} from '../../helpers/auth/validattion';
import {insertUser} from '../../database';

// validation
const validation = yup.object().shape({
  name: name,
  email: email,
  password: password,
});

type TRegister = StackScreenProps<AuthStackParamList, 'Register'>;
type TRegisterData = {
  name: string;
  email: string;
  password: string;
};
export const Register: React.FC<TRegister> = ({navigation}) => {
  const {register, handleSubmit, setValue, errors} = useForm({
    resolver: yupResolver(validation),
  });

  const handleGoToSignIn = () => {
    navigation.navigate('Login');
  };
  const handleSubmitRegister = async (data: TRegisterData) => {
    console.log(data);
    const userData = {
      localId: Date.now(),
      name: data.name,
      email: data.email,
      password: data.password,
      forgotPassword: data.password,
      isSync: false,
    };
    await insertUser(userData);
  };

  useEffect(() => {
    register('name');
    register('email');
    register('password');
  }, [register]);
  return (
    <View style={styles.container}>
      <TitleAuth title="Create Account" subTitle="Sign up to get started" />
      <View>
        <Input
          lable="Name"
          style={styles.input}
          onChangeText={(text) => setValue('name', text)}
          messageError={errors.password?.message}
        />
        <Input
          lable="Email"
          style={styles.input}
          keyboardType="email-address"
          onChangeText={(text) => setValue('email', text)}
          messageError={errors.email?.message}
        />
        <Input
          lable="Password"
          style={{...styles.input, ...styles.password}}
          onChangeText={(text) => setValue('password', text)}
          secureTextEntry={true}
          messageError={errors.password?.message}
        />
        <Button
          onPress={handleSubmit(handleSubmitRegister)}
          styleButton={styles.button}>
          SIGN UP
        </Button>
      </View>
      <View style={styles.bottom}>
        <TextBottomAuth
          title="I'm already a member"
          titleGoto="Sign In"
          onPress={handleGoToSignIn}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 32,
    justifyContent: 'space-between',
  },
  bottom: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    height: 42,
    width: '100%',
  },
  input: {
    marginBottom: 12,
  },
  password: {
    marginBottom: 18,
  },
});
