import * as React from 'react'
import CheckBox from '../CheckBox'
import Info from '../Info'

const ResultItem = ({ item }) => {
  return (
    <div className="result-item">
      <CheckBox variant="small" />
      <Info variant="small">Test</Info>
      <img src={item.image} alt={item.name} />
      {/* <p>{item.title}</p> */}
    </div>
  )
}

export default ResultItem
