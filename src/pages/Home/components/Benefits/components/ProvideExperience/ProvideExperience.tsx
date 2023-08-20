import React from 'react'
import Typography from '@mui/material/Typography'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

import { CategoryDescription } from '../Categories/style'
import {
  BenefitsImageBlock,
  ExperienceNumber,
  ExperienceNumberBlock,
  ProvideExperienceContainer,
  ProvideExperienceInfo
} from './style'

import provideExperience from 'assets/images/provideExperience.png'
import Button from 'components/Button'
import { ROUTES } from 'constants/routes'

const ProvideExperience: React.FC = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()

  const handleGoToPageUnderConstruction = () => {
    navigate(ROUTES.PAGE_UNDER_CONSTRUCTION)
  }

  return (
    <ProvideExperienceContainer>
      <BenefitsImageBlock>
        <img src={provideExperience} alt="provideExperience" />
      </BenefitsImageBlock>
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
