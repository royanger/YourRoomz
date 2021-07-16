import * as React from 'react'
import CheckBox from '../CheckBox'
import Info from '../Info'
import { Draggable } from 'react-beautiful-dnd'
import Rating from '../Rating'

const ResultItem = ({ item, addToSelected, selected, index }) => {
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
    <Draggable draggableId={item.asin} index={index}>
      {provided => {
        return (
          <div
            className={`result-item ${isSelected ? 'selected' : 'unselected'}`}
            onClick={() => addToSelected(details)}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            <CheckBox variant="small" checked={isSelected ? true : false} />
            <Info variant="small">
              <img src={item.image} alt={item.title} />
              <h5>{item.title}</h5>
              <div className="rating">
                <Rating rating={item.rating} size={25} /> ({item.ratings_total})
              </div>
              <p>${item.prices[0].value}</p>
            </Info>
            <img src={item.image} alt={item.name} />
          </div>
        )
      }}
    </Draggable>
  )
}

export default ResultItem
