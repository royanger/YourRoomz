import * as React from 'react'
import ShoppingCartIcon from '../icons/ShoppingCartIcon'

const BuyButton = ({ link }) => {
  return (
    <a href={link} target="_blank">
      <div className="buy">
        <ShoppingCartIcon /> Purchase from Amazon
      </div>
    </a>
  )
}

export default BuyButton
