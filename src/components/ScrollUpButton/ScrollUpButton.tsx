import React, { useEffect, useState } from 'react'
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined'

import { ArrowTopBtn } from './style'

import { ChildrenProps } from 'components/LocalizationProvider/LocalizationProvider'

const ScrollUpButton: React.FC<ChildrenProps> = ({ children }) => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible)
  }, [visible])

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop
    if (scrolled > 1000) {
      setVisible(true)
    } else {
      setVisible(false)
    }
  }

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return visible ? (
    <>
      {children}
      <ArrowTopBtn onClick={handleScrollTop}>
        <ArrowUpwardOutlinedIcon />
      </ArrowTopBtn>
    </>
  ) : (
    children
  )
}

export default ScrollUpButton
