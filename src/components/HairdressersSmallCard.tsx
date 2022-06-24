import React, { useState } from 'react';
import { Image, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';

import { colors } from '../../theme';
import Title from './Title';

interface HairdressersSmallCardProps extends TouchableOpacityProps {
  name: string;
  avatar: string;
  mr?: number;
  ml?: number;
  isSelected: string;
}

export default function HairdressersSmallCard({
  name,
  avatar,
  mr,
  ml,
  isSelected,
  ...props
}: HairdressersSmallCardProps) {
  //useEffect(() => {}, []);

  function formatAvatarName(name: string) {
    if (name.length > 15) {
      return `${name.substring(0, 12)}...`;
    } else {
      return name;
    }
  }

  return (
    <TouchableOpacity
      {...props}
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginRight: mr,
        marginLeft: ml,
      }}>
      <Image
        source={{ uri: avatar }}
        style={{
          borderWidth: 2,
          borderColor: isSelected === name ? colors.orange : colors.black.shape,
          backgroundColor: colors.black.background,
          width: 96,
          height: 96,
          borderRadius: 96 / 2,
        }}
      />
      <Title
        color={isSelected === name ? colors.orange : colors.white}
        fontFamily="RobotoSlab_500Medium"
        size={14}
        mt={6}>
        {formatAvatarName(name)}
      </Title>
    </TouchableOpacity>
  );
}
