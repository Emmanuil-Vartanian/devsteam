import React from 'react'
import { useTranslation } from 'react-i18next'
import Typography from '@mui/material/Typography'

import Categories from './components/Categories'
import ProvideExperience from './components/ProvideExperience'
import ProcessExperience from './components/ProcessExperience'

const Benefits: React.FC = () => {
  const { t } = useTranslation()

  return (
    <div>
      <Typography variant="h1">{t('benefits.title')}</Typography>
      <Categories />
      <ProvideExperience />
      <ProcessExperience />
    </div>
  )
}

export default Benefits
