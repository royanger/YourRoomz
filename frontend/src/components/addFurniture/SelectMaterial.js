import * as React from 'react'

const SelectMaterial = ({ materialList, updateMaterial, material }) => {
  return (
    <div className="material-container">
      <p>Material</p>

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
              className={material === item.material[0].id ? 'selected' : ''}
            >
              <div className="title">{item.material[0].name}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SelectMaterial
