import React from 'react'
import { ButtonContainer } from './styles';
import { IButton } from './types';

// eslint-disable-next-line react/prop-types
const Button = ({title, variant='primary', onClick}: IButton) => {
  return (
    <ButtonContainer variant={variant} onClick={onClick}>
        {title}
    </ButtonContainer>
  )
}

export { Button }