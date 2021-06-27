import * as React from 'react'
import { useHistory } from 'react-router-dom'
import { useAuth } from '../lib/context/authContext'
import Rooms from '../components/profile/Rooms'
import Button from '../components/Button'
import { useDispatch } from 'react-redux'
import { clearRoom } from '../lib/redux/roomSlice'

const Profile = () => {
  const dispatch = useDispatch()
  const {
    authInfo: { userId, givenName, displayName },
  } = useAuth()

  const history = useHistory()

  // if user clicks to start new room, erase state from Room Context
  const handleResetRoomContext = () => {
    dispatch(clearRoom())
    history.push('/add-room')
  }

  return (
    <div className="container profile">
      {givenName || displayName ? (
        <h1>Hi, {givenName || displayName}</h1>
      ) : (
        <h1>Hi</h1>
      )}

      <h2>Your Rooms!</h2>
      <Rooms userId={userId} />

      <Button text="Add Room" callback={handleResetRoomContext} />
    </div>
  )
}

export default Profile
