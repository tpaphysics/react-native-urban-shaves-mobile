import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useForm } from 'react-hook-form';

import Button from '../components/Button';
import Input from '../components/Input';

interface FormData {
  email: string;
}

export default function ForgotForm() {
  const { control, handleSubmit } = useForm<FormData>();
  const navigation = useNavigation();

  function onSubmit(data: FormData): void {
    console.warn('form', data);
    navigation.navigate('Login' as never);
  }
  return (
    <>
      <Input
        name="email"
        autoCapitalize="none"
        keyboardType="email-address"
        control={control}
        icon="mail"
        placeholder="E-mail"
        mb={16}
      />

      <Button title="Send email" onPress={handleSubmit(onSubmit)} />
    </>
  );
}
