import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { HOME } from '../../constants/routes'
import { useAuth } from '../../lib/context/authContext'

const AuthRoute = ({ component: Component, isAuth, ...rest }) => {
  const {
    authInfo: { isAuthenticated },
  } = useAuth()

  return (
    <Route
      {...rest}
      render={routerProps => {
        return !isAuthenticated ? (
          <Component {...routerProps} />
        ) : (
          <Redirect to={{ pathname: HOME }} />
        )
      }}
    />
  )
}

export default AuthRoute
