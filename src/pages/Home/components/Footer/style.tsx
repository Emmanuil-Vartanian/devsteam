import { styled } from '@mui/system'
import Link from 'components/Link'
import { Container } from 'pages/Home/style'

export const FooterBackground = styled('footer')`
  background: linear-gradient(180deg, rgba(253, 253, 253, 0.7) 0%, rgba(222, 227, 254, 0.7) 48.96%);
`

export const FooterContainer = styled(Container)`
  margin-top: 85px;
  padding: 32px 57px;
  height: 312px;
  display: flex;
  gap: 75px;
  @media (max-width: 1100px) {
    display: block;
    height: auto;
  }
  @media (max-width: 800px) {
    padding: 32px 24px;
  }
  @media (max-width: 450px) {
    padding: 32px 24px 0;
    margin-top: 45px;
  }
`

export const FooterFirstBlock = styled('div')`
  max-width: 310px;
  @media (max-width: 1100px) {
    display: flex;
    justify-content: space-between;
    max-width: 100%;
    > div:first-of-type {
      max-width: 310px;
    }
  }
  @media (max-width: 800px) {
    display: block;
    max-width: fit-content;
    margin: 0 auto 30px;
    > a {
      justify-content: center;
    }
  }
`

export const FooterDescription = styled('div')`
  color: #939393;
  font-size: 16px;
  font-weight: 600;
  line-height: 140%;
  margin: 32px 0;
`

export const SocialNetwork = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  > a {
    border-radius: 50%;
    background: #fdfdfd;
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    :not(:last-child) {
      margin-right: 25px;
    }
  }
`

export const FooterLinkInfoBlock = styled('div')`
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;
  @media (max-width: 450px) {
    justify-content: center;
    text-align: center;
  }
`

export const FooterLinkInfo = styled('div')`
  display: flex;
  flex-direction: column;
  width: 195px;
  @media (max-width: 450px) {
    margin-top: 30px;
  }
`

export const FooterTitle = styled('div')`
  color: rgba(85, 84, 84, 0.86);
  font-size: 18px;
  font-weight: 600;
  line-height: 140%;
  margin-bottom: 32px;
`

export const LinkStyled = styled(Link)`
  color: #939393;
  font-size: 16px;
  font-weight: 600;
  line-height: 140%;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  > svg {
    margin-right: 8px;
  }
  @media (max-width: 450px) {
    justify-content: center;
  }
`

export const FooterRightsReservedContainer = styled(Container)`
  padding: 0 57px;
`

export const RightsReservedBlock = styled('div')`
  padding: 32px 0px;
  border-top: 1px solid #d9d9d9;
  color: #939393;
  font-size: 14px;
  font-weight: 500;
  line-height: 140%;
  text-align: center;
  @media (max-width: 450px) {
    padding: 22px 0 0;
  }
`
