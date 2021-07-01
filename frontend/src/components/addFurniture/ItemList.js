import * as React from 'react'
import Title from '../Title'
import ExistingItemRow from './ExistingItemRow'

const ItemList = ({ furniture }) => {
  return (
    <>
      <div className="container existing-items">
        <div>
          <Title type="h1">Your pre-existing items(s)</Title>

          <p>Here is a list of pre-existing items</p>
        </div>
        <div className="list">
          {furniture?.map(item => {
            return <ExistingItemRow key={item.id} item={item} />
          })}
        </div>
      </div>
    </>
  )
}

export default ItemList
