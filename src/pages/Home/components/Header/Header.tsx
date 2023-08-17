import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation, useNavigate } from 'react-router-dom'

import {
  ButtonBlock,
  DropdownBlock,
  HeaderContainer,
  LogoBlock,
  NavBlock,
  NavLists
} from './styled'

import logo from 'assets/images/logo.png'
import DropdownList from 'components/DropdownList'
import { LANGUAGES } from 'constants/languages'
import AppStateContext from 'services/context/AppStateContext'
import { CURRENCY } from 'constants/currency'
import Button from 'components/Button'
import { ROUTES } from 'constants/routes'
import Link from 'components/Link'
import { NAVIGATION } from 'constants/navigation'
import { getDataOptions } from 'services/formOptions'

const navigation = [
  { name: NAVIGATION.HOME, href: ROUTES.HOME_PAGE },
  { name: NAVIGATION.ABOUT_US, href: ROUTES.ABOUT_US_PAGE },
  { name: NAVIGATION.FEATURES, href: ROUTES.FEATURES_PAGE },
  { name: NAVIGATION.CONTACT, href: ROUTES.CONTACT_PAGE }
]

const Header: React.FC = () => {
  const { t } = useTranslation()
  const location = useLocation()
  const navigate = useNavigate()
  const { state, handleChangeStateLanguage, handleChangeStateCurrency } =
    useContext(AppStateContext)

  const dropdownList = (
    values: Record<string, any>,
    statePropert: 'language' | 'currency'
  ): string[] => {
    return Object.keys(values).filter(value => value !== state[statePropert])
  }

  const languagesOptions = getDataOptions(dropdownList(LANGUAGES, 'language'))
  const currenciesOptions = getDataOptions(dropdownList(CURRENCY, 'currency'))

  const handleChangeLang = value => () => {
    handleChangeStateLanguage(value)
  }

  const handleChangeCurrency = value => () => {
    handleChangeStateCurrency(value)
  }

  const handleGoToPageUnderConstruction = () => {
    navigate(ROUTES.PAGE_UNDER_CONSTRUCTION)
  }

  return (
    <HeaderContainer>
      <LogoBlock href={ROUTES.HOME_PAGE}>
        <img src={logo} alt="logo" />
        <span>{t('common.appName')}</span>
      </LogoBlock>
      <NavBlock>
        <NavLists>
          <ul>
            {navigation.map(({ name, href }, index) => (
              <li key={index} className={location.pathname === href ? 'active' : ''}>
                <Link href={href} title={t(`navigation.${name}`)} />
              </li>
            ))}
          </ul>
        </NavLists>
        <DropdownBlock>
          <DropdownList
            currentValue={state.language}
            handleChangeValue={handleChangeLang}
            dropdownList={languagesOptions}
          />
          <DropdownList
            currentValue={state.currency}
            handleChangeValue={handleChangeCurrency}
            dropdownList={currenciesOptions}
          />
        </DropdownBlock>
        <ButtonBlock>
          <Button variant={'text'} onClick={handleGoToPageUnderConstruction}>
            {t('common.logIn')}
          </Button>
          <Button onClick={handleGoToPageUnderConstruction}>{t('common.createAccount')}</Button>
        </ButtonBlock>
      </NavBlock>
    </HeaderContainer>
  )
}

export default Header
