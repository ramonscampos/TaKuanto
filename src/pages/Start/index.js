import React, { useCallback } from 'react';
import { CommonActions } from '@react-navigation/native';

import { Container, StartButton } from './styles';

function Start({ navigation }) {
  const handleNavigate = useCallback(() => {
    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [
          { name: 'Home' },
          {
            name: 'Drink',
          },
        ],
      }),
    );
  }, [navigation]);

  return (
    <Container>
      <StartButton onPress={handleNavigate}>Começar</StartButton>
    </Container>
  );
}

export default Start;
