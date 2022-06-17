import React from 'react';
import { View, Image } from 'react-native';

import { colors } from '../../theme';
import Title from './Fonts/Title';

interface HeaderProps {
  name: string;
  message: string;
  avatar: string;
}

export default function Header({ name, avatar, message }: HeaderProps) {
  return (
    <View
      style={{
        flexDirection: 'row',
        height: 132,
        width: '100%',
        backgroundColor: colors.black.inputs,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 26,
          alignItems: 'center',
          width: '100%',
        }}>
        <View style={{}}>
          <Title color={colors.white} fontFamily="RobotoSlab_400Regular" size={18} lh={28}>
            {message}
          </Title>
          <Title color={colors.orangeFont} fontFamily="RobotoSlab_500Medium" size={20} lh={28}>
            {name}
          </Title>
        </View>
        <Image
          source={{ uri: avatar }}
          style={{
            borderWidth: 2,
            borderColor: colors.orange,
            backgroundColor: colors.black.background,
            width: 72,
            height: 72,
            borderRadius: 72 / 2,
          }}
        />
      </View>
    </View>
  );
}
