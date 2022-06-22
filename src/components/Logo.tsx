import React from 'react';
import { Image } from 'react-native';

import logo from '../../assets/splash.png';

interface LogoProps {
  w: number;
  mb?: number;
  mt?: number;
}

export default function Logo({ w, mb, mt }: LogoProps) {
  return (
    <Image
      source={logo}
      style={{
        width: w,
        height: 0.3238 * w,
        marginBottom: mb,
        marginTop: mt,
      }}
    />
  );
}
