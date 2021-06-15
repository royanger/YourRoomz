import * as React from 'react'
import Brand from './Brand'
import CartButton from './Cartbutton'
import Profile from './Profile'
import { useAuth } from '../../lib/context/authContext'

const Header = () => {
  const { logout } = useAuth()
  return (
    <>
      <header>
        <div className="container">
          <Brand />
          <nav>
            <CartButton />
            <Profile />
            <button onClick={logout}>Logout</button>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header
