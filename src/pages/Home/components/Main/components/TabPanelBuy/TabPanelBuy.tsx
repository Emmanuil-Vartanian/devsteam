import React, { useContext, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import SearchIcon from '@mui/icons-material/Search'
import CloseIcon from '@mui/icons-material/Close'

import { FilterDropdownBlock, TabPanelBlock } from '../../style'

import AppStateContext from 'services/context/AppStateContext'
import { getCitiesOptions, getDataOptions, getPropertyTypesOptions } from 'services/formOptions'
import InputField from 'components/FormFields/InputField'
import DropdownList from 'components/DropdownList'
import { CITIES } from 'constants/cities'
import { PRICE_RANGES } from 'constants/priceRanges'
import { PROPERTY_TYPES } from 'constants/propertyType'

const TabPanelBuy: React.FC = () => {
  const { t } = useTranslation()
  const { state } = useContext(AppStateContext)
  const [filterData, setFilterData] = useState({
    searchValue: '',
    city: '',
    propertyType: '',
    priceRange: ''
  })

  useEffect(() => {
    const priceRangeByCurrency = Object.values(PRICE_RANGES[state.currency])[0].toString()

    setFilterData({
      searchValue: '',
      city: 'kyiv',
      propertyType: 'house',
      priceRange: priceRangeByCurrency
    })
  }, [state])

  const dropdownList = (
    values: Record<string, any>,
    statePropert: 'city' | 'propertyType' | 'priceRange'
  ): string[] => {
    return Object.values(values).filter(value => value !== filterData[statePropert])
  }

  const citiesOptions = getCitiesOptions(dropdownList(CITIES, 'city'), t)
  const propertyTypesOptions = getPropertyTypesOptions(
    dropdownList(PROPERTY_TYPES, 'propertyType'),
    t
  )
  const priceRangesOptions = getDataOptions(
    dropdownList(PRICE_RANGES[state.currency], 'priceRange')
  )

  const handleChangeSearchValue = e => {
    setFilterData(prev => ({ ...prev, searchValue: e.target.value }))
  }

  const handleResetSearchValue = () => {
    setFilterData(prev => ({ ...prev, searchValue: '' }))
  }

  const handleChangeFilterData = property => value => () => {
    setFilterData(prev => ({ ...prev, [property]: value }))
  }

  return (
    <TabPanelBlock>
      <InputField
        name={'search'}
        value={filterData.searchValue}
        onChange={handleChangeSearchValue}
        placeholder={t('main.search')}
        startAdornment={<SearchIcon />}
        maxWidth={260}
        endAdornment={
          filterData.searchValue && (
            <CloseIcon onClick={handleResetSearchValue} sx={{ cursor: 'pointer' }} />
          )
        }
      />
      <FilterDropdownBlock>
        <div>{t('main.city')}</div>
        <DropdownList
          currentValue={t(`cities.${filterData.city}`)}
          handleChangeValue={handleChangeFilterData('city')}
          dropdownList={citiesOptions}
        />
      </FilterDropdownBlock>
      <FilterDropdownBlock>
        <div>{t('main.propertyType')}</div>
        <DropdownList
          currentValue={t(`propertyTypes.${filterData.propertyType}`)}
          handleChangeValue={handleChangeFilterData('propertyType')}
          dropdownList={propertyTypesOptions}
        />
      </FilterDropdownBlock>
      <FilterDropdownBlock>
        <div>{t('main.priceRange')}</div>
        <DropdownList
          currentValue={filterData.priceRange}
          handleChangeValue={handleChangeFilterData('priceRange')}
          dropdownList={priceRangesOptions}
        />
      </FilterDropdownBlock>
    </TabPanelBlock>
  )
}

export default TabPanelBuy
