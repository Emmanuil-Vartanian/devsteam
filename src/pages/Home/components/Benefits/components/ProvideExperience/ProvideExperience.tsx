import React from 'react'
import Typography from '@mui/material/Typography'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

import { CategoryDescription } from '../Categories/style'

import provideExperience from 'assets/images/provideExperience.png'
import Button from 'components/Button'
import { ROUTES } from 'constants/routes'
import {
  ExperienceNumber,
  ExperienceNumberBlock,
  ProvideExperienceContainer,
  ProvideExperienceInfo
} from './style'

const ProvideExperience: React.FC = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()

  const handleGoToPageUnderConstruction = () => {
    navigate(ROUTES.PAGE_UNDER_CONSTRUCTION)
  }

  return (
    <ProvideExperienceContainer>
      <img src={provideExperience} alt="provideExperience" />
      <ProvideExperienceInfo>
        <div>
          <Typography variant="h3">{t('benefits.provideExperience.title')}</Typography>
          <CategoryDescription>{t('benefits.provideExperience.description')}</CategoryDescription>
        </div>
        <ExperienceNumberBlock>
          <div>
            <ExperienceNumber variant="h1">15</ExperienceNumber>
            <CategoryDescription>
              {t('benefits.provideExperience.yearsExperience')}
            </CategoryDescription>
          </div>
          <div>
            <ExperienceNumber variant="h1">134</ExperienceNumber>
            <CategoryDescription>
              {t('benefits.provideExperience.realEstateSold')}
            </CategoryDescription>
          </div>
          <div>
            <ExperienceNumber variant="h1">789</ExperienceNumber>
            <CategoryDescription>
              {t('benefits.provideExperience.realEstateRentedOut')}
            </CategoryDescription>
          </div>
        </ExperienceNumberBlock>
        <Button variant={'text'} onClick={handleGoToPageUnderConstruction} justifyContent="start">
          {t('benefits.provideExperience.readMore')}
        </Button>
      </ProvideExperienceInfo>
    </ProvideExperienceContainer>
  )
}

export default ProvideExperience
