import * as React from 'react'
import { Link } from 'react-router-dom'

const AddCurrentItems = () => {
  return (
    <>
      <div>AddCurrentItems screen</div>
      <Link to="/room-details">Back</Link>
      <Link to="/add-details">Next</Link>
    </>
  )
}

export default AddCurrentItems
