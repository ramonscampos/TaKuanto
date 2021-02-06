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
  const [modalVisible, setModalVisible] = useState(false);
  const [validationMessage, setValidationMessage] = useState('');
  const { drinks, addDrink, updateDrink, removeDrink } = useDrink();

  const handleInsert = useCallback(() => {
    if (!description || !volume || !price) {
      setValidationMessage(
        'O preenchimento de todos os campos são obrigatórios.',
      );
      setModalVisible(true);
      return;
    }

    if (drinks.find((x) => x.description === description)) {
      setValidationMessage('Já existe uma bebida com essa mesma descrição.');
      setModalVisible(true);
      return;
    }

    if (!drink) {
      addDrink({ description, volume, price });
    } else {
      updateDrink({ id: drink.id, description, volume, price });
    }
    navigation.goBack();
  }, [
    navigation,
    addDrink,
    description,
    volume,
    price,
    drink,
    updateDrink,
    drinks,
  ]);

  const handleRemove = useCallback(() => {
    removeDrink(drink);
    navigation.goBack();
  }, [navigation, drink, removeDrink]);

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
        <RemoveButton Icon={TrashIcon} onPress={handleRemove}>
          Remover
        </RemoveButton>
      </ButtonsContainer>

      <Modal
        visible={modalVisible}
        close={() => {
          setModalVisible(false);
        }}
        title="Ops!"
        text={validationMessage}
      />
    </Container>
  );
}

export default Drink;
