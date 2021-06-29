import * as React from 'react'

const Card = ({ text, className, id, image, handler, type }) => {
  console.log('typee', type)
  console.log('id', id)
  return (
    <>
      <div
        onClick={handler}
        className={`${className} room-card ${id === type ? 'active' : ''}`}
        id={id}
        style={{
          backgroundImage: `url(/images/rooms/${image})`,
          backgroundSize: 'cover',
        }}
      >
        <div className="name">{text}</div>
      </div>
    </>
  )
}

export default Card
