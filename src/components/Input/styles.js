import styled from 'styled-components/native';
import { TextInputMask } from 'react-native-masked-text';
import CI from 'react-native-currency-input';
import { colors } from '~/styles/index';

export const Container = styled.View`
  background: ${colors.lighter};
  border-radius: 8px;
`;

export const TextInput = styled.TextInput.attrs({
  placeholderTextColor: colors.textColor,
})`
  color: ${colors.textColor};
  width: 100%;
  height: 55px;
  border-radius: 8px;
  padding: 0 10px;
  font-family: 'Poppins';
`;

export const MaskedInput = styled(TextInputMask).attrs({
  placeholderTextColor: colors.textColor,
})`
  color: ${colors.textColor};
  width: 100%;
  height: 55px;
  border-radius: 8px;
  padding: 0 10px;
`;

export const CurrencyInput = styled(CI).attrs({
  placeholderTextColor: colors.textColor,
})`
  color: ${colors.textColor};
  width: 100%;
  height: 55px;
  border-radius: 8px;
  padding: 0 10px;
`;
