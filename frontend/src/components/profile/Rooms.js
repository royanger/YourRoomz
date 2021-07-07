import * as React from 'react'
import { useHistory } from 'react-router-dom'
import Loader from 'react-ts-loaders'
import { useDispatch } from 'react-redux'
import { useQuery } from 'react-query'
import { setRoomId } from '../../lib/redux/roomSlice'
import RoomRow from './RoomRow'
import { formatRoomObj } from '../../lib/helpers/formatRoomObj'
import { findRoomsByUser } from '../../lib/graphql/roomQueries'

const Rooms = ({ userId }) => {
  const dispatch = useDispatch()

  const rooms = useQuery(['rooms', { userId: userId }], findRoomsByUser)

  const history = useHistory()

  const handleEditRoom = async e => {
    const formattedRoom = formatRoomObj(
      rooms.data.find(x => x.id === e.target.id)
    )
    await dispatch(setRoomId(formattedRoom))
    history.push('/add-room')
  }

  if (rooms.isLoading) {
    return <Loader type="ellipsis" size={50} color="var(--warning)" />
  }
  if (rooms.error) {
    return <div>There was a problem fetching the room list</div>
  }

  return (
    <>
      <div className="rooms">
        <div className="title">
          <div>Room</div>
          <div>Wall Color</div>
          <div>Floor Color</div>
          <div>Furniture</div>
          <div>Cart Items</div>
          <div>Action</div>
        </div>
      </div>
      <div className="container">
        {/* <div className="grid"> */}
        {rooms.data?.map(room => {
          return (
            <RoomRow
              key={room.id}
              room={room}
              handleEditRoom={handleEditRoom}
            />
          )
        })}
        {/* </div> */}
      </div>
    </>
  )
}

export default Rooms
