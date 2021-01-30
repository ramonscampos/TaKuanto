import React from 'react';
import { Container, TextInput, MaskedInput, CurrencyInput } from './styles';

function Input({ type = 'text', style, inputStyle, mask, ...rest }) {
  if (type === 'currency') {
    return (
      <Container style={style}>
        <CurrencyInput
          delimiter="."
          separator=","
          style={inputStyle}
          {...rest}
        />
      </Container>
    );
  }

  if (type === 'text') {
    return (
      <Container style={style}>
        <TextInput style={inputStyle} {...rest} />
      </Container>
    );
  }

  return (
    <Container style={style}>
      <MaskedInput
        type={type}
        style={inputStyle}
        {...rest}
        options={{ mask }}
      />
    </Container>
  );
}

export default Input;
