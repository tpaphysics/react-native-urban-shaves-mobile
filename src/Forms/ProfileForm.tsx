import { classValidatorResolver } from '@hookform/resolvers/class-validator';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Toast from 'react-native-toast-message';

import Button from '../components/Button';
import Input from '../components/Input';
import ErrorMessage from '../components/Toasts/ErrorMessage';
import { ProfileDto } from '../dto/profile.dto';

export default function ProfileForm() {
  const resolver = classValidatorResolver(ProfileDto);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileDto>({ resolver });
  const navigation = useNavigation();

  function onSubmit(data: ProfileDto): void {
    console.warn('form', data);
    navigation.navigate('Appointment' as never);
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
      {errors && <Toast config={{ error: (props) => <ErrorMessage {...props} /> }} />}

      <Input name="name" control={control} icon="user" placeholder="Name" mb={8} />
      <Input
        name="email"
        control={control}
        autoCapitalize="none"
        keyboardType="email-address"
        icon="mail"
        placeholder="Email"
        mb={16}
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
