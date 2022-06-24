import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useForm } from 'react-hook-form';

import Button from '../components/Button';
import Input from '../components/Input';

interface FormData {
  name: string;
  email: string;
  password: string;
  newPassword: string;
  confirmNewPassword: string;
}

export default function ProfileForm() {
  const { control, handleSubmit } = useForm<FormData>();
  const navigation = useNavigation();

  function onSubmit(data: FormData): void {
    console.warn('form', data);
    navigation.navigate('Appointment' as never);
  }
  return (
    <>
      <Input name="name" control={control} icon="user" placeholder="Name" mb={8} />
      <Input
        name="email"
        control={control}
        autoCapitalize="none"
        keyboardType="email-address"
        icon="mail"
        placeholder="Email"
        mb={32}
      />
      <Input name="password" control={control} icon="user" placeholder="Password" mb={8} />
      <Input name="newPassword" control={control} icon="lock" placeholder="New password" mb={8} />
      <Input
        name="confirmNewPassword"
        control={control}
        icon="lock"
        placeholder="Confirm new password"
        mb={16}
      />
      <Button title="Confirm" onPress={handleSubmit(onSubmit)} />
    </>
  );
}
