import { useFonts, RobotoSlab_400Regular } from '@expo-google-fonts/roboto-slab';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import React from 'react';

import Forgot from './src/screens/Forgot';
import Login from './src/screens/Login';
import Register from './src/screens/Register';

export default function App() {
  const [fontsLoaded] = useFonts({
    RobotoSlab_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Remember" component={Forgot} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
