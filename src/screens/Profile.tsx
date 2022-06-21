import Icon from '@expo/vector-icons/Feather';
import React from 'react';
import { Image, View, KeyboardAvoidingView, TouchableOpacity, ScrollView } from 'react-native';

import { colors } from '../../theme';
import Button from '../components/Button';
import HeaderTwo from '../components/HeaderTwo';
import Input from '../components/Input';

export default function Profile() {
  return (
    <KeyboardAvoidingView
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: colors.black.background,
      }}>
      <ScrollView style={{ flex: 1, width: '100%' }}>
        <HeaderTwo
          avatar="https://i.pravatar.cc/400?img=13"
          title="My profile"
          hide
          bg={colors.black.background}
        />

        <View style={{ alignItems: 'center', width: '100%', paddingHorizontal: 24 }}>
          <View style={{ marginBottom: 32 }}>
            <Image
              source={{ uri: 'https://i.pravatar.cc/400?img=13' }}
              style={{
                backgroundColor: colors.black.background,
                width: 186,
                height: 186,
                borderRadius: 186 / 2,
                position: 'relative',
              }}
            />
            <TouchableOpacity
              style={{
                borderWidth: 2,
                borderColor: colors.orange,
                backgroundColor: colors.orange,
                width: 64,
                height: 64,
                borderRadius: 64 / 2,
                position: 'absolute',
                left: 130,
                top: 130,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Icon name="camera" size={24} color={colors.black.background} />
            </TouchableOpacity>
          </View>

          <Input icon="user" placeholder="Name" mb={8} />
          <Input icon="mail" placeholder="Email" mb={32} />
          <Input icon="user" placeholder="Password" mb={8} />
          <Input icon="lock" placeholder="New password" mb={8} />
          <Input icon="lock" placeholder="Confirm new password" mb={16} />
          <Button title="Confirm " />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}