import { styled } from '@mui/system'
import { LANGUAGES } from 'constants/languages'
import { styledCustomProps } from 'services/styledCustomProps'

type MainTitleType = {
  languageCode: string
}

export const MainInfoBlock = styled('div')`
  position: relative;
  text-align: end;
`

export const MainImageBlock = styled('div')`
  overflow: hidden;
  border-radius: 8px;
  > img {
    width: 100%;
    @media (max-width: 650px) {
      width: 600px;
    }
  }
`

export const MainTitle = styled(
  'div',
  styledCustomProps
)<MainTitleType>(
  ({ languageCode, theme: { palette } }) => `
  position: absolute;
  top: 80px;
  font-size: 56px;
  font-weight: 600;
  line-height: 110%;
  letter-spacing: 0.56px;
  max-width: ${languageCode === LANGUAGES.en ? '550px' : '608px'};
  text-align: start;
  color: ${palette.devsteam.additional.background};
  display: flex;
  align-items: center;
  height: 316px;
  > span {
    z-index: 1;
    position: relative;
  }
  ::after {
    content: '';
    background: ${palette.devsteam.primary['90']};
    position: absolute;
    top: 0;
    left: -57px;
    height: 316px;
    width: ${languageCode === LANGUAGES.en ? '371px' : '435px'};
    border-radius: 0px 8px 8px 0px;
    @media (max-width: 900px) {
      width: ${languageCode === LANGUAGES.en ? '300px' : '346px'};
      height: 266px;
    }
    @media (max-width: 650px) {
      max-width: ${languageCode === LANGUAGES.en ? '253px' : '310px'};
      height: 170px;
    }
  }
  @media (max-width: 900px) {
    font-size: 40px;
    max-width: ${languageCode === LANGUAGES.en ? '380px' : '470px'};
    height: 266px;
  }
  @media (max-width: 650px) {
    font-size: 35px;
    max-width: ${languageCode === LANGUAGES.en ? '330px' : '390px'};
    height: 170px;
  }
`
)

export const FilterBlock = styled('div')(
  ({ theme: { palette } }) => `
  padding: 24px 0px;
  border-radius: 6px;
  border: 1px solid ${palette.devsteam.other.stroke};
  background: linear-gradient(180deg, #fff 46.97%, #fbfbff 100%, #fbfbff 100%);
  position: absolute;
  bottom: -52px;
  max-width: 968px;
  width: 100%;
  text-align: start;
  @media (max-width: 1100px) {
    position: relative;
    bottom: 0;
    margin-top: 30px;
  }
`
)

export const TabPanelBlock = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
`

export const FilterDropdownBlock = styled('div')(
  ({ theme: { palette } }) => `
  > div {
    :first-of-type {
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 140%;
      color: ${palette.devsteam.grey['3']};
    }
    :last-child {
      color: ${palette.devsteam.grey.black};
      font-size: 18px;
      font-weight: 600;
      line-height: 140%;
      margin-top: 4px;
    }
  }
`
)

export const HouseData = styled('div')`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-top: 153px;
  @media (max-width: 900px) {
    display: block;
    margin-top: 80px;
  }
`

export const DataBlock = styled('div')`
  position: relative;
  max-height: 272px;
  transition: all 0.3s;
  cursor: pointer;
  ::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, rgba(65, 81, 205, 0) 39.58%, rgba(0, 0, 0, 0.69) 90.1%);
    border-radius: 8px;
  }
  > span {
    position: absolute;
    left: 32px;
    bottom: 26px;
    color: #fdfdfd;
    font-size: 30px;
    font-weight: 600;
    line-height: 120%;
    z-index: 1;
  }
  :hover {
    transform: scale(1.05);
    z-index: 2;
  }
  > img {
    width: 100%;
    object-fit: cover;
    @media (max-width: 900px) {
      height: 272px;
    }
    @media (max-width: 600px) {
      max-height: 190px;
    }
  }
  @media (max-width: 900px) {
    margin-bottom: 20px;
  }
  @media (max-width: 600px) {
    max-height: 190px;
  }
`
