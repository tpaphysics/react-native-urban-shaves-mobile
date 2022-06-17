import {
  useFonts,
  RobotoSlab_500Medium,
  RobotoSlab_400Regular,
} from '@expo-google-fonts/roboto-slab';
import AppLoading from 'expo-app-loading';
import React from 'react';
import { Text, View, Image } from 'react-native';

import { colors } from '../../theme';

interface HeaderProps {
  name: string;
  message: string;
  avatar: string;
}

export default function Header({ name, avatar, message }: HeaderProps) {
  const [fontsLoaded] = useFonts({
    RobotoSlab_500Medium,
    RobotoSlab_400Regular,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        height: 132,
        width: '100%',
        justifyContent: 'space-around',
        backgroundColor: colors.black.inputs,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 24,
          alignItems: 'center',
          width: '100%',
        }}>
        <View style={{}}>
          <Text
            style={{
              color: colors.white,
              fontFamily: 'RobotoSlab_400Regular',
              fontSize: 20,
              lineHeight: 28,
            }}>
            {message}
          </Text>
          <Text
            style={{
              color: colors.orangeFont,
              fontFamily: 'RobotoSlab_500Medium',
              fontSize: 20,
              lineHeight: 28,
            }}>
            {name}
          </Text>
        </View>
        <Image
          source={{ uri: avatar }}
          style={{
            borderWidth: 2,
            borderColor: colors.orange,
            backgroundColor: colors.black.background,
            width: 64,
            height: 64,
            borderRadius: 64 / 2,
          }}
        />
      </View>
    </View>
  );
}
