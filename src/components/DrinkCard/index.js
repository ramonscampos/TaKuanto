import React from 'react';
import { Container, Description, Volume, Price } from './styles';

function DrinkCard({ drink, ...rest }) {
  return (
    <Container {...rest}>
      <Description>{drink.description}</Description>
      <Volume>{drink.volume}</Volume>
      <Price>{drink.price}</Price>
    </Container>
  );
}

export default DrinkCard;
