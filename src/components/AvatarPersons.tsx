import { RobotoSlab_500Medium, useFonts } from '@expo-google-fonts/roboto-slab';
import React from 'react';
import { View, Text, Image, ViewProps } from 'react-native';

import { colors } from '../../theme';
import person1 from '../assets/person1.png';
import person2 from '../assets/person2.png';
import person3 from '../assets/person3.png';
import UrbanShaves from '../screens/UrbanShaves';
import Title from './Title';

interface AvatarsProps extends ViewProps {
  mb: number;
}
export default function AvatarPersons({ mb }: AvatarsProps) {
  const [fontsLoaded] = useFonts({
    RobotoSlab_500Medium,
  });
  if (!fontsLoaded) {
    return <UrbanShaves />;
  }
  return (
    <View
      style={{
        width: 300,
        justifyContent: 'flex-end',
        marginBottom: mb,
      }}>
      <Title
        color={colors.orangeFont}
        size={18}
        fontFamily="RobotoSlab_500Medium"
        mr="auto"
        mb={18}>
        Be your best version
      </Title>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          width: 250,
          marginLeft: 'auto',
        }}>
        <View
          style={{
            borderWidth: 2,
            borderColor: colors.orangeFont,
            backgroundColor: colors.black.background,
            width: 60,
            height: 60,
            borderRadius: 60 / 2,
            position: 'absolute',
            marginLeft: 190,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Title color={colors.orangeFont} size={16} fontFamily="RobotoSlab_500Medium">
            You
          </Title>
        </View>
        <View
          style={{
            width: 40,
            height: 40,
            borderRadius: 40 / 2,
            position: 'absolute',
            marginLeft: 155,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{ color: colors.orangeFont, fontSize: 32 }}>+</Text>
        </View>
        <Image
          source={person3}
          style={{
            borderWidth: 2,
            borderColor: colors.orangeFont,
            backgroundColor: 'yellow',
            width: 60,
            height: 60,
            borderRadius: 60 / 2,
            position: 'absolute',
            marginLeft: 100,
          }}
        />
        <Image
          source={person2}
          style={{
            borderWidth: 2,
            borderColor: colors.orangeFont,
            backgroundColor: 'yellow',
            width: 60,
            height: 60,
            borderRadius: 60 / 2,
            position: 'relative',
            marginLeft: 50,
          }}
        />
        <Image
          source={person1}
          style={{
            borderWidth: 2,
            borderColor: colors.orangeFont,
            backgroundColor: 'yellow',
            width: 60,
            height: 60,
            borderRadius: 60 / 2,
            position: 'absolute',
          }}
        />
      </View>
    </View>
  );
}
