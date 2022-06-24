import Icon from '@expo/vector-icons/AntDesign';
import { useRoute } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';

import { colors } from '../../theme';
import Button from '../components/Button';
import Title from '../components/Title';

export default function SuccessConfirmation() {
  const route = useRoute();
  const { day } = route.params as any;
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.black.background,
        paddingHorizontal: 12,
      }}>
      <Icon name="check" size={96} color={colors.green} />

      <Title
        size={36}
        color={colors.orangeFont}
        fontFamily="RobotoSlab_500Medium"
        mt={24}
        ta="center">
        Appointment completed
      </Title>
      <Title
        size={18}
        color={colors.orangeFontHard}
        fontFamily="RobotoSlab_400Regular"
        ta="center"
        mt={16}
        mb={40}>
        {day}, July 23, 2022 at 12:00 pm with Thiago Pacheco
      </Title>
      <Button title="OK" />
    </View>
  );
}
