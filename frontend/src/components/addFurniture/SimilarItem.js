import * as React from 'react'

const SimilarItem = ({ categoryStyle, handleClick }) => {
  return (
    <>
      <div
        id={categoryStyle.id}
        key={categoryStyle.id}
        onClick={handleClick}
        style={{
          backgroundImage: `url('/images/furniture-styles/${categoryStyle.image}')`,
        }}
      ></div>
    </>
  )
}

export default SimilarItem
