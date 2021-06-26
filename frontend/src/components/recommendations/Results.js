import * as React from 'react'
import ResultItem from './ResultItem'

const Results = ({ results }) => {
  return (
    <div className="results">
      {results.map(item => {
        return <ResultItem item={item} key={`${item.asin}=${item.position}`} />
      })}
    </div>
  )
}

export default Results
