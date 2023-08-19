import React from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import LanOutlinedIcon from '@mui/icons-material/LanOutlined'
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined'
import { useTranslation } from 'react-i18next'
import Typography from '@mui/material/Typography'

import { CategoriesContainer, CategoryBlock, CategoryDescription, CategoryIcon } from './style'

const data = t => [
  {
    icon: <HomeOutlinedIcon />,
    title: t('benefits.marketKnowledge.title'),
    description: t('benefits.marketKnowledge.description')
  },
  {
    icon: <LanOutlinedIcon />,
    title: t('benefits.extensiveNetwork.title'),
    description: t('benefits.extensiveNetwork.description')
  },
  {
    icon: <PeopleAltOutlinedIcon />,
    title: t('benefits.closingAssistance.title'),
    description: t('benefits.closingAssistance.description')
  }
]

const Categories: React.FC = () => {
  const { t } = useTranslation()

  return (
    <CategoriesContainer>
      {data(t).map(({ icon, title, description }, index) => (
        <CategoryBlock key={index}>
          <CategoryIcon>{icon}</CategoryIcon>
          <Typography variant="h3">{title}</Typography>
          <CategoryDescription>{description}</CategoryDescription>
        </CategoryBlock>
      ))}
    </CategoriesContainer>
  )
}

export default Categories
