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

  const handleRoomActions = async (id, action) => {
    const formattedRoom = formatRoomObj(rooms.data.find(x => x.id === id))
    await dispatch(setRoomId(formattedRoom))
    if (action === 'edit') {
      history.push('/add-room')
    } else if (action === 'recommendations') {
      history.push('/recommendations')
    }
  }

  if (rooms.isLoading) {
    return <Loader type="ellipsis" size={50} color="var(--brand-accent)" />
  }
  if (rooms.error) {
    return <div>There was a problem fetching the room list</div>
  }

  if (rooms.data.length < 1) {
    return <div className="cta">Please create your first room.</div>
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
              handleRoomActions={handleRoomActions}
            />
          )
        })}
        {/* </div> */}
      </div>
    </>
  )
}

export default Rooms
