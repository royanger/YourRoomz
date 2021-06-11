import * as React from 'react'
import { Link } from 'react-router-dom'

const Cart = () => {
  return (
    <>
      <div>
        Cart
        <Link to="/recommendations">Back</Link>
        <Link to="/">Home</Link>
      </div>
    </>
  )
}

export default Cart
