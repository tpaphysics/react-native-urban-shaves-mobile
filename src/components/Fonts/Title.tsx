import {
  RobotoSlab_500Medium,
  RobotoSlab_400Regular,
  useFonts,
} from '@expo-google-fonts/roboto-slab';
import AppLoading from 'expo-app-loading';
import React from 'react';
import { Text, TextProps } from 'react-native';

interface TitleProps extends TextProps {
  size: 12 | 14 | 16 | 18 | 20 | 22 | 24;
  color: string;
  fontFamily: 'RobotoSlab_400Regular' | 'RobotoSlab_500Medium';
  lh?: number;
  mb?: number;
  mt?: number;
}

function Title({ children, size, color, mb, mt, fontFamily, lh }: TitleProps) {
  const [fontsLoaded] = useFonts({
    RobotoSlab_500Medium,
    RobotoSlab_400Regular,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <Text
      style={{
        color,
        fontFamily,
        fontSize: size,
        marginBottom: mb,
        marginTop: mt,
        lineHeight: lh,
      }}>
      {children}
    </Text>
  );
}

export default Title;
