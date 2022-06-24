import React from 'react';
import { Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback, View } from 'react-native';

import colors from '../../theme/colors';
import LoginForm from '../Forms/LoginForm';
import AvatarPersons from '../components/AvatarPersons';
import LinkOne from '../components/LinkOne';
import LinkTwo from '../components/LinkTwo';
import Logo from '../components/Logo';

export default function Login() {
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
            <LoginForm />
            <LinkOne mt={32} title="Forgot your password?" to="Remember" />
            <LinkTwo icon="log-in" mt={32} title="Create your account" to="Register" />
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </View>
  );
}
