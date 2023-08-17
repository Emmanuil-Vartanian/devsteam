import { styled } from '@mui/system'
import Checkbox from '@mui/material/Checkbox'
import FormControl from '@mui/material/FormControl'

export const CheckboxStyled = styled(Checkbox)`
  width: auto;
  align-self: start;
`

export const CheckboxFormControlStyled = styled(FormControl)`
  height: 100%;
  justify-content: center;
  .MuiFormControlLabel-label {
    font-size: 13px;
  }
`
