import React from 'react'
import { CheckboxProps } from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'

import { CheckboxFormControlStyled, CheckboxStyled } from './style'

interface InputFieldProps {
  name: string
  label?: string
  onHandleChange?: any
  disabled?: boolean
}

type Props = InputFieldProps & CheckboxProps

const CheckboxField: React.FC<Props> = props => {
  const { name, label, onHandleChange, disabled } = props

  const handleChange = onChange => event => {
    onChange(event)

    if (typeof onHandleChange === 'function') {
      onHandleChange(event)
    }
  }

  return (
    <div>
      <CheckboxFormControlStyled>
        <FormControlLabel
          control={
            <CheckboxStyled
            // checked={props.input.checked}
            // onChange={handleChange(props.input.onChange)}
            // name={props.input.name}
            // color={'primary'}
            // disabled={disabled}
            />
          }
          label={label}
        />
      </CheckboxFormControlStyled>
    </div>
  )
}

export default CheckboxField
