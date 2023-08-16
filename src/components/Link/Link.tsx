import React from 'react'
import { Link as RouterLink } from 'react-router-dom'

interface LinkProps {
  href: string | Record<string, any>
  title: string | React.ReactElement
  target?: '_blank' | '_self'
  onClick?: (e?: Record<string, any>) => void
}

const Link: React.FC<LinkProps> = ({ href, title, onClick, target = '_self', ...rest }) => {
  return (
    <RouterLink to={href} target={target} onClick={onClick} {...rest}>
      {title}
    </RouterLink>
  )
}

export default Link
