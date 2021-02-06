import styled from 'styled-components';

export const ModalView = styled.Modal.attrs({
  animationType: 'fade',
  transparent: true,
})`
  background: red;
`;

export const Backdrop = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
  background: rgba(0, 0, 0, 0.4);
`;

export const Container = styled.View`
  background: white;
  width: 80%;
  height: 300px;
`;
