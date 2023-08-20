import { styled } from '@mui/system'

export const CategoriesContainer = styled('div')`
  margin: 144px 0 124px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  @media (max-width: 900px) {
    display: block;
    margin: 100px 0 124px;
  }
`

export const CategoryBlock = styled('div')`
  text-align: center;
  @media (max-width: 900px) {
    max-width: 400px;
    margin: 60px auto 0;
  }
`

export const CategoryIcon = styled('div')`
  border-radius: 50%;
  background: rgba(65, 81, 205, 0.15);
  color: #4151cd;
  width: 64px;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 16px;
  > svg {
    font-size: 30px;
  }
`

export const CategoryDescription = styled('div')`
  color: #737373;
  font-size: 16px;
  font-weight: 600;
  line-height: 140%;
  opacity: 0.7;
  margin-top: 12px;
  @media (max-width: 450px) {
    font-size: 14px;
  }
`
