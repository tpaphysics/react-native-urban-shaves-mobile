import Icon from '@expo/vector-icons/Feather';
import React from 'react';
import { ErrorToast } from 'react-native-toast-message';

import { colors } from '../../../theme';

export default function Error(props: any) {
  return (
    <ErrorToast
      {...props}
      renderLeadingIcon={() => (
        <Icon
          name="info"
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
