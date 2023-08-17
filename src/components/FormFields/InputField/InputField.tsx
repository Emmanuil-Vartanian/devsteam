import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { ErrorMessage, InputStyled, InputFieldBlock } from './style'

interface InputFieldProps {
  name: string
  value: string
  onChange: (e) => void
  label?: string
  type?: 'text' | 'number'
  placeholder?: string
  startAdornment?: React.ReactNode
  endAdornment?: React.ReactNode
  errorMessage?: string
  required?: boolean
  maxWidth?: number
}

const InputField: React.FC<InputFieldProps> = props => {
  const {
    value,
    name,
    placeholder,
    onChange,
    type,
    label,
    startAdornment,
    endAdornment,
    required,
    errorMessage,
    maxWidth
  } = props
  const { t } = useTranslation()
  const [focus, setFocus] = useState(false)
  const [mouseEnter, setMouseEnter] = useState(false)

  const handleChangeFocus = () => {
    if (focus) {
      setFocus(false)
    } else {
      setFocus(true)
    }
  }

  const handleChangeMouseEnter = () => {
    if (mouseEnter) {
      setMouseEnter(false)
    } else {
      setMouseEnter(true)
    }
  }

  return (
    <div>
      <div>{label}</div>
      <InputFieldBlock focus={focus} mouseEnter={mouseEnter} maxWidth={maxWidth}>
        {startAdornment}
        <InputStyled
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          type={type}
          required={required}
          onFocus={handleChangeFocus}
          onBlur={handleChangeFocus}
          onMouseEnter={handleChangeMouseEnter}
          onMouseLeave={handleChangeMouseEnter}
        />
        {endAdornment}
      </InputFieldBlock>
      {errorMessage ? <ErrorMessage>{t(errorMessage)}</ErrorMessage> : null}
    </div>
  )
}

export default InputField
