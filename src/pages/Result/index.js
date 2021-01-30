import React, { useEffect, useState } from 'react';

import { useDrink } from '~/hooks/drinks';
import ResultCard from '~/components/ResultCard';

import { Container, BackButton, ResetButton } from './styles';

function Home({ navigation }) {
  const { drinks, reset } = useDrink();
  const [sorted] = useState(
    drinks.sort((a, b) => a.pricePerLiter < b.pricePerLiter),
  );

  return (
    <Container>
      {sorted.map((drink) => (
        <ResultCard key={drink.id} drink={drink} />
      ))}

      <BackButton
        onPress={() => {
          navigation.goBack();
        }}>
        Voltar
      </BackButton>

      <ResetButton
        onPress={() => {
          reset();
          navigation.goBack();
        }}>
        Reset
      </ResetButton>
    </Container>
  );
}

export default Home;
