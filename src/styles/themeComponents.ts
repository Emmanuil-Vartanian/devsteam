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
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme: { palette, spacing } }) => ({
          minHeight: spacing(11),
          background: palette.pocket.common.white,
          borderRadius: spacing(1),
          '&:hover': {
            '.MuiOutlinedInput-notchedOutline': {
              borderColor: palette.pocket.primary['100']
            }
          },
          '&.Mui-focused': {
            '.MuiOutlinedInput-notchedOutline': {
              borderColor: palette.pocket.primary['100']
            },
            '.MuiOutlinedInput-input': {
              caretColor: palette.pocket.primary['100']
            }
          },
          '&.Mui-error': {
            '.MuiOutlinedInput-notchedOutline': {
              borderColor: palette.pocket.common.red,
              borderWidth: 2
            }
          },
          '&.Mui-disabled': {
            background: palette.pocket.grey['3'],
            '.MuiOutlinedInput-notchedOutline': {
              borderColor: palette.pocket.grey['15']
            },
            '.MuiOutlinedInput-input': {
              cursor: 'not-allowed'
            }
          },
          '&.MuiInputBase-adornedStart': {
            paddingLeft: spacing(3)
          },
          '.MuiInputBase-inputAdornedStart': {
            paddingLeft: spacing(3)
          },
          '&.table-select': {
            '.MuiSelect-select': {
              fontSize: '11px'
            }
          }
        }),
        input: ({ theme: { spacing }, ownerState }) => ({
          padding: `${spacing(3)} 14px`,
          fontSize: '13px',
          ...(ownerState?.placeholder && {
            padding: spacing(3),
            maxWidth: 'calc(88% - 20px)',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          })
        }),
        notchedOutline: ({ theme: { palette, spacing } }) => ({
          borderColor: palette.pocket.grey['15'],
          borderRadius: spacing(1),
          '&:hover': {
            borderColor: palette.pocket.common.red
          },
          '> legend > span': {
            fontSize: '9px'
          }
        })
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: ({ theme: { palette } }) => ({
          left: 0,
          color: palette.pocket.grey['50'],
          lineHeight: '12px',
          fontSize: 12,
          letterSpacing: '0.4px',
          maxWidth: 'calc(88% - 20px)',
          '&.Mui-focused': {
            color: palette.pocket.primary['100'],
            '&.table-select-lable': {
              transform: 'translate(10px, -9px) scale(0.75)'
            }
          },
          '&.Mui-error': {
            color: palette.pocket.common.red
          },
          '&.table-select-lable': {
            fontSize: 12,
            lineHeight: '16px',
            transform: 'translate(10px, 8px) scale(1)',
            '&.MuiInputLabel-shrink': {
              transform: 'translate(12px, -6px) scale(0.75)'
            }
          }
        }),
        shrink: ({ theme: { spacing } }) => ({
          fontSize: 12,
          padding: spacing(0),
          lineHeight: '24px'
        })
      }
    },
    MuiButton: {
      styleOverrides: {
        root: ({ theme: { palette, spacing }, ownerState }) => ({
          minWidth: spacing(14),
          borderRadius: 4,
          boxShadow: 'none',
          lineHeight: '20px',
          ...(ownerState.size === 'large' && {
            padding: `${spacing(3)} ${spacing(6)}`,
            fontSize: '12px'
          }),
          ...(ownerState.size === 'medium' && {
            padding: spacing(4)
          }),
          ...(ownerState.size === 'small' && {
            padding: `${spacing(2)} ${spacing(3)}`,
            minWidth: spacing(8),
            height: spacing(8),
            letterSpacing: '0.1px',
            fontSize: '12px',
            '.MuiButton-startIcon': {
              marginRight: spacing(1),
              marginLeft: spacing(-2),
              fontSize: '16px'
            },
            '&.MuiButton-root': {
              textTransform: 'none'
            },
            '.MuiSvgIcon-root': {
              fontSize: '16px'
            }
          }),
          ...(ownerState.startIcon && {
            padding: `${spacing(3)} ${spacing(4)}`
          }),
          ...ownerStateStyle(ownerState, 'contained', 'primary', {
            backgroundColor: palette.pocket.primary['100'],
            color: palette.pocket.common.white,
            '&:hover': {
              backgroundColor: `${palette.pocket.primary['90']} !important`
            }
          }),
          ...ownerStateStyle(ownerState, 'outlined', 'primary', {
            backgroundColor: palette.pocket.common.white,
            color: palette.pocket.primary['100'],
            border: `1px solid ${palette.pocket.primary['100']}`,
            ':hover': {
              color: palette.pocket.common.white,
              border: `1px solid ${palette.pocket.primary['100']}`
            }
          }),
          ...ownerStateStyle(ownerState, 'text', 'primary', {
            color: palette.pocket.primary['100'],
            padding: '0px',
            ':hover': {
              backgroundColor: 'inherit !important'
            }
          }),
          '&:hover': {
            boxShadow: 'none',
            backgroundColor: palette.pocket.primary['90']
          },
          '&.Mui-disabled': {
            cursor: 'not-allowed',
            pointerEvents: 'auto',
            ...ownerStateStyle(ownerState, 'contained', 'primary', {
              color: palette.pocket.common.white,
              backgroundColor: palette.pocket.primary['40']
            }),
            ...ownerStateStyle(ownerState, 'outlined', 'primary', {
              color: palette.pocket.primary['40'],
              borderColor: palette.pocket.primary['40'],
              '&:hover': {
                backgroundColor: `${palette.pocket.common.white} !important`
              }
            })
          }
        }),
        startIcon: {
          marginLeft: '0px',
          '&>*:nth-of-type(1)': {
            fontSize: 20
          }
        }
      }
    },
    MuiCheckbox: {
      styleOverrides: {
        root: ({ theme: { palette } }) => ({
          ':hover': {
            backgroundColor: palette.pocket.primary['5']
          },
          color: palette.pocket.grey['50'],
          '&.Mui-checked': {
            color: palette.pocket.primary['100']
          },
          '&.Mui-disabled': {
            color: palette.pocket.grey['40']
          }
        })
      }
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          '&.Mui-disabled': {
            cursor: 'not-allowed'
          }
        },
        label: ({ theme: { palette, spacing } }) => ({
          color: palette.pocket.grey['50'],
          height: spacing(5)
        })
      }
    },
    MuiLink: {
      styleOverrides: {
        root: ({ theme: { palette } }) => ({
          textDecoration: 'none',
          color: palette.pocket.primary['100'],
          '&:hover': {
            color: palette.pocket.primary['90']
          }
        })
      }
    },
    MuiDrawer: {
      styleOverrides: {
        paper: ({ theme: { palette } }) => ({
          backgroundColor: palette.pocket.menu['100'],
          display: 'block'
        })
      }
    },
    MuiDialog: {
      styleOverrides: {
        paper: ({ theme: { palette, spacing } }) => ({
          margin: `${spacing(8)} ${spacing(15)}`,
          maxWidth: spacing(389),
          borderRadius: spacing(4),
          '.MuiDialogTitle-root': {
            fontWeight: 500,
            fontSize: 32,
            lineHeight: '40px',
            textAlign: 'center',
            color: palette.pocket.grey['100'],
            padding: `${spacing(8)} ${spacing(10)} ${spacing(6)}`
          },
          '.MuiDialogContent-root': {
            padding: `${spacing(0)} ${spacing(10)}`,
            marginBottom: spacing(8),
            border: 'none'
          }
        })
      }
    },
    MuiCircularProgress: {
      styleOverrides: {
        root: ({ theme: { palette, spacing } }) => ({
          color: palette.pocket.primary['100'],
          marginBottom: spacing(4)
        })
      }
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: ({ theme: { palette } }) => ({
          backgroundColor: palette.pocket.primary['30']
        }),
        bar1Indeterminate: ({ theme: { palette } }) => ({
          backgroundColor: palette.pocket.primary['100']
        }),
        bar2Indeterminate: ({ theme: { palette } }) => ({
          backgroundColor: palette.pocket.primary['100']
        })
      }
    },
    MuiSelect: {
      styleOverrides: {
        root: ({ theme: { spacing } }) => ({
          '&.table-select': {
            minHeight: 'auto',
            '.MuiSelect-select': {
              padding: `${spacing(1)} ${spacing(9)} ${spacing(1)} ${spacing(3)}`,
              paddingRight: spacing(9),
              lineHeight: '24px'
            }
          }
        }),
        icon: ({ theme: { palette } }) => ({
          color: palette.pocket.grey['50']
        })
      }
    },
    MuiPickersDay: {
      styleOverrides: {
        root: ({ theme: { palette, spacing } }) => ({
          fontSize: '12px',
          width: spacing(8),
          height: spacing(8),
          margin: '0 2px',
          '&:hover': {
            backgroundColor: palette.pocket.primary['30']
          },
          '&.Mui-selected': {
            backgroundColor: palette.pocket.primary['100'],
            fontWeight: 400,
            '&:hover': {
              backgroundColor: palette.pocket.primary['100']
            }
          },
          '&.MuiPickersDay-dayOutsideMonth': {
            color: palette.pocket.grey['50']
          }
        }),
        today: ({ theme: { palette } }) => ({
          ':not(.Mui-selected)': {
            border: `1px solid ${palette.pocket.primary['100']}`
          }
        })
      }
    },
    MuiCalendarPicker: {
      styleOverrides: {
        root: ({ theme: { spacing } }) => ({
          width: spacing(70),
          '>div:first-of-type': {
            marginTop: spacing(2),
            minHeight: spacing(6),
            maxHeight: spacing(6),
            '.MuiButtonBase-root': {
              width: spacing(6),
              height: spacing(6)
            }
          },
          '.PrivatePickersSlideTransition-root': {
            minHeight: spacing(52)
          }
        }),
        viewTransitionContainer: ({ theme: { palette, spacing } }) => ({
          '.MuiTypography-root': {
            fontSize: '12px',
            lineHeight: '20px',
            letterSpacing: '0.25px',
            color: palette.pocket.grey['100'],
            width: spacing(8),
            height: spacing(8)
          }
        })
      }
    },
    MuiMonthPicker: {
      styleOverrides: {
        root: ({ theme: { palette, spacing } }) => ({
          width: spacing(60),
          '.MuiTypography-root': {
            '&:hover': {
              backgroundColor: palette.pocket.primary['30']
            },
            '&.Mui-selected': {
              backgroundColor: palette.pocket.primary['100'],
              fontWeight: 400,
              '&:hover': {
                backgroundColor: palette.pocket.primary['100']
              }
            }
          }
        })
      }
    },
    MuiYearPicker: {
      styleOverrides: {
        root: ({ theme: { palette, spacing } }) => ({
          margin: '0px',
          '.PrivatePickersYear': {
            '&-root': {
              flexBasis: 'auto'
            },
            '&-yearButton': {
              margin: `${spacing(1)} 0px`,
              width: spacing(12),
              height: spacing(8),
              fontSize: '14px',
              '&:hover': {
                backgroundColor: palette.pocket.primary['30']
              },
              '&.Mui-selected': {
                backgroundColor: palette.pocket.primary['100'],
                fontWeight: 400,
                '&:hover': {
                  backgroundColor: palette.pocket.primary['100']
                }
              }
            }
          }
        })
      }
    },
    MuiChip: {
      styleOverrides: {
        root: ({ theme: { palette, spacing } }) => ({
          backgroundColor: palette.pocket.grey['15'],
          border: 'none',
          height: spacing(6),
          padding: `${spacing(1)} ${spacing(2)} ${spacing(1)} ${spacing(3)}`,
          '&.MuiAutocomplete-tag': {
            margin: `0px ${spacing(2)} 0px 0px`
          }
        }),
        label: ({ theme: { palette, spacing } }) => ({
          paddingLeft: '0px',
          paddingRight: '0px',
          fontSize: '12px',
          lineHeight: '20px',
          letterSpacing: '0.25px',
          color: palette.pocket.grey['100'],
          maxWidth: spacing(34)
        }),
        deleteIcon: ({ theme: { palette, spacing } }) => ({
          margin: `0px 0px 0px ${spacing(2)}`,
          color: palette.pocket.primary['100'],
          fontSize: '18px',
          ':hover': {
            color: palette.pocket.primary['90']
          }
        })
      }
    },
    MuiStepConnector: {
      styleOverrides: {
        root: {
          top: '11px',
          left: '0%',
          right: '-2%'
        }
      }
    },
    MuiStepLabel: {
      styleOverrides: {
        root: {
          display: 'block'
        },
        iconContainer: ({ theme: { palette, spacing } }) => ({
          '> div': {
            zIndex: 1,
            width: spacing(7),
            height: spacing(7),
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%',
            '> svg': {
              color: palette.pocket.common.white
            }
          }
        }),
        label: ({ theme: { spacing } }) => ({
          fontSize: '13px',
          '&.MuiStepLabel-alternativeLabel': {
            textAlign: 'start',
            marginTop: spacing(3)
          }
        })
      }
    },
    MuiStep: {
      styleOverrides: {
        root: ({ theme: { palette, spacing } }) => ({
          paddingLeft: 0,
          paddingRight: spacing(8),
          '.MuiStepConnector-root': {
            '.MuiStepConnector-line': {
              borderTopWidth: '6px',
              borderRadius: spacing(10)
            }
          },
          '&.statusDone': {
            '.MuiStepConnector-line': {
              borderColor: palette.pocket.common.green
            },
            '.MuiStepLabel-iconContainer > div': {
              background: palette.pocket.common.green
            }
          },
          '&.statusCurrent': {
            '.MuiStepConnector-line': {
              borderColor: palette.pocket.common.orange
            },
            '.MuiStepLabel-iconContainer > div': {
              background: palette.pocket.common.orange
            }
          },
          '&.statusStopped': {
            '.MuiStepConnector-line': {
              borderColor: palette.pocket.common.red
            },
            '.MuiStepLabel-iconContainer > div': {
              background: palette.pocket.common.red
            }
          },
          '&.statusNotActive': {
            '.MuiStepConnector-line': {
              borderColor: palette.pocket.grey['50']
            },
            '.MuiStepLabel-iconContainer > div': {
              border: `4px solid ${palette.pocket.grey['50']}`,
              background: palette.pocket.common.white
            }
          }
        })
      }
    },
    MuiTabs: {
      styleOverrides: {
        flexContainer: ({ theme: { palette, spacing } }) => ({
          '> button': {
            padding: `${spacing(3)} ${spacing(10)}`,
            lineHeight: '16px',
            color: palette.pocket.grey['50'],
            fontSize: '12px',
            minHeight: '44px'
          },
          '.MuiTab-root': {
            '&.Mui-selected': {
              color: palette.pocket.primary['100']
            }
          }
        }),
        indicator: ({ theme: { palette } }) => ({
          backgroundColor: palette.pocket.primary['100'],
          bottom: '4px'
        })
      }
    },
    MuiRadio: {
      styleOverrides: {
        root: ({ theme: { palette } }) => ({
          color: palette.pocket.grey['50'],
          padding: '6px',
          '&.Mui-checked': {
            color: palette.pocket.primary['100']
          },
          '.MuiSvgIcon-root': {
            fontSize: '18px'
          }
        })
      }
    },
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          '.MuiOutlinedInput-root .MuiAutocomplete-input': {
            padding: '3px'
          }
        },
        listbox: {
          padding: '4px 0',
          maxHeight: '30vh',
          '.MuiAutocomplete-option': {
            fontSize: '12px',
            paddingLeft: '8px',
            paddingRight: '8px',
            paddingTop: '2px',
            paddingBottom: '2px',
            '.MuiCheckbox-root': {
              padding: '6px'
            }
          }
        },
        inputRoot: {
          '&.Mui-disabled': {
            cursor: 'not-allowed'
          }
        }
      }
    },
    MuiList: {
      styleOverrides: {
        root: {
          paddingTop: '4px',
          paddingBottom: '4px',
          '.MuiMenuItem-root': {
            fontSize: '12px',
            paddingLeft: '8px',
            paddingRight: '8px',
            paddingTop: '2px',
            paddingBottom: '2px',
            '.MuiCheckbox-root': {
              padding: '6px'
            }
          }
        }
      }
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          fontSize: '20px'
        }
      }
    }
  }
}

export default themeComponents
