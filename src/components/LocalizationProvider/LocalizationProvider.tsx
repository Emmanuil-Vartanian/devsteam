import React, { useContext, useEffect } from 'react'

import { useTranslation } from 'react-i18next'

import LanguageStateContext from 'services/context/languageStateContext'

export interface ChildrenProps {
  children: React.ReactElement
}

const LocalizationProvider: React.FC<ChildrenProps> = ({ children }) => {
  const { currentLanguage } = useContext(LanguageStateContext)
  const { i18n } = useTranslation()

  useEffect(() => {
    if (currentLanguage) {
      i18n.changeLanguage(currentLanguage)
    }
  }, [currentLanguage])

  return <>{children}</>
}

export default LocalizationProvider
