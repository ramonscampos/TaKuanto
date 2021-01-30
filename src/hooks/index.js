import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { DrinkProvider } from './drinks';

const AppProvider = ({ children }) => {
  return (
    <DrinkProvider>
      <NavigationContainer>{children}</NavigationContainer>
    </DrinkProvider>
  );
};

export default AppProvider;
