import styled, { css } from 'styled-components/native';
import { colors } from '~/styles/index';

export const Container = styled.TouchableOpacity`
  border-radius: 15px;
  padding: 5px;
  justify-content: center;
  align-items: center;
  height: 60px;
  background: ${colors.secondary};
  flex-direction: row;

  ${(props) => {
    if (props.type === 'inverse') {
      return css`
        background: rgba(123, 147, 28, 0.1);
      `;
    }

    if (props.disabled) {
      return css`
        background: ${colors.dark};
      `;
    }
  }}
`;

export const Text = styled.Text`
  font-family: 'Poppins-Bold';
  color: #fff;

  ${(props) => {
    if (props.type === 'inverse') {
      return css`
        color: ${colors.secondary};
      `;
    }
  }}
`;
