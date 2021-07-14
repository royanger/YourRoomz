import * as React from 'react'
import CheckBox from '../CheckBox'
import Tooltip from '../Tooltip'
import InfoIcon from '../icons/InfoIcon'

const SimilarItem = ({ categoryStyle, handleClick, selectedStyle }) => {
  const checked = selectedStyle === categoryStyle.id ? true : false
  //   const name = categoryStyle.tag.stringToUpper()

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
        <div className="info">
          <InfoIcon />
          <Tooltip>
            <h5>Style</h5>
            <p>{`${categoryStyle.tag
              .charAt(0)
              .toUpperCase()}${categoryStyle.tag.slice(1)}`}</p>
          </Tooltip>
        </div>

        <img
          alt={categoryStyle.tag}
          src={`/images/furniture-styles/${categoryStyle.image}`}
        />
      </div>
    </>
  )
}

export default SimilarItem
