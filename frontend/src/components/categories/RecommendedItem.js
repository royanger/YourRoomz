import * as React from 'react'
import CheckBox from '../CheckBox'

const RecommendedItem = ({ category, handleClick, selectedCategories }) => {
  const checked =
    selectedCategories.filter(function (item) {
      return item.categoryId === category.id
    }).length > 0
      ? true
      : false

  console.log(checked)
  return (
    <div
      className="item"
      onClick={() => handleClick(category.id)}
      id={category.id}
      style={{
        backgroundImage: `url('/images/categories/${category.image}')`,
      }}
    >
      <CheckBox checked={checked} />
      <span className="title">{category.name}</span>
    </div>
  )
}

export default RecommendedItem
