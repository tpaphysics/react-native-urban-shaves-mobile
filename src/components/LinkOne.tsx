import { RobotoSlab_400Regular, useFonts } from '@expo-google-fonts/roboto-slab';
import { Link } from '@react-navigation/native';
import { To } from '@react-navigation/native/lib/typescript/src/useLinkTo';
import React from 'react';

import { colors } from '../../theme';
import UrbanShaves from '../screens/UrbanShaves';

interface LinkProps {
  title: string;
  to: string;
  mb?: number;
  mt?: number;
}

function LinkOne({ title, to, mb, mt }: LinkProps) {
  const [fontsLoaded] = useFonts({
    RobotoSlab_400Regular,
  });
  if (!fontsLoaded) {
    return <UrbanShaves />;
  }
  return (
    <Link
      style={{
        marginBottom: mb,
        marginTop: mt,
        fontSize: 16,
        height: 25,
        color: colors.white,
        fontFamily: 'RobotoSlab_400Regular',
      }}
      to={{ screen: `${to}` }}>
      {title}
    </Link>
  );
}

export default LinkOne;
