import * as React from 'react'
import { ROOMS_QUERY } from '../../graphql/room-queries'
import { graphqlClient } from '../../lib/graphql'
import Loader from 'react-ts-loaders'

const Rooms = ({ userId }) => {
  const [rooms, setRooms] = React.useState()

  React.useEffect(() => {
    console.log('testing gpl query')
    graphqlClient
      .query({
        query: ROOMS_QUERY,
        variables: {
          userId,
        },
      })
      .then(results => {
        console.log('results', results.data)
        setRooms(results.data.findRooms)
      })
  }, [])

  if (!rooms) return <Loader size={50} color="" />

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
            <div>{room.caritems ? room.cartitems.length : '0'}</div>
            <div>
              <button>Edit</button>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default Rooms
