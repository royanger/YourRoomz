import * as React from 'react'
import ResultItem from './ResultItem'
import { priceRanges } from '../../lib/priceRanges.js'

const Results = ({ results, currentCategory, priceRange }) => {
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

  return (
    <div className="results">
      {filteredResults.map(item => {
        return <ResultItem item={item} key={`${item.asin}=${item.position}`} />
      })}
    </div>
  )
}

export default Results
