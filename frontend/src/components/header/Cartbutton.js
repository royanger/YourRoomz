import * as React from 'react'
import { Link } from 'react-router-dom'

const Cartbutton = ({ handleMenuClose }) => {
  return (
    <>
      <Link to="/cart" onClick={() => handleMenuClose}>
        <div>🛒 Cart</div>
      </Link>
    </>
  )
}

export default Cartbutton
