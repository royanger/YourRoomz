import { useQuery, useQueryClient } from 'react-query'
import { CREATE_FURNITURE } from '../graphql/furniture'
import { graphqlClient } from '../graphql'

// const getRoomsByUserId = async userId => {
//   const results = await graphqlClient.query({
//     query: ROOMS_QUERY,
//     variables: {
//       userId,
//     },
//   })
//   return results.data.findRoomsByUser
// }

const createFurnitureMutation = async ({
  roomId,
  color,
  categoryId,
  materialId,
  styleId,
}) => {
  const results = await graphqlClient.mutate({
    mutation: CREATE_FURNITURE,
    variables: {
      roomId,
      color,
      categoryId,
      materialId,
      styleId,
    },
  })
  return results.data.createFurniture
}

// const updateRoomMutation = async ({ id, typeId, wallColor, floorColor }) => {
//   console.log(id, typeId, wallColor, floorColor)
//   const results = await graphqlClient.mutate({
//     mutation: UPDATE_ROOM,
//     variables: {
//       id: id,
//       typeId: typeId,
//       wallColor: wallColor,
//       floorColor: floorColor,
//       floorMaterialId: '260c8fd9-d830-4946-9f90-e13c11a9ba77',
//     },
//   })
//   return results.data.updateRoom
// }

// function useRoomsById(userId) {
//   return useQuery(['rooms', userId], () => getRoomsByUserId(userId))
// }

export { createFurnitureMutation }
