import React from 'react';
import { View } from 'react-native';

import colors from '../../theme/colors';
import Button from '../components/Button';
import Title from '../components/Fonts/Title';
import Input from '../components/Input';
import LinkTwo from '../components/LinkTwo';
import Logo from '../components/Logo';

export default function Forgot() {
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
      <Title color={colors.orangeFont} fontFamily="RobotoSlab_500Medium" size={18} mb={24}>
        Recovery my password
      </Title>
      <Input icon="mail" placeholder="E-mail" mb={16} />

      <Button title="Send email" />
      <LinkTwo icon="arrow-left" mt={32} title="Back to Login" to="Login" />
    </View>
  );
}
