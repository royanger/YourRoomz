import * as React from 'react'
import { Link } from 'react-router-dom'

const RoomDetails = () => {
  return (
    <>
      <div>RoomDetails screen</div>
      <Link to="/room-specs">Back</Link>
      <Link to="/add-items">Next</Link>
    </>
  )
}

export default RoomDetails
