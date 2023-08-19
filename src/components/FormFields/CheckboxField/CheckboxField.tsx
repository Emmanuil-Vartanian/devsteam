import React, { useState } from 'react'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'

type OptionsType = {
  name: string
  label: string
  checked: boolean
}

interface CheckboxFieldProps {
  options: OptionsType[]
  onChange: (data) => void
}

const CheckboxField: React.FC<CheckboxFieldProps> = props => {
  const { options, onChange } = props

  const handleChange = event => {
    const checked = event.target.checked
    const name = event.target.name

    if (typeof onChange === 'function') {
      onChange({ name, checked })
    }
  }

  return (
    <FormGroup {...props}>
      {options.map(({ name, label, checked }, index) => {
        return (
          <FormControlLabel
            key={index}
            control={<Checkbox name={name} checked={checked} onChange={handleChange} />}
            label={label}
          />
        )
      })}
    </FormGroup>
  )
}

export default CheckboxField
