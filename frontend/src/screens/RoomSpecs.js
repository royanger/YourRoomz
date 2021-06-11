import * as React from 'react'
import { Link } from 'react-router-dom'

const RoomSpecs = () => {
  return (
    <>
      <div>Room Specs screen</div>
      <Link to="/add-room">Back</Link>
      <Link to="/room-details">Next</Link>
    </>
  )
}

export default RoomSpecs
