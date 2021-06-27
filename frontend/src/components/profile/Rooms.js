import * as React from 'react'
import { useHistory } from 'react-router-dom'
import Loader from 'react-ts-loaders'
import { useDispatch, useSelector } from 'react-redux'
import { getRoomsById, roomsSelector } from '../../lib/redux/roomsSlice'
import { setRoomId } from '../../lib/redux/roomSlice'
import RoomRow from './RoomRow'
import { formatRoomObj } from '../../lib/helpers/formatRoomObj'

const Rooms = ({ userId }) => {
  const dispatch = useDispatch()
  const { loading, roomsList } = useSelector(roomsSelector)

  const history = useHistory()

  React.useEffect(() => {
    dispatch(getRoomsById(userId))
  }, [dispatch, userId])

  const handleEditRoom = async e => {
    const formattedRoom = formatRoomObj(
      roomsList.find(x => x.id === e.target.id)
    )
    await dispatch(setRoomId(formattedRoom))
    history.push('/add-room')
  }

  if (loading) return <Loader size={50} color="" />

  return (
    <>
      <div className="rooms title">
        <div>Room</div>
        <div>Wall Color</div>
        <div>Floor Color</div>
        <div>Furniture</div>
        <div>Cart Items</div>
        <div></div>
      </div>
      {roomsList?.map(room => {
        return (
          <RoomRow key={room.id} room={room} handleEditRoom={handleEditRoom} />
        )
      })}
    </>
  )
}

export default Rooms
