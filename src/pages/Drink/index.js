import React, { useCallback, useState } from 'react';
import { useDrink } from '~/hooks/drinks';
import {
  Container,
  InsertButton,
  BackButton,
  Description,
  Volume,
  Price,
} from './styles';

function Drink({ navigation, route }) {
  const drink = route.params?.drink;
  const [description, setDescription] = useState(drink?.description || '');
  const [volume, setVolume] = useState(drink?.volume || '');
  const [price, setPrice] = useState(drink?.price || '');
  const { addDrink, updateDrink } = useDrink();

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

      <InsertButton onPress={handleInsert}>
        {drink ? 'Salvar' : 'Inserir'}
      </InsertButton>
      <BackButton
        onPress={() => {
          navigation.goBack();
        }}>
        Voltar
      </BackButton>
    </Container>
  );
}

export default Drink;
