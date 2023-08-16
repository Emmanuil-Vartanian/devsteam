import React, { useContext, useEffect } from 'react'

import { useTranslation } from 'react-i18next'

import LanguageStateContext from 'services/context/AppStateContext'

export interface ChildrenProps {
  children: React.ReactElement
}

const LocalizationProvider: React.FC<ChildrenProps> = ({ children }) => {
  const { state } = useContext(LanguageStateContext)
  const { i18n } = useTranslation()

  useEffect(() => {
    if (state.language) {
      i18n.changeLanguage(state.language)
    }
  }, [state.language])

  return <>{children}</>
}

export default LocalizationProvider
