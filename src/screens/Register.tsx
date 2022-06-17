import React from 'react';
import { Image, View } from 'react-native';

import colors from '../../theme/colors';
import logo from '../assets/logo-t.png';
import Button from '../components/Button';
import Title from '../components/Fonts/Title';
import Input from '../components/Input';
import LinkTwo from '../components/LinkTwo';

export default function Register() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.black.background,
        paddingHorizontal: 10,
      }}>
      <Image source={logo} style={{ marginBottom: 48 }} />
      <Title color={colors.orangeFont} fontFamily="RobotoSlab_500Medium" size={18} mb={24}>
        Create your account
      </Title>
      <Input icon="mail" placeholder="Name" mb={8} />
      <Input icon="mail" placeholder="E-mail" mb={8} />
      <Input icon="lock" placeholder="Password" mb={16} />

      <Button title="Register" />
      <LinkTwo icon="arrow-left" mt={32} title="Back to Login" to="Login" />
    </View>
  );
}
