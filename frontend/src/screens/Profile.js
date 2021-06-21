import * as React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../lib/context/authContext'
import Rooms from '../components/profile/Rooms'

//import { axiosConfig as axios } from '../lib/axios'
//import IntroText from '../components/IntroText'

const Profile = () => {
  const {
    authInfo: { userId, givenName, displayName },
  } = useAuth()

  return (
    <div className="container profile">
      {givenName || displayName ? (
        <h1>Hi, {givenName || displayName}</h1>
      ) : (
        <h1>Hi</h1>
      )}

      <h2>Your Rooms!</h2>
      <Rooms userId={userId} />

      <Link to="/add-room">Add Room</Link>
    </div>
  )
}

export default Profile
