import { styled } from '@mui/system'
import Button from '@mui/material/Button'
import { styledCustomProps } from 'services/styledCustomProps'

type ButtonType = {
  justifyContent: 'start' | 'end' | 'center'
}

export const ButtonStyled = styled(
  Button,
  styledCustomProps
)<ButtonType>(
  ({ justifyContent }) => `
    justify-content: ${justifyContent};
`
)
