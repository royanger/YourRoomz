import * as React from 'react'

const SelectMaterial = ({ material }) => {
  return (
    <>
      <h4>Material</h4>

      <div className="material-selector">
        {material.map(item => {
          return <div key={item.id}>{item.name}</div>
        })}
      </div>
    </>
  )
}

export default SelectMaterial
