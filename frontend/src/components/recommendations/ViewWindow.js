import * as React from 'react'
import { Droppable } from 'react-beautiful-dnd'
import Rating from '../Rating'
import TimesIcon from '../icons/TimesIcon'

const Preview = ({ item, handleDelete, index }) => {
  const name = item.title
  const trimmedName = name.length > 80 ? name.substring(0, 80) + '...' : name

  return (
    <div className="preview">
      <div className="close" onClick={() => handleDelete(index)}>
        <TimesIcon />
      </div>
      <img src={item.image} alt={item.title} />
      <h5>{trimmedName}</h5>
      <div className="rating">
        <Rating rating={item.rating} size={25} /> ({item.ratings_total})
      </div>
      <p>${item.prices[0].value}</p>
    </div>
  )
}

const ViewWindow = ({ preview, setPreview }) => {
  const handleRemovePreview = index => {
    const original = Array.from(preview)
    original.splice(1, 1)
    setPreview(original)
  }

  return (
    <>
      <Droppable droppableId="preview-window">
        {(provided, snapshot) => (
          <div
            className="viewwindow"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {preview?.map((item, i) => {
              return (
                <Preview
                  item={item}
                  handleDelete={handleRemovePreview}
                  index={i}
                />
              )
            })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </>
  )
}

export default ViewWindow
