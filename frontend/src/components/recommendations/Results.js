import * as React from 'react'
import ResultItem from './ResultItem'

const Results = ({ results, currentCategory }) => {
  return (
    <div className="results">
      {results[currentCategory].data.map(item => {
        //  return item.title
        return <ResultItem item={item} key={`${item.asin}=${item.position}`} />
      })}
    </div>
  )
}

export default Results
