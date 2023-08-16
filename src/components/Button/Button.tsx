import React from 'react'
import { Button as ButtonMui, ButtonProps as ButtonPropsMui } from '@mui/material'

const Button: React.FC<ButtonPropsMui> = ({ size = 'large', ...rest }) => {
  return <ButtonMui variant="contained" size={size} {...rest} />
}

export default Button
