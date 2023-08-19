import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
import { useTranslation } from 'react-i18next'

import { ProvideExperienceContainer } from '../Benefits/components/ProvideExperience/style'

import contactForm1 from 'assets/images/contactForm1.png'
import contactForm2 from 'assets/images/contactForm2.png'
import contactForm3 from 'assets/images/contactForm3.png'
import contactForm4 from 'assets/images/contactForm4.png'
import contactForm5 from 'assets/images/contactForm5.png'
import Button from 'components/Button'
import InputField from 'components/FormFields/InputField'
import {
  ButtonStyled,
  CheckboxFieldStyled,
  ContactFormBlock,
  ContactFormImagesBlock,
  FormCheckboxBlock,
  FormCheckboxTitle,
  FormFieldBlock
} from './style'
import TextareaField from 'components/FormFields/TextareaField'
import CheckboxField from 'components/FormFields/CheckboxField'

const ContactForm: React.FC = () => {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    help: '',
    services: [
      {
        name: 'marketConsultation',
        label: t('contactForm.services.marketConsultation'),
        checked: true
      },
      {
        name: 'investmentProposals',
        label: t('contactForm.services.investmentProposals'),
        checked: false
      },
      {
        name: 'propertySearch',
        label: t('contactForm.services.propertySearch'),
        checked: false
      },
      {
        name: 'propertyRental',
        label: t('contactForm.services.propertyRental'),
        checked: false
      },
      {
        name: 'marketValuation',
        label: t('contactForm.services.marketValuation'),
        checked: false
      },
      {
        name: 'propertySelection',
        label: t('contactForm.services.propertySelection'),
        checked: false
      },
      {
        name: 'documentAssistance',
        label: t('contactForm.services.documentAssistance'),
        checked: false
      },
      {
        name: 'clientNeedsAssessment',
        label: t('contactForm.services.clientNeedsAssessment'),
        checked: false
      },
      {
        name: 'transactionSupport',
        label: t('contactForm.services.transactionSupport'),
        checked: false
      },
      { name: 'other', label: t('contactForm.services.other'), checked: false }
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
    <ProvideExperienceContainer>
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
          <CheckboxFieldStyled options={formData.services} onChange={handleChangeServicesData} />
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
