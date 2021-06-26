import * as React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import CurrentFurniture from '../components/recommendations/CurrentFurniture'
import Comparison from '../components/recommendations/Comparison'
import Results from '../components/recommendations/Results'

const params = {
  api_key: '614DE52894DC4AA3B0D1CBCAD6C9A4A2',
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
        console.log(results.data)
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
