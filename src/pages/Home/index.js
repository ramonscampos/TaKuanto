import React from 'react';

import { useDrink } from '~/hooks/drinks';
import DrinkCard from '~/components/DrinkCard';

import { Container, NewDrinkButton, CompareButton, ClearLink } from './styles';

function Home({ navigation }) {
  const { drinks, reset } = useDrink();

  return (
    <Container>
      <NewDrinkButton
        onPress={() => {
          navigation.push('Drink');
        }}>
        Adicionar bebida
      </NewDrinkButton>

      {drinks.map((drink) => (
        <DrinkCard
          key={drink.id}
          onPress={() => navigation.push('Drink', { drink })}
          drink={drink}
        />
      ))}

      <CompareButton
        onPress={() => {
          navigation.push('Result');
        }}>
        Comparar
      </CompareButton>

      {!!drinks.length && (
        <ClearLink
          onPress={() => {
            reset();
          }}>
          Limpar
        </ClearLink>
      )}
    </Container>
  );
}

export default Home;
