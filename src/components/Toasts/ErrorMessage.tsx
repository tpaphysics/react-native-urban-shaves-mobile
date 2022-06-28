import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { BaseToastProps, ErrorToast } from 'react-native-toast-message';

import { colors } from '../../../theme';

const toast = {
  error: {
    bg: colors.red,
    icon: 'exclamationcircle',
  },
  success: {
    bg: colors.green,
    icon: 'checksquare',
  },
};

export default function ErrorMessage(props: BaseToastProps) {
  return (
    <ErrorToast
      {...props}
      renderLeadingIcon={() => (
        <AntDesign
          name="exclamationcircle"
          size={28}
          color={colors.white}
          style={{ marginTop: 16, marginLeft: 22 }}
        />
      )}
      text2NumberOfLines={2}
      {...props}
      style={{
        borderColor: colors.white,
        backgroundColor: colors.red,
      }}
      text1Style={{
        color: colors.white,
        fontSize: 14,
      }}
      text2Style={{
        color: colors.white,
        fontSize: 12,
      }}
    />
  );
}
