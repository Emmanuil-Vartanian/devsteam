import React from 'react'
import { useNavigate } from 'react-router-dom'

import { NotFoundBlock } from './style'
import Button from 'components/Button'
import { ROUTES } from 'constants/routes'

const NotFound: React.FC = () => {
  const navigate = useNavigate()

  const handleGoHome = () => {
    navigate(ROUTES.HOME_PAGE)
  }

  return (
    <NotFoundBlock>
      <h1>404</h1>
      <h3>Not found</h3>
      <h5>The resource requested could not be found on this server!</h5>
      <Button title={'hi'} onClick={handleGoHome} />
    </NotFoundBlock>
  )
}

export default NotFound
