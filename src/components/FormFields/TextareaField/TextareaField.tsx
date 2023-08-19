import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { TextareaStyled, TextareaFieldBlock } from './style'
import { ErrorMessage, FieldLabel } from '../InputField/style'

interface TextareaFieldProps {
  name: string
  value: string
  onChange: (e) => void
  label?: string
  placeholder?: string
  startAdornment?: React.ReactNode
  endAdornment?: React.ReactNode
  errorMessage?: string
  required?: boolean
  maxWidth?: number
}

const TextareaField: React.FC<TextareaFieldProps> = props => {
  const { value, name, placeholder, onChange, label, required, errorMessage, maxWidth } = props
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
      <FieldLabel>{label}</FieldLabel>
      <TextareaFieldBlock focus={focus} mouseEnter={mouseEnter} maxWidth={maxWidth}>
        <TextareaStyled
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          onFocus={handleChangeFocus}
          onBlur={handleChangeFocus}
          onMouseEnter={handleChangeMouseEnter}
          onMouseLeave={handleChangeMouseEnter}
        />
      </TextareaFieldBlock>
      {errorMessage ? <ErrorMessage>{t(errorMessage)}</ErrorMessage> : null}
    </div>
  )
}

export default TextareaField
