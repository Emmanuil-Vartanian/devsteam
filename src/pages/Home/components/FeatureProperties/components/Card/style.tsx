import { styled } from '@mui/system'
import { styledCustomProps } from 'services/styledCustomProps'

type HouseTagType = {
  colorTag: boolean
}

export const TopCardInfo = styled('div')`
  margin-bottom: 16px;
  padding-bottom: 40px;
  border-bottom: 1px solid #e2e2e2;
`

export const CardImageBlock = styled('div')(
  ({ theme: { palette } }) => `
  position: relative;
  margin-bottom: 16px;
  > img {
    max-width: 346px;
    max-height: 250px;
    border-radius: 8px;
  }
  > div {
    position: absolute;
    top: 16px;
    right: 17px;
    width: 42px;
    height: 40px;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.60);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: ${palette.devsteam.grey['2']};
  }
`
)

export const CardPrice = styled('div')(
  ({ theme: { palette } }) => `
  color: ${palette.devsteam.grey.black};
  font-size: 18px;
  font-weight: 600;
  line-height: 140%;
  margin-bottom: 13px;
`
)

export const InfoHouse = styled('div')(
  ({ theme: { palette } }) => `
  display: flex;
  align-items: center;
  color: ${palette.devsteam.grey.black};
  font-size: 14px;
  font-weight: 500;
  line-height: 140%;
  margin-bottom: 13px;
  > div {
    display: flex;
    align-items: center;
    margin-right: 12px;
  }
`
)

export const HouseLocation = styled('div')(
  ({ theme: { palette } }) => `
  display: flex;
  align-items: center;
  color: ${palette.devsteam.primary['90']};
  font-size: 14px;
  font-weight: 500;
  line-height: 140%;
  margin-bottom: 13px;
  > svg {
    margin-right: 4px;
  }
`
)

export const HouseTags = styled('div')`
  display: flex;
  align-items: center;
  gap: 8px;
`

export const HouseTag = styled(
  'div',
  styledCustomProps
)<HouseTagType>(
  ({ colorTag }) => `
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border-radius: 6px;
  background: ${colorTag ? '#F4DFF8' : '#d9f2e4'};
  color: ${colorTag ? '#A44BB9' : '#4e7b80'};
  font-size: 12px;
  font-weight: 500;
  line-height: 110%;
`
)

export const OwnerData = styled('div')(
  ({ theme: { palette } }) => `
  display: flex;
  align-items: center;
  color: ${palette.devsteam.grey.dark};
  font-size: 14px;
  font-weight: 700;
  line-height: 110%;
  margin-bottom: 28px;
  > img {
    width: 40px;
    height: 40px;
    border-radius: 40px;
    margin-right: 8px;
  }
`
)

export const OwnerContacts = styled('div')(
  ({ theme: { palette } }) => `
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  > a {
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: 500;
    line-height: 140%;
    :not(:last-child) {
      border-right: 1px solid ${palette.devsteam.grey['2']};
      padding-right: 16px;
      margin-right: 15px;
    }
    > svg {
      margin-right: 4px;
    }
    :first-of-type {
      color: #00a11a;
    }
    :nth-child(2n) {
      color: #1084ef;
    }
  }
`
)
