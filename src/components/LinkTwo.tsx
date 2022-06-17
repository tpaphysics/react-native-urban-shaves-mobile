import { RobotoSlab_400Regular, useFonts } from '@expo-google-fonts/roboto-slab';
import Icon from '@expo/vector-icons/Feather';
import { Link } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import React from 'react';

import { colors } from '../../theme';

interface LinkProps {
  title: string;
  icon: 'log-in' | 'arrow-left';
  to: string;
  mb?: number;
  mt?: number;
}

function LinkTwo({ title, to, mb, mt, icon }: LinkProps) {
  const [fontsLoaded] = useFonts({
    RobotoSlab_400Regular,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <Link
      style={{
        height: 25,
        marginBottom: mb,
        marginTop: mt,
        fontSize: 14,
        fontFamily: 'RobotoSlab_400Regular',
        color: colors.orange,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
      }}
      to={{ screen: to }}>
      <Icon name={icon} size={14} color={colors.orange} style={{ marginRight: 50 }} />
      {`  ${title}`}
    </Link>
  );
}

export default LinkTwo;
