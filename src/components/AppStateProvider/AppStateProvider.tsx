import React, { useState } from 'react'

import AppStateContext from 'services/context/AppStateContext'
import { ChildrenProps } from 'components/LocalizationProvider/LocalizationProvider'

const AppStateProvider: React.FC<ChildrenProps> = ({ children }) => {
  const [state, setChangeState] = useState({ language: 'en', currency: 'USD' })

  const handleChangeStateLanguage = value => {
    setChangeState(prev => ({ ...prev, language: value }))
  }

  const handleChangeStateCurrency = value => {
    setChangeState(prev => ({ ...prev, currency: value }))
  }

  return (
    <AppStateContext.Provider
      value={{ state, handleChangeStateLanguage, handleChangeStateCurrency }}
    >
      {children}
    </AppStateContext.Provider>
  )
}

export default AppStateProvider
