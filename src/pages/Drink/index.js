import React, { useCallback, useState } from 'react';

import Modal from '~/components/Modal';
import { useDrink } from '~/hooks/drinks';
import {
  Container,
  HeaderContent,
  BackButton,
  BackSymbol,
  Title,
  Content,
  InsertButton,
  RemoveButton,
  Description,
  Volume,
  Price,
  BottleIcon,
  TrashIcon,
  ButtonsContainer,
} from './styles';

function Drink({ navigation, route }) {
  const drink = route.params?.drink;
  const [description, setDescription] = useState(drink?.description || '');
  const [volume, setVolume] = useState(drink?.volume || '');
  const [price, setPrice] = useState(drink?.price || '');
  const { drinks, addDrink, updateDrink } = useDrink();

  const handleInsert = useCallback(() => {
    if (!drink) {
      addDrink({ description, volume, price });
    } else {
      updateDrink({ id: drink.id, description, volume, price });
    }
    navigation.goBack();
  }, [navigation, addDrink, description, volume, price, drink, updateDrink]);

  return (
    <Container>
      <HeaderContent>
        <BackButton
          onPress={() => {
            navigation.goBack();
          }}>
          <BackSymbol>{'<'}</BackSymbol>
        </BackButton>
        <Title>{drink ? 'Editar' : 'Adicionar'} bebida</Title>
      </HeaderContent>

      <Content>
        <Description
          placeholder="Descrição"
          value={description}
          onChangeText={(value) => setDescription(value)}
        />

        <Volume
          type="custom"
          mask={'9999'}
          maxLength={4}
          placeholder="Volume (ml)"
          value={volume}
          onChangeText={(value) => setVolume(value)}
        />

        <Price
          type="currency"
          placeholder="Preço"
          value={price}
          unit="R$ "
          maxLength={9}
          onChangeValue={(value) => setPrice(value)}
        />
      </Content>

      <ButtonsContainer>
        <InsertButton Icon={BottleIcon} onPress={handleInsert}>
          {drink ? 'Salvar bebida' : 'Adicionar bebida'}
        </InsertButton>
        <RemoveButton
          Icon={TrashIcon}
          onPress={() => {
            navigation.goBack();
          }}>
          Remover
        </RemoveButton>
      </ButtonsContainer>

      <Modal visible={true} />
    </Container>
  );
}

export default Drink;
