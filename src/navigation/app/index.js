import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {screens} from '../../shared/constants/screens';
import TabNavigator from '../tab';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={screens.tab} component={TabNavigator} />
    </Stack.Navigator>
  );
}
