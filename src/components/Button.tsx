import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { colors } from '../../theme';
import Title from './Fonts/Title';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

function Button({ title, ...props }: ButtonProps) {
  return (
    <TouchableOpacity
      {...props}
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 50,
        backgroundColor: colors.orange,
        borderRadius: 10,
      }}>
      <Title fontFamily="RobotoSlab_500Medium" size={16} color={colors.black.background}>
        {title}
      </Title>
    </TouchableOpacity>
  );
}

export default Button;
