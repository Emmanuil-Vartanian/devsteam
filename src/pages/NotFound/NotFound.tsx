import React from 'react'
import { useNavigate } from 'react-router-dom'

import { NotFoundBlock } from './style'
import Button from 'components/Button'
import { ROUTES } from 'constants/routes'
import { useTranslation } from 'react-i18next'

const NotFound: React.FC = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()

  const handleGoHome = () => {
    navigate(ROUTES.HOME_PAGE)
  }

  return (
    <NotFoundBlock>
      <h1>404</h1>
      <h3>{t('notFound.title')}</h3>
      <h5>{t('notFound.description')}</h5>
      <Button onClick={handleGoHome}>{t('notFound.back')}</Button>
    </NotFoundBlock>
  )
}

export default NotFound
