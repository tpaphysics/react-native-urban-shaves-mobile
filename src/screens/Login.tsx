import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Text, TextInput, View } from 'react-native';

import { colors, fonts } from '../../theme';
import Button from '../components/Button';
import Input from '../components/Input';
import Title from '../components/Typography/Title';

function Login() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Title>Be your best version</Title>

      <Input icon="mail" placeholder="E-mail" mb={8} />
      <Input icon="lock" placeholder="Password" mb={16} />

      <Button title="Entrar" />
    </View>
  );
}

export default Login;
