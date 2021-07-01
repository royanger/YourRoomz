import { useQuery, useQueryClient } from 'react-query'
import { ROOMS_QUERY, CREATE_ROOM, UPDATE_ROOM } from '../graphql/room-queries'
import { graphqlClient } from '../graphql'

const getRoomsByUserId = async userId => {
  const results = await graphqlClient.query({
    query: ROOMS_QUERY,
    variables: {
      userId,
    },
  })
  return results.data.findRoomsByUser
}

const createRoomMutation = async ({
  userId,
  typeId,
  wallColor,
  floorColor,
}) => {
  console.log(userId, typeId, wallColor, floorColor)
  const results = await graphqlClient.mutate({
    mutation: CREATE_ROOM,
    variables: {
      userId: userId,
      typeId: typeId,
      wallColor: wallColor,
      floorColor: floorColor,
      floorMaterialId: '260c8fd9-d830-4946-9f90-e13c11a9ba77',
    },
  })
  return results.data.createRoom
}

const updateRoomMutation = async ({ id, typeId, wallColor, floorColor }) => {
  console.log(id, typeId, wallColor, floorColor)
  const results = await graphqlClient.mutate({
    mutation: UPDATE_ROOM,
    variables: {
      id: id,
      typeId: typeId,
      wallColor: wallColor,
      floorColor: floorColor,
      floorMaterialId: '260c8fd9-d830-4946-9f90-e13c11a9ba77',
    },
  })
  return results.data.updateRoom
}

function useRoomsById(userId) {
  return useQuery(['rooms', userId], () => getRoomsByUserId(userId))
}

// function useCreateRoom(userId, typeId, wallColor, floorColor) {
//   return useQueryClient(
//     ['newroom', userId, typeId, wallColor, floorColor],
//     () => createRoom(userId, typeId, wallColor, floorColor)
//   )
// }

export { useRoomsById, createRoomMutation, updateRoomMutation }