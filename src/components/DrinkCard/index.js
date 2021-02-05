import React from 'react';
import {
  Container,
  BottleAvatar,
  Content,
  Description,
  Row,
  Volume,
  Price,
  EditImage,
} from './styles';

function DrinkCard({ drink, ...rest }) {
  return (
    <Container {...rest}>
      <BottleAvatar />
      <Content>
        <Description>{drink.description}</Description>
        <Row>
          <Volume>{drink.volume}ml</Volume>
          <Price>
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(drink.price)}
          </Price>
        </Row>
      </Content>
      <EditImage />
    </Container>
  );
}

export default DrinkCard;
