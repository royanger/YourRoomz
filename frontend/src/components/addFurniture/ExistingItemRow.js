import * as React from 'react'
import Tooltip from '../Tooltip'
import { processColor } from '../../lib/helpers/hexToName'
import DeleteIcon from '../icons/DeleteIcon'
import Button from '../Button'

const ExistingItemRow = ({ item, handleDelete }) => {
  const styleName = item.categoryStyles[0].tag.toLowerCase()
  return (
    <div key={item.id} className="item">
      <div>{item.category[0].name}</div>
      <div>
        <div className="color-swatch" style={{ backgroundColor: item.color }}>
          <Tooltip>
            <h5>{processColor(item.color).name}</h5>
            <p>{item.color}</p>
          </Tooltip>
        </div>
      </div>
      <div>
        <div
          className="material-swatch"
          style={{
            backgroundImage: `url('/images/furniture-material/${item.material[0].image}'`,
          }}
        >
          <Tooltip>
            <h5>{item.material[0].name}</h5>
          </Tooltip>
        </div>
      </div>
      <div>
        <div
          className="image"
          style={{
            backgroundImage: `url('/images/furniture-styles/${item.categoryStyles[0].image}')`,
          }}
        >
          <Tooltip>
            <h5>{`${styleName.charAt(0).toUpperCase()}${styleName.slice(
              1
            )}`}</h5>
          </Tooltip>
        </div>
      </div>
      <div className="icons">
        <Button
          callback={() => handleDelete(item.id)}
          id={item.id}
          variant="small icon"
        >
          <DeleteIcon /> <p>Delete</p>
        </Button>
      </div>
    </div>
  )
}

export default ExistingItemRow
