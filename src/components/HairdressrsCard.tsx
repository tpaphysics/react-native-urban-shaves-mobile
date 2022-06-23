import Icon from '@expo/vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';

import { colors } from '../../theme';
import Title from './Title';

export interface HairdressrsCardProps {
  avatar: string;
  name: string;
  hours: string;
  days: string;
  mb?: number;
  mt?: number;
}

export default function HairdressrsCard({
  avatar,
  days,
  hours,
  name,
  mb,
  mt,
}: HairdressrsCardProps) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Appointment' as never)}
      style={{
        width: '100%',
        height: 112,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.black.shape,
        borderRadius: 10,
        padding: 16,
        marginBottom: mb,
        marginTop: mt,
      }}>
      <Image
        source={{ uri: avatar }}
        style={{
          backgroundColor: colors.black.background,
          width: 72,
          height: 72,
          borderRadius: 72 / 2,
        }}
      />
      <View
        style={{
          marginLeft: 12,
        }}>
        <Title size={18} color={colors.white} fontFamily="RobotoSlab_500Medium" mb={12}>
          {name}
        </Title>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 6 }}>
          <Icon name="calendar" size={18} color={colors.orange} style={{ marginRight: 12 }} />
          <Title size={16} color={colors.orangeFontHard} fontFamily="RobotoSlab_400Regular">
            {days}
          </Title>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Icon name="clock" size={18} color={colors.orange} style={{ marginRight: 12 }} />
          <Title size={16} color={colors.orangeFontHard} fontFamily="RobotoSlab_400Regular">
            {hours}
          </Title>
        </View>
      </View>
    </TouchableOpacity>
  );
}
