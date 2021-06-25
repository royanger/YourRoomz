import * as React from 'react'

const ExistingItemRow = ({ item }) => {
  return (
    <div key={item.id} className="">
      {/* <div>{item.id}</div> */}
      <div>{item.category[0].name}</div>
      <div>{item.color}</div>
      <div>{item.material[0].name}</div>
    </div>
  )
}

export default ExistingItemRow
