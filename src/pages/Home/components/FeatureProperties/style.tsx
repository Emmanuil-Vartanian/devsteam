import { styled } from '@mui/system'
import Link from 'components/Link'

export const FeaturePropertiesContainer = styled('div')`
  margin: 100px 0;
`

export const TitleBlock = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
  padding: 0 57px;
`

export const CarouselBlock = styled('div')`
  display: flex;
  overflow: hidden;
  scroll-snap-type: x proximity;
  gap: 16px;
  padding: 35px 0;
`

export const CardBlock = styled('div')`
  width: 378px;
  height: 610px;
  flex-shrink: 0;
  padding: 16px;
  border-radius: 8px;
  background: #fdfdfd;
  box-shadow: 0px 4px 44px 0px rgba(0, 0, 0, 0.05);
  cursor: pointer;
`

export const CardBtns = styled('div')`
  padding: 0 57px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  > button {
    :last-child {
      justify-content: end;
    }
  }
`
