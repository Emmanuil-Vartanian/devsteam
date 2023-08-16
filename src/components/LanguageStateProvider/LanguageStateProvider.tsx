import React, { useState } from 'react'

import LanguageStateContext from 'services/context/languageStateContext'
import { ChildrenProps } from 'components/LocalizationProvider/LocalizationProvider'

const LanguageStateProvider: React.FC<ChildrenProps> = ({ children }) => {
  const [currentLanguage, setTablePagination] = useState('EN')

  const handleChangeStateLanguage = language => {
    setTablePagination(language)
  }

  return (
    <LanguageStateContext.Provider value={{ currentLanguage, handleChangeStateLanguage }}>
      {children}
    </LanguageStateContext.Provider>
  )
}

export default LanguageStateProvider
