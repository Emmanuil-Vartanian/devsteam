import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { ROUTES } from 'constants/routes'

import HomePage from 'pages/Home'
import NotFoundPage from 'pages/NotFound'

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFoundPage />} />
      <Route path={ROUTES.HOME_PAGE} element={<HomePage />} />
    </Routes>
  )
}

export default Router
