import { RobotoSlab_400Regular, useFonts } from '@expo-google-fonts/roboto-slab';
import Icon from '@expo/vector-icons/Feather';
import AppLoading from 'expo-app-loading';
import React, { useState } from 'react';
import { View, TextInput, TextInputProps } from 'react-native';

import { colors, fonts } from '../../theme';

interface InputProps extends TextInputProps {
  icon: 'mail' | 'user' | 'lock';
  mt?: number;
  mb?: number;
}

function Input({ icon, mt, mb, ...props }: InputProps) {
  const [isFocused, setIsFocused] = useState(false);

  const [fontsLoaded] = useFonts({
    RobotoSlab_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <View
      style={{
        width: '100%',
        backgroundColor: colors.black.inputs,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 24,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: isFocused ? colors.orange : colors.black.inputs,
        marginBottom: mb,
        marginTop: mt,
      }}>
      <Icon name={icon} size={20} color={isFocused ? colors.orange : colors.gray.hard} />

      <TextInput
        {...props}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        style={{
          borderWidth: 0,
          width: '100%',
          height: 50,
          fontFamily: fonts.regular,
          color: colors.orangeFontHard,
          fontSize: 16,
          backgroundColor: colors.black.inputs,
          borderRadius: 10,
          paddingHorizontal: 16,
        }}
        placeholderTextColor={colors.gray.hard}
      />
    </View>
  );
}

export default Input;
