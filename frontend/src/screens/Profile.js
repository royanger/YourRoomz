import * as React from 'react'
import { useHistory } from 'react-router-dom'
import { useAuth } from '../lib/context/authContext'
import Rooms from '../components/profile/Rooms'
import Button from '../components/Button'
import { useDispatch } from 'react-redux'
import { clearRoom } from '../lib/redux/roomSlice'
import PlusIcon from '../components/icons/PlusIcon'

const Profile = () => {
  const dispatch = useDispatch()
  const {
    authInfo: { userId },
  } = useAuth()
  //   const { data: rooms, isLoading, isFetching } = useGetRoomsQuery({ userId })

  const history = useHistory()

  // if user clicks to start new room, erase state from Room Context
  const handleResetRoom = () => {
    dispatch(clearRoom())
    history.push('/add-room')
  }

  return (
    <div className="container profile">
      <Button callback={handleResetRoom} variant="addroom small">
        <PlusIcon />
        Add Room
      </Button>

      <h1>Your Rooms</h1>
      <p>Here is a list of all your rooms</p>

      <Rooms userId={userId} />
    </div>
  )
}

export default Profile
