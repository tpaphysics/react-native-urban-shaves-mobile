import { classValidatorResolver } from '@hookform/resolvers/class-validator';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Toast from 'react-native-toast-message';

import Button from '../components/Button';
import Input from '../components/Input';
import { ForgotDto } from '../dto/forgot.dto';

export default function ForgotForm() {
  const resolver = classValidatorResolver(ForgotDto);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotDto>({ resolver });
  const navigation = useNavigation();

  function onSubmit(data: ForgotDto): void {
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
      {errors.email && <Toast />}
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
