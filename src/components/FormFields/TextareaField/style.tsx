import { styled } from '@mui/system'
import { styledCustomProps } from 'services/styledCustomProps'

type TextareaFieldBlock = {
  focus: boolean
  mouseEnter: boolean
  maxWidth?: number
}

export const TextareaFieldBlock = styled(
  'div',
  styledCustomProps
)<TextareaFieldBlock>(
  ({ focus, mouseEnter, maxWidth, theme: { palette } }) => `
  padding: ${focus ? '7px' : '8px'};
  border-radius: 8px;
  border: ${focus ? '2px solid #4151CD' : `1px solid ${mouseEnter ? '#4151CD' : '#d2d7ff'}`};
  background: #fbfbfb;
  max-width: ${maxWidth || 574}px;
  width: 100%;
  height: 185px;
`
)

export const TextareaStyled = styled('textarea')(
  ({ theme: { palette } }) => `
  border: none;
  outline: none;
  background: initial;
  width: 100%;
  height: 169px;
  color: #212121;
  font-size: 16px;
  font-weight: 600;
  line-height: 140%;
  resize: none;
  font-family: Manrope;
  ::placeholder {
    color: ${palette.devsteam.grey['2']};
  }
`
)
