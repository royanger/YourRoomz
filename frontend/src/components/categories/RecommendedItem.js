import * as React from 'react'

const RecommendedItem = ({ category }) => {
  return (
    <div
      className="item"
      style={{
        backgroundImage: `url('/images/furniture-styles/${category.image}')`,
      }}
    >
      <span className="title">{category.name}</span>
    </div>
  )
}

export default RecommendedItem
