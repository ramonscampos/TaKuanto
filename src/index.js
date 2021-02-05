import 'react-native-gesture-handler';
import React from 'react';
import { View, StatusBar } from 'react-native';

import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import Routes from './routes';
import AppContainer from './hooks';

function App() {
  return (
    <View style={{ flex: 1 }}>
      <AppContainer>
        <StatusBar barStyle="dark-content" backgroundColor="white" />
        <Routes />
      </AppContainer>
    </View>
  );
}

export default App;
