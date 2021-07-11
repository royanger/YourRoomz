import ReactStars from 'react-stars'
import React from 'react'

const Rating = ({ rating, size }) => {
  return (
    <>
      <ReactStars
        count={5}
        size={size}
        color2={'#ffd700'}
        value={rating}
        edit={false}
      />
    </>
  )
}

export default Rating
