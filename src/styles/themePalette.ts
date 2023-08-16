import { PaletteOptions } from '@mui/material'

type ThemePalettePocketType = {
  devsteam: Record<string, any>
}

export type ThemePaletteType = {
  palette: PaletteOptions & ThemePalettePocketType
}

const themePalette: ThemePaletteType = {
  palette: {
    devsteam: {
      common: {
        black: '#000',
        white: '#fff',
        red: '#FF0000',
        green: '#27CD27',
        orange: '#FF9800'
      },
      main: {
        text: '#323232'
      },
      primary: {
        '80': '#a0a8e6',
        '90': '#4151CD',
        '100': '#001AE1'
      },
      additional: {
        background: '#FDFDFD',
        cardsBackground: '#05043E'
      },
      grey: {
        '1': '#D9D9D9',
        '2': '#9CA5B0',
        '3': '#737373',
        dark: '#212121',
        black: '#00031A'
      },
      other: {
        stroke: '#D2D7FF'
      }
    }
  }
}

export default themePalette
