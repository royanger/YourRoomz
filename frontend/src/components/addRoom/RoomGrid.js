import * as React from 'react'
import Card from './Card'
import { ROOM_TYPE_QUERY } from '../../graphql/roomType'
import { graphqlClient } from '../../lib/graphql'
import Loader from 'react-ts-loaders'
import { useRoomContext } from '../../lib/context/roomContext'
import Title from '../Title'

const RoomGrid = ({ type, setType, setTypeName }) => {
  const { roomInfo } = useRoomContext()
  const [types, setTypes] = React.useState()

  let classes = 'room-card'

  const handleClick = e => {
    setType(e.target.id)
  }

  React.useEffect(() => {
    graphqlClient
      .query({
        query: ROOM_TYPE_QUERY,
      })
      .then(results => {
        console.log(results.data.getRoomTypes)
        setTypes(results.data.getRoomTypes)
      })
  }, [roomInfo])

  if (!types) return <Loader size={50} color="" />

  return (
    <>
      <Title type="h1">Which room are you designing?</Title>
      <p>Pick one room</p>

      <div className="room-grid">
        {types?.map(roomType => {
          //  return <>{console.log('id', )}</>
          return (
            <Card
              key={roomType.id}
              id={roomType.id}
              text={roomType.name}
              image={roomType.defaultImage}
              handler={handleClick}
              variant={classes}
              type={type}
            />
          )
        })}
      </div>
    </>
  )
}

export default RoomGrid
