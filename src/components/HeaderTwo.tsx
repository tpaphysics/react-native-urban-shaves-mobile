import Icon from '@expo/vector-icons/Feather';
import { Link, useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';

import { colors } from '../../theme';
import Title from './Title';

interface HeaderProps {
  title: string;
  avatar: string;
  bg?: string;
  hide?: boolean;
}

export default function HeaderTwo({
  title,
  avatar,
  bg = colors.black.inputs,
  hide = false,
}: HeaderProps) {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: 'row',
        height: 132,
        width: '100%',
        backgroundColor: bg,
        paddingHorizontal: 12,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 26,

          alignItems: 'center',
          width: '100%',
        }}>
        <Link to={{ screen: 'Dashboard' }}>
          <Icon name="arrow-left" size={32} color={colors.orangeFont} />
        </Link>

        <Title color={colors.orangeFont} fontFamily="RobotoSlab_500Medium" size={20} lh={28}>
          {title}
        </Title>
        <TouchableOpacity onPress={() => navigation.navigate('Profile' as never)}>
          {!hide && (
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
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}
