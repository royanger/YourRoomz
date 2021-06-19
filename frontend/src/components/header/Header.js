import * as React from 'react'
import Brand from './Brand'
import Button from '../Button'
import Profile from './Profile'
import { useAuth } from '../../lib/context/authContext'

const Header = () => {
  const {
    authInfo: { isAuthenticated },
  } = useAuth()
  return (
    <>
      <header>
        <div className="container">
          <Brand />
          <nav>
            {console.log('testing', isAuthenticated)}
            {isAuthenticated ? (
              <Profile />
            ) : (
              <Button text="Login" to="/login" />
            )}
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header
