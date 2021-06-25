import { colorList } from '../../lib/colors'
import { ChromePicker } from 'react-color'

const SelectColor = ({ callback, idPrefix, handleColorPicker, color }) => {
  console.log('color', color)
  return (
    <section>
      <div className="color-selector">
        <div className="colors">
          {colorList.map(item => {
            const id = idPrefix ? `${idPrefix}-${item.color}` : item
            return (
              <div
                key={id}
                id={id}
                onClick={callback}
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
            color={color ? color : '#4646B3'}
            onChange={handleColorPicker}
          />
        </div>
      </div>
    </section>
  )
}

export default SelectColor
