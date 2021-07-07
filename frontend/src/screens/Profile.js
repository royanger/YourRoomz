import * as React from 'react'
import { useHistory } from 'react-router-dom'
import { useAuth } from '../lib/context/authContext'
import Rooms from '../components/profile/Rooms'
import Button from '../components/Button'
import { useDispatch } from 'react-redux'
import { clearRoom } from '../lib/redux/roomSlice'

const PlusIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      fill="currentColor"
    >
      <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
    </svg>
  )
}

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
