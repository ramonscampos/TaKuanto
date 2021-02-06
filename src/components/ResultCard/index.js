import React from 'react';
import {
  Container,
  BottleAvatar,
  Content,
  Description,
  Row,
  Volume,
  Price,
} from './styles';

function ResultCard({ drink, ...rest }) {
  return (
    <Container {...rest}>
      <BottleAvatar />
      <Content>
        <Description>{drink.description}</Description>
        <Row>
          <Volume>{drink.volume}ml</Volume>
        </Row>
      </Content>
      <Price>
        {new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(drink.pricePerLiter) + '/Litro'}
      </Price>
    </Container>
  );
}

export default ResultCard;
