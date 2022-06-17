import {
  RobotoSlab_500Medium,
  RobotoSlab_400Regular,
  useFonts,
} from '@expo-google-fonts/roboto-slab';
import AppLoading from 'expo-app-loading';
import React from 'react';
import { Text, TextProps } from 'react-native';

interface TitleProps extends TextProps {
  size: 12 | 18 | 22;
  color: string;
  fontFamily: 'RobotoSlab_400Regular' | 'RobotoSlab_500Medium';
  mb?: number;
  mt?: number;
}

function Title({ children, size, color, mb, mt, fontFamily }: TitleProps) {
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
      }}>
      {children}
    </Text>
  );
}

export default Title;
