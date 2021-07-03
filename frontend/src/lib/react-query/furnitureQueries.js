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

function useCategoryStyles(categoryId) {
  return useQuery(['styles', categoryId], () =>
    getCategoryStylesQuery(categoryId)
  )
}

export { createFurnitureMutation, deleteFurnitureMutation, useCategoryStyles }
