import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';

import colors from '../../theme/colors';
import AvatarPersons from '../components/AvatarPersons';
import Button from '../components/Button';
import Input from '../components/Input';
import LinkOne from '../components/LinkOne';
import LinkTwo from '../components/LinkTwo';
import Logo from '../components/Logo';

export default function Login() {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.black.background,
        paddingHorizontal: 10,
      }}>
      <Logo mb={48} w={260} />
      <AvatarPersons mb={32} />
      <Input icon="mail" placeholder="E-mail" mb={8} />
      <Input icon="lock" placeholder="Password" mb={16} isPassword />

      <Button title="Sigin" onPress={() => navigation.navigate('Dashboard' as never)} />
      <LinkOne mt={32} title="Forgot your password?" to="Remember" />

      <LinkTwo icon="log-in" mt={32} title="Create your account" to="Register" />
    </View>
  );
}
