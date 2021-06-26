import * as React from 'react'

const RecommendedItem = ({ category, handleClick }) => {
  return (
    <div
      className="item"
      onClick={handleClick}
      id={category.id}
      style={{
        backgroundImage: `url('/images/furniture-styles/${category.image}')`,
      }}
    >
      <span className="title">{category.name}</span>
    </div>
  )
}

export default RecommendedItem
