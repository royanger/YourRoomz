import * as React from 'react'
import { useQuery } from 'react-query'
import { getRoomTypes } from '../../lib/graphql/roomQueries'
import Loader from 'react-ts-loaders'
import RoomCard from './RoomCard'

const RoomGrid = ({ type, setType, setTypeName, setActive }) => {
  const roomTypes = useQuery(['room-types'], getRoomTypes)

  if (roomTypes.isLoading)
    return <Loader type="ellipsis" size={50} color="var(--brand-accent)" />

  const handleClick = (_e, id, name) => {
    const type = roomTypes.data.filter(type => {
      return type.id === id
    })

    if (type && type[0].active === true) {
      setActive(true)
    } else {
      setActive(false)
    }

    setType(id)
    setTypeName(name)
  }

  return (
    <>
      <div className="addroom">
        {roomTypes.data?.map(roomType => {
          return (
            <RoomCard
              key={roomType.id}
              id={roomType.id}
              name={roomType.name}
              image={roomType.defaultImage}
              handler={handleClick}
              type={type}
              status={roomType.active}
            />
          )
        })}
      </div>
    </>
  )
}

export default RoomGrid
