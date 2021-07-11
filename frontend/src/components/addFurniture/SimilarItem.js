import * as React from 'react'
import CheckBox from '../CheckBox'

const SimilarItem = ({ categoryStyle, handleClick, selectedStyle }) => {
  const checked = selectedStyle === categoryStyle.id ? true : false

  return (
    <>
      <div
        id={categoryStyle.id}
        key={categoryStyle.id}
        onClick={() => handleClick(categoryStyle.id)}
        className={
          selectedStyle === categoryStyle.id ? 'selected' : 'unselected'
        }
      >
        <CheckBox checked={checked} />
        <img
          alt={categoryStyle.tag}
          src={`/images/furniture-styles/${categoryStyle.image}`}
        />
      </div>
    </>
  )
}

export default SimilarItem
