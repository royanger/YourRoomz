import * as React from 'react'
import Brand from './Brand'
import Profile from './Profile'
import { useAuth } from '../../lib/context/authContext'
import CartButton from './Cartbutton'
import { Link } from 'react-router-dom'

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
            <CartButton />

            {isAuthenticated ? (
              <Profile />
            ) : (
              <div className="button">
                <Link to="/login">
                  <button className="button">Login</button>
                </Link>
              </div>
            )}
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header
