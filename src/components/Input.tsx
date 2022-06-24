import { RobotoSlab_400Regular, useFonts } from '@expo-google-fonts/roboto-slab';
import Icon from '@expo/vector-icons/Feather';
import React, { useState } from 'react';
import { Control, Controller } from 'react-hook-form';
import { View, TextInput, TextInputProps } from 'react-native';

import { colors, fonts } from '../../theme';

interface InputProps extends TextInputProps {
  name: string;
  control: Control<any>;
  icon: 'mail' | 'user' | 'lock';
  mt?: number;
  mb?: number;
  isPassword?: boolean;
}

function Input({ name, control, icon, mt, mb, isPassword = false, ...props }: InputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);

  const [fontsLoaded] = useFonts({
    RobotoSlab_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <View
          style={{
            width: '100%',
            backgroundColor: colors.black.inputs,

            alignItems: 'center',
            flexDirection: 'row',
            paddingHorizontal: 24,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: isFocused ? colors.orange : colors.black.inputs,
            marginBottom: mb,
            marginTop: mt,
          }}>
          <Icon
            name={icon}
            size={20}
            color={isFocused || isFilled ? colors.orange : colors.gray.hard}
          />

          <TextInput
            {...props}
            value={value}
            onChangeText={onChange}
            secureTextEntry={isPassword && !isVisiblePassword}
            onFocus={() => setIsFocused(true)}
            onBlur={() => {
              setIsFocused(false);
              setIsFilled(!!value);
            }}
            style={{
              borderWidth: 0,
              width: '88%',
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
          {isPassword && (
            <Icon
              onPress={() => setIsVisiblePassword(!isVisiblePassword)}
              name={isVisiblePassword ? 'eye-off' : 'eye'}
              size={20}
              color={colors.gray.hard}
            />
          )}
        </View>
      )}
    />
  );
}

export default Input;
