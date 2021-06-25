import { colorList } from '../../lib/colors'
import { ChromePicker } from 'react-color'

const SelectColor = () => {
  return (
    <section>
      <div className="color-selector">
        <div className="colors">
          {colorList.map(item => {
            return (
              <div
                key={`wall-${item.color}`}
                id={`wall-${item.color}`}
                // onClick={callback}
                className="color-card"
                style={{ backgroundColor: item.color }}
              >
                {item.name}
              </div>
            )
          })}
        </div>
        <div className="picker">
          <ChromePicker
          //   color={wallColor ? wallColor : '#4646B3'}
          //   onChange={handleWallColorPicker}
          />
        </div>
      </div>
    </section>
  )
}

export default SelectColor
