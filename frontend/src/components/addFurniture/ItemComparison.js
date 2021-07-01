import * as React from 'react'
import SimilarItem from './SimilarItem'

const ItemComparison = ({ styles, handleClick }) => {
  return (
    <>
      <div className="comparison">
        {styles?.map(style => {
          return (
            <SimilarItem
              key={style.id}
              categoryStyle={style}
              handleClick={handleClick}
            />
          )
        })}
      </div>
    </>
  )
}

export default ItemComparison
