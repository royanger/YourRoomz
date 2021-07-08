import * as React from 'react'
import CheckSquare from './icons/CheckSquare'
import Square from './icons/Square'

const CheckBox = ({ checked }) => {
  //   console.log('checked', checked)
  //   console.log('test', checked ? 'active' : 'inactive')
  return (
    <div className={`checkbox${checked ? ' active' : ' inactive'}`}>
      {checked ? <CheckSquare /> : <Square />}
    </div>
  )
}

export default CheckBox
