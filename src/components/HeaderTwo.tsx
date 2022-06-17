import Icon from '@expo/vector-icons/Feather';
import { Link } from '@react-navigation/native';
import React from 'react';
import { View, Image } from 'react-native';

import { colors } from '../../theme';
import Title from './Fonts/Title';

interface HeaderProps {
  title: string;
  avatar: string;
}

export default function HeaderTwo({ title, avatar }: HeaderProps) {
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
          marginTop: 26,
          paddingHorizontal: 24,
          alignItems: 'center',
          width: '100%',
        }}>
        <Link to={{ screen: 'Dashboard' }}>
          <Icon name="arrow-left" size={32} color={colors.orangeFont} />
        </Link>

        <Title color={colors.orangeFont} fontFamily="RobotoSlab_500Medium" size={20} lh={28}>
          {title}
        </Title>

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
