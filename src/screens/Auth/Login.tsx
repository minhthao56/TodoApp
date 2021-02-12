import React, {useEffect} from 'react';
import {View, StatusBar, StyleSheet, TouchableOpacity} from 'react-native';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {StackScreenProps} from '@react-navigation/stack';

import {Input, TextBottomAuth, TitleAuth} from '../../components';
import {Button, TextRegular} from '../../components/common';
import {AuthStackParamList} from '../../@types/navigator';
import {email, password} from '../../helpers/auth/validattion';
import {useAppDispatch} from '../../redux/store';
import {doLogin} from '../../redux/slices/auth';

// validation
const validation = yup.object().shape({
  email: email,
  password: password,
});

// interface
type Props = StackScreenProps<AuthStackParamList, 'Login'>;
export const Login: React.FC<Props> = ({navigation}) => {
  const {register, handleSubmit, setValue, errors} = useForm({
    resolver: yupResolver(validation),
  });
  const dispatch = useAppDispatch();

  const handleSubmitLogin = (data: any) => {
    console.log(JSON.stringify(data));
  };
  const hanldeGotoRegister = () => {
    navigation.navigate('Register');
  };
  const handleGotoForgot = () => {
    navigation.navigate('Forgot');
  };
  const handleSkipLogin = () => {
    dispatch(doLogin());
    console.log('handleSkipLogin');
  };

  useEffect(() => {
    register('email');
    register('password');
  }, [register]);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <TitleAuth title="Welcome" subTitle="Sign in to continue" />
      <View style={styles.form}>
        <Input
          lable="Email"
          style={styles.email}
          keyboardType="email-address"
          onChangeText={(text) => setValue('email', text)}
          messageError={errors.email?.message}
        />
        <Input
          lable="Password"
          onChangeText={(text) => setValue('password', text)}
          secureTextEntry={true}
          messageError={errors.password?.message}
        />
        <View style={styles.forgot}>
          <TouchableOpacity onPress={handleGotoForgot}>
            <TextRegular>Forgot password?</TextRegular>
          </TouchableOpacity>
        </View>

        <Button
          onPress={handleSubmit(handleSubmitLogin)}
          styleButton={styles.button}>
          LOGIN
        </Button>
      </View>
      <View>
        <TouchableOpacity style={styles.skip} onPress={handleSkipLogin}>
          <TextRegular styleText={styles.textSkip}>
            Skip Login, Use Offline
          </TextRegular>
        </TouchableOpacity>
        <TextBottomAuth
          title={"I'am a new user"}
          titleGoto="Sign Up"
          onPress={hanldeGotoRegister}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 32,
  },
  form: {
    width: '100%',
    marginBottom: 16,
  },
  email: {
    marginBottom: 24,
  },
  button: {
    height: 42,
    width: '100%',
  },
  forgot: {
    marginBottom: 24,
    alignItems: 'flex-end',
  },

  skip: {
    marginBottom: 16,
  },
  textSkip: {
    textDecorationLine: 'underline',
    color: '#999',
  },
});
