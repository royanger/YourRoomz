import * as React from 'react'
import HeroCard from '../HeroCard'
import { ROOM_TYPE_QUERY } from '../../graphql/roomType'
import { graphqlClient } from '../../lib/graphql'
import Loader from 'react-ts-loaders'
import { useRoomContext } from '../../lib/context/roomContext'
import Title from '../Title'

const RoomGrid = ({ callback }) => {
  const [types, setTypes] = React.useState()
  const { roomInfo } = useRoomContext()

  React.useEffect(() => {
    // avoid trying to query and remount if there is a room selected
    // user is editing/resuming and will be moved to next step
    if (!roomInfo) {
      graphqlClient
        .query({
          query: ROOM_TYPE_QUERY,
        })
        .then(results => {
          setTypes(results.data.getRoomTypes)
        })
    }
  }, [roomInfo])

  if (!types) return <Loader size={50} color="" />

  return (
    <>
      <Title type="h1">Which room are you designing?</Title>
      <p>Pick one room</p>

      <div className="room-grid">
        {types?.map(type => {
          return (
            <HeroCard
              key={type.id}
              to="/"
              id={type.id}
              text={type.name}
              image={type.defaultImage}
              callback={callback}
              variant="room-card"
            />
          )
        })}
      </div>
    </>
  )
}

export default RoomGrid
