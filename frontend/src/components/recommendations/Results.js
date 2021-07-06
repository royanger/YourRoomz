import * as React from 'react'
import ResultItem from './ResultItem'

const Results = ({ results, currentCategory }) => {
  console.log('results cat', currentCategory)
  console.log(currentCategory)
  return (
    <div className="results">
      {results[currentCategory].results.map(item => {
        //  return item.title
        return <ResultItem item={item} key={`${item.asin}=${item.position}`} />
      })}
    </div>
  )
}

export default Results
