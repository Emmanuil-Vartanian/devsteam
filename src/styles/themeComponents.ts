const ownerStateStyle = (
  ownerState: Record<string, any>,
  variant: string,
  color: string,
  style: Record<string, any>
): Record<string, any> => {
  return ownerState.variant === variant && ownerState.color === color && style
}

const themeComponents = {
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ theme: { palette }, ownerState }) => ({
          borderRadius: 8,
          boxShadow: 'none',
          padding: '15px 16px',
          fontSize: '16px',
          ...ownerStateStyle(ownerState, 'contained', 'primary', {
            backgroundColor: palette.devsteam.primary['90'],
            color: palette.devsteam.common.white,
            '&:hover': {
              backgroundColor: `${palette.devsteam.primary['100']}`,
              boxShadow: 'none'
            }
          }),
          ...ownerStateStyle(ownerState, 'text', 'primary', {
            color: palette.devsteam.primary['90'],
            padding: '8px 0',
            maxWidth: '178px',
            width: '100%',
            borderBottom: '1px solid #4151cd',
            borderRadius: 0
          }),
          '&.Mui-disabled': {
            cursor: 'not-allowed',
            pointerEvents: 'auto',
            ...ownerStateStyle(ownerState, 'contained', 'primary', {
              color: palette.devsteam.common.white,
              backgroundColor: palette.devsteam.primary['80']
            })
          }
        })
      }
    },
    MuiTabPanel: {
      styleOverrides: {
        root: {
          padding: '32px 24px 0 16px'
        }
      }
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          minHeight: '34px'
        },
        flexContainer: ({ theme: { palette } }) => ({
          '.MuiButtonBase-root': {
            padding: '8px',
            color: palette.devsteam.grey['2'],
            minHeight: '34px',
            minWidth: '131px',
            '&.Mui-selected': {
              color: palette.devsteam.primary['90']
            }
          }
        }),
        indicator: ({ theme: { palette } }) => ({
          backgroundColor: palette.devsteam.primary['90']
        })
      }
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: '#D2D7FF',
          '&.Mui-checked': {
            color: '#4151CD'
          }
        }
      }
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          '>.MuiTypography-root': {
            color: '#212121',
            fontFamily: 'Manrope',
            fontSize: '16px',
            fontWeight: 600,
            lineHeight: '140%'
          }
        }
      }
    }
  }
}

export default themeComponents
