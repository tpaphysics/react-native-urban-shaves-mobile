import { RobotoSlab_500Medium, useFonts } from '@expo-google-fonts/roboto-slab';
import AppLoading from 'expo-app-loading';
import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, Text } from 'react-native';

import { colors, fonts } from '../../theme';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

function Button({ title, ...props }: ButtonProps) {
  const [fontsLoaded] = useFonts({
    RobotoSlab_500Medium,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <TouchableOpacity
      {...props}
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 50,
        backgroundColor: colors.orange,
        borderRadius: 10,
      }}>
      <Text
        style={{
          fontFamily: fonts.medium,
          fontSize: 16,
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

export default Button;
