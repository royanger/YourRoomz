import * as React from 'react'

const SelectMaterial = ({ materialList, updateMaterial }) => {
  return (
    <>
      <h4>Material</h4>

      <div className="material-selector">
        {materialList.map(item => {
          return (
            <div
              key={item.material[0].id}
              id={item.material[0].id}
              onClick={updateMaterial}
              style={{
                backgroundImage: `url('/images/furniture-material/${item.material[0].image}'`,
              }}
            >
              {item.material[0].name}
            </div>
          )
        })}
      </div>
    </>
  )
}

export default SelectMaterial
