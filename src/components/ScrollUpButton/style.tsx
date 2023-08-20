import { styled } from '@mui/system'

export const ArrowTopBtn = styled('div')`
  position: fixed;
  bottom: 60px;
  right: 60px;
  width: 53px;
  height: 53px;
  background: rgba(65, 81, 205, 0.3);
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  transition: all 0.3s;
  color: #fff;
  :hover {
    transform: scale(1.1);
  }
`
