import * as React from 'react'

const SelectMaterial = ({ materialList, updateMaterial }) => {
  return (
    <>
      <h4>Material</h4>

      <div className="material-selector">
        {materialList.map(item => {
          return (
            <div
              key={item.id}
              id={item.id}
              onClick={updateMaterial}
              style={{
                backgroundImage: `url('/images/furniture-material/${item.image}'`,
              }}
            >
              {item.name}
            </div>
          )
        })}
      </div>
    </>
  )
}

export default SelectMaterial
