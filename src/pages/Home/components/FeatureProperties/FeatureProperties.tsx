import React from 'react'
import { useSnapCarousel } from 'react-snap-carousel'
import Typography from '@mui/material/Typography'
import { useNavigate } from 'react-router-dom'

import { CardBlock, CardBtns, CarouselBlock, FeaturePropertiesContainer, TitleBlock } from './style'

import { featurePropertiesData } from './featurePropertiesData'
import Card from './components/Card'
import Button from 'components/Button'
import { ROUTES } from 'constants/routes'

const FeatureProperties: React.FC = () => {
  const navigate = useNavigate()
  const { scrollRef, next, prev } = useSnapCarousel()

  const handleGoToPageUnderConstruction = () => {
    navigate(ROUTES.PAGE_UNDER_CONSTRUCTION)
  }

  return (
    <FeaturePropertiesContainer>
      <TitleBlock>
        <Typography variant="h1">Feature properties</Typography>
        <Button variant={'text'} onClick={handleGoToPageUnderConstruction} justifyContent="end">
          Show all
        </Button>
      </TitleBlock>
      <CarouselBlock ref={scrollRef}>
        {featurePropertiesData.map(data => (
          <CardBlock
            key={data.id}
            href={ROUTES.PAGE_UNDER_CONSTRUCTION}
            title={<Card data={data} />}
          />
        ))}
      </CarouselBlock>
      <CardBtns>
        <Button variant={'text'} onClick={prev} justifyContent="start">
          Prev
        </Button>
        <Button variant={'text'} onClick={next} justifyContent="end">
          Next
        </Button>
      </CardBtns>
    </FeaturePropertiesContainer>
  )
}

export default FeatureProperties
