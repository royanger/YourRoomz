import * as React from 'react'

const RoomCard = ({ id, name, image, type, status, handler }) => {
  return (
    <div
      className={`roomcard ${id === type ? 'selected' : ''} ${
        status ? 'active' : 'inactive'
      }`}
      onClick={e => handler(e, id, name)}
    >
      <div className="image-container">
        <img alt={name} src={`/images/rooms/${image}`} />
        <div className="overlay"></div>
      </div>
      <div className="name">{name}</div>
    </div>
  )
}

export default RoomCard
