import React, { lazy } from 'react'
import { Navigate, RouteObject } from 'react-router-dom'
import Home from '@/views/front-home/index'

const NotFound = lazy(() => import('@/views/not-found/index'))

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to={'/home'} />
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '*',
    element: (
      <NotFound
        resultType={{
          title: '404',
          status: '404',
          subTitle: 'Sorry, the page you visited does not exist.'
        }}
      />
    )
  }
]

export default routes
