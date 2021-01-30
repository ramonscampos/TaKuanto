import styled from 'styled-components/native';
import { TextInputMask } from 'react-native-masked-text';
import CI from 'react-native-currency-input';

export const Container = styled.View`
  border: 1px solid black;
  border-radius: 4px;
`;

export const TextInput = styled.TextInput`
  width: 100%;
  height: 40px;
  border-radius: 4px;
  padding: 0 10px;
`;

export const MaskedInput = styled(TextInputMask)`
  width: 100%;
  height: 40px;
  border-radius: 4px;
  padding: 0 10px;
`;

export const CurrencyInput = styled(CI)`
  width: 100%;
  height: 40px;
  border-radius: 4px;
  padding: 0 10px;
`;
