import 'react-native-gesture-handler';
import React from 'react';
import { View, StatusBar } from 'react-native';

import Routes from './routes';
import AppContainer from './hooks';
import { colors } from './styles/index';

function App() {
  return (
    <View style={{ flex: 1 }}>
      <AppContainer>
        <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
        <Routes />
      </AppContainer>
    </View>
  );
}

export default App;
