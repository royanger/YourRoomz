import * as React from 'react'
import Card from './Card'
import { useQuery } from 'react-query'
import { getRoomTypes } from '../../lib/graphql/roomQueries'
import Loader from 'react-ts-loaders'
import Title from '../Title'

const RoomGrid = ({ type, setType, setTypeName }) => {
  const handleClick = (_e, id, text) => {
    setType(id)
    setTypeName(text)
  }

  const roomTypes = useQuery(['room-types'], getRoomTypes)

  if (roomTypes.isLoading)
    return <Loader type="ellipsis" size={50} color="var(--warning)" />

  return (
    <>
      <Title type="h1">Which room are you designing?</Title>
      <p>Pick one room</p>

      <div className="room-grid">
        {roomTypes.data?.map(roomType => {
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
