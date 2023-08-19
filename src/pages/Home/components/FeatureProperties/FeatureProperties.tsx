import React from 'react'
import { useSnapCarousel } from 'react-snap-carousel'
import Typography from '@mui/material/Typography'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { CardBlock, CardBtns, CarouselBlock, FeaturePropertiesContainer, TitleBlock } from './style'

import { featurePropertiesData } from './featurePropertiesData'
import Card from './components/Card'
import Button from 'components/Button'
import { ROUTES } from 'constants/routes'

const FeatureProperties: React.FC = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { scrollRef, next, prev } = useSnapCarousel()

  const handleGoToPageUnderConstruction = () => {
    navigate(ROUTES.PAGE_UNDER_CONSTRUCTION)
  }

  return (
    <FeaturePropertiesContainer>
      <TitleBlock>
        <Typography variant="h1">{t('featureProperties.title')}</Typography>
        <Button variant={'text'} onClick={handleGoToPageUnderConstruction} justifyContent="end">
          {t('featureProperties.showAll')}
        </Button>
      </TitleBlock>
      <CarouselBlock ref={scrollRef}>
        {featurePropertiesData.map(data => (
          <CardBlock key={data.id} onClick={handleGoToPageUnderConstruction}>
            <Card data={data} />
          </CardBlock>
        ))}
      </CarouselBlock>
      <CardBtns>
        <Button variant={'text'} onClick={prev} justifyContent="start">
          {t('featureProperties.prev')}
        </Button>
        <Button variant={'text'} onClick={next} justifyContent="end">
          {t('featureProperties.next')}
        </Button>
      </CardBtns>
    </FeaturePropertiesContainer>
  )
}

export default FeatureProperties
