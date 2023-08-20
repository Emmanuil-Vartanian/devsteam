import React, { useState } from 'react'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import { useTranslation } from 'react-i18next'

type OptionsType = {
  name: string
  checked: boolean
}

interface CheckboxFieldProps {
  options: OptionsType[]
  label: string
  onChange: (data) => void
}

const CheckboxField: React.FC<CheckboxFieldProps> = props => {
  const { t } = useTranslation()

  const { options, label, onChange } = props

  const handleChange = event => {
    const checked = event.target.checked
    const name = event.target.name

    if (typeof onChange === 'function') {
      onChange({ name, checked })
    }
  }

  return (
    <FormGroup {...props}>
      {options.map(({ name, checked }, index) => (
        <FormControlLabel
          key={index}
          control={<Checkbox name={name} checked={checked} onChange={handleChange} />}
          label={t(`${label}.${name}`)}
        />
      ))}
    </FormGroup>
  )
}

export default CheckboxField
