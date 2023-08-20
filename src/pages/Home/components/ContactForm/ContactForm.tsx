import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
import { useTranslation } from 'react-i18next'

import { ProvideExperienceContainer } from '../Benefits/components/ProvideExperience/style'
import {
  ButtonStyled,
  CheckboxFieldStyled,
  ContactFormBlock,
  ContactFormImagesBlock,
  FormCheckboxBlock,
  FormCheckboxTitle,
  FormFieldBlock
} from './style'

import contactForm1 from 'assets/images/contactForm1.png'
import contactForm2 from 'assets/images/contactForm2.png'
import contactForm3 from 'assets/images/contactForm3.png'
import contactForm4 from 'assets/images/contactForm4.png'
import contactForm5 from 'assets/images/contactForm5.png'
import InputField from 'components/FormFields/InputField'
import TextareaField from 'components/FormFields/TextareaField'
import { RefProps } from '../FeatureProperties/FeatureProperties'

const ContactForm: React.FC<RefProps> = ({ refBlock }) => {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    help: '',
    services: [
      { name: 'marketConsultation', checked: true },
      { name: 'investmentProposals', checked: false },
      { name: 'propertySearch', checked: false },
      { name: 'propertyRental', checked: false },
      { name: 'marketValuation', checked: false },
      { name: 'propertySelection', checked: false },
      { name: 'documentAssistance', checked: false },
      { name: 'clientNeedsAssessment', checked: false },
      { name: 'transactionSupport', checked: false },
      { name: 'other', checked: false }
    ]
  })

  const handleFormSubmit = () => {
    console.log('formData', formData)
  }

  const handleChangeFormData = property => e => {
    const value = e.target.value
    setFormData(prev => ({ ...prev, [property]: value }))
  }

  const handleChangeServicesData = data => {
    setFormData(prev => {
      const newServices = prev.services.map(service => {
        if (service.name === data.name) {
          return { ...service, checked: data.checked }
        }
        return { ...service }
      })

      return { ...prev, services: [...newServices] }
    })
  }

  return (
    <ProvideExperienceContainer ref={refBlock}>
      <ContactFormBlock>
        <Typography variant="h3">{t('contactForm.title')}</Typography>
        <FormFieldBlock>
          <InputField
            name={'name'}
            value={formData.name}
            onChange={handleChangeFormData('name')}
            label={t('contactForm.name')}
          />
          <InputField
            name={'email'}
            value={formData.email}
            onChange={handleChangeFormData('email')}
            type="email"
            label={t('contactForm.email')}
          />
          <InputField
            name={'phone'}
            value={formData.phone}
            onChange={handleChangeFormData('phone')}
            type="number"
            label={t('contactForm.phone')}
          />
          <TextareaField
            name={'help'}
            value={formData.help}
            onChange={handleChangeFormData('help')}
            label={t('contactForm.help')}
          />
        </FormFieldBlock>
        <FormCheckboxBlock>
          <FormCheckboxTitle>{t('contactForm.services.title')}</FormCheckboxTitle>
          <CheckboxFieldStyled
            options={formData.services}
            label={'contactForm.services'}
            onChange={handleChangeServicesData}
          />
        </FormCheckboxBlock>
        <ButtonStyled variant={'contained'} onClick={handleFormSubmit}>
          {t('contactForm.submit')}
        </ButtonStyled>
      </ContactFormBlock>
      <div>
        <img src={contactForm1} alt="contactForm1" />
        <ContactFormImagesBlock>
          <div>
            <img src={contactForm2} alt="contactForm2" />
            <img src={contactForm4} alt="contactForm4" />
          </div>
          <div>
            <img src={contactForm3} alt="contactForm3" />
            <img src={contactForm5} alt="contactForm5" />
          </div>
        </ContactFormImagesBlock>
      </div>
    </ProvideExperienceContainer>
  )
}

export default ContactForm
