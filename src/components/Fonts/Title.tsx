import { RobotoSlab_500Medium, useFonts } from '@expo-google-fonts/roboto-slab';
import AppLoading from 'expo-app-loading';
import React from 'react';
import { Text, TextProps } from 'react-native';

import { colors, fonts } from '../../../theme';

function Title({ children }: TextProps) {
  const [fontsLoaded] = useFonts({
    RobotoSlab_500Medium,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <Text
      style={{
        color: colors.orangeFont,
        fontFamily: fonts.medium,
        fontSize: 18,
        marginBottom: 24,
      }}>
      {children}
    </Text>
  );
}

export default Title;
