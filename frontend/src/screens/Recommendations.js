import * as React from 'react'
import { Link } from 'react-router-dom'

const Recommendations = () => {
  return (
    <>
      <div>Recommendations screen</div>
      <Link to="/loading">Back</Link>
      <Link to="/cart">Next</Link>
    </>
  )
}

export default Recommendations
