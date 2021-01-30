import React from 'react';
import { Container, Description, Volume, Price } from './styles';

function ResultCard({ drink, ...rest }) {
  return (
    <Container {...rest}>
      <Description>{drink.description}</Description>
      <Volume>{drink.volume}</Volume>
      <Price>{drink.price}</Price>
      <Price>{drink.pricePerLiter}</Price>
    </Container>
  );
}

export default ResultCard;
