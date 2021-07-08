import * as React from 'react'
import Button from '../Button'
import { processColor } from '../../lib/helpers/hexToName'
import Tooltip from '../Tooltip'

const EditIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 576 512"
      fill="currentcolor"
    >
      <path d="M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z" />
    </svg>
  )
}

const EyeIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 576 512"
      fill="currentColor"
    >
      <path d="M288 144a110.94 110.94 0 0 0-31.24 5 55.4 55.4 0 0 1 7.24 27 56 56 0 0 1-56 56 55.4 55.4 0 0 1-27-7.24A111.71 111.71 0 1 0 288 144zm284.52 97.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400c-98.65 0-189.09-55-237.93-144C98.91 167 189.34 112 288 112s189.09 55 237.93 144C477.1 345 386.66 400 288 400z" />
    </svg>
  )
}

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

const RoomRow = ({ room, handleEditRoom }) => {
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
          callback={() => handleEditRoom(room.id)}
        >
          <EditIcon /> Edit Room
        </Button>
        <Button
          id={room.id}
          variant="small icon"
          callback={() => handleEditRoom(room.id)}
        >
          <EyeIcon /> View Recommendations
        </Button>
      </div>
    </div>
  )
}

export default RoomRow
