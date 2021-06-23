import * as React from 'react'
import { colorList } from '../../lib/colors'
import { ChromePicker } from 'react-color'
import Title from '../Title'

const RoomDetails = ({
  callback,
  handleWallColorPicker,
  wallColor,
  handleFloorColorPicker,
  floorColor,
  typeName,
}) => {
  return (
    <>
      <Title type="h1">
        {`What is your ${typeName ? typeName : 'room'} color?`}
      </Title>

      <p>{`Choose your ${
        typeName ? typeName : 'room'
      } wall color and floor color`}</p>

      <section>
        <div className="wall-color">
          {colorList.map(item => {
            return (
              <div
                key={`wall-${item.color}`}
                id={`wall-${item.color}`}
                onClick={callback}
                className="color-card"
                style={{ backgroundColor: item.color }}
              >
                {item.name}
              </div>
            )
          })}
        </div>
        <div className="c-picker">
          <ChromePicker color={wallColor} onChange={handleWallColorPicker} />
        </div>
      </section>
      <section>
        <div className="floor-color">
          {colorList.map(item => {
            return (
              <div
                key={`floor-${item.color}`}
                id={`floor-${item.color}`}
                onClick={callback}
                className="color-card"
                style={{ backgroundColor: item.color }}
              >
                {item.name}
              </div>
            )
          })}
        </div>
        <div className="f-picker">
          <ChromePicker color={floorColor} onChange={handleFloorColorPicker} />
        </div>
      </section>
    </>
  )
}

export default RoomDetails
