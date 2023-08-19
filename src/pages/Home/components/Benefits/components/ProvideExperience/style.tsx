import { styled } from '@mui/system'
import Typography from '@mui/material/Typography'

export const ProvideExperienceContainer = styled('div')`
  margin-bottom: 129px;
  display: flex;
`

export const ProvideExperienceInfo = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 20px;
`

export const ExperienceNumberBlock = styled('div')`
  display: flex;
  > div {
    max-width: 100px;
    :not(:last-child) {
      margin-right: 60px;
    }
  }
`

export const ExperienceNumber = styled(Typography)`
  color: #4151cd;
`
