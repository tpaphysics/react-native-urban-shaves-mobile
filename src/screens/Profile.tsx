import Icon from '@expo/vector-icons/Feather';
import React from 'react';
import {
  Image,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

import { colors } from '../../theme';
import ProfileForm from '../Forms/ProfileForm';
import HeaderTwo from '../components/HeaderTwo';

export default function Profile() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: colors.black.background,
        paddingHorizontal: 12,
      }}>
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <KeyboardAvoidingView behavior="position" enabled>
            <HeaderTwo
              avatar="https://i.pravatar.cc/400?img=13"
              title="My profile"
              hide
              bg={colors.black.background}
            />

            <View style={{ alignItems: 'center', width: '100%' }}>
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
              <ProfileForm />
            </View>
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </ScrollView>
    </View>
  );
}
