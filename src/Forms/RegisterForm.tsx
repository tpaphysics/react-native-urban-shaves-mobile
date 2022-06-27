import { classValidatorResolver } from '@hookform/resolvers/class-validator';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Toast from 'react-native-toast-message';

import Button from '../components/Button';
import Input from '../components/Input';
import { RegisterDto } from '../dto/register.dto';

export default function RegisterForm() {
  const resolver = classValidatorResolver(RegisterDto);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterDto>({ resolver });
  const navigation = useNavigation();

  function onSubmit(data: RegisterDto): void {
    console.warn('form', data);
    navigation.navigate('Login' as never);
  }

  useEffect(() => {
    if (errors) {
      for (const [key, value] of Object.entries(errors)) {
        if (key) {
          Toast.show({
            type: 'error',
            text1: key,
            text2: value.message,
          });
        }
      }
    }
  }, [errors]);
  return (
    <>
      {errors && <Toast />}
      <Input name="name" control={control} icon="user" placeholder="Name" mb={8} />
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

      <Button title="Register" onPress={handleSubmit(onSubmit)} />
    </>
  );
}
