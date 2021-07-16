import * as React from 'react'
import { Link } from 'react-router-dom'

const LoadingRecs = () => {
  return (
    <>
      <div>Loading Recommendations</div>
      <Link to="/add-details">Back</Link>
      <Link to="/recommendations">Next</Link>
    </>
  )
}

export default LoadingRecs
