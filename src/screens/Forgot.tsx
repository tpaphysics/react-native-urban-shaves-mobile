import React from 'react';
import { Image, View } from 'react-native';

import colors from '../../theme/colors';
import logo from '../assets/logo-t.png';
import Button from '../components/Button';
import Title from '../components/Fonts/Title';
import Input from '../components/Input';
import LinkTwo from '../components/LinkTwo';

function Forgot() {
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
      <Title>Recover my password</Title>
      <Input icon="mail" placeholder="E-mail" mb={16} />

      <Button title="Send email" />
      <LinkTwo icon="arrow-left" mt={32} title="Back to Login" to="Login" />
    </View>
  );
}

export default Forgot;
