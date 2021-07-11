import * as React from 'react'
import Button from '../Button'
import DeleteIcon from '../icons/DeleteIcon'
import ShoppingCartIcon from '../icons/ShoppingCartIcon'
import Rating from '../Rating'

const CartItem = ({ item, handleDelete }) => {
  const name = item.name
  const trimmedName = name.length > 80 ? name.substring(0, 80) + '...' : name
  return (
    <>
      <div className="row">
        <div className="image">
          <img src={item.image} alt={item.name} />
        </div>
        <div className="details">
          <h2>{trimmedName}</h2>
          <div className="rating">
            <Rating rating={item.rating} size={35} /> {item.rating_total}
          </div>
          <p>{item.price}</p>

          <Button variant="small amazon">
            <ShoppingCartIcon /> Purchase from Amazon
          </Button>
        </div>
        <div className="delete" onClick={() => handleDelete(item.id)}>
          <Button variant="light icon">
            <DeleteIcon />
          </Button>
        </div>
      </div>
    </>
  )
}

export default CartItem
