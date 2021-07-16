import * as React from 'react'
import Button from '../Button'
import DeleteIcon from '../icons/DeleteIcon'
import Rating from '../Rating'
import BuyButton from './BuyButton'

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
          <div className="price">
            ${(Math.round(item.price * 100) / 100).toFixed(2)}
          </div>

          <div className="buyanddelete">
            <BuyButton link={item.link} />
            <div
              className="delete-mobile"
              onClick={() => handleDelete(item.id)}
            >
              <Button variant="light icon">
                <DeleteIcon />
              </Button>
            </div>
          </div>
        </div>
        <div className="delete-desktop" onClick={() => handleDelete(item.id)}>
          <Button variant="light icon">
            <DeleteIcon />
          </Button>
        </div>
      </div>
    </>
  )
}

export default CartItem
