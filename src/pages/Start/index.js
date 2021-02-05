import React, { useCallback } from 'react';
import { CommonActions } from '@react-navigation/native';

import {
  Container,
  Card,
  BottomCard,
  Logo,
  EmptyCartImage,
  EmptyCartText,
  CartIcon,
  StartButton,
} from './styles';

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
      <Card>
        <Logo />
        <EmptyCartImage />
        <EmptyCartText>Seu carrinho está vazio :(</EmptyCartText>
      </Card>
      <BottomCard>
        <StartButton Icon={CartIcon} onPress={handleNavigate}>
          Começar a comparar!
        </StartButton>
      </BottomCard>
    </Container>
  );
}

export default Start;
