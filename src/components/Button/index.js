import React from 'react';
import { Container, Text } from './styles';

function Button({ type = 'default', children, Icon, ...rest }) {
  return (
    <Container type={type} {...rest}>
      {!!Icon && <Icon />}
      <Text type={type}>{children}</Text>
    </Container>
  );
}

export default Button;
