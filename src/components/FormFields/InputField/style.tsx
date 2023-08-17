import { styled } from '@mui/system'
import { styledCustomProps } from 'services/styledCustomProps'

type InputFieldBlock = {
  focus: boolean
  mouseEnter: boolean
  maxWidth?: number
}

export const InputFieldBlock = styled(
  'div',
  styledCustomProps
)<InputFieldBlock>(
  ({ focus, mouseEnter, maxWidth, theme: { palette } }) => `
  padding: ${focus ? '7px' : '8px'};
  border-radius: 8px;
  border: ${focus ? '2px solid #4151CD' : `1px solid ${mouseEnter ? '#4151CD' : '#d2d7ff'}`};
  background: #fbfbfb;
  display: flex;
  align-items: center;
  max-width: ${maxWidth || 574}px;
  width: 100%;
  height: 48px;
  > svg {
    color: ${palette.devsteam.grey['2']};
    :first-of-type {
      margin-right: 8px;
    }
  }
`
)

export const InputStyled = styled('input')(
  ({ theme: { palette } }) => `
  border: none;
  outline: none;
  background: initial;
  width: 100%;
  height: 24px;
  color: #212121;
  font-size: 16px;
  font-weight: 600;
  line-height: 140%;
  ::placeholder {
    color: ${palette.devsteam.grey['2']};
  }
`
)

export const ErrorMessage = styled('div')(
  ({ theme: { palette } }) => `
    color: ${palette.devsteam.common.red};
    margin: 0px 0px 4px 4px;
    font-size: 12px;
  `
)
