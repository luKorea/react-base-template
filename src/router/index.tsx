import React, { lazy } from 'react'
import { RouteObject } from 'react-router-dom'

const NotFound = lazy(() => import('@/views/not-found/index'))

const routes: RouteObject[] = [
  {
    path: '*',
    element: <NotFound />
  }
]

export default routes
