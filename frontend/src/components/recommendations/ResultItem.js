import * as React from 'react'
import CheckBox from '../CheckBox'
import Info from '../Info'

const ResultItem = ({ item, addToSelected, selected }) => {
  const details = {
    asin: item.asin,
    name: item.title,
    price: item.price.value,
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
      <Info variant="small">
        <img src={item.image} alt={item.title} />
        <h5>{item.title}</h5>
        <p>Rating: {item.rating}</p>
        <p>Ratings: {item.ratings_total}</p>
        <p>${item.prices[0].value}</p>
      </Info>
      <img src={item.image} alt={item.name} />
    </div>
  )
}

export default ResultItem
