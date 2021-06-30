import * as React from 'react'
import Card from './Card'
import { ROOM_TYPE_QUERY } from '../../lib/graphql/roomType'
import { graphqlClient } from '../../lib/graphql'
import Loader from 'react-ts-loaders'
import Title from '../Title'

const RoomGrid = ({ type, setType, setTypeName }) => {
  const [types, setTypes] = React.useState()
  const handleClick = e => {
    setType(e.target.id)
    setTypeName(e.target.innerText)
  }

  React.useEffect(() => {
    graphqlClient
      .query({
        query: ROOM_TYPE_QUERY,
      })
      .then(results => {
        setTypes(results.data.getRoomTypes)
      })
  }, [])

  if (!types) return <Loader size={50} color="" />

  return (
    <>
      <Title type="h1">Which room are you designing?</Title>
      <p>Pick one room</p>

      <div className="room-grid">
        {types?.map(roomType => {
          return (
            <Card
              key={roomType.id}
              id={roomType.id}
              text={roomType.name}
              image={roomType.defaultImage}
              handler={handleClick}
              variant="room-card"
              type={type}
            />
          )
        })}
      </div>
    </>
  )
}

export default RoomGrid
