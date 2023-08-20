import { styled } from '@mui/system'
import Typography from '@mui/material/Typography'

export const ProvideExperienceContainer = styled('div')`
  margin-bottom: 129px;
  display: flex;
  > img {
    width: 50%;
    object-fit: contain;
  }
  @media (max-width: 500px) {
    margin-bottom: 60px;
  }
`

export const BenefitsImageBlock = styled('div')`
  width: 50%;
  > img {
    width: 100%;
  }
  @media (max-width: 900px) {
    display: none;
  }
`

export const ProvideExperienceInfo = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 20px;
  width: 50%;
  @media (max-width: 900px) {
    width: 100%;
    margin-left: 0px;
  }
`

export const ExperienceNumberBlock = styled('div')`
  display: flex;
  > div {
    max-width: 100px;
    :not(:last-child) {
      margin-right: 60px;
    }
  }
  @media (max-width: 900px) {
    margin: 50px 0;
    > div {
      max-width: fit-content;
    }
  }
  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
    > div {
      text-align: center;
      margin-bottom: 30px;
      :not(:last-child) {
        margin-right: 0px;
      }
    }
  }
`

export const ExperienceNumber = styled(Typography)`
  color: #4151cd;
`
