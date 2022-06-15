import React from 'react';
import { Text, TextProps } from 'react-native';
interface LinkProps extends TextProps {
  mb?: number;
  mt?: number;
}

function Link({ children, mb, mt, ...props }: LinkProps) {
  return (
    <Text
      {...props}
      style={{
        marginBottom: mb,
        marginTop: mt,
      }}>
      {children}
    </Text>
  );
}

export default Link;
