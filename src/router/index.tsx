import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import { ROUTES } from 'constants/routes'

import HomePage from 'pages/Home'
import NotFoundPage from 'pages/NotFound'
import PageUnderConstruction from 'pages/PageUnderConstruction'

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="*" element={<Navigate to={ROUTES.NOT_FOUND_PAGE} replace />} />
      <Route path={ROUTES.HOME_PAGE} element={<HomePage />} />
      <Route path={ROUTES.ABOUT_US_PAGE} element={<HomePage />} />
      <Route path={ROUTES.FEATURES_PAGE} element={<HomePage />} />
      <Route path={ROUTES.CONTACT_PAGE} element={<HomePage />} />
      <Route path={ROUTES.NOT_FOUND_PAGE} element={<NotFoundPage />} />
      <Route path={ROUTES.PAGE_UNDER_CONSTRUCTION} element={<PageUnderConstruction />} />
    </Routes>
  )
}

export default Router
