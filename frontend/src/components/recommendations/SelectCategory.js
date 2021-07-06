import * as React from 'react'

const SelectCategory = ({ results, handleClick }) => {
  return (
    <div>
      <input type="type" name="All Categories" value="Select Categories" />

      <ul>
        {results.map(result => {
          return (
            <li key="result.index" onClick={() => handleClick(result.index)}>
              {result.category}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default SelectCategory
