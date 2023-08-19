import { createTheme } from '@mui/material/styles'

import themePalette from './themePalette'
import themeComponents from './themeComponents'

const theme = createTheme({
  ...themeComponents,
  ...themePalette,
  typography: (palette: Record<string, any>) => ({
    h1: {
      fontFamily: '"Manrope", sans-serif',
      fontWeight: 600,
      fontSize: '56px',
      lineHeight: '110%',
      letterSpacing: '0.56px',
      color: palette.devsteam.grey.black
    },
    h2: {
      fontFamily: '"Manrope", sans-serif',
      fontWeight: 600,
      fontSize: '48px',
      lineHeight: '110%',
      letterSpacing: '0px',
      color: palette.devsteam.grey.black
    },
    h3: {
      fontFamily: '"Manrope", sans-serif',
      fontWeight: 600,
      fontSize: '30px',
      lineHeight: '120%',
      letterSpacing: '0px',
      color: palette.devsteam.grey.black
    },
    h4: {
      fontFamily: '"Manrope", sans-serif',
      fontWeight: 600,
      fontSize: '22px',
      lineHeight: '140%',
      letterSpacing: '0px',
      color: palette.devsteam.grey.black
    },
    button: {
      fontFamily: '"Manrope", sans-serif',
      fontWeight: 700,
      fontSize: '16px',
      lineHeight: '18px',
      letterSpacing: '0px',
      textTransform: 'none'
    }
  })
})

export default theme
