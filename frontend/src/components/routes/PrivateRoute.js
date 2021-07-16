import * as React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useAuth } from '../../lib/context/authContext'
import Header from '../header/Header'
import { LOGIN } from '../../constants/routes'

const PrivateRoute = ({ component: Component, children, ...rest }) => {
  const {
    authInfo: { isAuthenticated },
  } = useAuth()

  return (
    <>
      <Header />
      <main className="wrapper">
        <Route
          {...rest}
          render={routerProps => {
            return isAuthenticated === true ? (
              <Component {...routerProps} />
            ) : (
              <Redirect to={{ pathname: LOGIN }} />
            )
          }}
        />
      </main>
    </>
  )
}

export default PrivateRoute
