import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import { ROUTES } from 'constants/routes'

import HomePage from 'pages/Home'
import NotFoundPage from 'pages/NotFound'

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="*" element={<Navigate to={ROUTES.HOME_PAGE} replace />} />
      <Route path={ROUTES.HOME_PAGE} element={<HomePage />} />
      <Route path={ROUTES.NOT_FOUND_PAGE} element={<NotFoundPage />} />
    </Routes>
  )
}

export default Router
