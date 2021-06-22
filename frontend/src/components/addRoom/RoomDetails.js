import * as React from 'react'
import IntroText from '../IntroText'
import { colorList } from '../../lib/colors'
import { ChromePicker } from 'react-color'

const RoomDetails = ({ callback, handleColorPicker, wallColor }) => {
  return (
    <>
      <IntroText
        variant="heading"
        heading="What is your living room color?"
        paragraph="Choose your living room wall color and floor color"
      />
      <section>
        <div className="wall-color">
          {colorList.map(item => {
            return (
              <div
                key={`wall-${item.color}`}
                id={`wall-${item.color}`}
                onClick={callback}
                class="color-card"
                style={{ backgroundColor: item.color }}
              >
                {item.name}
              </div>
            )
          })}
        </div>
        <div className="c-picker">
          <ChromePicker color={wallColor} onChange={handleColorPicker} />
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
                class="color-card"
                style={{ backgroundColor: item.color }}
              >
                {item.name}
              </div>
            )
          })}
        </div>
        <div className="f-picker">
          <ChromePicker />
        </div>
      </section>
    </>
  )
}

export default RoomDetails
