import * as React from 'react'
import CheckBox from '../CheckBox'

const SimilarItem = ({ categoryStyle, handleClick, selectedStyle }) => {
  //   console.log('sel', selectedStyle)
  //   console.log('id', categoryStyle.id)

  const checked = selectedStyle === categoryStyle.id ? true : false

  //   console.log(selectedStyle === categoryStyle.id)

  return (
    <>
      <div
        id={categoryStyle.id}
        key={categoryStyle.id}
        onClick={() => handleClick(categoryStyle.id)}
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
