import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useForm } from 'react-hook-form';

import Button from '../components/Button';
import Input from '../components/Input';

interface FormData {
  name: string;
  email: string;
  password: string;
}
export default function RegisterForm() {
  const { control, handleSubmit } = useForm<FormData>();
  const navigation = useNavigation();

  function onSubmit(data: FormData): void {
    console.warn('form', data);
    navigation.navigate('Login' as never);
  }
  return (
    <>
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
