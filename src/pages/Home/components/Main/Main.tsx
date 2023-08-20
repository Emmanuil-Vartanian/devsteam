import React, { useContext, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Tab from '@mui/material/Tab'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'

import {
  DataBlock,
  FilterBlock,
  HouseData,
  MainImageBlock,
  MainInfoBlock,
  MainTitle
} from './style'

import rectangle from 'assets/images/rectangle.png'
import TabPanelBuy from './components/TabPanelBuy'
import AppStateContext from 'services/context/AppStateContext'
import { mainData } from './mainData'
import { ROUTES } from 'constants/routes'
import { useNavigate } from 'react-router-dom'

const Main: React.FC = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { state } = useContext(AppStateContext)
  const [tabValue, setTabValue] = useState('buy')

  const handleChangeTab = (event: React.SyntheticEvent, newValue: string) => {
    setTabValue(newValue)
  }

  const handleGoToPageUnderConstruction = () => {
    navigate(ROUTES.PAGE_UNDER_CONSTRUCTION)
  }

  return (
    <div>
      <MainInfoBlock>
        <MainImageBlock>
          <img src={rectangle} alt="rectangle" />
        </MainImageBlock>
        <MainTitle languageCode={state.language}>
          <span>{t('main.title')}</span>
        </MainTitle>
        <FilterBlock>
          <TabContext value={tabValue}>
            <TabList onChange={handleChangeTab}>
              <Tab label={t('main.buy')} value="buy" />
              <Tab label={t('main.rent')} value="rent" />
            </TabList>
            <TabPanel value="buy">
              <TabPanelBuy />
            </TabPanel>
            <TabPanel value="rent">
              <TabPanelBuy />
            </TabPanel>
          </TabContext>
        </FilterBlock>
      </MainInfoBlock>
      <HouseData>
        {mainData(t).map(({ title, image }, index) => (
          <DataBlock key={index} onClick={handleGoToPageUnderConstruction}>
            <img src={image} alt="title" />
            <span>{title}</span>
          </DataBlock>
        ))}
      </HouseData>
    </div>
  )
}

export default Main
