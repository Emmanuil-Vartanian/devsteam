import { PaletteOptions } from '@mui/material'

type ThemePalettePocketType = {
  pocket: Record<string, any>
}

export type ThemePaletteType = {
  palette: PaletteOptions & ThemePalettePocketType
}

const themePalette: ThemePaletteType = {
  palette: {
    pocket: {
      common: {
        black: '#000',
        white: '#fff',
        red: '#FF0000',
        green: '#27CD27',
        orange: '#FF9800'
      },
      primary: {
        '5': '#f3f8fd',
        '10': '#F5F5FF',
        '30': '#C6C5F7',
        '40': '#b7b6f9',
        '80': '#373665',
        '90': '#5755f3',
        '100': '#504EF3'
      },
      menu: {
        '90': '#1E1D51',
        '100': '#05043E'
      },
      grey: {
        '2': '#FCFCFC',
        '3': '#F8F8F8',
        '5': '#F4F4F4',
        '10': '#E9E9E9',
        '15': '#E0E0E0',
        '20': '#69688b',
        '40': '#afafb0',
        '50': '#999999',
        '70': '#6D6D6D',
        '100': '#212121'
      },
      colorStatus: palette => ({
        ACTIVE: palette.pocket.common.green,
        NOT_ACTIVE: palette.pocket.common.red
      })
    }
  }
}

export default themePalette
