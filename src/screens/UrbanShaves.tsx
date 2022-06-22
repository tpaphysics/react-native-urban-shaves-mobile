import React from 'react';
import { View } from 'react-native';

import { colors } from '../../theme';
import Logo from '../components/Logo';

export default function UrbanShaves() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.black.background,
      }}>
      <Logo w={320} />
    </View>
  );
}
