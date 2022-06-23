import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react';

import Appointement from '../screens/Appointement';
import Dashboard from '../screens/Dasboard';
import Forgot from '../screens/Forgot';
import Login from '../screens/Login';
import Profile from '../screens/Profile';
import Register from '../screens/Register';
import SuccessConfirmation from '../screens/SuccessConfirmation';

export default function Routes() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false, animation: 'fade_from_bottom' }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Remember" component={Forgot} />
        <Stack.Screen name="Appointment" component={Appointement} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="SuccessConfirmation" component={SuccessConfirmation} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
