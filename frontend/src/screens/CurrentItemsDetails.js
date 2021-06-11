import * as React from 'react'
import { Link } from 'react-router-dom'

const CurrentItemsDetails = () => {
  return (
    <>
      <div>CurrentItemsDetails screen</div>
      <Link to="/add-items">Back</Link>
      <Link to="/category-recommendations">Next</Link>
    </>
  )
}

export default CurrentItemsDetails
