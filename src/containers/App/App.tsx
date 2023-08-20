import React from 'react'

import 'i18n/config'

import Router from 'router'
import LocalizationProvider from 'components/LocalizationProvider'
import AppStateProvider from 'components/AppStateProvider'
import ThemeProvider from 'components/ThemeProvider'
import ScrollUpButton from 'components/ScrollUpButton'

const App: React.FC = () => {
  return (
    <AppStateProvider>
      <ThemeProvider>
        <LocalizationProvider>
          <ScrollUpButton>
            <Router />
          </ScrollUpButton>
        </LocalizationProvider>
      </ThemeProvider>
    </AppStateProvider>
  )
}

export default App
