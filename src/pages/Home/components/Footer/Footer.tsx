import React from 'react'
import { useTranslation } from 'react-i18next'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'

import { LogoBlock } from '../Header/styled'
import {
  FooterBackground,
  FooterContainer,
  FooterDescription,
  FooterFirstBlock,
  FooterLinkInfo,
  FooterLinkInfoBlock,
  FooterRightsReservedContainer,
  FooterTitle,
  LinkStyled,
  RightsReservedBlock,
  SocialNetwork
} from './style'

import { ROUTES } from 'constants/routes'
import logo from 'assets/images/logo.png'
import InstagramSvg from 'assets/svg/InstagramSvg'
import FacebookSvg from 'assets/svg/FacebookSvg'
import TelegramSvg from 'assets/svg/TelegramSvg'
import WhatsAppSvg from 'assets/svg/WhatsAppSvg'
import Link from 'components/Link'

const Footer: React.FC = () => {
  const { t } = useTranslation()

  return (
    <FooterBackground>
      <FooterContainer>
        <FooterFirstBlock>
          <LogoBlock href={ROUTES.HOME_PAGE}>
            <img src={logo} alt="logo" />
            <span>{t('common.appName')}</span>
          </LogoBlock>
          <FooterDescription>{t('footer.description')}</FooterDescription>
          <SocialNetwork>
            <Link href={'#'} title={<InstagramSvg />} />
            <Link href={'#'} title={<FacebookSvg />} />
            <Link href={'#'} title={<TelegramSvg color="#4151CD" />} />
            <Link href={'#'} title={<WhatsAppSvg color="#4151CD" />} />
          </SocialNetwork>
        </FooterFirstBlock>
        <FooterLinkInfoBlock>
          <FooterLinkInfo>
            <FooterTitle>{t('footer.explore')}</FooterTitle>
            <LinkStyled href={ROUTES.PAGE_UNDER_CONSTRUCTION} title={t('footer.ourProperties')} />
            <LinkStyled href={ROUTES.PAGE_UNDER_CONSTRUCTION} title={t('footer.sellYourHome')} />
            <LinkStyled href={ROUTES.PAGE_UNDER_CONSTRUCTION} title={t('footer.agents')} />
          </FooterLinkInfo>
          <FooterLinkInfo>
            <FooterTitle>{t('footer.services')}</FooterTitle>
            <LinkStyled href={ROUTES.PAGE_UNDER_CONSTRUCTION} title={t('footer.logIn')} />
            <LinkStyled href={ROUTES.PAGE_UNDER_CONSTRUCTION} title={t('footer.signUp')} />
            <LinkStyled href={ROUTES.PAGE_UNDER_CONSTRUCTION} title={t('footer.myAccount')} />
            <LinkStyled href={ROUTES.PAGE_UNDER_CONSTRUCTION} title={t('footer.termsCondition')} />
          </FooterLinkInfo>
          <FooterLinkInfo>
            <FooterTitle>{t('footer.contactUs')}</FooterTitle>
            <LinkStyled
              href={'#'}
              title={
                <>
                  <LocationOnOutlinedIcon />
                  <span>Lesi Ukrainky Blvd, 13</span>
                </>
              }
            />
            <LinkStyled
              href={'tel:+38 098 809 5467'}
              title={
                <>
                  <LocalPhoneOutlinedIcon />
                  <span>+38 098 809 5467</span>
                </>
              }
            />
            <LinkStyled
              href={'mailto:ehome@gmail.com'}
              title={
                <>
                  <EmailOutlinedIcon />
                  <span>ehome@gmail.com</span>
                </>
              }
            />
          </FooterLinkInfo>
        </FooterLinkInfoBlock>
      </FooterContainer>
      <FooterRightsReservedContainer>
        <RightsReservedBlock>{t('footer.rightsReserved')}</RightsReservedBlock>
      </FooterRightsReservedContainer>
    </FooterBackground>
  )
}

export default Footer
