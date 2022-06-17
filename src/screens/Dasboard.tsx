import React from 'react';
import { Image, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import colors from '../../theme/colors';
import logo from '../assets/logo-t.png';
import Button from '../components/Button';
import Title from '../components/Fonts/Title';
import Header from '../components/Header';
import Input from '../components/Input';
import LinkTwo from '../components/LinkTwo';

export default function Dashboard() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',

        backgroundColor: colors.black.background,
      }}>
      <Header avatar="https://i.pravatar.cc/400?img=13" message="Be welcome" name="Eric Copolla" />
      <View
        style={{
          width: '100%',
          paddingHorizontal: 24,
        }}>
        <Title
          color={colors.orangeFont}
          size={24}
          fontFamily="RobotoSlab_500Medium"
          mt={32}
          mb={24}>
          Hairdressers
        </Title>
        <Input icon="mail" placeholder="Name" mb={8} />
        <Input icon="mail" placeholder="E-mail" mb={8} />

        <Button title="Register" />
        <LinkTwo icon="arrow-left" mt={32} title="Back to Login" to="Login" />
      </View>
    </SafeAreaView>
  );
}
