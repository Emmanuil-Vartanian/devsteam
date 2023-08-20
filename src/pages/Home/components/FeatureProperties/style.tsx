import { styled } from '@mui/system'

export const FeaturePropertiesContainer = styled('div')`
  margin: 100px 0;
`

export const TitleBlock = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
  padding: 0 57px;
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  @media (max-width: 800px) {
    padding: 0 24px;
  }
  @media (max-width: 500px) {
    display: block;
    > button {
      justify-content: start;
      margin-top: 20px;
    }
  }
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
  @media (max-width: 900px) {
    width: 283px;
    height: 550px;
  }
`

export const CardBtns = styled('div')`
  padding: 0 57px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  > button {
    :last-child {
      justify-content: end;
    }
    @media (max-width: 450px) {
      max-width: 115px;
    }
  }
  @media (max-width: 800px) {
    padding: 0 24px 24px;
  }
`
