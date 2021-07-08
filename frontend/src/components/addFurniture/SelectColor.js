import { colorList } from '../../lib/colors'
import { ChromePicker } from 'react-color'
import CheckIcon from '../icons/CheckIcon'

const SelectColor = ({
  title,
  callback,
  idPrefix,
  handleColorPicker,
  color,
}) => {
  return (
    <section className="color-selector">
      <div>
        <p>{title}</p>
        <div>
          <div>
            <div className="colors">
              {colorList.map((item, i) => {
                const id = idPrefix ? `${idPrefix}-${item.color}` : item.color
                return (
                  <div
                    key={id}
                    id={id}
                    onClick={callback}
                    className={`color-card ${
                      color === item.color ? 'active' : ''
                    } `}
                    style={{
                      '--item-color': item.color,
                    }}
                    aria-label={item.name}
                  >
                    {color === item.color ? <CheckIcon /> : ''}
                  </div>
                )
              })}
            </div>
          </div>
          <div>
            <div className="picker">
              <ChromePicker
                color={color ? color : '#4646B3'}
                onChange={handleColorPicker}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SelectColor
