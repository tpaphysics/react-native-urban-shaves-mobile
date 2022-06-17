import { RobotoSlab_500Medium, useFonts } from '@expo-google-fonts/roboto-slab';
import AppLoading from 'expo-app-loading';
import React from 'react';
import { View, Text, Image, ViewProps } from 'react-native';

import { colors, fonts } from '../../theme';
import person1 from '../assets/person1.png';
import person2 from '../assets/person2.png';
import person3 from '../assets/person3.png';

interface AvatarsProps extends ViewProps {
  mb: number;
}
export default function AvatarPersons({ mb }: AvatarsProps) {
  const [fontsLoaded] = useFonts({
    RobotoSlab_500Medium,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <View
      style={{
        width: 300,
        justifyContent: 'flex-end',
        marginBottom: mb,
      }}>
      <Text
        style={{
          marginRight: 'auto',
          fontSize: 18,
          color: colors.orangeFont,
          marginBottom: 16,
          fontFamily: fonts.medium,
        }}>
        Be your best version
      </Text>
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
          <Text
            style={{
              color: colors.orangeFont,
              fontSize: 16,
              fontWeight: 'bold',
              fontFamily: fonts.medium,
            }}>
            You
          </Text>
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
