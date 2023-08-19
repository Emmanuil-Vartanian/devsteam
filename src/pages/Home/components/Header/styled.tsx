import { styled } from '@mui/system'

export const HeaderContainer = styled('header')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
`

export const LogoBlock = styled('a')(
  ({ theme: { palette } }) => `
  display: flex;
  align-items: center;
  width: 17%;
  > span {
      font-family: Inter;
      font-size: 20px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      color: ${palette.devsteam.grey.black};
      ::first-letter {
        color: ${palette.devsteam.primary['90']};
      }
    }
`
)

export const NavBlock = styled('div')`
  width: 83%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const NavLists = styled('nav')(
  ({ theme: { palette } }) => `
  max-width: 360px;
  width: 100%;
  > ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    font-weight: 600;
    color: ${palette.devsteam.grey.black};
    > li {
        opacity: 0.5;
        &.active {
            opacity: 1;
        }
    }
  }
`
)

export const DropdownBlock = styled('div')(
  ({ theme: { palette } }) => `
  display: flex;
  align-items: center;
  font-weight: 600;
  > div:first-of-type {
    border-right: 1px solid ${palette.devsteam.grey.black};
    padding-right: 16px;
    margin-right: 16px; 
  }
`
)

export const ButtonBlock = styled('div')`
  > button:first-of-type {
    margin-right: 16px;
    max-width: 78px;
    padding: 15px 16px;
    border-bottom: none;
  }
`
