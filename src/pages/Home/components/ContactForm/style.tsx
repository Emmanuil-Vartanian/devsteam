import { styled } from '@mui/system'
import Button from 'components/Button'
import CheckboxField from 'components/FormFields/CheckboxField'
import { ProvideExperienceContainer } from '../Benefits/components/ProvideExperience/style'

export const ContactFormContainer = styled(ProvideExperienceContainer)`
  @media (max-width: 900px) {
    display: block;
    margin-bottom: 50px;
  }
`

export const ContactFormBlock = styled('div')`
  margin-right: 16px;
  width: 50%;
  @media (max-width: 900px) {
    width: auto;
  }
`

export const ContactFormImagesContainer = styled('div')`
  width: 50%;
  > img {
    width: 100%;
  }
  @media (max-width: 900px) {
    display: none;
  }
`

export const ContactFormImagesBlock = styled('div')`
  display: flex;
  margin-top: 9px;
  width: 100%;
  > div {
    width: min-content;
    width: 100%;
    :first-of-type {
      margin-right: 16px;
    }
    :last-child {
      > img:first-of-type {
        height: 405px;
      }
    }
    > img {
      width: 100%;
    }
    > img:first-of-type {
      margin-bottom: 9px;
    }
  }
`

export const FormFieldBlock = styled('div')`
  margin-top: 40px;
  > div {
    margin-bottom: 24px;
    > div {
      max-width: 574px;
    }
    > div {
      @media (max-width: 900px) {
        max-width: 100%;
      }
    }
  }
`

export const FormCheckboxBlock = styled('div')`
  margin: 8px 0 37px;
`

export const CheckboxFieldStyled = styled(CheckboxField)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 16px;
  @media (max-width: 400px) {
    grid-template-columns: repeat(1, 1fr);
  }
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
