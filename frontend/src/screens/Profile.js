import * as React from 'react'
import { Link } from 'react-router-dom'

const Profile = () => {
  return (
    <>
      <div>Profile screen</div>
      <Link to="/add-room">Add Room</Link>
    </>
  )
}

export default Profile
