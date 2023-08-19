import React from 'react'
import Typography from '@mui/material/Typography'
import { useTranslation } from 'react-i18next'

import { ProvideExperienceContainer } from '../ProvideExperience/style'
import { CategoryDescription } from '../Categories/style'
import {
  ExperienceStep,
  ExperienceStepContainer,
  ExperienceStepInfoBlock,
  ExperienceStepTitle,
  ProcessExperienceBloc
} from './style'

import processExperience from 'assets/images/processExperience.png'

const ProcessExperience: React.FC = () => {
  const { t } = useTranslation()

  return (
    <ProvideExperienceContainer>
      <ProcessExperienceBloc>
        <Typography variant="h3">{t('benefits.processExperience.title')}</Typography>
        <ExperienceStepContainer>
          <div>
            <ExperienceStep stepNumber={1}>1</ExperienceStep>
            <ExperienceStep stepNumber={2}>2</ExperienceStep>
            <ExperienceStep stepNumber={3}>3</ExperienceStep>
          </div>
          <ExperienceStepInfoBlock>
            <div>
              <ExperienceStepTitle>
                {t('benefits.processExperience.steps.one.title')}
              </ExperienceStepTitle>
              <CategoryDescription>
                {t('benefits.processExperience.steps.one.description')}
              </CategoryDescription>
            </div>
            <div>
              <ExperienceStepTitle>
                {t('benefits.processExperience.steps.two.title')}
              </ExperienceStepTitle>
              <CategoryDescription>
                {t('benefits.processExperience.steps.two.description')}
              </CategoryDescription>
            </div>
            <div>
              <ExperienceStepTitle>
                {t('benefits.processExperience.steps.three.title')}
              </ExperienceStepTitle>
              <CategoryDescription>
                {t('benefits.processExperience.steps.three.description')}
              </CategoryDescription>
            </div>
          </ExperienceStepInfoBlock>
        </ExperienceStepContainer>
      </ProcessExperienceBloc>
      <img src={processExperience} alt="processExperience" />
    </ProvideExperienceContainer>
  )
}

export default ProcessExperience
