import * as React from 'react'
import Button from '../Button'
import DeleteIcon from '../icons/DeleteIcon'
import ShoppingCartIcon from '../icons/ShoppingCartIcon'

const CartItem = ({ item }) => {
  return (
    <>
      <div className="row">
        <div className="image">
          <img src={item.image} alt={item.name} />
        </div>
        <div className="details">
          <h2>{item.name}</h2>
          <p>{item.rating}</p>
          <p>{item.price}</p>

          <Button variant="small">
            <ShoppingCartIcon /> Purchase from Amazon
          </Button>
        </div>
        <div className="delete">
          <Button variant="light">
            <DeleteIcon />
          </Button>
        </div>
      </div>
    </>
  )
}

export default CartItem
