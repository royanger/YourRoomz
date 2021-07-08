import * as React from 'react'
import CheckBox from '../CheckBox'

const RecommendedItem = ({ category, handleClick, selectedCategories }) => {
  const checked =
    selectedCategories.filter(function (item) {
      return item.categoryId === category.id
    }).length > 0
      ? true
      : false

  return (
    <div
      className="item"
      onClick={() => handleClick(category.id)}
      id={category.id}
    >
      <CheckBox checked={checked} />
      <div className="image-container">
        <img alt="category.name" src={`/images/categories/${category.image}`} />
      </div>
      <div className="title">{category.name}</div>
    </div>
  )
}

export default RecommendedItem
