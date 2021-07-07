import { colorList } from '../../lib/colors'
import { ChromePicker } from 'react-color'

const CheckIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      fill="currentColor"
    >
      <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" />
    </svg>
  )
}

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
                  <>
                    <div
                      key={id}
                      id={id}
                      onClick={callback}
                      className={`color-card ${
                        color === item.color ? 'active' : ''
                      } `}
                      style={{
                        // backgroundColor: item.color,
                        '--item-color': item.color,
                      }}
                      //  aria-label={item.name}
                    >
                      {color === item.color ? <CheckIcon /> : ''}
                    </div>
                  </>
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
