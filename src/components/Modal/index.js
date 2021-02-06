import React from 'react';

import { ModalView, Backdrop, Container } from './styles';

function Modal({ ...rest }) {
  return (
    <ModalView visible={true}>
      <Backdrop blurRadius={1}>
        <Container />
      </Backdrop>
    </ModalView>
  );
}

export default Modal;
