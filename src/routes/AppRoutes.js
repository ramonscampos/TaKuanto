import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Start from '~/pages/Start';
import Home from '~/pages/Home';
import Drink from '~/pages/Drink';
import Result from '~/pages/Result';

const Stack = createStackNavigator();

const AppRoutes = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#EBEEF8' },
    }}
    initialRouteName="Start">
    <Stack.Screen name="Start" component={Start} />
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Drink" component={Drink} />
    <Stack.Screen name="Result" component={Result} />
  </Stack.Navigator>
);

export default AppRoutes;
