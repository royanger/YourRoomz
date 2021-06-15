import * as React from 'react'
import { Link } from 'react-router-dom'

const Cartbutton = () => {
  return (
    <>
      <Link to="/cart">
        <div>🛒 Cart</div>
      </Link>
    </>
  )
}

export default Cartbutton
