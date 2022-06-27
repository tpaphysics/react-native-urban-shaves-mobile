import { classValidatorResolver } from '@hookform/resolvers/class-validator';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Toast from 'react-native-toast-message';

import Button from '../components/Button';
import Input from '../components/Input';
import { LoginDto } from '../dto/login.dto';

export default function LoginForm() {
  const resolver = classValidatorResolver(LoginDto);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginDto>({ resolver });
  const navigation = useNavigation();

  function onSubmit(data: LoginDto): void {
    console.warn('form', data);
    navigation.navigate('Dashboard' as never);
  }

  useEffect(() => {
    if (errors) {
      const { email, password } = errors;
      if (email) {
        Toast.show({
          type: 'error',
          text1: 'Email!',
          text2: email.message,
        });
      }

      if (password) {
        Toast.show({
          type: 'error',
          text1: 'Password!',
          text2: password.message,
        });
      }
    }
  }, [errors]);

  return (
    <>
      {errors && <Toast />}
      <Input
        name="email"
        autoCapitalize="none"
        keyboardType="email-address"
        control={control}
        icon="mail"
        placeholder="E-mail"
        mb={8}
      />

      <Input
        name="password"
        control={control}
        icon="lock"
        placeholder="Password"
        mb={16}
        isPassword
      />
      <Button title="Sigin" onPress={handleSubmit(onSubmit)} />
    </>
  );
}
