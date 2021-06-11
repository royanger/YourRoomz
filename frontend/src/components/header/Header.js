import * as React from 'react'
import Brand from './Brand'
import CartButton from './Cartbutton'
import Profile from './Profile'

const Header = () => {
  return (
    <>
      <div>
        <Brand />
        <CartButton />
        <Profile />
      </div>
    </>
  )
}

export default Header
