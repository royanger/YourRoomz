import * as React from 'react'

const Card = ({ text, className, id, image, handler, type, status }) => {
  return (
    <>
      <div
        onClick={e => handler(e, id, text)}
        className={`${className} room-card ${id === type ? 'selected' : ''} ${
          status ? 'active' : 'inactive'
        }`}
        id={id}
      >
        <div className="image-container">
          <div className="overlay"></div>
          <img src={`/images/rooms/${image}`} alt={text} />
        </div>
        <div className="name">
          <p>{text}</p>
        </div>
      </div>
    </>
  )
}

export default Card
