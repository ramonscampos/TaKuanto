import React from 'react';

import { useDrink } from '~/hooks/drinks';
import DrinkCard from '~/components/DrinkCard';

import {
  Container,
  ScrollView,
  Logo,
  HomeImage,
  NewDrinkButton,
  BottleIcon,
  Footer,
  CompareButton,
  CompareIcon,
  ClearLinkButton,
  ClearLinkText,
} from './styles';

function Home({ navigation }) {
  const { drinks, reset } = useDrink();

  return (
    <Container>
      <ScrollView>
        <Logo />
        <HomeImage />

        <NewDrinkButton
          Icon={BottleIcon}
          type="inverse"
          onPress={() => {
            navigation.push('Drink');
          }}>
          + Adicionar bebida
        </NewDrinkButton>

        {drinks.map((drink) => (
          <DrinkCard
            key={drink.id}
            onPress={() => navigation.push('Drink', { drink })}
            drink={drink}
          />
        ))}
      </ScrollView>
      <Footer>
        <CompareButton
          disabled={drinks.length < 2}
          Icon={CompareIcon}
          onPress={() => {
            navigation.push('Result');
          }}>
          Comparar!
        </CompareButton>

        <ClearLinkButton
          disabled={!drinks.length}
          onPress={() => {
            reset();
          }}>
          <ClearLinkText disabled={!drinks.length}>Limpar tudo</ClearLinkText>
        </ClearLinkButton>
      </Footer>
    </Container>
  );
}

export default Home;
