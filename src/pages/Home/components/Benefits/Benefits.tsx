import React from 'react'
import { useTranslation } from 'react-i18next'
import Typography from '@mui/material/Typography'

import Categories from './components/Categories'
import ProvideExperience from './components/ProvideExperience'
import ProcessExperience from './components/ProcessExperience'
import { RefProps } from '../FeatureProperties/FeatureProperties'

const Benefits: React.FC<RefProps> = ({ refBlock }) => {
  const { t } = useTranslation()

  return (
    <div ref={refBlock}>
      <Typography variant="h1">{t('benefits.title')}</Typography>
      <Categories />
      <ProvideExperience />
      <ProcessExperience />
    </div>
  )
}

export default Benefits
