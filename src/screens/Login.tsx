import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback, View } from 'react-native';

import colors from '../../theme/colors';
import AvatarPersons from '../components/AvatarPersons';
import Button from '../components/Button';
import Input from '../components/Input';
import LinkOne from '../components/LinkOne';
import LinkTwo from '../components/LinkTwo';
import Logo from '../components/Logo';

interface FormData {
  email: string;
  password: string;
}

export default function Login() {
  const { control, handleSubmit } = useForm<FormData>();

  function onSubmit(data: FormData): void {
    console.warn('form', data);
    navigation.navigate('Dashboard' as never);
  }

  const navigation = useNavigation();
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
            <AvatarPersons mb={32} />
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
            <LinkOne mt={32} title="Forgot your password?" to="Remember" />

            <LinkTwo icon="log-in" mt={32} title="Create your account" to="Register" />
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </View>
  );
}
