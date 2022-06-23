import {
  RobotoSlab_500Medium,
  RobotoSlab_400Regular,
  useFonts,
} from '@expo-google-fonts/roboto-slab';
import React from 'react';
import { Text, TextProps, TextStyle } from 'react-native';
import {
  BallIndicator,
  BarIndicator,
  DotIndicator,
  MaterialIndicator,
  PacmanIndicator,
  PulseIndicator,
  SkypeIndicator,
  UIActivityIndicator,
  WaveIndicator,
} from 'react-native-indicators';

import { colors } from '../../../theme';
import UrbanShaves from '../../screens/UrbanShaves';

interface TitleProps extends TextProps {
  size: 12 | 14 | 16 | 18 | 20 | 22 | 24 | 42;
  color: string;
  fontFamily: 'RobotoSlab_400Regular' | 'RobotoSlab_500Medium';
  lh?: number;
  mb?: number;
  mt?: number;
  mr?: number | string;
  ml?: number | string;
  ta?: 'center' | 'justify' | 'right' | 'center' | 'auto';
}

function Title({ children, size, color, mb, mt, mr, ml, fontFamily, lh, ta }: TitleProps) {
  const [fontsLoaded] = useFonts({
    RobotoSlab_500Medium,
    RobotoSlab_400Regular,
  });
  if (!fontsLoaded) {
    return <DotIndicator color={colors.orangeFontHard} size={3} />;
  }
  return (
    <Text
      style={{
        color,
        fontFamily,
        fontSize: size,
        marginBottom: mb,
        marginTop: mt,
        marginLeft: ml,
        marginRight: mr,
        lineHeight: lh,
        textAlign: ta,
      }}>
      {children}
    </Text>
  );
}

export default Title;
