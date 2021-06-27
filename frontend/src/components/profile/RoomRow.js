import * as React from 'react'
import Button from '../Button'

const RoomRow = ({ room, handleEditRoom }) => {
  return (
    <div className="rooms">
      <div>{room.name !== null ? room.name : room.roomtype[0].name}</div>
      <div>{room.wallColor ? room.wallColor : ''}</div>
      <div>{room.floorColor ? room.floorColor : ''}</div>
      <div>{room.furniture ? room.furniture.length : '0'}</div>
      <div>{room.cartitems ? room.cartitems.length : '0'}</div>
      <div>
        <Button
          id={room.id}
          variant="small"
          callback={handleEditRoom}
          text="Edit"
        />
      </div>
    </div>
  )
}

export default RoomRow
