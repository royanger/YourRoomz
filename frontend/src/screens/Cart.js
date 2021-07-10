import * as React from 'react'
// import { useHistory } from 'react-router-dom'
// import { Link } from 'react-router-dom'
import { useAuth } from '../lib/context/authContext'
import { useQuery } from 'react-query'
import { getCart } from '../lib/graphql/cartQueries'
import Title from '../components/Title'
import Button from '../components/Button'
import CartItem from '../components/cart/CartItem'
import ChevronLeftIcon from '../components/icons/ChevronLeftIcon'

const Cart = () => {
  const {
    authInfo: { userId },
  } = useAuth()
  const cart = useQuery(['cart', { userId: userId }], getCart)
  return (
    <>
      <div className="container cart">
        <Button variant="light">
          <ChevronLeftIcon /> Back to Recommendations
        </Button>
        <Title type="h1">Your Cart</Title>
        {cart?.data?.cartItems
          ? `You have ${cart.data.cartItems.length} items in your cart`
          : `You have no items in your cart`}

        <div className="cartitems">
          <div className="subtotal">
            {cart?.data?.cartItems
              ? `Subtotal (${cart.data.cartItems.length} items): $400`
              : `Subtotal (0 items: $0)`}
          </div>
          <div className="items">
            {cart?.data?.cartItems.map(item => {
              return <CartItem item={item} />
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart
