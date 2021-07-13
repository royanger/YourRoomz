import * as React from 'react'
import { Route } from 'react-router-dom'
import Header from '../header/Header'

const PublicRoute = ({ component: Component, children, header, ...rest }) => {
  //   console.log(props)

  if (!header) {
    return (
      <Route
        {...rest}
        render={routerProps => {
          return <Component {...routerProps} />
        }}
      />
    )
  }

  return (
    <>
      <Header />
      <main className="wrapper">
        <Component {...rest} />
      </main>
    </>
  )
}

export default PublicRoute
