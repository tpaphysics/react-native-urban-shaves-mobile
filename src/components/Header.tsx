import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';

import { colors } from '../../theme';
import Title from './Title';

interface HeaderProps {
  name: string;
  message: string;
  avatar: string;
}

export default function Header({ name, avatar, message }: HeaderProps) {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: 'row',
        height: 132,
        width: '100%',
        backgroundColor: colors.black.inputs,
        paddingHorizontal: 12,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
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
        <TouchableOpacity onPress={() => navigation.navigate('Profile' as never)}>
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
        </TouchableOpacity>
      </View>
    </View>
  );
}
