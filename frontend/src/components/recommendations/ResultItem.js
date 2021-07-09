import * as React from 'react'
import CheckBox from '../CheckBox'
import Info from '../Info'

const ResultItem = ({ item, addToSelected, selected }) => {
  const details = {
    asin: item.asin,
    name: item.title,
    price: item.prices[0].value,
    rating: item.rating,
    rating_total: item.ratings_total,
    link: item.link,
    image: item.image,
  }

  const isSelected = selected.some(
    selectedItem => selectedItem.asin === item.asin
  )

  return (
    <div
      className={`result-item ${isSelected ? 'selected' : 'unselected'}`}
      onClick={() => addToSelected(details)}
    >
      <CheckBox variant="small" checked={isSelected ? true : false} />
      <Info variant="small">Test</Info>
      <img src={item.image} alt={item.name} />
    </div>
  )
}

export default ResultItem
