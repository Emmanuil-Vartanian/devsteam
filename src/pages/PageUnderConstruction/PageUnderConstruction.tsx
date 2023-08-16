import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { NotFoundBlock } from 'pages/NotFound/style'

import Button from 'components/Button'
import { ROUTES } from 'constants/routes'

const PageUnderConstruction: React.FC = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()

  const handleGoHome = () => {
    navigate(ROUTES.HOME_PAGE)
  }

  return (
    <NotFoundBlock>
      <h1>{t('pageUnderConstruction.title')}</h1>
      <h3>{t('pageUnderConstruction.description')}</h3>
      <Button onClick={handleGoHome}>{t('pageUnderConstruction.back')}</Button>
    </NotFoundBlock>
  )
}

export default PageUnderConstruction
