import React from 'react';
import { View, Text, Image, ViewProps } from 'react-native';

import { colors } from '../../theme';
import t1 from '../assets/t1.png';
import t2 from '../assets/t2.png';
import t3 from '../assets/t3.png';

interface AvatarsProps extends ViewProps {
  mb: number;
}
function AvatarsInto({ mb }: AvatarsProps) {
  return (
    <View
      style={{
        width: 300,
        justifyContent: 'flex-end',
        marginBottom: mb,
      }}>
      <Text style={{ marginRight: 'auto', fontSize: 18, color: colors.orange, marginBottom: 14 }}>
        Be your best version
      </Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          width: 250,
          marginLeft: 'auto',
        }}>
        <View
          style={{
            borderWidth: 2,
            borderColor: colors.orange,
            backgroundColor: colors.black.background,
            width: 60,
            height: 60,
            borderRadius: 60 / 2,
            position: 'absolute',
            marginLeft: 190,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{ color: colors.orange, fontSize: 16, fontWeight: 'bold' }}>You</Text>
        </View>
        <View
          style={{
            width: 40,
            height: 40,
            borderRadius: 40 / 2,
            position: 'absolute',
            marginLeft: 155,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{ color: colors.orange, fontSize: 32 }}>+</Text>
        </View>
        <Image
          source={t3}
          style={{
            borderWidth: 2,
            borderColor: colors.orange,
            backgroundColor: 'yellow',
            width: 60,
            height: 60,
            borderRadius: 60 / 2,
            position: 'absolute',
            marginLeft: 100,
          }}
        />
        <Image
          source={t2}
          style={{
            borderWidth: 2,
            borderColor: colors.orange,
            backgroundColor: 'yellow',
            width: 60,
            height: 60,
            borderRadius: 60 / 2,
            position: 'relative',
            marginLeft: 50,
          }}
        />
        <Image
          source={t1}
          style={{
            borderWidth: 2,
            borderColor: colors.orange,
            backgroundColor: 'yellow',
            width: 60,
            height: 60,
            borderRadius: 60 / 2,
            position: 'absolute',
          }}
        />
      </View>
    </View>
  );
}

export default AvatarsInto;
