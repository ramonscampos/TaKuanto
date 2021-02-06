import React, { useCallback, useState } from 'react';
import { CommonActions } from '@react-navigation/native';

import { useDrink } from '~/hooks/drinks';
import ResultCard from '~/components/ResultCard';

import {
  Container,
  Header,
  WinnerImage,
  Content,
  TitleContainer,
  Title,
  Volume,
  WinnerCard,
  BottleAvatar,
  WinnerCardContent,
  Price,
  WinnerCardDescription,
  ScrollView,
  ResetButton,
  CartIcon,
  BackLinkButton,
  BackIcon,
  BackLinkText,
} from './styles';

function Home({ navigation }) {
  const { drinks, reset } = useDrink();
  const [sorted] = useState(
    drinks.sort((a, b) => a.pricePerLiter > b.pricePerLiter),
  );
  const winner = sorted[0];

  const resetAll = useCallback(() => {
    reset();
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'Start' }],
      }),
    );
  }, [navigation, reset]);

  return (
    <Container>
      <Header>
        <WinnerImage />
      </Header>

      <Content>
        <TitleContainer>
          <Title>{winner.description} Venceu!</Title>
          <Volume>({winner.volume}ml)</Volume>
        </TitleContainer>
        <WinnerCard>
          <BottleAvatar />
          <WinnerCardContent>
            <Price>
              {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(winner.pricePerLiter) + '/Litro'}
            </Price>
            <WinnerCardDescription>Melhor preço 😍</WinnerCardDescription>
          </WinnerCardContent>
        </WinnerCard>
        <ScrollView>
          {sorted
            .filter((x) => x.id !== winner.id)
            .map((drink) => (
              <ResultCard key={drink.id} drink={drink} />
            ))}
        </ScrollView>

        <ResetButton Icon={CartIcon} onPress={resetAll}>
          Iniciar outra comparação
        </ResetButton>
        <BackLinkButton
          onPress={() => {
            navigation.goBack();
          }}>
          <BackIcon />
          <BackLinkText disabled={!drinks.length}>Voltar</BackLinkText>
        </BackLinkButton>
      </Content>
    </Container>
  );
}

export default Home;
