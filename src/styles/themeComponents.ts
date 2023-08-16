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
        root: ({ theme: { palette, spacing }, ownerState }) => ({
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
          // ...ownerStateStyle(ownerState, 'outlined', 'primary', {
          //   // backgroundColor: palette.devsteam.common.white,
          //   color: palette.devsteam.primary['100'],
          //   border: `1px solid ${palette.devsteam.primary['100']}`,
          //   ':hover': {
          //     // color: palette.devsteam.common.white,
          //     border: `1px solid ${palette.devsteam.primary['100']}`
          //   }
          // }),
          ...ownerStateStyle(ownerState, 'text', 'primary', {
            color: palette.devsteam.primary['90']
          }),
          '&.Mui-disabled': {
            cursor: 'not-allowed',
            pointerEvents: 'auto',
            ...ownerStateStyle(ownerState, 'contained', 'primary', {
              color: palette.devsteam.common.white,
              backgroundColor: palette.devsteam.primary['80']
            })
            // ...ownerStateStyle(ownerState, 'outlined', 'primary', {
            //   color: palette.devsteam.primary['40'],
            //   borderColor: palette.devsteam.primary['40'],
            //   '&:hover': {
            //     // backgroundColor: `${palette.devsteam.common.white} !important`
            //   }
            // })
          }
        })
      }
    }
  }
}

export default themeComponents
