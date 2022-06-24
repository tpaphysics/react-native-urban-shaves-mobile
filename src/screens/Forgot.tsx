import React from 'react';
import { useForm } from 'react-hook-form';
import {
  Keyboard,
  KeyboardAvoidingView,
  Touchable,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import colors from '../../theme/colors';
import Button from '../components/Button';
import Input from '../components/Input';
import LinkTwo from '../components/LinkTwo';
import Logo from '../components/Logo';
import Title from '../components/Title';

interface FormData {
  email: string;
}

export default function Forgot() {
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
              Recovery my password
            </Title>
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
            <LinkTwo icon="arrow-left" mt={32} title="Back to Login" to="Login" />
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </View>
  );
}
