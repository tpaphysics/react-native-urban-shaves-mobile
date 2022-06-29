import { classValidatorResolver } from '@hookform/resolvers/class-validator';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Toast from 'react-native-toast-message';

import Button from '../components/Button';
import Input from '../components/Input';
import ErrorMessage from '../components/Toasts/ErrorMessage';
import SuccessMessage from '../components/Toasts/SuccessMessage';
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
  function toUpperCaseFirstLetter(word: string) {
    return `${word.toUpperCase()[0]}${word.substring(1, word.length)}!`;
  }

  useEffect(() => {
    if (errors) {
      for (const [key, value] of Object.entries(errors)) {
        if (key) {
          Toast.show({
            type: 'error',
            text1: toUpperCaseFirstLetter(key),
            text2: value.message,
          });
        }
      }
    }
  }, [errors]);

  return (
    <>
      {errors && <Toast config={{ error: (props) => <ErrorMessage {...props} /> }} />}

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
