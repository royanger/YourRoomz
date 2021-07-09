import * as React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../lib/context/authContext'
import ShoppingCartIcon from '../icons/ShoppingCartIcon'
import { useQuery } from 'react-query'
import { getCart } from '../../lib/graphql/cartQueries'

const Cartbutton = ({ handleMenuClose }) => {
  const {
    authInfo: { userId },
  } = useAuth()
  const cart = useQuery(['cart', { userId: userId }], getCart)

  if (!cart.data) {
    return ''
  }
  return (
    <>
      <div className="shoppingcart">
        <Link to="/cart" onClick={() => handleMenuClose}>
          <ShoppingCartIcon />
          {cart.data.cartItems.length > 0 ? (
            <span className="itemcount">{cart.data.cartItems.length}</span>
          ) : (
            ''
          )}
        </Link>
      </div>
    </>
  )
}

export default Cartbutton
