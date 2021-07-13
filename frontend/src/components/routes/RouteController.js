import React from 'react'
import { Route } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import AuthRoute from './AuthRoute'
import PublicRoute from './PublicRoute'

const RouteController = props => {
  const { routeType, ...routeProps } = props
  return (
    <>
      {routeType === 'public' && <PublicRoute {...routeProps} />}
      {/* {routeType === 'public' && <Route {...routeProps} />} */}
      {routeType === 'private' && <PrivateRoute {...routeProps} />}
      {routeType === 'auth' && <AuthRoute {...routeProps} />}
    </>
  )
}
export default RouteController
