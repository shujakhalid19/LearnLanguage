import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Dialogue from './components/screens/Dialogue';
import Home from './components/screens/Home';
import Test from './components/screens/Test';

// or any pure javascript modules available in npm
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Dialogue" component={Dialogue} />
      <Stack.Screen name="Assessment" component={Test} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}