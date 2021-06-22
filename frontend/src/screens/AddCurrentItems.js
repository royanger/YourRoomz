import * as React from 'react'
import { Link } from 'react-router-dom'
import { useRoomContext } from '../lib/context/roomContext'

const AddCurrentItems = () => {
  const { roomId, selectRoom } = useRoomContext()

  return (
    <>
      <div>AddCurrentItems screen</div>
      <Link to="/room-details">Back</Link>
      <Link to="/add-details">Next</Link>
    </>
  )
}

export default AddCurrentItems
