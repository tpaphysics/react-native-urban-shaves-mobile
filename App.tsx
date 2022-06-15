import { useFonts, RobotoSlab_400Regular } from '@expo-google-fonts/roboto-slab';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';

import Login from './src/screens/Login';
import Register from './src/screens/Register';
import { colors } from './theme';

export default function App() {
  const [fontsLoaded] = useFonts({
    RobotoSlab_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  const Stack = createNativeStackNavigator();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.black.background,
        paddingHorizontal: 10,
      }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
}
