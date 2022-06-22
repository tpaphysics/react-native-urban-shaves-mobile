import React from 'react';
import { Image, TouchableOpacity } from 'react-native';

import { colors } from '../../theme';
import Title from './Fonts/Title';

interface HairdressersSmallCardProps {
  name: string;
  avatar: string;
  mr?: number;
  ml?: number;
}

export default function HairdressersSmallCard({
  name,
  avatar,
  mr,
  ml,
}: HairdressersSmallCardProps) {
  //useEffect(() => {}, []);
  function formatAvatarName(name: string) {
    if (name.length > 11) {
      return `${name.substring(0, 8)}...`;
    } else {
      return name;
    }
  }

  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.black.shape,
        width: 160,
        height: 50.4,
        borderRadius: 10,
        padding: 12,
        marginRight: mr,
        marginLeft: ml,
      }}>
      <Image
        source={{ uri: avatar }}
        style={{
          backgroundColor: colors.black.background,
          width: 40,
          height: 40,
          borderRadius: 40 / 2,
          marginRight: 14,
        }}
      />
      <Title color={colors.white} fontFamily="RobotoSlab_500Medium" size={14}>
        {formatAvatarName(name)}
      </Title>
    </TouchableOpacity>
  );
}
