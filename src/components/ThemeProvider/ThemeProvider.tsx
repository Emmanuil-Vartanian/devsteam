import React, { useContext, useMemo } from 'react'
import { createTheme, ThemeProvider as Provider } from '@mui/material/styles'
import * as locales from '@mui/material/locale'

import theme from 'styles/theme'
import { THEME_LOCAL } from 'constants/themeLocal'
import { ChildrenProps } from 'components/LocalizationProvider/LocalizationProvider'
import LanguageStateContext from 'services/context/AppStateContext'

const ThemeProvider: React.FC<ChildrenProps> = ({ children }) => {
  const { currentLanguage } = useContext(LanguageStateContext)

  const themeWithLocale = useMemo(
    () => createTheme(theme, locales[THEME_LOCAL[currentLanguage]]),
    [THEME_LOCAL[currentLanguage], theme]
  )

  return <Provider theme={themeWithLocale}>{children}</Provider>
}

export default ThemeProvider
