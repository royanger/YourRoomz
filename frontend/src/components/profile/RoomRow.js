import * as React from 'react'
import Button from '../Button'
import { processColor } from '../../lib/helpers/hexToName'
import Tooltip from '../Tooltip'
import EditIcon from '../icons/EditIcon'
import EyeIcon from '../icons/EyeIcon'

const Swatch = ({ hex, floorColor }) => {
  if (!hex) return <p>No color</p>

  return (
    <div
      data-text={`${processColor(hex).name}    ${hex}`}
      style={{ backgroundColor: hex }}
      className="swatch"
    >
      <Tooltip>
        <h5>{processColor(hex).name}</h5>
        <p>{hex}</p>
      </Tooltip>
    </div>
  )
}

const RoomRow = ({ room, handleRoomActions }) => {
  return (
    <div className="grid">
      <div className="roomname">
        {room.name !== null ? room.name : room.roomtype[0].name}
      </div>
      <div className="colors">
        <Swatch hex={room.wallColor} />
      </div>
      <div className="colors">
        <Swatch hex={room.floorColor} />
      </div>
      <div>{room.furniture ? room.furniture.length : '0'}</div>
      <div>{room.cartitems ? room.cartitems.length : '0'}</div>
      <div className="icons">
        <Button
          id={room.id}
          variant="small icon"
          callback={() => handleRoomActions(room.id, 'edit')}
        >
          <EditIcon /> <p>Edit Room</p>
        </Button>
        <Button
          id={room.id}
          variant="small icon"
          callback={() => handleRoomActions(room.id, 'recommendations')}
        >
          <EyeIcon /> <p>Recommendations</p>
        </Button>
      </div>
    </div>
  )
}

export default RoomRow
