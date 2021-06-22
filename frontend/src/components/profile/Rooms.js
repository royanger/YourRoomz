import * as React from 'react'
import { useHistory } from 'react-router-dom'
import { ROOMS_QUERY } from '../../graphql/room-queries'
import { graphqlClient } from '../../lib/graphql'
import Loader from 'react-ts-loaders'
import { useRoomContext } from '../../lib/context/roomContext'
import Button from '../Button'

const Rooms = ({ userId }) => {
  const [loading, setLoading] = React.useState(false)
  const [rooms, setRooms] = React.useState()
  const { selectRoom } = useRoomContext()
  const history = useHistory()

  React.useEffect(() => {
    setLoading(true)
    graphqlClient
      .query({
        query: ROOMS_QUERY,
        variables: {
          userId,
        },
      })
      .then(results => {
        setRooms(results.data.findRoomsByUser)
        setLoading(false)
      })
  }, [])

  const handleEditRoom = e => {
    selectRoom(rooms.find(x => x.id === e.target.id))
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
      {rooms?.map(room => {
        return (
          <div className="rooms" key={room.id}>
            <div>{room.name !== null ? room.name : room.roomtype[0].name}</div>
            <div>{room.wallColor ? room.wallColor : ''}</div>
            <div>{room.floorColor ? room.floorColor : ''}</div>
            <div>{room.furniture ? room.furniture.length : '0'}</div>
            <div>{room.cartitems ? room.cartitems.length : '0'}</div>
            <div>
              <Button
                id={room.id}
                variant="small"
                callback={handleEditRoom}
                text="Edit"
              />
            </div>
          </div>
        )
      })}
    </>
  )
}

export default Rooms
