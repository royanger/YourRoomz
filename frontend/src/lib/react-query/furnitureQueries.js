import { useQuery, useQueryClient } from 'react-query'
import {
  CREATE_FURNITURE,
  GET_CATEGORY_STYLES,
  DELETE_FURNITURE,
} from '../graphql/furniture'
import { graphqlClient } from '../graphql'

const getCategoryStylesQuery = async categoryId => {
  const results = await graphqlClient.query({
    query: GET_CATEGORY_STYLES,
    variables: {
      categoryId,
    },
  })
  return results.data.getCategoryStyles
}

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

const deleteFurnitureMutation = async ({ id }) => {
  const results = await graphqlClient.mutate({
    mutation: DELETE_FURNITURE,
    variables: {
      id,
    },
  })
  return results.data.deleteFurniture
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

function useCategoryStyles(categoryId) {
  return useQuery(['styles', categoryId], () =>
    getCategoryStylesQuery(categoryId)
  )
}

export { createFurnitureMutation, deleteFurnitureMutation, useCategoryStyles }
