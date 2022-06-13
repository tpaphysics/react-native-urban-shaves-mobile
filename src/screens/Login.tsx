import React from 'react';
import { Image, View } from 'react-native';

import logo from '../assets/logo-t.png';
import AvatarsInto from '../components/AvatarsInto';
import Button from '../components/Button';
import Input from '../components/Input';

function Login() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Image source={logo} style={{ marginBottom: 48 }} />
      <AvatarsInto mb={24} />
      <Input icon="mail" placeholder="E-mail" mb={8} />
      <Input icon="lock" placeholder="Password" mb={16} />

      <Button title="Entrar" />
    </View>
  );
}

export default Login;
