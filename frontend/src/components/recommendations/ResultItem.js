import * as React from 'react'

const ResultItem = ({ item }) => {
  return (
    <div
      className="result-item"
      style={{ backgroundImage: `url(${item.image})` }}
    >
      {/* <p>{item.title}</p> */}
    </div>
  )
}

export default ResultItem
