import * as React from 'react'
import { Link } from 'react-router-dom'
import ShoppingCartIcon from '../icons/ShoppingCartIcon'

const Cartbutton = ({ handleMenuClose }) => {
  return (
    <>
      <div className="shoppingcart">
        <Link to="/cart" onClick={() => handleMenuClose}>
          <ShoppingCartIcon />
        </Link>
      </div>
    </>
  )
}

export default Cartbutton
