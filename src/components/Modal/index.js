import React from 'react';

import {
  ModalView,
  Backdrop,
  TitleContainer,
  Title,
  Container,
  Content,
  Text,
  OKButton,
} from './styles';

function Modal({ close, title, text, ...rest }) {
  return (
    <ModalView {...rest}>
      <Backdrop>
        <Container>
          <TitleContainer>
            <Title>{title}</Title>
          </TitleContainer>
          <Content>
            <Text>{text}</Text>
          </Content>
          <OKButton onPress={close}>OK</OKButton>
        </Container>
      </Backdrop>
    </ModalView>
  );
}

export default Modal;
