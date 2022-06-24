import React from 'react';
import { useForm } from 'react-hook-form';
import { Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback, View } from 'react-native';

import colors from '../../theme/colors';
import Button from '../components/Button';
import Input from '../components/Input';
import LinkTwo from '../components/LinkTwo';
import Logo from '../components/Logo';
import Title from '../components/Title';

interface FormData {
  name: string;
  email: string;
  password: string;
}

export default function Register() {
  const { control, handleSubmit } = useForm<FormData>();

  function onSubmit(data: FormData): void {
    console.warn('form', data);
  }
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.black.background,
        paddingHorizontal: 12,
      }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView behavior="position" enabled>
          <View style={{ alignItems: 'center' }}>
            <Logo mb={48} w={260} />
            <Title color={colors.orangeFont} fontFamily="RobotoSlab_500Medium" size={18} mb={24}>
              Create your account
            </Title>
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
            <LinkTwo icon="arrow-left" mt={32} title="Back to Login" to="Login" />
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </View>
  );
}
