import * as React from 'react'
import ResultItem from './ResultItem'
import { priceRanges } from '../../lib/priceRanges.js'

const Results = ({
  results,
  currentCategory,
  priceRange,
  selected,
  setSelected,
}) => {
  let filteredResults
  if (priceRanges[priceRange].id === 'any') {
    // don't filter
    filteredResults = results[currentCategory].data
  } else {
    // filter based on price and table.
    const range = results[currentCategory][priceRanges[priceRange].id]
    const rangeArray = range.split('-')

    filteredResults = results[currentCategory].data.filter(item => {
      if (
        item.price.value >= rangeArray[0] &&
        item.price.value <= rangeArray[1]
      ) {
        return item
      }
    })
  }

  const handleAddToSelected = details => {
    // check if item is already selected
    const selectedTest = selected.map(item => {
      return item.asin === details.asin
    })

    if (selectedTest.includes(true)) {
      // item in selected list, remove from it
      const filtered = selected.filter(item => {
        return item.asin !== details.asin
      })
      setSelected(filtered)
    } else {
      // not selected, add to state
      setSelected(prevSelected => {
        setSelected([...prevSelected, { ...details }])
      })
    }
  }

  return (
    <div className="results">
      {filteredResults.map(item => {
        return (
          <ResultItem
            item={item}
            key={`${item.asin}`}
            addToSelected={handleAddToSelected}
            selected={selected}
          />
        )
      })}
    </div>
  )
}

export default Results
