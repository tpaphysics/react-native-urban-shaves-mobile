import React from 'react';
import { Image, View } from 'react-native';

import colors from '../../theme/colors';
import logo from '../assets/logo-t.png';
import AvatarPersons from '../components/AvatarPersons';
import Button from '../components/Button';
import Input from '../components/Input';
import LinkOne from '../components/LinkOne';
import LinkTwo from '../components/LinkTwo';

export default function Login() {
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
      <AvatarPersons mb={32} />
      <Input icon="mail" placeholder="E-mail" mb={8} />
      <Input icon="lock" placeholder="Password" mb={16} />

      <Button title="Sigin" />
      <LinkOne mt={32} title="Forgot your password?" to="Remember" />
      <LinkOne mt={32} title="Dashboard" to="Dashboard" />

      <LinkTwo icon="log-in" mt={32} title="Create your account" to="Register" />
    </View>
  );
}
