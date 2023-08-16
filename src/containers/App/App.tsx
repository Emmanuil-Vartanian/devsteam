import React from 'react'

import 'i18n/config'

import Router from 'router'
import LocalizationProvider from 'components/LocalizationProvider'
import LanguageStateProvider from 'components/LanguageStateProvider'

const App: React.FC = () => {
  return (
    <div>
      <LanguageStateProvider>
        <LocalizationProvider>
          <Router />
        </LocalizationProvider>
      </LanguageStateProvider>
    </div>
  )
}

export default App
