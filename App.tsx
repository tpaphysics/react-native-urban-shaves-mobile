import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react';

import Appointement from './src/screens/Appointement';
import Dashboard from './src/screens/Dasboard';
import Forgot from './src/screens/Forgot';
import Login from './src/screens/Login';
import Register from './src/screens/Register';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false, animation: 'fade_from_bottom' }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Remember" component={Forgot} />
        <Stack.Screen name="Appointment" component={Appointement} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
