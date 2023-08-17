import { styled } from '@mui/system'

export const DropdownBlock = styled('div')(
  ({ theme: { palette } }) => `
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  color: ${palette.devsteam.grey.black};
  :hover {
    .listDropdown {
        opacity: 0.6;
    }
    > svg {
        transform: rotate(180deg);
        transition: all 0.3s;
    }
  }
  > svg {
    margin-left: 4px;
    transition: all 0.3s;
  }
`
)

export const ListDropdown = styled('div')(
  ({ theme: { palette } }) => `
  margin: 0;
  padding: 0;
  list-style-type: none;
  opacity: 0;
  position: absolute;
  top: 100%;
  text-transform: uppercase;
  color: ${palette.devsteam.grey.black};
  transition: all 0.3s;
`
)
