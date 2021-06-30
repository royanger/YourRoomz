import * as React from 'react'
import axios from 'axios'
import CurrentFurniture from '../components/recommendations/CurrentFurniture'
import Comparison from '../components/recommendations/Comparison'
import Results from '../components/recommendations/Results'

const params = {
  api_key: 'process.env.REACT_APP_RAINFOREST_API',
  type: 'search',
  amazon_domain: 'amazon.com',
  search_term: 'coffee table',
}

const Recommendations = () => {
  const [results, setResults] = React.useState()

  React.useEffect(() => {
    axios
      .get('https://api.rainforestapi.com/request', { params })
      .then(results => {
        // print the JSON response from Rainforest API
        setResults(results.data.search_results)
      })
      .catch(error => {
        // catch and print the error
        console.log(error)
      })
  }, [])
  return (
    <div className="recommendations">
      <div>Recommendations screen</div>

      <div className="interface">
        <CurrentFurniture />

        <Comparison />

        {results ? <Results results={results} /> : ''}
      </div>
    </div>
  )
}

export default Recommendations
