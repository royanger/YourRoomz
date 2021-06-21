import * as React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../lib/context/authContext'
import Loader from 'react-ts-loaders'
import { graphqlClient } from '../lib/graphql'
import { ROOM_QUERY } from '../graphql/room-queries'
import { axiosConfig as axios } from '../lib/axios'
import IntroText from '../components/IntroText'

const Profile = () => {
  const {
    authInfo: { email, givenName, familyName, displayName },
  } = useAuth()

  const [rooms, setRooms] = React.useState()
  React.useEffect(() => {
    console.log('testing gpl query')
    graphqlClient
      .query({
        query: ROOM_QUERY,
      })
      .then(results => {
        console.log('results', results)
        setRooms(results.data.findRoomById)
      })
  }, [])

  return (
    <div className="container profile">
      {givenName || displayName ? (
        <h1>Hi, {givenName || displayName}</h1>
      ) : (
        <h1>Hi</h1>
      )}

      <h2>Your Rooms!</h2>
      {/* {rooms?.map(room => {
        return <p>Room</p>
      })} */}
      {rooms ? <p>There is a room</p> : <p>You have not yet started a room</p>}

      <Link to="/add-room">Add Room</Link>
    </div>
  )
}

export default Profile
