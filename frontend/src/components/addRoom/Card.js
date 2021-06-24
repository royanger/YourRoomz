import * as React from 'react'

const Card = ({ text, className, id, image, handler, type }) => {
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
