import * as React from 'react'
import { ROOM_QUERY } from '../../lib/graphql/room-queries'
import { graphqlClient } from '../../lib/graphql'

const RoomContext = React.createContext()

const RoomProvider = props => {
  const [roomInfo, setRoomInfo] = React.useState(null)
  const [newFurniture, setNewFurniture] = React.useState()

  const refetch = () => {
    console.log('[CONTEXT] Refetching room data')
    if (roomInfo) {
      graphqlClient
        .query({
          query: ROOM_QUERY,
          variables: {
            roomId: roomInfo.id,
          },
        })
        .then(results => {
          setRoomInfo(results.data.findRoomById)
        })
    }
  }

  const updateRoomInfo = room => {
    setRoomInfo(room)
  }

  const updateNewFurniture = furniture => {
    setNewFurniture(furniture)
  }

  const contextValue = {
    roomInfo,
    updateRoomInfo,
    newFurniture,
    updateNewFurniture,
    refetch,
  }

  return (
    <>
      <RoomContext.Provider value={contextValue} {...props} />
    </>
  )
}

const useRoomContext = () => {
  const context = React.useContext(RoomContext)
  if (!context) {
    throw new Error('useAuth must be used within a RoomProvider')
  }
  return context
}

export { RoomProvider, useRoomContext }
