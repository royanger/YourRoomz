import * as React from 'react'
import CheckSquare from './icons/CheckSquare'
import Square from './icons/Square'

const CheckBox = ({ checked, variant }) => {
  return (
    <div className={`checkbox${checked ? ' active' : ' inactive'} ${variant}`}>
      {checked ? <CheckSquare /> : <Square />}
    </div>
  )
}

export default CheckBox
