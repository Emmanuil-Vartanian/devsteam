import { styled } from '@mui/system'
import Button from 'components/Button'
import CheckboxField from 'components/FormFields/CheckboxField'

export const ContactFormBlock = styled('div')`
  margin-right: 16px;
`

export const ContactFormImagesBlock = styled('div')`
  display: flex;
  margin-top: 9px;
  > div {
    width: min-content;
    margin-right: 16px;
    > img:first-of-type {
      margin-bottom: 9px;
    }
  }
`

export const FormFieldBlock = styled('div')`
  margin-top: 40px;
  > div:not(:last-child) {
    margin-bottom: 24px;
  }
`

export const FormCheckboxBlock = styled('div')`
  margin: 8px 0 37px;
`

export const CheckboxFieldStyled = styled(CheckboxField)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 16px;
`

export const FormCheckboxTitle = styled('div')`
  color: #323232;
  font-size: 18px;
  font-weight: 600;
  line-height: 140%;
`

export const ButtonStyled = styled(Button)`
  width: 100%;
`
