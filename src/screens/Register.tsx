import React from 'react';
import { Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback, View } from 'react-native';

import colors from '../../theme/colors';
import RegisterForm from '../Forms/RegisterForm';
import LinkTwo from '../components/LinkTwo';
import Logo from '../components/Logo';
import Title from '../components/Title';

export default function Register() {
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
            <RegisterForm />

            <LinkTwo icon="arrow-left" mt={32} title="Back to Login" to="Login" />
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </View>
  );
}
