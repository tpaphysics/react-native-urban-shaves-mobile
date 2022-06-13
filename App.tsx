import { useFonts, RobotoSlab_400Regular, __metadata__ } from '@expo-google-fonts/roboto-slab';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Login from './src/screens/Login';
import { colors } from './theme';

export default function App() {
  const [fontsLoaded] = useFonts({
    RobotoSlab_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.black.background,
        paddingHorizontal: 10,
      }}>
      <StatusBar style="auto" />
      <Login />
    </View>
  );
}
