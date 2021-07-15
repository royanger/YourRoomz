import * as React from 'react'
import { useHistory } from 'react-router-dom'
import { useAuth } from '../lib/context/authContext'
import { roomSelector } from '../lib/redux/roomSlice'
import { useSelector } from 'react-redux'
import { useQueryClient, useQuery, useMutation } from 'react-query'
import { getCart, deleteCartItem } from '../lib/graphql/cartQueries'
import Title from '../components/Title'
import Button from '../components/Button'
import CartItem from '../components/cart/CartItem'
import ChevronLeftIcon from '../components/icons/ChevronLeftIcon'

const Cart = () => {
  const history = useHistory()
  const queryClient = useQueryClient()
  const {
    authInfo: { userId },
  } = useAuth()
  const { roomInfo } = useSelector(roomSelector)
  const cart = useQuery(['cart', { userId: userId }], getCart)
  const [subtotal, setSubtotal] = React.useState()

  if (roomInfo) {
    console.log(roomInfo)
  }

  React.useEffect(() => {
    const subtotal = cart?.data?.cartItems?.reduce(function (acc, current) {
      return acc + current.price
    }, 0)
    setSubtotal(subtotal?.toFixed(2))
  }, [cart])

  const deleteCartMutation = useMutation(deleteCartItem, {
    onMutate: async values => {
      await queryClient.cancelQueries(['cart', { userId: userId }])

      const previousCart = queryClient.getQueryData([
        ['cart', { userId: userId }],
        { userId: userId },
      ])

      queryClient.setQueryData(['cart', { userId: userId }], old => {
        const filtered = old.cartItems.filter(function (item) {
          return item.id !== values.id
        })
        return { ...old, cartItems: [...filtered] }
      })

      return previousCart
    },
    onError: (error, values, context) => {
      console.log('error', error)
    },
    onSettled: () => {
      queryClient.invalidateQueries(['cart', { userId: userId }])
    },
  })

  const handleDeleteItem = id => {
    deleteCartMutation.mutate({
      id: id,
    })
  }

  const handleBack = target => {
    history.push(target)
  }

  return (
    <>
      <div className="container cart">
        {roomInfo?.id ? (
          <Button
            variant="light cart-btn small"
            callback={() => handleBack('/recommendations')}
          >
            <ChevronLeftIcon /> Back to Recommendations
          </Button>
        ) : (
          <Button
            variant="light cart-btn small"
            callback={() => handleBack('/profile')}
          >
            <ChevronLeftIcon /> Back to Rooms
          </Button>
        )}
        <Title type="h1" className="title">
          Your Cart
        </Title>
        {cart?.data?.cartItems
          ? `You have ${cart.data.cartItems.length} items in your cart`
          : `You have no items in your cart`}

        <div className="cartitems">
          <div className="subtotal">
            {cart?.data?.cartItems
              ? `Subtotal (${cart.data.cartItems.length} items): $${subtotal}`
              : `Subtotal (0 items: $0)`}
          </div>
          <div className="items">
            {cart?.data?.cartItems.map(item => {
              return (
                <CartItem
                  item={item}
                  key={item.id}
                  handleDelete={handleDeleteItem}
                />
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart
