import React from 'react';
import { Container, Text } from './styles';

function Button({ type = 'default', textStyle, children, Icon, ...rest }) {
  return (
    <Container type={type} {...rest}>
      {!!Icon && <Icon />}
      <Text style={textStyle} type={type}>
        {children}
      </Text>
    </Container>
  );
}

export default Button;
