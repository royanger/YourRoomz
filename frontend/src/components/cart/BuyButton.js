import * as React from 'react'
import ShoppingCartIcon from '../icons/ShoppingCartIcon'

const BuyButton = ({ link }) => {
  return (
    <a
      href={`${link}&associate_id=yourroomz-20`}
      target="_blank"
      rel="noreferrer"
    >
      <div className="buy">
        <ShoppingCartIcon /> Purchase from Amazon
      </div>
    </a>
  )
}

export default BuyButton
