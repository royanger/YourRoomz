import * as React from 'react'
import Brand from './Brand'
import CartButton from './Cartbutton'
import Profile from './Profile'
import { useAuth } from '../../lib/context/authContext'

const Header = () => {
  const { logout } = useAuth()
  return (
    <>
      <div>
        <Brand />
        <CartButton />
        <Profile />
        <button onClick={logout}>Logout</button>
      </div>
    </>
  )
}

export default Header
