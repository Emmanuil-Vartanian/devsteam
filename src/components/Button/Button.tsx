import React from 'react'
import { ButtonProps as ButtonPropsMui } from '@mui/material'

import { ButtonStyled } from './style'

interface ButtonProps {
  justifyContent?: 'start' | 'end' | 'center'
}

const Button: React.FC<ButtonPropsMui & ButtonProps> = ({
  justifyContent = 'center',
  size = 'large',
  ...rest
}) => {
  return <ButtonStyled variant="contained" size={size} justifyContent={justifyContent} {...rest} />
}

export default Button
