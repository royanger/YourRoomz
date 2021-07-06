import * as React from 'react'

const Card = ({ text, className, id, image, handler, type }) => {
  return (
    <>
      <div
        onClick={e => handler(e, id, text)}
        className={`${className} room-card ${id === type ? 'active' : ''}`}
        id={id}
      >
        <img src={`/images/rooms/${image}`} alt={text} />

        <div className="name">{text}</div>
      </div>
    </>
  )
}

export default Card
