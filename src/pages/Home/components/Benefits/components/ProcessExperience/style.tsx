import { styled } from '@mui/system'
import { ProvideExperienceContainer } from '../ProvideExperience/style'

type ExperienceStepType = {
  stepNumber: number
}

export const ProcessExperienceContainer = styled(ProvideExperienceContainer)`
  @media (max-width: 915px) {
    > img {
      display: none;
    }
  }
`

export const ProcessExperienceBloc = styled('div')`
  margin-right: 20px;
`

export const ExperienceStepContainer = styled('div')`
  margin-top: 56px;
  display: flex;
`

export const ExperienceStep = styled('div')<ExperienceStepType>(
  ({ stepNumber }) => `
  width: 38px;
  height: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: rgba(65, 81, 205, ${stepNumber === 1 ? '0.3' : stepNumber === 2 ? '0.7' : '1'});
  color: #fdfdfd;
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  line-height: 140%;
  margin-bottom: 116px;
  position: relative;
  :after {
    content: '';
    width: 2px;
    height: 100px;
    background: ${stepNumber === 3 ? '#F4F4F4' : '#9ca5b0'};
    position: absolute;
    top: 46px;
  }
`
)

export const ExperienceStepInfoBlock = styled('div')`
  margin-left: 16px;
  > div {
    margin-top: 5px;
    margin-bottom: 66px;
    @media (max-width: 450px) {
      margin-bottom: 35px;
      :nth-of-type(2n) {
        margin-bottom: 51px;
      }
    }
  }
`

export const ExperienceStepTitle = styled('div')`
  color: #00031a;
  font-family: Manrope;
  font-size: 22px;
  font-weight: 600;
  line-height: 140%;
`
